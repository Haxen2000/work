getPlayerImageUrl = function(team, player, size) {
	var useNew
	for (var i = 0; i < teams[team].lineup.length; i++) {
		if (teams[team].lineup[i].gamerTag == player && teams[team].lineup[i].photoUrl) {
			return teams[team].lineup[i].photoUrl;
		}
	}
	
	var slug = teams[team].photoSlug != null ? teams[team].photoSlug : teams[team].photoName;
	return "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/94x94/" + slug + "/schedule_" + player + "_" + teams[team].photoName + "_" + size + ".png";
}

Astralis = {
	"name"		:	"Astralis",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/astralis.png",
	"twitter"	: 	"@astralisgg", 
	"matches"	: 	[],
	"photoName"	: 	"astralis", 
	"lineup" 	: 	[
		{
			"faceitID"		: "5cd2827e-9f73-4080-8cb2-82bee817a173",
			"gamerTag"		: "Xyp9x",
			"faceIt"		: "Xyp9x",
			"name"			: "Andreas Højsleth",
			"flag"			: "DK",
			"playerLink"	: 'Xyp9x',
			"socialLink"	: "@Xyp9x",
			"videoLink"		: 'xyp9x',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/astralis/xyp9x.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=4954'
		},
		{
			"faceitID"		: "aef66e5e-2054-4010-baa7-503eb620c0eb",
			"gamerTag"		: "kjaerbye",
			"faceIt"		: "Kjaerbye",
			hltv			: 'Kjaerbye',
			"name"			: "Markus Kjærbye",
			"flag"			: "DK",
			"playerLink"	: 'Kjaerbye',
			"socialLink"	: "@KjaerbyeCS",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/astralis/kjaerbye.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8394'
		},
		{
			"faceitID"		: "d6bc4849-5256-4463-a38e-bcd77fc31ff9",
			"gamerTag"		: "dev1ce",
			"faceIt"		: "dev1ce",
			"altTag"		: "device",
			hltv			: 'device', 
			"name"			: "Nicolai Reedtz",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@dev1ce",
			"videoLink"		: 'device',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/astralis/dev1ce.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7592'
		},
		{
			"faceitID"		: "7e80ed2a-8e39-457e-95c2-1c9ba9449daf",
			"gamerTag"		: "dupreeh",
			"faceIt"		: "dupreeh",
			"name"			: "Peter Rasmussen",
			"flag"			: "DK",
			"playerLink"	: 'dupreehcsgo',
			"socialLink"	: "@dupreehCSGO",
			"videoLink"		: 'dupreeh',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/astralis/dupreeh.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7398'
		},
		{
			"faceitID"		: "1be3d622-d52f-4edc-bb46-047faa65cb29",
			"gamerTag"		: "gla1ve",
			"faceIt"		: "gla1ve",
			"name"			: "Lukas Rossander",
			"flag"			: "DK",
			"playerLink"	: 'gla1ve',
			"socialLink"	: '@gla1ve_csgo',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/astralis/gla1ve.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7412'
		}
	]
};

EnVyUs = {
	"name"		: "EnVyUs",
	"lightLogo" : "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/home_logo_envyus_@2x.png", 
	"darkLogo"	: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/envyus.png",
	"twitter"	: "@TeamEnVyUs",
	"photoName"	: "envyus",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "9269548a-6cd4-46a7-a3b8-9f3816e52e49",
			"gamerTag"		: "kennys",
			"faceIt"		: "kennyS-",
			hltv			: 'kennyS',
			"name"			: "Kenny Schrub",
			"flag"			: "FR",
			"playerLink"	: 'OfficialkennyS',
			"socialLink"	: "@EnVy_kennyS",
			"videoLink"		: 'kennys',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/kennys.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7167'
		},
		{
			"faceitID"		: "7163ad85-3c68-4ba3-b36a-9f723345fd69",
			"gamerTag"		: "happy",
			"faceIt"		: "happy1",
			hltv			: 'Happy',
			"name"			: "Vincent Schopenhauer",
			"flag"			: "FR",
			"playerLink"	: 'Vincent-Happy-Schopenhauer-373605222806440',
			"socialLink"	: "@nV_HappyV",
			"videoLink"		: 'happycsgo',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/happy.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7429'
		},
		{
			"faceitID"		: "cd3d6d2c-d6ff-4c3d-b976-d63827baace9",
			"gamerTag"		: "SIXER",
			"faceIt"		: "SIXERj",
			"name"			: "Christophe Xia",
			"flag"			: "FR",
			"playerLink"	: 'SIXERj',
			"socialLink"	: "@ENVYUS_SIXER",
			"videoLink"		: 'sixercsgo',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/sixer.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=147'
		},
		{
			"faceitID"		: "de21905f-47e9-46c2-bfd2-e56f63795c87",
			"gamerTag"		: "apEX",
			"faceIt"		: "apEX",
			"name"			: "Dan Madesclaire",
			"flag"			: "FR",
			"playerLink"	: 'apEXcsgo',
			"socialLink"	: "@ENVYUS_apEX",
			"videoLink"		: 'apex',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/apex.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7322'
		},
		{
			"faceitID"		: "d670bb72-f778-4fa9-9e9f-f8b42cff3519",
			"gamerTag"		: "NBK-",
			"faceIt"		: "NBK",
			hltv			: 'NBK-',
			"name"			: "Nathan Schmitt",
			"flag"			: "FR",
			"playerLink"	: 'NathaNizzle',
			"socialLink"	: "@nV_NBK",
			"videoLink"		: 'nbk',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/nbk.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7168'
		}
	]
};

