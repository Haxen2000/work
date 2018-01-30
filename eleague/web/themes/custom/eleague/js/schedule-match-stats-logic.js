var statsInt = 0;
var jsonpUrl = 'http://data.eleague.com/jsonp/csgo/';
var createDrawerEvents = function(matchBlock) {
	matchBlock.on("click", function(event) {
		var tabObj = jQuery("li.tab-link.current");
		var currTab = tabObj.length ? tabObj.data("tab") : '-1';
		//if (currTab.split("-")[1] > 6) {
			verifyDrawer(jQuery(event.currentTarget));
		//}
	});

	matchBlock.find(".tab").on("click", function(event) {
		event.stopPropagation();
		var activeDrawer = "";
		if (jQuery(this).hasClass("tab-lineups")) {
			activeDrawer = "lineups";
		} else if (jQuery(this).hasClass("tab-final-score")) {
			activeDrawer = "final-score";
		} else if (jQuery(this).hasClass("tab-live-stats")) {
			activeDrawer = "stats";
		}
		
		console.log(activeDrawer);
		if (activeDrawer != '') {
			verifyDrawer(jQuery(this).parents(".head-to-head"), activeDrawer);
		}
	});
};

var verifyDrawer = function(matchBlock, activeDrawer) {
	if (!matchBlock.next().hasClass('open')) {
		populateDrawer(matchBlock, function() {
			console.log("drawerPopulated");

			/*if (jQuery(matchBlock).next().hasClass('bo3')) {
				matchBlock = jQuery(matchBlock).next();
			}*/
			
			toggleDrawer(matchBlock, activeDrawer);
			matchBlock.nextAll('.drawer').eq(0).find(".match-stats .table-wrapper").on("click", function(event) {
				console.log("click");
				if (!jQuery(this).hasClass("animate-visible")) {
					jQuery(".match-stats .table-wrapper").removeClass("animate-visible");
					jQuery(this).addClass("animate-visible");
				}
			});
		});
	}
	else {
		toggleDrawer(matchBlock, activeDrawer);
	}
};

var closeDrawers = function(matchBlock) {
	var block = jQuery('.drawer');
	block.removeClass('open team-lineup-drawer match-stats-drawer final-score-drawer');
	
	block.find(".lineups").addClass("hide");
	block.find(".lineup-player").addClass("hide").removeClass("animate-visible");
	block.find(".match-stats").addClass("hide");
	block.find(".match-stats .table-wrapper").removeClass("animate-visible");
	block.find(".final-scores").addClass("hide");
	block.find(".final-score").addClass("hide");
	block.find(".final-score-player").addClass("hide").removeClass("animate-visible");
	jQuery(".tab").removeClass("active");
};

var openLineup = function(matchBlock) {
	jQuery(".drawer").removeClass('team-lineup-drawer match-stats-drawer final-score-drawer');
	var block = matchBlock.nextAll('.drawer').eq(0);

	block.addClass("team-lineup-drawer");
	
	block.find(".final-scores").addClass("hide");
	block.find(".final-score").addClass("hide");
	block.find(".final-score-player").addClass("hide").removeClass("animate-visible");
	block.find(".final-score-stats").addClass("hide");
	
	block.find(".match-stats").addClass("hide");
	block.find(".match-stats .table-wrapper").removeClass("animate-visible");
	
	block.find(".lineups").removeClass("hide");
	block.find(".lineup-player").removeClass("hide").addClass("animate-visible");
	block.find(".lineup-stats").removeClass("hide");
	
	jQuery(".tab").removeClass("active");
	//matchBlock.hasClass('bo3') ? matchBlock.prev().find(".tab-lineups").addClass("active") : matchBlock.find(".tab-lineups").addClass("active");
	matchBlock.find(".tab-lineups").addClass("active");
};

