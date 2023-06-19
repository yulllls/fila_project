function SwiperMain() {

  let swiper = new Swiper('.swiper_main', {
    // Optional parameters
    /* direction: 'vertical', */
    loop: true,

    // If we need pagination
    pagination: {
      /* el: '.swiper-pagination',  구슬모양 추가*/
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper_main .swiper-button-next',
      prevEl: '.swiper_main .swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper_main .swiper-scrollbar',
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

  });

}

SwiperMain();


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

/* $('.swiper-slide').on('mouseover', function(){
  swiper.autoplay.stop();
});
$('.swiper-slide').on('mouseout', function(){
  swiper.autoplay.start();
}); */

const bullet = ['1. 테니스 라이프 카라원피스', '2. 테니스 라이프 카라원피스', '3. 테니스 카라 원피스', '4. 테니스 라이프 니트 카라티셔츠', '5. 테니스 퍼포먼스 헨리넥 반팔티셔츠', '6. 베이직 리니어 반팔티', '7. Fila tennis 플레이어 반팔 티셔츠', '8. 세리프 스몰로고 반팔티셔츠'];
const shoppingBox = document.querySelector('.shopping_box');
const swiperSlideActive = document.querySelector('.swiper-slide-active');


function RankSwiper() {

  let swiper = new Swiper('.rank_swiper', {
    // Optional parameters
    loop: true,
    /* rewind: true, */

    // Navigation arrows
    navigation: {
      nextEl: '.rank_swiper .swiper-button-next',
      prevEl: '.rank_swiper .swiper-button-prev',
    },


    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,


    pagination: {
      el: ".rank_swiper .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
      }
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },



  });

}

RankSwiper();


const bullet2 = ['1. 레이플라이드', '2. 레이플라이드', '3. 레이플라이드v2', '4. 레이플라이드v2', '5. 레이플라이드v3', '6. 레이플라이드v5', '7. 레이플라이드v4', '8. 레이플라이드v6'];

function RankSwiper2() {

  let swiper = new Swiper('.rank_swiper2', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.rank_swiper2 .swiper-button-next',
      prevEl: '.rank_swiper2 .swiper-button-prev',
    },


    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,



    pagination: {
      el: ".rank_swiper2 .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><span>' + (bullet2[index]) + '</span></div>';
      }
    },


    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });

}

RankSwiper2();

const bullet3 = ['1. 헤리티지 크롭 브이넥 스웨터 베스트', '2. 헤리티지 더블와펜 맨투맨', '3. 테니스 뉴헤리티지 집업', '4. 테니스 뉴헤리티지 반바지', '5. 헤리티지 모노그램 크롭 자켓', '6. 헤리티지 코튼 팬츠', '7. 헤리티지 크롭 맨투맨', '8. 헤리티지 브이넥 맨투맨'];

function RankSwiper3() {

  let swiper = new Swiper('.rank_swiper3', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.rank_swiper3 .swiper-button-next',
      prevEl: '.rank_swiper3 .swiper-button-prev',
    },


    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,



    pagination: {
      el: ".rank_swiper3 .swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<div class="' + className + '"><span>' + (bullet3[index]) + '</span></div>';
      }
    },


    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });

}

RankSwiper3();



const tabList2 = document.querySelectorAll('.tab_menu2 .list li');


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


function arrivalSwiper() {

  let swiper = new Swiper('.arrival_swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.arrival_swiper .swiper-button-next',
      prevEl: '.arrival_swiper .swiper-button-prev',
    },


    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,



    /*     pagination: {
          el: ".arrival_swiper .swiper-pagination",
          clickable: true,
        }, */


    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });

}

arrivalSwiper();


function arrivalSwiper2() {

  let swiper = new Swiper('.arrival_swiper2', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.arrival_swiper2 .swiper-button-next',
      prevEl: '.arrival_swiper2 .swiper-button-prev',
    },


    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,


    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });

}

arrivalSwiper2();


function arrivalSwiper3() {

  let swiper = new Swiper('.arrival_swiper3', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.arrival_swiper3 .swiper-button-next',
      prevEl: '.arrival_swiper3 .swiper-button-prev',
    },


    slidesPerView: 3,
    spaceBetween: 30,
    //사이간 여백

    centeredSlides: true,


    pagination: {
      el: ".arrival_swiper .swiper-pagination",
      clickable: true,
    },


         autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },

  });

}

arrivalSwiper3();

