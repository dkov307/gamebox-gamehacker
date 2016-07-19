var keys = {
	'N' : 78,
	'W' : 87
};



var clearKey = function () {
	KeyDown = 0;
};

// var consolelog = function () {
// 	console.log;
// }

var KeyDown = 0;

var setKey = function (KeyCode) {
	KeyDown = KeyCode;
};

var IsKeyDown = function (KeyName) {
	return KeyDown == keys[KeyName];
};

function Mig_label()
{
    var label = document.getElementById('mig_label');
    if ( label.style.color == "red" ) {
        label.style.color = "blue";
    } else {
        label.style.color = "red";
    }
}

var gghhfj = document.getElementById('mig_label');

////////////////////////
var map_q = jQuery(document.getElementById("map"));
var mapserver_q = jQuery(document.getElementById("map_text"));
var serverred_q = jQuery(document.getElementById("red_server"));
var serverredip_q = jQuery(document.getElementById("red_server_ip"));

var terminaltext = jQuery(document.getElementById("terminaltext"));
var quests_text = jQuery(document.getElementById("quests_text"));
var user = jQuery(document.getElementById("user"));
var quest1_jq = jQuery(document.getElementById("quest1"));
var quest2_jq = jQuery(document.getElementById("quest2"));
var hr_jq = jQuery(document.getElementById("hr1")); 

var terminal_jq = jQuery(document.getElementById("terminal_nahui")); 


hr_jq.hide();
quest2_jq.hide();
quest1_jq.hide();
quests_text.hide();
map_q.hide();
mapserver_q.hide();
serverredip_q.hide();
serverred_q.hide();



/////////////////////////////////
setTimeout(function () {
	document.getElementById('mig_label').innerHTML = '';
	document.getElementById('loading').innerHTML = '<a onclick="start();" class="knopka">Начать хакерскую жизнь</a>';
},3000);

var map = document.getElementById("map");


function start () {
	console.log("started");
	map_q.show();
	mapserver_q.show();
	serverred_q.show();
	serverredip_q.show();
	quest2_jq.show();
	quest1_jq.show();		
	quests_text.show();
	document.cookie = "game=started";
	var loading_jq = jQuery(document.getElementById('loading'));
	var img_jq = jQuery(document.getElementById('anonims'));
	loading_jq.remove();
	img_jq.remove();

	var context = map.getContext('2d');
	var x = 0,
		y = 0; 
	var chcolor = function () {
		context.fillStyle = 'green';
	}	
	var chclear = function () {
		context.clearRect(0, 0, 300, 300)
	}
	var chfill = function () {
		context.fillRect(x, y, 400, 514);
		context.fillText("TEST", x, y)
	}
	function drawRect () {
		chcolor();
		chclear();
		chfill();
	}

	function drawRect1 () {
		context.fillStyle = 'red';
		context.clearRect(60, 46, 20, 20)
		context.fillRect(60, 46, 20, 20);
	}


	var gameloop = function () {
		drawRect();
		drawRect1();
	};
	if (IsKeyDown('N')) {
		console.log("ff");
	}
	terminal_jq.innerHTML = "<a>asd<a>";
	gameloop();
	//document.getElementById('quest2').innerHTML = '<a onclick="timeout();">Timeout</a>';
}


function timeout(){
	map_q.hide();
	mapserver_q.hide();
	serverred_q.hide();
	serverredip_q.hide();
	quest2_jq.hide();
	quest1_jq.hide();		
	quests_text.hide();
	document.getElementById('mask2').innerHTML = '<center><img id="anonims" src="gif/mask.gif" height="242" width="220"></center>';
}
setInterval(Mig_label, 200);


//mask2
