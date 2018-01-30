(function ($) {
	var tournamentID = $('.tournid').html();
	var tableHeaderStr = '<tr><th>Rank</th><th>Team</th><th><span>Match</span>W&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;L</th><th><span>Map</span>Diff</th><th><span>Goal</span>Diff</th></tr>';
	var getStandings = function(group, callback) {
		$.ajax({
			url: 'http://data.eleague.com/jsonp/' + tournamentID + '/group' + group + 'Standings.json',
		 	dataType: "jsonp",
			crossDomain: true,
			success: function(data, status) {
				log(data);
				log(status);
				if (callback && typeof callback == "function") {
					callback(data, group.toLowerCase());
				}
			},
			error: function(xhr, status, error) {
				log(error);
				log(status);
				callback(null);
			}
		});
	};

	var sortData = function(resp, group) {
		resp.sort(function(b, a) {
			if (a.rrt1 == b.rrt1) {
				if (a.rrt2 == b.rrt2) {
					if (a.rrt3 == b.rrt3) {
						if (a.rrt4 == b.rrt4) {
							if (a.rrt6 == b.rrt6) {
								if (a.rrt7 == b.rrt7) {
									return a.rrt5 - b.rrt5;
								}
							}
							else {
								return a.rrt6 - b.rrt6;
							}
						}
						else {
							return a.rrt4 - b.rrt4;
						}
					}
					else {
						return a.rrt3 - b.rrt3;
					}
				}
				else {
					return a.rrt2 - b.rrt2;
				}
			}
			else {
				return a.rrt1 - b.rrt1;
			}
		});
		var str = '';
		for (var i = 0; i < resp.length; i++) {
			log(resp[i].team.name);
			str +=
			'<tr>' + 
				'<td>' + (i + 1) + '</td>' +
				'<td><img src="http://s3.amazonaws.com/eleague-prod/team/' + getImgName(resp[i].team.name) + '.png">' + resp[i].team.name + '</td>' +
				'<td>' + resp[i].wins + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + resp[i].losses + '</td>' +
				'<td>' + (resp[i].rrt6 > 0 ? '+' : '') + resp[i].rrt6 + '</td>' +
				'<td>' + (resp[i].rrt7 > 0 ? '+' : '') + resp[i].rrt7 + '</td>' +
			'</tr>';
		}
		$('.group' + group + ' table').html(tableHeaderStr + str);
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

	window.addEventListener('matchEnded', function () {
	    console.log('matchEnded listener');
	    setTimeout(function() {
			getStandings('A', sortData);
			getStandings('B', sortData);
		}, 5000);
	});

	getStandings('A', sortData);
	getStandings('B', sortData);
}(jQuery));