var arrWeekdays = new Array(7);
arrWeekdays[0] = "Sunday";
arrWeekdays[1] = "Monday";
arrWeekdays[2] = "Tuesday";
arrWeekdays[3] = "Wednesday";
arrWeekdays[4] = "Thursday";
arrWeekdays[5] = "Friday";
arrWeekdays[6] = "Saturday";

var arrMonthNames = new Array(7);
arrMonthNames[0] = "January";
arrMonthNames[1] = "February";
arrMonthNames[2] = "March";
arrMonthNames[3] = "April";
arrMonthNames[4] = "May";
arrMonthNames[5] = "June";
arrMonthNames[6] = "July";
arrMonthNames[7] = "August";
arrMonthNames[8] = "September";
arrMonthNames[9] = "October";
arrMonthNames[10] = "November";
arrMonthNames[11] = "December";

$(function () {
  showTopMsgByPage();
  insertBackToTop();
  printFAQsIfFound();
  dateGateContentIfFound();
  handleMembershipForm();

  if ($(".presentedByEntitlementStickyWrapper").length > 0) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 600) {
        $(".presentedByEntitlementStickyWrapper").fadeIn(500);
      } else {
        $(".presentedByEntitlementStickyWrapper").fadeOut(500);
      }
    });
  }
});

function showTopMsgByPage() {
  var selectedScheduleYear;
  var thisIsSchedulePage = location.pathname == "/hawks/schedule" || location.pathname == "/hawks/static-pages/schedule/schedule.html";
  var thisIsSGTPage = location.pathname == "/hawks/tickets/games" || location.pathname == "/hawks/static-pages/tickets/sgt.html";
  var thisIsTicketsPage = location.pathname == "/hawks/tickets" || location.pathname == "/hawks/static-pages/tickets/tickets.html";
  var thisIsPromoPage = location.pathname == "/hawks/tickets/promotions" || location.pathname == "/static-pages/tickets/promotions.html";
  if (thisIsSchedulePage || thisIsSGTPage || thisIsTicketsPage || thisIsPromoPage) {
    $.getJSON("https://s3.amazonaws.com/cdn.atlhawksdigital.com/api/v1/global_settings_latest.json", function (localSettingsData) {
      if (
        thisIsSchedulePage &&
        localSettingsData.global_settings.top_msg_active_sch == 1 &&
        localSettingsData.global_settings.top_msg_html_sch != ""
      ) {
        $(".railedContent:first").prepend(localSettingsData.global_settings.top_msg_html_sch);
      }
      if (thisIsSGTPage && localSettingsData.global_settings.top_msg_active_sgt == 1 && localSettingsData.global_settings.top_msg_html_sgt != "") {
        $(".railedContent:first").prepend(localSettingsData.global_settings.top_msg_html_sgt);
      }
      if (thisIsTicketsPage && localSettingsData.global_settings.top_msg_active_mt == 1 && localSettingsData.global_settings.top_msg_html_mt != "") {
        $(".railedContent:first").prepend(localSettingsData.global_settings.top_msg_html_mt);
      }
      if (
        thisIsPromoPage &&
        localSettingsData.global_settings.top_msg_active_promo == 1 &&
        localSettingsData.global_settings.top_msg_html_promo != ""
      ) {
        if ($(".hawksRibbonHeader")) {
          $(".hawksRibbonHeader:first").after(localSettingsData.global_settings.top_msg_html_promo);
        } else {
          $("#nba-nav").after(localSettingsData.global_settings.top_msg_html_promo);
        }
      }
    });
  }
}

function get4DigitSeasonIDFromYear(intYear) {
  var strTwoDigitYear = intYear.toString().substring(2, 4);
  var intTwoDigitYearNext = parseInt(strTwoDigitYear) + 1;
  return strTwoDigitYear + intTwoDigitYearNext;
}

/* start- and enddate format should be mm-dd-yyyy hh:mm
(use 24-hour format aka military time).
Set to empty (e.g. data-startdate="") to show
immediately and/or indefinitely. */
function dateGateContentIfFound() {
  if ($(".dateGatedContent").length > 0) {
    $.getJSON("https://worldtimeapi.org/api/timezone/America/New_York", function (timeData) {
      var currentDateTime_dgc = new Date(timeData.datetime);

      var eastTimezoneOffset = 300;
      if (timeData.utc_offset == "-04:00") {
        eastTimezoneOffset = 240;
      }

      var userTimezoneOffset = (currentDateTime_dgc.getTimezoneOffset() - eastTimezoneOffset) * 60000;
      currentDateTime_dgc = new Date(currentDateTime_dgc.getTime() + userTimezoneOffset);

      $(".dateGatedContent").each(function () {
        var thisContent = $(this);

        var thisContentStartDate = new Date();
        if ($(this).attr("data-startdate") !== undefined && $(this).attr("data-startdate") !== "") {
          thisContentStartDate = new Date($(this).attr("data-startdate"));
        }

        var thisContentEndDate = new Date();
        thisContentEndDate.setDate(thisContentEndDate.getDate() + 1); //add a day so it's in future unless set below
        if ($(this).attr("data-enddate") !== undefined && $(this).attr("data-enddate") !== "") {
          thisContentEndDate = new Date($(this).attr("data-enddate"));
        }

        if (currentDateTime_dgc >= thisContentStartDate && currentDateTime_dgc < thisContentEndDate) {
          thisContent.show();
        }
      });
    });
  }
}

