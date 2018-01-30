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
			"faceitID"		: "aef66e5e-2054-4010-baa7-503eb620c0eb",
			"gamerTag"		: "kjaerbye",
			"faceIt"		: "Kjaerbye",
			hltv			: "Kjaerbye",
			"name"			: "Markus Kjærbye",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@dKjaerbye",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8394'
		},
		{
			"faceitID"		: "5cd2827e-9f73-4080-8cb2-82bee817a173",
			"gamerTag"		: "Xyp9x",
			"faceIt"		: "Xyp9x",
			"name"			: "Andreas Højsleth",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@Xyp9x",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=4954'
		},
		{
			"faceitID"		: "d6bc4849-5256-4463-a38e-bcd77fc31ff9",
			"gamerTag"		: "dev1ce",
			"faceIt"		: "dev1ce",
			hltv			: "device",
			"altTag"		: "device", 
			"name"			: "Nicolai Reedtz",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@dev1ce",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7592'
		},
		{
			"faceitID"		: "68179dc7-9381-4264-a26c-52693400f1eb",
			"gamerTag"		: "Karrigan",
			"faceIt"		: "karrigan",
			hltv			: "karrigan",
			"name"			: "Finn Andersen",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@karriganCSGO",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=429'
		},
		{
			"faceitID"		: "7e80ed2a-8e39-457e-95c2-1c9ba9449daf",
			"gamerTag"		: "dupreeh",
			"faceIt"		: "dupreeh",
			"name"			: "Peter Rasmussen",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@dupreehCSGO",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7398'
		} 
	]
};

CLG = {
	"name"		:	"CLG",
	"logo" 		:	"http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/_0012_CLG.png",
	"twitter"	:   "@clgaming",
	"photoName"	: 	"clg", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "9009cc2f-ca06-4931-9c4a-7f1088137a5d",
			"gamerTag"		: "hazed",
			"faceIt"		: "hazed",
			"name"			: "James Cobb",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@clghazed",
			"videoLink"		: null
		},
		{
			"faceitID"		: "a5df82fc-c307-4fa5-bbd7-1e8bc1bab1f4",
			"gamerTag"		: "koosta",
			"faceIt"		: "makeitrandom",
			"name"			: "Kenneth Wai Suen",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@JDM64CSGO",
			"videoLink"		: null
		},
		{
			"faceitID"		: "d5fce6ad-5229-47eb-a4ce-cac6c249be1f",
			"gamerTag"		: "reltuC",
			"faceIt"		: "reltuC",
			"name"			: "Stephen Cutler",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@CLGreltuC",
			"videoLink"		: null
		},
		{
			"faceitID"		: "118a784e-581b-4098-a4d4-95746cefeb97",
			"gamerTag"		: "tarik",
			"faceIt"		: "TaRiK",
			"name"			: "Tarik Celik",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@noshirt_tv",
			"videoLink"		: null
		},
		{
			"faceitID"		: "96216080-be32-429d-a6ca-ae515cc2afb3",
			"gamerTag"		: "Pita",
			"faceIt"		: "pita",
			"name"			: "Faruk Pita",
			"flag"			: "BA",
			"playerLink"	: null,
			"socialLink"	: "@CLGpita",
			"videoLink"		: null
		} 
	]
};

Cloud9 = {
	"name"		:	"Cloud 9",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/600x600/cloud9.png",
	"twitter"	:   "@Cloud9",
	"photoName"	: 	"cloud9", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "f3924b96-c7ec-4d8a-9cf0-dd2d6ed9d0ad",
			"gamerTag"		: "n0thing",
			"faceIt"		: "jgilbert",
			"name"			: "Jordan Matthew Gilbert",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@c9n0thing",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=203',

		},
		{
			"faceitID"		: "2a37a5c2-e5f7-4804-a88c-fadfa73d4288",
			"gamerTag"		: "Skadoodle",
			"faceIt"		: "skadoodle",
			"name"			: "Tyler Matthew Latham",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@C9_Skadoodle",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7440'
		},
		{
			"faceitID"		: "803dbe7e-e9f8-4f0f-8221-c441c26bbb41",
			"gamerTag"		: "Shroud",
			"faceIt"		: "shroud",
			hltv			: "shroud",
			"name"			: "Michael Brenden Grzesiek",
			"flag"			: "ca",
			"playerLink"	: null,
			"socialLink"	: "@C9shroud",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8349'
		},
		{
			"faceitID"		: "2be37d17-f9fb-42e2-8143-bcdb5f1239b2",
			"gamerTag"		: "Stewie2k",
			"faceIt"		: "Stewie2k",
			hltv			: "Stewie2K",
			"name"			: "Jacky Yip",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@C9Stewie",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8797'
		},
		{
			"faceitID"		: "005f228e-888a-43d3-9b1b-9b293cc57847",
			"gamerTag"		: "Slemmy",
			"faceIt"		: "Slemmy",
			hltv			: "Slemmy",
			"name"			: "Alec Clinton White",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@C9Slemmy",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8708'
		},
	]
};