FazeClan = {
	"name"		: "Faze",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/faze.png",
	"twitter"	: "@FaZeClan",
	"photoName"	: 	"faze", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "b0a34846-190e-4130-ad99-21aa4a36e925",
			"gamerTag"		: "kioShiMa",
			"faceIt"		: "kio",
			"name"			: "Fabien Fiey",
			"flag"			: "FR",
			"playerLink"	: 'kiocsgo',
			"socialLink"	: "@kiocsgoo",
			"videoLink"		: 'kiocsgo',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=4959'
		},
		{
			"faceitID"		: "004cfd66-dbe2-4378-ba26-3d7617cd37aa",
			"gamerTag"		: "rain",
			"faceIt"		: "rainje",
			"name"			: "Håvard Nygaard",
			"flag"			: "NO",
			"playerLink"	: 'csgorain',
			"socialLink"	: "@FaZe_rainCS",
			"videoLink"		: 'raingomg',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8183'
		},
		{
			"faceitID"		: "4952cd82-4d60-4c06-b0a9-35cfb33756d1",
			"gamerTag"		: "aizy",
			"faceIt"		: "aizyh",
			"name"			: "Philip Aistrup",
			"flag"			: "DK",
			"playerLink"	: 'Aizycsgo',
			"socialLink"	: "@FaZe_aizy",
			"videoLink"		: 'aizycsgo',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8095'
		},
		{
			"faceitID"		: "1fea6910-19b9-43d3-aac2-c612b1d95b08",
			"gamerTag"		: "allu",
			"faceIt"		: "allub",
			"name"			: "Aleksi Jalli",
			"flag"			: "fi",
			"playerLink"	: 'allucsgo',
			"socialLink"	: '@alluCSGO',
			"videoLink"		: 'allub',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/faze/allu.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=695'
		},
		{
			"faceitID"		: "68179dc7-9381-4264-a26c-52693400f1eb",
			"gamerTag"		: "karrigan",
			"faceIt"		: "karrigan",
			"name"			: "Finn Andersen",
			"flag"			: "DK",
			"playerLink"	: 'karriganCSGO',
			"socialLink"	: "@karriganCSGO",
			"videoLink"		: 'karrigango',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/faze/karrigan.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=429'
		}	
	]
};

Flipsid3 = {
	"name"		: "Flipsid3",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/flipsid3.png",
	"twitter"	: "@FlipSid3Tactics",
	"photoName"	: "flipsid3", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "0ca93b88-3ec7-4e1e-8b2d-3ebfe31c3414",
			"gamerTag"		: "B1ad3",
			"faceIt"		: "B1ad3",
			"name"			: "Andrey Gorodensky",
			"flag"			: "UA",
			"playerLink"	: null,
			"socialLink"	: '@B1ad3__R',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/flipside/b1ad3.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=472'
		},
		{
			"faceitID"		: "fcd26f5a-2e6d-4ea7-8ac6-1e42f1b85e4c",
			"gamerTag"		: "WorldEdit",
			"faceIt"		: "WorldEdit",
			"name"			: "Georgi Yaskin",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: 'worldedit',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/flipside/worldedit.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7403'
		},
		{
			"faceitID"		: "0e91654b-9eda-49c4-af41-7a53168794cf",
			"gamerTag"		: "wayLander",
			"faceIt"		: "waylanderrrr",
			"name"			: "Jan Rahkonen",
			"flag"			: "FI",
			"playerLink"	: null,
			"socialLink"	: "@waylanderCS",
			"videoLink"		: null,
			"backup"		: true,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/flipside/waylander.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7796'
		},
		{
			"faceitID"		: "928857e9-48e7-41b1-b4e8-217fd1a6e51b",
			"gamerTag"		: "electroNic",
			"faceIt"		: "electronic",
			hltv			: 'electronic', 
			"name"			: "Denis Sharipov",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: '@electronicCSGO',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/flipside/electronic.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8918'
		},
		{
			"faceitID"		: "2caf4fbd-027c-4371-995f-9356fbbdb5d7",
			"gamerTag"		: "markeloff",
			"faceIt"		: "mark",
			"name"			: "Yegor Markelov",
			"flag"			: "UA",
			"playerLink"	: 'markeloff.ua',
			"socialLink"	: "@YegorMarkeloff",
			"videoLink"		: 'markeloff_csgo',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/flipside/markeloff.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=338'
		} 
	]
};

