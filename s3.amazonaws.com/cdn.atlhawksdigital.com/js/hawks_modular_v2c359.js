$(".allContent, .loadingContent").show();
$(function () {
  doOnPageReady();
  setTimeout(function () {
    $(".loadingContent").fadeOut();
  }, 500);
});

function onPlayerReady(event) {
  event.target.playVideo();
}

function doOnPageReady() {
  handleDynamicCampaigns();
  getAPIFeed_hp(".mainNewsSection .mediaBlocksList", 3, "atlanta-hawks");
  getAPIFeed_hp(".videoSection .mediaBlocksList", 3, "atlanta-hawks", "video");
  createYoutubePlaylistSection("PL9fP9LtVo2M4o-ZwyGfIDavSzvRnKmEeF", ".ytSection.hawksAFSection .mediaBlocksList");
}

var ytScriptTag = document.createElement("script");
ytScriptTag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(ytScriptTag, firstScriptTag);
var ytAPIReady = false;
function onYouTubeIframeAPIReady() {
  ytAPIReady = true;
}

function handleDynamicCampaigns() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://s3.amazonaws.com/cdn.atlhawksdigital.com/json/current_hawkscom_campaign_assignments.json?rand=" + Math.random(), true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var campaignsData = JSON.parse(request.responseText);
      handlePrimaryCarousel(campaignsData);
      handleVertPromos(campaignsData);

      $(".psCTAContainer a.btn").each(function () {
        var thisPSABtn = $(this);
        if (thisPSABtn.text().toLowerCase() == "contact a rep") {
          if ($("#memFormModal")) {
            thisPSABtn.click(function (e) {
              e.preventDefault();
              $("#memFormModal").modal("show");
            });
          }
        }
      });
    } else {
      console.log("error retrieving campaign data");
    }
  };
  request.onerror = function () {
    console.log("error retrieving campaign data");
  };
  request.send();
}

function handlePrimaryCarousel(campaignsData_param) {
  if ($("#heroCarousel").length > 0 && !$("#heroCarousel").hasClass("heroCarouselWasSetUp")) {
    var campaignsData = campaignsData_param;
    if (campaignsData["assignments"]["hp_xl_1"] || campaignsData["assignments"]["hp_xl_2"] || campaignsData["assignments"]["hp_xl_3"]) {
      if (campaignsData["assignments"]["hp_xl_1"]) {
        addHeroSlide("hp_xl_1", campaignsData);
      }

      if (campaignsData["assignments"]["hp_xl_2"]) {
        addHeroSlide("hp_xl_2", campaignsData);
      }

      if (campaignsData["assignments"]["hp_xl_3"]) {
        addHeroSlide("hp_xl_3", campaignsData);
      }

      if ($(".hawksPromoSlideWrapper").length > 1) {
        setUpCarousel_promoSpotlight("#heroCarousel");
      }
    }
  }
}

