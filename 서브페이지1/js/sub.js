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


const filter = document.querySelector('.left_filter');
const menu = document.querySelector('.menu');
const filterIco = document.querySelector('.left_filter i')

let clickFilter = false;

filter.addEventListener('click', () => {
  if (clickFilter) {
    menu.style.marginTop = '-352px'; 
    clickFilter = false;
    filterIco.setAttribute('class', "fas fa-minus")
  } else {
    menu.style.marginTop = '0px'; 
    clickFilter = true;
    filterIco.setAttribute('class', "fas fa-plus")
  }
});


const wear = document.querySelector('.wear')
const wearlist = document.querySelectorAll('.wear li')


wearlist.forEach(wearlists => {
  wearlists.addEventListener('click', () => {
    const icon = wearlists.querySelector('i');
    if (icon.classList.contains('fa-square')) {
      icon.setAttribute('class', 'far fa-check-square');
    } else {
      icon.setAttribute('class', 'far fa-square');
    }
  });
});


//------------

const btnAll = document.querySelectorAll('.btn_all')

const btnIco = document.querySelectorAll('.btn_all i')

let clickBtn = false;

btnAll.forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('fa-square')) {
      icon.setAttribute('class', 'far fa-check-square');
    } else {
      icon.setAttribute('class', 'far fa-square');
    }
  });
});



//사이즈 클릭 기능 만들기 ,html 582번

const price = document.querySelectorAll('.price')

const prIco = document.querySelectorAll('.price i')


price.forEach(btn => {
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('i');
    if (icon.classList.contains('fa-square')) {
      icon.setAttribute('class', 'far fa-check-square');
    } else {
      icon.setAttribute('class', 'far fa-square');
    }
  });
});


const genderMan = document.querySelector('.gender_man')
const genderAll = document.querySelector('.gender_all')
const ManIco = document.querySelector('.gender_man i')

const AllIco = document.querySelector('.gender_all i')

let clickMan = false;

genderMan.addEventListener('click', () => {

  if (clickMan) {
    clickMan = false;
    ManIco.setAttribute('class', "far fa-square")

  } else {
    clickMan = true;
    ManIco.setAttribute('class', "far fa-check-square")

    AllIco.setAttribute('class', "far fa-square")
    clickAll = false;
  }
})

let clickAll = false;

genderAll.addEventListener('click', () => {

  if (clickAll) {
    clickAll = false;
    AllIco.setAttribute('class', "far fa-square")

  } else {
    clickAll = true;
    AllIco.setAttribute('class', "far fa-check-square")

    clickMan = false;
    ManIco.setAttribute('class', "far fa-square")

  }
})


const ninebox = document.querySelector('.ninebox')
const nineboxstyle = document.querySelector('.ninebox .fas')
const fourbox = document.querySelector('.fourbox .fas')
const shopbox = document.querySelectorAll('.shop_box')
const purchase = document.querySelectorAll('.purchase')
const main = document.querySelector('.main')

let clickninebox = false;
let clickfourbox = true;


ninebox.addEventListener('click', () => {
  if (clickninebox) {
    for (let i = 0; i < shopbox.length; i++) {
      shopbox[i].style.width = '272px';
      shopbox[i].style.height = '360px';
      /*       shopbox[i].style.marginRight = '15px';
            shopbox[4].style.marginRight = '0px';
            shopbox[9].style.marginRight = '0px';
            shopbox[14].style.marginRight = '0px';
            shopbox[19].style.marginRight = '0px'; */
    }
    for (let i = 0; i < purchase.length; i++) {
      purchase[i].style.width = '70%';
    }
    nineboxstyle.style.color = '#000';
    fourbox.style.color = "#888";
    main.style.height = '2350px'
    clickninebox = false;
    clickfourbox = true;
  } else {
    for (let i = 0; i < shopbox.length; i++) {
      shopbox[i].style.width = '340px';
      shopbox[i].style.height = '452.5px';
      /*       shopbox[i].style.marginRight = '20px';
            shopbox[3].style.marginRight = '0px';
            shopbox[7].style.marginRight = '0px';
            shopbox[11].style.marginRight = '0px';
            shopbox[15].style.marginRight = '0px';
            shopbox[19].style.marginRight = '0px';
            shopbox[4].style.marginRight = '20px';
            shopbox[9].style.marginRight = '20px';
            shopbox[14].style.marginRight = '20px'; */

    }
    for (let i = 0; i < purchase.length; i++) {
      purchase[i].style.width = '75%';
    }
    nineboxstyle.style.color = '#888';
    fourbox.style.color = "#000";
    main.style.height = '3380px'
    clickninebox = true;
    clickfourbox = false;
  }
});