Fnatic = {
	"name"		: "Fnatic",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/fnatic.png",
	"twitter"	: "@FNATIC",
	"photoName"	: 	"fnatic", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "47946790-c6fa-49c6-a29c-8667ed9e656e",
			"gamerTag"		: "olofmeister",
			"faceIt"		: "olofmeister",
			"name"			: "Olof Kajbjer",
			"flag"			: "SE",
			"playerLink"	: 'olofmeister',
			"socialLink"	: "@olofmCS",
			"videoLink"		: 'olofmeister',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=885'
		},
		{
			"faceitID"		: "6f01bc34-897d-43d5-9b43-c6e49e408dd5",
			"gamerTag"		: "twist",
			"faceIt"		: "Twist",
			"name"			: "Simon Eliasson",
			"flag"			: "SE",
			"playerLink"	: 'Simon-twist-Eliasson-671402416276244',
			"socialLink"	: '@twistCSGO',
			"videoLink"		: 'twistpz',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/fnatic/twist.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7443'
		},
		{
			"faceitID"		: "d6bd0d6f-a068-4e10-b9a4-129297c8691f",
			"gamerTag"		: "disco doplan",
			"faceIt"		: "disco doplan",
			hltv			: "disco doplan",
			"name"			: "Joakim Gidetun",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@disco_doplan",
			"videoLink"		: 'discodoplan',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/fnatic/disco_doplan.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=9256'
		},
		{
			"faceitID"		: "8a2f2125-4d5a-4bf8-a5ff-10e7fb3ef2fa",
			"gamerTag"		: "KRIMZ",
			"faceIt"		: "KRIMZ",
			hltv			: 'KRIMZ',
			"name"			: "Freddy Johansson",
			"flag"			: "SE",
			"playerLink"	: 'OfficialKrimz',
			"socialLink"	: "@krimzCSGO",
			"videoLink"		: 'fnatickrimzcsgo',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/fnatic/krimz.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7528'
		},
		{
			"faceitID"		: "dc1ef6ab-b2fd-4733-9471-bc65aa222437",
			"gamerTag"		: "dennis",
			"faceIt"		: "dennisedman",
			hltv			: 'dennis',
			"name"			: "Dennis Edman",
			"flag"			: "SE",
			"playerLink"	: 'fnaticdennis',
			"socialLink"	: '@fnaticdennis',
			"videoLink"		: 'dennisedman',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/fnatic/dennis.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=1146'
		} 
	]
};

G2 = {
	"name"		:	"G2 Esports",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/600x600/g2.png",
	"twitter"	:   "@G2esports",
	"photoName"	: 	"g2", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "9356a075-fedc-46ee-96f0-38371035e926",
			"gamerTag"		: "ScreaM",
			"faceIt"		: "ScreaM",
			"name"			: "Adil Benrlitom",
			"flag"			: "BE",
			"playerLink"	: 'ScreaMdAK1nG',
			"socialLink"	: "@G2ScreaM",
			"videoLink"		: 'scream',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7390'
		},
		{
			"faceitID"		: "8d9e4df9-96b5-448d-82d8-c4a46ad2f368",
			"gamerTag"		: "bodyy",
			"faceIt"		: "bodyy",
			"name"			: "Alexandre Pianaro",
			"flag"			: "FR",
			"playerLink"	: 'Officialbodyy',
			"socialLink"	: "@g2bodyy",
			"videoLink"		: 'bodyycsgo',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8374'
		},
		{
			"faceitID"		: "71920781-21ed-4604-ba03-911b1dfb11a0",
			"gamerTag"		: "RpK",
			"faceIt"		: "RpKK",
			"name"			: "Cédric Guipouy",
			"flag"			: "FR",
			"playerLink"	: 'RpKTANK',
			"socialLink"	: "@G2RpK",
			"videoLink"		: 'rpk',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7169'
		},
		{
			"faceitID"		: "5a4e258d-c912-46b6-94f1-984d59150f82",
			"gamerTag"		: "SmithZz",
			"faceIt"		: "SmithZz",
			"name"			: "Edouard Dubourdeaux",
			"flag"			: "FR",
			"playerLink"	: 'OfficialSmithZz',
			"socialLink"	: "@G2SmithZz",
			"videoLink"		: 'smithzz',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7170'
		},
		{
			"faceitID"		: "ecd004fa-0215-4a42-965b-07ebefd69f0c",
			"gamerTag"		: "shox",
			"faceIt"		: "shox",
			"name"			: "Richard Papillon",
			"flag"			: "FR",
			"playerLink"	: 'Officialshox',
			"socialLink"	: "@G2shox",
			"videoLink"		: 'shoxiejesuss',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=1225'
		} 
	]
};

