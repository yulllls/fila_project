// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"서브페이지1/js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shopBoxData = [{
  id: "shoplist1",
  src: "../img/images/01.핫써머 릴렉스핏 풀집업 래쉬가드.jpg",
  imgHidden: "../img/images/01-1.핫써머 릴렉스핏 풀집업 래쉬가드.jpg",
  imgHidden2: "../img/images/01-2.핫써머 릴렉스핏 풀집업 래쉬가드.jpg",
  gender: "남성",
  shopName: "핫써머 릴렉스핏 풀집업 래쉬가드",
  shopPrice: "89,000원"
}, {
  id: "shoplist2",
  src: "../img/images/02.핫써머 릴렉스핏 래쉬가드.jpg",
  imgHidden: "../img/images/02-1.핫써머 릴렉스핏 래쉬가드.jpg",
  imgHidden2: "../img/images/02-2.핫써머 릴렉스핏 래쉬가드.jpg",
  gender: "남성",
  shopName: "핫써머 릴렉스핏 래쉬가드",
  shopPrice: "79,000원"
}, {
  id: "shoplist3",
  src: "../img/images/03.컴포트핏 인터내셔널 반팔 카라티.jpg",
  imgHidden: "../img/images/03-1.컴포트핏 인터내셔널 반팔 카라티.jpg",
  imgHidden2: "../img/images/03-2.컴포트핏 인터내셔널 반팔 카라티.jpg",
  genderAll: "공용",
  shopName: "컴포트핏 인터내셔널 반팔 카라티",
  shopPrice: "69,000원"
}, {
  id: "shoplist4",
  src: "../img/images/04.인터내셔널 스몰 로고 티셔츠.jpg",
  imgHidden: "../img/images/04-1.인터내셔널 스몰 로고 티셔츠.jpg",
  imgHidden2: "../img/images/04-2.인터내셔널 스몰 로고 티셔츠.jpg",
  genderAll: "공용 컴포트핏 라이프스타일",
  shopName: "인터내셔널 스몰 로고 티셔츠",
  shopPrice: "39,000원"
}, {
  id: "shoplist5",
  src: "../img/images/05.인터내셔널 반팔 카라티.jpg",
  imgHidden: "../img/images/05-1.인터내셔널 반팔 카라티.jpg",
  imgHidden2: "../img/images/05-2.인터내셔널 반팔 카라티.jpg",
  genderAll: "공용 컴포트핏 라이프스타일",
  shopName: "인터내셔널 반팔 카라티",
  shopPrice: "69,000원"
}, {
  id: "shoplist6",
  src: "../img/images/06.스포츠 인터내셔널 로고 반팔티.jpg",
  imgHidden: "../img/images/06-1.스포츠 인터내셔널 로고 반팔티.jpg",
  imgHidden2: "../img/images/06-2.스포츠 인터내셔널 로고 반팔티.jpg",
  genderAll: "공용 컴포트핏 라이프스타일",
  shopName: "스포츠 인터내셔널 로고 반팔티",
  shopPrice: "49,000원"
}, {
  id: "shoplist7",
  src: "../img/images/07.인터내셔널 그래픽 반팔티.jpg",
  imgHidden: "../img/images/07-1.인터내셔널 그래픽 반팔티.jpg",
  imgHidden2: "../img/images/07-2.인터내셔널 그래픽 반팔티.jpg",
  genderAll: "공용 오버핏 라이프스타일",
  shopName: "인터내셔널 그래픽 반팔티",
  shopPrice: "49,000원"
}, {
  id: "shoplist8",
  src: "../img/images/08.인터내셔널 그래픽 반팔티.jpg",
  imgHidden: "../img/images/08-1.인터내셔널 그래픽 반팔티.jpg",
  imgHidden2: "../img/images/08-2.인터내셔널 그래픽 반팔티.jpg",
  genderAll: "공용 오버핏 라이프스타일",
  shopName: "인터내셔널 그래픽 반팔티",
  shopPrice: "49,000원"
}, {
  id: "shoplist9",
  src: "../img/images/09.핫써머 Joyful 나시티.jpg",
  imgHidden: "../img/images/09-1.핫써머 Joyful 나시티.jpg",
  imgHidden2: "../img/images/09-2.핫써머 Joyful 나시티.jpg",
  gender: "남성 라이프스타일",
  shopName: "핫써머 Joyful 나시티",
  shopPrice: "45,000원"
}, {
  id: "shoplist10",
  src: "../img/images/10.핫써머 Fila festa 나시티.jpg",
  imgHidden: "../img/images/10-1.핫써머 Fila festa 나시티.jpg",
  imgHidden2: "../img/images/10-2.핫써머 Fila festa 나시티.jpg",
  gender: "남성 컴포트핏 라이프스타일",
  shopName: "핫써머 Fila festa 나시티",
  shopPrice: "39,000원"
}, {
  id: "shoplist11",
  src: "../img/images/11.페스타 그래픽 티셔츠.jpg",
  imgHidden: "../img/images/11-1.페스타 그래픽 티셔츠.jpg",
  imgHidden2: "../img/images/11-2.페스타 그래픽 티셔츠.jpg",
  genderAll: "공용 레귤러핏 라이프스타일",
  shopName: "페스타 그래픽 티셔츠",
  shopPrice: "49,000원"
}, {
  id: "shoplist12",
  src: "../img/images/12.컴포트핏 인터내셔널 6부 반바지.jpg",
  imgHidden: "../img/images/12-1.컴포트핏 인터내셔널 6부 반바지.jpg",
  imgHidden2: "../img/images/12-2.컴포트핏 인터내셔널 6부 반바지.jpg",
  genderAll: "공용 라이프스타일",
  shopName: "컴포트핏 인터내셔널 6부 반바지",
  shopPrice: "59,000원"
}, {
  id: "shoplist13",
  src: "../img/images/13.레터링 그래픽 티셔츠.jpg",
  imgHidden: "../img/images/13-1.레터링 그래픽 티셔츠.jpg",
  imgHidden2: "../img/images/13-2.레터링 그래픽 티셔츠.jpg",
  genderAll: "공용 컴포트핏 라이프스타일",
  shopName: "레터링 그래픽 티셔츠",
  shopPrice: "49,000원"
}, {
  id: "shoplist14",
  src: "../img/images/14.레코드 그래픽 티셔츠.jpg",
  imgHidden: "../img/images/14-1.레코드 그래픽 티셔츠.jpg",
  imgHidden2: "../img/images/14-2.레코드 그래픽 티셔츠.jpg",
  genderAll: "공용 컴포트핏 라이프스타일",
  shopName: "레코드 그래픽 티셔츠",
  shopPrice: "59,000원"
}, {
  id: "shoplist15",
  src: "../img/images/15.핫써머 우븐 포켓 반바지.jpg",
  imgHidden: "../img/images/15-1.핫써머 우븐 포켓 반바지.jpg",
  imgHidden2: "../img/images/15-2.핫써머 우븐 포켓 반바지.jpg",
  gender: "남성 라이프스타일",
  shopName: "핫써머 우븐 포켓 반바지",
  shopPrice: "69,000원"
}, {
  id: "shoplist16",
  src: "../img/images/16.핫써머 모노그램 나시티.jpg",
  imgHidden: "../img/images/16-1.핫써머 모노그램 나시티.jpg",
  imgHidden2: "../img/images/16-2.핫써머 모노그램 나시티.jpg",
  gender: "남성 컴포트핏 라이프스타일",
  shopName: "핫써머 모노그램 나시티",
  shopPrice: "49,000원"
}, {
  id: "shoplist17",
  src: "../img/images/17.핫써머 씨어서커 우븐반바지.jpg",
  imgHidden: "../img/images/17-1.핫써머 씨어서커 우븐반바지.jpg",
  imgHidden2: "../img/images/17-2.핫써머 씨어서커 우븐반바지.jpg",
  genderAll: "공용 라이프스타일",
  shopName: "핫써머 씨어서커 우븐반바지",
  shopPrice: "69,000원"
}, {
  id: "shoplist18",
  src: "../img/images/18.핫써머 씨어서커 아노락 바람막이.jpg",
  imgHidden: "../img/images/18-1.핫써머 씨어서커 아노락 바람막이.jpg",
  imgHidden2: "../img/images/18-2.핫써머 씨어서커 아노락 바람막이.jpg",
  genderAll: "공용 라이프스타일",
  shopName: "핫써머 씨어서커 아노락 바람막이",
  shopPrice: "119,000원"
}, {
  id: "shoplist19",
  src: "../img/images/19.핫써머 사이드프린트 우븐 반바지.jpg",
  imgHidden: "../img/images/19-1.핫써머 사이드프린트 우븐 반바지.jpg",
  imgHidden2: "../img/images/19-2.핫써머 사이드프린트 우븐 반바지.jpg",
  genderAll: "공용 레귤러핏 라이프스타일",
  shopName: "핫써머 사이드프린트 우븐 반바지",
  shopPrice: "69,000원"
}, {
  id: "shoplist20",
  src: "../img/images/20.레코드 그래픽 티셔츠.jpg",
  imgHidden: "../img/images/20-1.레코드 그래픽 티셔츠.jpg",
  imgHidden2: "../img/images/20-2.레코드 그래픽 티셔츠.jpg",
  genderAll: "공용 컴포트핏 라이프스타일",
  shopName: "레코드 그래픽 티셔츠",
  shopPrice: "59,000원"
}];
var _default = shopBoxData;
exports.default = _default;
},{}],"서브페이지1/js/sub.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var lnbMenu1 = document.querySelector('.lnb_menu1');
var lnbMenu2 = document.querySelector('.lnb_menu2');
var lnbMenu3 = document.querySelector('.lnb_menu3');
var lnbMenu4 = document.querySelector('.lnb_menu4');
var blurfilter = document.querySelector('.blur_filter');
var lnbWomen = document.querySelector('.lnb .lnb_list .women');
var lnbWomenMenu = document.querySelector('.lnb_menu_women');
var lnbMan = document.querySelector('.lnb .lnb_list .man');
var lnbManMenu = document.querySelector('.lnb_menu_man');
var lnbKids = document.querySelector('.lnb .lnb_list .kids');
var lnbKidsMenu = document.querySelector('.lnb_menu_kids');
var lnbBrand = document.querySelector('.lnb .lnb_list .brand');
var lnbBrandMenu = document.querySelector('.lnb_menu_Brand');
var lnbMenuWm = document.querySelector('.lnb_menu1 .man');
var lnbMenuWk = document.querySelector('.lnb_menu1 .kids');
var lnbMenuWb = document.querySelector('.lnb_menu1 .brand');
var lnbMenuMw = document.querySelector('.lnb_menu2 .women');
var lnbMenuMk = document.querySelector('.lnb_menu2 .kids');
var lnbMenuMb = document.querySelector('.lnb_menu2 .brand');
var lnbMenuKw = document.querySelector('.lnb_menu3 .women');
var lnbMenuKm = document.querySelector('.lnb_menu3 .man');
var lnbMenuKb = document.querySelector('.lnb_menu3 .brand');
var lnbMenuBw = document.querySelector('.lnb_menu4 .women');
var lnbMenuBm = document.querySelector('.lnb_menu4 .man');
var lnbMenuBk = document.querySelector('.lnb_menu4 .kids');
lnbWomen.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbWomen.addEventListener('mouseout', function () {
  lnbMenu1.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMan.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMan.addEventListener('mouseout', function () {
  lnbMenu2.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbKids.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbKids.addEventListener('mouseout', function () {
  lnbMenu3.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbBrand.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbBrand.addEventListener('mouseout', function () {
  lnbMenu4.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenu1.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMenu1.addEventListener('mouseout', function () {
  lnbMenu1.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenu2.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMenu2.addEventListener('mouseout', function () {
  lnbMenu2.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenu3.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMenu3.addEventListener('mouseout', function () {
  lnbMenu3.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenu4.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'block';
  blurfilter.style.display = 'block';
});
lnbMenu4.addEventListener('mouseout', function () {
  lnbMenu4.style.display = 'none';
  blurfilter.style.display = 'none';
});
lnbMenuWm.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});
lnbMenuWk.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});
lnbMenuWb.addEventListener('mouseover', function () {
  lnbMenu1.style.display = 'none';
  lnbMenu1.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});
lnbMenuMw.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});
lnbMenuMk.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});
lnbMenuMb.addEventListener('mouseover', function () {
  lnbMenu2.style.display = 'none';
  lnbMenu2.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});
lnbMenuKw.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});
lnbMenuKm.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});
lnbMenuKb.addEventListener('mouseover', function () {
  lnbMenu3.style.display = 'none';
  lnbMenu3.style.zIndex = '1';
  lnbMenu4.style.display = 'block';
  lnbMenu4.style.zIndex = '5';
});
lnbMenuBw.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu1.style.display = 'block';
  lnbMenu1.style.zIndex = '5';
});
lnbMenuBm.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu2.style.display = 'block';
  lnbMenu2.style.zIndex = '5';
});
lnbMenuBk.addEventListener('mouseover', function () {
  lnbMenu4.style.display = 'none';
  lnbMenu4.style.zIndex = '1';
  lnbMenu3.style.display = 'block';
  lnbMenu3.style.zIndex = '5';
});
var header = document.querySelector(".header");
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.classList.add("fixed");
    header.style.top = "0px";
    if (currentScrollPos == 0) {
      header.style.backgroundColor = 'transparent';
    } else {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.466)';
    }
  } else {
    /* header.classList.remove("fixed"); */
    header.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
var filter = document.querySelector('.left_filter');
var menu = document.querySelector('.menu');
var filterIco = document.querySelector('.left_filter i');
var clickFilter = false;
filter.addEventListener('click', function () {
  if (clickFilter) {
    menu.style.marginTop = '-352px';
    clickFilter = false;
    filterIco.setAttribute('class', "fas fa-minus");
  } else {
    menu.style.marginTop = '0px';
    clickFilter = true;
    filterIco.setAttribute('class', "fas fa-plus");
  }
});
var wear = document.querySelector('.wear');
var wearlist = document.querySelectorAll('.wear li');
wearlist.forEach(function (wearlists) {
  wearlists.addEventListener('click', function () {
    var icon = wearlists.querySelector('i');
    if (icon.classList.contains('fa-square')) {
      icon.setAttribute('class', 'far fa-check-square');
    } else {
      icon.setAttribute('class', 'far fa-square');
    }
  });
});

//------------

var btnAll = document.querySelectorAll('.btn_all');
var btnIco = document.querySelectorAll('.btn_all i');
var clickBtn = false;
btnAll.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var icon = btn.querySelector('i');
    if (icon.classList.contains('fa-square')) {
      icon.setAttribute('class', 'far fa-check-square');
    } else {
      icon.setAttribute('class', 'far fa-square');
    }
  });
});

