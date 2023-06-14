const lnbMenu1 = document.querySelector('.lnb_menu1')
const lnbMenu2 = document.querySelector('.lnb_menu2')
const lnbMenu3 = document.querySelector('.lnb_menu3')
const lnbMenu4 = document.querySelector('.lnb_menu4')


const blurfilter = document.querySelector('.blur_filter')


const lnbWomen = document.querySelector('.lnb .lnb_list .women')
const lnbWomenMenu = document.querySelector('.lnb_menu_women')

const lnbMan = document.querySelector('.lnb .lnb_list .man')
const lnbManMenu = document.querySelector('.lnb_menu_man')

const lnbKids = document.querySelector('.lnb .lnb_list .kids')
const lnbKidsMenu = document.querySelector('.lnb_menu_kids')

const lnbBrand = document.querySelector('.lnb .lnb_list .brand')
const lnbBrandMenu = document.querySelector('.lnb_menu_Brand')

const lnbMenuWm = document.querySelector('.lnb_menu1 .man')
const lnbMenuWk = document.querySelector('.lnb_menu1 .kids')
const lnbMenuWb = document.querySelector('.lnb_menu1 .brand')

const lnbMenuMw = document.querySelector('.lnb_menu2 .women')
const lnbMenuMk = document.querySelector('.lnb_menu2 .kids')
const lnbMenuMb = document.querySelector('.lnb_menu2 .brand')


const lnbMenuKw = document.querySelector('.lnb_menu3 .women')
const lnbMenuKm = document.querySelector('.lnb_menu3 .man')
const lnbMenuKb = document.querySelector('.lnb_menu3 .brand')

const lnbMenuBw = document.querySelector('.lnb_menu4 .women')
const lnbMenuBm = document.querySelector('.lnb_menu4 .man')
const lnbMenuBk = document.querySelector('.lnb_menu4 .kids')


lnbWomen.addEventListener('mouseover', () => {
  lnbMenu1.style.display = 'block';
  blurfilter.style.display = 'block';
})

lnbWomen.addEventListener('mouseout', () => {
  lnbMenu1.style.display = 'none';
  blurfilter.style.display = 'none';
})

lnbMan.addEventListener('mouseover', () => {
  lnbMenu2.style.display = 'block';
  blurfilter.style.display = 'block';
});

lnbMan.addEventListener('mouseout', () => {
  lnbMenu2.style.display = 'none';
  blurfilter.style.display = 'none';
});

lnbKids.addEventListener('mouseover', () => {
  lnbMenu3.style.display = 'block';
  blurfilter.style.display = 'block';
});

lnbKids.addEventListener('mouseout', () => {
  lnbMenu3.style.display = 'none';
  blurfilter.style.display = 'none';
});

lnbBrand.addEventListener('mouseover', () => {
  lnbMenu4.style.display = 'block';
  blurfilter.style.display = 'block';
});

lnbBrand.addEventListener('mouseout', () => {
  lnbMenu4.style.display = 'none';
  blurfilter.style.display = 'none';
});


lnbMenu1.addEventListener('mouseover', () => {
  lnbMenu1.style.display = 'block';
  blurfilter.style.display = 'block';
});

lnbMenu1.addEventListener('mouseout', () => {
  lnbMenu1.style.display = 'none';
  blurfilter.style.display = 'none';
});


lnbMenu2.addEventListener('mouseover', () => {
  lnbMenu2.style.display = 'block';
  blurfilter.style.display = 'block';
});

lnbMenu2.addEventListener('mouseout', () => {
  lnbMenu2.style.display = 'none';
  blurfilter.style.display = 'none';
});


lnbMenu3.addEventListener('mouseover', () => {
  lnbMenu3.style.display = 'block';
  blurfilter.style.display = 'block';
});

lnbMenu3.addEventListener('mouseout', () => {
  lnbMenu3.style.display = 'none';
  blurfilter.style.display = 'none';
});


lnbMenu4.addEventListener('mouseover', () => {
  lnbMenu4.style.display = 'block';
  blurfilter.style.display = 'block';
});

lnbMenu4.addEventListener('mouseout', () => {
  lnbMenu4.style.display = 'none';
  blurfilter.style.display = 'none';
});


lnbMenuWm.addEventListener('mouseover', () => {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});

lnbMenuWk.addEventListener('mouseover', () => {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});

lnbMenuWb.addEventListener('mouseover', () => {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});




lnbMenuMw.addEventListener('mouseover', () => {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});


lnbMenuMk.addEventListener('mouseover', () => {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});

lnbMenuMb.addEventListener('mouseover', () => {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});



lnbMenuKw.addEventListener('mouseover', () => {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});

lnbMenuKm.addEventListener('mouseover', () => {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});

lnbMenuKb.addEventListener('mouseover', () => {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});


lnbMenuBw.addEventListener('mouseover', () => {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});

lnbMenuBm.addEventListener('mouseover', () => {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});

lnbMenuBk.addEventListener('mouseover', () => {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});


let header = document.querySelector(".header");
let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("fixed");
    header.style.top = "0px";
    if (currentScrollPos == 0) {
      header.style.backgroundColor = 'transparent'
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.466)'
    }
  } else {
    /* header.classList.remove("fixed"); */
    header.style.top = "-100px";
  }

  prevScrollpos = currentScrollPos;
}