fourbox.addEventListener('click', () => {
  if (clickfourbox) {
    for (let i = 0; i < shopbox.length; i++) {
      shopbox[i].style.width = '340px';
      shopbox[i].style.height = '452.5px';
      /*       shopbox[i].style.marginRight = '20px';
            shopbox[3].style.marginRight = '0px';
            shopbox[7].style.marginRight = '0px';
            shopbox[11].style.marginRight = '0px';
            shopbox[15].style.marginRight = '0px';
            shopbox[19].style.marginRight = '0px';
            shopbox[4].style.marginRight = '20px';
            shopbox[9].style.marginRight = '20px';
            shopbox[14].style.marginRight = '20px'; */
    }
    for (let i = 0; i < purchase.length; i++) {
      purchase[i].style.width = '75%';
    }
    nineboxstyle.style.color = '#888';
    fourbox.style.color = "#000";
    main.style.height = '3380px'
    clickfourbox = false;
    clickninebox = true;
  } else {
    for (let i = 0; i < shopbox.length; i++) {
      shopbox[i].style.width = '272px';
      shopbox[i].style.height = '360px';
      /*       shopbox[i].style.marginRight = '15px';
            shopbox[4].style.marginRight = '0px';
            shopbox[9].style.marginRight = '0px';
            shopbox[14].style.marginRight = '0px';
            shopbox[19].style.marginRight = '0px'; */
    }
    for (let i = 0; i < purchase.length; i++) {
      purchase[i].style.width = '70%';
    }
    nineboxstyle.style.color = '#000';
    fourbox.style.color = "#888";
    main.style.height = '2350px'
    clickfourbox = true;
    clickninebox = false;
  }
});




const wearAll = document.querySelector('.wear_all')
const windBreaker = document.querySelector('.wind_breaker')
const hoodie = document.querySelector('.hoodie')
const sweatSuit = document.querySelector('.sweat_suit')
const swimWear = document.querySelector('.swim_wear')
const tShirt = document.querySelector('.t_shirt')
const pants = document.querySelector('.pants')
const sweatShirt = document.querySelector('.sweat_shirt')
const oline = document.querySelector('.oline')


const sbSw = document.querySelectorAll('.sbSw')


import shopBoxData from './data.js'

console.log(shopBoxData);

const shopBoxDiv = document.querySelectorAll(".shop_box")
const shopMenu = document.querySelectorAll(".shop_menu")

for (let i = 0; i < shopBoxData.length; i++) {

  const shopBoxLink = document.createElement('a');
  shopBoxLink.href = '../디테일페이지/index.html';

  const productDiv = document.createElement("div")
  productDiv.setAttribute("class", "product")

  const shopImg = document.createElement("img")
  shopImg.setAttribute("src", shopBoxData[i].src)
  productDiv.appendChild(shopImg)

  const imgHidden = document.createElement("img")
  imgHidden.setAttribute('class', 'img_hidden')
  imgHidden.setAttribute("src", shopBoxData[i].imgHidden)
  productDiv.appendChild(imgHidden)

  const imgHidden2 = document.createElement("img")
  imgHidden2.setAttribute('class', 'img_hidden2')
  imgHidden2.setAttribute("src", shopBoxData[i].imgHidden2)
  productDiv.appendChild(imgHidden2)

  if(shopBoxData[i].gender !== undefined){
  const gender = document.createElement('p')
  gender.setAttribute('class', 'gender')
  const genderText = document.createTextNode(shopBoxData[i].gender)
  gender.appendChild(genderText)

  const secondChild = shopMenu[i].childNodes[2]
  shopMenu[i].insertBefore(gender, secondChild)

  }

  if (shopBoxData[i].genderAll !== undefined) {
    const genderAll = document.createElement('p');
    genderAll.setAttribute('class', 'genderAll');
    const genderAllText = document.createTextNode(shopBoxData[i].genderAll);
    genderAll.appendChild(genderAllText);
  
    const secondAllChild = shopMenu[i].childNodes[  2];
    shopMenu[i].insertBefore(genderAll, secondAllChild);
  }

  const shopName = document.createElement('p')
  shopName.setAttribute('class', 'shopName')
  const shopNameText = document.createTextNode(shopBoxData[i].shopName)
  shopName.appendChild(shopNameText)

  const thirdChild = shopMenu[i].childNodes[3]
  shopMenu[i].insertBefore(shopName, thirdChild)

  const shopPrice = document.createElement('p')
  shopPrice.setAttribute('class', 'shopPrice')
  const shopPriceText = document.createTextNode(shopBoxData[i].shopPrice)
  shopPrice.appendChild(shopPriceText)

  const fourChild = shopMenu[i].childNodes[4]
  shopMenu[i].insertBefore(shopPrice, fourChild)



  shopBoxLink.appendChild(productDiv);
  shopBoxDiv[i].appendChild(shopBoxLink);

  // shopBoxDiv[i].appendChild(productDiv)
}