var openStats = function(matchBlock) {
	jQuery(".drawer").removeClass("team-lineup-drawer");
	jQuery(".drawer").removeClass("match-stats-drawer");
	jQuery(".drawer").removeClass("final-score-drawer");

	var block = matchBlock.nextAll('.drawer').eq(0);

	block.addClass("match-stats-drawer");

	block.find(".final-scores").addClass("hide");
	block.find(".final-score").addClass("hide");
	block.find(".final-score-player").addClass("hide").removeClass("animate-visible");
	block.find(".final-score-stats").addClass("hide");

	block.find(".lineups").addClass("hide");
	block.find(".lineup-player").removeClass("hide").addClass("animate-visible");
	block.find(".lineup-stats").addClass("hide");

	block.find(".match-stats").removeClass("hide");
	block.find(".match-stats .table-wrapper:not(.hide)").last().addClass("animate-visible");
	jQuery(".tab").removeClass("active");
	//matchBlock.hasClass('bo3') ? matchBlock.prev().find(".tab-live-stats").addClass("active") : matchBlock.find(".tab-live-stats").addClass("active");
	matchBlock.find(".tab-live-stats").addClass("active");
};

var openFinalScore = function(matchBlock) {
	jQuery(".drawer").removeClass("team-lineup-drawer");
	jQuery(".drawer").removeClass("match-stats-drawer");
	jQuery(".drawer").removeClass("final-score-drawer");

	var block = matchBlock.nextAll('.drawer').eq(0);

	block.addClass("final-score-drawer");

	block.find(".match-stats").addClass("hide");
	block.find(".match-stats .table-wrapper").removeClass("animate-visible");
	
	block.find(".lineups").addClass("hide");
	block.find(".lineup-player").addClass("hide").removeClass("animate-visible");
	block.find(".lineup-stats").addClass("hide");
	
	block.find(".final-scores").removeClass("hide");
	block.find(".final-score").removeClass("hide");
	block.find(".final-score-player").removeClass("hide").addClass("animate-visible");
	block.find(".final-score-stats").removeClass("hide");

	jQuery(".tab").removeClass("active");
	//matchBlock.hasClass('bo3') ? matchBlock.prev().find(".tab-final-score").addClass("active") : matchBlock.find(".tab-final-score").addClass("active");
	matchBlock.find(".tab-final-score").addClass("active");
};

var toggleDrawer = function(matchBlock, activeDrawer) {
	//var currOpen = jQuery(matchBlock).next().hasClass('bo3') ? matchBlock.next().next().hasClass("open") : matchBlock.next().hasClass("open");
	var currOpen = jQuery(matchBlock).nextAll('.drawer').eq(0).hasClass("open");
	console.log(activeDrawer);
	if (currOpen && !activeDrawer) {
		closeDrawers(matchBlock);
	}
	else if (currOpen && activeDrawer) {
		if (activeDrawer == "lineups") {
			if (matchBlock.find(".tab-lineups").hasClass("active")) {
				closeDrawers(matchBlock);
			}
			else {
				openLineup(matchBlock);
			}
		}
		else if (activeDrawer == "stats") {
			if (matchBlock.find(".tab-live-stats").hasClass("active")) {
				closeDrawers(matchBlock);
			}
			else {
				openStats(matchBlock);
			}
		}
		else if (activeDrawer == "final-score") {
			if (matchBlock.find(".tab-final-score").hasClass("active")) {
				closeDrawers(matchBlock);
			}
			else {
				openFinalScore(matchBlock);
			}
		}					
	}
	else if (!currOpen) {
		closeDrawers(matchBlock);
		//jQuery(matchBlock).next().hasClass('bo3') ? matchBlock.next().next().addClass("open") : matchBlock.next().addClass("open");
		matchBlock.nextAll('.drawer').eq(0).addClass("open");
		if (activeDrawer) {
			if (activeDrawer == "lineups") {
				openLineup(matchBlock);
			}
			else if (activeDrawer == "stats") {
				openStats(matchBlock);
			}
			else if (activeDrawer == "final-score") {
				openFinalScore(matchBlock);
			}		
		}
		else {
			openLineup(matchBlock);
		}
	}
};

