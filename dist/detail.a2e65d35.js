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
})({"디테일페이지/js/detail.js":[function(require,module,exports) {
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

var number = 1;
var price = 49000;
var incrementButton = document.querySelector(".plus_btn");
var decrementButton = document.querySelector(".minus_btn");
var display = document.querySelector(".number");
var totalDisplay = document.querySelector(".gold");
incrementButton.addEventListener("click", function () {
  if (number < 9) {
    number++;
    display.textContent = number;
    totalDisplay.textContent = "".concat(formatPrice(number * price), "\uC6D0");
  }
});
decrementButton.addEventListener("click", function () {
  if (number > 1) {
    number--;
    display.textContent = number;
    totalDisplay.textContent = "".concat(formatPrice(number * price), "\uC6D0");
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

var mainImg = document.querySelector('.main_img');
var images = ['../img/03. 디테일/모델컷1.jpg', '../img/03. 디테일/모델컷2.jpg', '../img/03. 디테일/모델컷3.jpg', '../img/03. 디테일/인터내셔널 그래픽 반팔티1.jpg', '../img/03. 디테일/모델컷4.jpg'];
var index = 0;
var timer;
var isChanging = true;
function changeImage() {
  if (!isChanging) return;
  mainImg.src = images[index];
  index = (index + 1) % images.length;
}
timer = setInterval(changeImage, 2000);
var choice = document.querySelectorAll('.choice');
var _loop = function _loop(i) {
  choice[i].addEventListener('click', function () {
    mainImg.src = choice[i].src;
    isChanging = false;
    clearInterval(timer);
    timer = setTimeout(function () {
      mainImg.src = images[0];
      isChanging = true;
      timer = setInterval(changeImage, 2000);
    }, 4000);
  });
};
for (var i = 0; i < choice.length; i++) {
  _loop(i);
}
var tabList = document.querySelectorAll('.tab_menu .list li');
for (var _i = 0; _i < tabList.length; _i++) {
  var btn = tabList[_i].querySelector('.btn');
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (var j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}
var tabList2 = document.querySelectorAll('.tab_menu2 .list2 li');
for (var _i2 = 0; _i2 < tabList2.length; _i2++) {
  var _btn = tabList2[_i2].querySelector('.btn');
  _btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (var j = 0; j < tabList2.length; j++) {
      tabList2[j].classList.remove('is_on');
    }
    this.parentNode.classList.add('is_on');
  });
}
var asterionBtn = document.querySelector('.asterion_btn');
var asterionList = document.querySelector('.asterion_list');
var sizeBtn = document.querySelector('.size_btn');
var sizeListChk = document.querySelector('.size_list_chk');
asterionList.style.display = 'none';
sizeListChk.style.display = 'none';
var isListVisible = false;
var sizeListChkClick = false;
asterionBtn.addEventListener('click', function () {
  if (isListVisible) {
    asterionList.style.display = 'none';
    isListVisible = false;
  } else {
    asterionList.style.display = 'block';
    sizeListChk.style.display = 'none';
    isListVisible = true;
    sizeListChkClick = false;
  }
});
sizeBtn.addEventListener('click', function () {
  if (sizeListChkClick) {
    sizeListChk.style.display = 'none';
    sizeListChkClick = false;
  } else {
    sizeListChk.style.display = 'block';
    asterionList.style.display = 'none';
    sizeListChkClick = true;
    isListVisible = false;
  }
});
var asterionListtAll = document.querySelectorAll('.asterion_list p');
var alEx = document.querySelector('.al_ex');
asterionListtAll.forEach(function (asterionListtAlls) {
  asterionListtAlls.addEventListener('click', function () {
    // Remove the fa-check-square class from any other elements that have it
    asterionListtAll.forEach(function (el) {
      var checkedIcon = el.querySelector('i.fa-check-square');
      if (checkedIcon) {
        checkedIcon.classList.replace('fa-check-square', 'fa-square');
        el.style.color = '';
      }
    });

    // Toggle the fa-check-square and fa-square classes on the clicked element
    var icon = asterionListtAlls.querySelector('i.fa-square');
    if (icon) {
      icon.classList.replace('fa-square', 'fa-check-square');
      asterionListtAlls.style.color = '#002053';
    } else {
      var checkedIcon = asterionListtAlls.querySelector('i.fa-check-square');
      if (checkedIcon) {
        checkedIcon.classList.replace('fa-check-square', 'fa-square');
        asterionListtAlls.style.color = '';
      }
    }
  });
});
alEx.addEventListener('click', function () {
  var checkedItem = document.querySelector('.fa-check-square');
  if (checkedItem) {
    var text = checkedItem.parentNode.textContent.trim();
    asterionBtn.textContent = text;
    asterionBtn.style.fontSize = '14px';
    asterionBtn.style.width = '90px';
    asterionBtn.style.border = '1px solid red';
  } else {
    asterionBtn.innerHTML = '별점 <i class="fas fa-angle-down"></i>';
    asterionBtn.style.fontSize = '';
  }
  asterionList.style.display = 'none';
});
var slEx = document.querySelector('.sl_ex');
var slAll = document.querySelectorAll('.sl_all');
slAll.forEach(function (slAlls) {
  slAlls.addEventListener('click', function () {
    // Reset all slAll elements to their default style and remove the 'selected' class
    slAll.forEach(function (elem) {
      elem.style.color = '';
      elem.style.backgroundColor = '';
      elem.classList.remove('selected');
    });

    // Apply the new style to the clicked element and add the 'selected' class
    slAlls.style.color = 'white';
    slAlls.style.backgroundColor = '#002053';
    slAlls.classList.add('selected');
  });
});
slEx.addEventListener('click', function () {
  sizeListChk.style.display = 'none';

  // Find the selected slAll element
  var selectedSlAll = document.querySelector('.sl_all.selected');

  // Update the text of the sizeBtn element with the text of the selected slAll element
  if (selectedSlAll) {
    sizeBtn.textContent = selectedSlAll.textContent;
    sizeBtn.style.border = '1px solid red';
  }
});
document.querySelector('.add_btn').addEventListener('click', function () {
  // add_btn = button 을 (클릭 했을때, 동작한다) {}
  var reviewComment = document.querySelector('.review_comment'); // 변수생성
  var reviewCommentList = document.querySelector('.review_comment_list'); // 변수 생성
  var asterionBtn = document.querySelector('.asterion_btn'); // 방금 생성
  var sizeBtn = document.querySelector('.size_btn'); //방금 생성 
  var checkedItem = document.querySelector('.fa-check-square');
  var selectedSlAll = document.querySelector('.sl_all.selected');
  if (!checkedItem || !selectedSlAll) {
    alert('별점과 사이즈를 체크해주세요');
    return;
  }
  var newP = document.createElement('p'); // newP라는 변수를 만들면서 p 태그를 생성
  var newText = document.createTextNode(reviewComment.value);
  // subject input에서 들어오는 값을 TEXT로 받겠다.

  var asterionText = document.createElement('span');
  asterionText.textContent = asterionBtn.textContent;
  var sizeText = document.createElement('span');
  sizeText.textContent = sizeBtn.textContent;

  // Append the new elements to the newP element
  newP.appendChild(asterionText);
  newP.appendChild(sizeText);
  newP.appendChild(newText);
  document.body.appendChild(newP);
  var newSpan = document.createElement('span');
  var spanText = document.createTextNode('X');
  newSpan.appendChild(spanText);
  newP.appendChild(newSpan);
  newSpan.setAttribute('class', 'delete');

  // Create new elements to display the current text content of asterionBtn and sizeBtn

  reviewCommentList.insertBefore(newP, reviewCommentList.children[0]);
  // insertBefore = 전에 newP를 넣겠다. (추가되는 걸 맨위로)
  // 추가 눌렀을때 텍스트가 제일 위로 올라온다고 생각하면됨.
  // 최근 작성된것 바로 이전에 등록하겠다.

  // 서브젯리스트 중 첫번째 자식 before에다가 insert해라라는 의미.
  // insertBefore(추가되는 노드, 기준 노드)
  // X라는 스판버튼을 눌렀을때 부모,나자신 지워선 안되고
  // 부모 위의 조상을 지워야한다.

  reviewCommentList.appendChild(newP);
  reviewComment.value = ''; //  서브젯 벨류를 초기화 시킨다.
  reviewComment.focus();
  // 서브젯에 다시 포커스를 했을때 이전 적은것을 지우고 다시실행

  var delBtn = document.querySelectorAll('.delete');

  //★★ 중요함 ★★ 자주 사용되는 코드이다. ★★
  var _loop2 = function _loop2(_i3) {
    delBtn[_i3].addEventListener('click', function () {
      if (delBtn[_i3].parentNode.parentNode) {
        // 만약 부모의 부모가 존재한다면 
        this.parentNode.parentNode.removeChild(this.parentNode);
        // parentNode * 2번이면 subjectList를 삭제하는것
        // 부모를 지울려면 부모의 부모까지 올라가야만 지울 수 있음.
        // 이게 전제조건이다.
        // 답변을 줘야한다면 만들 것을 또 생성 하면됨.

        // 나자신.부모.부모.자식 삭제(나자신의 부모를 삭제하겠다.)
      }
    });
  };
  for (var _i3 = 0; _i3 < delBtn.length; _i3++) {
    _loop2(_i3);
  }
  function press(f) {
    if (f.keyCode == 13) {
      //javascript에서는 13이 enter키를 의미함
      formname.submit(); //formname에 사용자가 지정한 form의 name입력
    }
  }

  // Reset the text content of asterionBtn and sizeBtn to their default values
  asterionBtn.innerHTML = '별점 <i class="fas fa-angle-down"></i>';
  asterionBtn.style.fontSize = '';
  asterionBtn.style.border = '';
  asterionBtn.style.width = '60px';
  sizeBtn.innerHTML = '사이즈 <i class="fas fa-angle-down"></i>';
  sizeBtn.style.fontSize = '';
  sizeBtn.style.border = '';

  // The rest of your code here...
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","디테일페이지/js/detail.js"], null)
//# sourceMappingURL=/detail.a2e65d35.js.map