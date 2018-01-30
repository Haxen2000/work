getPlayerImageUrl = function(team, player, size) {
    var path = window.location.pathname.replace(/\/$/, '');
    var imgType = '';
    if (path.indexOf('schedule') > -1 || path == '/premier' || path == '/premier-old') {
    	imgType = '.png';
    }
    else if (path.indexOf('teams') > -1) {
    	imgType = '.jpg';
    }
	for (var i = 0; i < teams[team].lineup.length; i++) {
		if (teams[team].lineup[i].gamerTag == player && teams[team].lineup[i].photoUrl) {
			return teams[team].lineup[i].photoUrl;
		}
		else if (teams[team].lineup[i].gamerTag == player && teams[team].lineup[i].teamPhotoUrl && imgType == '.jpg') {
			return teams[team].lineup[i].teamPhotoUrl;
		}
	}
	
	var slug = teams[team].photoSlug != null ? teams[team].photoSlug : teams[team].photoName;
	return "http://s3.amazonaws.com/eleague-prod/player/" + player.toLowerCase() + '.png';
}

Astralis = {
	"name"		:	"Astralis",
	"logo" 		:	"http://cdn.eleague.com/img/csgo/premier/astralis/astralis_120x120.png",
	"twitter"	: 	"@astralisgg", 
	"matches"	: 	[],
	"photoName"	: 	"astralis", 
	"lineup" 	: 	[
		{
			"faceitID"		: "5cd2827e-9f73-4080-8cb2-82bee817a173",
			id 				: 214344,
			"gamerTag"		: "Xyp9x",
			"faceIt"		: "Xyp9x",
			'hltv'			: 4954,
			"name"			: "Andreas Højsleth",
			"flag"			: "DK",
			"playerLink"	: 'Xyp9x',
			"socialLink"	: "@Xyp9x",
			"videoLink"		: 'xyp9x'
		},
		{
			"faceitID"		: "aef66e5e-2054-4010-baa7-503eb620c0eb",
			id 				: 215583,
			"gamerTag"		: "Kjaerbye",
			"faceIt"		: "Kjaerbye",
			'hltv'			: 8394,
			"name"			: "Markus Kjærbye",
			"flag"			: "DK",
			"playerLink"	: 'Kjaerbye',
			"socialLink"	: "@KjaerbyeCS",
			"videoLink"		: null
		},
		{
			"faceitID"		: "d6bc4849-5256-4463-a38e-bcd77fc31ff9",
			id 				: 214826,
			"gamerTag"		: "dev1ce",
			"faceIt"		: "dev1ce",
			"altTag"		: "device",
			'hltv'			: 7592, 
			"name"			: "Nicolai Reedtz",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@dev1ce",
			"videoLink"		: 'device'
		},
		{
			"faceitID"		: "7e80ed2a-8e39-457e-95c2-1c9ba9449daf",
			id 				: 214387,
			"gamerTag"		: "dupreeh",
			"faceIt"		: "dupreeh",
			'hltv'			: 7398,
			"name"			: "Peter Rasmussen",
			"flag"			: "DK",
			"playerLink"	: 'dupreehcsgo',
			"socialLink"	: "@dupreehCSGO",
			"videoLink"		: 'dupreeh'
		},
		{
			"faceitID"		: "1be3d622-d52f-4edc-bb46-047faa65cb29",
			id 				: 215063,
			"gamerTag"		: "gla1ve",
			"faceIt"		: "gla1ve",
			'hltv'			: 7412,
			"name"			: "Lukas Rossander",
			"flag"			: "DK",
			"playerLink"	: 'gla1ve',
			"socialLink"	: '@gla1ve_csgo',
			"videoLink"		: null
		}
	]
};

Avangar = {
	"lineup"	: [
		{
			"gamerTag"		: "qikert",
			"faceIt"		: "qikert",
			"name"			: "Alexey Golubev",
			"flag"			: "KZ",
			id 				: 13239
		},
		{
			"gamerTag"		: "dimasick",
			"faceIt"		: "dimasick",
			"name"			: "Dmitriy Matviyenko",
			"flag"			: "KZ",
			id 				: 13780
		},
		{
			"gamerTag"		: "buster",
			"faceIt"		: "buster",
			"name"			: "Timur Tulepov",
			"flag"			: "KZ",
			id 				: 11942
		}
	]
};

BIG = {
	"lineup"	: [
		{
			"gamerTag"		: "tabseN",
			"faceIt"		: "tabseN",
			"name"			: "Johannes Wodarz",
			"flag"			: "DE",
			id 				: 5794
		}
	]
};

Cloud9 = {
	"name"		:	"Cloud 9",
	"logo" 		:	"http://cdn.eleague.com/img/csgo/premier/cloud9/cloud9_120x120.png",
	"twitter"	:	"@Cloud9",
	"photoName"	: 	"cloud9", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "cdf57434-9165-4699-a9d1-816ad6db58a3",
			"gamerTag"		: "RUSH",
			"faceIt"		: "Rushh",
			'hltv'			: 7805,
			"name"			: "Will Wierzba",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			id 				: 87541
		},
		{
			"faceitID"		: "118a784e-581b-4098-a4d4-95746cefeb97",
			"gamerTag"		: "tarik",
			"faceIt"		: "TaRiK",
			'hltv'			: 8523,
			"name"			: "Tarik Celik",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			id 				: 120603
		},
		{
			"faceitID"		: "2a37a5c2-e5f7-4804-a88c-fadfa73d4288",
			"gamerTag"		: "Skadoodle",
			"faceIt"		: "skadoodle",
			'hltv'			: 7440,
			"name"			: "Tyler Latham",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@C9_Skadoodle",
			"videoLink"		: null,
			id 				: 31830
		},
		{
			"faceitID"		: "2be37d17-f9fb-42e2-8143-bcdb5f1239b2",
			id 				: 223718,
			"gamerTag"		: "Stewie2K",
			"faceIt"		: "Stewie2k",
			'hltv'			: 8797,
			"name"			: "Jacky Yip",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@C9Stewie",
			"videoLink"		: null,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/stewie2k_0.png'
		},
		{
			"faceitID"		: "3ffee30c-23bd-40dc-ad67-c45ba0815cf5",
			"gamerTag"		: "autimatic",
			"faceIt"		: "autimatic",
			'hltv'			: 8735,
			"name"			: "Timothy Ta",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			id 				: 138404,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/automatic_0.png'
		}
	]
};

