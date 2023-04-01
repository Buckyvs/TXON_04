let tabs = document.getElementsByClassName("tabs");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tabs){
     tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
     tabcontents.classList.remove("active-tab")
    }}
    