(function ($) {
var order = ["Total kills",
    "KD-diff",
    "Damage per round",
    "Total assists",
    "Total headshots",
    "1+ kill rounds",
    "Rating",
    "Clutches (1vsX) won"];

$(document).ready(function() {
    /*var path = window.location.pathname.replace(/\/$/, '');
    if (path == "/performer-leaders" || path == '') {*/
    populatePerformers();
    //}
});

var populatePerformers = function() {
    console.log("populating performers");
    getHLTVData(function(resp) {
        console.log(resp);
        resp.sort(categorySort);
        console.log('performer data sort');
        for(var i = 0; i < resp.length; i++) {
            console.log(Object.keys(resp[i])[0]);
            console.log(order.indexOf(Object.keys(resp[i])[0]));
            if (resp.hasOwnProperty(i) && (order.indexOf(Object.keys(resp[i])[0]) >= 0)) {
                var block = $(".performer-template").clone()
                    .removeClass("performer-template")
                    .addClass("performer");
                $(".performer-container").append(block);
                populatePerformerBlock(resp[i], block);
            }
        }
    });
}

var populatePerformerBlock = function(data, block) {
    console.log(data);
    for (var j in data) {
        block.find(".category").html(j == "Rating" ? 'Rating 1.0' : j);
        var value = Math.round(10*data[j][0]["value"])/10;
        if (j == "KD-diff") {
            value = "+" + value;
        } else if (j == "1+ kill rounds") {
            value = value + "%";
        } else  if (j == "Damage per round") {
            value = "+" + value;
        } else if (j == "Rating") {
            value = Math.round(100*data[j][0]["value"])/100;
        }
        block.find(".score").html(value);
        var team = data[j][0]["teamName"];
        var gamerTag = data[j][0]["playerNick"]
        for (var k in teams[team]["lineup"]) {
            if (teams[team]["lineup"][k]["gamerTag"] == gamerTag || teams[team]["lineup"][k]["altTag"] == gamerTag || teams[team]["lineup"][k]["hltv"] == gamerTag) {
                block.find(".name").html(teams[team]["lineup"][k]["name"]);
                var flag = teams[team]["lineup"][k]["flag"].toLowerCase();
                block.find(".flag").attr("src", "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/2.2.0/flags/4x3/" + flag + ".svg");
                gamerTag = teams[team]["lineup"][k]["gamerTag"];
            }
        }

        block.find(".gamerTag").html(gamerTag);
        block.find(".player-image").attr("src", getPlayerImageUrl(data[j][0]["teamName"], gamerTag, "@1"));
        block.find(".player-image-premier").attr("src", getPlayerImageUrl(data[j][0]["teamName"], gamerTag, "94x94"));

    }
    block.removeClass("hide");
}

var getHLTVData = function(callback) {
    var path = window.location.pathname.replace(/\/$/, '');
    var url = '';
    if (path === '' || path === '/premier' || path === '/premier-old') {
        url = 'http://eleague.hltv.org/leadersapi/eventid=3016&json=1';
    }
    else if(path == '/major-2018') {
        url = 'http://eleague.hltv.org/leadersapi/eventid=3247&json=1';
    }
    else if(path == '/major-2017/recap') {
        url = 'http://eleague.hltv.org/leadersapi/eventid=2471&json=1';
    }
    else if(path == '/major-qualifier/recap') {
        url = 'http://eleague.hltv.org/leadersapi/eventid=2472&json=1';
    }
    else if (path ==='/season2/recap') {
        url = 'http://eleague.hltv.org/leadersapi/eventid=2407&json=1';
    }
    else {
        url = 'http://eleague.hltv.org/leadersapi/eventid=2135&json=1';
    }
    $.ajax({
        url: url,
        dataType: "json",
        crossDomain: true,
        success: function(data, status) {
            console.log(data);
            console.log(status);
            if (callback) {
                callback(data);
            }
        },
        error: function(xhr, status, error) {
            if (callback) {
                console.log(status);
                console.log(error);
                callback(topPerformers);
            }
        }
    });
}

var categorySort = function(a,b) {
    if (order.indexOf(Object.keys(a)[0]) > order.indexOf(Object.keys(b)[0])) {
        return 1;
    } else if (order.indexOf(Object.keys(a)[0]) < order.indexOf(Object.keys(b)[0])) {
        return -1;
    }
    return 0;
}}(jQuery));
