// 검색창 애니메이션
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
})

// 상단뱃지 숨기기,애니메이션
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

//window는 웹브라우저, 뷰포트 정도로 생각하면 된다.
window.addEventListener('scroll', _.throttle(function() {
  //배지 숨기기
  //gsap.to(요소, 지속시간, 옵션(객체));
  if(window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    //TO TOP버튼 보이기
    gsap.to(toTopEl, 0.3, {
      x: 0,
    });

  } else {
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //TO TOP버튼 숨기기
    gsap.to(toTopEl, 0.3, {
      x: 100,
    });
  }
}, 300));
// _.throttle(함수, 시간(밀리세커드))



//TO TOP버튼으로 상단위치 하기
toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.5, {
    scrollTo: 0,
  })
})



//컵등장 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
const moving = gsap.timeline()

fadeEls.forEach(function(fadeEl) {
  moving.to(fadeEl, 0.7, {
    // delay: (index + 1) * 0.7,
    opacity: 1,
  })
})

// 스와이퍼
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: {
      delay: 2000
  },
  loop: true,
});
//new Swiper('요소', 옵션(객체))

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 갯수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복
  autoplay: {    //자동재생
    delay: 4000
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 
  },
  navigation: {
    prevEl:'.promotion .swiper-prev', //이전 버튼 선택
    nextEl:'.promotion .swiper-next' //다음 버튼 선택
  }
});
//swiper 함수를 사용하면 활성화된 슬라이드(보여지는)는
//swiper-slide-active라는 클래스가 생긴다.

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})


//프로모션 숨기기,보이기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion
  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
})



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


// gsap.to(요소, 시간, 옵션)
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), { 
    y: size,
    repeat: -1, //무한반복
    yoyo: true, //원래상태로 돌아가기
    ease: Power1.easeInOut, //애니메이션 동작 형태
    delay: random(0, delay),
  })
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(spyEl=> {
  new ScrollMagic
   .Scene({       //보여짐을 감시하는 메소드
     triggerElement: spyEl,    //보여짐 여부를 감시할 요소를 지정
     triggerHook: 0.8,
   })
   .setClassToggle(spyEl, 'show')
   .addTo(new ScrollMagic.Controller()); 
})


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();



