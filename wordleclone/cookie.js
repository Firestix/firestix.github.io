function setCookie(cName, cValue, exp) {
	//console.log(cName,cValue);
	var expire = exp || null;
	var exdate=new Date();
	if (expire instanceof Date) {
		exdate = expire;
	} else {
		exdate.setDate(exdate.getDate() + expire);
	}
	var cookieValue=encodeURIComponent(cValue) + ((expire==null) ? "" : ";expires="+exdate.toUTCString()) + ";path=" + window.location.pathname + ";domain=" + window.location.hostname;
	//console.log(encodeURIComponent(cName),cookieValue);
	document.cookie=encodeURIComponent(cName) + "=" + cookieValue;
	return document.cookie;
}
function eatCookie(cName){
	//console.log(cName)
	setCookie(cName,"",-1);
}
function getCookie(cName) {
    var name = encodeURIComponent(cName) + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return decodeURIComponent(c.substring(name.length,c.length));
    }
    return false;
}