parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FjWE":[function(require,module,exports) {
var e=document.querySelector(".lnb_menu1"),n=document.querySelector(".lnb_menu2"),t=document.querySelector(".lnb_menu3"),l=document.querySelector(".lnb_menu4"),o=document.querySelector(".blur_filter"),s=document.querySelector(".lnb .lnb_list .women"),d=document.querySelector(".lnb_menu_women"),r=document.querySelector(".lnb .lnb_list .man"),c=document.querySelector(".lnb_menu_man"),i=document.querySelector(".lnb .lnb_list .kids"),u=document.querySelector(".lnb_menu_kids"),y=document.querySelector(".lnb .lnb_list .brand"),a=document.querySelector(".lnb_menu_Brand"),m=document.querySelector(".lnb_menu1 .man"),p=document.querySelector(".lnb_menu1 .kids"),v=document.querySelector(".lnb_menu1 .brand"),b=document.querySelector(".lnb_menu2 .women"),f=document.querySelector(".lnb_menu2 .kids"),q=document.querySelector(".lnb_menu2 .brand"),k=document.querySelector(".lnb_menu3 .women"),S=document.querySelector(".lnb_menu3 .man"),L=document.querySelector(".lnb_menu3 .brand"),_=document.querySelector(".lnb_menu4 .women"),E=document.querySelector(".lnb_menu4 .man"),x=document.querySelector(".lnb_menu4 .kids");s.addEventListener("mouseover",function(){e.style.display="block",o.style.display="block"}),s.addEventListener("mouseout",function(){e.style.display="none",o.style.display="none"}),r.addEventListener("mouseover",function(){n.style.display="block",o.style.display="block"}),r.addEventListener("mouseout",function(){n.style.display="none",o.style.display="none"}),i.addEventListener("mouseover",function(){t.style.display="block",o.style.display="block"}),i.addEventListener("mouseout",function(){t.style.display="none",o.style.display="none"}),y.addEventListener("mouseover",function(){l.style.display="block",o.style.display="block"}),y.addEventListener("mouseout",function(){l.style.display="none",o.style.display="none"}),e.addEventListener("mouseover",function(){e.style.display="block",o.style.display="block"}),e.addEventListener("mouseout",function(){e.style.display="none",o.style.display="none"}),n.addEventListener("mouseover",function(){n.style.display="block",o.style.display="block"}),n.addEventListener("mouseout",function(){n.style.display="none",o.style.display="none"}),t.addEventListener("mouseover",function(){t.style.display="block",o.style.display="block"}),t.addEventListener("mouseout",function(){t.style.display="none",o.style.display="none"}),l.addEventListener("mouseover",function(){l.style.display="block",o.style.display="block"}),l.addEventListener("mouseout",function(){l.style.display="none",o.style.display="none"}),m.addEventListener("mouseover",function(){e.style.display="none",e.style.zIndex="1",n.style.display="block",n.style.zIndex="5"}),p.addEventListener("mouseover",function(){e.style.display="none",e.style.zIndex="1",t.style.display="block",t.style.zIndex="5"}),v.addEventListener("mouseover",function(){e.style.display="none",e.style.zIndex="1",l.style.display="block",l.style.zIndex="5"}),b.addEventListener("mouseover",function(){n.style.display="none",n.style.zIndex="1",e.style.display="block",e.style.zIndex="5"}),f.addEventListener("mouseover",function(){n.style.display="none",n.style.zIndex="1",t.style.display="block",t.style.zIndex="5"}),q.addEventListener("mouseover",function(){n.style.display="none",n.style.zIndex="1",l.style.display="block",l.style.zIndex="5"}),k.addEventListener("mouseover",function(){t.style.display="none",t.style.zIndex="1",e.style.display="block",e.style.zIndex="5"}),S.addEventListener("mouseover",function(){t.style.display="none",t.style.zIndex="1",n.style.display="block",n.style.zIndex="5"}),L.addEventListener("mouseover",function(){t.style.display="none",t.style.zIndex="1",l.style.display="block",l.style.zIndex="5"}),_.addEventListener("mouseover",function(){l.style.display="none",l.style.zIndex="1",e.style.display="block",e.style.zIndex="5"}),E.addEventListener("mouseover",function(){l.style.display="none",l.style.zIndex="1",n.style.display="block",n.style.zIndex="5"}),x.addEventListener("mouseover",function(){l.style.display="none",l.style.zIndex="1",t.style.display="block",t.style.zIndex="5"});var I=document.querySelector(".header"),z=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;z>e?(I.classList.add("fixed"),I.style.top="0px",I.style.backgroundColor=0==e?"transparent":"rgba(0, 0, 0, 0.466)"):I.style.top="-100px",z=e};var g=1,h=49e3,w=document.querySelector(".plus_btn"),C=document.querySelector(".minus_btn"),j=document.querySelector(".number"),A=document.querySelector(".gold");function N(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}w.addEventListener("click",function(){g<9&&(g++,j.textContent=g,A.textContent="".concat(N(g*h),"원"))}),C.addEventListener("click",function(){g>1&&(g--,j.textContent=g,A.textContent="".concat(N(g*h),"원"))});var B,D=document.querySelector(".main_img"),O=["../img/03. 디테일/모델컷1.jpg","../img/03. 디테일/모델컷2.jpg","../img/03. 디테일/모델컷3.jpg","../img/03. 디테일/인터내셔널 그래픽 반팔티1.jpg","../img/03. 디테일/모델컷4.jpg"],Y=0,T=!0;function F(){T&&(D.src=O[Y],Y=(Y+1)%O.length)}B=setInterval(F,2e3);for(var G=document.querySelectorAll(".choice"),H=function(e){G[e].addEventListener("click",function(){D.src=G[e].src,T=!1,clearInterval(B),B=setTimeout(function(){D.src=O[0],T=!0,B=setInterval(F,2e3)},4e3)})},J=0;J<G.length;J++)H(J);for(var K=document.querySelectorAll(".tab_menu .list li"),M=0;M<K.length;M++){var P=K[M].querySelector(".btn");P.addEventListener("click",function(e){e.preventDefault();for(var n=0;n<K.length;n++)K[n].classList.remove("is_on");this.parentNode.classList.add("is_on")})}for(var Q=document.querySelectorAll(".tab_menu2 .list2 li"),R=0;R<Q.length;R++){var U=Q[R].querySelector(".btn");U.addEventListener("click",function(e){e.preventDefault();for(var n=0;n<Q.length;n++)Q[n].classList.remove("is_on");this.parentNode.classList.add("is_on")})}var V=document.querySelector(".asterion_btn"),W=document.querySelector(".asterion_list");W.style.display="none";var X=!1;V.addEventListener("click",function(){X?(W.style.display="none",X=!1):(W.style.display="block",X=!0)});var Z=document.querySelectorAll(".asterion_list p"),$=document.querySelector(".al_ex");Z.forEach(function(e){e.addEventListener("click",function(){var n=e.querySelector("i.fa-square");if(n)n.classList.replace("fa-square","fa-check-square");else{var t=e.querySelector("i.fa-check-square");t&&t.classList.replace("fa-check-square","fa-square")}})}),$.addEventListener("click",function(){var e=document.querySelector(".fa-check-square");if(e){var n=e.parentNode.textContent.trim();V.textContent=n,V.style.fontSize="12px"}else V.textContent="별점.fa-angle-down",V.style.fontSize="";W.style.display="none"});
},{}]},{},["FjWE"], null)
//# sourceMappingURL=/detail.ea4bba9e.js.map