EnVyUs = {
	"name"		: "EnVyUs",
	"lightLogo" : "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/home_logo_envyus_@2x.png", 
	"darkLogo"	: "http://cdn.eleague.com/img/csgo/premier/envyus/envyus_120x120.png",
	"twitter"	: "@TeamEnVyUs",
	"photoName"	: 	"envyus",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "9269548a-6cd4-46a7-a3b8-9f3816e52e49",
			id 				: 374084,
			"gamerTag"		: "RpK",
			"faceIt"		: "RpK",
			'hltv'			: 7169,
			"name"			: "Cédric Guipouy",
			"flag"			: "FR",
			"playerLink"	: "RpKTANK",
			"socialLink"	: "@EnVyRPK",
			"videoLink"		: null
		},
		{
			"faceitID"		: "7163ad85-3c68-4ba3-b36a-9f723345fd69",
			"gamerTag"		: "Happy",
			"faceIt"		: "happy1",
			'hltv'			: 7429,
			"name"			: "Vincent Schopenhauer",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@nV_HappyV",
			"videoLink"		: null,
			id 				: 213618
		},
		{
			"faceitID"		: "cd3d6d2c-d6ff-4c3d-b976-d63827baace9",
			id 				: 612676,
			"gamerTag"		: "SIXER",
			"faceIt"		: "SIXERj",
			'hltv'			: 147,
			"name"			: "Christophe Xia",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@sixercsgo",
			"videoLink"		: null
		},
		{
			"faceitID"		: "de21905f-47e9-46c2-bfd2-e56f63795c87",
			id 				: 216531,
			"gamerTag"		: "ScreaM",
			"faceIt"		: "ScreaM",
			'hltv'			: 7390,
			"name"			: "Adil Benrlitom",
			"flag"			: "BE",
			"playerLink"	: "ScreaMdAK1nG",
			"socialLink"	: "@nV_ScreaM_",
			"videoLink"		: "scream"
		},
		{
			"faceitID"		: "d670bb72-f778-4fa9-9e9f-f8b42cff3519",
			id 				: 418586,
			"gamerTag"		: "xms",
			"faceIt"		: "xms",
			'hltv'			: 9545,
			"name"			: "Alexandre Forté",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@nV_xmsA",
			"videoLink"		: "xms51"
		}
	]
};

FazeClan = {
	"name"		: "Faze",
	"logo"		: "http://cdn.eleague.com/img/csgo/premier/faze/faze_120x120_v2.png",
	"twitter"	: "@FaZeClan",
	"photoName"	: "faze", 
	"lineup"	: [
		{
			"faceitID"		: "004cfd66-dbe2-4378-ba26-3d7617cd37aa",
			"gamerTag"		: "rain",
			"faceIt"		: "rainje",
			'hltv'			: 8183,
			"name"			: "Håvard Nygaard",
			"flag"			: "NO",
			"playerLink"	: null,
			"socialLink"	: "@FaZe_rainCS",
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/faze/rain_177x222.jpg',
			id 				: 211640
		},
		{
			"faceitID"		: "47946790-c6fa-49c6-a29c-8667ed9e656e",
			"gamerTag"		: "olofmeister",
			"faceIt"		: "olofmeister",
			'hltv'			: 885,
			"name"			: "Olof Kajbjer",
			"flag"			: "SE",
			"playerLink"	: 'olofmeister',
			"socialLink"	: "@olofmeister",
			"videoLink"		: 'olofmeister',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/faze/olofmeister_177x222.jpg',
			id 				: 240259
		},
		{
			"faceitID"		: "a6ba59a3-345b-4923-976c-b8858214f0e4",
			"gamerTag"		: "GuardiaN",
			"faceIt"		: "GuardiaN",
			'hltv'			: 2757,
			"name"			: "Ladislav Kovács",
			"flag"			: "SK",
			"playerLink"	: 'CSGuardiaN',
			"socialLink"	: "@guardiancsgo",
			"videoLink"		: 'rguardian',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/faze/guardian_177x222.jpg',
			id 				: 217141,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/guardian_0.png'
		},
		{
			"faceitID"		: "19606e0c-137b-4885-a904-744fa12d25f6",
			"gamerTag"		: "NiKo",
			"faceIt"		: "NiK0",
			'hltv'			: 3741,
			"name"			: "Nikola Kovač",
			"flag"			: "BA",
			"playerLink"	: null,
			"socialLink"	: "@mouzNiKo",
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/faze/niko_177x222.jpg',
			id 				: 291375
		},
		{
			"faceitID"		: "68179dc7-9381-4264-a26c-52693400f1eb",
			"gamerTag"		: "karrigan",
			"faceIt"		: "karrigan",
			'hltv'			: 429,
			"name"			: "Finn Andersen",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@karriganCSGO",
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/faze/karrigan_177x222.jpg',
			id 				: 214354
		}	
	]
};

Flash = {
	"lineup"	: [
		{
			"gamerTag"		: "AttackeR",
			"faceIt"		: "AttackeR",
			"name"			: "Yuanzhang Sheng",
			"flag"			: "CN",
			id 				: 8552
		},
		{
			"gamerTag"		: "Summer",
			"faceIt"		: "Summer",
			"name"			: "YuLun Cai",
			"flag"			: "CN",
			id 				: 7028
		},
		{
			"gamerTag"		: "Kaze",
			"faceIt"		: "Kaze",
			"name"			: "Weng Keong Khong",
			"flag"			: "MY",
			id 				: 8950
		},
		{
			"gamerTag"		: "Karsa",
			"faceIt"		: "Karsa",
			"name"			: "QiFang Su",
			"flag"			: "CN",
			id 				: 8599
		},
		{
			"gamerTag"		: "LoveYY",
			"faceIt"		: "LoveYY",
			"name"			: "KunHua Bai",
			"flag"			: "CN",
			id 				: 8957
		}
	]
};