Complexity  = {
	"name"		: "Complexity",
	"twitter"	: "@compLexityLive",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/_0000_COMPLEXITY.png",
	"photoName"	: "complexity", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "50239feb-91d4-4621-91ff-3f31d4d67555",
			"gamerTag"		: "androidx23",
			"faceIt"		: "androidx23",
			"name"			: "Brad Foder",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: "@androidx23",
			"videoLink"		: null
		},
		{
			"faceitID"		: "d12714a1-616b-485e-8cca-ed8fac09de3d",
			"gamerTag"		: "sancz",
			"faceIt"		: "sanczz",
			"name"			: "Joshua Ballenger",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@coL_sancz",
			"videoLink"		: null
		},
		{
			"faceitID"		: "e67dc4a0-6536-4ead-98f0-2392f8112aa4",
			"gamerTag"		: "Surreal",
			"faceIt"		: "Surreal-",
			"name"			: "Kia Man",
			"flag"			: "GB",
			"playerLink"	: null,
			"socialLink"	: "@surrealcs",
			"videoLink"		: null
		},
		{
			"faceitID"		: "baa43c6e-783f-4daa-be59-1633673cd062",
			"gamerTag"		: "dephh",
			"faceIt"		: "deph",
			"name"			: "Rory Jackson",
			"flag"			: "GB",
			"playerLink"	: null,
			"socialLink"	: "@dephh_csgo",
			"videoLink"		: null
		},
		{
			"faceitID"		: "97e13ffd-8cc5-40c8-9032-381c9602ad33",
			"gamerTag"		: "witmer",
			"faceIt"		: "witmer",
			"name"			: "Shawn Taylor",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@coL_witmer",
			"videoLink"		: null
		}
	] 
};

EchoFox = {
	"name"		: "EchoFox",
	"twitter"	: "@echofoxgg",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/echofox.png",
	"photoName"	: "echofox", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "85d942ce-f00f-4a46-ae38-0942f5beb635",
			"gamerTag"		: "roca",
			"faceIt"		: "roca2k9",
			"name"			: "Daniel Gustaferri",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "7b10b7b2-1835-41c1-9777-23e9d36955bd",
			"gamerTag"		: "ryx",
			"faceIt"		: "ryx",
			"name"			: "Ronnie Bylicki",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "8bc77a11-8d77-47df-91e1-cb169cc29419",
			"gamerTag"		: "freakazoid",
			"faceIt"		: "fREAKAZOiiD-",
			"name"			: "Ryan Abadir",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@freakazoid_tv",
			"videoLink"		: null
		},
		{
			"faceitID"		: "734aa624-0525-4feb-8f9b-cbc8c4ee3085",
			"gamerTag"		: "sgares",
			"faceIt"		: "seangares",
			"name"			: "Sean Gares",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@seangares",
			"videoLink"		: null
		},
		{
			"faceitID"		: "1a8d14ae-d354-494c-a302-499f05de0c73",
			"gamerTag"		: "ShahZaM",
			"faceIt"		: "Shahzam",
			"name"			: "Shazeb Khan",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@ShahZaMk",
			"videoLink"		: null
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
			"playerLink"	: null,
			"socialLink"	: "@kiocsgoo",
			"videoLink"		: null
		},
		{
			"faceitID"		: "004cfd66-dbe2-4378-ba26-3d7617cd37aa",
			"gamerTag"		: "rain",
			"faceIt"		: "rainje",
			"name"			: "Håvard Nygaard",
			"flag"			: "NO",
			"playerLink"	: null,
			"socialLink"	: "@FaZe_rainCS",
			"videoLink"		: null
		},
		{
			"faceitID"		: "6f9c6825-fba1-4d40-ad56-fe98a6240f88",
			"gamerTag"		: "jkaem",
			"faceIt"		: "jkaem",
			"name"			: "Joakim Myrbostad",
			"flag"			: "NO",
			"playerLink"	: null,
			"socialLink"	: "@FaZe_jkaem",
			"videoLink"		: null
		},
		{
			"faceitID"		: "4952cd82-4d60-4c06-b0a9-35cfb33756d1",
			"gamerTag"		: "aizy",
			"faceIt"		: "aizyh",
			"name"			: "Philip Aistrup",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@FaZe_aizy",
			"videoLink"		: null
		},
		{
			"faceitID"		: "06ecc997-ffec-45eb-8885-c68eb64dea55",
			"gamerTag"		: "fox",
			"faceIt"		: "fox",
			"name"			: "Ricardo Pacheco",
			"flag"			: "PT",
			"playerLink"	: null,
			"socialLink"	: "@FaZe_foxCS",
			"videoLink"		: null,
			traded			: true
		},
		{
			"faceitID"		: "1fea6910-19b9-43d3-aac2-c612b1d95b08",
			"gamerTag"		: "allu",
			"faceIt"		: "allub",
			"name"			: "Aleksi Jalli",
			"flag"			: "fi",
			"socialLink"	: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/faze/allu.png'
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
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "fcd26f5a-2e6d-4ea7-8ac6-1e42f1b85e4c",
			"gamerTag"		: "WorldEdit",
			"faceIt"		: "WorldEdit",
			"name"			: "Georgi Yaskin",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
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
		},
		{
			"faceitID"		: "d49d7a10-e02a-46e6-bdb5-97b08c922659",
			"gamerTag"		: "Shara",
			"faceIt"		: "SharaWF",
			"name"			: "Oleksandr Hordieiev",
			"flag"			: "UA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "2caf4fbd-027c-4371-995f-9356fbbdb5d7",
			"gamerTag"		: "markeloff",
			"faceIt"		: "mark",
			"name"			: "Yegor Markelov",
			"flag"			: "UA",
			"playerLink"	: null,
			"socialLink"	: "@YegorMarkeloff",
			"videoLink"		: null
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
			"faceitID"		: "4946fdbd-00e9-4408-91dd-6f3c87c39b23",
			"gamerTag"		: "JW",
			"faceIt"		: "JW",
			hltv			: "JW",
			"name"			: "Jesper Wecksell",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@jwCSGO",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3849'
		},
		{
			"faceitID"		: "5c90ca92-7ea3-4b0c-b2cb-25edb5c6b77d",
			"gamerTag"		: "flusha",
			"faceIt"		: "flusha",
			hltv			: "flusha",
			"name"			: "Robin Rönnquist",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@fnaticFlusha",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3055'
		},
		{
			"faceitID"		: "8a2f2125-4d5a-4bf8-a5ff-10e7fb3ef2fa",
			"gamerTag"		: "KRiMZ",
			"faceIt"		: "KRIMZ",
			hltv			: "KRIMZ",
			"name"			: "Freddy Johansson",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@krimzCSGO",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7528'
		},
		{
			"faceitID"		: "47946790-c6fa-49c6-a29c-8667ed9e656e",
			"gamerTag"		: "olofmeister",
			"faceIt"		: "olofmeister",
			"name"			: "Olof Kajbjer",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@olofmCS",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=885'
		},
		{
			"faceitID"		: "dc1ef6ab-b2fd-4733-9471-bc65aa222437",
			"gamerTag"		: "dennis",
			"faceIt"		: "dennisedman",
			"name"			: "Dennis Edman",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@fnaticdennis",
			"videoLink"		: null,
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
			"playerLink"	: null,
			"socialLink"	: "@G2ScreaM_",
			"videoLink"		: null
		},
		{
			"faceitID"		: "8d9e4df9-96b5-448d-82d8-c4a46ad2f368",
			"gamerTag"		: "bodyy",
			"faceIt"		: "Bodyys",
			"name"			: "Alexandre Pianaro",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@g2bodyy",
			"videoLink"		: null
		},
		{
			"faceitID"		: "71920781-21ed-4604-ba03-911b1dfb11a0",
			"gamerTag"		: "RpK",
			"faceIt"		: "Fuks",
			"name"			: "Cédric Guipouy",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@G2RpK",
			"videoLink"		: null
		},
		{
			"faceitID"		: "5a4e258d-c912-46b6-94f1-984d59150f82",
			"gamerTag"		: "SmithZz",
			"faceIt"		: "SmithZz",
			"name"			: "Edouard Dubourdeaux",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@G2SmithZz",
			"videoLink"		: null
		},
		{
			"faceitID"		: "ecd004fa-0215-4a42-965b-07ebefd69f0c",
			"gamerTag"		: "shox",
			"faceIt"		: "shox",
			"name"			: "Richard Papillon",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@G2shox",
			"videoLink"		: null
		} 
	]
};