function addHeroSlide(slotCode_param, campaignsData_param) {
  var objThisAssignment = campaignsData_param.assignments[slotCode_param];
  if (objThisAssignment) {
    var objThisCampaign = campaignsData_param.campaigns[objThisAssignment.cuid];
    if (objThisAssignment && objThisCampaign) {
      if (campaignNotExpired(objThisAssignment)) {
        var bgImgPath = objThisCampaign.hero_livetext_img_path;
        var bgImgMobPath = objThisCampaign.hero_livetext_mob_img_path;
        var headline = objThisCampaign.headline;
        var subhead = objThisCampaign.subhead;
        var description = objThisCampaign.description;

        var cta1Txt = objThisCampaign.cta_text;
        var tURL_cta1 = objThisAssignment.trackingurl_herocta1;

        var cta2Txt = objThisCampaign.cta2_text;
        var tURL_cta2 = objThisAssignment.trackingurl_herocta2;

        var graphicImgPath = objThisCampaign.hero_graphic_img_path;
        var graphicImgPathMob = objThisCampaign.hero_graphic_mob_img_path;
        var tURL_graphic = objThisAssignment.trackingurl_herographic;

        var campaignName = objThisCampaign.name !== "" ? objThisCampaign.name : "Atlanta Hawks";

        var slideHTML = "";
        if (bgImgPath != "" && headline != "" && description != "") {
          var subheadHTML = subhead != "" ? `<h3 class="psSubheadline">${subhead}</h3>` : "";

          var ctaHTML = "";
          if ((cta1Txt != "" && tURL_cta1 != "") || (cta2Txt != "" && tURL_cta2 != "")) {
            var cta1HTML = cta1Txt != "" ? `<a href="${tURL_cta1}" class="btn btn-white">${cta1Txt}</a>` : "";
            var cta2HTML = cta2Txt != "" ? `<a href="${tURL_cta2}" class="btn btn-yellow">${cta2Txt}</a>` : "";
            ctaHTML = `<div class="psCTAContainer">${cta1HTML}${cta2HTML}</div>`;
          }

          var partnerLogoHTML = "";
          if (
            objThisAssignment.cuid == 934 ||
            objThisAssignment.cuid == 972 ||
            objThisAssignment.cuid == 973 ||
            objThisAssignment.cuid == 974 ||
            objThisAssignment.cuid == 978
          ) {
            partnerLogoHTML = `<div class='psPartnerLogo'><img src='https://cdn.nba.com/teams/uploads/sites/1610612737/2025/08/Ticketmaster-Logo-Blue-RGB.png' alt='Ticketmaster' /></div>`;
          }

          slideHTML = `
            <div class="hawksPromoSlideWrapper hawksPromoSlideWrapper-liveText">
              <div class="hawksPromoSlide">
                <div class="psImgWrapper">
                  <img class="desktopOnly" src="${bgImgPath}" alt="${campaignName}"/>
                  <img class="mobileOnly" src="${bgImgMobPath}" alt="${campaignName}"/>
                </div>
                <div class="psContent-outer">
                  <div class="psContent-inner">
                    <h2 class="psHeadline">${headline}</h2>
                    ${subheadHTML}
                    <p class="psDescription">${description}</p>
                    ${ctaHTML}
                  </div>
                </div>
              </div>
              ${partnerLogoHTML}
            </div>
          `;

          $("#heroCarousel").append(hSanitize(slideHTML));
        } else if (graphicImgPath != "" && graphicImgPathMob != "") {
          if (tURL_graphic != "") {
            slideHTML = `
              <div class="hawksPromoSlideWrapper hawksPromoSlideWrapper-graphic">
                <a href="${tURL_graphic}">
                  <div class="hawksPromoSlide">
                    <div class="psImgWrapper">
                      <img class="desktopOnly" src="${graphicImgPath}" alt="${campaignName}"/>
                      <img class="mobileOnly" src="${graphicImgPathMob}" alt="${campaignName}" />
                    </div>
                  </div>
                </a>
              </div>
            `;
          } else {
            slideHTML = `
              <div class="hawksPromoSlideWrapper hawksPromoSlideWrapper-graphic">
                <div class="hawksPromoSlide">
                  <div class="psImgWrapper">
                    <img class="desktopOnly" src="${graphicImgPath}" alt="${campaignName}"/>
                    <img class="mobileOnly" src="${graphicImgPathMob}" alt="${campaignName}" />
                  </div>
                </div>
              </div>
            `;
          }

          $("#heroCarousel").append(hSanitize(slideHTML));
        } else {
          console.log(`error: campaign is missing data for ${slotCode_param}`);
        }
      }
    }
  }
}