Fnatic = {
	"name"		: "Fnatic",
	"logo"		: "http://cdn.eleague.com/img/csgo/premier/fnatic/fnatic_120x120.png",
	"lightLogo"	: "http://cdn.eleague.com/img/csgo/premier/fnatic/fnatic_100x100.png",
	"twitter"	: "@FNATIC",
	"photoName"	: "fnatic", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "5c90ca92-7ea3-4b0c-b2cb-25edb5c6b77d",
			id 				: 240263,
			"gamerTag"		: "flusha",
			"faceIt"		: "flusha",
			'hltv'			: 3055,
			"name"			: "Robin Roennquist",
			"flag"			: "SE",
			"playerLink"	: 'flushaCSGO',
			"socialLink"	: '@flusha_csgo',
			"videoLink"		: 'flusha',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/fnatic/flusha_177x222.jpg'
		},
		{
			"faceitID"		: "4946fdbd-00e9-4408-91dd-6f3c87c39b23",
			id 				: 240257,
			"gamerTag"		: "jw",
			'altTag'		: 'JW',
			"faceIt"		: "JW",
			'hltv'			: 3849,
			"name"			: "Jesper Wecksell",
			"flag"			: "SE",
			"playerLink"	: 'Officialjw',
			"socialLink"	: '@jwCSGO',
			"videoLink"		: 'jesperwow',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/fnatic/jw_177x222.jpg'
		},
		{
			"faceitID"		: "8a2f2125-4d5a-4bf8-a5ff-10e7fb3ef2fa",
			id 				: 900282,
			"gamerTag"		: "KRIMZ",
			"faceIt"		: "KRIMZ",
			'hltv'			: 7528,
			"name"			: "Freddy Johansson",
			"flag"			: "SE",
			"playerLink"	: 'OfficialKrimz',
			"socialLink"	: "@krimzCSGO",
			"videoLink"		: 'fnatickrimzcsgo',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/fnatic/krimz_177x222.jpg'
		},
		{
			"gamerTag"		: "Golden",
			id 				: 601794,
			'hltv'			: 11110,
			"name"			: "Maikil Selim",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: '@goldennCSGO',
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/fnatic/golden_177x222.jpg'
		},
		{
			"faceitID"		: "6b03cf9d-93c7-45e3-9cf3-6a2d5456cdd2",
			id 				: 292419,
			hltv			: 9261,
			"gamerTag"		: "Lekr0",
			"faceIt"		: "Lekr0",
			"name"			: "Jonas Olofsson",
			"flag"			: "SE",
			"playerLink"	: 'Lekr0',
			"socialLink"	: '@lekr0cs',
			"videoLink"		: 'lekr0',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/fnatic/lekr0_177x222.jpg'
		}
	]
};