//사이즈 클릭 기능 만들기 ,html 582번

var price = document.querySelectorAll('.price');
var prIco = document.querySelectorAll('.price i');
price.forEach(function (btn) {
  btn.addEventListener('click', function () {
    var icon = btn.querySelector('i');
    if (icon.classList.contains('fa-square')) {
      icon.setAttribute('class', 'far fa-check-square');
    } else {
      icon.setAttribute('class', 'far fa-square');
    }
  });
});
var genderMan = document.querySelector('.gender_man');
var genderAll = document.querySelector('.gender_all');
var ManIco = document.querySelector('.gender_man i');
var AllIco = document.querySelector('.gender_all i');
var clickMan = false;
genderMan.addEventListener('click', function () {
  if (clickMan) {
    clickMan = false;
    ManIco.setAttribute('class', "far fa-square");
  } else {
    clickMan = true;
    ManIco.setAttribute('class', "far fa-check-square");
    AllIco.setAttribute('class', "far fa-square");
    clickAll = false;
  }
});
var clickAll = false;
genderAll.addEventListener('click', function () {
  if (clickAll) {
    clickAll = false;
    AllIco.setAttribute('class', "far fa-square");
  } else {
    clickAll = true;
    AllIco.setAttribute('class', "far fa-check-square");
    clickMan = false;
    ManIco.setAttribute('class', "far fa-square");
  }
});
var ninebox = document.querySelector('.ninebox');
var nineboxstyle = document.querySelector('.ninebox .fas');
var fourbox = document.querySelector('.fourbox .fas');
var shopbox = document.querySelectorAll('.shop_box');
var purchase = document.querySelectorAll('.purchase');
var main = document.querySelector('.main');
var clickninebox = false;
var clickfourbox = true;
ninebox.addEventListener('click', function () {
  if (clickninebox) {
    for (var i = 0; i < shopbox.length; i++) {
      shopbox[i].style.width = '272px';
      shopbox[i].style.height = '360px';
      /*       shopbox[i].style.marginRight = '15px';
            shopbox[4].style.marginRight = '0px';
            shopbox[9].style.marginRight = '0px';
            shopbox[14].style.marginRight = '0px';
            shopbox[19].style.marginRight = '0px'; */
    }

    for (var _i = 0; _i < purchase.length; _i++) {
      purchase[_i].style.width = '70%';
    }
    nineboxstyle.style.color = '#000';
    fourbox.style.color = "#888";
    main.style.height = '2350px';
    clickninebox = false;
    clickfourbox = true;
  } else {
    for (var _i2 = 0; _i2 < shopbox.length; _i2++) {
      shopbox[_i2].style.width = '340px';
      shopbox[_i2].style.height = '452.5px';
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

    for (var _i3 = 0; _i3 < purchase.length; _i3++) {
      purchase[_i3].style.width = '75%';
    }
    nineboxstyle.style.color = '#888';
    fourbox.style.color = "#000";
    main.style.height = '3380px';
    clickninebox = true;
    clickfourbox = false;
  }
});
fourbox.addEventListener('click', function () {
  if (clickfourbox) {
    for (var i = 0; i < shopbox.length; i++) {
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

    for (var _i4 = 0; _i4 < purchase.length; _i4++) {
      purchase[_i4].style.width = '75%';
    }
    nineboxstyle.style.color = '#888';
    fourbox.style.color = "#000";
    main.style.height = '3380px';
    clickfourbox = false;
    clickninebox = true;
  } else {
    for (var _i5 = 0; _i5 < shopbox.length; _i5++) {
      shopbox[_i5].style.width = '272px';
      shopbox[_i5].style.height = '360px';
      /*       shopbox[i].style.marginRight = '15px';
            shopbox[4].style.marginRight = '0px';
            shopbox[9].style.marginRight = '0px';
            shopbox[14].style.marginRight = '0px';
            shopbox[19].style.marginRight = '0px'; */
    }

    for (var _i6 = 0; _i6 < purchase.length; _i6++) {
      purchase[_i6].style.width = '70%';
    }
    nineboxstyle.style.color = '#000';
    fourbox.style.color = "#888";
    main.style.height = '2350px';
    clickfourbox = true;
    clickninebox = false;
  }
});
var wearAll = document.querySelector('.wear_all');
var windBreaker = document.querySelector('.wind_breaker');
var hoodie = document.querySelector('.hoodie');
var sweatSuit = document.querySelector('.sweat_suit');
var swimWear = document.querySelector('.swim_wear');
var tShirt = document.querySelector('.t_shirt');
var pants = document.querySelector('.pants');
var sweatShirt = document.querySelector('.sweat_shirt');
var oline = document.querySelector('.oline');
var sbSw = document.querySelectorAll('.sbSw');
console.log(_data.default);
var shopBoxDiv = document.querySelectorAll(".shop_box");
var shopMenu = document.querySelectorAll(".shop_menu");
for (var i = 0; i < _data.default.length; i++) {
  var shopBoxLink = document.createElement('a');
  shopBoxLink.href = '../디테일페이지/index.html';
  var productDiv = document.createElement("div");
  productDiv.setAttribute("class", "product");
  var shopImg = document.createElement("img");
  shopImg.setAttribute("src", _data.default[i].src);
  productDiv.appendChild(shopImg);
  var imgHidden = document.createElement("img");
  imgHidden.setAttribute('class', 'img_hidden');
  imgHidden.setAttribute("src", _data.default[i].imgHidden);
  productDiv.appendChild(imgHidden);
  var imgHidden2 = document.createElement("img");
  imgHidden2.setAttribute('class', 'img_hidden2');
  imgHidden2.setAttribute("src", _data.default[i].imgHidden2);
  productDiv.appendChild(imgHidden2);
  if (_data.default[i].gender !== undefined) {
    var gender = document.createElement('p');
    gender.setAttribute('class', 'gender');
    var genderText = document.createTextNode(_data.default[i].gender);
    gender.appendChild(genderText);
    var secondChild = shopMenu[i].childNodes[2];
    shopMenu[i].insertBefore(gender, secondChild);
  }
  if (_data.default[i].genderAll !== undefined) {
    var _genderAll = document.createElement('p');
    _genderAll.setAttribute('class', 'genderAll');
    var genderAllText = document.createTextNode(_data.default[i].genderAll);
    _genderAll.appendChild(genderAllText);
    var secondAllChild = shopMenu[i].childNodes[2];
    shopMenu[i].insertBefore(_genderAll, secondAllChild);
  }
  var shopName = document.createElement('p');
  shopName.setAttribute('class', 'shopName');
  var shopNameText = document.createTextNode(_data.default[i].shopName);
  shopName.appendChild(shopNameText);
  var thirdChild = shopMenu[i].childNodes[3];
  shopMenu[i].insertBefore(shopName, thirdChild);
  var shopPrice = document.createElement('p');
  shopPrice.setAttribute('class', 'shopPrice');
  var shopPriceText = document.createTextNode(_data.default[i].shopPrice);
  shopPrice.appendChild(shopPriceText);
  var fourChild = shopMenu[i].childNodes[4];
  shopMenu[i].insertBefore(shopPrice, fourChild);
  shopBoxLink.appendChild(productDiv);
  shopBoxDiv[i].appendChild(shopBoxLink);

  // shopBoxDiv[i].appendChild(productDiv)
}

var img_hidden2 = document.querySelectorAll('.img_hidden2');
var _loop = function _loop(_i7) {
  var timer;
  shopbox[_i7].addEventListener('mouseover', function () {
    // img_hidden2[i].style.display = 'block'
    timer = setTimeout(function () {
      img_hidden2[_i7].style.opacity = '1';
    }, 1000);
    setTimeout(function () {
      img_hidden2[_i7].style.opacity = '0';
    }, 3000);
  });
  shopbox[_i7].addEventListener('mouseout', function () {
    clearTimeout(timer);
    img_hidden2[_i7].style.opacity = '0';
    //img_hidden2[i].style.display = 'none' 
  });
};
for (var _i7 = 0; _i7 < img_hidden2.length; _i7++) {
  _loop(_i7);
}
var genderAllDiv = document.querySelectorAll('.genderAll');
//const genderDiv = document.querySelectorAll('.gender')

var genderDivClick = false;
var genderAllDivClick = false;
var itemsPerPage = 20;
var totalPages = 5;
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
    a.addEventListener('click', function (i) {
      return function (event) {
        event.preventDefault();
        renderPage(i);
        renderPagination(i);
      };
    }(i));
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
  firstA.addEventListener('click', function (event) {
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
  prevA.addEventListener('click', function (event) {
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
    a.addEventListener('click', function (i) {
      return function (event) {
        event.preventDefault();
        renderPage(i);
        renderOtherPagination(i);
      };
    }(i));
    li.appendChild(a);
    pagination.appendChild(li);
  }
  var nextLi = document.createElement('li');
  var nextA = document.createElement('a');
  nextA.href = '#';
  nextA.innerHTML = '<i class="fas fa-angle-right"></i>';
  nextA.addEventListener('click', function (event) {
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
  lastA.addEventListener('click', function (event) {
    event.preventDefault();
    renderPage(lastPage);
    renderOtherPagination(lastPage);
  });
  lastLi.appendChild(lastA);
  pagination.appendChild(lastLi);
}
},{"./data.js":"서브페이지1/js/data.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55556" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","서브페이지1/js/sub.js"], null)
//# sourceMappingURL=/sub.db530324.js.map