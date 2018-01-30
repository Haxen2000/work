(function ($) {
	var matches = [];
	var currSlide = null;
	var matchInt = 0,
		currWidth = 0,
		liveMatchId = 0;
	var json_id = $('.json_id').html();
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
	var interact = false;

	var reloadMatchSlider = function() {
		var moveSlides = false;
		for (var i in matches) {
			if (matches.hasOwnProperty(i)) {
				if (currSlide == null || currSlide.find('.landing-match').length >= 2) {
					currSlide = $('.landing-match-summary-slide-template').clone();
					currSlide.removeClass('landing-match-summary-slide-template');
					currSlide.removeClass('hide');
					currSlide.addClass('landing-match-summary-slide');
					$('.landing-match-summary-slides').append(currSlide);
				}

				if ($(matches[i]).data('state') != 'cancelled') {
					currSlide.append(matches[i]);
				}
				if (($(matches[i]).data('state') == 'live' || $(matches[i]).data('state') == 'ongoing') && i > 5) {
					moveSlides = true;
				}
			}
		}
		currSlide = null;

		$('.landing-match-summary-slide').removeClass('single');
		if ($('.landing-match-summary-slide').last().children().length == 1) {
			$('.landing-match-summary-slide').last().addClass('single');
		}

		$('#landing-match-summary .arrow-next').on('click', function() {
			interact = true;
			$('.landing-match-summary-slides').slick('slickNext');
			var currSlideNum = ($('.landing-match-summary-slides').slick('slickCurrentSlide') + 1) * 2 - 1;
			$('.heading .match-count .current').html(currSlideNum);
			if (currSlideNum > matches.length - (currWidth > 961 ? 4 : 2)) {
				$('#landing-match-summary').addClass('last');
			}
			else {
				$('#landing-match-summary').removeClass('last first');
			}
		});

		$('#landing-match-summary .arrow-prev').on('click', function() {
			interact = true;
			$('.landing-match-summary-slides').slick('slickPrev');
			var currSlideNum = ($('.landing-match-summary-slides').slick('slickCurrentSlide') + 1) * 2 - 1;
			$('.heading .match-count .current').html(currSlideNum);
			if (currSlideNum < 2) {
				$('#landing-match-summary').addClass('first');
			}
			else {
				$('#landing-match-summary').removeClass('last first');
			}
		});

		$('.landing-match-summary-slides').slick({
			infinite: false,
			slidesToShow: 2,
			arrows: false,
			initialSlide: moveSlides < 6 ? moveSlides : 5,
			responsive: [{
				breakpoint: 962,
				settings: {
					initialSlide: moveSlides,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}]
		});

		if (moveSlides > 1 && currWidth > 961 || moveSlides > 0 && currWidth < 962) {
			$('#landing-match-summary').removeClass('first');
		}
		else {
			$('#landing-match-summary').addClass('first');		
		}
		if (moveSlides > 3) {
			$('#landing-match-summary').addClass('last');
		}
		if (currWidth < 962 && $('.landing-match-summary-slide').length > 1) {
			$('.arrow').removeClass('hide-arrow');
		}
	};

	//init load call
	var populateMatchLanding = function(match) {
		log('populating match');
		var currMatch = match;
		var state = currMatch.find('.map').attr('class').split('map ')[1];
		if (state != 'final' && !matchInt) {
			log('setting match to be refreshed');
			var wrapper = function(block) {
				log('refreshing match');
				repopulateMatch(block);
			}
			matchInt = setInterval(function(block) {wrapper(block);}, 5000, currMatch);
			repopulateMatch(currMatch);
		}
	};

	var repopulateMatch = function(block) {
		var matchId = $(block).data('matchId')
		var mapIndex = $(block).data('mapIndex');
		log('repopping: ' + matchId);
		log('mapIndex: ' + mapIndex);
		getMatchInfoLanding(matchId, block, mapIndex, function(resp, block, mapIndex) {
			log(resp);
			if (resp) {
				if (resp.isComplete || resp.state == 'final' || resp.maps[mapIndex].state == 'final') {
					var mapBlock = block.find('.map').eq(0);
					if (mapBlock.hasClass('pre') && resp.maps && resp.maps[mapIndex]) {
						mapBlock.find('.map-name').html(map[resp.maps[mapIndex].mapName]);
					}
					mapBlock.removeClass('pre').removeClass('live').addClass('final');
					clearInterval(matchInt);
					matchInt = liveMatchId = 0;

					var newBlock;
					if (block.next().length) {
						newBlock = block.next();
						liveMatchId = newBlock.data('matchId');
					}
					else if (block.parent().next().length) {
						newBlock = block.parent().next().find('.landing-match').eq(0);
						liveMatchId = newBlock.data('matchId');
					}

					if (liveMatchId) {
						log("setting next match to be refreshed");
						interact = false;
						var preWrapper = function(block) {
							log("refreshing next Match");
							repopulateMatch(block);
						}
						matchInt = setInterval(function(block) {preWrapper(block);}, 5000, newBlock);
						repopulateMatch(newBlock);
					}
				}
				else if (resp.isMarkedLive || resp.state == 'live') {
					block.find('.map').removeClass('final').removeClass('pre').addClass('live');
					if (!interact) { //don't auto move if user interacted with the strip
						var moveSlides = $(block).parent().data('slickIndex');
						var max = Math.ceil(matches.length / 2) - 1;
						$('.landing-match-summary-slides').slick('slickGoTo', moveSlides);
						$('.heading .match-count .current').html(moveSlides > max ? max : (moveSlides > 0 && matches.length > 4) ? (moveSlides * 2 + 1) : 1);
						if (moveSlides > 0) {
							$('#landing-match-summary').removeClass('first');
						}
						if (moveSlides > max) {
							$('#landing-match-summary').addClass('last');
						}
					}
				}
				else {
					log('match is in pre state');
					block.find('.map').removeClass('final').removeClass('live').addClass('pre');
				}

				if (resp.top && resp.bottom) {
					if (resp.top.score != undefined) {
						block.find('.team .score').first().html(resp.top.score);
					}
					if (resp.bottom.score != undefined) {
						block.find('.team .score').last().html(resp.bottom.score);
					}
					if (block.hasClass('tbd')) {
						if (resp.top.team) {
							block.find('.team .name').eq(0).html(resp.top.team.name);
							block.find('.team img').eq(0).attr('src', 'http://s3.amazonaws.com/eleague-prod/team/' + getImgName(resp.top.team.name) + '.png');
						}
						if (resp.bottom.team) {
							block.find('.team .name').eq(1).html(resp.bottom.team.name);
							block.find('.team img').eq(1).attr('src', 'http://s3.amazonaws.com/eleague-prod/team/' + getImgName(resp.bottom.team.name) + '.png');
						}
						if (resp.top.team && resp.bottom.team) {
							block.removeClass('tbd');
						}
					}
				}
				else if (resp.maps && resp.maps[mapIndex] && resp.maps[mapIndex].teams && resp.maps[mapIndex].teams[0] && resp.maps[mapIndex].teams[1] && resp.maps[mapIndex].teams[0].score && resp.maps[mapIndex].teams[1].score) {
					if (resp.maps[mapIndex].teams[0].teamId == block.find('.team').first().data('jsonid')) {
						block.find(".team .score").first().html(resp.maps[mapIndex].teams[0].score);
						block.find(".team .score").last().html(resp.maps[mapIndex].teams[1].score);
					}
					else {
						block.find(".team .score").first().html(resp.maps[mapIndex].teams[1].score);
						block.find(".team .score").last().html(resp.maps[mapIndex].teams[0].score);
					}
				}
			}
		});
	};

	var getMatchInfoLanding = function(matchId, block, mapIndex, callback) {
		var url = '';
			//dataType = '';
		if (json_id == 'rl') {
			url = 'https://ddyflphxlufnj.cloudfront.net/matches/' + matchId + '?extend[top.team]=true&extend[bottom.team]=true';
			dataType = 'json';
		}
		else {
			url = 'http://data.eleague.com/jsonp/csgo/' + matchId + '/live.json';
			dataType = 'jsonp';
		}
		$.ajax({
			url: url,
			dataType: dataType,
			crossDomain: true,
			success: function(data, status) {
				log('match populated: ' + matchId);
				if (data.length) {
					data = data[0];
				}
				if (data._id == '5a1dbdd4bc1143034dfe2466' || data._id == '5a1dbdd4bc1143034dfe246c') { //match upside down in battlefy
					data = reverseMatch(data);
				}
				callback(data, block, mapIndex);
			},
			error: function(xhr, status, error) {
				log('match not populated: ' + matchId);
				callback(null, block, mapIndex);
			}
		});
	};

	var reverseMatch = function(match) {
		var top = match.top;
		match.top = match.bottom;
		match.bottom = top;
		return match;
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

	var log = function(s) {
		//console.log(s);
	};

	matches = $('.landing-match');
	currWidth = $( window ).width();

	for (var i = 0; i < matches.length; i++) {
		populateMatchLanding(matches.eq(i));
	}
	reloadMatchSlider();
}(jQuery));