const show = document.querySelectorAll('.show_box')

window.addEventListener('scroll', () => {
  if (window.scrollY > 3200) {
    gsap.to(show[0], 0.5, {
      delay: 0,
      opacity: 1
    })
  } else if (window.scrollY < 2000) {
    gsap.to(show[0], 0, {
      delay: 0,
      opacity: 0
    })
  }

  if (window.scrollY > 3200) {
    gsap.to(show[1], 0.5, {
      delay: 0.5,
      opacity: 1,
    })
  } else if (window.scrollY < 2000) {
    gsap.to(show[1], 0, {
      delay: 0,
      opacity: 0
    })

  }

    if (window.scrollY > 3200) {
      gsap.to(show[2], 0.5, {
        delay: 1,
        opacity: 1,
      })
    } else if (window.scrollY < 2000) {
      gsap.to(show[2], 0, {
        delay: 0,
        opacity: 0
      })
    }
  

})





const point1 = document.querySelector('.point1')
const pointMenu1 = document.querySelector('.point_menu1')

const point2 = document.querySelector('.point2')
const pointMenu2 = document.querySelector('.point_menu2')

const point3 = document.querySelector('.point3')
const pointMenu3 = document.querySelector('.point_menu3')

const point4 = document.querySelector('.point4')
const pointMenu4 = document.querySelector('.point_menu4')



point1.addEventListener('click', () => {
  if(point1, 'click'){
    pointMenu1.style.opacity = 1;
  } 
})

pointMenu1.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu1.style.opacity = 0;
  }, 1000)
})

point2.addEventListener('click', () => {
  if(point2, 'click'){
    pointMenu2.style.opacity = 1;
  } 

})

pointMenu2.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu2.style.opacity = 0;
  }, 1000)
})

point3.addEventListener('click', () => {
  if(point3, 'click'){
    pointMenu3.style.opacity = 1;
  } 

})

pointMenu3.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu3.style.opacity = 0;
  }, 1000)
})

point4.addEventListener('click', () => {
  if(point4, 'click'){
    pointMenu4.style.opacity = 1;
  } 

})

pointMenu4.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu4.style.opacity = 0;
  }, 1000)
})


const point2_1 = document.querySelector('.point2_1')
const pointMenu2_1 = document.querySelector('.point_menu2_1')

const point2_2 = document.querySelector('.point2_2')
const pointMenu2_2 = document.querySelector('.point_menu2_2')

const point2_3 = document.querySelector('.point2_3')
const pointMenu2_3 = document.querySelector('.point_menu2_3')

point2_1.addEventListener('click', () => {
  if(point2_1, 'click'){
    pointMenu2_1.style.opacity = 1;
  } 
})

pointMenu2_1.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu2_1.style.opacity = 0;
  }, 1000)
})

point2_2.addEventListener('click', () => {
  if(point2_2, 'click'){
    pointMenu2_2.style.opacity = 1;
  } 

})

pointMenu2_2.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu2_2.style.opacity = 0;
  }, 1000)
})

point2_3.addEventListener('click', () => {
  if(point2_3, 'click'){
    pointMenu2_3.style.opacity = 1;
  } 

})

pointMenu2_3.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu2_3.style.opacity = 0;
  }, 1000)
})



const point3_1 = document.querySelector('.point3_1')
const pointMenu3_1 = document.querySelector('.point_menu3_1')

const point3_2 = document.querySelector('.point3_2')
const pointMenu3_2 = document.querySelector('.point_menu3_2')

point3_1.addEventListener('click', () => {
  if(point3_1, 'click'){
    pointMenu3_1.style.opacity = 1;
  } 
})

pointMenu3_1.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu3_1.style.opacity = 0;
  }, 1000)
})

point3_2.addEventListener('click', () => {
  if(point3_2, 'click'){
    pointMenu3_2.style.opacity = 1;
  } 

})

pointMenu3_2.addEventListener('mouseleave', () => {
  setTimeout(() =>{
    pointMenu3_2.style.opacity = 0;
  }, 1000)
})



const wingBanner = document.querySelector('.wing_banner')

$('.up').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
})

$('.down').on('click', function () {
  $('html, body').animate({
    scrollTop: 6000
  }, 500);
  return false;
})


wingBanner.addEventListener('mouseover' , () => {
  
  wingBanner.style.right = '0px'

})
wingBanner.addEventListener('mouseout' , () => {
  
  wingBanner.style.right = '-49px'

})

