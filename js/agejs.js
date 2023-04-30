
// Возраст посетителя менее 18 лет.
watch_site_denyed_url = 'https://google.com';

// Возраст посетителя больше 18 лет.
watch_site_url = 'https://flionic.com/br/';

// Время жизни cookie поситителя.
hours_expire = 48;

template =
'<style type="text/css">' +
'	.modal-op {' +
'   	opacity: .8;' +
'    	position: fixed;' +
'    	top: 0;' +
'    	right: 0;' +
'    	bottom: 0;' +
'    	left: 0;' +
'    	z-index: 999;' +
'    	background-color: #000;' +
'	}' +
'	.ajtable {' +
'		z-index: 9999;' +
'		position: fixed;' +
'		amargin: 10% 25%;' +
'	    background-color: #6e0796e3;' +
'	    color: #ffffff;' +
'	    border-radius: 8px;' +
'	}' +
'	.ajtable td {' +
'		apadding: 35px;' +
'	}' +
'	.headtext {' +
'		font-size: 24px;' +
'		text-align: center;' +
'	}' +
'	#lp { text-align: left; }' +
'	#rp { text-align: right; }' +
'	#lp input {' +
'		background: url(img/btn.png) no-repeat;' +
'	}' +
'	#rp input {' +
'		background: url(img/btn.png) no-repeat;' +
'	}' +
'	.ajtable input {' +
'		border: 0px;' +
'		width: 168px;' +
'		height: 56px;' +
'		color: #ffffff;' +
'		font-size: 24px;' +
'		cursor: pointer;' +
'	}' +
'</style>' +
'<table cellspacing="25" cellpadding="0" class="ajtable">' +
'	<tr><td colspan="2" class="headtext">Вам вже виповнилось 18 років?<BR/><BR/></td></tr>' +
'	<tr>' +
'		<td id="lp"><input type="button" value="Нi" onclick="agejs(\'<18\');" /></td>' +
'		<td id="rp"><input type="button" value="=Tаk" onclick="agejs(\'>18\');" /></td>' +
'	</tr>' +
'</table>';

function agejs(visitor_age) {
	var current_date = new Date();
	 var expire_date = new Date(current_date.getTime()+hours_expire*60*60*1000);
	document.cookie = 'age_visitor='+visitor_age+';expires='+expire_date;
	document.getElementById('agejs_').innerHTML = '';
	if( visitor_age == '<18' ) {
		window.location.href = watch_site_denyed_url;
	} else {
		//window.location.href = watch_site_url;
	}
}

function getCookie() {
	var cookie_array = new Array();
	var cookie_elems = document.cookie.split(/;\s?/);
	 var value_index = 0;
	while( cookie_elems[value_index] ) {
		var elem = cookie_elems[value_index].match(/(.+)=(.*)/);
		cookie_array[elem[1]] = elem[2];
		value_index++;
	}
	return cookie_array;
}

window.onload = function () {
	 var ck = getCookie();
	var val = ck['age_visitor'];
	if( val == undefined ) {
		document.getElementById('agejs_').innerHTML = template;
	} else if ( val == "<18" ) {
		window.location.href = watch_site_denyed_url;
	} else {
		//window.location.href = watch_site_url;
	}
}
