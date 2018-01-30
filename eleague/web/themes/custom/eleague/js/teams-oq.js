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

CLG = {
	"name"		:	"CLG",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/600x600/CLG.png",
	"twitter"	:	"@clgaming",
	"photoName"	: 	"clg", 
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "d5fce6ad-5229-47eb-a4ce-cac6c249be1f",
			"gamerTag"		: "reltuC",
			"faceIt"		: "reltuC",
			"name"			: "Stephen Cutler",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@CLGreltuC",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/clg/reltuc.png'
		},
		{
			"faceitID"		: "9009cc2f-ca06-4931-9c4a-7f1088137a5d",
			"gamerTag"		: "hazed",
			"faceIt"		: "hazed",
			"name"			: "James Cobb",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: "@clghazed",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/clg/hazed.png'
		},
		{
			"faceitID"		: "cee601f6-4800-45ac-a34b-831b9a034fff",
			"gamerTag"		: "koosta",
			"faceIt"		: "CLGKoosta",
			"name"			: "Kenneth Suen",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/clg/koosta.png'
		},
		{
			"faceitID"		: "af2681be-0fdb-4ae0-92cd-9355fa1cac8a",
			"gamerTag"		: "nahtE",
			"faceIt"		: "CLGnahtE",
			"name"			: "Ethan Arnold",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/clg/nahte.png'
		},
		{
			"faceitID"		: "93a15a2d-1b23-4119-8041-1c232b89d3da",
			"gamerTag"		: "Subroza",
			"faceIt"		: "Subroza",
			"name"			: "Yassine Taoufik",
			"flag"			: "CA",
			"playerLink"	: null,
			"socialLink"	: '@ANIXIA_Subroza',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/clg/subrosa.png'
		}
	]
};

Cloud9 = {
	"name"		:	"Cloud 9",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/600x600/cloud9.png",
	"twitter"	:	"@Cloud9",
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
			"videoLink"		: null
		},
		{
			"faceitID"		: "803dbe7e-e9f8-4f0f-8221-c441c26bbb41",
			"gamerTag"		: "Shroud",
			"faceIt"		: "shroud",
			"name"			: "Michael Brenden Grzesiek",
			"flag"			: "ca",
			"playerLink"	: null,
			"socialLink"	: "@C9shroud",
			"videoLink"		: null
		},
		{
			"faceitID"		: "2a37a5c2-e5f7-4804-a88c-fadfa73d4288",
			"gamerTag"		: "Skadoodle",
			"faceIt"		: "skadoodle",
			"name"			: "Tyler Matthew Latham",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@C9_Skadoodle",
			"videoLink"		: null
		},
		{
			"faceitID"		: "2be37d17-f9fb-42e2-8143-bcdb5f1239b2",
			"gamerTag"		: "Stewie2k",
			"faceIt"		: "Stewie2k",
			"name"			: "Jacky Yip",
			"flag"			: "us",
			"playerLink"	: null,
			"socialLink"	: "@C9Stewie",
			"videoLink"		: null
		},
		{
			"faceitID"		: "3ffee30c-23bd-40dc-ad67-c45ba0815cf5",
			"gamerTag"		: "autimatic",
			"faceIt"		: "autimatic",
			"name"			: "Timothy Ta",
			"flag"			: "US",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/c9/autimatic.png'
		}
	]
};

Dignitas = {
	"name"		: "North",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/north.png",
	"twitter"	: "@TeamDignitas",
	"photoName"	: "north",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "72f1249e-aeb5-45ce-913f-d43d98cf03cc",
			"gamerTag"		: "k0nfig",
			"faceIt"		: "k0nfig",
			"name"			: "Kristian Wienecke",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@k0nfigCS",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/k0nfig.png'
		},
		{
			"faceitID"		: "ddfa4144-fae5-48cd-9534-cd444abe4d38",
			"gamerTag"		: "cajunb",
			"faceIt"		: "cajunb",
			"name"			: "René Borg",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@cajunbCS",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/cajunb.png'
		},
		{
			"faceitID"		: "98542324-dd2e-4b51-b651-99c131420080",
			"gamerTag"		: "Magiskb0y",
			"faceIt"		: "MagiskbOY",
			"name"			: "Emil Reif",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/magiskb0y.png'
		},
		{
			"faceitID"		: "24d0aff3-ff3b-4791-bca5-b1b7611e2e9f",
			"gamerTag"		: "RUBINO",
			"faceIt"		: "rubino",
			"name"			: "Ruben Villarroel",
			"flag"			: "NO",
			"playerLink"	: null,
			"socialLink"	: "@rubinoeu",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/rubino.png'
		},
		{
			"faceitID"		: "4f6fb913-1ad2-43af-bb33-507588b1eaed",
			"gamerTag"		: "MSL",
			"faceIt"		: "MSLL",
			"name"			: "Mathias Lauridsen",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@MSLcsgo",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/north/msl.png'
		}
	]
};