function handleVertPromos(campaignsData_param) {
  if ($("#featuredVertPromos").length > 0) {
    var campaignsData = campaignsData_param;

    var vertCount = 0;
    if (campaignsData["assignments"]["hp_vert_1"]) {
      vertCount++;
    }
    if (campaignsData["assignments"]["hp_vert_2"]) {
      vertCount++;
    }
    if (campaignsData["assignments"]["hp_vert_3"]) {
      vertCount++;
    }
    if (campaignsData["assignments"]["hp_vert_4"]) {
      vertCount++;
    }
    if (campaignsData["assignments"]["hp_vert_5"]) {
      vertCount++;
    }
    if (campaignsData["assignments"]["hp_vert_6"]) {
      vertCount++;
    }

    if (vertCount >= 4) {
      addVertPromo("hp_vert_1", campaignsData);
      addVertPromo("hp_vert_2", campaignsData);
      addVertPromo("hp_vert_3", campaignsData);
      addVertPromo("hp_vert_4", campaignsData);
      addVertPromo("hp_vert_5", campaignsData);
      addVertPromo("hp_vert_6", campaignsData);

      //handle carousel
      setUpCarousel_vertBlocks("#featuredVertPromos");
    } else {
      $("#featuredVertPromossection").remove();
    }
  }
}

function addVertPromo(slotCode_param, campaignsData_param) {
  var objThisAssignment = campaignsData_param.assignments[slotCode_param];
  if (objThisAssignment) {
    var objThisCampaign = campaignsData_param.campaigns[objThisAssignment.cuid];
    if (objThisAssignment && objThisCampaign) {
      if (campaignNotExpired(objThisAssignment)) {
        var campaignName = objThisCampaign.name !== "" ? objThisCampaign.name : "Atlanta Hawks";
        var campaignTURL = objThisAssignment.trackingurl;
        var vertImgPath = objThisCampaign.vert_card_img_path;

        var vertBlockHTML = "";
        if (vertImgPath != "") {
          if (campaignTURL != "") {
            vertBlockHTML =
              '<div class="hawksMediaBlockWrapper hawksMediaBlockWrapper-vertical"><a href="' +
              campaignTURL +
              '"><div class="mediaBlock"><div class="mediaBlockImageWrapper"><img src="' +
              vertImgPath +
              '" alt="' +
              campaignName +
              '" /></div></div></a></div>';
          } else {
            vertBlockHTML =
              '<div class="hawksMediaBlockWrapper hawksMediaBlockWrapper-vertical"><div class="mediaBlock"><div class="mediaBlockImageWrapper"><img src="' +
              vertImgPath +
              '" alt="' +
              campaignName +
              '" /></div></div></div>';
          }

          $(".hawksMediaBlockWrapper-vertical-placeholder").remove();
          $(".mediaBlocksList#featuredVertPromos").append(hSanitize(vertBlockHTML));
        } else {
          console.log("error: campaign is missing data for " + slotCode_param);
        }
      }
    }
  }
}

function campaignNotExpired(objAssignment_param) {
  var tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  var thisCampaignExpireTime = objAssignment_param.expire_datetime === "" ? tomorrowDate : new Date(objAssignment_param.expire_datetime);
  return getClientTimeConvertedToEST() < thisCampaignExpireTime.toISOString();
}

function getClientTimeConvertedToEST() {
  var estUTCOffset = -5.0;

  var clientDate = new Date();
  var utc = clientDate.getTime() + clientDate.getTimezoneOffset() * 60000;
  var estTime = new Date(utc + 3600000 * estUTCOffset);
  return estTime.toISOString();
}