Gambit =  {
	"name"		: "Gambit",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/gambit.png",
	"twitter"	: "@GambitEsports",
	"photoName"	: "gambit", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "d4b5f7d1-d51b-4050-ad5d-63ed8dc72904",
			"gamerTag"		: "AdreN",
			"faceIt"		: "AdreN",
			"name"			: "Dauren Kystaubayev",
			"flag"			: "KZ",
			"playerLink"	: null,
			"socialLink"	: "@AdreNcs",
			"videoLink"		: null
		},
		{
			"faceitID"		: "07c2833f-fe93-47d2-bf4a-c11b23f5e325",
			"gamerTag"		: "hooch",
			"faceIt"		: "hooch",
			"name"			: "Dmitry Bogdanov",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: "@hoochr",
			"videoLink"		: null
		},
		{
			"faceitID"		: "71840b86-1a08-438b-bc40-95ce954322c4",//52075d4a-51ce-4d71-b302-36844e4e3021
			"gamerTag"		: "spaze",
			"faceIt"		: "DAVCOST9n",
			"name"			: "Ivan Obrezhan",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "16316c98-371d-4585-bc8c-a77b82d2ba95",
			"gamerTag"		: "Dosia",
			"faceIt"		: "Dosia",
			"name"			: "Mihail Stolyarov",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: "@MikhailDosia",
			"videoLink"		: null
		},
		{
			"faceitID"		: "e42ed3c7-2f5d-4c9d-856b-39869e12d9d5",
			"gamerTag"		: "mou",
			"faceIt"		: "Mou-",
			"name"			: "Rustem Tlepov",
			"flag"			: "KZ",
			"playerLink"	: null,
			"socialLink"	: "@TlepovR",
			"videoLink"		: null
		} 
	]
};