EnVyUs = {
	"name"		: "EnVyUs",
	"lightLogo" : "http://cdn.eleague.com/csgo/images/600x600/envyus_w.png", 
	"darkLogo"	: "http://cdn.eleague.com/csgo/images/600x600/envyus.png",
	"twitter"	: "@TeamEnVyUs",
	"photoName"	: 	"envyus",
	"matches"	: [],
	"lineup"	: [
		{
			"faceitID"		: "9269548a-6cd4-46a7-a3b8-9f3816e52e49",
			"gamerTag"		: "kennys",
			"faceIt"		: "kennyS-",
			"name"			: "Kenny Schrub",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@EnVy_kennyS",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/kennys.png'
		},
		{
			"faceitID"		: "7163ad85-3c68-4ba3-b36a-9f723345fd69",
			"gamerTag"		: "happy",
			"faceIt"		: "happy1",
			"name"			: "Vincent Schopenhauer",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@nV_HappyV",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/happy.png'
		},
		{
			"faceitID"		: "cd3d6d2c-d6ff-4c3d-b976-d63827baace9",
			"gamerTag"		: "SIXER",
			"faceIt"		: "SIXERj",
			"name"			: "Christophe Xia",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@sixercsgo",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/sixer.png'
		},
		{
			"faceitID"		: "d670bb72-f778-4fa9-9e9f-f8b42cff3519",
			"gamerTag"		: "NBK",
			"faceIt"		: "NBK",
			"name"			: "Nathan Schmitt",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@nV_NBK",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/nbk.png'
		},
		{
			"faceitID"		: "de21905f-47e9-46c2-bfd2-e56f63795c87",
			"gamerTag"		: "apEX",
			"faceIt"		: "apEX",
			"name"			: "Dan Madesclaire",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@ENVYUS_apEX",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/envyus/apex.png'
		}
	]
};

FazeClan = {
	"name"		: "Faze",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/faze.png",
	"twitter"	: "@FaZeClan",
	"photoName"	: 	"faze", 
	"matches"	: [],
	"lineup"	: [
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
			"faceitID"		: "1fea6910-19b9-43d3-aac2-c612b1d95b08",
			"gamerTag"		: "allu",
			"faceIt"		: "allub",
			"name"			: "Aleksi Jalli",
			"flag"			: "fi",
			"socialLink"	: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/faze/allu.png'
		},
		{
			"faceitID"		: "68179dc7-9381-4264-a26c-52693400f1eb",
			"gamerTag"		: "karrigan",
			"faceIt"		: "karrigan",
			"name"			: "Finn Andersen",
			"flag"			: "DK",
			"playerLink"	: null,
			"socialLink"	: "@karriganCSGO",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/faze/karrigan.png'
		}	
	]
};