function createYoutubePlaylistSection(strPlaylistID_param, strMediaListSeletor_param) {
  $.getJSON(
    "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,status&maxResults=10&playlistId=" +
      strPlaylistID_param +
      "&key=AIzaSyBcbzCViN5WyfFMrOoNsvTav6uguF7NB54",
    function (apiResponse) {
      var vidCount = 0;
      $.each(apiResponse.items, function (i, playlistItem) {
        if (vidCount < 3 && playlistItem.status.privacyStatus != "private") {
          vidCount++;
          var thisYTBlockHTML =
            '<div class="hawksMediaBlockWrapper" data-contenttype="video"><a class="btnPlayYTVid" href="#" data-toggle="modal" data-target="#vidModal" data-youtube-id="{ytVideoID}"><div class="mediaBlock"><div class="mediaBlockImageWrapper">{ytVideoThumbnailURL}</div><div class="mediaBlockTitleWrapper"><h4>{ytVideoTitle}</h4></div></div></a></div></div>';
          thisYTBlockHTML = thisYTBlockHTML.replaceAll("{ytVideoID}", playlistItem.snippet.resourceId.videoId);
          thisYTBlockHTML = thisYTBlockHTML.replaceAll("{ytVideoTitle}", playlistItem.snippet.title);
          if (playlistItem.snippet.thumbnails.maxres) {
            thisYTBlockHTML = thisYTBlockHTML.replaceAll("{ytVideoThumbnailURL}", '<img src="' + playlistItem.snippet.thumbnails.maxres.url + '" />');
          } else {
            thisYTBlockHTML = thisYTBlockHTML.replaceAll("{ytVideoThumbnailURL}", '<img src="' + playlistItem.snippet.thumbnails.high.url + '" />');
          }
          $(strMediaListSeletor_param).append(hSanitize(thisYTBlockHTML));
        }
      });

      $(".btnPlayYTVid").each(function () {
        if (!$(this).hasClass("ytClickIsSetup")) {
          var thisBtn = $(this);
          thisBtn.click(function () {
            var ytID = thisBtn.attr("data-youtube-id");

            $("#vidModal").on("show.bs.modal", function (e) {
              $("body").addClass("blackModalBackdrop");
              $(e.currentTarget).unbind("show.bs.modal");
              if (ytAPIReady) {
                var objPlayer;
                objPlayer = new YT.Player("myPlayer", {
                  videoId: ytID,
                  playerVars: {
                    playsinline: 1,
                    controls: 1,
                  },
                  events: {
                    onReady: onPlayerReady,
                  },
                });

                $("#vidModal").on("hide.bs.modal", function (e) {
                  $(e.currentTarget).unbind("hide.bs.modal");
                  objPlayer.stopVideo();
                  objPlayer.destroy();
                  $("body").removeClass("blackModalBackdrop");
                });
              }
            });

            $(thisBtn).addClass("ytClickIsSetup");
          });
        }
      });

      setUpCarousel_mediaBlocks(".hawksAFSection .mediaBlocksList");
    }
  );
}

function getAPIFeed_hp(strFeedContainerSelector_param, intStoryCount_param, strFreeformTags_param_opt, strTypes_param_opt) {
  var strFreeformTags = strFreeformTags_param_opt || "";
  var strTypes = strTypes_param_opt || "";
  strTypes_param_opt = strTypes_param_opt || "";
  var apiFeedURL =
    "https://content-api-prod.nba.com/public/1/leagues/nba/teams/1610612737/content?count=" +
    intStoryCount_param +
    "&term-post_tag=" +
    encodeURIComponent(strFreeformTags) +
    "&types=" +
    encodeURIComponent(strTypes);

  $.ajax({
    url: apiFeedURL,
    type: "GET",
    dataType: "json",
    error: function () {
      console.log("error trying to connect ... ");
    },
    success: function (apiResults) {
      $.each(apiResults.results.items, function (i, contentPiece) {
        var thisContentType = contentPiece.type;
        var thisContentTitle = truncateStringAtSpace(contentPiece.title, 90);
        var thisPubDate = new Date(contentPiece.date);
        var strDate = arrMonthNames[thisPubDate.getMonth()].substr(0, 3) + " " + thisPubDate.getDate() + ", " + thisPubDate.getFullYear();
        var thisContentURL = contentPiece.permalink;

        var thisContentImgURL;
        if (contentPiece.featuredImage && typeof contentPiece.featuredImage == "string") {
          thisContentImgURL = contentPiece.featuredImage;
        } else if (
          contentPiece.featuredImage.src &&
          contentPiece.featuredImage.src !== undefined &&
          typeof contentPiece.featuredImage.src == "string"
        ) {
          thisContentImgURL = contentPiece.featuredImage.src;
        } else {
          thisContentImgURL = "https://cdn.nba.com/teams/uploads/sites/1610612737/2022/06/evo_16x9_black_bg.jpg";
        }

        var contentBlockHTML =
          '<div class="hawksMediaBlockWrapper" data-itemid="' +
          contentPiece.id +
          '" data-contenttype="' +
          thisContentType +
          '"><a href="' +
          thisContentURL +
          '"><div class="mediaBlock">';
        contentBlockHTML += '<div class="mediaBlockImageWrapper"><img src="' + thisContentImgURL + '"></div>';
        contentBlockHTML += '<div class="mediaBlockTitleWrapper"><h4>' + thisContentTitle + "</h4></div></div></a></div>";
        $(strFeedContainerSelector_param).append(contentBlockHTML);
      });

      if ($(strFeedContainerSelector_param + " .mediaBlock").length === 0) {
        $(strFeedContainerSelector_param).append('<div class="noContentMsg">No content found. Check back soon.</div>');
      } else {
        setUpCarousel_mediaBlocks(strFeedContainerSelector_param);
      }
    },
  });
}