Luminosity = {
	"name"		:	"Luminosity",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/600x600/luminosity.png",
	"twitter"	:   "@Luminosity",
	"photoName"	: 	"luminosity", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "648af157-90c5-4e69-b0c3-31ae037f4bae",
			"gamerTag"		: "coldzera",
			"faceIt"		: "coldzin",
			"name"			: "Marcelo Augusto David",
			"flag"			: "BR",
			"playerLink"	: null,
			"socialLink"	: "@LG_coldzera",
			"videoLink"		: null
		},
		{
			"faceitID"		: "277495a0-f47d-4a56-9e47-ad934f0946c5",
			"gamerTag"		: "fer",
			"faceIt"		: "fermonster",
			"name"			: "Fernando Alvarenga Ferreira Da Costa",
			"flag"			: "BR",
			"playerLink"	: null,
			"socialLink"	: "@LG_ferGOD",
			"videoLink"		: null,
			photoUrl		: 'http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/94x94/luminosity/schedule_fer_luminosity_@1.png'
		},
		{
			"faceitID"		: "34f2fbd3-f206-46c5-bb93-30a865950d59",
			"gamerTag"		: "TACO",
			"faceIt"		: "TACOCS",
			"name"			: "Epitacio Pessoa de Melo Filho",
			"flag"			: "BR",
			"playerLink"	: null,
			"socialLink"	: "@LG_TACO",
			"videoLink"		: null
		},
		{
			"faceitID"		: "126579dc-f57b-4638-a941-65f06c24d898",
			"gamerTag"		: "fnx",
			"faceIt"		: "fnxL",
			"name"			: "Lincoln Lau",
			"flag"			: "BR",
			"playerLink"	: null,
			"socialLink"	: "@LG_fnx",
			"videoLink"		: null
		},
		{
			"faceitID"		: "bee6d48a-7048-49cf-8ee2-b10c2ea104ca",
			"gamerTag"		: "Fallen",
			"faceIt"		: "LGFALLEN",
			"name"			: "Gabriel Toledo de Alcantara Sguario",
			"flag"			: "BR",
			"playerLink"	: null,
			"socialLink"	: "@LG_FalleN",
			"videoLink"		: null
		}
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
			"faceitID"		: "19606e0c-137b-4885-a904-744fa12d25f6",
			"gamerTag"		: "NiKo",
			"faceIt"		: "NiK0",
			"name"			: "Nikola Kovač",
			"flag"			: "BA",
			"playerLink"	: null,
			"socialLink"	: "@mouzNiKo",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3741'
		},
		{
			"faceitID"		: "39dfaa6f-f1f8-49d0-911d-573aac9e3eff",
			"gamerTag"		: "nex",
			"faceIt"		: "johannex",
			hltv			: "nex",
			"name"			: "Johannes Maget",
			"flag"			: "DE",
			"playerLink"	: null,
			"socialLink"	: "@mouznex",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7256'
		},
		{
			"faceitID"		: "f9598267-6ac6-4629-85f9-989fde59eacb",
			"gamerTag"		: "chrisJ",
			"faceIt"		: "chrisJ",
			hltv			: "chrisJ",
			"name"			: "Chris de Jong",
			"flag"			: "NL",
			"playerLink"	: null,
			"socialLink"	: "@chrisJcsgo",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2730'
		},
		{
			"faceitID"		: "32772d2f-fb63-4a84-ac06-4c2e20f49082",
			"gamerTag"		: "denis",
			"faceIt"		: "denis-",
			"name"			: "Denis Howell",
			"flag"			: "DE",
			"playerLink"	: null,
			"socialLink"	: "@mouzdenis",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7511'
		},
		{
			"faceitID"		: "a5be61cf-6cb3-4f71-baea-c69b5ceb6228",
			"gamerTag"		: "Spiidi",
			"faceIt"		: "Spiidi",
			"name"			: "Timo Richter",
			"flag"			: "DE",
			"playerLink"	: null,
			"socialLink"	: "@SpiidiCS",
			"videoLink"		: null,
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
			"faceitID"		: "645357d3-d535-4630-90b9-d4263df2a225",
			"gamerTag"		: "Zeus",
			"faceIt"		: "zeus",
			"name"			: "Daniil Teslenko",
			"flag"			: "UA",
			"playerLink"	: null,
			"socialLink"	: "@navizeus4444",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=484'
		},
		{
			"faceitID"		: "3d767a2c-9f54-4f2f-aecc-0f92f1eb230f",
			"gamerTag"		: "seized",
			"faceIt"		: "seized",
			"name"			: "Denis Kostin",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: "@seizedwf",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=3347'
		},
		{
			"faceitID"		: "a6ba59a3-345b-4923-976c-b8858214f0e4",
			"gamerTag"		: "GuardiaN",
			"faceIt"		: "GuardiaN",
			"name"			: "Ladislav Kovács",
			"flag"			: "SK",
			"playerLink"	: null,
			"socialLink"	: "@guardiancsgo",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2757'
		},
		{
			"faceitID"		: "092f1f99-876d-4301-847f-19fd2e73be3b",
			"gamerTag"		: "Edward",
			"faceIt"		: "edzie",
			"name"			: "Ioann Sukhariev",
			"flag"			: "UA",
			"playerLink"	: null,
			"socialLink"	: "@IaonnSukhariev",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=483'
		},
		{
			"faceitID"		: "fe480d93-45a1-437e-a8c8-a33a837524ef",
			"gamerTag"		: "flamie",
			"faceIt"		: "flamiezy",
			"name"			: "Egor Vasilyev",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: "@flamieCS",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7594'
		},
	]
};

