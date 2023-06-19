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


import info from './data.js';


    const names = document.querySelector('.name')
    const birth = document.querySelector('.birth_date')
    const id = document.querySelector('.id')
    const psw = document.querySelector('.password_date')
    const psw_chk = document.querySelector('.password_chk')
    const nicknames = document.querySelector('.nickname')
    const hreflogin = document.querySelector('.href_log')
    const passwordtext = document.querySelector('.password_date_box li')
    const idtext = document.querySelector('.id_box li')
    const pswtext = document.querySelector('.password_chk_box li')
    const nicktext = document.querySelector('.nickname_box li')
    const nametext = document.querySelector('.name_box li')
    const birthtext = document.querySelector('.birth_date_box li')
    const eye = document.querySelector('.password_date_box .far')

    for (let i = 0; i < info.length; i++){

    let namesValue = 'false'
    let birthValue = 'false'
    let idtextValue = 'false'
    let passwordtextValue = 'false'
    let pswValue = 'false'
    let nicknamesValue = 'false'

    names.addEventListener('change', checkName)
    birth.addEventListener('change', checkBirth)
    id.addEventListener('change', checkId)
    psw.addEventListener('change', checkPsw)
    psw_chk.addEventListener('change', comparePsw)
    nicknames.addEventListener('change', checkNick)
    eye.addEventListener('click', clickEye)


    function clickEye(event) {
      if (psw.type === 'password') {
        psw.type = 'text'
        eye.classList.remove('fa-eye-slash')
        eye.classList.add('fa-eye')
      } else {
        psw.type = 'password'
        eye.classList.remove('fa-eye')
        eye.classList.add('fa-eye-slash')
      }
    }

 

    function checkName() {
      if (names.value === '') {
        nametext.innerHTML = '한글, 영문 2자 이상'
        nametext.style.color = '#888888'
        namesValue = 'false'
      } else if (names.value.length < 1 || names.value.length > 20) {
        nametext.innerHTML = '이름을 다시 입력해주세요.'
        nametext.style.color = 'red'
        namesValue = 'false'
      } else {
        nametext.innerHTML = '확인 되었습니다.'
        nametext.style.color = 'blue'
        namesValue = 'true'
      }

    }

    function checkBirth() {
      if (birth.value === '') {
        birthtext.innerHTML = '생년월일 8자리 입력'
        birthtext.style.color = '#888888'
        birthValue = 'false'
      } else if (birth.value.length < 8 || birth.value.length > 8) {
        birthtext.innerHTML = '생년월일 8자리를 다시 확인해주세요.'
        birthtext.style.color = 'red'
        birthValue = 'false'
      } else {
        birthtext.innerHTML = '확인 되었습니다.'
        birthtext.style.color = 'blue'
        birthValue = 'true'
      }
    }

    function checkId() {
      if (id.value === '') {
        idtext.innerHTML = '영문 또는 숫자를 이용해 6~15자로 입력'
        idtext.style.color = "#888888";
        idtextValue = 'false'
      } else if (id.value.length < 6 || id.value.length > 15) {
        idtext.innerHTML = '사용할 수 없는 아이디입니다. 다시 입력해주세요.'
        idtext.style.color = "red";
        idtextValue = 'false'

      } else if (info[i].id === id.value){
        idtext.innerHTML = '이미 등록 된 아이디입니다. 다시 입력해주세요.'
        idtext.style.color = "red";
        idtextValue = 'false'
      }
      
      else {
        idtext.innerHTML = '사용할 수 있는 아이디입니다.'
        idtext.style.color = "blue";
        idtextValue = 'true'
      }
    }



    function checkPsw() {
      if (psw.value === '') {
        passwordtext.innerHTML = '8 ~ 20자 영문, 숫자, 특수문자 포함 입력'
        passwordtext.style.color = "#888888";
        passwordtextValue = 'false'
      } else if (psw.value.length < 8 || psw.value.length > 20) {
        passwordtext.innerHTML = '사용할 수 없는 비밀번호 입니다.'
        passwordtext.style.color = 'red';
        passwordtextValue = 'false'
      } else {
        passwordtext.innerHTML = '사용할 수 있는 비밀번호입니다.'
        passwordtext.style.color = "blue";
        passwordtextValue = 'true'

      }

    }

    function comparePsw() {
      /*  if (psw_chk.value === '') {
         return; //값을 충족하지 않으면 아래 자바스크립트를 읽지 않고 리턴으로 맨위로 올라간다/ 즉 아래 코드는 읽지않음
       } */
      if (psw.value === '') {
        pswtext.innerHTML = '비밀번호와 동일하게 입력해주세요'
        pswtext.style.color = '#888888'
        pswValue = 'false'
      } else if (psw.value === psw_chk.value) {
        pswtext.innerHTML = '입력한 비밀번호와 일치합니다'
        pswtext.style.color = 'blue'
        pswValue = 'true'
      } else {
        pswtext.innerHTML = '비밀번호와 동일하게 입력해주세요'
        pswtext.style.color = 'red'
        pswValue = 'false'
      }
    }

    function checkNick() {
      if (nicknames.value === '') {
        nicktext.innerHTML = '한글, 영문 2~15자 입력'
        nicktext.style.color = '#888888'
        nicknamesValue = 'false'
      } else if (nicknames.value.length < 2 || nicknames.value.length > 15) {
        nicktext.innerHTML = '닉네임을 다시 입력해주세요'
        nicktext.style.color = 'red'
        nicknamesValue = 'false'
      } else if (info[i].nicknames === nicknames.value){
        nicktext.innerHTML = '이미 등록 된 닉네임입니다. 다시 입력해주세요.'
        nicktext.style.color = 'red'
        nicknamesValue = 'false'
      } else {
        nicktext.innerHTML = '사용할 수 있는 닉네임입니다.'
        nicktext.style.color = 'blue'
        nicknamesValue = 'true'
      }
    }



    hreflogin.addEventListener('click', function (event) {

      if (namesValue !== 'true' || birthValue !== 'true' || idtextValue !== 'true' || passwordtextValue !==
        'true' || pswValue !== 'true' || nicknamesValue !== 'true') {
        event.preventDefault();
        alert('필수항목을 전부 입력해주세요.')
      } else {
        alert('회원가입을 축하드립니다!')
      }
    })
  }

  function sample6_execDaumPostcode() {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var addr = ''; // 주소 변수
        var extraAddr = ''; // 참고항목 변수

        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
          addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
          addr = data.jibunAddress;
        }

        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if (data.userSelectedType === 'R') {
          // 법정동명이 있을 경우 추가한다. (법정리는 제외)
          // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          // 건물명이 있고, 공동주택일 경우 추가한다.
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')';
          }
          // 조합된 참고항목을 해당 필드에 넣는다.
          document.getElementById("sample6_extraAddress").value = extraAddr;

        } else {
          document.getElementById("sample6_extraAddress").value = '';
        }

        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById('sample6_postcode').value = data.zonecode;
        document.getElementById("sample6_address").value = addr;
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("sample6_detailAddress").focus();
      }
    }).open();
  }

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
  
  