Gambit = {
	"name"		: "Gambit",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/Gambit2.png",
	"twitter"	: "@GambitEsports",
	"photoName"	: "gambit", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "d4b5f7d1-d51b-4050-ad5d-63ed8dc72904",
			"gamerTag"		: "AdreN",
			"faceIt"		: "AdreN",
			hltv			: 'AdreN',
			"name"			: "Dauren Kystaubayev",
			"flag"			: "KZ",
			"playerLink"	: 'adrent0t',
			"socialLink"	: "@AdreNcs",
			"videoLink"		: 'adrentot',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=334'
		},
		{
			"faceitID"		: "645357d3-d535-4630-90b9-d4263df2a225",
			"gamerTag"		: "Zeus =D",
			"faceIt"		: "zeus",
			hltv			: 'Zeus',
			"name"			: "Danylo Teslenko",
			"flag"			: "UA",
			"playerLink"	: 'ZeusCSGO',
			"socialLink"	: '@ZeusCS_GO',
			"videoLink"		: 'zeus',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/gambit/zeus.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=484'
		},
		{
			"faceitID"		: "0eb41c28-06d2-4351-8311-c7af9f792d13",//52075d4a-51ce-4d71-b302-36844e4e3021
			"gamerTag"		: "HObbit",
			"faceIt"		: "hobbitzce",
			hltv			: 'HObbit',
			"name"			: "Abay Khassenov",
			"flag"			: "KZ",
			"playerLink"	: null,
			"socialLink"	: '@HObbitcsgo',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/gambit/hobbit.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8528'
		},
		{
			"faceitID"		: "16316c98-371d-4585-bc8c-a77b82d2ba95",
			"gamerTag"		: "Dosia",
			"faceIt"		: "Dosia",
			hltv			: 'Dosia',
			"name"			: "Mihail Stolyarov",
			"flag"			: "RU",
			"playerLink"	: 'dosia.hr',
			"socialLink"	: "@MikhailDosia",
			"videoLink"		: 'dosia_csgo',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=735'
		},
		{
			"faceitID"		: "e42ed3c7-2f5d-4c9d-856b-39869e12d9d5",
			"gamerTag"		: "mou",
			"faceIt"		: "Mou-",
			hltv			: 'mou',
			"name"			: "Rustem Tlepov",
			"flag"			: "KZ",
			"playerLink"	: 'rtlepov',
			"socialLink"	: "@TlepovR",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=964'
		} 
	]
};

Godsent = {
	"name"		: "GODSENT",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/GODSENT.png",
	"lineup" 	: 	[
		{
			"faceitID"		: "663660ab-17e6-461c-96fa-401a410c0738",
			"gamerTag"		: "znajder",
			"faceIt"		: "DreaMy",
			"name"			: "Fredrik Andreas Lindberg",
			"flag"			: "SE",
			"playerLink"	: 'officialschneider',
			"socialLink"	: '@GODznajder',
			"videoLink"		: 'officialschneider',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/znajder.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3847'
		},
		{
			"faceitID"		: "5c90ca92-7ea3-4b0c-b2cb-25edb5c6b77d",
			"gamerTag"		: "flusha",
			"faceIt"		: "flusha",
			"name"			: "Carl Robin Matthias Roennquist",
			"flag"			: "SE",
			"playerLink"	: 'flushaCSGO',
			"socialLink"	: '@fnaticFlusha',
			"videoLink"		: 'flusha',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/flusha.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3055'
		},
		{
			"faceitID"		: "ff5182b8-4bd4-4109-b79a-3ace68698e88",
			"gamerTag"		: "pronax",
			"faceIt"		: "pronax",
			"name"			: "Erik Markus Haakan Wallsten",
			"flag"			: "SE",
			"playerLink"	: 'pronaxCSGO',
			"socialLink"	: '@godpronax',
			"videoLink"		: 'pronaxqwe',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/pronax.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=41'
		},
		{
			"faceitID"		: "6b03cf9d-93c7-45e3-9cf3-6a2d5456cdd2",
			"gamerTag"		: "Lekr0",
			"faceIt"		: "Lekr0",
			"name"			: "Jonas Olofsson",
			"flag"			: "SE",
			"playerLink"	: 'Lekr0',
			"socialLink"	: '@lekr0cs',
			"videoLink"		: 'lekr0',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/lekr0.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=9261'
		},
		{
			"faceitID"		: "4946fdbd-00e9-4408-91dd-6f3c87c39b23",
			"gamerTag"		: "jw",
			"faceIt"		: "JW",
			hltv			: 'JW',
			"name"			: "Bengt Jesper Wecksell",
			"flag"			: "SE",
			"playerLink"	: 'Officialjw',
			"socialLink"	: '@jwCSGO',
			"videoLink"		: 'jesperwow',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/jw.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3849'
		}
	]
};