G2 = {
	"name"		:	"G2 Esports",
	"logo"		: 	"http://cdn.eleague.com/img/csgo/premier/g2/g2_120x120.png",
	"twitter"	:	"@G2esports",
	"photoName"	: 	"g2", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "9269548a-6cd4-46a7-a3b8-9f3816e52e49",
			"gamerTag"		: "kennys",
			"altTag"		: "kennyS",
			"faceIt"		: "kennyS-",
			'hltv'			: 7167,
			"name"			: "Kenny Schrub",
			"flag"			: "FR",
			"playerLink"	: 'OfficialkennyS',
			"socialLink"	: "@EnVy_kennyS",
			"videoLink"		: 'kennys',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/g2/kennys_177x222.jpg',
			id 				: 218571
		},
		{
			"faceitID"		: "8d9e4df9-96b5-448d-82d8-c4a46ad2f368",
			"gamerTag"		: "bodyy",
			"faceIt"		: "bodyy",
			'hltv'			: 8374,
			"name"			: "Alexandre Pianaro",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@g2bodyy",
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/g2/bodyy_177x222.jpg',
			id 				: 210969
		},
		{
			"faceitID"		: "d670bb72-f778-4fa9-9e9f-f8b42cff3519",
			"gamerTag"		: "NBK-",
			"faceIt"		: "NBK",
			'hltv'			: 7168,
			"name"			: "Nathan Schmitt",
			"flag"			: "FR",
			"playerLink"	: 'NathaNizzle',
			"socialLink"	: "@nV_NBK",
			"videoLink"		: 'nbk',
			"photoUrl"		: 'http://s3.amazonaws.com/eleague-prod/player/nbk.png',
			id 				: 213552
		},
		{
			"faceitID"		: "de21905f-47e9-46c2-bfd2-e56f63795c87",
			"gamerTag"		: "apEX",
			"faceIt"		: "apEX",
			'hltv'			: 7322,
			"name"			: "Dan Madesclaire",
			"flag"			: "FR",
			"playerLink"	: 'apEXcsgo',
			"socialLink"	: "@ENVYUS_apEX",
			"videoLink"		: 'apex',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/g2/apex_177x222.jpg',
			id 				: 218574
		},
		{
			"faceitID"		: "ecd004fa-0215-4a42-965b-07ebefd69f0c",
			"gamerTag"		: "shox",
			"faceIt"		: "shox",
			'hltv'			: 1225,
			"name"			: "Richard Papillon",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@G2shox",
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/g2/shox_177x222.jpg',
			id 				: 213699
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
			"gamerTag"		: "fitch",
			"faceIt"		: "fitch",
			hltv			: 'fitch',
			"name"			: "Bektiyar Bakhytov",
			"flag"			: "KZ",
			"playerLink"	: 'ZeusCSGO',
			"socialLink"	: '@ZeusCS_GO',
			"videoLink"		: 'zeus',
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

Heroic = {
	"name"		: "Heroic",
	"logo"		: "http://cdn.eleague.com/img/csgo/premier/heroic/heroic_120x120.png",
	"photoName"	: "heroic", 
	"lineup"	: [
		{
			"faceitID"		: "7f5974af-e1bf-43e2-92ea-b7d0a82f5ef7",
			id 				: 454834,
			"gamerTag"		: "MODDII",
			"faceIt"		: "MODDII",
			'hltv'			: 545,
			"name"			: "Andreas Fridh",
			"flag"			: "SE",
			"playerLink"	: "AF.MODDII",
			"socialLink"	: "@MODDII1",
			"videoLink"		: "moddii_t",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/heroic/moddii_177x222.jpg'
		},
		{
			"faceitID"		: "4613e6a8-e551-4e48-bb6c-f7d6569ce45d",
			"gamerTag"		: "Snappi",
			"faceIt"		: "Snappi",
			'hltv'			: 922,
			"name"			: "Marco Pfeiffer",
			id 				: 294114,
			"flag"			: "DK",
			"socialLink"	: "@SnappiCSGO",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/heroic/snappi_177x222.jpg'
		},
		{
			"faceitID"		: "01f4b994-de2d-4edd-91d1-117cbc52785a",
			"gamerTag"		: "es3tag",
			id 				: 215428,
			"faceIt"		: "es3tag",
			'hltv'			: 8611,
			"name"			: "Patrick Hansen",
			"flag"			: "DK",
			"socialLink"	: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/heroic/es3tag_177x222.jpg'
		},
		{
			"faceitID"		: "c6154c13-83dd-4d8d-997c-e8bbb8ae5199",
			"gamerTag"		: "JUGi",
			"faceIt"		: "JUGi-",
			'hltv'			: 8783,
			"name"			: "Jakob Hansen",
			id 				: 293487,
			"flag"			: "DK",
			"playerLink"	: "jugicsgo",
			"socialLink"	: "@OfficialJUGi",
			"videoLink"		: "jugicsgo",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/heroic/jugi_177x222.jpg'
		},
		{
			"faceitID"		: "784cfb45-9bcf-4a75-bc05-65e21da7df5b",
			"gamerTag"		: "niko",
			"faceIt"		: "niko",
			'hltv'			: 10264,
			"name"			: "Nikolaj Kristensen",
			id 				: 187409,
			"flag"			: "DK",
			"socialLink"	: "@OfficialnikoCS",
			"videoLink"		: "niikowow",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/heroic/niko_177x222.jpg'
		} 
	]
};

Immortals = {
	"name"		: "Immortals",
	"logo"		: "http://cdn.eleague.com/img/csgo/premier/immortals/immortals_120x120.png",
	"lightLogo"	: "http://cdn.eleague.com/img/csgo/premier/immortals/immortals_100x100.png",
	"photoName"	: "immortals", 
	"lineup"	: [
		{
			"faceitID"		: "7f5974af-e1bf-43e2-92ea-b7d0a82f5ef7",
			id 				: 595868,
			"gamerTag"		: "cogu",
			"faceIt"		: "cogu",
			'hltv'			: 168,
			"name"			: "Raphael Camargo",
			"flag"			: "br",
			"socialLink"	: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/immortals/cogu_177x222.jpg'
		},
		{
			"faceitID"		: "4613e6a8-e551-4e48-bb6c-f7d6569ce45d",
			id 				: 106739,
			"gamerTag"		: "steel",
			"faceIt"		: "steel",
			'hltv'			: 7382,
			"name"			: "Lucas Lopes",
			"flag"			: "br",
			"playerLink"	: "steelegabr",
			"socialLink"	: "@steelegabr",
			"videoLink"		: "steelegatv",
			id 				: 106739,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/immortals/steel_177x222.jpg'
		},
		{
			"faceitID"		: "01f4b994-de2d-4edd-91d1-117cbc52785a",
			id 				: 457388,
			"gamerTag"		: "LUCAS1",
			"faceIt"		: "lucasteles",
			'hltv'			: 8566,
			"name"			: "Lucas Teles",
			"flag"			: "br",
			"playerLink"	: "lucastelesff2",
			"socialLink"	: "@imtlucas1",
			"videoLink"		: "lucasteles2",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/immortals/lucas1_177x222.jpg'
		},
		{
			"faceitID"		: "c6154c13-83dd-4d8d-997c-e8bbb8ae5199",
			id 				: 382512,
			"gamerTag"		: "HEN1",
			"faceIt"		: "hen1-",
			'hltv'			: 8565,
			"name"			: "Henrique Teles",
			"flag"			: "br",
			"playerLink"	: "henriquehen1",
			"socialLink"	: "@IMTHEN1",
			"videoLink"		: "henriquehen1",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/immortals/hen1_177x222.jpg'
		},
		{
			"faceitID"		: "784cfb45-9bcf-4a75-bc05-65e21da7df5b",
			id 				: 235226,
			"gamerTag"		: "boltz",
			"faceIt"		: "boltzzS",
			'hltv'			: 8568,
			"name"			: "Ricardo Prass",
			"flag"			: "br",
			"playerLink"	: "boltzcs",
			"socialLink"	: "@IMTBoltz",
			"videoLink"		: "ricardoboltz",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/immortals/boltz_177x222.jpg'
		} 
	]
};

Liquid = {
	"name"		:	"Liquid",
	"logo"		: 	"http://cdn.eleague.com/img/csgo/premier/liquid/liquid_120x120.png",
	"logoSmall" :	"http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/matchtracker/home_logo_TL_@2x.png",
	"twitter"	:   "@TeamLiquidPro",
	"photoName"	: 	"liquid",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "b10c1c83-ea16-47f1-b8f6-c0b4106b99b5",
			"gamerTag"		: "zews",
			"faceIt"		: "zews",
			'hltv'			: 8507,
			"name"			: "Wilton Prado",
			"flag"			: "BR",
			"playerLink"	: null,
			"socialLink"	: '@peterjarguz',
			"videoLink"		: 'stanislaw',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/liquid/stanislaw_177x222.jpg',
			id 				: 61641
		},
		{
			"faceitID"		: "26fc6f28-4374-4339-9b5e-01a26340fb12",
			"gamerTag"		: "Twistzz",
			"faceIt"		: "Twistzz",
			'hltv'			: 10394,
			"name"			: "Russel Van Dulken",	
			"flag"			: "CA",
			"playerLink"	: null,
			id 				: 142497,
			"socialLink"	: null,
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/liquid/twistzz_177x222.jpg'
		},
		{
			"faceitID"		: "97f7d868-7221-46eb-a250-38ffaf1cc5c1",
			"gamerTag"		: "EliGE",
			"faceIt"		: "EliGE",
			'hltv'			: 8738,
			"name"			: "Jonathan Jablonowski",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@liquidelige",
			id 				: 141452,
			"videoLink"		: 'elige',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/liquid/elige_177x222.jpg'
		},
		{
			"faceitID"		: 'a5df82fc-c307-4fa5-bbd7-1e8bc1bab1f4',
			"gamerTag"		: "jdm64",
			"faceIt"		: "jdm64",
			'hltv'			: 8346,
			"name"			: "Joshua Marzano",
			"flag"			: "us",
			"playerLink"	: 'JDM64CSGO',
			"socialLink"	: '@liquid_jdm',
			"videoLink"		: 'jdm64',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/liquid/jdm64_177x222.jpg',
			id 				: 15609
		},
		{
			"faceitID"		: "b077f54e-fbca-41ce-9e80-58b9e2f11495",
			"gamerTag"		: "nitr0",
			"faceIt"		: "nitr0--",
			'hltv'			: 7687,
			"name"			: "Nicholas Cannella",
			"flag"			: "us",
			"playerLink"	: 'nitr0cs',
			"socialLink"	: "@liquidnitr0",
			"videoLink"		: 'nitr0_tv',
			id 				: 121817,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/liquid/nitr0_177x222.jpg'
		},
	]
};