G2 = {
	"name"		:	"G2 Esports",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/G2_Esports_logo.png",
	"twitter"	:	"@G2esports",
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
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/g2/scream.png'
		},
		{
			"faceitID"		: "8d9e4df9-96b5-448d-82d8-c4a46ad2f368",
			"gamerTag"		: "bodyy",
			"faceIt"		: "bodyy",
			"name"			: "Alexandre Pianaro",
			"flag"			: "FR",
			"playerLink"	: null,
			"socialLink"	: "@g2bodyy",
			"videoLink"		: null
		},
		{
			"faceitID"		: "71920781-21ed-4604-ba03-911b1dfb11a0",
			"gamerTag"		: "RpK",
			"faceIt"		: "RpKK",
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
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/g2/shox.png'
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
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/znajder.png'
		},
		{
			"faceitID"		: "5c90ca92-7ea3-4b0c-b2cb-25edb5c6b77d",
			"gamerTag"		: "flusha",
			"faceIt"		: "flusha",
			"name"			: "Carl Robin Matthias Roennquist",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: '@fnaticFlusha',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/flusha.png'
		},
		{
			"faceitID"		: "ff5182b8-4bd4-4109-b79a-3ace68698e88",
			"gamerTag"		: "pronax",
			"faceIt"		: "pronax",
			"name"			: "Erik Markus Haakan Wallsten",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/pronax.png'
		},
		{
			"faceitID"		: "6b03cf9d-93c7-45e3-9cf3-6a2d5456cdd2",
			"gamerTag"		: "Lekr0",
			"faceIt"		: "Lekr0",
			"name"			: "Jonas Olofsson",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/lekr0.png'
		},
		{
			"faceitID"		: "4946fdbd-00e9-4408-91dd-6f3c87c39b23",
			"gamerTag"		: "jw",
			"faceIt"		: "JW",
			"name"			: "Bengt Jesper Wecksell",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/godsent/jw.png'
		}
	]
}

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
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/styko.png'
		},
		{
			"faceitID"		: "5c88f249-d2b6-4f38-ad9c-ea6a1959d17b",
			"gamerTag"		: "Zero",
			"faceIt"		: "PatrikZero",
			"name"			: "Patrik Zudel",
			"flag"			: "SK",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/zero.png'
		},
		{
			"faceitID"		: "040f3938-93f9-4ecf-9896-417992eeb1de",
			"gamerTag"		: "DeadFox",
			"faceIt"		: "DeadFox15",
			"name"			: "Bence Borocz",
			"flag"			: "HU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/deadfox.png'
		},
		{
			"faceitID"		: "c3faf504-e2b7-4713-9a19-fdf351d712fb",
			"gamerTag"		: "bondik",
			"faceIt"		: "bondik",
			"name"			: "Vladyslav Nechyporchuk",
			"flag"			: "UA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/bondik.png'
		},
		{
			"faceitID"		: "f285526b-3643-410b-add3-41b067a3029b",
			"gamerTag"		: "ANGE1",
			"faceIt"		: "kkarasiow",
			"name"			: "Kyrylo Karasov",
			"flag"			: "UA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/hellraisers/ange1.png'
		}
	]
};