var populateDrawer = function(matchBlock, callback) {
	console.log("populating drawer");
	var teamLeft = matchBlock.find("div.score-holder").eq(0).data('teamId'); //matchBlock.data("team-left");
	var teamRight = matchBlock.find("div.score-holder").eq(1).data('teamId'); //matchBlock.data("team-right");
	var matchId = matchBlock.data("matchId");
	var matchState = matchBlock.hasClass('pre') ? 'pre' : matchBlock.hasClass('live') ? 'live' : 'final';
	var drawer = matchBlock.nextAll('.drawer').eq(0); //jQuery(".drawer-template").first().clone();
	//drawer.removeClass("drawer-template");
	//drawer.removeClass("hide");
	
	jQuery('.drawer .left').removeClass('ter ct');
	jQuery('.drawer .right').removeClass('ter ct');
	clearInterval(statsInt);
	statsInt = 0;

	/*if (jQuery(matchBlock).next().hasClass('bo3')) {
		jQuery(matchBlock).next().after(drawer);
	}
	else {
		matchBlock.after(drawer);
	}*/

	scheduleGetMatchStats(matchId, function(stats) {
		if (matchState == 'pre' || matchState == 'live') {
			populateTeamLineup(drawer, 'left', teamLeft, stats);
			populateTeamLineup(drawer, 'right', teamRight, stats);
			if (matchState == 'live') {
				populateMatchStats(drawer, teamLeft, teamRight, stats);
				statsInt = setInterval(function(matchId, teamLeft, teamRight) {
					scheduleGetMatchStats(matchId, function(stats) {
						populateMatchStats(jQuery('.match-stats-drawer'), teamLeft, teamRight, stats);
						populateTeamLineup(drawer, 'left', teamLeft, stats);
						populateTeamLineup(drawer, 'right', teamRight, stats);
						jQuery('.match-stats-drawer').find(".match-stats .table-wrapper:not(.hide)").last().addClass("animate-visible");
					})
				}, 5000, matchId, teamLeft, teamRight);
			}
		}
		else if (matchState == 'final') {
			populateFinalScore(drawer, 'left', teamLeft, stats);
			populateFinalScore(drawer, 'right', teamRight, stats);
			populateMatchStats(drawer, teamLeft, teamRight, stats);
		}
		callback();
	});
};

var populateFinalScore = function(parentBlock, side, team, stats) {
	console.log("populating FinalScore");
	console.log(team);
	console.log(side);
	console.log(stats);
	var lineup = getLineup(parentBlock, side, team);
	for (var i = 0; i < lineup.length; i++) {
	//for (var i in lineup) {
	//	if (teams[team].lineup.hasOwnProperty(i)) {
			//var playerBlock = parentBlock.find(".final-score-template").first().clone();
			//playerBlock.removeClass("final-score-template");
			//playerBlock.addClass("final-score-player");
			//playerBlock.removeClass("hide");

			//parentBlock.find(".final-scores .final-score." + side).first().append(playerBlock);
			playerBlock = parentBlock.find('.' + side + " .final-score-player").eq(i);
			populatePlayerFinalScore(playerBlock, team, lineup[i], stats);
			console.log(playerBlock);
	//	}
	}
	populateLineupStats(parentBlock, side, team, stats);
};

var getLineup = function(block, side, team, callback) {
	/*var url = '/json/premier/player-data/' + team;
	console.log(url);
	if (!teams[team]) {
		jQuery.ajax({
			url: url,
		 	dataType: "json",
			crossDomain: true,
			success: function(data, status) {
				console.log(data);
				console.log(status);
				teams[team] = { lineup: data };
				callback(data);
			},
			error: function(xhr, status, error) {
				console.log(error);
				console.log(status);
				callback(null);
			}
		});
	}
	else {
		callback(teams[team].lineup);
	}*/
	var data = [];
	if (block.hasClass('drawer') && (block.prev().hasClass('final') || block.parent().parent().prev().hasClass('final'))) {
		var players = block.find('.final-score.' + side + ' .final-score-player');
	}
	else if (block.hasClass('drawer')) {
		players = block.find('.lineup.' + side + ' div.lineup-player');
	}
	else {
		players = block.find('.lineup.' + side + ' tr.lineup-player');
	}
	for (var i = 0; i < players.length; i++) {
		data[i] = {
			'gamerTag': players.eq(i).find('.player-gamertag').html(),
			'name': players.eq(i).find('.player-name').html(),
			'id': players.eq(i).data('elid')
		}
	}
	teams[team] = { lineup: data };
	return data;
};