Misfits = {
	"lineup"	: [
		{
			"gamerTag"		: "devoduvek",
			"faceIt"		: "devoduvek",
			'hltv'			: 2730,
			"name"			: "David Dobrosavljevic",
			"flag"			: "FR",
			id 				: 10569,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/mousesports/chrisj_177x222.jpg'
		}
	]
};

Mousesports = {
	"name"		: "Mousesports",
	"logo"		: "http://cdn.eleague.com/img/csgo/premier/mousesports/mousesports_120x120.png",
	"lightLogo"	: "http://cdn.eleague.com/img/csgo/premier/mousesports/mousesports_100x100.png",
	"twitter"	: "@mousesports",
	"photoName"	: 	"mousesports", 
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "f9598267-6ac6-4629-85f9-989fde59eacb",
			id 				: 89202,
			"gamerTag"		: "chrisJ",
			"faceIt"		: "chrisJ",
			'hltv'			: 2730,
			"name"			: "Chris de Jong",
			"flag"			: "NL",
			"playerLink"	: null,
			"socialLink"	: "@chrisJcsgo",
			"videoLink"		: null,
			id 				: 89202,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/mousesports/chrisj_177x222.jpg'
		},
		{
			"faceitID"		: "3fb3bf5f-51c8-48c4-84b2-72851bf083d8",
			id 				: 212639,
			"gamerTag"		: "STYKO",
			"faceIt"		: "STYKO",
			'hltv'			: 6904,
			"name"			: "Martin Styk",
			"flag"			: "SK",
			"playerLink"	: 'styko.csgo',
			"socialLink"	: '@STYKOcsgo',
			"videoLink"		: 'stykop',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/mousesports/styko_177x222.jpg'
		},
		{
			"gamerTag"		: "oskar",
			id 				: 376564,
			"faceIt"		: "oskar",
			'hltv'			: 798,
			"name"			: "Tomáš Šťastný",
			"flag"			: "CZ",
			"playerLink"	: "CSoskar",
			"socialLink"	: "@CSGOoskar",
			"videoLink"		: "oskartommy",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/mousesports/oskar_177x222.jpg'
		},
		{
			"gamerTag"		: "suNny",
			id 				: 291332,
			"faceIt"		: "suNny",
			'hltv'			: 5479,
			"name"			: "Miikka Kemppi",
			"flag"			: "FI",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/mousesports/sunny_177x222.jpg'
		},
		{
			"gamerTag"		: "ropz",
			id 				: 491729,
			"faceIt"		: "ropz",
			'hltv'			: 11816,
			"name"			: "Robin Kool",
			"flag"			: "EE",
			"playerLink"	: "ropzicle",
			"socialLink"	: "@ropzicle",
			"videoLink"		: "rropz",
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/mousesports/ropz_177x222.jpg'
		}
	]
};

Navi = {
	"name"		: "Navi",
	"logo"		: "http://cdn.eleague.com/img/csgo/premier/navi/navi_120x120.png",
	"twitter"	: "@natusvincere",
	"photoName"	: "navi",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "3d767a2c-9f54-4f2f-aecc-0f92f1eb230f",
			"gamerTag"		: "electronic",
			"faceIt"		: "electronic",
			'hltv'			: 3347,
			"name"			: "Denis Sharipov",
			"flag"			: "RU",
			"playerLink"	: 'seizedcsgo',
			"socialLink"	: "@seizedwf",
			"videoLink"		: 'seizedwf',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/navi/seized_177x222.jpg',
			id 				: 217115
		},
		{
			"faceitID"		: "fe480d93-45a1-437e-a8c8-a33a837524ef",
			"gamerTag"		: "flamie",
			"faceIt"		: "flamiezy",
			'hltv'			: 7594,
			"name"			: "Egor Vasilyev",
			"flag"			: "RU",
			"playerLink"	: 'flamiecsgo',
			"socialLink"	: "@flamieCS",
			"videoLink"		: 'flamieff',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/navi/flamie_177x222.jpg',
			id 				: 211681
		},
		{
			"faceitID"		: "092f1f99-876d-4301-847f-19fd2e73be3b",
			"gamerTag"		: "Edward",
			"faceIt"		: "edzie",
			'hltv'			: 483,
			"name"			: "Ioann Sukhariev",
			"flag"			: "UA",
			"playerLink"	: 'OfficialEdward',
			"socialLink"	: "@IaonnSukhariev",
			"videoLink"		: 'edward',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/navi/edward_177x222.jpg',
			id 				: 217123
		},
		{
			"faceitID"		: "645357d3-d535-4630-90b9-d4263df2a225",
			"gamerTag"		: "Zeus",
			"faceIt"		: "zeus",
			'hltv'			: 484,
			"name"			: "Danylo Teslenko",
			"flag"			: "UA",
			"playerLink"	: 'ZeusCSGO',
			"socialLink"	: '@ZeusCS_GO',
			"videoLink"		: 'zeus',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/navi/zeus_177x222.jpg',
			id 				: 217158
		},
		{
			"faceitID"		: "ac71ba3c-d3d4-45e7-8be2-26aa3986867d",
			"gamerTag"		: "s1mple",
			"faceIt"		: "s1mple",
			'hltv'			: 7998,
			"name"			: "Oleksandr Kostyliev",
			"flag"			: "UA",
			"playerLink"	: 'Officials1mple',
			"socialLink"	: "@s1mpleO",
			"videoLink"		: 's1mpleof',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/navi/s1mple_177x222.jpg',
			id 				: 209119
		}
	]
};

