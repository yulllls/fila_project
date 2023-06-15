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
const sizeBtn = document.querySelector('.size_btn')
const sizeListChk = document.querySelector('.size_list_chk')

asterionList.style.display = 'none'
sizeListChk.style.display = 'none'

let isListVisible = false;
let sizeListChkClick = false;

asterionBtn.addEventListener('click', () => {
  if (isListVisible) {
    asterionList.style.display = 'none'
    isListVisible = false;
  } else {
    asterionList.style.display = 'block'
    sizeListChk.style.display = 'none'
    isListVisible = true;
    sizeListChkClick = false;
  }
})

sizeBtn.addEventListener('click', () => {
  if (sizeListChkClick) {
    sizeListChk.style.display = 'none'
    sizeListChkClick = false;
  } else {
    sizeListChk.style.display = 'block'
    asterionList.style.display = 'none'
    sizeListChkClick = true;
    isListVisible = false;
  }
})

const asterionListtAll = document.querySelectorAll('.asterion_list p')
const alEx = document.querySelector('.al_ex')

asterionListtAll.forEach(asterionListtAlls => {
  asterionListtAlls.addEventListener('click', () => {
    // Remove the fa-check-square class from any other elements that have it
    asterionListtAll.forEach(el => {
      const checkedIcon = el.querySelector('i.fa-check-square');
      if (checkedIcon) {
        checkedIcon.classList.replace('fa-check-square', 'fa-square');
        el.style.color = '';
      }
    });

    // Toggle the fa-check-square and fa-square classes on the clicked element
    const icon = asterionListtAlls.querySelector('i.fa-square');
    if (icon) {
      icon.classList.replace('fa-square', 'fa-check-square');
      asterionListtAlls.style.color = '#002053';
    } else {
      const checkedIcon = asterionListtAlls.querySelector('i.fa-check-square');
      if (checkedIcon) {
        checkedIcon.classList.replace('fa-check-square', 'fa-square');
        asterionListtAlls.style.color = '';
      }
    }
  });
});

alEx.addEventListener('click', () => {
  const checkedItem = document.querySelector('.fa-check-square');
  if (checkedItem) {
    const text = checkedItem.parentNode.textContent.trim();
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


const slEx = document.querySelector('.sl_ex')
const slAll = document.querySelectorAll('.sl_all')


  slAll.forEach(slAlls => {
    slAlls.addEventListener('click', () => {
      // Reset all slAll elements to their default style and remove the 'selected' class
      slAll.forEach(elem => {
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
  
  slEx.addEventListener('click', () => {
    sizeListChk.style.display = 'none';
    
    // Find the selected slAll element
    const selectedSlAll = document.querySelector('.sl_all.selected');
    
    // Update the text of the sizeBtn element with the text of the selected slAll element
    if (selectedSlAll) {
      sizeBtn.textContent = selectedSlAll.textContent;
      sizeBtn.style.border = '1px solid red';
    }
  });



  document.querySelector('.add_btn').addEventListener('click', function() {
    // add_btn = button 을 (클릭 했을때, 동작한다) {}
    const reviewComment = document.querySelector('.review_comment') // 변수생성
    const reviewCommentList = document.querySelector('.review_comment_list') // 변수 생성
    const asterionBtn = document.querySelector('.asterion_btn');// 방금 생성
    const sizeBtn = document.querySelector('.size_btn');//방금 생성 
    const checkedItem = document.querySelector('.fa-check-square');
    const selectedSlAll = document.querySelector('.sl_all.selected');

    if (!checkedItem || !selectedSlAll) {
      alert('별점과 사이즈를 체크해주세요');
      return;
    }

    let newP = document.createElement('p') // newP라는 변수를 만들면서 p 태그를 생성
    let newText = document.createTextNode(reviewComment.value)
    // subject input에서 들어오는 값을 TEXT로 받겠다.

    let asterionText = document.createElement('span');
    asterionText.textContent = asterionBtn.textContent;
    let sizeText = document.createElement('span');
    sizeText.textContent = sizeBtn.textContent;
  
    // Append the new elements to the newP element
    newP.appendChild(asterionText);
    newP.appendChild(sizeText);
    
    newP.appendChild(newText) 
    document.body.appendChild(newP)

    let newSpan = document.createElement('span')
    let spanText = document.createTextNode('X')
    
    newSpan.appendChild(spanText)
    newP.appendChild(newSpan)
    newSpan.setAttribute('class', 'delete')

        // Create new elements to display the current text content of asterionBtn and sizeBtn


    reviewCommentList.insertBefore(newP, reviewCommentList.children[0])
    // insertBefore = 전에 newP를 넣겠다. (추가되는 걸 맨위로)
    // 추가 눌렀을때 텍스트가 제일 위로 올라온다고 생각하면됨.
    // 최근 작성된것 바로 이전에 등록하겠다.
    
    // 서브젯리스트 중 첫번째 자식 before에다가 insert해라라는 의미.
    // insertBefore(추가되는 노드, 기준 노드)
    // X라는 스판버튼을 눌렀을때 부모,나자신 지워선 안되고
    // 부모 위의 조상을 지워야한다.

    reviewCommentList.appendChild(newP)
    reviewComment.value = '' //  서브젯 벨류를 초기화 시킨다.
    reviewComment.focus()
    // 서브젯에 다시 포커스를 했을때 이전 적은것을 지우고 다시실행

    let delBtn = document.querySelectorAll('.delete')

    //★★ 중요함 ★★ 자주 사용되는 코드이다. ★★
    for (let i=0; i<delBtn.length; i++) {
      delBtn[i].addEventListener('click', function() {
        if (delBtn[i].parentNode.parentNode) {
          // 만약 부모의 부모가 존재한다면 
          this.parentNode.parentNode.removeChild(this.parentNode)
          // parentNode * 2번이면 subjectList를 삭제하는것
          // 부모를 지울려면 부모의 부모까지 올라가야만 지울 수 있음.
          // 이게 전제조건이다.
          // 답변을 줘야한다면 만들 것을 또 생성 하면됨.

          // 나자신.부모.부모.자식 삭제(나자신의 부모를 삭제하겠다.)
        }
      })
    } 
    function press(f) {
      if(f.keyCode == 13) { //javascript에서는 13이 enter키를 의미함
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
  }) 