NiP = {
	"name"		:	"NiP",
	"twitter"	:   "@NiPGaming",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/nip.png",
	"photoName"	: 	"nip",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "93fdfbd9-b47d-4b25-a200-1b44931e86e0",
			"gamerTag"		: "Xizt",
			"faceIt"		: "Xizt",
			"name"			: "Richard Landström",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@OfficialXizt",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=884'
		},
		{
			"faceitID"		: "edd17a40-20dc-4370-b824-ddea44d9dfe3",
			"gamerTag"		: "GeT_RiGhT",
			"faceIt"		: "GeT_RiGhT",
			"name"			: "Christopher Alesund",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@GeT_RiGhTcs",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=39'
		},
		{
			"faceitID"		: "76a8797a-0549-4e95-9354-92931a484f6b",
			"gamerTag"		: "pyth",
			"faceIt"		: "pyth",
			"name"			: "Jacob Mourujärvi",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@pythCS",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7527'
		},
		{
			"faceitID"		: "8de88a46-bf0d-445f-8439-c965ea927fc0",
			"gamerTag"		: "friberg",
			"faceIt"		: "friberg",
			"name"			: "Adam Friberg",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@fribergCS",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7148'
		},
		{
			"faceitID"		: "7b1f9938-a5e4-4c8e-8a25-371df87d311f",
			"gamerTag"		: "f0rest",
			"faceIt"		: "f0rest",
			"name"			: "Patrik Lindberg",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@f0restCS",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=29'
		}
	]
};

NRG = {
	"name"		:	"NRG",
	"logo" 		:	"http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/_0013_NRG.png",
	"twitter"	:   "@NRGgg",
	"photoName"	: 	"NRG",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "c2a30c64-89fd-4133-9af0-10ab0fc8379e",
			"gamerTag"		: "gob b",
			"faceIt"		: "gobb",
			"name"			: "Fatih Dayik",
			"flag"			: "DE",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "3f005401-8032-4112-abc8-f83d920eb258",
			"gamerTag"		: "TABSEN",
			"faceIt"		: "tabseN",
			"name"			: "Johannes Wodarz",
			"flag"			: "DE",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "3e6875b6-c45b-4386-856e-718ea6f7bbcd",
			"gamerTag"		: "LEGIJA",
			"faceIt"		: "LEGIJA",
			"name"			: "Nikola Ninic",
			"flag"			: "RS",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "0072a9c2-9af9-40c6-b796-b881dd46639b",
			"gamerTag"		: "ptr",
			"faceIt"		: "ptr",
			"name"			: "Peter Gurney",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "50920653-d035-4b50-b722-c6d510af0194",
			"gamerTag"		: "FugLy",
			"faceIt"		: "FugLy",
			"name"			: "Jacob Medina",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"backup"		: true
		} 
	]
};

OpT = {
	"name"		:	"Optic",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/optic.png",
	"twitter"	: 	"@OpTicGaming",
	"photoName"	: 	"optic",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "cf349438-8618-4f00-bd8e-b48dae7caa79",
			"gamerTag"		: "daps",
			"faceIt"		: "daps",
			"name"			: "Damian Steele",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "2be516fe-04e8-4a75-a854-16ecc75382b2",
			"gamerTag"		: "NAF",
			"faceIt"		: "NAF-FLY",
			"name"			: "Keith Markovic",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "b4d169d0-3536-42c7-b9c5-dd34f1275f17",
			"gamerTag"		: "mixwell",
			"faceIt"		: "mixwell",
			"name"			: "Óscar Cañellas",
			"flag"			: "ES",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "b10c1c83-ea16-47f1-b8f6-c0b4106b99b5",
			"gamerTag"		: "stanislaw",
			"faceIt"		: "stanislaw",
			"name"			: "Peter Jarguz",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "cdf57434-9165-4699-a9d1-816ad6db58a3",
			"gamerTag"		: "RUSH",
			"faceIt"		: "Rushh",
			"name"			: "Will Wierzba",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		} 
	]
};

RNG = {
	"name"		:	"Renegades",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/Renegades.png",
	"twitter"	:   "@Renegades",
	"photoName"	: 	"renegades", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "64e057b0-f467-4687-855d-61862dde8d2e",//d80b008f-b0e8-4d95-b939-648b4bd1907d
			"gamerTag"		: "SPUNJ",
			"faceIt"		: "iMRickeh", // google doc says JNUPS
			"name"			: "Chad Burchill",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "9c9b2f52-cffe-4858-a710-c903c805aa22",
			"gamerTag"		: "yam",
			"faceIt"		: "iMyam",
			"name"			: "Yaman Ergenekon",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "9a8ea9d5-61c7-4b38-b64f-35f4945048fa",
			"gamerTag"		: "jks",
			"faceIt"		: "jks1",
			"name"			: "Justin Savage",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "fa987b0d-d33b-4ac4-83ec-260d11c55789",
			"gamerTag"		: "AZR",
			"faceIt"		: "VOXAZR",
			"name"			: "Aaron Ward",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "ba37f98c-c73a-4097-8b5e-9af3a4ac8dbb",
			"gamerTag"		: "USTILO",
			"faceIt"		: "USTILO",
			"name"			: "Karlo Pivac",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		}
		
	]
};