var populatePlayerFinalScore = function(playerBlock, team, player, stats) {
	var pid = player.id;
	var playerStats = [];
	if (stats) {
		for (var i = 0; i < stats.maps.length; i++) {
			for (var j = 0; j < stats.maps[i].teams.length; j++) {
				var teamObj = stats.maps[i].teams[j];
				if (teamObj.teamId == team) {
					for (var k = 0; k < teamObj.players.length; k++) {
						if (teamObj.players[k].id == pid) {
							playerStats.push(teamObj.players[k]);
							break;
						}
						else if (k == teamObj.players.length - 1) {
							jQuery(playerBlock[0]).remove();
						}
					}
				}
			}
		}
	}
	
	if (playerStats.length) {
		playerBlock.find(".player-page").first().attr("href", "player.playerLink");
		if (!player.playerLink) {
			playerBlock.find(".player-page").addClass("hide");
		}
		playerBlock.find(".player-social").first().attr("href", "player.twitter");
		if (!player.twitter) {
			playerBlock.find(".player-social").first().addClass("hide");
		}
		playerBlock.find(".player-video").first().attr("href", "player.videoLink");
		if (!player.videoLink) {
			playerBlock.find(".player-video").first().addClass("hide");	
		}
		if (!player.videoLink && !player.socialLink) {
			playerBlock.find(".player-links-divider").first().addClass("hide");
		}

		console.log(stats);
		console.log(playerStats);

		playerArgs = {};
		playerArgs.kills = 0;
		playerArgs.deaths = 0;
		playerArgs.headshots = 0;
		playerArgs.damageGivenPerRound = 0;
		playerArgs.assists = 0;
		for (var i = 0; i < playerStats.length; i++ ) {
			playerArgs.kills += playerStats[i].kills;
			playerArgs.deaths += playerStats[i].deaths;
			playerArgs.headshots += playerStats[i].headshots;
			playerArgs.damageGivenPerRound += playerStats[i].damageGivenPerRound;
			playerArgs.assists += playerStats[i].assists;
		}

		if (stats && stats.maps.length > 0 && playerStats) {
			if (playerArgs.death != 0) {
				playerBlock.find(".kd-ratio").html((playerArgs.kills/playerArgs.deaths).toFixed(2));
			} else {
				playerBlock.find(".kd-ratio").html("0");
			}
			playerBlock.find(".kd-diff").html(playerArgs.kills - playerArgs.deaths);
			playerBlock.find(".total-kills").html(playerArgs.kills);
			playerBlock.find(".total-headshots").html(playerArgs.headshots);
			playerBlock.find(".dmg-per-rnd").html((playerArgs.damageGivenPerRound/playerStats.length).toFixed(2));
			playerBlock.find('.assists').html(playerArgs.assists);
			playerBlock.find('.deaths').html(playerArgs.deaths);
		} else {
			playerBlock.find(".player-stats").hide();
		}
	}
};

var populateTeamLineup = function(parentBlock, side, team, stats) {
	console.log("populating TeamLineup");
	console.log(team);
	populateLineupStats(parentBlock, side, team, stats);
	var lineup = getLineup(parentBlock, side, team);
	for (var i = 0; i < lineup.length; i++) {
	//for (var i in lineup) {
	//for (var i in teams[team].lineup) {
		//if (teams[team].lineup.hasOwnProperty(i)) {
			/*var playerBlock = parentBlock.find(".lineup-player-template").first().clone();
			playerBlock.removeClass("lineup-player-template");
			playerBlock.addClass("lineup-player");
			playerBlock.removeClass("hide");
			parentBlock.find(".lineups .lineup." + side).first().append(playerBlock);*/
			playerBlock = parentBlock.find('.' + side + " .lineup-player").eq(i);
			populatePlayerLineup(playerBlock, team, lineup[i], stats);
		//}
	//}
	}
};