HR = {
	"name"		: "Hellraisers",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/HellRaisers.png",
	"lineup" 	: 	[
		{
			"faceitID"		: "3fb3bf5f-51c8-48c4-84b2-72851bf083d8",
			"gamerTag"		: "STYKO",
			"faceIt"		: "STYKO",
			"name"			: "Martin Styk",
			"flag"			: "SK",
			"playerLink"	: 'styko.csgo',
			"socialLink"	: '@STYKOcsgo',
			"videoLink"		: 'stykop',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/styko.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=6904'
		},
		{
			"faceitID"		: "5c88f249-d2b6-4f38-ad9c-ea6a1959d17b",
			"gamerTag"		: "Zero",
			"faceIt"		: "PatrikZero",
			hltv			: 'Zero',
			"name"			: "Patrik Zudel",
			"flag"			: "SK",
			"playerLink"	: 'patrikzeroo',
			"socialLink"	: '@PatrikZero',
			"videoLink"		: 'patrikzero',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/zero.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8413'
		},
		{
			"faceitID"		: "040f3938-93f9-4ecf-9896-417992eeb1de",
			"gamerTag"		: "DeadFox",
			"faceIt"		: "DeadFox15",
			"name"			: "Bence Borocz",
			"flag"			: "HU",
			"playerLink"	: 'deadfoxstream',
			"socialLink"	: '@DeadFoxcsgo',
			"videoLink"		: 'deadfox15',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/deadfox.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8716'
		},
		{
			"faceitID"		: "c3faf504-e2b7-4713-9a19-fdf351d712fb",
			"gamerTag"		: "bondik",
			"faceIt"		: "bondik",
			"name"			: "Vladyslav Nechyporchuk",
			"flag"			: "UA",
			"playerLink"	: 'bondik.hr',
			"socialLink"	: '@bondik_hr',
			"videoLink"		: 'bondik_csgo',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/bondik.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2131'
		},
		{
			"faceitID"		: "f285526b-3643-410b-add3-41b067a3029b",
			"gamerTag"		: "ANGE1",
			"faceIt"		: "kkarasiow",
			"name"			: "Kyrylo Karasov",
			"flag"			: "UA",
			"playerLink"	: 'ange1csgo',
			"socialLink"	: '@OfficialANGE1',
			"videoLink"		: 'ange1csgo',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/ange1.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=339'
		}
	]
};

Liquid = {
	"name"		:	"Liquid",
	"logo"		: 	"http://cdn.eleague.com/csgo/images/teamliquid.png",
	"logoSmall" :	"http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/matchtracker/home_logo_TL_@2x.png",
	"twitter"	:   "@TeamLiquidPro",
	"photoName"	: 	"liquid",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "74f34268-5136-444c-a003-887a104cbcd1",
			"gamerTag"		: "Hiko",
			"faceIt"		: "Hiko",
			"name"			: "Spencer Joshua Martin",
			"flag"			: "us",
			"playerLink"	: 'OfficialHiko',
			"socialLink"	: "@Liquid_Hiko",
			"videoLink"		: 'hiko',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/liquid/hiko.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2644'
		},
		{
			"faceitID"		: "26fc6f28-4374-4339-9b5e-01a26340fb12",
			"gamerTag"		: "pimp",
			"faceIt"		: "Pimp",
			hltv			: 'Pimp',
			"name"			: "Jacob Winneche",
			"flag"			: "DK",
			"playerLink"	: 'PimpCS',
			"socialLink"	: '@LiquidPimpZ',
			"videoLink"		: 'pimpcsgo',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/liquid/pimp.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7154'
		},
		{
			"faceitID"		: "97f7d868-7221-46eb-a250-38ffaf1cc5c1",
			"gamerTag"		: "EliGE",
			"faceIt"		: "EliGE",
			"name"			: "Jonathan David Jablonowski",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@liquidelige",
			"videoLink"		: 'elige',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/liquid/elige.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8738'
		},
		{
			"faceitID"		: 'a5df82fc-c307-4fa5-bbd7-1e8bc1bab1f4', //"cee601f6-4800-45ac-a34b-831b9a034fff",
			"gamerTag"		: "jdm64",
			"faceIt"		: "jdm64",
			"name"			: "Joshua Marzano",
			"flag"			: "us",
			"playerLink"	: 'JDM64CSGO',
			"socialLink"	: '@liquid_jdm',
			"videoLink"		: 'jdm64',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/liquid/jdm64.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8346'
		},
		{
			"faceitID"		: "b077f54e-fbca-41ce-9e80-58b9e2f11495",
			"gamerTag"		: "nitr0",
			"faceIt"		: "nitr0--",
			"name"			: "Nicholas Cannella",
			"flag"			: "us",
			"playerLink"	: 'nitr0cs',
			"socialLink"	: "@liquidnitr0",
			"videoLink"		: 'nitr0_tv',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/liquid/nitr0.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7687'
		},
	]
};

Mousesports = {
	"name"		: "Mousesports",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/_0006_mousesports_b.png",
	"twitter"	: "@mousesports",
	"photoName"	: 	"mousesports", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "f9598267-6ac6-4629-85f9-989fde59eacb",
			"gamerTag"		: "chrisJ",
			"faceIt"		: "chrisJ",
			"name"			: "Chris de Jong",
			"flag"			: "NL",
			"playerLink"	: 'chrisJcs',
			"socialLink"	: "@chrisJcsgo",
			"videoLink"		: 'chrisjcsgo',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2730'
		},
		{
			"faceitID"		: "32772d2f-fb63-4a84-ac06-4c2e20f49082",
			"gamerTag"		: "denis",
			"faceIt"		: "denis-",
			"name"			: "Denis Howell",
			"flag"			: "DE",
			"playerLink"	: 'csgodenis',
			"socialLink"	: "@mouzdenis",
			"videoLink"		: 'denis10_',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7511'
		},
		{
			"faceitID"		: "6edb1ba0-7c0d-4480-a68f-45f476a21626",
			"gamerTag"		: "loWel",
			"faceIt"		: "loWel",
			"name"			: "Christian Garcia Antoran",
			"flag"			: "ES",
			"playerLink"	: 'loWelCS',
			"socialLink"	: '@mouzloWel',
			"videoLink"		: 'lowelcs',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/mousesports/lowel.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3997'
		},
		{
			"faceitID"		: "19606e0c-137b-4885-a904-744fa12d25f6",
			"gamerTag"		: "NiKo",
			"faceIt"		: "NiK0",
			"name"			: "Nikola Kovač",
			"flag"			: "BA",
			"playerLink"	: 'csgoNiKo',
			"socialLink"	: "@mouzNiKo",
			"videoLink"		: 'niko',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3741'
		},
		{
			"faceitID"		: "a5be61cf-6cb3-4f71-baea-c69b5ceb6228",
			"gamerTag"		: "Spiidi",
			"faceIt"		: "Spiidi",
			"name"			: "Timo Richter",
			"flag"			: "DE",
			"playerLink"	: 'SpiidiCS',
			"socialLink"	: "@SpiidiCS",
			"videoLink"		: 'spiidiwhaam',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7499'
		} 
	]
};

