var togglebar = document.querySelector(".hamburger-menu"); 
var openmenu = document.querySelector(".slidericon"); 
var closemenu=document.querySelector(".hamburger-menu__header--cross");
var elementbtn=document.querySelectorAll(".hbele");
var elementcontent=document.querySelectorAll(".hbelementhidden");
var arrow=document.querySelectorAll(".smallarrow");

// ********************* Ham-Burger Menu MOBILE VIEW ************************************************************************
openmenu.addEventListener('click', function() {
togglebar.style.width = '100vw';
togglebar.style.animation= 'open 0.5s ease forwards'
});
closemenu.addEventListener('click', function() {
    togglebar.style.width = '0';
    togglebar.style.animation='close 0.5s ease-out 0.5s forwards'
    });

// *********************** ARROW AND DROPDOWN Functionality **********************************************************************
for(let i=0;i<elementbtn.length;i++){
    elementbtn[i].addEventListener('click', function() {
        if(elementcontent[i].style.display === 'none'){
            elementcontent[i].style.display = 'block'
        }else{
            elementcontent[i].style.display = 'none'
        }
        if(arrow[i].style.transform === 'rotate(30deg)'){
        arrow[i].style.transform = 'rotate(130deg)';
        } 
        else{
            arrow[i].style.transform = 'rotate(30deg)';
        }
        });
}

// ******************************* Carousel MOBILE VIEW **************************************************************
const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

let count = 0;
const totalSlides = 4; // Total number of slides

// Function to update button visibility
function updateButtonVisibility() {
if (count === 0) {
prevButton.style.opacity = "0";
} else {
prevButton.style.opacity = "1";
}

if (count === totalSlides - 1) {
nextButton.style.opacity = "0";
} else {
nextButton.style.opacity = "1";
}
}

// Initial button visibility update
updateButtonVisibility();

nextButton.addEventListener("click", () => {
const slideWidth = slide.clientWidth;
slidesContainer.scrollLeft += slideWidth;
count++;
updateButtonVisibility();
});

prevButton.addEventListener("click", () => {
const slideWidth = slide.clientWidth;
slidesContainer.scrollLeft -= slideWidth;
count--;
updateButtonVisibility();
});
// *********************************************************************************************

// var contentExtend = document.querySelector(".elementpara");

// contentExtend.addEventListener('click' , function(){
//     if (contentExtend.style.webkitLineClamp === "2") {
//         contentExtend.style.webkitLineClamp = "unset";
//         contentExtend.style.height = "auto";
//         } else {
//             contentExtend.style.webkitLineClamp = "2";
//             contentExtend.style.height = "3em";

//         }
// })
