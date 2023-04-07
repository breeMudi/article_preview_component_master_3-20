let profileBlock = document.querySelector(".profileblock")
let activeprofileBlock = document.querySelector(".activeprofileblock")
activeprofileBlock.style.display = 'none'
let wrapperJs = document.querySelector(".wrapper")


// shareBtn.addEventListener(onclick, (e) => {
//     profileBlock.display = none;
// })



function toggleDisplay() {
    // var x = document.getElementById("myDIV");
    // let shareBtn = document.querySelector(".share")
    
    if(window.innerWidth < 413){
        if (activeprofileBlock.style.display === "none") {
            wrapperJs.style.backgroundColor = "#48556a";
            profileBlock.style.display = "none";
            activeprofileBlock.style.display = "inline-flex";
        } else {
            activeprofileBlock.style.display = "none";
            profileBlock.style.display = "inline-flex";
            wrapperJs.style.backgroundColor = 'white'
        }}

    else {
        if (activeprofileBlock.style.display === "none") {
            activeprofileBlock.style.display = "inline-flex";
        } else {
            activeprofileBlock.style.display = "none";
        }}
    }

    // background-color:#48556a;