Navi = {
	"name"		: "Navi",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/navi.png",
	"twitter"	: "@natusvincere",
	"photoName"	: "navi",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "3d767a2c-9f54-4f2f-aecc-0f92f1eb230f",
			"gamerTag"		: "seized",
			"faceIt"		: "seized",
			"name"			: "Denis Kostin",
			"flag"			: "RU",
			"playerLink"	: 'seizedcsgo',
			"socialLink"	: "@seizedwf",
			"videoLink"		: 'seizedwf',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/navi/seized.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3347'
		},
		{
			"faceitID"		: "fe480d93-45a1-437e-a8c8-a33a837524ef",
			"gamerTag"		: "flamie",
			"faceIt"		: "flamiezy",
			"name"			: "Egor Vasilyev",
			"flag"			: "RU",
			"playerLink"	: 'flamiecsgo',
			"socialLink"	: "@flamieCS",
			"videoLink"		: 'flamieff',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/navi/flamie.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7594'
		},
		{
			"faceitID"		: "092f1f99-876d-4301-847f-19fd2e73be3b",
			"gamerTag"		: "Edward",
			"faceIt"		: "edzie",
			"name"			: "Ioann Sukhariev",
			"flag"			: "UA",
			"playerLink"	: 'OfficialEdward',
			"socialLink"	: "@IaonnSukhariev",
			"videoLink"		: 'edward',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/navi/edward.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=483'
		},
		{
			"faceitID"		: "a6ba59a3-345b-4923-976c-b8858214f0e4",
			"gamerTag"		: "GuardiaN",
			"faceIt"		: "GuardiaN",
			"name"			: "Ladislav Kovács",
			"flag"			: "SK",
			"playerLink"	: 'CSGuardiaN',
			"socialLink"	: "@guardiancsgo",
			"videoLink"		: 'rguardian',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/navi/guardian.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2757'
		},
		{
			"faceitID"		: "ac71ba3c-d3d4-45e7-8be2-26aa3986867d",
			"gamerTag"		: "s1mple",
			"faceIt"		: "s1mple",
			"name"			: "Oleksandr Kostyliev",
			"flag"			: "UA",
			"playerLink"	: 'Officials1mple',
			"socialLink"	: "@s1mpleO",
			"videoLink"		: 's1mpleof',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/navi/s1mple.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7998'
		}
	]
};

North = {
	"name"		: "North",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/north.png",
	"darkLogo"	: "http://cdn.eleague.com/csgo/images/600x600/north.png",
	"lightLogo"	: "http://cdn.eleague.com/csgo/images/100x100/north_alt.png",
	//"twitter"	: "@TeamDignitas",
	"photoName"	: "north",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "72f1249e-aeb5-45ce-913f-d43d98cf03cc",
			"gamerTag"		: "k0nfig",
			"faceIt"		: "k0nfig",
			"name"			: "Kristian Wienecke",
			"flag"			: "DK",
			"playerLink"	: 'k0nfigCS',
			"socialLink"	: "@k0nfigCS",
			"videoLink"		: 'k0nfig',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/k0nfig.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=9078'
		},
		{
			"faceitID"		: "ddfa4144-fae5-48cd-9534-cd444abe4d38",
			"gamerTag"		: "cajunb",
			"faceIt"		: "cajunb",
			"name"			: "René Borg",
			"flag"			: "DK",
			"playerLink"	: 'cajunbCS',
			"socialLink"	: "@cajunbCS",
			"videoLink"		: 'cajunb',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/cajunb.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2469'
		},
		{
			"faceitID"		: "98542324-dd2e-4b51-b651-99c131420080",
			"gamerTag"		: "Magiskb0y",
			"faceIt"		: "MagiskbOY",
			hltv			: 'Magisk',
			"name"			: "Emil Reif",
			"flag"			: "DK",
			"playerLink"	: 'Magiskb0Y',
			"socialLink"	: '@Magiskb0Y',
			"videoLink"		: 'magiskb0y_tv',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/magiskb0y.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=9032'
		},
		{
			"faceitID"		: "24d0aff3-ff3b-4791-bca5-b1b7611e2e9f",
			"gamerTag"		: "RUBINO",
			"faceIt"		: "rubino",
			"name"			: "Ruben Villarroel",
			"flag"			: "NO",
			"playerLink"	: 'rubinoeu',
			"socialLink"	: "@rubinoeu",
			"videoLink"		: 'rubinoeu',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/rubino.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=1485'
		},
		{
			"faceitID"		: "4f6fb913-1ad2-43af-bb33-507588b1eaed",
			"gamerTag"		: "MSL",
			"faceIt"		: "MSLL",
			"name"			: "Mathias Lauridsen",
			"flag"			: "DK",
			"playerLink"	: 'MSLcsgo',
			"socialLink"	: "@MSLcsgo",
			"videoLink"		: 'mslcsgo',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/msl.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7156'
		}
	]
};