NiP = {
	"name"		:	"NiP",
	"twitter"	:	"@NiPGaming",
	"logo" 		:	"http://cdn.eleague.com/img/csgo/premier/nip/nip_120x120.png",
	"photoName"	: 	"nip",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "edd17a40-20dc-4370-b824-ddea44d9dfe3",
			id 				: 248634,
			"gamerTag"		: "GeT_RiGhT",
			"faceIt"		: "GeT_RiGhT",
			'hltv'			: 39,
			"name"			: "Christopher Alesund",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@GeT_RiGhTcs",
			"videoLink"		: null
		},
		{
			"gamerTag"		: "draken",
			id 				: 286590,
			"faceIt"		: "draken",
			'hltv'			: 9255,
			"name"			: "William Sundin",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@drakenCSGO",
			"videoLink"		: "drakencsgo"
		},
		{
			"faceitID"		: "93fdfbd9-b47d-4b25-a200-1b44931e86e0",
			id 				: 248632,
			"gamerTag"		: "Xizt",
			"faceIt"		: "Xizt",
			'hltv'			: 884,
			"name"			: "Richard Landström",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@OfficialXizt",
			"videoLink"		: null
		},
		{
			"faceitID"		: "7b1f9938-a5e4-4c8e-8a25-371df87d311f",
			"gamerTag"		: "f0rest",
			"faceIt"		: "f0rest",
			'hltv'			: 29,
			"name"			: "Patrik Lindberg",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@f0restCS",
			"videoLink"		: null,
			id 				: 240330
		},
		{
			"gamerTag"		: "REZ",
			"faceIt"		: "REZ",
			'hltv'			: 9278,
			"name"			: "Fredrik Sterner",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: '@REZcsgo',
			id 				: 142561,
			"videoLink"		: "rez_cs"
		}
	]
};

North = {
	"name"		: "North",
	"logo"		: "http://cdn.eleague.com/img/csgo/premier/north/north_120x120.png",
	"darkLogo"	: "http://cdn.eleague.com/img/csgo/premier/north/north_120x120.png",
	"lightLogo"	: "http://cdn.eleague.com/img/csgo/premier/north/north_100x100.png",
	//"twitter"	: "@TeamDignitas",
	"photoName"	: "north",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "72f1249e-aeb5-45ce-913f-d43d98cf03cc",
			id 				: 214440,
			"gamerTag"		: "k0nfig",
			"faceIt"		: "k0nfig",
			'hltv'			: 9078,
			"name"			: "Kristian Wienecke",
			"flag"			: "DK",
			"playerLink"	: 'k0nfigCS',
			"socialLink"	: "@k0nfigCS",
			"videoLink"		: 'k0nfig',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/north/k0nfig_177x222.jpg'
		},
		{
			"faceitID"		: "ddfa4144-fae5-48cd-9534-cd444abe4d38",
			id 				: 214366,
			"gamerTag"		: "cajunb",
			"faceIt"		: "cajunb",
			'hltv'			: 2469,
			"name"			: "René Borg",
			"flag"			: "DK",
			"playerLink"	: 'cajunbCS',
			"socialLink"	: "@cajunbCS",
			"videoLink"		: 'cajunb',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/north/cajunb_177x222.jpg'
		},
		{
			"faceitID"		: "4952cd82-4d60-4c06-b0a9-35cfb33756d1",
			id 				: 216460,
			"gamerTag"		: "aizy",
			"faceIt"		: "aizyh",
			'hltv'			: 8095,
			"name"			: "Philip Aistrup",
			"flag"			: "DK",
			"playerLink"	: 'Aizycsgo',
			"socialLink"	: "@aizylife",
			"videoLink"		: 'aizycsgo',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/north/aizy_177x222.jpg'
		},
		{
			id 				: 418022,
			"gamerTag"		: "valde",
			"faceIt"		: "valde",
			'hltv'			: 9031,
			"name"			: "Valdemar Bjørn Vangså",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@Officialvalde",
			"videoLink"		: 'valdecs',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/north/valde_177x222.jpg',
		},
		{
			"faceitID"		: "4f6fb913-1ad2-43af-bb33-507588b1eaed",
			id 				: 211706,
			"gamerTag"		: "MSL",
			"faceIt"		: "MSLL",
			'hltv'			: 7156,
			"name"			: "Mathias Lauridsen",
			"flag"			: "DK",
			"playerLink"	: 'MSLcsgo',
			"socialLink"	: "@MSLcsgo",
			"videoLink"		: 'mslcsgo',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/north/msl_177x222.jpg'
		}
	]
};

OpT = {
	"name"		:	"Optic",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/optic.png",
	"lightLogo"	:	"http://cdn.eleague.com/csgo/images/100x100/optic_alt.png",
	"twitter"	: 	"@OpTicGaming",
	"photoName"	: 	"optic",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "118a784e-581b-4098-a4d4-95746cefeb97",
			"gamerTag"		: "tarik",
			"faceIt"		: "TaRiK",
			"name"			: "Tarik Celik",
			"flag"			: "TR",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/blank94.png'
		},
		{
			"faceitID"		: "b10c1c83-ea16-47f1-b8f6-c0b4106b99b5",
			"gamerTag"		: "stanislaw",
			"faceIt"		: "stanislaw",
			"name"			: "Peter Jarguz",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/blank94.png'
		},
		{
			"faceitID"		: "2be516fe-04e8-4a75-a854-16ecc75382b2",
			"gamerTag"		: "NAF-FLY",
			"faceIt"		: "NAF-FLY",
			"name"			: "Keith Markovic",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			id 				: 113492,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/naf-fly.png'
		},
		{
			"faceitID"		: "b4d169d0-3536-42c7-b9c5-dd34f1275f17",
			"gamerTag"		: "Mixwell",
			"faceIt"		: "mixwell",
			"name"			: "Óscar Cañellas",
			"flag"			: "ES",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/mixwell.png'
		},
		{
			"faceitID"		: "cdf57434-9165-4699-a9d1-816ad6db58a3",
			"gamerTag"		: "RUSH",
			"faceIt"		: "Rushh",
			"name"			: "Will Wierzba",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			id 				: 87541,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/blank94.png'
		} 
	]
};

QBF = {
	"lineup"	: [
		{
			"gamerTag"		: "balblna",
			"faceIt"		: "balblna",
			"name"			: "Grigori Oleinik",
			"flag"			: "RU",
			id 				: 8294
		},
		{
			"gamerTag"		: "jmqa",
			"faceIt"		: "jmqa",
			"name"			: "Savelii Bragin",
			"flag"			: "RU",
			id 				: 8368
		},
		{
			"gamerTag"		: "Kvik",
			"faceIt"		: "Kvik",
			"name"			: "Aurimas Kvakšys",
			"flag"			: "LT",
			id 				: 8459
		},
		{
			"gamerTag"		: "waterfaLLZ",
			"faceIt"		: "waterfaLLZ",
			"name"			: "Nikita Matveev",
			"flag"			: "RU",
			id 				: 8727
		},
		{
			"gamerTag"		: "Boombl4",
			"faceIt"		: "Boombl4",
			"name"			: "Kirill Mikhailov",
			"flag"			: "RU",
			id 				: 11840
		}
	]
};