/* let number = 1;

const incrementButton = document.querySelector(".plus_btn");
const decrementButton = document.querySelector(".minus_btn");
const display = document.querySelector(".number");

incrementButton.addEventListener("click", () => {
  if (number < 9) {
    number++;
    display.textContent = number;
  }
});

decrementButton.addEventListener("click", () => {
  if (number > 1) {
    number--;
    display.textContent = number;
  }
}); */


/* let number = 1;
let price = 49000;

const incrementButton = document.querySelector(".plus_btn");
const decrementButton = document.querySelector(".minus_btn");
const display = document.querySelector(".number");
const totalDisplay = document.querySelector(".gold");

incrementButton.addEventListener("click", () => {
  if (number < 9) {
    number++;
    display.textContent = number;
    totalDisplay.textContent = `${number * price}원`;
  }
});

decrementButton.addEventListener("click", () => {
  if (number > 1) {
    number--;
    display.textContent = number;
    totalDisplay.textContent = `${number * price}원`;
  }
}); */

let number = 1;
let price = 49000;

const incrementButton = document.querySelector(".plus_btn");
const decrementButton = document.querySelector(".minus_btn");
const display = document.querySelector(".number");
const totalDisplay = document.querySelector(".gold");

incrementButton.addEventListener("click", () => {
  if (number < 9) {
    number++;
    display.textContent = number;
    totalDisplay.textContent = `${formatPrice(number * price)}원`;
  }
});

decrementButton.addEventListener("click", () => {
  if (number > 1) {
    number--;
    display.textContent = number;
    totalDisplay.textContent = `${formatPrice(number * price)}원`;
  }
});

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* const choice = document.querySelectorAll('.choice')
const mainImg = document.querySelector('.main_img') */

/* choice.addEventListener('click' , () => {

  for(let i = 0; i < choice.length; i++) {
   
    
    
  }
}) */

/* for(let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click' , () => {
    mainImg.src = choice[i].src;
  })
} */

/* let timer;

for(let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click' , () => {
    mainImg.src = choice[i].src;
    clearTimeout(timer);
    timer = setTimeout(() => {
      mainImg.src = '../img/03. 디테일/인터내셔널 그래픽 반팔티1.jpg';
    }, 4000);
  })
}



const images = [
  '../img/03. 디테일/인터내셔널 그래픽 반팔티1.jpg',
  '../img/03. 디테일/모델컷1.jpg',
  '../img/03. 디테일/모델컷2.jpg',
  '../img/03. 디테일/모델컷3.jpg',
  '../img/03. 디테일/모델컷4.jpg'
];
let index = 0;

function changeImage() {
  mainImg.src = images[index];
  index = (index + 1) % images.length;
}

setInterval(changeImage, 1000); */


const mainImg = document.querySelector('.main_img');
const images = [
  '../img/03. 디테일/모델컷1.jpg',
  '../img/03. 디테일/모델컷2.jpg',
  '../img/03. 디테일/모델컷3.jpg',
  '../img/03. 디테일/인터내셔널 그래픽 반팔티1.jpg',
  '../img/03. 디테일/모델컷4.jpg'
];
let index = 0;
let timer;
let isChanging = true;

function changeImage() {
  if (!isChanging) return;
  mainImg.src = images[index];
  index = (index + 1) % images.length;
}

timer = setInterval(changeImage, 2000);

const choice = document.querySelectorAll('.choice');

for(let i = 0; i < choice.length; i++) {
  choice[i].addEventListener('click' , () => {
    mainImg.src = choice[i].src;
    isChanging = false;
    clearInterval(timer);
    timer = setTimeout(() => {
      mainImg.src = images[0];
      isChanging = true;
      timer = setInterval(changeImage, 2000);
    }, 4000);
  })
}


const tabList = document.querySelectorAll('.tab_menu .list li');


for (let i = 0; i < tabList.length; i++) {
  let btn = tabList[i].querySelector('.btn')
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  })
}

const tabList2 = document.querySelectorAll('.tab_menu2 .list2 li');


for (let i = 0; i < tabList2.length; i++) {
  let btn = tabList2[i].querySelector('.btn')
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (let j = 0; j < tabList2.length; j++) {
      tabList2[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  })
}



const asterionBtn = document.querySelector('.asterion_btn')
const asterionList = document.querySelector('.asterion_list')


asterionList.style.display = 'none'

let isListVisible = false

asterionBtn.addEventListener('click', () => {
  if (isListVisible) {
    asterionList.style.display = 'none'
    isListVisible = false
  } else {
    asterionList.style.display = 'block'
    isListVisible = true
  }
})


const asterionListtAll = document.querySelectorAll('.asterion_list p')
const alEx = document.querySelector('.al_ex')

asterionListtAll.forEach(asterionListtAlls => {
  asterionListtAlls.addEventListener('click', () => {
    const icon = asterionListtAlls.querySelector('i.fa-square');
    if (icon) {
      icon.classList.replace('fa-square', 'fa-check-square');
    } else {
      const checkedIcon = asterionListtAlls.querySelector('i.fa-check-square');
      if (checkedIcon) {
        checkedIcon.classList.replace('fa-check-square', 'fa-square');
      }
    }
  });
});

alEx.addEventListener('click', () => {
  const checkedItem = document.querySelector('.fa-check-square');
  if (checkedItem) {
    const text = checkedItem.parentNode.textContent.trim();
    asterionBtn.textContent = text;
    asterionBtn.style.fontSize = '12px';
  } else {
    asterionBtn.textContent = '별점'+'.fa-angle-down';
    asterionBtn.style.fontSize = '';
  }
  asterionList.style.display = 'none';
});