OpT = {
	"name"		:	"Optic",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/optic.png",
	"lightLogo"	:   "http://cdn.eleague.com/csgo/images/100x100/optic_alt.png",
	"twitter"	: 	"@OpTicGaming",
	"photoName"	: 	"optic",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: '118a784e-581b-4098-a4d4-95746cefeb97', //"70b9bf48-d3bf-4b4e-b11b-7800fa91a64d",
			"gamerTag"		: "Tarik",
			"faceIt"		: "TaRiK",
			hltv			: 'tarik',
			"name"			: "Tarik Celik",
			"flag"			: "TR",
			"playerLink"	: 'tarikcsgo',
			"socialLink"	: '@noshirt_tv',
			"videoLink"		: 'tarik_tv',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/tarik.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8523'
		},
		{
			"faceitID"		: "b10c1c83-ea16-47f1-b8f6-c0b4106b99b5",
			"gamerTag"		: "stanislaw",
			"faceIt"		: "stanislaw",
			"name"			: "Peter Jarguz",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: '@OpTic_stanislaw',
			"videoLink"		: 'stanislaw',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/stanislaw.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8507'
		},
		{
			"faceitID"		: "2be516fe-04e8-4a75-a854-16ecc75382b2",
			"gamerTag"		: "NAF-FLY",
			"faceIt"		: "NAF-FLY",
			hltv			: 'NAF',
			"name"			: "Keith Markovic",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: '@NAFFLY',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/naf-fly.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8520'
		},
		{
			"faceitID"		: "b4d169d0-3536-42c7-b9c5-dd34f1275f17",
			"gamerTag"		: "Mixwell",
			"faceIt"		: "mixwell",
			hltv			: 'mixwell',
			"name"			: "Óscar Cañellas",
			"flag"			: "ES",
			"playerLink"	: null,
			"socialLink"	: '@mixwell',
			"videoLink"		: 'mixwell',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/mixwell.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8370'
		},
		{
			"faceitID"		: "cdf57434-9165-4699-a9d1-816ad6db58a3",
			"gamerTag"		: "RUSH",
			"faceIt"		: "Rushh",
			"name"			: "Will Wierzba",
			"flag"			: "US",
			"playerLink"	: 'RushCSGO',
			"socialLink"	: '@RUSH',
			"videoLink"		: 'rushcs',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/rush.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7805'
		} 
	]
};

SKG = {
	"name"			:	"SK Gaming",
	"darkLogo" 		:	"http://cdn.eleague.com/csgo/images/sk_b.png",
	"lightLogo"		:   "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/home_logo_sk_@2x.png",
	"logo"			:   "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/home_logo_sk_@2x.png",
	"twitter"		:   "@SKGaming", 
	"photoName"		: 	"SK",
	"matches"		: 	[],
	"lineup" 		: 	[
		{
			"faceitID"		: "bee6d48a-7048-49cf-8ee2-b10c2ea104ca",
			"gamerTag"		: "Fallen",
			"faceIt"		: "LGFALLEN",
			hltv			: 'FalleN',
			"name"			: "Gabriel Toledo",
			"flag"			: "BR",
			"playerLink"	: 'FalleNcs',
			"socialLink"	: '@FalleNCS',
			"videoLink"		: 'gafallen',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/sk/fallen.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2023'
		},
		{
			"faceitID"		: "648af157-90c5-4e69-b0c3-31ae037f4bae",
			"gamerTag"		: "coldzera",
			"faceIt"		: "coldzin",
			"name"			: "Marcelo David",
			"flag"			: "BR",
			"playerLink"	: 'rmkcoldzera',
			"socialLink"	: '@coldzera',
			"videoLink"		: 'coldzin',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/sk/coldzera.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=9216'
		},
		{
			"faceitID"		: '277495a0-f47d-4a56-9e47-ad934f0946c5', //"26fc6f28-4374-4339-9b5e-01a26340fb12",
			"gamerTag"		: "fer",
			"faceIt"		: "fermonster",
			hltv			: 'fer',
			"name"			: "Fernando Alvarenga",
			"flag"			: "BR",
			"playerLink"	: 'fpsfer',
			"socialLink"	: '@SK_fer',
			"videoLink"		: 'fpsfer',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/sk/fer.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8564'
		},
		{
			"faceitID"		: "34f2fbd3-f206-46c5-bb93-30a865950d59",
			"gamerTag"		: "TACO",
			"faceIt"		: "TACOCS",
			"name"			: "Epitacio Filho",
			"flag"			: "BR",
			"playerLink"	: 'tacocs',
			"socialLink"	: '@TACOCS',
			"videoLink"		: 'tacocs',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/sk/taco.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=9217'
		},
		{
			"faceitID"		: "06ecc997-ffec-45eb-8885-c68eb64dea55",
			"gamerTag"		: "fox",
			"faceIt"		: "fox",
			hltv			: 'fox',
			"name"			: "Ricardo Miguel Esteves Pacheco",
			"flag"			: "PT",
			"playerLink"	: 'foxcnofficial',
			"socialLink"	: '@foxgringoCS',
			"videoLink"		: 'officialfoxcn',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/sk/fox.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=629'
		}
	]
};