/*truncates the given string to <intMaxLength> characters
and appends an elipsis if truncated.*/
function truncateStringAtSpace(strText, intMaxLength) {
  var maxLength = intMaxLength || 100;
  var strTextTrimmed;
  if (strText.length <= maxLength) {
    strTextTrimmed = strText;
  } else {
    strTextTrimmed = strText.substr(0, maxLength);
    strTextTrimmed = strTextTrimmed.substr(0, Math.min(strTextTrimmed.length, strTextTrimmed.lastIndexOf(" "))) + " ...";
  }
  return strTextTrimmed;
}

function getQuerystringVal(strName) {
  var vars = [],
    dicParams,
    url;
  url = window.location.href.split("#")[0];
  var params = url.slice(url.indexOf("?") + 1).split("&");
  for (var i = 0; i < params.length; i++) {
    dicParams = params[i].split("=");
    vars.push(dicParams[0]);
    vars[dicParams[0]] = decodeURIComponent(dicParams[1]);
  }
  return vars[strName] !== undefined ? vars[strName] : "";
}

function insertBackToTop() {
  if ($("body").hasClass("add-back-to-top") && $(".back-to-top").length === 0) {
    $("body").append(
      '<a href="javascript:;" class="btn btn-lg back-to-top hawksStickyBtn" role="button" data-placement="left"><span class="glyphicon glyphicon-chevron-up"></span></a>'
    );
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
  $(".back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      100
    );

    return false;
  });
}

function printFAQsIfFound() {
  $(".hawksAccordionFAQsContainer").each(function (i, objFAQsContainer) {
    $(this).addClass("hawksFAQContainer");
    var useSubtleStyle = $(objFAQsContainer).attr("data-subtle") == "true";
    console.log("setting up faqs: " + useSubtleStyle);
    $(".faq", this).each(function (j, objFAQ) {
      var thisCategory = $(objFAQ).attr("data-category") || "General";
      var thisCategoryID =
        thisCategory
          .replace(/[^\w\s]/gi, "")
          .replace(/ /g, "")
          .toLowerCase() +
        "_" +
        i;
      var thisHashtag = $(objFAQ).attr("data-hashtag") || "question_" + "_" + i + "_" + j;
      var thisQuestion = $(objFAQ).find(".question").html();
      var thisAnswer = $(objFAQ).find(".answer").html();

      if ($('h3[data-category="' + thisCategory + '"]').length === 0) {
        $(this)
          .closest(".hawksAccordionFAQsContainer")
          .append(
            '<h3 class="faqCategoryHeader" data-category="' +
              thisCategory +
              '">' +
              thisCategory +
              '</h3><div id="' +
              thisCategoryID +
              '" class="panel-group"></div>'
          );
      }

      var faqHTML = "";
      faqHTML += '<div class="panel panel-default hawksFAQQuestion">';
      faqHTML +=
        '<div class="panel-heading collapsed" data-toggle="collapse" data-parent="#' + thisCategoryID + '" data-target="#' + thisHashtag + '">';
      faqHTML += '<h4 class="panel-title">';
      if (!useSubtleStyle) {
        faqHTML += '<a class="accordion-toggle"><span class="qaText">Q: </span>' + thisQuestion + "</a>";
      } else {
        faqHTML += '<a class="accordion-toggle">' + thisQuestion + "</a>";
      }
      faqHTML += "</h4>";
      faqHTML += "</div>";
      faqHTML += '<div id="' + thisHashtag + '" class="panel-collapse collapse">';
      if (!useSubtleStyle) {
        faqHTML += '<div class="panel-body"><span class="qaText"><strong>A:</strong> </span>' + thisAnswer + "</div>";
      } else {
        faqHTML += '<div class="panel-body">' + thisAnswer + "</div>";
      }
      faqHTML += "</div>";
      faqHTML += "</div>";

      $("#" + thisCategoryID).append(faqHTML);

      //remove the simple version of the question
      $(this).remove();
    });

    if ($(".faqCategoryHeader").length === 1) {
      $(".faqCategoryHeader").remove();
    }

    $(this).show();
  });
}

function getTimeFromDate(date_param) {
  var strReturnVal = "";
  var strAMPM = "AM";
  var intHour = date_param.getHours();
  if (intHour >= 12) {
    strAMPM = "PM";
  }
  if (intHour > 12) {
    intHour = intHour - 12;
  }
  var intMinute = date_param.getMinutes();
  var strMinute = intMinute.toString();
  if (intMinute < 10) {
    strMinute = "0" + strMinute;
  }
  strReturnVal = intHour + ":" + strMinute + " " + strAMPM;
  return strReturnVal;
}

