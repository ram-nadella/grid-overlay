load_grid = function() {
    var overlay_js = document.createElement('script');
    overlay_js.setAttribute("type","text/javascript");
    overlay_js.setAttribute("src", "http://ram-nadella.github.com/grid-overlay/overlay.js");
    document.getElementsByTagName("head")[0].appendChild(overlay_js);
};
load_grid();