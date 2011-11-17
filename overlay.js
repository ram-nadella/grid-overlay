/**
    Overlay a grid on the current web page
*/

var overlay_container = document.createElement("div");
    overlay_container.setAttribute("id", "both-grid-overlay");
    
document.getElementsByTagName("body")[0].appendChild(overlay_container);

var grid_off_link = document.createElement("a");
    grid_off_link.setAttribute("href", "javascript:void(0)");
    grid_off_link.setAttribute("onclick", "javascript:document.getElementById('both-grid-overlay').style.display='none';");
    grid_off_link.innerHTML = "Turn Off Grid";

document.getElementById("both-grid-overlay").appendChild(grid_off_link);
                
var overlay_css = document.createElement("link");
    overlay_css.setAttribute("rel", "stylesheet");
    overlay_css.setAttribute("type", "text/css");
    overlay_css.setAttribute("href", "http://ram-nadella.github.com/grid-overlay/style.css");
    
document.getElementsByTagName("head")[0].appendChild(overlay_css);
    
