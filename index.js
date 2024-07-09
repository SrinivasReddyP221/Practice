var togglebar = document.querySelector(".hamburger-menu"); 
var openmenu = document.querySelector(".slidericon"); 
var closemenu=document.querySelector(".hamburger-menu__header--cross");
var elementbtn=document.querySelectorAll(".hbele");
var elementcontent=document.querySelectorAll(".hbelementhidden");
var arrow=document.querySelectorAll(".smallarrow");

// ********************* Ham-Burger Menu MOBILE VIEW ************************************************************************
openmenu.addEventListener('click', function() {
togglebar.style.display = 'flex';
});
closemenu.addEventListener('click', function() {
    togglebar.style.display = 'none';
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

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

// *********************************************************************************************