RNG = {
	"name"		:	"Renegades",
	"logo" 		:	"http://cdn.eleague.com/img/csgo/premier/renegades/renegades_120x120.png",
	"twitter"	:   "@Renegades",
	"photoName"	: 	"renegades", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "64e057b0-f467-4687-855d-61862dde8d2e",
			"gamerTag"		: "Nifty",
			"faceIt"		: "Nifty", 
			'hltv'			: 9069,
			"name"			: "Noah Francis",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/renegades/nifty_177x222.jpg',
			id 				: 124210
		},
		{
			"faceitID"		: "9c9b2f52-cffe-4858-a710-c903c805aa22",
			"gamerTag"		: "NAF",
			"faceIt"		: "NAF",
			'hltv'			: 8520,
			"name"			: "Keith Markovic",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/renegades/naf_177x222.jpg',
			id 				: 113492
		},
		{
			"faceitID"		: "9a8ea9d5-61c7-4b38-b64f-35f4945048fa",
			"gamerTag"		: "jks",
			"faceIt"		: "jks1",
			'hltv'			: 4679,
			"name"			: "Justin Savage",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/renegades/jks_177x222.jpg',
			id 				: 637436
		},
		{
			"faceitID"		: "fa987b0d-d33b-4ac4-83ec-260d11c55789",
			"gamerTag"		: "AZR",
			"faceIt"		: "VOXAZR",
			'hltv'			: 8082,
			"name"			: "Aaron Ward",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/renegades/azr_177x222.jpg',
			id 				: 637447
		},
		{
			"faceitID"		: "ba37f98c-c73a-4097-8b5e-9af3a4ac8dbb",
			"gamerTag"		: "USTILO",
			"faceIt"		: "USTILO",
			'hltv'			: 8771,
			"name"			: "Karlo Pivac",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/renegades/ustilo_177x222.jpg',
			id 				: 639748
		}
		
	]
};

SKG = {
	"name"			:	"SK Gaming",
	"darkLogo" 		:	"http://cdn.eleague.com/img/csgo/premier/sk/sk_120x120.png",
	"lightLogo"		:   "http://i.cdn.turner.com/nba/nba/.element/img/2.0/sect/pulse/eleague/home_logo_sk_@2x.png",
	"logo"			:   "http://cdn.eleague.com/img/csgo/premier/sk/sk_120x120.png",
	"twitter"		:   "@SKGaming", 
	"photoName"		: 	"sk",
	"matches"		: 	[],
	"lineup" 		: 	[
		{
			"faceitID"		: "bee6d48a-7048-49cf-8ee2-b10c2ea104ca",
			id 				: 235159,
			"gamerTag"		: "Fallen",
			altTag 			: 'FalleN',
			"faceIt"		: "LGFALLEN",
			'hltv'			: 2023,
			"name"			: "Gabriel Toledo",
			"flag"			: "BR",
			"playerLink"	: 'FalleNcs',
			"socialLink"	: '@FalleNCS',
			"videoLink"		: 'gafallen',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/sk/fallen_177x222.jpg'
		},
		{
			"faceitID"		: "648af157-90c5-4e69-b0c3-31ae037f4bae",
			id 				: 382509,
			"gamerTag"		: "coldzera",
			"faceIt"		: "coldzin",
			'hltv'			: 9216,
			"name"			: "Marcelo David",
			"flag"			: "BR",
			"playerLink"	: 'rmkcoldzera',
			"socialLink"	: '@coldzera',
			"videoLink"		: 'coldzin',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/sk/coldzera_177x222.jpg'
		},
		{
			"faceitID"		: '277495a0-f47d-4a56-9e47-ad934f0946c5',
			id 				: 235229,
			"gamerTag"		: "fer",
			"faceIt"		: "fermonster",
			'hltv'			: 8564,
			"name"			: "Fernando Alvarenga",
			"flag"			: "BR",
			"playerLink"	: 'fpsfer',
			"socialLink"	: '@SK_fer',
			"videoLink"		: 'fpsfer',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/sk/fer_177x222.jpg'
		},
		{
			"faceitID"		: "34f2fbd3-f206-46c5-bb93-30a865950d59",
			id 				: 381527,
			"gamerTag"		: "TACO",
			"faceIt"		: "TACOCS",
			'hltv'			: 9217,
			"name"			: "Epitacio Filho",
			"flag"			: "BR",
			"playerLink"	: 'tacocs',
			"socialLink"	: '@TACOCS',
			"videoLink"		: 'tacocs',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/sk/taco_177x222.jpg'
		},
		{
			"gamerTag"		: "felps",
			id 				: 454494,
			"faceIt"		: "felps",
			'hltv'			: 9219,
			"name"			: "João Vasconcellos",
			"flag"			: "BR",
			"playerLink"	: 'felpscs',
			"socialLink"	: '@Tempofelps',
			"videoLink"		: 'fpsfelps',
			"teamPhotoUrl"	: 'http://cdn.eleague.com/img/csgo/premier/sk/felps_177x222.jpg'
		}
	]
};

Sprout = {
	"lineup"	: [
		{
			"gamerTag"		: "zehN",
			"faceIt"		: "zehN",
			"name"			: "Jesse Linjala",
			"flag"			: "AX",
			id 				: 1378,
		},
		{
			"gamerTag"		: "innocent",
			"faceIt"		: "innocent",
			"name"			: "Paweł Mocek",
			"flag"			: "PL",
			id 				: 3669
		},
		{
			"gamerTag"		: "kRYSTAL",
			"faceIt"		: "kRYSTAL",
			"name"			: "Kevin Amend",
			"flag"			: "DE",
			id 				: 7218
		},
		{
			"gamerTag"		: "Spiidi",
			"faceIt"		: "Spiidi",
			"name"			: "Timo Richter",
			"flag"			: "DE",
			id 				: 7499
		},
		{
			"gamerTag"		: "denis",
			"faceIt"		: "denis",
			"name"			: "Denis Howell",
			"flag"			: "DE",
			id 				: 7511
		}
	]
};