var populateLineupStats = function(parentBlock, side, team, stats) {
	if (stats) {
		var teamStats = [];
		for (var i = 0; i < stats.maps.length; i++) {
			for (var j = 0; j < stats.maps[i].teams.length; j++) {
				if (stats.maps[i].teams[j].teamId == team) {
					teamStats.push(stats.maps[i].teams[j]);
				}
			}
		}
		var finalStats = null;
		if (teamStats.length == 0) {
			finalStats = teamStats;
		}
		else {
			finalStats = teamStats[0];
			for (i = 1; i < teamStats.length; i++) {
				for (var j in finalStats) {
					if (j != "players" && j != "teamName" && j != "teamId") {
						finalStats[j] = finalStats[j] + teamStats[i][j];
					}
				}
			}
		}
		var kdr = (finalStats["kills"] / finalStats["deaths"]).toFixed(2);
		var kills = finalStats["kills"];
		var deaths = finalStats["deaths"];
		parentBlock.find(".kdr ."+ side + " .stat").html(kdr);
		parentBlock.find(".kills ."+ side + " .stat").html(kills);
		parentBlock.find(".deaths ."+ side + " .stat").html(deaths);


		var otherSide = (side == "right" ? "left" : "right");
		if ( parentBlock.find(".kdr ."+ otherSide + " .stat").html() != "" ) {
			var otherKdr = parseFloat(parentBlock.find(".kdr ."+ otherSide + " .stat").html());
			if (otherKdr > kdr) {
				parentBlock.find(".kdr ."+ side + " .bar-inner").width(((kdr/otherKdr) * 100) + "%" );
				parentBlock.find(".kdr ."+ otherSide + " .bar-inner").width("100%");
			} else {
				parentBlock.find(".kdr ."+ side + " .bar-inner").width("100%");
				parentBlock.find(".kdr ."+ otherSide + " .bar-inner").width(((otherKdr/kdr) * 100) + "%");
			}
		}

		if ( parentBlock.find(".kills ."+ otherSide + " .stat").html() != "" ) {
			var otherKills = parseFloat(parentBlock.find(".kills ."+ otherSide + " .stat").html());
			if (otherKills > kills) {
				parentBlock.find(".kills ."+ side + " .bar-inner").width(((kills/otherKills) * 100) + "%" );
				parentBlock.find(".kills ."+ otherSide + " .bar-inner").width("100%");
			} else {
				parentBlock.find(".kills ."+ side + " .bar-inner").width("100%");
				parentBlock.find(".kills ."+ otherSide + " .bar-inner").width(((otherKills/kills) * 100) + "%");
			}
		}

		if ( parentBlock.find(".deaths ."+ otherSide + " .stat").html() != "" ) {
			var otherDeaths = parseFloat(parentBlock.find(".deaths ."+ otherSide + " .stat").html());
			console.log(deaths, otherDeaths);
			if (otherDeaths > deaths) {
				parentBlock.find(".deaths ."+ side + " .bar-inner").width(((deaths/otherDeaths) * 100) + "%" );
				parentBlock.find(".deaths ."+ otherSide + " .bar-inner").width("100%");
			} else {
				parentBlock.find(".deaths ."+ side + " .bar-inner").width("100%");
				parentBlock.find(".deaths ."+ otherSide + " .bar-inner").width(((otherDeaths/deaths) * 100) + "%");
			}
		}
	} 
	else {
		parentBlock.find(".kdr ."+ side + " .stat").html("N/A");
		parentBlock.find(".kills ."+ side + " .stat").html("N/A");
		parentBlock.find(".deaths ."+ side + " .stat").html("N/A");
	}
};

