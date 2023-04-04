const wrapper = document.querySelector(".top-colleges-wrapper");
const wrapper2 = document.querySelector(".top-exams-wrapper");
const items1 = document.querySelectorAll(".top-colleges-item");
const items2 = document.querySelectorAll(".top-exams-item");
const leftButton1 = document.querySelector(".scroll-left");
const rightButton1 = document.querySelector(".scroll-right");
const leftButton2 = document.querySelector(".scroll-left2");
const rightButton2 = document.querySelector(".scroll-right2");

const itemWidth = items1[0].offsetWidth;
const wrapperWidth = itemWidth * items1.length;

const itemWidth2 = items2[0].offsetWidth;
const wrapperWidth2 = itemWidth2 * items2.length;
let currentPosition = 0;
let currentPosition2 = 0;

wrapper.style.width = `${wrapperWidth}px`;
wrapper2.style.width = `${wrapperWidth2}px`;

leftButton1.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += itemWidth * 3 + 75;
    wrapper.style.transform = `translateX(${currentPosition}px)`;
  }
});

rightButton1.addEventListener("click", () => {
  if (currentPosition > -wrapperWidth + itemWidth * 3) {
    currentPosition -= itemWidth * 3 + 75;
    wrapper.style.transform = `translateX(${currentPosition}px)`;
  }
});

leftButton2.addEventListener("click", () => {
  if (currentPosition2 < 0) {
    currentPosition2 += itemWidth2 * 3 + 75;
    wrapper2.style.transform = `translateX(${currentPosition2}px)`;
  }
});

rightButton2.addEventListener("click", () => {
  if (currentPosition2 > -wrapperWidth2 + itemWidth2 * 3) {
    currentPosition2 -= itemWidth2 * 3 + 75;
    wrapper2.style.transform = `translateX(${currentPosition2}px)`;
  }
});