Selfless = {
	"name"		:	"Selfless",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/selfless.png",
	"twitter"	:   "@SelflessGG", 
	"photoName"	: 	"selfless",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "9cd71030-b816-4c92-9f53-d59c697d62a4",
			"gamerTag"		: "MAiNLiNE",
			"faceIt"		: "MAiNLiNE",
			"name"			: "Michael Jaber",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "c725fe4c-90b9-4bd3-a92c-3b222f8b62e3",
			"gamerTag"		: "mitch",
			"faceIt"		: "mitch33",
			"name"			: "Mitch Semago",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "795d18b2-41d3-4f5f-b71b-7114a0d249f5",
			"gamerTag"		: "Nifty",
			"faceIt"		: "NIFTYfacesIT",
			"name"			: "Noah Francis",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "3856f52f-0427-4ca7-8cf9-af78d47a1ef6",
			"gamerTag"		: "Relyks",
			"faceIt"		: "Relyks",
			"name"			: "Skyler Weaver",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "0af1b574-1ecc-4deb-a6fd-5ee7d770355d",
			"gamerTag"		: "CoNnOrRr93",
			"faceIt"		: "connorrr93",
			"name"			: "Connor Glover",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"backup"		: true,
		},
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
	"lineup" 		: 	[//missing 		SK Gaming
		{
			"faceitID"		: "3de64c20-5c8e-4779-af49-bc7e17ca0e1d",
			"gamerTag"		: "MODDII",
			"faceIt"		: "MODDII",
			"name"			: "Andreas Fridh",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "6b64959b-c813-47cd-959e-8546abbd0748",
			"gamerTag"		: "AcilioN",
			"faceIt"		: "AcilioN",
			"name"			: "Asger Larsen",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "26fc6f28-4374-4339-9b5e-01a26340fb12",
			"gamerTag"		: "Pimp",
			"faceIt"		: "Pimp",
			"name"			: "Jacob Winneche",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "2a4e0add-8580-4167-8a8d-25ea3d1b8690",
			"gamerTag"		: "Friis",
			"faceIt"		: "Friis",
			"name"			: "Michael Jørgensen",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "98542324-dd2e-4b51-b651-99c131420080",
			"gamerTag"		: "MagiskbOY",
			"faceIt"		: "Magisk",
			hltv			: 'Magisk',
			"name"			: "Emil Reif",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/season1/SK/Magiskb0Y.png'
		}
	]
};

Dignitas = {
	"name"		: "Dignitas",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/dignitas.png",
	"twitter"	: "@TeamDignitas",
	"photoName"	: 	"dignitas",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "d935e262-5dc7-4f95-aa1d-6730140758eb",
			"gamerTag"		: "tenzki",
			"faceIt"		: "tenzki",
			"name"			: "Jesper Mikalski",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@tenzkiCSGO",
			"videoLink"		: null
		},
		{
			"faceitID"		: "72f1249e-aeb5-45ce-913f-d43d98cf03cc",
			"gamerTag"		: "k0nfig",
			"faceIt"		: "k0nfig",
			"name"			: "Kristian Wienecke",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@k0nfigCS",
			"videoLink"		: null
		},
		{
			"faceitID"		: "4f6fb913-1ad2-43af-bb33-507588b1eaed",
			"gamerTag"		: "MSL",
			"faceIt"		: "MSLL",
			"name"			: "Mathias Lauridsen",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@MSLcsgo",
			"videoLink"		: null
		},
		{
			"faceitID"		: "ddfa4144-fae5-48cd-9534-cd444abe4d38",
			"gamerTag"		: "cajunb",
			"faceIt"		: "cajunb",
			"name"			: "René Borg",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@cajunbCS",
			"videoLink"		: null
		},
		{
			"faceitID"		: "24d0aff3-ff3b-4791-bca5-b1b7611e2e9f",
			"gamerTag"		: "RUBINO",
			"faceIt"		: "rubino",
			"name"			: "Ruben Villarroel",
			"flag"			: "NO",
			"playerLink"	: null,
			"socialLink"	: "@rubinoeu",
			"videoLink"		: null
		} 
	]
};