var populatePlayerLineup = function(playerBlock, team, player, stats) {
	var pid = player.id;
	var playerStats = [];
	if (stats) {
		for (var i = 0; i < stats.maps.length; i++) {
			for (var j = 0; j < stats.maps[i].teams.length; j++) {
				var teamObj = stats.maps[i].teams[j];
				if (teamObj.teamId == team) {
					for (var k = 0; k < teamObj.players.length; k++) {
						if (teamObj.players[k].id == pid) {
							playerStats.push(teamObj.players[k]);
							break;
						}
						else if (k == teamObj.players.length - 1) {
							jQuery(playerBlock[0]).remove();
						}
					}
				}
			}
		}
	}
	
	//if (playerStats.length) {
		playerBlock.data("steamID", player.steamID);
		playerBlock.find(".player-page").first().attr("href", "player.playerLink");
		if (!player.playerLink) {
			playerBlock.find(".player-page").addClass("hide");
		}
		playerBlock.find(".player-social").first().attr("href", "player.twitter");
		if (!player.twitter) {
			playerBlock.find(".player-social").first().addClass("hide");
		}
		playerBlock.find(".player-video").first().attr("href", "player.videoLink");
		if (!player.videoLink) {
			playerBlock.find(".player-video").first().addClass("hide");	
		}
		if (!player.videoLink && !player.socialLink) {
			playerBlock.find(".player-links-divider").first().addClass("hide");
		}

		console.log(stats);
		console.log(playerStats);
		if (stats && stats.maps.length > 0 && playerStats.length) {
			if (playerStats[playerStats.length - 1].killDeathRatio != null) {
				playerBlock.find(".stat-kdr").html(playerStats[playerStats.length - 1].killDeathRatio.toFixed(2));
			} else {
				playerBlock.find(".stat-kdr").html("0");
			}
			playerBlock.find(".stat-k").html(playerStats[playerStats.length - 1].kills);
			playerBlock.find(".stat-d").html(playerStats[playerStats.length - 1].deaths);
			playerBlock.find(".stat-a").html(playerStats[playerStats.length - 1].assists);
		} else {
			playerBlock.find(".player-stats").hide();
			playerBlock.parents(".drawer").addClass("no-stats");
			playerBlock.parents(".drawer").find(".lineup-stats").addClass("no-stats");
			playerBlock.addClass("no-stats");
		}
	//}
};

var populateMatchStats = function(drawer, teamLeft, teamRight, stats) {
	//drawer.find('.match-stats .table-wrapper').remove();
	var len = stats.maps.length;
	if (stats && len > 0) {
		drawer.addClass("match-" + stats.maps.length);
		for (var i = 0; i < len; i++) {
			/*var tableBlock = drawer.find(".match-stats .template").first().clone();
			tableBlock.addClass("table-wrapper");
			tableBlock.removeClass("template");
			tableBlock.removeClass("hide");*/
			var tableBlock = drawer.find('.match-stats .table-wrapper').eq(i);
			tableBlock.find(".map").html("Map " + (i + 1));
			//populateTable(tableBlock, teamLeft, "left", stats.maps[i], i == stats.maps.length - 1);
			//populateTable(tableBlock, teamRight, "right", stats.maps[i], i == stats.maps.length - 1);
			populateTable(tableBlock, teamLeft, "left", stats.maps[i], drawer.prev().hasClass('bo3') ? !drawer.prev().prev().find('.final').length : drawer.prev().find('.final').length);
			populateTable(tableBlock, teamRight, "right", stats.maps[i], drawer.prev().hasClass('bo3') ? !drawer.prev().prev().find('.final').length : drawer.prev().find('.final').length);
			//drawer.find(".match-stats").append(tableBlock);
		}
		if (len == 1) {
			drawer.find('.match-stats .table-wrapper').eq(1).addClass('hide');
			drawer.find('.match-stats .table-wrapper').eq(2).addClass('hide');
		}
		else if (len == 2) {
			drawer.find('.match-stats .table-wrapper').eq(1).removeClass('hide');
			drawer.find('.match-stats .table-wrapper').eq(2).addClass('hide');
		}
	}
	else {
		drawer.addClass("match-1");
		var tableBlock = drawer.find(".match-stats .template").first().clone();
		tableBlock.addClass("table-wrapper");
		tableBlock.removeClass("template");
		tableBlock.removeClass("hide");
		tableBlock.find(".map").html("Map 1");
		populateEmptyTable(tableBlock, teamLeft, "left");
		populateEmptyTable(tableBlock, teamRight, "right");
		//drawer.find(".match-stats").append(tableBlock);
	}
};