Immortals = {
	"name"		: "Immortals",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/Immortals-Teal-Cutout.png",
	"lineup"	: [
		{
			"faceitID"		: "874d0454-3013-467c-ba35-eae11ec1163c",
			"gamerTag"		: "steel",
			"faceIt"		: "Ronaldinho10",
			"name"			: "Lucas Lopes",
			"flag"			: "BR",
			"socialLink"	: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/immortals/steel.png'
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
			"gamerTag"		: "lucas",
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

Mousesports = {
	"name"		: "Mousesports",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/mousesports.png",
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
			"playerLink"	: null,
			"socialLink"	: "@chrisJcsgo",
			"videoLink"		: null
		},
		{
			"faceitID"		: "32772d2f-fb63-4a84-ac06-4c2e20f49082",
			"gamerTag"		: "denis",
			"faceIt"		: "denis-",
			"name"			: "Denis Howell",
			"flag"			: "DE",
			"playerLink"	: null,
			"socialLink"	: "@mouzdenis",
			"videoLink"		: null
		},
		{
			"faceitID"		: "6edb1ba0-7c0d-4480-a68f-45f476a21626",
			"gamerTag"		: "loWel",
			"faceIt"		: "loWel",
			"name"			: "Christian Garcia Antoran",
			"flag"			: "ES",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/mousesports/lowel.png'
		},
		{
			"faceitID"		: "19606e0c-137b-4885-a904-744fa12d25f6",
			"gamerTag"		: "NiKo",
			"faceIt"		: "NiK0",
			"name"			: "Nikola Kovač",
			"flag"			: "BA",
			"playerLink"	: null,
			"socialLink"	: "@mouzNiKo",
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/mousesports/niko.png'
		},
		{
			"faceitID"		: "a5be61cf-6cb3-4f71-baea-c69b5ceb6228",
			"gamerTag"		: "Spiidi",
			"faceIt"		: "Spiidi",
			"name"			: "Timo Richter",
			"flag"			: "DE",
			"playerLink"	: null,
			"socialLink"	: "@SpiidiCS",
			"videoLink"		: null
		} 
	]
};

NiP = {
	"name"		:	"NiP",
	"twitter"	:	"@NiPGaming",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/nip.png",
	"photoName"	: 	"nip",
	"matches"	: 	[],
	"lineup" 	: 	[
		{
			"faceitID"		: "edd17a40-20dc-4370-b824-ddea44d9dfe3",
			"gamerTag"		: "GeT_RiGhT",
			"faceIt"		: "GeT_RiGhT",
			"name"			: "Christopher Alesund",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@GeT_RiGhTcs",
			"videoLink"		: null
		},
		{
			"faceitID"		: "8de88a46-bf0d-445f-8439-c965ea927fc0",
			"gamerTag"		: "friberg",
			"faceIt"		: "friberg",
			"name"			: "Adam Friberg",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@fribergCS",
			"videoLink"		: null
		},
		{
			"faceitID"		: "93fdfbd9-b47d-4b25-a200-1b44931e86e0",
			"gamerTag"		: "Xizt",
			"faceIt"		: "Xizt",
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
			"name"			: "Patrik Lindberg",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: "@f0restCS",
			"videoLink"		: null
		},
		{
			"faceitID"		: "76a8797a-0549-4e95-9354-92931a484f6b",
			"gamerTag"		: "pyth",
			"faceIt"		: "pyth",
			"name"			: "Jacob Mourujärvi",
			"flag"			: "SE",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
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
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/tarik.png'
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
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/stanislaw.png'
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
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/optic/rush.png'
		} 
	]
};

RNG = {
	"name"		:	"Renegades",
	"logo" 		:	"http://cdn.eleague.com/csgo/images/Renegades.png",
	"twitter"	:	"@Renegades",
	"photoName"	: 	"renegades", 
	"matches"	: 	[],
	"lineup" 	: 	[
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
			"faceitID"		: "ba37f98c-c73a-4097-8b5e-9af3a4ac8dbb",
			"gamerTag"		: "USTILO",
			"faceIt"		: "USTILO",
			"name"			: "Karlo Pivac",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		},
		{
			"faceitID"		: "64e057b0-f467-4687-855d-61862dde8d2e",
			"gamerTag"		: "Rickeh",
			"faceIt"		: "iMRickeh",
			"name"			: "Ricardo Mulholland",
			"flag"			: "au",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null
		}
	]
};

TS = {
	"name"		: "Team Spirit",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/team-spirit.png",
	"lineup" 	: 	[
		{
			"faceitID"		: "cbf4aea4-daa4-4246-bf1a-f90fca3d96b3",
			"gamerTag"		: "S0tF1k",
			"faceIt"		: "S0tF",
			"name"			: "Dmitrii Forostianko",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/teamspirit/sotf1k.png'
		},
		{
			"faceitID"		: "53bcb68e-bca1-40de-8ec8-b0df14c51d04",
			"gamerTag"		: "kibaken",
			"faceIt"		: "kibaken",
			"name"			: "Anton Kolesnikov",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/teamspirit/kibaken.png'
		},
		{
			"faceitID"		: "71840b86-1a08-438b-bc40-95ce954322c4",
			"gamerTag"		: "DavCost",
			"faceIt"		: "DAVCOST9n",
			"name"			: "Vadim Vasilyev",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/teamspirit/davcost.png'
		},
		{
			"faceitID"		: "f3b18501-fd64-4c28-9129-3659cbd8afd6",
			"gamerTag"		: "Dima",
			"faceIt"		: "Dima",
			"name"			: "Dmitrii Bandurka",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: '@oneshotdima',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/teamspirit/dima.png'
		},
		{
			"faceitID"		: "95b754da-65d7-45b8-b185-106078e8d09e",
			"gamerTag"		: "Certus",
			"faceIt"		: "Certus",
			"name"			: "Nikolay Poluyanov",
			"flag"			: "GB",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/teamspirit/certus.png'
		}	
	]
};

