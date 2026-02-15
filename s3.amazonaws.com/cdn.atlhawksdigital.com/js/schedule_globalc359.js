(function () {
  const URL_ENDPOINT_GLOBAL_SETTINGS = "https://s3.amazonaws.com/cdn.atlhawksdigital.com/api/v1/global_settings_latest.json";

  $.getJSON(URL_ENDPOINT_GLOBAL_SETTINGS, function (globalSettingsData) {
    const GLOB_CURRENT_SEASON_YEAR = globalSettingsData.global_settings.current_season_year;
    const SELECTED_SCHEDULE_YEAR = getQuerystringVal("season") ? getQuerystringVal("season") : GLOB_CURRENT_SEASON_YEAR;
    const URL_ENDPOINT_SCHED = `https://s3.amazonaws.com/cdn.atlhawksdigital.com/api/v1/${SELECTED_SCHEDULE_YEAR}_schedule_latest.json`;
    const URL_ENDPOINT_SEASON_SETTINGS = `https://s3.amazonaws.com/cdn.atlhawksdigital.com/api/v1/${SELECTED_SCHEDULE_YEAR}_seasonal_settings_latest.json`;

    // BEGIN standard schedule implementation
    // we ignore any additional schedule containers if more than one exists
    const $objSchedContainer_standard = $(".hawksSchedContainer_standard").first();
    const objLocalSettings_standard = createLocalSchedSettings_standard($objSchedContainer_standard);
    $.getJSON(URL_ENDPOINT_SCHED, function (jsonScheduleData) {
      console.log("getting games...");
      addGames_standard($objSchedContainer_standard, objLocalSettings_standard, jsonScheduleData);
    }).fail(function () {
      handleFetchFailure_standard($objSchedContainer_standard, objLocalSettings_standard);
    });

    // --------------------------- Schedule Carousel ---------------------------
    const $objCarouselContainer = $(".hawksSchedContainer_carousel").first();
    if ($objCarouselContainer) {
      schedCarousel_Init(URL_ENDPOINT_SCHED, $objCarouselContainer);
      handleFevoBtns();
    }

    // --------------------------- GameTracker ---------------------------
    const $objGTContainer = $("#game-tracker-container").first();
    if ($objGTContainer) {
      // Endpoints and constants
      const FEATURED_GAME_ENDPOINT = "https://s3.amazonaws.com/cdn.atlhawksdigital.com/api/v1/currently_featured_game_latest.json";
      function GT_LIVE_ENDPOINT(gid) {
        return `https://s3.amazonaws.com/cdn.atlhawksdigital.com/api/v1/live/games/${gid}.json`;
      }
      const GT_POLL_MS = 15000;

      function gt_formatGameClock(gameClock, period) {
        if (!gameClock || gameClock === "PT00M00.00S") return "";
        const m = parseInt((gameClock.match(/PT(\d+)M/) || [])[1] || "0", 10);
        const s = Math.floor(parseFloat((gameClock.match(/M(\d+(?:\.\d+)?)S/) || [])[1] || "0"));
        return `Q${period} ${m}:${String(s).padStart(2, "0")}`;
      }

      function gt_formatGameDateTimeUTCStr(utcStr) {
        const d = new Date(utcStr);
        return d.toLocaleString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          timeZoneName: "short",
        });
      }

      function gt_getTeamLogoURL(teamID) {
        return `https://cdn.nba.com/logos/nba/${teamID}/primary/D/logo.svg`;
      }

      function gt_buildStationsList(stations) {
        if (!Array.isArray(stations) || stations.length === 0) return "";
        const normalized = stations.map((s, idx) => {
          const type = (s.station_type || "").toLowerCase();
          const code = (s.station_code || "").toLowerCase();
          const hasCta = s.cta_link && s.cta_link.trim();

          let ctaText = "Learn More";
          if (hasCta && type === "tv") {
            ctaText = "Tap to Watch";
          } else if (hasCta && type === "radio") {
            ctaText = "Tap to Listen";
          }

          return {
            type: type,
            code: code,
            scope: s.is_natl ? "National" : "Regional",
            isNatl: Number(!!s.is_natl),
            shortName: s.station_short_name || s.station_name || "",
            name: s.station_name || "",
            logo: s.station_logo_path || "",
            url: hasCta ? s.cta_link : s.station_url || "",
            ctaText: ctaText,
            origIndex: idx,
          };
        });
        const groups = [
          { heading: "Watch", type: "tv" },
          { heading: "Listen", type: "radio" },
        ];

        function renderGroup(label, type) {
          const items = normalized.filter((s) => s.type === type).sort((a, b) => a.isNatl - b.isNatl || a.origIndex - b.origIndex);
          if (!items.length) return "";
          const lis = items
            .map((s) => {
              const start = s.url
                ? `<a class="stationItem" href="${s.url}" target="_blank" rel="noopener" data-stationtype="${s.type}" data-stationcode="${s.code}">`
                : `<div class="stationItem">`;
              const end = s.url ? `</a>` : `</div>`;
              return `${start}
                  <div class="stationLogoContainer"><img src="${s.logo}" alt="${s.name}"></div>
                  <div class="stationMeta"><div><h4 class="desktopOnly">${s.name}</h4><h4 class="mobileOnly">${s.shortName}</h4><p>${s.ctaText}</p></div></div>
                ${end}`;
            })
            .join("");
          return `
              <div class="stationGroup stationGroup-${type}">
                <div class="stationGroupHeading">${label}</div>
                <div class="stationList">${lis}</div>
              </div>
            `;
        }
        return groups.map((g) => renderGroup(g.heading, g.type)).join("");
      }

      function gt_buildGameTracker(canon) {
        const isHawksHome = canon.homeTeam.teamId === 1610612737;
        const oppTeam = isHawksHome ? canon.awayTeam : canon.homeTeam;
        const gameDateTime = canon.gameTimeUTC ? gt_formatGameDateTimeUTCStr(canon.gameTimeUTC) : "";
        const template = `
            <div class="hawksGTWrapper" data-gamestate="${canon.gameStatus}">
              <div class="gtGameInfo">
                <h2 class="sr-only">Hawks vs. ${oppTeam.teamCity} ${oppTeam.teamName} on ${gameDateTime}</h2>

                <div class="teamInfo teamInfo-away">
                  <img src="${gt_getTeamLogoURL(canon.awayTeam.teamId)}" alt="${canon.awayTeam.teamCity} ${
                    canon.awayTeam.teamName
                  } logo" loading="lazy" decoding="async"/>
                  <div class="teamName">${canon.awayTeam.teamName}</div>
                  <div class="teamScore" data-side="away">${canon.awayTeam.score}</div>
                </div>

                <div class="middleInfo">
                  ${
                    canon.gameStatusText
                      ? `<div class="gameStatusContainer" aria-live="polite">${canon.gameStatusText}</div>`
                      : `<div class="gameStatusContainer" aria-live="polite"></div>`
                  }
                  ${
                    canon.gameStatus === 3 && canon.recapUrl
                      ? `<a class="btn btn-lightGray recapLink" href="${canon.recapUrl}" target="_blank" rel="noopener">Game Recap</a>`
                      : ""
                  }
                </div>

                <div class="teamInfo teamInfo-home">
                  <img src="${gt_getTeamLogoURL(canon.homeTeam.teamId)}" alt="${canon.homeTeam.teamCity} ${
                    canon.homeTeam.teamName
                  } logo" loading="lazy" decoding="async"/>
                  <div class="teamName">${canon.homeTeam.teamName}</div>
                  <div class="teamScore" data-side="home">${canon.homeTeam.score}</div>
                </div>
              </div>

              <div class="broadcastInfoWrapper">
                <div class="broadcastInfoContainer">${canon.stationsHTML || ""}</div>
              </div>
            </div>
          `;
        return template;
      }

      function gt_makeCanonFromSchedule(game) {
        const isHome = game.home_away === "H";
        const oppTid = game.opp_tid;

        const homeTeam = isHome
          ? { teamCity: "Atlanta", teamName: "Hawks", teamId: 1610612737, score: game.hawks_score || 0 }
          : { teamCity: game.opp_tc, teamName: game.opp_tn, teamId: oppTid, score: game.opp_score || 0 };

        const awayTeam = isHome
          ? { teamCity: game.opp_tc, teamName: game.opp_tn, teamId: oppTid, score: game.opp_score || 0 }
          : { teamCity: "Atlanta", teamName: "Hawks", teamId: 1610612737, score: game.hawks_score || 0 };

        const gameState = Number(game.game_state || 1);

        let defaultStatusText = "";
        if (gameState === 1) defaultStatusText = game.str_time || "";
        if (gameState === 3) defaultStatusText = "Final";

        return {
          gid: game.gid,
          gameStatus: gameState,
          gameStatusText: defaultStatusText,
          gameTimeUTC: game.datetime_eastern ? new Date(game.datetime_eastern.replace(" ", "T") + "Z").toISOString() : "",
          homeTeam,
          awayTeam,
          recapUrl: game.recap_url || "",
        };
      }

      function gt_applyLiveOverrides(canon, liveGame) {
        if (!liveGame) return canon;
        const c = { ...canon };
        if (typeof liveGame.gameStatus === "number") c.gameStatus = liveGame.gameStatus;
        const clock = gt_formatGameClock(liveGame.gameClock, liveGame.period);
        c.gameStatusText = clock || liveGame.gameStatusText || c.gameStatusText;

        if (liveGame.homeTeam && liveGame.awayTeam) {
          c.homeTeam = {
            teamCity: liveGame.homeTeam.teamCity,
            teamName: liveGame.homeTeam.teamName,
            teamId: liveGame.homeTeam.teamId,
            score: liveGame.homeTeam.score,
          };
          c.awayTeam = {
            teamCity: liveGame.awayTeam.teamCity,
            teamName: liveGame.awayTeam.teamName,
            teamId: liveGame.awayTeam.teamId,
            score: liveGame.awayTeam.score,
          };
        }

        c.gameTimeUTC = liveGame.gameTimeUTC || c.gameTimeUTC;
        return c;
      }

      function gt_updateMetaMirrors(gameState, statusText) {
        const aria = document.getElementById("gt-status-aria");
        if (aria) aria.textContent = statusText || "";

        const mStatus = document.querySelector('meta[name="gt:status"]');
        if (mStatus) mStatus.setAttribute("content", statusText || "");

        const mState = document.querySelector('meta[name="gt:game_state"]');
        if (mState) mState.setAttribute("content", String(gameState));
      }

      function gt_patchMinimalUI(container, canon) {
        const root = container.querySelector(".hawksGTWrapper");
        if (!root) return;

        const prevState = root.getAttribute("data-gamestate");
        const nextState = String(canon.gameStatus);
        if (prevState !== nextState) root.setAttribute("data-gamestate", nextState);

        const homeScoreEl = root.querySelector('.teamScore[data-side="home"]') || root.querySelector(".teamInfo-home .teamScore");
        const awayScoreEl = root.querySelector('.teamScore[data-side="away"]') || root.querySelector(".teamInfo-away .teamScore");
        if (homeScoreEl && String(homeScoreEl.textContent) !== String(canon.homeTeam.score)) {
          homeScoreEl.textContent = canon.homeTeam.score;
        }
        if (awayScoreEl && String(awayScoreEl.textContent) !== String(canon.awayTeam.score)) {
          awayScoreEl.textContent = canon.awayTeam.score;
        }

        const statusEl = root.querySelector(".gameStatusContainer");
        if (statusEl && statusEl.textContent !== (canon.gameStatusText || "")) {
          statusEl.textContent = canon.gameStatusText || "";
        }

        gt_updateMetaMirrors(canon.gameStatus, canon.gameStatusText || "");
      }

      let gt_pollTimer = null;
      let gt_finalCount = 0;
      function gt_startPoll(targetSelector, gid) {
        if (gt_pollTimer) clearInterval(gt_pollTimer);
        const container = document.querySelector(targetSelector);
        if (!container) return;

        function pollOnce() {
          $.ajax({
            url: GT_LIVE_ENDPOINT(gid),
            method: "GET",
            dataType: "json",
            cache: false,
            success: function (liveResp) {
              try {
                const liveGame =
                  liveResp && liveResp.scoreboard && Array.isArray(liveResp.scoreboard.games) && liveResp.scoreboard.games[0]
                    ? liveResp.scoreboard.games[0]
                    : null;
                if (!liveGame) return;

                const canon = gt_applyLiveOverrides(
                  {
                    gid,
                    gameStatus: liveGame.gameStatus,
                    gameStatusText: liveGame.gameStatusText || "",
                    gameTimeUTC: liveGame.gameTimeUTC,
                    homeTeam: liveGame.homeTeam,
                    awayTeam: liveGame.awayTeam,
                  },
                  liveGame,
                );

                gt_patchMinimalUI(container, canon);

                if (Number(canon.gameStatus) === 3) {
                  gt_finalCount += 1;
                  if (gt_finalCount >= 2) {
                    clearInterval(gt_pollTimer);
                    gt_pollTimer = null;
                  }
                } else {
                  gt_finalCount = 0;
                }
              } catch (e) {
                // keep polling on errors
              }
            },
            error: function () {
              // ignore transient failures; keep polling
            },
          });
        }

        pollOnce();
        gt_pollTimer = setInterval(pollOnce, GT_POLL_MS);
      }

      function gt_renderFromScheduleThenLive(targetSelector, gid) {
        const $target = $(targetSelector);
        if ($target.length === 0) return;

        // 1) Fetch schedule first
        $.ajax({
          url: URL_ENDPOINT_SCHED,
          method: "GET",
          dataType: "json",
          success: function (resp) {
            const games = resp && resp.schedule && Array.isArray(resp.schedule.games) ? resp.schedule.games : [];
            const schedGame = games.find((g) => String(g.gid) === String(gid));
            if (!schedGame) return;

            const stationsHTML = gt_buildStationsList(schedGame.stations || []);
            let canon = gt_makeCanonFromSchedule(schedGame);
            canon.stationsHTML = stationsHTML;

            $target.html(gt_buildGameTracker(canon));

            // 2) Enhance with live endpoint once
            $.ajax({
              url: GT_LIVE_ENDPOINT(gid),
              method: "GET",
              dataType: "json",
              success: function (liveResp) {
                try {
                  if (liveResp && liveResp.scoreboard && Array.isArray(liveResp.scoreboard.games) && liveResp.scoreboard.games[0]) {
                    const liveGame = liveResp.scoreboard.games[0] || null;
                    canon = gt_applyLiveOverrides(canon, liveGame);
                    $target.html(gt_buildGameTracker(canon));
                  }
                } catch (e) {
                  // show schedule-only if merge fails
                } finally {
                  gt_startPoll(targetSelector, gid);
                }
              },
              error: function () {
                gt_startPoll(targetSelector, gid);
              },
            });
          },
          error: function () {
            // Fallback: live-only render + start poll
            $.ajax({
              url: GT_LIVE_ENDPOINT(gid),
              method: "GET",
              dataType: "json",
              success: function (liveResp) {
                if (liveResp && liveResp.scoreboard && Array.isArray(liveResp.scoreboard.games) && liveResp.scoreboard.games[0]) {
                  const liveGame = liveResp.scoreboard.games[0];
                  const canon = gt_applyLiveOverrides(
                    {
                      gid: gid,
                      gameStatus: liveGame.gameStatus,
                      gameStatusText: liveResp.gameStatusText || "",
                      gameTimeUTC: liveGame.gameTimeUTC,
                      homeTeam: liveGame.homeTeam,
                      awayTeam: liveGame.awayTeam,
                      stationsHTML: "",
                    },
                    liveGame,
                  );
                  $target.html(gt_buildGameTracker(canon));
                }
                gt_startPoll(targetSelector, gid);
              },
              error: function () {
                // Total failure—do nothing
              },
            });
          },
        });
      }

      function gt_bootstrapFeaturedGame(targetSelector) {
        const $container = $(targetSelector);
        if ($container.length === 0) return;

        try {
          const qsGid = typeof getQuerystringVal === "function" && getQuerystringVal("gid") ? String(getQuerystringVal("gid")).trim() : "";
          if (qsGid) {
            gt_renderFromScheduleThenLive(targetSelector, qsGid);
            return;
          }
        } catch (e) {}

        $.ajax({
          url: FEATURED_GAME_ENDPOINT,
          method: "GET",
          dataType: "json",
          cache: false,
          success: function (resp) {
            try {
              const arr = resp && resp.currently_featured_game;
              const first = Array.isArray(arr) && arr.length ? arr[0] : null;
              const gid = first && first.gid ? String(first.gid) : null;
              if (!gid) return;
              gt_renderFromScheduleThenLive(targetSelector, gid);
            } catch (e) {}
          },
          error: function () {},
        });
      }

      // Kickoff GT only if container exists
      gt_bootstrapFeaturedGame("#game-tracker-container");

      // Optional accessibility/meta mirrors (only if container exists)
      if (!document.getElementById("gt-status-aria")) {
        const liveDiv = document.createElement("div");
        liveDiv.id = "gt-status-aria";
        liveDiv.setAttribute("class", "sr-only");
        liveDiv.setAttribute("aria-live", "polite");
        document.body.appendChild(liveDiv);
      }

      if (!document.querySelector('meta[name="gt:status"]')) {
        const m1 = document.createElement("meta");
        m1.setAttribute("name", "gt:status");
        m1.setAttribute("content", "");
        document.head.appendChild(m1);
      }

      if (!document.querySelector('meta[name="gt:game_state"]')) {
        const m2 = document.createElement("meta");
        m2.setAttribute("name", "gt:game_state");
        m2.setAttribute("content", "");
        document.head.appendChild(m2);
      }
    }

    // --------------------------- promo cal ---------------------------
    const $objSchedContainer_promocal = $(".hawksSchedContainer_promocal").first();
    if ($objSchedContainer_promocal) {
      $.getJSON(URL_ENDPOINT_SCHED, function (scheduleData_hawks) {
        addGames_promocal(scheduleData_hawks);
      }).fail(function () {
        promocal_handleEmptySets();
      });
    }

    // --------------------------- mem plans ---------------------------
    const $gamesContainer_memplans = $(".gamesContainer_memplans").first();
    if ($gamesContainer_memplans) {
      $.getJSON(URL_ENDPOINT_SEASON_SETTINGS, function (seasonalSettingsData) {
        const GLOB_DO_SHOW_STACK_GAMES_OWNERS = seasonalSettingsData.seasonal_settings.show_stack_games_owners == 1;

        $.getJSON(URL_ENDPOINT_SCHED, function (scheduleData_hawks) {
          if (GLOB_DO_SHOW_STACK_GAMES_OWNERS) {
            $("body").removeClass("games-active-false").addClass("games-active-true");

            addGames_memplans(scheduleData_hawks, $gamesContainer_memplans);
          }
        });
      });
    }
  });

  function handleFevoBtns() {
    $(document).on("click", ".btnFevo", function (e) {
      e.preventDefault();
      const fevoID = $(this).data("fevo-id");
      if (fevoID && window.GMWidget && typeof window.GMWidget.open === "function") {
        window.GMWidget.open(fevoID);
      }
    });
  }

  function hasFlag(game, flagKey) {
    return game.flags.some((flag) => flag.flag_key === flagKey);
  }

  /*******************************
   *  BEGIN standard schedule
   ********************************/
  function handleFetchFailure_standard($objSchedContainer_standard, objLocalSettings_standard) {
    let emptySchedMsg = objLocalSettings_standard.noGamesText || "Check back soon for schedule";
    $objSchedContainer_standard.append('<div class="noGamesMsg">' + emptySchedMsg + "</div>");
  }

  function addGames_standard($objSchedContainer_standard, objLocalSettings_standard, jsonScheduleData) {
    $objSchedContainer_standard.wrap(`<div class="asyncScheduleContent"></div>`);

    let allGameBlocks = "";
    const promosGameMap_standard = {};

    $.each(jsonScheduleData.schedule.games, function (i, game_hawks) {
      const isHomeGame = game_hawks.home_away === "H";
      const isPostgame = game_hawks.game_state == "3";
      const hawksDidWin = isPostgame && game_hawks.hawks_score >= game_hawks.opp_score;
      const strFullOppName = `${game_hawks.opp_tc} ${game_hawks.opp_tn}`;
      const entitlement = game_hawks.entitlements?.[0] || {};
      const partner = game_hawks.partners?.[0] || {};
      const objTicketLinks = game_hawks.ticket_links;
      const hasTickets = !!game_hawks.ticket_links;
      const hasPartner = !!partner.partner_name;
      const hasEntitlement = !!entitlement.entitlement_name;
      const fullEntitlmentName = hasEntitlement
        ? hasPartner && entitlement.include_sponsor_name_with_logo
          ? `${entitlement.entitlement_name} ${partner.intro_text} ${partner.partner_name}`
          : entitlement.entitlement_name
        : "";

      const htmlClickablePartnerLogo = partner.clickthrough_url
        ? `<a href="${partner.clickthrough_url}" target="_blank"><img loading="lazy" src="${partner.logo_url}" alt="${partner.partner_name}" /></a>`
        : `<img loading="lazy" src="${partner.logo_url}" alt="${partner.partner_name}" />`;

      const htmlSponsorLogoBlock = partner.partner_name
        ? `<div class="sponsorLogoBlock">
          <div>
            <div class="sponsorIntro">${partner.intro_text || ""}</div>
            <div class="sponsorLogo">${htmlClickablePartnerLogo}</div>
          </div>
        </div>`
        : "";

      let thisTicketURL = "";
      if (objTicketLinks) {
        if (location.pathname == "/hawks/schedule") {
          thisTicketURL = objTicketLinks.schedule || "";
        } else if (location.pathname == "/hawks/tickets/games") {
          thisTicketURL = objTicketLinks.sgt || "";
        } else {
          thisTicketURL = objTicketLinks.generic_cid_only || "";
        }
      }
      let tmClass = thisTicketURL.indexOf("ticketmaster.com") > 0 ? "btn-tm" : "";

      let htmlTimeBlock = "",
        htmlBtnsBlock = "",
        partnerEntitlementBlock = "",
        htmlGameNoteBlock = "",
        hmtlGameResultBlock = "";

      if (!isPostgame) {
        htmlTimeBlock = `<div class="gameTime">${game_hawks.str_time}</div>`;
        htmlBtnsBlock = buildGameButtons_standard(game_hawks, objLocalSettings_standard, thisTicketURL, tmClass, isHomeGame, hasTickets);
        partnerEntitlementBlock = buildPartnerEntitlementBlock_standard(entitlement, partner);
        htmlGameNoteBlock = game_hawks.game_note ? `<div class="gameNote">${game_hawks.game_note}</div>` : "";
      } else {
        hmtlGameResultBlock = buildGameResultBlock_standard(game_hawks);
      }

      const gameBlock = `<div class="gameBlockWrapper"
      data-gidsimple="${game_hawks.gid_simple}"
      data-gameid="${game_hawks.gid}"
      data-sortable-date="${game_hawks.datetime_eastern ? game_hawks.datetime_eastern.split(" ")[0] : game_hawks.str_date}"
      data-hastickets="${hasTickets}"
      data-haspartner="${hasPartner}"
      data-hasentitlement="${hasEntitlement}"
      data-gamestate="${game_hawks.game_state}"
      data-hawkswin="${hawksDidWin}"
      data-seasontypeid="${game_hawks.season_type_id}"
      data-seasontypename="${game_hawks.season_type_name}"
      data-gamesubtype="${game_hawks.game_subtype}"
      data-opponentname="${game_hawks.opp_tn}"
      data-opponentabbr="${game_hawks.opp_ta}"
      data-strdate="${game_hawks.str_date}"
      data-strtime="${game_hawks.str_time}"
      data-homeaway="${game_hawks.home_away}"
      data-ifnecessary="${game_hawks.ifnecessary}">
      <div class="gameBlock">
        ${htmlGameNoteBlock}
        <div class="oppLogoBlock gameSubBlock">
          <img loading="lazy" src="${game_hawks.opp_logo_url}" alt="${strFullOppName}" title="${strFullOppName}" />
        </div><div class="gameInfoBlock gameSubBlock">
          <div>
            <div class="teamName">${game_hawks.opp_tn}</div>
            <div class="gameDate">${game_hawks.str_date}</div>
            ${htmlTimeBlock}
          </div>
        </div>
        ${partnerEntitlementBlock}
        ${htmlBtnsBlock}
        ${hmtlGameResultBlock}
      </div>
    </div>`;

      allGameBlocks += gameBlock;

      if (objLocalSettings_standard.showpromos && isHomeGame) {
        promosGameMap_standard[game_hawks.gid_simple] = game_hawks;
      }
    });

    $objSchedContainer_standard.append(allGameBlocks);

    $objSchedContainer_standard.on("click", ".promosBtn", function (e) {
      e.preventDefault();
      const gid = $(this).closest(".gameBlockWrapper").data("gidsimple");
      const modalID = `gamemodal-${gid}`;

      if ($(`#${modalID}`).length === 0 && promosGameMap_standard[gid]) {
        const gameData = promosGameMap_standard[gid];
        const modalHTML = buildPromoModal_standard(gameData);
        $("body").append(modalHTML);
      }

      $(`#${modalID}`).modal("show");
    });

    handleLocalSettings_standard($objSchedContainer_standard, objLocalSettings_standard);
    initialSortGames_standard($objSchedContainer_standard);
    labelAndOrganizeGames_standard($objSchedContainer_standard);
    handleCondensedSchedule_standard($objSchedContainer_standard, objLocalSettings_standard);
    showScheduleContent_standard($objSchedContainer_standard, objLocalSettings_standard);

    handleFevoBtns();
  }

  function buildModal_standard(modalID, title, subtitle, bodyHtml) {
    return `<div id="${modalID}" class="hawksCustomBSModal gameModal modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span>&times;</span></button>
          <h2>${title}</h2>
          ${subtitle ? `<h3>${subtitle}</h3>` : ""}
          ${bodyHtml}
        </div>
      </div>
    </div>
  </div>`;
  }

  function buildPartnerEntitlementBlock_standard(entitlement, partner) {
    const hasEntitlement = !!entitlement.entitlement_name;
    const hasPartner = !!partner.partner_name;

    const fullEntitlmentName = hasEntitlement
      ? hasPartner && entitlement.include_sponsor_name_with_logo
        ? `${entitlement.entitlement_name} ${partner.intro_text} ${partner.partner_name}`
        : entitlement.entitlement_name
      : "";

    const htmlClickablePartnerLogo = partner.clickthrough_url
      ? `<a href="${partner.clickthrough_url}" target="_blank"><img loading="lazy" src="${partner.logo_url}" alt="${partner.partner_name}" /></a>`
      : `<img loading="lazy" src="${partner.logo_url}" alt="${partner.partner_name}" />`;

    const htmlSponsorLogoBlock = hasPartner
      ? `<div class="sponsorLogoBlock">
        <div>
          <div class="sponsorIntro">${partner.intro_text || ""}</div>
          <div class="sponsorLogo">${htmlClickablePartnerLogo}</div>
        </div>
      </div>`
      : "";

    return `<div class="partnerEntitlementBlock">
    <div class="entitlementBlock">${fullEntitlmentName}</div>
    ${htmlSponsorLogoBlock}
  </div>`;
  }

  function buildPromoModal_standard(game) {
    const modalID = `gamemodal-${game.gid_simple}`;
    const entitlement = game.entitlements?.[0] || {};
    const partner = game.partners?.[0] || {};

    let promosHTML = "";
    if (game.promos?.length > 0) {
      promosHTML = game.promos
        .filter((promo) => promo.promo_type == "to")
        .map((promo) => {
          const fevoAttr = promo.fevo_offer_id ? `data-fevo-id="${promo.fevo_offer_id}"` : "";
          return `<div class="modalPromoBlock">
          <h5>${promo.promo_name}</h5>
          <p>${promo.promo_description}</p>
          <div class="btnContainer">
            <a class="btn btn-yellow ${promo.fevo_offer_id ? "btnFevo" : ""}"
              href="${promo.promo_url || "#"}" ${fevoAttr}>Buy Now</a>
          </div>
        </div>`;
        })
        .join("");
    } else {
      promosHTML = `<div class="noPromosMsg">There are not yet any promotions for this game, but <span class='noWrap'>check back soon.</span></div>`;
    }

    const bodyHtml = `
    ${buildPartnerEntitlementBlock_standard(entitlement, partner)}
    <div class="promotionsContainer">
      <h4>Promotions & Offers</h4>
      <div class="modalPromotionsList">${promosHTML}</div>
      <div class="modalBtnContainer">
        <a href="https://www.nba.com/hawks/tickets/promotions" class="btn btn-torch">See All Hawks Promotions</a>
      </div>
    </div>`;

    return buildModal_standard(modalID, `Hawks vs ${game.opp_tn}`, game.str_date, bodyHtml);
  }

  function buildGameResultBlock_standard(game) {
    if (game.game_state != "3") return ""; // only for postgame

    let resultWLLetter = "T";
    if (game.hawks_score != game.opp_score) {
      resultWLLetter = game.hawks_score > game.opp_score ? "W" : "L";
    }

    return `<div class="resultBlock gameSubBlock">
    <div>
      <span class="resultColorTxt">${resultWLLetter}</span>&nbsp;
      <span class="resultColorTxt">${game.hawks_score}</span>&nbsp;-&nbsp; ${game.opp_score}
      <div class='recapBtnContainer'>
        <a class='btn btnRecap' href='${game.recap_url}'>Game Recap</a>
      </div>
    </div>
  </div>`;
  }

  function buildGameButtons_standard(game, objLocalSettings_standard, thisTicketURL, tmClass, isHomeGame, hasTickets) {
    if (game.game_state == "3") return ""; // no buttons postgame

    if (isHomeGame) {
      return `<div class="btnBlock gameSubBlock">
      <div class="btnsContainer">
        ${hasTickets ? `<a class="btn btn-torch scheduleBtn btnTickets ${tmClass}" href="${thisTicketURL}" target="_blank">Tickets</a>` : ""}
          ${
            objLocalSettings_standard.showpromos
              ? `<a class="btn btn-lightgray scheduleBtn promosBtn" href="#"><span class="desktopOnly">Promotions</span><span class="mobileOnly">Promos</span></a>`
              : ``
          }
      </div>
    </div>`;
    } else if (objLocalSettings_standard.showawaybtns) {
      return `<div class="btnBlock gameSubBlock">
      <a class="btn btn-white btn-hotelscom"
        href="https://prf.hn/click/camref:1100lKvn9/creativeref:1100l117525"
        target="_blank">Book Travel</a>
    </div>`;
    }
    return "";
  }

  function initialSortGames_standard($objSchedContainer_standard) {
    $objSchedContainer_standard
      .find(".gameBlockWrapper")
      .sort(function (a, b) {
        const dateA = $(a).attr("data-sortable-date") || "";
        const dateB = $(b).attr("data-sortable-date") || "";
        return dateA.localeCompare(dateB);
      })
      .appendTo($objSchedContainer_standard);
  }

  function labelAndOrganizeGames_standard($objSchedContainer_standard) {
    const objSeasonTypes = {};
    let prevGameTypeID = "";

    const $allGames = $objSchedContainer_standard.find(".gameBlockWrapper"); // cache all games

    // collect season types in order
    $allGames.each(function () {
      const id = $(this).data("seasontypeid");
      const name = $(this).data("seasontypename");
      if (!id) return;
      if (id !== prevGameTypeID) objSeasonTypes[id] = name || "";
      prevGameTypeID = id;
    });

    const seasonTypeIDs = Object.keys(objSeasonTypes);

    // show labels unless only reg season is shown
    if (!(seasonTypeIDs.length === 1 && seasonTypeIDs[0] === "002")) {
      seasonTypeIDs.forEach(function (id) {
        const $blocks = $allGames.filter(`[data-seasontypeid="${id}"]`);
        if ($blocks.length === 0) return;

        // wrap if not already
        if ($objSchedContainer_standard.find(`.seasonTypeWrapper[data-seasontypeid="${id}"]`).length === 0) {
          $blocks.wrapAll(`<div class="seasonTypeWrapper" data-seasontypeid="${id}"></div>`);
        }

        // add label if missing
        if ($objSchedContainer_standard.find(`.seasonTypeLabel[data-seasontypeid="${id}"]`).length === 0) {
          const $regSeasonGames = $allGames.filter('[data-seasontypeid="002"]');
          const totalReg = $regSeasonGames.length;
          const totalRegComplete = $regSeasonGames.filter('[data-gamestate="3"]').length;

          const shouldLabel = id !== "002" || totalRegComplete < totalReg;
          if (shouldLabel) {
            $objSchedContainer_standard.find(`.seasonTypeWrapper[data-seasontypeid="${id}"]`).prepend(
              `<div class="seasonTypeLabel" data-seasontypeid="${id}">
              <div class="seasonTypeLabelContent"><h2>${objSeasonTypes[id]}</h2> <a href="#results" class="btn labelBtn addCalBtn"><span class="desktopOnly">Go To </span>Results</a></div>
            </div>`,
            );
          }
        }
      });
    }

    // regular season results block - MOVE COMPLETED GAMES HERE
    const $regSeasonPost = $allGames.filter('[data-gamestate="3"][data-seasontypeid="002"]');
    if ($regSeasonPost.length > 0) {
      // Remove existing results wrapper if it exists
      $objSchedContainer_standard.find(".seasonTypeWrapper.regSeasonResults").remove();

      // Create new results wrapper
      $regSeasonPost.wrapAll('<div class="seasonTypeWrapper regSeasonResults"></div>');

      const $resultsWrapper = $objSchedContainer_standard.find(".regSeasonResults");

      // Insert after regular season wrapper (or at the end if no reg season wrapper exists)
      const $regSeasonWrapper = $objSchedContainer_standard.find('.seasonTypeWrapper[data-seasontypeid="002"]');
      if ($regSeasonWrapper.length > 0) {
        $resultsWrapper.insertAfter($regSeasonWrapper);
      } else {
        $resultsWrapper.appendTo($objSchedContainer_standard);
      }

      // Add label
      $resultsWrapper.prepend(
        `<a id="results"></a>
        <div class="seasonTypeLabel">
          <div class="seasonTypeLabelContent"><h2>Results</h2></div>
        </div>`,
      );

      // Calculate and display record
      const wins = $allGames.filter('[data-seasontypeid="002"][data-hawkswin="true"]').length;
      const losses = $allGames.filter('[data-seasontypeid="002"][data-gamestate="3"][data-hawkswin="false"]').length;

      $resultsWrapper.find(".seasonTypeLabelContent h2").append(`<span class="schedRecord">&nbsp;(${wins} - ${losses})</span>`);
    }

    // preseason results → bottom
    const $preseasonGames = $allGames.filter('[data-seasontypeid="001"]');
    if ($preseasonGames.length > 0 && $preseasonGames.length === $preseasonGames.filter('[data-gamestate="3"]').length) {
      $objSchedContainer_standard.find('.seasonTypeLabel[data-seasontypeid="001"] .seasonTypeLabelContent').text("Preseason Results");
      $objSchedContainer_standard
        .find('.seasonTypeWrapper[data-seasontypeid="001"]')
        .insertAfter(
          $objSchedContainer_standard.find(".seasonTypeWrapper.regSeasonResults").length > 0
            ? $objSchedContainer_standard.find(".seasonTypeWrapper.regSeasonResults")
            : $objSchedContainer_standard.find('.seasonTypeWrapper[data-seasontypeid="002"]'),
        );
    }

    // play-in games → top
    const $playIn = $objSchedContainer_standard.find('.seasonTypeWrapper[data-seasontypeid="005"]');
    if ($playIn.length > 0) {
      $playIn.prependTo($objSchedContainer_standard);
    }

    // set body class for presence of future games
    const hasFutureGames = $allGames.filter('[data-gamestate!="3"]').length > 0;
    $("body").toggleClass("future-games-true", hasFutureGames).toggleClass("future-games-false", !hasFutureGames);
  }

  function handleCondensedSchedule_standard($objSchedContainer_standard, objLocalSettings_standard) {
    if ($objSchedContainer_standard.find(".gameBlockWrapper").length > 0 && objLocalSettings_standard.condensed) {
      if (objLocalSettings_standard.linkout) {
        $objSchedContainer_standard.after(
          '<div class="condensedSchedBtns"><a href="https://nba.com/hawks/schedule" class="btn btn-outline">Full Schedule&nbsp;&nbsp;<i class="fas fa-angle-right"></i></a><a href="https://hawks.ecal.com/" class="btn btn-outline">Add to Calendar&nbsp;&nbsp;<i class="fas fa-angle-right"></i></a></div>',
        );
      } else {
        $objSchedContainer_standard.after(
          '<div class="condensedSchedBtns"><a href="#" class="btnExpandSched btn btn-outline">Expand&nbsp;&nbsp;<i class="fas fa-angle-down"></i></a></div>',
        );
        $(".btnExpandSched").click(function (e) {
          e.preventDefault();
          $objSchedContainer_standard.find(".gameBlockWrapper").slideDown();
          $(".condensedSchedBtns").remove();
        });
      }
    }
  }

  function handleLocalSettings_standard($objSchedContainer_standard, objLocalSettings_standard = {}) {
    if (!$objSchedContainer_standard || $objSchedContainer_standard.length === 0) return;

    $objSchedContainer_standard.find(".gameBlockWrapper").each(function () {
      const $game = $(this);

      const g_isHome = $game.data("homeaway") === "H";
      const g_hasTickets = $game.data("hastickets") === true;
      const g_isPastGame = $game.data("gamestate") === 3;
      const g_typeId = $game.data("seasontypeid");
      const g_subtype = $game.data("gamesubtype");

      // --- filtering rules ---
      if (objLocalSettings_standard.homegamesonly && !g_isHome) return $game.remove();
      if (objLocalSettings_standard.ticketsonly && !g_hasTickets) return $game.remove();
      if (!objLocalSettings_standard.showpastgames && g_isPastGame) {
        return $game.remove();
      }
      if (objLocalSettings_standard.seasontypeid && g_typeId !== objLocalSettings_standard.seasontypeid) return $game.remove();

      // --- transformation rules ---
      const $btnBlock = $game.find(".btnBlock");
      const $btnTickets = $game.find(".btnTickets");

      if (objLocalSettings_standard.hidectas) $btnBlock.empty();
      if (objLocalSettings_standard.hidetickets) $btnTickets.remove();
    });

    if (objLocalSettings_standard.showcalbtn && $(".stickyBtnAddToCal").length === 0) {
      $("body").append(
        '<a href="https://hawks.ecal.com/" target="_blank" class="btn btn-lg stickyBtnAddToCal hawksStickyBtn hideWhenNoFutureGames" role="button" data-placement="left"><i class="fa-solid fa-calendar-plus"></i></a>',
      );
    }
  }

  function showScheduleContent_standard($objSchedContainer_standard, objLocalSettings_standard) {
    // how to handle no-games content
    const strEmptyScheduleMsg = objLocalSettings_standard.noGamesText || "Check back soon for schedule";
    if ($objSchedContainer_standard.find(".gameBlockWrapper, .noGamesMsg").length === 0) {
      $objSchedContainer_standard.html('<div class="noGamesMsg">' + strEmptyScheduleMsg + "</div>");
    }

    const $async = $(".asyncScheduleContent"); // cache once
    $async.css("visibility", "hidden").show();
    $async.hide().css("visibility", "").fadeIn();
  }

  function createLocalSchedSettings_standard($objSchedContainer_standard) {
    const settings = {};
    if (!$objSchedContainer_standard || $objSchedContainer_standard.length === 0) return settings;

    $.each($objSchedContainer_standard[0].attributes, function (_, attr) {
      if (attr.name.startsWith("data-")) {
        const key = attr.name.substring(5); // remove "data-"
        let val = attr.value;

        if (!val) {
          settings[key] = false;
        } else if (val.toLowerCase() === "true") {
          settings[key] = true;
        } else if (val.toLowerCase() === "false") {
          settings[key] = false;
        } else {
          settings[key] = val;
        }
      }
    });

    return settings;
  }
  /*******************************
   *  END standard schedule
   ********************************/

  /*******************************
   *  BEGIN schedule carousel
   ********************************/
  function schedCarousel_Init(URL_ENDPOINT_SCHED, $objCarouselContainer) {
    $.getJSON(URL_ENDPOINT_SCHED, function (jsonScheduleData) {
      addGames_schedCarousel($objCarouselContainer, jsonScheduleData);
    }).fail(function () {
      schedCarousel_showScheduleContent($objCarouselContainer);
    });
  }

  function addGames_schedCarousel($objCarouselContainer, jsonScheduleData) {
    $objCarouselContainer.wrap(`<div class="asyncScheduleContent"></div>`);

    let allCarouselGameBlocks = "";
    const promosGameMap_schedCarousel = {};

    $.each(jsonScheduleData.schedule.games, function (i, game_hawks) {
      const isHomeGame = game_hawks.home_away === "H";
      const isPostgame = game_hawks.game_state == "3";
      const hawksDidWin = isPostgame && game_hawks.hawks_score >= game_hawks.opp_score;
      const strFullOppName = `${game_hawks.opp_tc} ${game_hawks.opp_tn}`;
      const entitlement = game_hawks.entitlements?.[0] || {};
      const partner = game_hawks.partners?.[0] || {};
      const objTicketLinks = game_hawks.ticket_links;
      const hasTickets = !!game_hawks.ticket_links;
      const hasPartner = !!partner.partner_name;
      const hasEntitlement = !!entitlement.entitlement_name;

      const htmlClickablePartnerLogo = partner.clickthrough_url
        ? `<a href="${partner.clickthrough_url}" target="_blank"><img loading="lazy" src="${partner.logo_url}" alt="${partner.partner_name}" /></a>`
        : `<img loading="lazy" src="${partner.logo_url}" alt="${partner.partner_name}" />`;

      let thisTicketURL = objTicketLinks ? objTicketLinks.courtside_box : "";
      let thisEDPURL = "/hawks" + game_hawks.edp_url;
      let tmClass = thisTicketURL.indexOf("ticketmaster.com") > 0 ? "btn-tm" : "";

      let htmlBtnsBlock = "",
        htmlGameNoteBlock = "",
        hmtlGameResultBlock = "";

      if (!isPostgame) {
        htmlBtnsBlock = schedCarousel_buildGameButtons(game_hawks, thisTicketURL, thisEDPURL, tmClass, isHomeGame, hasTickets);
        htmlGameNoteBlock = game_hawks.game_note ? `<div class="gameNote">${game_hawks.game_note}</div>` : "";
      } else {
        hmtlGameResultBlock = schedCarousel_buildGameResultBlock(game_hawks);
      }

      const carouselGameBlock = `<div class="carouselGameBlockWrapper"
          data-gidsimple="${game_hawks.gid_simple}"
          data-gameid="${game_hawks.gid}"
          data-sortable-date="${game_hawks.datetime_eastern ? game_hawks.datetime_eastern.split(" ")[0] : ""}"
          data-hastickets="${hasTickets}"
          data-haspartner="${hasPartner}"
          data-hasentitlement="${hasEntitlement}"
          data-gamestate="${game_hawks.game_state}"
          data-hawkswin="${hawksDidWin}"
          data-seasontypeid="${game_hawks.season_type_id}"
          data-seasontypename="${game_hawks.season_type_name}"
          data-gamesubtype="${game_hawks.game_subtype}"
          data-opponentname="${game_hawks.opp_tn}"
          data-opponentabbr="${game_hawks.opp_ta}"
          data-strdate="${game_hawks.str_date}"
          data-strtime="${game_hawks.str_time}"
          data-homeaway="${game_hawks.home_away}"
          data-ifnecessary="${game_hawks.ifnecessary}">
            <div class="carouselGameBlock">
              <div class="gameDate">${
                game_hawks.str_time.toLowerCase().indexOf("tbd") < 0 && game_hawks.game_state == 1
                  ? game_hawks.str_date + "&nbsp;&nbsp;&nbsp;" + game_hawks.str_time
                  : game_hawks.str_date
              }</div>
              <div class="logosContainer">
                <div class="logoBlock carouselGameSubBlock">
                  <div>
                    <img title="Atlanta Hawks" alt="Atlanta Hawks" src="https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg" />
                    <div class="oppAbbr">ATL</div>
                  </div>
                </div><div class="vsBlock">${isHomeGame ? "VS" : "@"}</div><div class="logoBlock oppLogoBlock carouselGameSubBlock">
                  <div>
                    <img title="${strFullOppName}" alt="${strFullOppName}" src="${game_hawks.opp_logo_url}">
                    <div class="oppAbbr">${game_hawks.opp_ta}</div>
                  </div>
                </div>
              </div>
              ${htmlBtnsBlock}
              ${hmtlGameResultBlock}
            </div>`;

      allCarouselGameBlocks += carouselGameBlock;
      promosGameMap_schedCarousel[game_hawks.gid_simple] = game_hawks;
    });

    $objCarouselContainer.append(allCarouselGameBlocks);

    // Replace the existing .on("click", ".showSchedCarouselModalMore", ...) with:
    $objCarouselContainer.off("click.hawksSched", ".showSchedCarouselModalMore").on("click.hawksSched", ".showSchedCarouselModalMore", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const gid_simple = $(this).closest(".carouselGameBlockWrapper").data("gidsimple");
      const modalID = "gamemodal-" + gid_simple;

      if (!document.getElementById(modalID)) {
        const modalHTML = schedCarousel_buildSchedCarouselModal(promosGameMap_schedCarousel[gid_simple]);
        $("body").append(modalHTML);
      }

      // Defer to avoid other click handlers running after ours
      setTimeout(function () {
        $("#" + modalID).modal({ backdrop: true, keyboard: true, show: true });
      }, 0);
    });
    schedCarousel_initialSortGames($objCarouselContainer);
    schedCarousel_showScheduleContent($objCarouselContainer);
  }

  function schedCarousel_buildModalWithAttrs(rootAttrs, innerHtml) {
    const attrStr = Object.entries(rootAttrs || {})
      .map(([k, v]) => (v === true ? k : `${k}="${String(v)}"`))
      .join(" ");
    return `<div ${attrStr}>
      <div role="document" class="modal-dialog">
        <button aria-label="Close" data-dismiss="modal" class="close" type="button"><span aria-hidden="true">×</span></button>
        <div class="modal-content">
          <div class="modal-body">
            ${innerHtml}
          </div>
        </div>
      </div>
    </div>`;
  }

  function schedulCarousel_modal_renderDateTime(dateText, timeText) {
    return `<div class="modalDateTimeContainer">
      <span class="dateWrapper">${dateText}</span><span class="dateTimeDividerWrapper"> | </span><span class="timeWrapper">${timeText}</span>
    </div>`;
  }

  function schedulCarousel_modal_renderTeams(oppCity, oppName, oppLogoUrl) {
    const hawksLogo = "https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg";
    return `<div class="modalTeamInfoContainer">
      <div class="teamInfoBlock teamLogoNameBlock hawksInfo">
        <div>
          <div class="logoContainer">
            <img title="Atlanta Hawks" alt="Atlanta Hawks" src="${hawksLogo}" />
          </div>
          <div class="teamName">
            <div><span class="teamCity oppCity">Atlanta</span> Hawks</div>
          </div>
        </div>
      </div>
      <div class="teamInfoBlock vsTxtBlock">VS</div>
      <div class="teamInfoBlock teamLogoNameBlock oppInfo">
        <div>
          <div class="logoContainer oppLogoContainer">
            <img src="${oppLogoUrl}" alt="${oppCity} ${oppCity}" />
          </div>
          <div class="teamName oppName">
            <div><span class="teamCity oppCity">${oppCity}</span> ${oppName}</div>
          </div>
        </div>
      </div>
    </div>`;
  }

  function schedulCarousel_modal_renderGameNote(noteHtml) {
    return `<div class="gameNote">${noteHtml || ""}</div>`;
  }

  function schedulCarousel_modal_renderSponsor(partner) {
    // partner expected from game.partners[0]
    // Fallbacks to match sample when absent
    if (!partner || !partner.logo_url) return "";

    const alt = partner.partner_name || partner.title || "";
    const title = partner.partner_name || partner.title || "";
    return `<div class="modalSponsorContainer">
      <div>
        <div class="modalSponsorIntroContainer">PRESENTED BY</div>
        <div class="modalSponsorImgContainer">
          <img src="${partner.logo_url}" alt="${alt}" title="${title}" />
        </div>
      </div>
    </div>`;
  }

  function schedulCarousel_modal_renderStations(tvStations = [], radioStations = []) {
    const tvImgs = tvStations
      .map(
        (s) =>
          `<img
            class="stationElement stationLogo"
            data-sid="${s.sid || s.station_id || s.station_short_name || ""}"
            title="${s.title || s.station_name || s.station_short_name || ""}"
            src="${s.logo || s.station_logo_path || ""}" />`,
      )
      .join("");

    const radioImgs = radioStations
      .map(
        (s) =>
          `<img
            class="stationElement stationLogo"
            data-sid="${s.sid || s.station_id || s.station_short_name || ""}"
            title="${s.title || s.station_name || s.station_short_name || ""}"
            src="${s.logo || s.station_logo_path || ""}" />`,
      )
      .join("");

    return `<div class="modalStationsContainer">
            <div class="stationTypeWrapper">
              <h5>Watch</h5>
              <div data-stationtype="tv" class="stationsList">
                ${tvImgs}
              </div>
            </div>
            <div class="stationTypeWrapper">
              <h5>Listen</h5>
              <div data-stationtype="radio" class="stationsList">
                ${radioImgs}
              </div>
            </div>
          </div>`;
  }

  function schedCarousel_modal_renderPromos(promos = [], isHomeGame = false) {
    const promo_list_schedcarousel = promos
      .filter((p) => p.promo_type == "to")
      .map((p) => {
        const fevoAttr = p.fevo_offer_id ? `data-fevo-id="${p.fevo_offer_id}"` : "";
        const url = p.promo_url || "#";
        return `<div data-promotype="to" class="promoItem">
        <div class="promoInfoContainer">
          <h4>${p.promo_name}</h4>
          <div class="promoItemDesc">
            ${p.promo_description || ""}
          </div>
          <div class="promoBtnContainer">
            <a
              ${fevoAttr}
              class="btn btnBuyPromo btn-yellow ${p.fevo_offer_id ? "btnFevo fevoAlreadySetUp" : ""}"
              href="${url}"
            >Buy Now</a>
          </div>
        </div>
      </div>`;
      })
      .join("");

    // Only show this message for home games with zero promos
    const noPromosMessage = isHomeGame && promos.length === 0 ? `<p>There are not yet any promotions for this game, but check back soon.</p>` : "";

    return `<div class="modalPromosContainer">
      <h3 class="modalPromosHeading">Promotions</h3>
      ${noPromosMessage}
      <div class="promosList">
        ${promo_list_schedcarousel}
      </div>
      <div class="modalDismissBtnContainer"><a data-dismiss="modal" class="btn btn-lightgray" href="">Dismiss</a></div>
    </div>`;
  }

  function schedCarousel_buildSchedCarouselModal(game) {
    // Inputs from schedule JSON
    const gidSimple = game.gid_simple;
    const isHomeGame = game.home_away.toUpperCase() == "H";
    const oppAbbr = game.opp_ta || game.opp_abbr || "";
    const oppName = game.opp_tn || "";
    const oppCity = game.opp_tc || game.opp_city || "";
    const oppLogo = game.opp_logo_url || game.opp_logo || "";
    const dateText = game.str_date || "";
    const timeText = game.str_time || "";
    const entitlement = game.entitlements?.[0] || {};
    const partner = game.partners?.[0] || null;

    // Stations: normalize to arrays of {sid,title,logo}
    const tvStations = (game.stations || [])
      .filter((s) => (s.station_type || "").toLowerCase() === "tv")
      .map((s) => ({
        sid: s.station_short_name || s.station_name || "",
        title: s.station_name || s.station_short_name || "",
        logo: s.station_logo_path || "",
      }));
    const radioStations = (game.stations || [])
      .filter((s) => (s.station_type || "").toLowerCase() === "radio")
      .map((s) => ({
        sid: s.station_short_name || s.station_name || "",
        title: s.station_name || s.station_short_name || "",
        logo: s.station_logo_path || "",
      }));

    const innerHtml =
      schedulCarousel_modal_renderDateTime(dateText, timeText) +
      schedulCarousel_modal_renderTeams(oppCity, oppName, oppLogo) +
      schedulCarousel_modal_renderGameNote(game.game_note || "") +
      schedulCarousel_modal_renderSponsor(partner) +
      schedulCarousel_modal_renderStations(tvStations, radioStations) +
      schedCarousel_modal_renderPromos(game.promos || [], isHomeGame);

    const rootAttrs = {
      "aria-hidden": "true",
      role: "dialog",
      tabindex: "-1",
      "data-gidsimple": gidSimple,
      "data-opponentabbr": oppAbbr,
      "data-homeaway": isHomeGame ? "H" : "A",
      "data-opponentname": oppName,
      id: `gamemodal-${gidSimple}`,
      class: "hawksCustomBSModal csbGameInfoModal modal fade in",
      style: "display: block; padding-right: 15px",
    };

    return schedCarousel_buildModalWithAttrs(rootAttrs, innerHtml);
  }

  function schedCarousel_buildGameResultBlock(game) {
    let resultWLLetter = "T";
    if (game.hawks_score != game.opp_score) {
      resultWLLetter = game.hawks_score > game.opp_score ? "W" : "L";
    }

    return `<div class="resultBlock">
      <div>
        ${resultWLLetter}&nbsp;${game.hawks_score}&nbsp;-&nbsp; ${game.opp_score}
      </div>
    </div>
    <div class='ctaContainer'>
      <a class='ctaBtn' href='${game.recap_url}'>Game Recap</a>
    </div>`;
  }

  function schedCarousel_buildGameButtons(game, thisTicketURL, thisEDPURL, tmClass, isHomeGame, hasTickets) {
    let modalID = `gamemodal-${game.gid_simple}`;
    if (isHomeGame) {
      return `<div class="ctaContainer">
                <div class="btnContainer1">
                  ${
                    hasTickets
                      ? `<a href="${thisTicketURL}"class="ctaBtn ${tmClass}"><i class="fas fa-ticket"></i>&nbsp;&nbsp;<span class="desktopOnly">Buy&nbsp;</span>Tickets</a>`
                      : ""
                  }
                </div>
                <div class="btnContainer2">
                    <a href="${thisEDPURL}" class="ctaBtn">More&nbsp;&nbsp;<i class="fa fa-chevron-right"></i></a>
                </div>
              </div>`;
      // return `<div class="ctaContainer">
      //           <div class="btnContainer1">
      //             ${
      //               hasTickets
      //                 ? `<a href="${thisTicketURL}"class="ctaBtn ${tmClass}"><i class="fas fa-ticket"></i>&nbsp;&nbsp;<span class="desktopOnly">Buy&nbsp;</span>Tickets</a>`
      //                 : ""
      //             }
      //           </div>
      //           <div class="btnContainer2">
      //               <a href="#" data-target="#${modalID}" data-toggle="modal" class="ctaBtn showSchedCarouselModalMore">More&nbsp;&nbsp;<i class="fa fa-chevron-right"></i></a>
      //           </div>
      //         </div>`;
    } else {
      return `<div class="ctaContainer">
                <a href="#" data-target="#${modalID}" data-toggle="modal" class="ctaBtn showSchedCarouselModalMore"><i class="fas fa-tv"></i>&nbsp;&nbsp;How to Watch</a>
              </div>`;
    }
  }

  function schedCarousel_setUpCarousel_sched(strSliderSelector, currentGameIndex) {
    // Inject CSS if missing
    var swiperCssUrl = "https://s3.amazonaws.com/cdn.atlhawksdigital.com/libs/swiper-4.4.6/dist/css/swiper.min.css";
    if (!document.querySelector('link[href="' + swiperCssUrl + '"]')) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = swiperCssUrl;
      document.head.appendChild(link);
    }

    // Inject JS if missing
    var swiperJsUrl = "https://s3.amazonaws.com/cdn.atlhawksdigital.com/libs/swiper-4.4.6/dist/js/swiper.min.js";
    if (!document.querySelector('script[src="' + swiperJsUrl + '"]')) {
      var script = document.createElement("script");
      script.src = swiperJsUrl;
      document.head.appendChild(script);
      script.onload = function () {
        initializeSwiper();
      };
    } else {
      initializeSwiper();
    }

    function initializeSwiper() {
      $(strSliderSelector + " .carouselGameBlockWrapper").wrap("<div class='swiper-slide' />");
      $(strSliderSelector + " .swiper-slide").wrapAll('<div class="swiper-container" />');
      $(strSliderSelector + " .swiper-container").wrapInner('<div class="slidesContainer swiper-wrapper" />');
      $(strSliderSelector).append(
        '<div class="swiper-button-prev hawksSwiperNavPrev"></div><div class="swiper-button-next hawksSwiperNavNext"></div>',
      );

      var objSwiper_csb = new Swiper(strSliderSelector + " .swiper-container", {
        init: false,
        navigation: {
          nextEl: strSliderSelector + " .swiper-button-next",
          prevEl: strSliderSelector + " .swiper-button-prev",
        },
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 15,
        simulateTouch: false,
        breakpoints: {
          1399: { slidesPerView: 4 },
          1199: { slidesPerView: 3 },
          767: {
            freeMode: true,
            navigation: false,
            slidesPerView: 1.4,
            centeredSlides: true,
            slidesOffsetBefore: 10,
            spaceBetween: 10,
          },
        },
      });
      objSwiper_csb.on("init", function () {
        if (currentGameIndex > 0) {
          objSwiper_csb.slideTo(currentGameIndex, false, false);
        } else {
          objSwiper_csb.params.centeredSlides = false;
          objSwiper_csb.update();
        }
        $(strSliderSelector).fadeIn();
      });
      objSwiper_csb.init();
    }
  }

  function schedCarousel_initialSortGames($objCarouselContainer) {
    $objCarouselContainer
      .find(".carouselGameBlockWrapper")
      .sort(function (a, b) {
        const dateA = $(a).attr("data-sortable-date") || "";
        const dateB = $(b).attr("data-sortable-date") || "";
        return dateA.localeCompare(dateB);
      })
      .appendTo($objCarouselContainer);
  }

  function schedCarousel_showScheduleContent($objCarouselContainer) {
    if ($(".hawksSchedContainer_carousel .carouselGameBlockWrapper").length == 0) {
      $objCarouselContainer.remove();
    } else {
      var intFirstUnplayedGameIndex = $(".carouselGameBlockWrapper[data-gamestate!=3]:first").index();
      var gameToShowFirst = $(window).width() < 768 ? intFirstUnplayedGameIndex : intFirstUnplayedGameIndex - 1;
      schedCarousel_setUpCarousel_sched(".hawksSchedContainer_carousel", gameToShowFirst);
    }
  }
  /*******************************
   *  END schedule carousel
   ********************************/

  /*******************************
   *  BEGIN promo cal
   ********************************/
  function addGames_promocal(scheduleData_nba, scheduleData_hawks) {
    //add the game blocks
    $.each(scheduleData_nba.schedule.games, function (i, game_hawks) {
      const thisSeasonTypeID = game_hawks.season_type_id;
      const isPostgame = game_hawks.game_state == "3";
      const isHomegame = game_hawks.home_away.toUpperCase() == "H";

      const VALID_SEASON_TYPES = new Set(["001", "002", "004"]);
      if (!isPostgame && isHomegame && VALID_SEASON_TYPES.has(thisSeasonTypeID)) {
        const thisGID = game_hawks.gid;
        const thisGIDSimple = game_hawks.gid_simple;
        const thisGameState = game_hawks.game_state;
        const thisOpponentID = game_hawks.opp_tid;
        const thisOpponentAccr = game_hawks.opp_ta;
        const strOpponentCity = game_hawks.opp_tc;
        const strOpponentName = game_hawks.opp_tn;
        const thisGameDateTimeEastern = game_hawks.datetime_eastern;
        const strDate = game_hawks.str_date;
        const strTime = game_hawks.str_time;
        const strGameDetails = strDate + " vs " + strOpponentName + " | " + strTime;
        const thisOpponentLogoPath = "https://cdn.nba.com/logos/nba/" + thisOpponentID + "/primary/L/logo.svg";
        const thisGameSubtype = game_hawks.game_subtype;
        let strGameName = "Hawks vs " + strOpponentName;

        const thisEntitlement = game_hawks.entitlements[0];
        if (thisEntitlement) {
          if (thisEntitlement.show_on_promo_cal) {
            strGameName = thisEntitlement.entitlement_name;
          }
        }

        if (game_hawks.promos[0]) {
          $("#promosContainer").append(
            hSanitize(
              promocal_buildGameBlockHTML(
                thisGIDSimple,
                thisGID,
                thisGameState,
                thisSeasonTypeID,
                thisGameSubtype,
                thisOpponentAccr,
                thisGameDateTimeEastern,
                strDate,
                thisOpponentLogoPath,
                strOpponentCity,
                strOpponentName,
                strGameName,
                strGameDetails,
                game_hawks.ticket_links.promocal,
                game_hawks.promos,
                game_hawks.partners,
                game_hawks.flags,
              ),
            ),
          );
        }
      }
    });

    promocal_sortFeaturedOffers();

    //add tooltips for featured offer details
    $(".btnOfferDetails").each(function (i, objBtn) {
      Tipped.create(objBtn, '<div class="tipContentContainer">' + $(objBtn).attr("data-offer-details") + "</div>", {
        showOn: "click",
        hideOn: false,
        hideOnClickOutside: true,
        close: true,
        radius: true,
        shadow: true,
        skin: "featuredoffer",
        position: {
          target: "topmiddle",
          tooltip: "bottommiddle",
        },
      });
    });

    //notate preseason games
    $('.gameWrapper[data-seasontypeid="1"] .opponentCell').append('<div class="preseasonMarker">Preseason</div>');

    promocal_addFilters();
    promocal_handleEmptySets();
    handleFevoBtns();
    promocal_showContent();
  }

  function promocal_sortFeaturedOffers() {
    const $foList = $(".featuredOffersList");

    $foList
      .find(".featuredOfferBlockWrapper")
      .sort(function (a, b) {
        const sortorderA = $(a).attr("data-sortorder") || "";
        const sortorderB = $(b).attr("data-sortorder") || "";
        return sortorderA.localeCompare(sortorderB);
      })
      .appendTo($foList);
  }

  function promocal_buildGameBlockHTML(
    thisGIDSimple,
    thisGID,
    thisGameState,
    thisSeasonTypeID,
    thisGameSubtype,
    thisOpponentAccr,
    thisGameDateTimeEastern,
    strDate,
    thisOpponentLogoPath,
    strOpponentCity,
    strOpponentName,
    strGameName,
    strGameDetails,
    strPCTicketLink,
    objPromos,
    objPartners,
    objFlags,
  ) {
    const thisSortableDate = thisGameDateTimeEastern ? thisGameDateTimeEastern.split(" ")[0] : game_hawks.str_date;
    const weekdayName = new Date(thisGameDateTimeEastern).toLocaleDateString("en-US", { weekday: "long" });
    const monthNameShort = new Date(thisGameDateTimeEastern).toLocaleDateString("en-US", { month: "short" });

    var gameBlockHTML = `
      <div class="gameWrapper noPromo"
          data-gidsimple="${thisGIDSimple}"
          data-gid="${thisGID}"
          data-seasontypeid="${thisSeasonTypeID}"
          data-sortabledate="${thisSortableDate}"
          data-gamestate="${thisGameState}"
          data-weekday="${weekdayName}"
          data-monthname="${monthNameShort}"
          data-gamesubtype="${thisGameSubtype}"
          data-opponentid="${thisOpponentAccr.toUpperCase()}"
          data-shortdatestr="${strDate}">
          <div class="promoGameHeaderContainer">
            <div class="col-sm-9">
              <div class="opponentLogoContainer">
                <img class="opponentLogo"
                    src="${thisOpponentLogoPath}"
                    alt="${strOpponentCity} ${strOpponentName}"
                    title="${strOpponentCity} ${strOpponentName}">
              </div>
              <div class="gameTitleInfoContainer">
                <div>
                  <div class="gameNameContainer">${strGameName}</div>
                  <div class="gameDetailContainer">${strGameDetails}</div>
                </div>
              </div>
            </div>
            <div class="promoGameSponsorWrapper col-sm-3">
              ${promocal_buildPartner(objPartners)}
            </div>
          </div>
          <div class="gameMiddleContent">
            <div class="promoItemsWrapper">
              <div class="promoItems">
                <ul class="promoItemsList">
                  ${promocal_buildPromos(objPromos, strPCTicketLink)}
                  </ul>
              </div>
            </div>
          </div>
          ${promocal_buildGiveawayTag(objPromos)}
        </div>
      `;

    return gameBlockHTML;
  }

  function promocal_buildGiveawayTag(objPromos) {
    let giveawayHTML = ``;

    $.each(objPromos, function (key, promo) {
      if (promo.promo_type == "ga" && promo.show_on_promo_cal) {
        const { promo_name, promo_description, giveaway_group } = promo;
        giveawayHTML += `<div class="giveawayTag"><span>` + promo.giveaway_group + `</span>GIVEAWAY</div>`;
      }
    });

    return giveawayHTML;
  }

  function promocal_buildPromos(objPromos, strPCTicketLink) {
    let promosListHTML = ``;

    $.each(objPromos, function (key, promo) {
      if (promo.promo_type == "to" && promo.show_on_promo_cal) {
        const {
          promo_code,
          promo_type,
          promo_name,
          promo_description,
          promo_url,
          fevo_offer_id,
          game_specific_link,
          game_specific_fevo_id,
          promo_sidebar_img_url,
          promo_sold_out,
          sort_order,
        } = promo;

        promosListHTML += promocal_buildGamePromoBlockHTML(
          promo_code,
          promo_type,
          promo_name,
          promo_description,
          promo_url,
          promo_sidebar_img_url,
          fevo_offer_id,
          game_specific_link,
          game_specific_fevo_id,
          sort_order,
        );

        if (promo.is_featured && $(".featuredOffersList .featuredOfferBlockWrapper[data-promocode='" + promo_code + "']").length == 0) {
          var todayDate = new Date();
          var thisPromoEndDate = hSanitize(promo.promoenddate) != "" ? new Date(hSanitize(promo.promoenddate)) : new Date();
          if (promo.is_featured && todayDate.setHours(0, 0, 0, 0) <= thisPromoEndDate.setHours(0, 0, 0, 0)) {
            var fevoID = hSanitize(promo.fevo_offer_id);
            var fevoClass = fevoID != "" ? "btnFevo" : "";
            var fevoDataID = fevoID != "" ? "data-fevo-id='" + fevoID + "'" : "";

            $(".featuredOffersList").append(
              promocal_buildfeaturedOfferBlockHTML(
                promo_code,
                promo_type,
                promo_sidebar_img_url,
                promo_name,
                promo_description,
                fevoClass,
                fevoDataID,
                promo_url,
                promo_sold_out,
                sort_order,
              ),
            );
          }
        }
      }
    });

    const strTMPromoDescr = "To purchase tickets to the game only and explore more seating options, please visit Ticketmaster.";
    promosListHTML += promocal_buildGamePromoBlockHTML("regtix", "regseason", "", strTMPromoDescr, strPCTicketLink, "", "", "", "");

    return promosListHTML;
  }

  function promocal_buildPartner(objPartners) {
    const thisPartner = objPartners?.[0];
    if (!thisPartner) return ``;

    let sponsorContent = ``;
    const { logo_url, clickthrough_url, intro_text, partner_name } = thisPartner;

    if (logo_url) {
      const imgTag = `<img src="${logo_url}" alt="${partner_name}" title="${partner_name}">`;
      sponsorContent = clickthrough_url ? `<a href="${clickthrough_url}" target="_blank">${imgTag}</a>` : imgTag;
    } else {
      sponsorContent = partner_name;
    }

    return `
          <div>
            <div class="promoGameSponsorHeader">${intro_text}</div>
            <div class="promoGameSponsor">${sponsorContent}</div>
          </div>`;
  }

  function promocal_buildGamePromoBlockHTML(
    strPromoCode_param,
    strPromoType_param,
    strPromoName_param,
    strPromoDescription_param,
    strPromoURL_param,
    strImgURL_param,
    strFevoOfferID_param,
    strGameSpecificLink_param,
    strGameSpecificFevoID_param,
  ) {
    var btnHTML = "";
    var strBtnTxt = "Buy Now";

    const gamePromoURL = strGameSpecificLink_param ? strGameSpecificLink_param : strPromoURL_param;
    const gamePromoFevoID = strGameSpecificFevoID_param ? strGameSpecificFevoID_param : strFevoOfferID_param;

    var fevoClass = gamePromoFevoID != "" ? " btnFevo " : "";
    var fevoIDAttr = gamePromoFevoID != "" ? 'data-fevo-id="' + gamePromoFevoID + '"' : "";
    var btnStyleClass = " btn-yellow ";
    var imgURL = strImgURL_param;

    if (strPromoType_param == "to") {
      strBtnTxt = "Claim Ticket Offer";
    } else if (strPromoType_param == "regseason") {
      strBtnTxt = "&nbsp;";
      btnStyleClass = "btn-torch btn-tm ";
    }

    if (gamePromoURL != "") {
      btnHTML =
        '<div class="promoBtnContainer"><a href="' +
        gamePromoURL +
        '" target="_blank" class="btn btnBuyPromo ' +
        btnStyleClass +
        fevoClass +
        '" ' +
        fevoIDAttr +
        ">" +
        strBtnTxt +
        "</a></div>";
    }

    var gamePromoItemHTML = `
          <li class="promoItem" data-promotype="${strPromoType_param}">
            ${
              imgURL !== ""
                ? `<div class="promoImgContainer">
                  <img src="${imgURL}" alt="${strPromoName_param}">
                </div>`
                : ""
            }<div class="promoInfoContainer">
              ${strPromoName_param !== "" ? `<h4>${strPromoName_param}</h4>` : ""}
              <div class="promoItemDesc">${hSanitize(strPromoDescription_param)}</div>
              ${btnHTML}
            </div>
          </li>
        `;

    return gamePromoItemHTML;
  }

  function promocal_buildfeaturedOfferBlockHTML(
    thisPromoCode,
    thisPromoType,
    thisPromoImage,
    thisPromoName,
    thisPromoDescription,
    fevoClass,
    fevoDataID,
    thisPromoURL,
    thisPromoSoldOut,
    sort_order,
  ) {
    const featuredBlockImgURL =
      thisPromoImage !== "" ? thisPromoImage : "https://cdn.nba.com/teams/uploads/sites/1610612737/2022/09/evo_white_on_torch_1920x1080.jpg";

    return `
          <div class="featuredOfferBlockWrapper offer fivePerRow" data-promocode="${thisPromoCode}" data-promotype="${thisPromoType}" data-sortorder="${sort_order}">
            <div class="featuredOfferBlock">
              <div class="featuredOfferImgContainer">
                <img class="featuredOfferImg"
                    src="${featuredBlockImgURL}"
                    title="${thisPromoName}"
                    alt="${thisPromoName}">
              </div>
              <div class="offerTypeTag"></div>
              <div class="featuredOfferName">${thisPromoName}</div>
              <div class="featuredOfferButtonContainer">
                <a class="btn btn-lightgray btnOfferDetails"
                  href="javascript:;"
                  data-offer-details="${thisPromoDescription}">
                  DETAILS
                </a>
                <a class="btn btn-torch ${fevoClass}"
                  ${fevoDataID}
                  href="${thisPromoURL}">
                  BUY NOW
                </a>
              </div>
              ${thisPromoSoldOut ? `<div class="soldOutTag">Sold Out</div>` : ""}
            </div>
          </div>
        `;
  }

  function promocal_addFilters() {
    if ($(".gameWrapper").length > 3) {
      $("#promosContainer").before(
        '<div class="monthFiltersContainer btn-group btn-group-justified"><a class="btn btn-default monthFilter resetMonthFilter active">ALL</a></div>',
      );
      $(".gameWrapper").each(function () {
        var thisMonthname = hSanitize($(this).attr("data-monthname"));
        if ($('.monthFilter[data-monthname="' + thisMonthname + '"]').length == 0) {
          $(".monthFiltersContainer").append(
            '<a class="btn btn-default monthFilter" data-monthname="' + thisMonthname + '">' + thisMonthname.substring(0, 3) + "</a>",
          );
        }
      });

      if ($(".monthFilter").length > 1) {
        $(".monthFiltersContainer").show();
        $(".monthFilter").click(function () {
          $(".monthFilter").removeClass("active");
          $(this).addClass("active");
          if (!$(this).hasClass("resetMonthFilter")) {
            $("#promosContainer .gameWrapper")
              .hide()
              .filter('[data-monthname="' + hSanitize($(this).attr("data-monthname")) + '"]')
              .show();
          } else {
            $("#promosContainer .gameWrapper").show();
          }
        });
      }
    }
  }

  function promocal_handleEmptySets() {
    if ($("#promosContainer .gameWrapper").length == 0) {
      $(".promoCalContainer").remove();
    }

    if ($(".featuredOfferBlockWrapper").length == 0) {
      $(".featuredOffersSection").remove();
    }
  }

  function ensureSwiperLoaded(callback) {
    // 1) If Swiper is already available, just run the callback
    if (window.Swiper) {
      callback();
      return;
    }

    // 2) Ensure CSS is present (optional "avoid duplicates" logic)
    var swiperCssHref = "https://s3.amazonaws.com/cdn.atlhawksdigital.com/libs/swiper-4.4.6/dist/css/swiper.min.css";
    var existingLink = document.querySelector('link[href="' + swiperCssHref + '"]');
    if (!existingLink) {
      var link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = swiperCssHref;
      document.head.appendChild(link);
    }

    // 3) Ensure JS is loaded. If already loading, don't add another tag.
    var swiperJsSrc = "https://s3.amazonaws.com/cdn.atlhawksdigital.com/libs/swiper-4.4.6/dist/js/swiper.min.js";
    var existingScript = document.querySelector('script[src="' + swiperJsSrc + '"]');

    if (existingScript) {
      // If we find the script but Swiper isn't ready yet, wait until it's loaded
      if (existingScript.dataset._swiperLoading !== "done") {
        existingScript.addEventListener("load", function () {
          callback();
        });
      } else {
        // Script tag exists and is marked as done, but window.Swiper not set for some reason.
        // Call anyway to avoid deadlock.
        callback();
      }
      return;
    }

    // Actually create the script tag and load Swiper
    var script = document.createElement("script");
    script.src = swiperJsSrc;
    script.async = true;
    script.dataset._swiperLoading = "loading";

    script.onload = function () {
      script.dataset._swiperLoading = "done";
      callback();
    };

    script.onerror = function () {
      console.error("Failed to load Swiper library:", swiperJsSrc);
    };

    document.head.appendChild(script);
  }

  function promocal_handleFeaturedOfferedCarousel(strSliderSelector) {
    if ($(window).outerWidth() >= 768) {
      return; // Do nothing on desktop/tablet if you want
    }

    ensureSwiperLoaded(function () {
      // Only run DOM manipulations & Swiper init after Swiper is loaded

      // Guard against double-wrapping if this function can be called multiple times.
      // Check if we've already initialized this slider.
      var $sliderRoot = $(strSliderSelector);
      if ($sliderRoot.data("promo-swiper-initialized")) {
        return;
      }

      // Mark as initialized
      $sliderRoot.data("promo-swiper-initialized", true);

      // Wrap your blocks
      $sliderRoot.find(".featuredOfferBlockWrapper").wrap("<div class='swiper-slide' />");

      $sliderRoot.find(".swiper-slide").wrapAll('<div class="swiper-container" />');

      $sliderRoot.find(".swiper-container").wrapInner('<div class="slidesContainer swiper-wrapper" />');

      // Initialize Swiper
      var objSwiper_promocal = new Swiper(strSliderSelector + " .swiper-container", {
        init: false,
        freeMode: true,
        slidesPerView: 2.2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        slidesOffsetBefore: 5,
        slidesOffsetAfter: 10,
        breakpoints: {
          413: {
            spaceBetween: 5,
          },
        },
      });

      objSwiper_promocal.on("init", function () {
        $sliderRoot.fadeIn();
      });

      objSwiper_promocal.init();

      // Trigger layout recalculation
      window.dispatchEvent(new Event("resize"));
    });
  }

  function promocal_showContent() {
    if ($(".featuredOffersList .featuredOfferBlockWrapper").length <= 4) {
      $(".featuredOfferBlockWrapper").removeClass("fivePerRow").addClass("fourPerRow");
    } else if ($(".featuredOffersList .featuredOfferBlockWrapper").length == 5) {
      $(".featuredOfferBlockWrapper").removeClass("fourPerRow").addClass("fivePerRow");
    } else {
      $(".featuredOfferBlockWrapper").removeClass("fivePerRow").addClass("fourPerRow");
    }

    $(".promoPageContent").show();
    promocal_handleFeaturedOfferedCarousel(".featuredOffersList");
  }
  /*******************************
   *  END promo cal
   ********************************/

  /*******************************
   *  BEGIN membership plans
   ********************************/
  function addGames_memplans(scheduleData_hawks, $gamesContainer_memplans) {
    $.each(scheduleData_hawks.schedule.games, function (i, game_hawks) {
      const thisGameID = game_hawks.gid;
      const thisGameIDSimple = game_hawks.gid_simple;
      const thisSeasonTypeID = game_hawks.season_type_id;
      const isHomeGame = game_hawks.home_away === "H";

      if (thisSeasonTypeID == "002" && isHomeGame) {
        const thisOpponentID = game_hawks.opp_tid;
        const thisOpponentAccr = game_hawks.opp_ta;
        const thisOpponentName = game_hawks.opp_tn;
        const sortableDate = game_hawks.datetime_eastern ? game_hawks.datetime_eastern.split(" ")[0] : "";
        const strDate = game_hawks.str_date;
        const strTime = game_hawks.str_time;
        const thisOpponentLogoPath = game_hawks.opp_logo_url;
        const thisGameTitle = strDate + " vs " + thisOpponentName;

        const gameHTML = hSanitize(
          `<div class="gameBlockWrapper"
              data-gameid="${thisGameID}"
              data-sortable-date="${sortableDate}"
              data-gameidsimple="${thisGameIDSimple}"
              data-gamestate="${game_hawks.game_state}"
              data-strdate="${strDate}"
              title="${thisGameTitle}">
            <div class="gameBlock">
              <div class="logoContainer">
                <img src="${thisOpponentLogoPath}" alt="${thisOpponentAccr}">
              </div>
              <div class="infoContainer">
                <div class="teamName">${thisOpponentName}</div>
                <div class="gameDate">${strDate}</div>
                <div class="gameTime">${strTime}</div>
              </div>
            </div>
          </div>`,
        );

        $gamesContainer_memplans.append(hSanitize(gameHTML));
        var thisGame = $('.gameBlockWrapper[data-gameidsimple="' + thisGameIDSimple + '"]');

        if (hasFlag(game_hawks, "stack_east") && getQuerystringVal("east") == 1) {
          thisGame.addClass("gameToShow");
        }
        if (hasFlag(game_hawks, "stack_west") && getQuerystringVal("west") == 1) {
          thisGame.addClass("gameToShow");
        }
        if (hasFlag(game_hawks, "stack_allstar") && getQuerystringVal("allstar") == 1) {
          thisGame.addClass("gameToShow");
        }
        if (hasFlag(game_hawks, "stack_weekend") && getQuerystringVal("wkd") == 1) {
          thisGame.addClass("gameToShow");
        }
        if (thisOpponentAccr.toUpperCase() == "LAL" && getQuerystringVal("lal") == 1) {
          thisGame.addClass("gameToShow");
        }
      }
    });

    if ($(".gameToShow").length > 0) {
      $(".gameToShow").css("display", "inline-block");
    } else {
      $gamesContainer_memplans.after('<div class="noGamesMsg">Check back soon for games to be loaded.</div>');
    }
  }
  /*******************************
   *  END membership plans
   ********************************/

  // --------- FEVO widget loader (idempotent) ---------
  var ho = "https://fevo-enterprise.com/react/dist/js/widget/gm-widget.js";
  var fevoScriptExists = document.querySelector('script[src="' + ho + '"]');
  if (!fevoScriptExists) {
    var fO,
      f1,
      cs0 = "position:fixed;top:0;bottom:0;left:0;right:0;background:#15232e99;transition:opacity .5s;z-index:10000;",
      cs1 = "text-align:center;position:absolute;color:#5E5E5E;top:50%;left:50%;transform:translate(-50%,-50%);background:white;border-radius:20px;",
      wn = "GMWidget",
      aC = "appendChild",
      cE = "createElement",
      as = [],
      w = window,
      d = document,
      h = d.getElementsByTagName("head")[0],
      s = d[cE]("script");
    ((s.type = "text/javascript"), (s.src = ho), h[aC](s));
    w[wn] = w[wn] || {
      open: (t) => {
        as.push(t);
        (fO = d[cE]("div")).style.cssText = cs0;
        (f1 = d[cE]("div")).style.cssText = cs1;
        f1.innerHTML = '<img src="https://fevo-enterprise.com/react/dist/assets/images/FEVO_Loading.gif" alt="Loading"/>';
        fO[aC](f1);
        d.body[aC](fO);
        w[wn].clear = () => (fO.remove(), as);
      },
    };
  }
})();
