
jQuery(document).ready(function($) {
		getHLTVData();
});

var getHLTVData = function(callback) {
	
	jQuery( ".views-field-field-cs-go-player-id > div" ).each(function(index) {
		//var player_id = jQuery( ".views-field-field-cs-go-player-id > div" ).html();
		var player_id = jQuery(this).text();
		console.log(player_id);
		var url = 'http://eleague.hltv.org/api/type=player&key=nYZpxK9y9WpMMrbx&playerid=' + player_id;
		jQuery.ajax({
			url: url,
			dataType: "json",
			crossDomain: true,
			success: function(data, status) {
				console.log(data);
				console.log(status);
				if (callback) {
					callback(data);
				}
				jQuery(".kd-ratio > div")[index].append((data[0].kd).toFixed(2));
				jQuery(".headshots > div")[index].append(data[0].headshotpercent);
				jQuery(".rounds > div")[index].append(data[0].rounds);
			},
			error: function(xhr, status, error) {
				if (callback) {
					console.log(status);
					console.log(error);
					callback(topPerformers);
				}
			}
		});
	});
}