TyLoo = {
	"name"		: "TyLoo",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/tyloo.png",
	"lineup" 	: 	[
		{
			"faceitID"		: "f8baaab2-a32a-4d0f-aa7a-7e8907b19492",
			"gamerTag"		: "fancy",
			"faceIt"		: "fancydAk1nG",
			"name"			: "Yulun Cai",
			"flag"			: "CN",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/tyloo/fancy1.png'
		},
		{
			"faceitID"		: "db694e59-c189-4f09-87da-a7b4fc307fd4",
			"gamerTag"		: "captainMo",
			"faceIt"		: "capt4inMo",
			"name"			: "Ke Liu",
			"flag"			: "CN",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/tyloo/mo.png'
		},
		{
			"faceitID"		: "17fa64e9-637b-46db-9a1c-163b2d1d31bb",
			"gamerTag"		: "somebody",
			"faceIt"		: "SOMEBODYGOD",
			"name"			: "Haowen Xu",
			"flag"			: "TW",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/tyloo/somebody.png'
		},
		{
			"faceitID"		: "9d488bdd-7072-43bd-a554-b8d9a9c6134c",
			"gamerTag"		: "Attacker",
			"faceIt"		: "SNEST",
			"name"			: "Yuanzhang Sheng",
			"flag"			: "CN",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/tyloo/attacker.png'
		},
		{
			"faceitID"		: "8c8a1ae6-1422-4122-a9a7-3a6d978a67a4",
			"gamerTag"		: "DD",
			"faceIt"		: "noobfffk",
			"name"			: "Hui Wu",
			"flag"			: "CN",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/tyloo/dd.png'
		}	
	]
};

VS = {
	"name"		: "Vega Squadron",
	"logo"		: "http://cdn.eleague.com/csgo/images/600x600/vega.png",
	"lineup" 	: 	[
		{
			"faceitID"		: "245c97f2-9950-41cf-8930-0f37e456399f",
			"gamerTag"		: "jR",
			"faceIt"		: "jR",
			"name"			: "Dmytro Chervak",
			"flag"			: "UA",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/vega/jr.png'
		},
		{
			"faceitID"		: "2f946776-5117-4132-bf92-dbc874f13214",
			"gamerTag"		: "mir",
			"faceIt"		: "Mir",
			"name"			: "Nikolai Bitiukov",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: '@KolyaBityukov',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/vega/mir.png'
		},
		{
			"faceitID"		: "aef79440-d49d-414e-9303-9725b8d448d8",
			"gamerTag"		: "chopper",
			"faceIt"		: "Chopperis",
			"name"			: "Leonid Vishnyakov",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/vega/chopper.png'
		},
		{
			"faceitID"		: "a7ccf700-7b8c-491d-938a-2f309f235bed",
			"gamerTag"		: "hutji",
			"faceIt"		: "hutji",
			"name"			: "Pavel Lashkov",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: '@hutjicsgo',
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/vega/hutji.png'
		},
		{
			"faceitID"		: "380317ae-bbaf-4c18-8bd4-efe6a18ea168",
			"gamerTag"		: "keshandr",
			"faceIt"		: "keshandr",
			"name"			: "Sergey Nikishin",
			"flag"			: "RU",
			"playerLink"	: null,
			"socialLink"	: null,
			"videoLink"		: null,
			photoUrl		: 'http://cdn.eleague.com/homepage/players/94x94/vega/keshandr.png'
		}	
	]
};

teams = {
	"CLG" : CLG,
	"Cloud9" : Cloud9,
	"C9" : Cloud9,
	"Cloud 9" : Cloud9,
	"North" : Dignitas,
	"Dignitas" : Dignitas,
	"dignitas" : Dignitas,
	"EnVyUs": EnVyUs,
	"ENVYUS-" : EnVyUs,
	"EnVyUS": EnVyUs,
	"Faze": FazeClan,
	"FaZe": FazeClan,
	"FaZe Clan": FazeClan,
	"G2" : G2,
	"G2 eSports" : G2,
	"G2 Espor" : G2,
	"G2 Esports": G2,
	"GODSENT": Godsent,
	"HellRaisers": HR,
	"Hellraisers": HR,
	"Immortals": Immortals,
	"Mousesports": Mousesports,
	"mousesports": Mousesports,
	"NiP" : NiP,
	"Ninjas in Pyjamas" : NiP,
	"OpT" : OpT,
	"Optic" : OpT,
	"OpTic" : OpT,
	"OpTic Gaming" : OpT,
	"rngcsgo" : RNG,
	"Renegades" : RNG,
	"Team Spirit" : TS,
	"TyLoo" : TyLoo,
	"Vega Squadron" : VS
};