function setUpCarousel_promoSpotlight(strSliderSelector_hero) {
  var transitionEffect = window.innerWidth >= 768 ? "fade" : "slide";

  $(strSliderSelector_hero + " .hawksPromoSlideWrapper").wrap("<div class='swiper-slide' />");
  $(strSliderSelector_hero + " .swiper-slide").wrapAll('<div class="swiper-container" />');
  $(strSliderSelector_hero + " .swiper-container").wrapInner('<div class="slidesContainer swiper-wrapper" />');
  $(strSliderSelector_hero).append('<div class="swiper-pagination"></div>');
  var slideCount = $(strSliderSelector_hero + " .hawksPromoSlide").length;
  var objSwiper_bc = new Swiper(strSliderSelector_hero + " .swiper-container", {
    effect: transitionEffect,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      enabled: true,
      delay: 7000,
      pauseOnMouseEnter: true,
      disableOnInteraction: true,
    },
    slidesPerView: 1,
    loop: true,
    speed: 750,
    slidesPerGroup: 1,
    spaceBetween: 0,
    simulateTouch: false,
  });
}

function setUpCarousel_vertBlocks(strSliderSelector) {
  if (window.innerWidth < 768 && $(strSliderSelector).find(".hawksMediaBlockWrapper").length > 0) {
    $(strSliderSelector + " .hawksMediaBlockWrapper").wrap("<div class='swiper-slide' />");
    $(strSliderSelector + " .swiper-slide").wrapAll('<div class="swiper-container" />');
    $(strSliderSelector + " .swiper-container").wrapInner('<div class="slidesContainer swiper-wrapper" />');
    var objSwiper_vertblocks = new Swiper(strSliderSelector + " .swiper-container", {
      freeMode: true,
      navigation: false,
      slidesPerView: 2.4,
      spaceBetween: 10,
      slidesOffsetBefore: 10,
      slidesOffsetAfter: 10,
    });
  }
}

function setUpCarousel_mediaBlocks(strSliderSelector) {
  if (window.innerWidth < 768 && $(strSliderSelector).find(".hawksMediaBlockWrapper").length > 0) {
    $(strSliderSelector + " .hawksMediaBlockWrapper").wrap("<div class='swiper-slide' />");
    $(strSliderSelector + " .swiper-slide").wrapAll('<div class="swiper-container" />');
    $(strSliderSelector + " .swiper-container").wrapInner('<div class="slidesContainer swiper-wrapper" />');
    var objSwiper_mediablocks = new Swiper(strSliderSelector + " .swiper-container", {
      freeMode: true,
      navigation: false,
      slidesPerView: 1.25,
      spaceBetween: 15,
      slidesOffsetBefore: 15,
      slidesOffsetAfter: 15,
    });
  }
}
