document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector("#carousel_3");
    const prevButton = document.querySelector("#prev_3");
    const nextButton = document.querySelector("#next_3");
    const slideWidth = carousel.querySelector("#slide_3").offsetWidth;
    let currentSlide = 0;

    function goToSlide(slideIndex) {
        if (slideIndex < 0) {
            slideIndex = 0;
        } else if (slideIndex > carousel.childElementCount - 4) {
            slideIndex = carousel.childElementCount - 4;
        }
        currentSlide = slideIndex;
        const translateX = -slideIndex * slideWidth;
        carousel.style.transform = `translateX(${translateX}px)`;
    }

    prevButton.addEventListener("click", () => {
        goToSlide(currentSlide - 1);
    });

    nextButton.addEventListener("click", () => {
        goToSlide(currentSlide + 1);
    });
});





// document.addEventListener("DOMContentLoaded", function () {
//     // First Carousel
//     const carousel1 = document.querySelector("#carousel_1");
//     const prevButton1 = carousel1.querySelector(".prev");
//     const nextButton1 = carousel1.querySelector(".next");
//     const slideWidth1 = carousel1.querySelector(".slide").offsetWidth;
//     let currentSlide1 = 0;

//     function goToSlide1(slideIndex) {
//         if (slideIndex < 0) {
//             slideIndex = 0;
//         } else if (slideIndex > carousel1.childElementCount - 4) {
//             slideIndex = carousel1.childElementCount - 4;
//         }
//         currentSlide1 = slideIndex;
//         const translateX1 = -slideIndex * slideWidth1;
//         carousel1.style.transform = `translateX(${translateX1}px)`;
//     }

//     prevButton1.addEventListener("click", () => {
//         goToSlide1(currentSlide1 - 1);
//     });

//     nextButton1.addEventListener("click", () => {
//         goToSlide1(currentSlide1 + 1);
//     });

//     // Second Carousel
//     const carousel2 = document.querySelector("#carousel_2");
//     const prevButton2 = carousel2.querySelector(".prev");
//     const nextButton2 = carousel2.querySelector(".next");
//     const slideWidth2 = carousel2.querySelector(".slide").offsetWidth;
//     let currentSlide2 = 0;

//     function goToSlide2(slideIndex) {
//         if (slideIndex < 0) {
//             slideIndex = 0;
//         } else if (slideIndex > carousel2.childElementCount - 4) {
//             slideIndex = carousel2.childElementCount - 4;
//         }
//         currentSlide2 = slideIndex;
//         const translateX2 = -slideIndex * slideWidth2;
//         carousel2.style.transform = `translateX(${translateX2}px)`;
//     }

//     prevButton2.addEventListener("click", () => {
//         goToSlide2(currentSlide2 - 1);
//     });

//     nextButton2.addEventListener("click", () => {
//         goToSlide2(currentSlide2 + 1);
//     });
// });
