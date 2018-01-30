
;(function ($) {
  Drupal.behaviors.dracoTopPlayer = {
    attach: function (context, settings) {
      var ContentEntryBuilder = com.turner.top.sdk.common.cms.ContentEntryBuilder,
      Browser = com.turner.top.lib.platform.browser.Browser;
      var testContent = null;
      // Test content, vod
      if (Browser.desktop()) {
         testContent = settings.desktop_url;
      } else {
         testContent = settings.mobile_url;
      }

      // Create the player
      var player = TOP.createPlayer();
      window.player = player;
      var video_metadata = {};
      var PlayerEventType = com.turner.top.sdk.core.api.events.PlayerEventType;

      //addition of ensighten listeners
      player.events().listen(function(type, result) {
        switch (type) {
          case PlayerEventType.Player_Ready:
            //note: not all of these fields are currently in use, commented out now
            //so they can be used in the future where required
            video_metadata.playerid = settings.player_id; //should be unique if there are multiple instances
            //video_metadata.hasScrubbed = false;
            //video_metadata.isTen = false;
            //video_metadata.isTwentyFive = false;
            //video_metadata.isFifty = false;
            //video_metadata.isSeventyFive = false;
            video_metadata.isAutostart = Browser.desktop();
            video_metadata.content_duration = settings.duration;
            //video_metadata.content_dataCreated = "1/1/2017";
            //video_metadata.content_dataAired = "1/1/2017";
            video_metadata.content_name = settings.title;
            video_metadata.content_id = settings.content_id;
            video_metadata.content_type = "clip"; //clip, episode, live
            //video_metadata.content_showName = "show name example";
            //video_metadata.content_episodeName = "episode name example";
            try { trackVideoMetrics({type: "Player_Ready", data: video_metadata}); } catch(e) {}
            break;
            /* ads */
          case PlayerEventType.Ad_Started:
            try { trackVideoMetrics({type: "Ad_Started", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Ad_Creative_Started:
            video_metadata.ad_duration = result.duration;
            video_metadata.ad_type = "preroll"; //preroll, midroll, postroll
            try { trackVideoMetrics({type: "Ad_Creative_Started", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Ad_Paused:
            try { trackVideoMetrics({type: "Ad_Paused", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Ad_Resumed:
            try { trackVideoMetrics({type: "Ad_Resumed", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Ad_Stopped:
            try { trackVideoMetrics({type: "Ad_Stopped", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Ad_Creative_Ended:
            try { trackVideoMetrics({type: "Ad_Creative_Ended", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Ad_Finished:
            try { trackVideoMetrics({type: "Ad_Finished", data: video_metadata}); } catch(e) {}
            break;
            /* contents */
          case PlayerEventType.Media_Started:
            video_metadata.isAutostart = true; //autostart flag
            try { trackVideoMetrics({type: "Media_Started", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Media_Buffering_Started:
            try { trackVideoMetrics({type: "Media_Buffering_Started", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Media_Buffering_Finished:
            try { trackVideoMetrics({type: "Media_Buffering_Finished", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Media_Seeking_Started:
            video_metadata.hasScrubbed = true;
            try { trackVideoMetrics({type: "Media_Seeking_Started", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Media_Seeking_Finished:
            try { trackVideoMetrics({type: "Media_Seeking_Finished", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Media_Time_Changed:
            var playhead = result.time;
            var duration = video_metadata.content_duration;
            if (video_metadata.hasScrubbed === false) {
              if (playhead > (duration * 0.75) && video_metadata.isSeventyFive === false) {
                try { trackVideoMetrics({type: "Media_SeventyFive", data: video_metadata}); } catch(e) {}
                video_metadata.isSeventyFive = true;
              } else if (playhead > (duration * 0.5) && video_metadata.isFifty === false) {
                try { trackVideoMetrics({type: "Media_Fifty", data: video_metadata}); } catch(e) {}
                video_metadata.isFifty = true;
              } else if (playhead > (duration * 0.25) && video_metadata.isTwentyFive === false) {
                try { trackVideoMetrics({type: "Media_TwentyFive", data: video_metadata}); } catch(e) {}
                video_metadata.isTwentyFive = true;
              } else if (playhead > (duration * 0.1) && video_metadata.isTen === false) {
                try { trackVideoMetrics({type: "Media_Ten", data: video_metadata}); } catch(e) {}
                video_metadata.isTen = true;
              }
            }
            break;
          case PlayerEventType.Media_Paused:
            try { trackVideoMetrics({type: "Media_Paused", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Media_Resumed:
            try { trackVideoMetrics({type: "Media_Resumed", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Media_Stopped:
            try { trackVideoMetrics({type: "Media_Stopped", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Media_Finished:
            try { trackVideoMetrics({type: "Media_Finished", data: video_metadata}); } catch(e) {}
            break;
          case PlayerEventType.Content_Completed:
            try { trackVideoMetrics({type: "Content_Completed", data: video_metadata}); } catch(e) {}
            break;
        }
      });
      // Setup player listeners
      player.events().listenFor({
          playerReady: function (result) {
              // If we're on desktop, play immediately
              if (Browser.desktop())
                  playContent();
              // If we're on mobile, use click-to-play
              else
                  addClickToPlayButton();
          }
      });

        $('.player-container').height(settings.player_config.player.height);
        $('.player-container').width(settings.player_config.player.width);

        if(settings.player_config) {
          var playerConfig = {
              element: document.getElementById(settings.div_id),
              config: {
                  ads : {
                      serverBaseUrl : settings.player_config.ads.server_base_url,
                      networkId     : settings.player_config.ads.network_id,
                      profile       : settings.player_config.ads.profile,
                      assetId       : settings.player_config.ads.assetId,
                      section       : settings.player_config.ads.section
                  }
              }
          };

      } else {
          var playerConfig = {
              element: document.getElementById(settings.div_id)
          }
      }
        player.init(playerConfig);

      /* For mobile testing, add a button for click-to-play support */

      function playContent() {
        var entry = ContentEntryBuilder.create()
          .addFile({
            url: testContent
          })
          .build();
        player.play(entry);
      }

      function addClickToPlayButton() {
        var button = document.createElement('input');
        button.type = 'button';
        button.value = 'Play';
        button.style = 'margin-top: 15px; width: 200px;';
        button.onclick = function () {
          playContent();
          this.parentNode.removeChild(this);
        };
        document.querySelector('#app').appendChild(button);
      }
    }
  };

})(jQuery);