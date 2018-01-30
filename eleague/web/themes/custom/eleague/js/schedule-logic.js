var teams = [];
(function ($) {
	var dayInMilli = 24*60*60*1000;
	var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
	var populated = [
		false,
		false,
		false,
		false,
		false,
		false,
		false
	];
	var jsonpUrl = 'http://data.eleague.com/jsonp/csgo/';
	var matchInt = 0,
		liveMatchId = 0;
	var tournamentID = '';
	var map = {
		"de_inferno"		: "INF",
		"de_dust2"			: "DUST2",
		"de_overpass"		: "OPASS",
		"de_cache"			: "CACHE",
		"de_train"			: "TRAIN",
		"de_mirage"			: "MRG",
		"de_cbble"			: "CBBLE",
		"de_nuke"			: "NUKE"
	};
	var tempData = [];

	var populateWeek = function(week) {
		var weekBlock = $('.schedule-week.week-' + week);
		weekBlock.removeClass("hide");
		weekBlock.addClass("current");

		if (!$('#tab-' + (week + 1)).length) {
			$(".tab-template").before(weekBlock);
		}

		var initWeek = new Date(weekBlock.find('.schedule-day .start_time')[0].innerHTML);
		log('initWeek ' + initWeek);
		for (var i = 0; i < 7; i++) {
			var currDay = new Date(initWeek);
			currDay.setDate(currDay.getDate() + i); //looping through days of the week
			currDay = currDay.getFullYear() + (currDay.getMonth() < 9 ? '0' : '') + (currDay.getMonth() + 1) + (currDay.getDate() < 10 ? '0' : '') + currDay.getDate();
			log('currDay ' + currDay);
			var dayBlock = weekBlock.find('[data-date=' + currDay + ']');
			if (dayBlock.length) {
				log('found day ' + currDay, dayBlock);
				if (dayBlock.find('.head-to-head:not(.final)').length) {
					scheduleGetDayInfo(currDay, dayBlock, function(resp, dayBlock) {
						populateDay(resp, dayBlock, week);
					});
				}
			}
		}
	};

	var populateDay = function(apiDay, dayBlock, week) {
		if (apiDay) {
			log("api day exists");
			for (var k in apiDay.matches) {
				//if (apiDay.matches.hasOwnProperty(k)) {
					var match = apiDay.matches[k];
					apiDay.matchesLoaded = 0;
					var matchBlock = dayBlock.find('.head-to-head').eq(k);
					/*var matchBlock = $(".matchup-template").first().clone();
					matchBlock.removeClass("matchup-template");
					matchBlock.removeClass("hide");
					matchBlock.find(".matchup_index").html((parseInt(k) + 1));
					dayBlock.append(matchBlock);
					log(k);
					if (k % 2 == 0) {
						log("reversing row: " + k);
						matchBlock.css("flex-direction", "row-reverse");
					}*/
					//var bo3 = dayBlock.find('.bo3').eq(k); //don't need ?
					/*var bo3 = $(".bo3-template").first().clone();
					bo3.removeClass("bo3-template");
					bo3.addClass("bo3");
					matchBlock.after(bo3);*/
					log(match);
					if (tournamentID != 'rl') {
						createDrawerEvents(matchBlock);
					}
					
					/*for (var count = 0; count < day.matches.length; count++) {
						if (day.matches[count].id == apiDay.matches[k].matchId) {
							apiDay.matches[k].title = day.matches[count].title;
						}
					}*/
					if (matchBlock.hasClass('final')) { //manual data already put in
						populateMatchesFunc(matchBlock, match, null);
					}
					else {
						scheduleGetMatchInfo(apiDay.matches[k], matchBlock, function(resp, match, matchBlock) {
							if (matchBlock.data('matchId') != resp.matchId) {
								var newMB = $('.head-to-head[data-match-id=' + resp.matchId + ']');
								if (newMB.length) {
									matchBlock = newMB;
								}
							}
							populateMatchesFunc(matchBlock, match, resp);
						});
					}
					apiDay.matchesLoaded++;
				//}
			}
		}
		else {
			var arr = dayBlock.find('.head-to-head');
			for (var i = 0; i < arr.length; i++) {
				createDrawerEvents(dayBlock.find('.head-to-head').eq(i));
			}
		}
	};

	var populateMatchesFunc = function(matchBlock, match, resp) {
		if (!matchBlock.data('matchId') || (matchBlock.data('matchId') == match.matchId)) {
			populateMatch(matchBlock, match, resp, function() {
				if (match && (match.state != 'final' && match.state != 'finished' && !match.isComplete && !matchInt) || match.state == 'live') {
					clearInterval(matchInt);
					var liveWrapper = function(block, match) {
						log("refreshing Live Match: " + matchBlock.data('matchId'));
						scheduleRepopulateMatch(block, match);
					}
					liveMatchId = match.matchId ? match.matchId : match._id;
					matchInt = setInterval(function(block, match) {
						liveWrapper(block, match);
					}, 5000, matchBlock, match);
				}
			});
		}
	};

	var scheduleRepopulateMatch = function(matchBlock, match) {
		scheduleGetMatchInfo(match, matchBlock, function(resp, match, matchBlock) {
			populateMatch(matchBlock, match, resp);
		});
	};

	var populateMatch = function(matchBlock, match, matchInfo, callback) {
		log(match);
		log(matchInfo);
		
		match.matchId && !matchBlock.data('matchId') ? matchBlock.data('matchId', match.matchId) : matchBlock.data('matchId', match._id);
		if (match.teams) {
			matchBlock.find("div.team_name_left").parent().data('teamId', match.teams[0].teamId);
			matchBlock.find("div.team_name_right").parent().data('teamId', match.teams[1].teamId);
		}
		else if (match.top || match.bottom) { //battlefy
			matchBlock.find("div.team_name_left").parent().data('teamId', matchInfo ? matchInfo.top.teamID : match.top.teamID);
			matchBlock.find("div.team_name_right").parent().data('teamId', matchInfo ? matchInfo.bottom.teamID : match.bottom.teamID);
			if (matchBlock.hasClass('tbd')) {
				if (match.top.team) {
					matchBlock.find("div.team_name_left").html(match.top.team.name);
					matchBlock.find('.team_logo img').eq(0).attr('src', 'http://s3.amazonaws.com/eleague-prod/team/' + getImgName(match.top.team.name) + '.png');
				}
				if (match.bottom.team) {
					matchBlock.find("div.team_name_right").html(match.bottom.team.name);
					matchBlock.find('.team_logo img').eq(1).attr('src', 'http://s3.amazonaws.com/eleague-prod/team/' + getImgName(match.bottom.team.name) + '.png');
				}
				if (match.top.team && match.bottom.team) {
					matchBlock.removeClass('tbd');
				}
			}
		}

		if (match.bestOf && match.bestOf == 1) {
			if (match.map) {
				matchBlock.find('.map-name').html(getMapDisplayName(match.map));
				matchBlock.find('.map-num').html(matchInfo.maps.length);
				matchBlock.find('.map-total').html(matchInfo.bestOf);
				matchBlock.find(".matchup-count").first().addClass("hide");

				// matchBlock.find(".tab-lineups").removeClass("hide");
				// matchBlock.find(".tab-live-stats").removeClass("hide");
				// matchBlock.find(".tab-final-score").addClass("hide");
			}
			if ((match.state == "live" || match.state == "ongoing" && !(matchInfo && matchInfo.state && (matchInfo.state == "finished" || matchInfo.state == "final"))) || (matchInfo && matchInfo.state && (matchInfo && (matchInfo.state == "live" || matchInfo.state =="ongoing")))) {
				log("live match populating");
				populateLiveMatch(matchBlock, match, matchInfo);
				matchBlock.find(".upcoming-match").first().addClass("hide");
				if (matchBlock.find(".match-live-banner").first().find('span').html() == 'LIVE') {
					matchBlock.find(".match-live-banner").first().removeClass("hide").find('span').first().append(match.title ? ' - ' + match.title.split('<span>')[0] : '');
				}
				matchBlock.find(".map-holder").first().removeClass("hide");

				matchBlock.find(".tab-lineups").removeClass("hide");
				matchBlock.find(".tab-live-stats").removeClass("hide");
				matchBlock.find(".tab-final-score").addClass("hide");
				if ($('.live-now-bar:not(.hide)').length == 0) {
					matchBlock.next().after($('.live-now-bar').eq(0).removeClass('hide' + (!matchBlock.hasClass('yt') ? ' yt' : '') + (!matchBlock.hasClass('gc') ? ' gc' : '')).addClass((matchBlock.hasClass('yt') ? ' yt' : '') + (matchBlock.hasClass('gc') ? ' gc' : '')));
				}

				var games = matchInfo && matchInfo.maps ? matchInfo.maps[0].games : match.maps[0].games ? match.maps[0].games : [];
				var curRound = games.length > 0 ? games[games.length - 1] : null;
				if (curRound) {
					for (var teamCount = 0; teamCount < 2; teamCount++) {
						var teamName = curRound.teams[teamCount].teamId;
						if (teams[teamName] && teams[teamName].lineup.length) {
							for (var playerCountData = 0; playerCountData < 5; playerCountData++) {
								var tag = curRound.teams[teamCount].players[playerCountData].steamName;
								for (var playerCountObj = 0; playerCountObj < 5; playerCountObj++) {
									if (teams[teamName].lineup[playerCountObj].field_gamertag == tag) {
										teams[teamName].lineup[playerCountObj].dead = curRound.teams[teamCount].players[playerCountData].dead;
									}
								}
							}
						}
					}
				}
			}
			else if (match.state == "finished" || match.state == "final" || (matchInfo && matchInfo.state && (matchInfo.state == "finished" || matchInfo.state =="final"))) {
				if (!matchBlock.hasClass('final')) {
					log("finished match populating");
					populateFinishedMatch(matchBlock, match, matchInfo);
					matchBlock.find('.match-live-banner').addClass('hide');
					matchBlock.find(".match-finished-banner").first().removeClass("hide").find('span').first().append(match.title ? ' - ' + match.title.split('<span>')[0] : '');
					matchBlock.find(".map-holder").first().removeClass("hide");
					$('.live-now-bar').addClass('hide');
					matchBlock.find(".tab-lineups").addClass("hide");
					matchBlock.find(".tab-live-stats").removeClass("hide");
					matchBlock.find(".tab-final-score").removeClass("hide");
				}
				else {
					getNextMatch(matchBlock, match, matchInfo);
				}
			}
			else if (match.state == 'cancelled') {
				matchBlock.addClass('hide');
			}
			else {
				log("upcoming bo1 match");
				populateUpcomingMatch(matchBlock, match, matchInfo);
				matchBlock.find(".upcoming-match").first().removeClass("hide");
				matchBlock.find(".tab-lineups").removeClass("hide");
				matchBlock.find(".tab-live-stats").addClass("hide");
				matchBlock.find(".tab-final-score").addClass("hide");
			}
		}
		else if (match.bestOf && match.bestOf == 3) {
			var bo3 = matchBlock.next();
			//bo3.removeClass("hide");
			if (((match.state == "live" || match.state == "ongoing") || (matchInfo && matchInfo.state && (matchInfo.state == "live" || matchInfo.state =="ongoing"))) && !(matchInfo && (matchInfo.state == "finished" || matchInfo.state == "final"))) {
				populateLiveBo3Match(matchBlock, match, matchInfo);
				if (matchBlock.find(".match-live-banner").first().removeClass("hide").find('span').html() == 'LIVE' && match.title) {
					matchBlock.find(".match-live-banner").first().find('span').first().append(' - ' + match.title.split('<span>')[0]);
				}
				//matchBlock.find(".map-holder").first().removeClass("hide");
				matchBlock.find(".tab-lineups").removeClass("hide");
				matchBlock.find(".tab-live-stats").removeClass("hide");
				matchBlock.find(".tab-final-score").addClass("hide");
				matchBlock.find(".upcoming-match").addClass("hide");
				matchBlock.removeClass('pre')
				if ($('.live-now-bar:not(.hide)').length == 0) {
					matchBlock.next().after($('.live-now-bar').eq(0).removeClass('hide' + (!matchBlock.hasClass('yt') ? ' yt' : '') + (!matchBlock.hasClass('gc') ? ' gc' : '')).addClass((matchBlock.hasClass('yt') ? ' yt' : '') + (matchBlock.hasClass('gc') ? ' gc' : '')));
				}
			}
			else if (match.state == "finished" || match.state == "final") {
				populateFinishedMatch(matchBlock, match, matchInfo);
				matchBlock.find(".match-finished-banner").first().removeClass("hide").find('span').first().append(match.title ? ' - ' + match.title.split('<span>')[0] : '');
				//matchBlock.find(".map-holder").first().removeClass("hide");
				if (matchBlock.next().next().hasClass('.live-now-bar')) {
					$('.live-now-bar').addClass('hide');
				}
				matchBlock.find(".tab-lineups").addClass("hide");
				matchBlock.find(".tab-live-stats").removeClass("hide");
				matchBlock.find(".tab-final-score").removeClass("hide");
				matchBlock.removeClass('pre').addClass('final');
				matchBlock.next(".bo3").addClass("final");
			}
			else if (match.state == "starting" || match.state == "pre" || match.state == "waiting" || match.state == "captain_pick" || match.state == "voting" || match.state == "configuring" || match.state =="ready" || match.state =="pending") {
				log("upcoming bo3 match");
				populateUpcomingMatch(matchBlock, match, matchInfo);
				matchBlock.find(".upcoming-match").removeClass("hide");

				if (!matchBlock.hasClass('tbd')) {
					matchBlock.find(".tab-lineups").removeClass("hide");
				}
				matchBlock.find(".tab-live-stats").addClass("hide");
				matchBlock.find(".tab-final-score").addClass("hide");
			}

			if (!matchInfo && match && match.maps) {
				matchInfo = match;
			}
			if (matchInfo && matchInfo.maps) {
				for (var i = 0; i < 3; i++) {
					var map = matchInfo.maps[i];
					var leftScore = -1,
						rightScore = -1;
					if (map) {
						bo3.find("[data-game='" + (i + 1) + "'] .map-index").html(i + 1);
						for (var j = 0; j < 2; j++) {
							if (map.teams && map.teams[j] && map.teams[j].teamId && map.teams[j].teamName != 'TBD') {
								var side = map.teams[j].teamId == matchBlock.find('.score-holder').eq(0).data('teamId') ? '.left' : '.right';
								if (map.teams[j].score != undefined) {
									var scoreHolder = bo3.find('.game').eq(i).find(side + ' .score');
									scoreHolder.html(map.teams[j].score);
									if (side == '.left') {
										leftScore = map.teams[j].score;
									}
									else {
										rightScore = map.teams[j].score;
									}
									//bo3.find("[data-game='" + (i + 1) +"'] " + side + " .score").removeClass("hide");
									if ((map.state == 'final' || map.state == 'finished') && rightScore > -1) {
										if (leftScore > rightScore) {
											scoreHolder.addClass('loser');
										}
										else {
											scoreHolder.addClass('loser');
										}
									}
									if (side == '.left') {
										leftScore = map.teams[j].score;
									}
								}
							}
						}
						if (map.state == 'live' && map.games) {
							var curRound = map.games[map.games.length - 1];
							var sh = $('.head-to-head:not(.hide) .match_holder .match-live-banner:not(.hide) ~ .match_holder .score-holder').removeClass('ter ct');
							for (var teamCount = 0; teamCount < 2; teamCount++) {
								var teamName = curRound.teams[teamCount].teamId;
								if (sh.eq(0).data('teamId') == curRound.teams[teamCount].teamId) {
									sh.eq(0).addClass(curRound.teams[teamCount].role == 'terrorists' ? 'ter' : 'ct');
								}
								else {
									sh.eq(1).addClass(curRound.teams[teamCount].role == 'terrorists' ? 'ter' : 'ct');
								}
								if (teams[teamName]) {
									for (var playerCountData = 0; playerCountData < 5; playerCountData++) {
										var tag = curRound.teams[teamCount].players[playerCountData].steamName;
										for (var playerCountObj = 0; playerCountObj < 5; playerCountObj++) {
											if (teams[teamName].lineup[playerCountObj].field_gamertag == tag) {
												teams[teamName].lineup[playerCountObj].dead = curRound.teams[teamCount].players[playerCountData].dead;
											}
										}
									}
								}
							}
						}
					}
				}
				matchBlock.find('.map-name').html(getMapDisplayName(matchInfo.maps[matchInfo.maps.length - 1].mapName));
				matchBlock.find('.map-num').html(matchInfo.maps.length);
				matchBlock.find('.map-total').html(matchInfo.bestOf);
			}
			for (var i = 0; i < 3; i++) {
				bo3.find("[data-game='" + (i +1) + "'] .map-index").html(i + 1);
				if (match.maps[i]) {
					bo3.find('.game').eq(i).find('.map-name').html(getMapDisplayName(match.maps[i].map));
				}
				else if (matchInfo.maps[i]) {
					bo3.find('.game').eq(i).find('.map-name').html(getMapDisplayName(matchInfo.maps[i].mapName));
				}
			}
		}
		else { //from battlefy
			if (matchInfo ? matchInfo.isComplete : match.isComplete) {
				log("finished battlefy match populating");
				populateFinishedMatch(matchBlock, match, matchInfo);
				matchBlock.find('.match-live-banner').addClass('hide');
				matchBlock.find(".match-finished-banner").removeClass("hide").find('span').first().append(match.title ? ' - ' + match.title.split('<span>')[0] : '');
				matchBlock.find(".map-holder").first().removeClass("hide");
				$('.live-now-bar').addClass('hide');
				matchBlock.find(".tab-lineups").addClass("hide");
				matchBlock.find(".tab-live-stats").removeClass("hide");
				matchBlock.find(".tab-final-score").removeClass("hide");
			}
			else if (matchInfo ? matchInfo.isMarkedLive : match.isMarkedLive) {
				log("live battlefy match populating");
				populateLiveMatch(matchBlock, match, matchInfo);
				matchBlock.find(".upcoming-match").first().addClass("hide");
				if (matchBlock.find(".match-live-banner").first().find('span').html() == 'LIVE') {
					matchBlock.find(".match-live-banner").first().removeClass("hide").find('span').first().append(match.title ? ' - ' + match.title.split('<span>')[0] : '');
				}
				matchBlock.find(".map-holder").first().removeClass("hide");
				matchBlock.find(".tab-lineups").removeClass("hide");
				matchBlock.find(".tab-live-stats").removeClass("hide");
				matchBlock.find(".tab-final-score").addClass("hide");
				if ($('.live-now-bar:not(.hide)').length == 0 && !matchBlock.next().next().hasClass('live-now-bar')) {
					matchBlock.next().after($('.live-now-bar').eq(0).removeClass('hide' + (!matchBlock.hasClass('yt') ? ' yt' : '') + (!matchBlock.hasClass('gc') ? ' gc' : '')).addClass((matchBlock.hasClass('yt') ? ' yt' : '') + (matchBlock.hasClass('gc') ? ' gc' : '')));
				}
			}
			else {
				log("upcoming battlefy match");
				populateUpcomingMatch(matchBlock, match, matchInfo);
				matchBlock.find(".upcoming-match").first().removeClass("hide");
				matchBlock.find(".tab-lineups").removeClass("hide");
				matchBlock.find(".tab-live-stats").addClass("hide");
				matchBlock.find(".tab-final-score").addClass("hide");
			}
		}
		if (callback) {
			callback();
		}
	};

	var populateUpcomingMatch = function(matchBlock, match, matchInfo) {
		matchBlock.find(".matchup-watch-link").first().addClass("hide");
		if (match.map) {
			matchBlock.find('.map-name').html(getMapDisplayName(match.mapName));
			matchBlock.find(".map-holder").first().removeClass("hide");
		}
	};

	var populateLiveMatch = function(matchBlock, match, matchInfo) {
		matchBlock.find('.map-name').html(getMapDisplayName(match.map));
		matchBlock.find('.map-num').html(matchInfo.maps.length);
		matchBlock.find('.map-total').html(matchInfo.bestOf);
		matchBlock.find(".matchup-watch-link").first().removeClass("hide");
		matchBlock.removeClass('pre').addClass('live');
		if ((matchInfo && matchInfo.maps && matchInfo.maps.length > 0 && match.maps[0].teams && matchInfo.maps[0].teams.length == 2) ||
			(match && match.teams && match.teams.length == 2 && match.teams[0].teamId && match.teams[1].teamId)) {
			if (match.bestOf == 3 || !matchInfo) {
				var leftScore = match.teams[0].teamId == matchBlock.find(".team_score_left").first().data('jsonid') ? match.teams[0].score : match.teams[1].score;
				var rightScore = match.teams[1].teamId == matchBlock.find(".team_score_right").first().data('jsonid') ? match.teams[1].score : match.teams[0].score;
			} 
			else if (matchInfo) {
				if (matchInfo.matchOngoing) {
					leftScore = match.teams[0].teamId == matchInfo.maps[0].teams[0].teamId ? matchInfo.maps[0].teams[0].score : matchInfo.maps[0].teams[1].score;
					rightScore = match.teams[1].teamId == matchInfo.maps[0].teams[1].teamId ? matchInfo.maps[0].teams[1].score : matchInfo.maps[0].teams[0].score;
				}
				else {
					leftScore = match.teams[0].teamId == matchInfo.maps[0].teams[0].teamId ? matchInfo.maps[0].teams[0].score : match.teams[0].score;
					rightScore = match.teams[1].teamId == matchInfo.maps[0].teams[1].teamId ? matchInfo.maps[0].teams[1].score : match.teams[1].score;
				}
			}
			matchBlock.find(".team_score_left").first().html(leftScore);
			matchBlock.find(".team_score_right").first().html(rightScore);
			//$('.head_to_head.clash .live-match .score-holder').eq(teamCount).addClass(map.games[map.games.length - 1].teams[teamCount].role == 'terrorists' ? 'ter' : 'ct');
			var games = matchInfo && matchInfo.maps ? matchInfo.maps[0].games : match.maps[0].games ? match.maps[0].games : [];
			var currMatch = games.length > 0 ? games[games.length - 1] : null;
			matchBlock.find('.score-holder').removeClass('ter ct');
			var team1 = matchBlock.find('.score-holder').eq(0);
			if (currMatch) {
				if (team1.data('teamId') == currMatch.teams[0].teamId) {
					team1.addClass(currMatch.teams[0].role == 'terrorists' ? 'ter' : 'ct');
					matchBlock.find('.score-holder').eq(1).addClass(currMatch.teams[1].role == 'terrorists' ? 'ter' : 'ct');
				}
				else {
					team1.addClass(currMatch.teams[1].role == 'terrorists' ? 'ter' : 'ct');
					matchBlock.find('.score-holder').eq(1).addClass(currMatch.teams[0].role == 'terrorists' ? 'ter' : 'ct');
				}
			}
		}
		else { //battlefy match
			matchBlock.find(".team_score_left").first().html(matchInfo ? matchInfo.top.score : match.top.score ? match.top.score : 0);
			matchBlock.find(".team_score_right").first().html(matchInfo ? matchInfo.bottom.score : match.bottom.score ? match.bottom.score : 0);
		}
	};

	var populateLiveBo3Match = function(matchBlock, match, matchInfo) {
		matchBlock.find(".matchup-watch-link").first().removeClass("hide");
		matchBlock.removeClass('pre').addClass('live');
		var leftScore = 0,
			rightScore = 0;
		if (match.teams && match.teams.length == 2 && match.teams[0] && match.teams[0].teamName && match.teams[1] && match.teams[1].teamName) {
			if (match.teams[0].score == "0" && match.teams[1].score == "0" && (matchInfo && matchInfo.maps.length > 0 && (matchInfo.maps[0].state == 'final' || matchInfo.maps[0].state == 'finished'))) { //need to update live scores
				if (matchInfo.maps[0].teams[0].teamId == match.teams[0].teamId) {
					if (parseInt(matchInfo.maps[0].teams[0].score) > parseInt(matchInfo.maps[0].teams[1].score)) {
						leftScore = match.teams[0].score = "1";
					}
					else {
						rightScore = match.teams[1].score = "1";
					}
				}
				else {
					if (parseInt(matchInfo.maps[0].teams[0].score) > parseInt(matchInfo.maps[0].teams[1].score)) {
						rightScore = match.teams[1].score = "1";
					}
					else {
						leftScore = match.teams[0].score = "1";
					}
				}
			}
			else if (((match.teams[0].score == "0" && match.teams[1].score == "1") || (match.teams[0].score == "1" && match.teams[1].score == "0")) && matchInfo && matchInfo.maps.length > 1 && (matchInfo.maps[1].state == 'final' || matchInfo.maps[1].state == 'finished')) {
				if (matchInfo.maps[0].teams[0].teamId == match.teams[0].teamId) {
					if (parseInt(matchInfo.maps[1].teams[0].score) > parseInt(matchInfo.maps[0].teams[1].score)) {
						leftScore = match.teams[0].score = "1";
					}
					else {
						rightScore = match.teams[1].score = "1";
					}
				}
				else {
					if (parseInt(matchInfo.maps[0].teams[0].score) > parseInt(matchInfo.maps[0].teams[1].score)) {
						rightScore = match.teams[1].score = "1";
					}
					else {
						leftScore = match.teams[0].score = "1";
					}
				}
			}
			else {
				leftScore = match.teams[0].score;
				rightScore = match.teams[1].score;
			}
			matchBlock.find(".team_score_left").first().html(leftScore);
			matchBlock.find(".team_score_right").first().html(rightScore);
		}
	};

	var populateFinishedMatch = function(matchBlock, match, matchInfo) {
		matchBlock.find(".matchup-watch-link").first().addClass("hide");
		matchBlock.removeClass('pre live').addClass('final');
		var leftMatchScore = 0,
			rightMatchScore = 0;
		if ((matchInfo && matchInfo.maps && matchInfo.maps[0].teams && matchInfo.maps[0].teams.length == 2 && matchInfo.maps[0].teams[0].teamId && matchInfo.maps[0].teams[1].teamId) ||
			(match.maps[0].teams && match.maps[0].teams.length == 2 && match.maps[0].teams[0].teamId && match.maps[0].teams[1].teamId) ||
			(match.teams && match.teams.length == 2 && match.teams[0].teamId && match.teams[1].teamId)) {
			if (match.bestOf == 3) {
				var leftScore = leftMatchScore = parseInt(match.teams[0].score);
				var rightScore = rightMatchScore = parseInt(match.teams[1].score);
			}
			else {
				log(match.teams);
				if (matchInfo) {
					var leftScore = match.teams[0].teamId == matchInfo.maps[0].teams[0].teamId ? parseInt(matchInfo.maps[0].teams[0].score) : parseInt(matchInfo.maps[0].teams[1].score);
					var rightScore = match.teams[1].teamId == matchInfo.maps[0].teams[1].teamId ? parseInt(matchInfo.maps[0].teams[1].score) : parseInt(matchInfo.maps[0].teams[0].score);
				}
				else {
					leftScore = match.teams[0].teamId == matchBlock.find(".team_score_left").first().data('jsonid') ? parseInt(match.teams[0].score) : parseInt(match.teams[1].score);
					rightScore = match.teams[1].teamId == matchBlock.find(".team_score_right").first().data('jsonid') ? parseInt(match.teams[1].score) : parseInt(match.teams[0].score);
				}
				if (leftScore > rightScore) {
					leftMatchScore = 1;
				}
				else {
					rightMatchScore = 1;
				}
			}
			matchBlock.find(".team_score_left").first().html(leftScore);
			matchBlock.find(".team_score_right").first().html(rightScore);
			if (leftScore > rightScore) {
				matchBlock.find(".team_score_right").first().addClass("loser");
			}
			else {
				matchBlock.find(".team_score_left").first().addClass("loser");
			}
		}
		else { //battlefy match
			matchBlock.find(".team_score_left").first().html(matchInfo ? matchInfo.top.score : match.top.score);
			matchBlock.find(".team_score_right").first().html(matchInfo ? matchInfo.bottom.score : match.bottom.score);
		}
		if (matchInfo) {
			getNextMatch(matchBlock, match, matchInfo);
		}
	};

	var scheduleGetMatchInfo = function(match, matchBlock, callback) {
		log(match);
		if (tournamentID == 'rl') {
			urlStr = 'https://ddyflphxlufnj.cloudfront.net/matches/' + match._id + '?extend[top.team]=true&extend[bottom.team]=true';
			dt = 'json';
		}
		else {
			urlStr = jsonpUrl + match.matchId + '/live.json';
			dt = 'jsonp';
		}
		if (match.matchId == 963257) {
			log('trying manual feed');
			callback(null, match, matchBlock);
		}
		else {
			$.ajax({
				url: urlStr,
				dataType: dt,
				crossDomain: true,
				success: function(data, status) {
					log("match populated: " + match.matchId);
					if (data.length) {
						data = data[0];
					}
					if (data._id == '5a1dbdd4bc1143034dfe2466' || data._id == '5a1dbdd4bc1143034dfe246c') { //match upside down in battlefy
						data = reverseMatch(data);
					}
					if (match.matchId && match.bestOf == null) {
						match = data;
					}
					callback(data, match, matchBlock);
				},
				error: function(xhr, status, error) {
					log("match not populated: " + match.matchId);
					callback(null, match, matchBlock);
				}
			});
		}
	};

	var getNextMatch = function(matchBlock, match, matchInfo) {
		if (liveMatchId == matchInfo.matchId || liveMatchId == matchInfo._id) {
			clearInterval(matchInt);
			liveMatchId = matchInt = 0;
		}
		matchBlock = matchBlock.nextAll('.head-to-head:not(.final)').eq(0);
		if (matchBlock != [] && matchBlock.length != 0 && matchBlock.data('matchId') && !matchInt) {
			if (tournamentID == 'rl') {
				match = { _id: matchBlock.data('matchId') };
			}
			else {
				match = { matchId: matchBlock.data('matchId') };
			}
			var liveWrapper = function(block, match) {
				log("refreshing Live Match: " + matchBlock.data('matchId'));
				scheduleRepopulateMatch(block, match);
			}
			liveMatchId = match.matchId ? match.matchId : match._id;
			matchInt = setInterval(function(block, match) {liveWrapper(block, match);}, 5000, matchBlock, match);
			log('dispatching matchEnded');
			window.dispatchEvent(new CustomEvent('matchEnded'));
		}
	};

	var scheduleGetDayInfo = function(currDay, dayblock, callback) {
		if (currDay == '20171201' || currDay == '20171202') {
			url = jsonpUrl + tournamentID + '/groupASchedule.json';
		}
		else if (currDay == '20171201b' || currDay == '20171202b') {
			url = jsonpUrl + tournamentID + '/groupBSchedule.json';
		}
		else if (currDay == '20171203') {
			url = jsonpUrl + tournamentID + '/playoffs.json';
		}
		else {
			url = jsonpUrl + tournamentID + "/" + currDay + "/schedule.json";
		}
		log(url);
		$.ajax({
			url: url,
		 	dataType: 'jsonp',
			crossDomain: true,
			success: function(data, status) {
				if (currDay == '20171201') {
					tempData = [data[2], data[3]];
					scheduleGetDayInfo('20171201b', dayblock, callback);
				}
				else if (currDay == '20171202') {
					data[5] = reverseMatch(data[5]);
					tempData = [data[4], data[5], data[0], data[1]];
					scheduleGetDayInfo('20171202b', dayblock, callback);
				}
				else if (callback && typeof callback == "function") {
					if (currDay == '20171201b') {
						data = {matches : tempData.concat(data[2], data[3])};
						tempData = [];
					}
					else if (currDay == '20171202b') {
						data[5] = reverseMatch(data[5]);
						data = {matches : [tempData[0], tempData[1], data[4], data[5], tempData[2], tempData[3], data[0], data[1]]};
						tempData = [];
					}
					else if (currDay == '20171203') {
						data = {matches: data};
					}
					callback(data, dayblock);
				}
			},
			error: function(xhr, status, error) {
				callback(null, dayblock);
			}
		});
	};

	var scheduleGetMatchStats = function(matchId, callback) {
		var url = jsonpUrl + matchId + "/stats.json";
		log(url);
		$.ajax({
			url: url,
		 	dataType: "jsonp",
			crossDomain: true,
			success: function(data, status) {
				log(data);
				log(status);
				if (callback && typeof callback == "function") {
					callback(data);
				}
			},
			error: function(xhr, status, error) {
				log(error);
				log(status);
				callback(null);
			}
		});
	};

	var reverseMatch = function(match) {
		var top = match.top;
		match.top = match.bottom;
		match.bottom = top;
		return match;
	};

	var getMapDisplayName = function(mapString) {
		if (map[mapString]) {
			return map[mapString];
		}
		else {
			return mapString;
		}
	};

	var getQueryVariable = function(variable) {
	    var query = window.location.search.substring(1);
	    var vars = query.split('&');
	    for (var i = 0; i < vars.length; i++) {
	        var pair = vars[i].split('=');
	        if (decodeURIComponent(pair[0]) == variable) {
	            return decodeURIComponent(pair[1]);
	        }
	    }
		return null;
	};

	var getImgName = function(team) {
		switch(team) {
			case 'Method':
				return 'method_0';
				break;
			case 'Ghost Gaming':
				return 'ghost_0';
				break;
			case 'Gale Force eSports':
				return 'gailforce';
				break;
			case 'G2 Esports':
				return 'g2_0';
				break;
			case 'Cloud9':
				return 'c9';
				break;
			case 'Mock-It eSports':
				return 'mockit_0';
				break;
			case 'PSG eSports':
				return 'paris';
				break;
			case 'Chiefs eSports Club':
				return 'cheif';
				break;
		}
	};

	var log = function (s) {
		//console.log(s);
	};

	$(document).ready(function() {
		var startDate = $('.start-date').html();
		var today = new Date();
		var path = window.location.pathname.replace(/\/$/, '');
		var len = $('.tabs .tab-link').length;

		if (path.indexOf('schedule') > -1) {
			var params = window.location.search;
			log(params);

			log(getQueryVariable("week"));
			tournamentID = $('.tournid').html();
			//currentWeek = getQueryVariable("week") != null ? getQueryVariable("week") : Math.floor(moment.duration(today.diff(startDate)).asWeeks()) + 1;
			currentWeek = getQueryVariable("week") != null ? getQueryVariable("week") : Math.floor((new Date(today) - new Date(startDate)) / (7*dayInMilli)) + 1;
			if (currentWeek <= 0) {
				currentWeek = 1;
			}
			else if (tournamentID == 'rl') {
				if (currentWeek == 1) {
					var currentDay = (Math.floor((new Date(today) - new Date(startDate)) / (dayInMilli))) % 7;
					if (currentDay == 1) {
						currentWeek = 2;
					}
					else if (currentDay > 1) {
						currentWeek = 3;
					}
				}
				else if (currentWeek > 1) {
					currentWeek = 3;
				}
			}
			else if (tournamentID == '800') { //major-2018
				var currentDay = (Math.floor((new Date(today) - new Date(startDate)) / (dayInMilli))) % 7;
				switch (currentDay) {
					case 1:
						currentWeek == 1 ? currentWeek = 2 : currentWeek == 2 ? currentWeek = 6 : currentWeek = 10;
						break;
					case 2:
						currentWeek == 1 ? currentWeek = 3 : currentWeek == 2 ? currentWeek = 7 : currentWeek = 11;
						break;
					case 3:
						currentWeek == 1 ? currentWeek = 4 : currentWeek = 8;
						break;
					case 0:
						currentWeek == 1 ? currentWeek = 1 : currentWeek == 2 ? currentWeek = 5 : currentWeek = 9;
						break;
					default:
						currentWeek == 2 ? currentWeek = 9 : currentWeek = 1;
						break;
				}
			}
			else if (currentWeek > len) {
				currentWeek = len;
			}

			$(".matchup-tabs").removeClass("hide");	
			//$("#tab-" + currentWeek).addClass("current");
			$("li.tab-link").removeClass("current");
			$("li.tab-link[data-tab='tab-" + currentWeek + "']").addClass("current");
			$('.dropdown-toggle .text').html($("li.tab-link[data-tab='tab-" + currentWeek + "']").html());

			populateWeek(currentWeek);
			populated[currentWeek] = true;

			var schedNavItems = $('.tabs .tab-link');
			switch (schedNavItems.length) {
				case 3:
					schedNavItems.addClass('col-4');   //33%
					break;
				case 4:
					schedNavItems.addClass('col-3');   //25%
					break;
				case 5:
					schedNavItems.addClass('col-1-5'); //20%
					break;
			}

			$(".tab-link").on("click", function() {
				$("#mobile-selector option").removeAttr("selected");

				var tempweek = ($(this).data("tab").split("-")[1]);
				$("li.tab-link, .schedule-week").removeClass("current");
				$(".schedule-week.week-" + (tempweek)).addClass("current");
				$("li.tab-link[data-tab='tab-" + (tempweek) + "']").addClass("current");
				if (!populated[tempweek]) {
					log("populating week: " + tempweek);
					populateWeek(tempweek);
					populated[tempweek] = true;
					$(".schedule-week.week-" + (tempweek) + " .matchup-tabs").removeClass("hide");
				}
				$('.dropdown-toggle .text').html($("li.tab-link[data-tab='tab-" + tempweek + "']").html());
				$("#mobile-selector option[value='" + $(this).data("tab") + "']").attr("selected");
				clearInterval(matchInt);
				liveMatchId = matchInt = 0;
			});

			$("#mobile-selector").change(function() {
			    var tabNumber = $(this).val();
			    $("#" + tabNumber).addClass("current");

				var tempweek = (tabNumber.split("-")[1] - 1);
				if (!populated[tempweek]) {
					populateWeek(tempweek);
					populated[tempweek] = true;
				}
			    $(".schedule-week").not("#" + tabNumber).removeClass("current");
			});
		}
	});
}(jQuery));