function getAPIFeed(strFeedContainerSelector_param, intStoryCount_param_opt, strFreeformTags_param_opt, strNoResultsMsg_param_opt) {
  var intStoryCount = intStoryCount_param_opt || 12;
  var strFreeformTags = strFreeformTags_param_opt || "";
  var strNoResultsMsg = strNoResultsMsg_param_opt || "Check back soon for coverage.";

  var apiFeedURL =
    "https://content-api-prod.nba.com/public/1/leagues/nba/teams/1610612737/content?count=" +
    intStoryCount +
    "&term-post_tag=" +
    encodeURIComponent(strFreeformTags);

  $.ajax({
    url: apiFeedURL,
    type: "GET",
    dataType: "json",
    error: function () {
      console.log("error trying to connect ... ");
    },
    success: function (apiResults) {
      $(strFeedContainerSelector_param).append('<div class="apiFeed"></div>');
      $.each(apiResults.results.items, function (i, contentPiece) {
        var thisContentType = contentPiece.type;
        var thisContentTitle = truncateStringAtSpace(contentPiece.title, 90);
        var thisPubDate = new Date(contentPiece.date);
        var strDate = arrMonthNames[thisPubDate.getMonth()].substr(0, 3) + " " + thisPubDate.getDate() + ", " + thisPubDate.getFullYear();
        var thisContentURL = contentPiece.permalink;

        var thisContentImgURL;
        if (contentPiece.featuredImage.src && contentPiece.featuredImage.src !== undefined) {
          thisContentImgURL = contentPiece.featuredImage.src;
        } else {
          thisContentImgURL = "https://cdn.nba.com/teams/uploads/sites/1610612737/2022/06/evo_16x9_black_bg.jpg";
        }

        var contentBlockHTML =
          '<div class="col-sm-4 apiBlockContainer" data-itemid="' +
          contentPiece.id +
          '" data-contenttype="' +
          thisContentType +
          '"><div class="apiBlock">';
        contentBlockHTML +=
          '<div class="apiBlockContentImageContainer"><a href="' +
          thisContentURL +
          '" target="_blank"><img src="' +
          thisContentImgURL +
          '"></a></div>';
        contentBlockHTML += '<div class="apiBlockContentType ' + thisContentType + '"></div><div class="dateContainer">' + strDate + "</div>";
        contentBlockHTML += '<div class="apiBlockTextSection">';
        contentBlockHTML += '<h4><a href="' + thisContentURL + '" target="_blank">' + thisContentTitle + "</a></h4>";
        contentBlockHTML += "</div></div></div>";
        $(strFeedContainerSelector_param + " .apiFeed").append(contentBlockHTML);
      });

      if ($(strFeedContainerSelector_param + " .apiFeed .apiBlock").length === 0) {
        $(strFeedContainerSelector_param + " .apiFeed").append('<div class="noContentMsg">' + strNoResultsMsg + "</div>");
      }
    },
  });
}

function htmlDecode(input) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = input;
  return textArea.value;
}

function htmlEncode(input) {
  const textArea = document.createElement("textarea");
  textArea.innerText = input;
  return textArea.innerHTML.split("<br>").join("\n");
}

function handleMembershipForm() {
  if ($(".membershipFormContainer").length === 1) {
    $("body").addClass("memFormPage");
    var predeterminedProduct =
      $(".membershipFormContainer").attr("data-product") !== undefined ? $(".membershipFormContainer").attr("data-product") : "Unspecified";

    if ($("#memFormModal").length == 0) {
      $(".membershipFormContainer").after(
        '<div class="modal fade nba-inv-ignore" id="memFormModal" tabindex="-1" role="dialog" aria-hidden="true"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> </div> <div class="modal-body"> <div class="memModalWrapper"> <div class="memModalContentContainer"> <div class="memModalHeader"> <img class="memModalLogo" src="https://s3.amazonaws.com/cdn.atlhawksdigital.com/img/logos/hawks/atl_hawks_global_logo.png" /> <p>Fill out the form below and we\'ll be in touch!</p> </div> <div class="memFormWrapper"> <div class="formContainer" id="memFormContainer" data-product="' +
          predeterminedProduct +
          '"></div> </div> </div> </div> </div> </div> </div> </div>'
      );
    }

    var myScript = document.createElement("script");
    myScript.src = "https://sfapi.formstack.io/FormEngine/Scripts/Main.js?d=Ot3kT_NATcYDXspx7DjE-Ag285rZlvkH_qP2fQgJZ4xEShwRAZ8AC4SaoWScRsrY";
    myScript.id = "jsFastForms";
    document.getElementById("memFormContainer").appendChild(myScript);

    $("select").change(function () {
      if ($(this).val() !== "") {
        $(this).removeClass("unselected");
      } else {
        $(this).addClass("unselected");
      }
    });

    $(".btnSubmitMemVeneerForm").click(function () {
      if (validateForm("memVeneerForm")) {
        $("#memVeneerForm").submit();
      }
    });
  }
}
