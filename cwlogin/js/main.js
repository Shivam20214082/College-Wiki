const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}
function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.add('focus');

    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});


// Get necessary elements
const scrollWrapper = document.querySelector('.top-colleges-wrapper');
const scrollLeftBtn = document.querySelector('.scroll-left');
const scrollRightBtn = document.querySelector('.scroll-right');

// Calculate scroll amount based on the number of div elements
function calculateScrollAmount() {
  const wrapperWidth = scrollWrapper.offsetWidth;
  const items = scrollWrapper.querySelectorAll('.top-colleges-item');
  let scrollAmount = 0;
  
  items.forEach((item, index) => {
    if (item.offsetLeft + item.offsetWidth > wrapperWidth) {
      scrollAmount = items[index].offsetLeft;
      return;
    }
  });
  
  return scrollAmount;
}

// Scroll left
scrollLeftBtn.addEventListener('click', () => {
  const scrollAmount = calculateScrollAmount();
  scrollWrapper.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
});

// Scroll right
scrollRightBtn.addEventListener('click', () => {
  const scrollAmount = calculateScrollAmount();
  scrollWrapper.scrollTo({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});