var populateTable = function(tableBlock, team, side, stats, live) {
	tableBlock.find("." + side + " th").first().html(stats.teams[stats.teams[0].teamId == team ? 0 : 1].teamName);
	var scores = jQuery('.head-to-head:not(.hide) .live-match .match-live-banner:not(.hide) ~ .live-match .score-holder');
	if (live) {
		if (side == 'left') {
			if (scores.eq(0).hasClass('ter')) {
				tableBlock.find('.left').addClass('ter');
			}
			else if (scores.eq(0).hasClass('ct')) {
				tableBlock.find('.left').addClass('ct');
			}
		}
		else {
			if (scores.eq(1).hasClass('ter')) {
				tableBlock.find('.right').addClass('ter');
			}
			else if (scores.eq(1).hasClass('ct')) {
				tableBlock.find('.right').addClass('ct');
			}
		}
	}
	var lineup = getLineup(tableBlock, side, team);
	//for (var i in lineup) {
	for (var i = 0; i < lineup.length; i++) {
		//if (lineup.hasOwnProperty(i)) {
			var pid = lineup[i].id;
			for (var k = 0; k < stats.teams.length; k++) {
				if (stats.teams[k].teamId == team) {
					for (var j = 0; j < stats.teams[k].players.length; j++) {
						if (stats.teams[k].players[j].id == pid) {
							lineup[i].stats = stats.teams[k].players[j];
							break;
						}
						else if (j == stats.teams[k].players.length - 1) {
							lineup[i].stats = undefined;
						}
					}
				}
			}

			//var row = tableBlock.find("tr.template").first().clone();
			var row = tableBlock.find('tr[data-elid=' + pid + ']');
			if (lineup[i].dead && live) {
				row.addClass('dead');
			}
			else {
				row.removeClass('dead');
			}
			row.find("td.name").html('<img src="//cdn.eleague.com/img/csgo/clash/dead.png">' + lineup[i].gamerTag);
			if (lineup[i].stats) {
				row.find("td.k-d").html(lineup[i].stats["kills"] + "-" + lineup[i].stats["deaths"]);
				var dif = (lineup[i].stats["kills"] - lineup[i].stats["deaths"]);
				dif = dif > 0 ? "+" + dif : dif;
				row.find("td.dif").html(dif);
				if (lineup[i].stats["killDeathRatio"] != null) {
					row.find("td.kdr").html(lineup[i].stats["killDeathRatio"].toFixed(2));
				} else {
					row.find("td.kdr").html("0");
				}
				row.find("td.adpr").html(lineup[i].stats["damageGivenPerRound"].toFixed(2));
				row.find("td.bp").html(lineup[i].stats["bombPlants"]);
				row.find("td.bd").html(lineup[i].stats["bombDefuses"]);
				row.removeClass("template");
				row.removeClass("hide");
				tableBlock.find("table." + side).append(row);
			}
		//}
	}
};

var populateEmptyTable = function(tableBlock, team, side) {
	tableBlock.find("." + side + " th").first().html(team);
	var lineup = getLineup(tableBlock, side, team);
	//for (var i in lineup) {
	for (var i = 0; i < lineup.length; i++) {
	//for (var i in teams[team].lineup) {
		//if (teams[team].lineup.hasOwnProperty(i)) {
			var row = tableBlock.find("tr.template").first().clone();
			row.find("td").html("-");
			row.find("td").first().html(lineup[i].field_gamertag);
			row.removeClass("template");
			row.removeClass("hide");
			tableBlock.find("table." + side).append(row);
		//}
	}
};

var scheduleGetMatchStats = function(matchId, callback) {
	var url = jsonpUrl + matchId + "/stats.json";
	console.log(url);
	jQuery.ajax({
		url: url,
	 	dataType: "jsonp",
		crossDomain: true,
		success: function(data, status) {
			console.log(data);
			console.log(status);
			if (callback && typeof callback == "function") {
				callback(data);
			}
		},
		error: function(xhr, status, error) {
			console.log(error);
			console.log(status);
			callback(null);
		}
	});
};