EnVyUs = {
	"name"		: "EnVyUs",
	"lightLogo" : "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/home_logo_envyus_@2x.png", 
	"darkLogo"	: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/envyus.png",
	"twitter"	: "@TeamEnVyUs",
	"photoName"	: 	"envyus",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "7163ad85-3c68-4ba3-b36a-9f723345fd69",
			"gamerTag"		: "happy",
			"faceIt"		: "happy1",
			hltv			: "Happy",
			"name"			: "Vincent Schopenhauer",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@nV_HappyV",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7429'
		},
		{
			"faceitID"		: "d670bb72-f778-4fa9-9e9f-f8b42cff3519",
			"gamerTag"		: "NBK",
			"faceIt"		: "NBK",
			hltv			: "NBK-",
			"name"			: "Nathan Schmitt",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@nV_NBK",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7168'
		},
		{
			"faceitID"		: "9269548a-6cd4-46a7-a3b8-9f3816e52e49",
			"gamerTag"		: "kennys",
			"faceIt"		: "kennyS-",
			hltv			: "kennyS",
			"name"			: "Kenny Schrub",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@EnVy_kennyS",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7167'
		},
		{
			"faceitID"		: "de21905f-47e9-46c2-bfd2-e56f63795c87",
			"gamerTag"		: "apEX",
			"faceIt"		: "apEX",
			hltv			: "apEX",
			"name"			: "Dan Madesclaire",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@ENVYUS_apEX",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=7322'
		},
		{
			"faceitID"		: "683910d5-5906-49be-90ae-fbd72c8c9426",
			"gamerTag"		: "DEVIL",
			"faceIt"		: "DEVIL08000",
			hltv			: "DEVIL",
			"name"			: "Timothée Démolon",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@nV_DEVIL",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=8569'
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
			"playerLink"	: null,
			"socialLink"	: "@Liquid_Hiko",
			"videoLink"		: null
		},
		{
			"faceitID"		: "f4390b5f-98ca-49b5-bfb5-4552a0ba9037",
			"gamerTag"		: "adreN",
			"faceIt"		: "Hoagsta",
			"name"			: "Eric John Hoag",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "97f7d868-7221-46eb-a250-38ffaf1cc5c1",
			"gamerTag"		: "EliGE",
			"faceIt"		: "EliGE",
			"name"			: "Jonathan David Jablonowski",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@liquidelige",
			"videoLink"		: null
		},
		{
			"faceitID"		: "cee601f6-4800-45ac-a34b-831b9a034fff",
			"gamerTag"		: "jdm64",
			"faceIt"		: "jdm64",
			"name"			: "Joshua Marzano",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@Liquidkoosta",
			"videoLink"		: null
		},
		{
			"faceitID"		: "b077f54e-fbca-41ce-9e80-58b9e2f11495",
			"gamerTag"		: "nitr0",
			"faceIt"		: "nitr0--",
			"name"			: "Nicholas Cannella",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@liquidnitr0",
			"videoLink"		: null
		},
	]
};

TSM = {
	"name"		: "TSM",
	"lightLogo" : "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/home_logo_tsm_@2x.png",
	"darkLogo"	: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/tsm.png",
	"logo"		: "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/tsm.png",
	"twitter"	: "@TeamSoloMid",
	"photoName"	: "tsm",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "09b3fcd5-ee22-4834-8969-d32577bad72d",
			"gamerTag"		: "cadiaN",
			"faceIt"		: "cadiaN",
			"name"			: "Casper Møller",
			"flag"			: "dk",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "3d879438-d060-4876-ae84-29f378a7f565",
			"gamerTag"		: "Semphis",
			"faceIt"		: "semphis",
			"name"			: "Kory Friesen",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "16c297e6-fc9a-4bc8-9147-47f8449d4fc6",
			"gamerTag"		: "FNS",
			"faceIt"		: "FNS-",
			"name"			: "Pujan Mehta",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "c87eb53d-bd0f-43d1-b26c-e56451cc52fa",
			"gamerTag"		: "SicK",
			"faceIt"		: "SicK_",
			"name"			: "Hunter Mims",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"backup"		: true
		},
		{
			"faceitID"		: "3ffee30c-23bd-40dc-ad67-c45ba0815cf5",
			"gamerTag"		: "autimatic",
			"faceIt"		: "autimatic",
			"name"			: "Timothy Ta",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
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
			"faceitID"		: "425a97f6-2a9b-426d-a81e-0cd63ba2f343",
			"gamerTag"		: "TaZ",
			"faceIt"		: "TaZ",
			"name"			: "Wiktor Wojtas",
			"flag"			: "PL",
			"playerLink"	: null,
			"socialLink"	: "@g5taz",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=161'
		},
		{
			"faceitID"		: "d683100c-1452-47cc-af4a-b66efea476b0",
			"gamerTag"		: "NEO",
			"faceIt"		: "neo-no",
			"name"			: "Filip Kubski",
			"flag"			: "PL",
			"playerLink"	: null,
			"socialLink"	: "@neo_fkubski",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=165',
			photoUrl		: 'http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/94x94/virtusPRO/schedule_NEO_virtuspro_@1.png'
		},
		{
			"faceitID"		: "24180323-d946-4bb7-a334-be3e96fcac05",
			"gamerTag"		: "pasha",
			"faceIt"		: "PASHA",
			hltv			: "pashaBiceps",
			"name"			: "Jarosław Jarząbkowski",
			"flag"			: "PL",
			"playerLink"	: null,
			"socialLink"	: "@paszaBiceps",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=317'
		},
		{
			"faceitID"		: "5ad1783f-f978-4501-8708-b9a04ba47ee9",
			"gamerTag"		: "snax",
			"faceIt"		: "SNAX",
			hltv			: "Snax",
			"altTag"		: "Snax", 
			"name"			: "Janusz Pogorzelski",
			"flag"			: "PL",
			"playerLink"	: null,
			"socialLink"	: "@cios_snax",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=2553',
			photoUrl		: 'http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/94x94/virtusPRO/schedule_snax_virtuspro_@1.png'
		},
		{
			"faceitID"		: "e90de29a-db00-4e03-8044-04ccf54b4b64",
			"gamerTag"		: "byali",
			"faceIt"		: "bialy",
			"name"			: "Paweł Bieliński",
			"flag"			: "PL",
			"playerLink"	: null,
			"socialLink"	: "@byalics",
			"videoLink"		: null,
			stats 			: 'http://www.hltv.org/?pageid=173&playerid=5386',
			photoUrl		: 'http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/94x94/virtusPRO/schedule_byali_virtuspro_@1.png'
		},
	]
};

