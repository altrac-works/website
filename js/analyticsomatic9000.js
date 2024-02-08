document.addEventListener('DOMContentLoaded', function() {
    console.log("lol hey");

    let src = null;
    const urlParams = new URLSearchParams(window.location.search);
    if ( urlParams.has("fbclid") ) {
        src = "fbclid";
    }
    if ( urlParams.has("utm_source") ) { src = urlParams.get("utm_source"); }
    if ( urlParams.has("source") ) { src = urlParams.get("source"); }
    if ( urlParams.has("src") ) { src = urlParams.get("src"); }

    console.log("source code = ", src);
    if ( src !== null ) {
        console.log("setting src cookie");
        document.cookie = "src=" + src + ";path=/";
    }

}, false);