SS = {
	"lineup"	: [
		{
			"gamerTag"		: "ngiN",
			"faceIt"		: "ngiN",
			"name"			: "Leonid Vishniakov",
			"flag"			: "TR",
			id 				: 7716,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/ngin_1.png'
		},
		{
			"gamerTag"		: "MAJ3R",
			"faceIt"		: "MAJ3R",
			"name"			: "Engin Kupeli",
			"flag"			: "FR",
			id 				: 150,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/maj3r_0.png'
		},
		{
			"gamerTag"		: "XANTARES",
			"faceIt"		: "XANTARES",
			"name"			: "Can Dortkardes",
			"flag"			: "TR",
			id 				: 7938,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/xantares_0.png'
		},
		{
			"gamerTag"		: "Calyx",
			"faceIt"		: "Calyx",
			"name"			: "Bugra Arkin",
			"flag"			: "TR",
			id 				: 8575,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/calyx_0.png'
		},
		{
			"gamerTag"		: "paz",
			"faceIt"		: "paz",
			"name"			: "Ahmet Karahoca",
			"flag"			: "TR",
			id 				: 9353,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/paz_0.png'
		}
	]
};

VS = {
	"lineup"	: [
		{
			"gamerTag"		: "chopper",
			"faceIt"		: "chopper",
			"name"			: "Engin Kor",
			"flag"			: "RU",
			id 				: 9857
		},
		{
			"gamerTag"		: "mir",
			"faceIt"		: "mir",
			"name"			: "Nikolai Bitiukov",
			"flag"			: "RU",
			id 				: 8789,
			photoUrl		: 'http://s3.amazonaws.com/eleague-prod/player/mir_0.png'
		},
		{
			"gamerTag"		: "jR",
			"faceIt"		: "jR",
			"name"			: "Dmytro Chervak",
			"flag"			: "UA",
			id 				: 8786
		},
		{
			"gamerTag"		: "keshandr",
			"faceIt"		: "keshandr",
			"name"			: "Sergei Lashkov",
			"flag"			: "RU",
			id 				: 8788
		},
		{
			"gamerTag"		: "hutji",
			"faceIt"		: "hutji",
			"name"			: "Pavel Lashkov",
			"flag"			: "RU",
			id 				: 8790
		}
	]
};

VP = {
	"name"		: "Virtus Pro",
	"logo"		: "http://cdn.eleague.com/img/csgo/premier/virtuspro/virtuspro_120x120.png",
	"twitter"	: "@TeamVirtuspro",
	"photoName"	: "virtuspro",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "d683100c-1452-47cc-af4a-b66efea476b0",
			"gamerTag"		: "NEO",
			"altTag"		: "neo",
			"faceIt"		: "neo-no",
			'hltv'			: 165,
			"name"			: "Filip Kubski",
			"flag"			: "PL",
			"playerLink"	: 'filipneokubski',
			"socialLink"	: "@neo_fkubski",
			id 				: 214267,
			"videoLink"		: 'neog5'
		},
		{
			"faceitID"		: "5ad1783f-f978-4501-8708-b9a04ba47ee9",
			"gamerTag"		: "snax",
			"faceIt"		: "SNAX",
			"altTag"		: "Snax",
			'hltv'			: 2553,
			id 				: 214285,
			"name"			: "Janusz Pogorzelski",
			"flag"			: "PL",
			"playerLink"	: 'snaxfz',
			"socialLink"	: "@cios_snax",
			"videoLink"		: 'snax'
		},
		{
			"faceitID"		: "24180323-d946-4bb7-a334-be3e96fcac05",
			"gamerTag"		: "pashaBiceps",
			"faceIt"		: "PASHA",
			'hltv'			: 317,
			"name"			: "Jarosław Jarząbkowski",
			"flag"			: "PL",
			"playerLink"	: 'G5.pasha',
			"socialLink"	: "@paszaBiceps",
			id 				: 214253,
			"videoLink"		: 'pashabiceps'
		},
		{
			"faceitID"		: "e90de29a-db00-4e03-8044-04ccf54b4b64",
			"gamerTag"		: "byali",
			"faceIt"		: "bialy",
			'hltv'			: 5386,
			"name"			: "Paweł Bieliński",
			"flag"			: "PL",
			id 				: 214284,
			"playerLink"	: 'officialbyali',
			"socialLink"	: "@byalics",
			"videoLink"		: 'byalli'
		},
		{
			"faceitID"		: "425a97f6-2a9b-426d-a81e-0cd63ba2f343",
			"gamerTag"		: "TaZ",
			"faceIt"		: "TaZ",
			'hltv'			: 161,
			"name"			: "Wiktor Wojtas",
			"flag"			: "PL",
			id 				: 214281,
			"playerLink"	: 'g5taz',
			"socialLink"	: "@g5taz",
			"videoLink"		: 'g5taz'
		} 
	]
};

teams = {
	'1333129': Astralis,
	'astralis': Astralis,
	'Astralis': Astralis, //for top performers
	'1333127': Cloud9,
	'cloud9': Cloud9,
	'Cloud9': Cloud9, //for top performers
	'1325608': EnVyUs,
	'envyus': EnVyUs,
	'EnVyUs': EnVyUs, //for top performers
	'1333119': FazeClan,
	'faze': FazeClan,
	'FaZe': FazeClan,
	'FaZe Clan': FazeClan,
	'1333124': Fnatic,
	'fnatic': Fnatic,
	'1333121': G2,
	'g2': G2,
	'G2': G2,
	'G2 Esports': G2,
	'1325165': Heroic,
	'heroic': Heroic,
	'Heroic': Heroic, //for top performers
	'492139': Immortals,
	'immortals': Immortals,
	'7474': Liquid,
	'liquid': Liquid,
	'1333123': Mousesports,
	'mousesports': Mousesports,
	'1333120': Navi,
	'navi': Navi,
	'Natus Vincere': Navi,
	'1333126': NiP,
	'NiP': NiP, //for top performers
	'nip': NiP,
	'1333122': North,
	'north': North,
	'North': North,
	'1327143': RNG,
	'renegades': RNG,
	'Renegades': RNG,
	'1333128': SKG,
	'skgaming': SKG,
	'SK': SKG,
	'1333125': VP,
	'virtuspro': VP,
	'Virtus.pro': VP,
	'Liquid': Liquid,
	'Misfits': Misfits,
	'Vega Squadron': VS,
	'AVANGAR': Avangar,
	'Space Soldiers': SS,
	'Flash': Flash,
	'Quantum Bellator Fire': QBF,
	'Sprout': Sprout,
	'Gambit': Gambit,
	'BIG': BIG
};