HR = {
	"name"		: "Hellraisers",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/HellRaisers.png"
};

Immortals = {
	"name"		: "Immortals",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/Immortals-Teal-Cutout.png",
	"lineup"	: [
		{
			"faceitID"		: "7f5974af-e1bf-43e2-92ea-b7d0a82f5ef7",
			"gamerTag"		: "zews",
			"faceIt"		: "wiltoNzews",
			"name"			: "Wilton Prado",
			"flag"			: "br",
			"socialLink"	: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/immortals/zews.png'
		},
		{
			"faceitID"		: "4613e6a8-e551-4e48-bb6c-f7d6569ce45d",
			"gamerTag"		: "felps",
			"faceIt"		: "felpsz",
			"name"			: "Joao Vasconcellos",
			"flag"			: "br",
			"socialLink"	: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/immortals/felps.png'
		},
		{
			"faceitID"		: "01f4b994-de2d-4edd-91d1-117cbc52785a",
			"gamerTag"		: "LUCAS1",
			"faceIt"		: "lucasteles",
			"name"			: "Lucas Teles",
			"flag"			: "br",
			"socialLink"	: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/immortals/lucas1.png'
		},
		{
			"faceitID"		: "c6154c13-83dd-4d8d-997c-e8bbb8ae5199",
			"gamerTag"		: "HEN1",
			"faceIt"		: "hen1-",
			"name"			: "Henrique Teles",
			"flag"			: "br",
			"socialLink"	: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/immortals/hen1.png'
		},
		{
			"faceitID"		: "784cfb45-9bcf-4a75-bc05-65e21da7df5b",
			"gamerTag"		: "boltz",
			"faceIt"		: "boltzzS",
			"name"			: "Ricardo Prass",
			"flag"			: "br",
			"socialLink"	: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/immortals/boltz.png'
		} 
	]
};

AltAttax = {
	"name"		: "Alternate Attax",
	"logo"		: "http://cdn.eleague.com/csgo/images/aTTaX.png"
};

teams = {
	"rngcsgo" : RNG,
	"Renegades" : RNG,
	"LG" : Luminosity,
	"Luminosity" : Luminosity,
	"Liquid-" : Liquid,
	"Liquid" : Liquid,
	"Cloud9" : Cloud9,
	"C9" : Cloud9,
	"Cloud 9" : Cloud9,
	"cloud9" : Cloud9,
	"NiP" : NiP,
	"Ninjas in Pyjamas" : NiP,
	"nip" : NiP,
	"OpT" : OpT,
	"OpTic" : OpT,
	"OpTic Gaming" : OpT,
	"G2" : G2,
	"G2 eSports" : G2,
	"G2 Espor" : G2,
	"G2 Esports": G2,
	"Selfless" : Selfless,
	"AST" : Astralis,
	"Astralis" : Astralis,
	"astralis" : Astralis,
	"NRG" : NRG,
	"CLG" : CLG,
	"SKG" : SKG,
	"SK" : SKG,
	"SK Gaming" : SKG,
	"compLexity": Complexity,
	"coL-cs": Complexity,
	"Complexity" : Complexity,
	"Dignitas" : Dignitas,
	"dignitas" : Dignitas,
	"Flipsid3" : Flipsid3,
	"FlipSid3" : Flipsid3,
	"Navi": Navi,
	"NaVi": Navi,
	"Natus Vincere": Navi,
	"navi": Navi,
	"Fnatic": Fnatic,
	"fnatic": Fnatic,
	"VP": VP,
	"Virtus Pro": VP,
	"VP.": VP,
	"Virtus.pro": VP,
	"virtuspro": VP,
	"EnVyUs": EnVyUs,
	"ENVYUS-" : EnVyUs,
	"envyus" : EnVyUs,
	"Mousesports": Mousesports,
	"mousesports": Mousesports,
	"Faze": FazeClan,
	"FaZe": FazeClan,
	"FaZe Clan": FazeClan,
	"Gambit": Gambit,
	"Gambit1": Gambit,
	"EchoFox": EchoFox,
	"Echo Fox": EchoFox,
	"TSM": TSM,
	"HellRaisers": HR,
	"Immortals": Immortals,
	"AltAttax": AltAttax,
	"ALTERNATE aTTaX": AltAttax
};