const img_hidden2 = document.querySelectorAll('.img_hidden2')

for (let i = 0; i < img_hidden2.length; i++) {
  let timer;
  shopbox[i].addEventListener('mouseover', () => {
    // img_hidden2[i].style.display = 'block'
    timer = setTimeout(() => {
      img_hidden2[i].style.opacity = '1'
    }, 1000);

    setTimeout(() => {
      img_hidden2[i].style.opacity = '0'
    }, 3000);
  })

  shopbox[i].addEventListener('mouseout', () => {
    clearTimeout(timer);
    img_hidden2[i].style.opacity = '0'
    //img_hidden2[i].style.display = 'none' 
  })
}







const genderAllDiv = document.querySelectorAll('.genderAll')
//const genderDiv = document.querySelectorAll('.gender')


let genderDivClick = false;
let genderAllDivClick = false;


let itemsPerPage = 20;
let totalPages = 5;

function renderPagination(currentPage) {
    var pagination = document.getElementById('js-pagination');
    pagination.innerHTML = '';


    for (var i = 1; i <= totalPages; i++) {
        var li = document.createElement('li');

        var a = document.createElement('a');
        a.href = '#';
        a.textContent = i;
        if (i === currentPage) {
            a.classList.add('active');
        }
        a.addEventListener('click', (function(i) {
            return function(event) {
                event.preventDefault();
                renderPage(i);
                renderPagination(i);
            };
        })(i));
        li.appendChild(a);
        pagination.appendChild(li);
    }
}

function renderPage(page) {
    var start = (page - 1) * itemsPerPage;
    var end = start + itemsPerPage;
    var shopBoxes = document.querySelectorAll('.shop_box');
    for (var i = 0; i < shopBoxes.length; i++) {
        if (i >= start && i < end) {
            shopBoxes[i].style.display = 'block';
        } else {
            shopBoxes[i].style.display = 'none';
        }
    }
}

renderPage(1);
renderOtherPagination(1);

function renderOtherPagination(currentPage) {
  var pagination = document.getElementById('js-pagination');
  pagination.innerHTML = '';

  var firstPage = 1;
  var lastPage = totalPages;

  var prevPage = currentPage - 1;
  if (prevPage < firstPage) {
      prevPage = firstPage;
  }

  var nextPage = currentPage + 1;
  if (nextPage > lastPage) {
      nextPage = lastPage;
  }

  var firstLi = document.createElement('li');
  var firstA = document.createElement('a');
  firstA.href = '#';
  firstA.innerHTML = '<i class="fas fa-angle-double-left"></i>';
  firstA.addEventListener('click', function(event) {
      event.preventDefault();
      renderPage(firstPage);
      renderOtherPagination(firstPage);
  });
  firstLi.appendChild(firstA);
  pagination.appendChild(firstLi);

  var prevLi = document.createElement('li');
  var prevA = document.createElement('a');
  prevA.href = '#';
  prevA.innerHTML = '<i class="fas fa-angle-left"></i>';
  prevA.addEventListener('click', function(event) {
      event.preventDefault();
      renderPage(prevPage);
      renderOtherPagination(prevPage);
  });
  prevLi.appendChild(prevA);
  pagination.appendChild(prevLi);

  for (var i = 1; i <= totalPages; i++) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#';
      a.textContent = i;
      if (i === currentPage) {
          a.classList.add('active');
      }
      a.addEventListener('click', (function(i) {
          return function(event) {
              event.preventDefault();
              renderPage(i);
              renderOtherPagination(i);
          };
      })(i));
      li.appendChild(a);
      pagination.appendChild(li);
  }

  var nextLi = document.createElement('li');
  var nextA = document.createElement('a');
  nextA.href = '#';
  nextA.innerHTML = '<i class="fas fa-angle-right"></i>';
  nextA.addEventListener('click', function(event) {
      event.preventDefault();
      renderPage(nextPage);
      renderOtherPagination(nextPage);
  });
  nextLi.appendChild(nextA);
  pagination.appendChild(nextLi);

  var lastLi = document.createElement('li');
  var lastA = document.createElement('a');
  lastA.href = '#';
  lastA.innerHTML = '<i class="fas fa-angle-double-right"></i>';
  lastA.addEventListener('click', function(event) {
      event.preventDefault();
      renderPage(lastPage);
      renderOtherPagination(lastPage);
  });
  lastLi.appendChild(lastA);
  pagination.appendChild(lastLi);
}