VP = {
	"name"		: "Virtus Pro",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/_0003_virtuspro.png",
	"twitter"	: "@TeamVirtuspro",
	"photoSlug"	: "virtusPRO", 
	"photoName"	: "virtuspro",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "d683100c-1452-47cc-af4a-b66efea476b0",
			"gamerTag"		: "NEO",
			"faceIt"		: "neo-no",
			"name"			: "Filip Kubski",
			"flag"			: "PL",
			"playerLink"	: 'filipneokubski',
			"socialLink"	: "@neo_fkubski",
			"videoLink"		: 'neog5',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=165'
		},
		{
			"faceitID"		: "5ad1783f-f978-4501-8708-b9a04ba47ee9",
			"gamerTag"		: "snax",
			"faceIt"		: "SNAX",
			"altTag"		: "Snax",
			hltv			: 'Snax',
			"name"			: "Janusz Pogorzelski",
			"flag"			: "PL",
			"playerLink"	: 'snaxfz',
			"socialLink"	: "@cios_snax",
			"videoLink"		: 'snax',
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/virtuspro/snax.png',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2553'
		},
		{
			"faceitID"		: "24180323-d946-4bb7-a334-be3e96fcac05",
			"gamerTag"		: "pasha",
			"faceIt"		: "PASHA",
			hltv			: 'pashaBiceps',
			"name"			: "Jarosław Jarząbkowski",
			"flag"			: "PL",
			"playerLink"	: 'G5.pasha',
			"socialLink"	: "@paszaBiceps",
			"videoLink"		: 'pashabiceps',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=317'
		},
		{
			"faceitID"		: "e90de29a-db00-4e03-8044-04ccf54b4b64",
			"gamerTag"		: "byali",
			"faceIt"		: "bialy",
			"name"			: "Paweł Bieliński",
			"flag"			: "PL",
			"playerLink"	: 'officialbyali',
			"socialLink"	: "@byalics",
			"videoLink"		: 'byalli',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=5386'
		},
		{
			"faceitID"		: "425a97f6-2a9b-426d-a81e-0cd63ba2f343",
			"gamerTag"		: "TaZ",
			"faceIt"		: "TaZ",
			"name"			: "Wiktor Wojtas",
			"flag"			: "PL",
			"playerLink"	: 'g5taz',
			"socialLink"	: "@g5taz",
			"videoLink"		: 'g5taz',
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=161'
		} 
	]
};

teams = {
	"AST" : Astralis,
	"Astralis" : Astralis,
	"astralis" : Astralis,
	"envyus": EnVyUs,
	"EnVyUs": EnVyUs,
	"Team EnVyUs": EnVyUs,
	"ENVYUS-" : EnVyUs,
	"Faze": FazeClan,
	"faze": FazeClan,
	"FaZe": FazeClan,
	"FaZe Clan": FazeClan,
	"Flipsid3" : Flipsid3,
	"FlipSid3" : Flipsid3,
	"flipsid3" : Flipsid3,
	"FlipSid3 Tactics" : Flipsid3,
	"Flipsid3 Tactics" : Flipsid3,
	"Fnatic": Fnatic,
	"fnatic": Fnatic,
	"G2" : G2,
	"g2" : G2,
	"G2 eSports" : G2,
	"G2 Espor" : G2,
	"G2 Esports": G2,
	"Gambit": Gambit,
	"Gambit Gaming": Gambit,
	"Gambit1": Gambit,
	"gambitgaming": Gambit,
	"gambit": Gambit,
	"GODSENT": Godsent,
	"godsent": Godsent,
	"HellRaisers": HR,
	"hellraisers": HR,
	"Hellraisers": HR,
	"Liquid-" : Liquid,
	"Liquid" : Liquid,
	"Team Liquid" : Liquid,
	"teamliquid" : Liquid,
	"Mousesports": Mousesports,
	"mousesports": Mousesports,
	"Navi": Navi,
	"NaVi": Navi,
	"navi": Navi,
	"Natus Vincere": Navi,
	"North" : North,
	"north" : North,
	"OpT" : OpT,
	"Optic" : OpT,
	"OpTic" : OpT,
	"OpTic Gaming" : OpT,
	"optic" : OpT,
	"SKG" : SKG,
	"SK" : SKG,
	"SK Gaming" : SKG,
	"skgaming" : SKG,
	"VP": VP,
	"Virtus Pro": VP,
	"VP.": VP,
	"Virtus.pro": VP,
	"Virtus.Pro": VP,
	"virtuspro": VP
};