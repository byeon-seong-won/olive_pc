

  // top 버튼 클릭시
  document.getElementById('topBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  });


  

  // 스크롤 시 top 버튼
  let lastScroll = 0;
  $(window).scroll(function(){
      var curr = $(this).scrollTop();
      var visual_top = $('#visual').offset().top;
      if(curr > visual_top) {
        $('#topBtn').addClass('on');
      } else if(curr <= visual_top) {
        $('#topBtn').removeClass('on');
      } 
  })




// 메인 비주얼
var visualSlide = new Swiper('.visual-slide', {
  slidesPerView: "auto",
  effect : "fade",
  spaceBetween: 0,
  autoplay : true,
  loop: true,
  speed: 900,
  pagination: {
    el: ".sc-visual .fraction",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      return `<span class="curr">${current}/</span>
              <span class="total">${total}</span>`;
    }
  },
  navigation: {
    nextEl: ".sc-visual .navi-next",
    prevEl: ".sc-visual .navi-prev",
  },
});

var main_autoplay = visualSlide.params.autoplay.enabled;
document.getElementById('m-play').addEventListener('click', function() {
  if(main_autoplay) {
    $(this).addClass('click');
    visualSlide.autoplay.stop(); 
    main_autoplay = false;
  } else {
    $(this).removeClass('click');
    visualSlide.autoplay.start(); 
    main_autoplay = true;
  }
});





// 카테고리 
// $('.cate-item a').hover(function() {
//   $(this).parent('li').addClass('on').siblings().removeClass('on');
// }, function() {
//   $('.cate-item').removeClass('on');
// })









// 인기행사
var eventSlide = new Swiper('.event-slide', {
  slidesPerView: "auto",
  spaceBetween: 0,
  loop: true,
  speed: 900,
  pagination: {
    el: ".sc-event .swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      var paginationHtml = '';
      for (var i = 1; i <= total; i++) {
        if (i === current) {
          paginationHtml += '<span class="swiper-pagination-bullet swiper-pagination-bullet-active">' + i + '</span>';
        } else {
          paginationHtml += '<span class="swiper-pagination-bullet">' + i + '</span>';
        }
      }
      return paginationHtml;
    }
  },
  on : {
    slideChange: function() {
      var Idx = this.realIndex;
      $('.sc-event .page-item').eq(Idx).addClass('on').siblings().removeClass('on');
    },
  },
  navigation: {
    nextEl: ".sc-event .navi-next",
    prevEl: ".sc-event .navi-prev",
  },
});
$('.sc-event .page-item').click(function(e) {
    e.preventDefault();
    var Idx = $(this).index();
    eventSlide.slideTo(Idx);
})




// 오직 올리브영
var oliveSlide = new Swiper('.olive-slide', {
  slidesPerView: "auto",
  spaceBetween: 15,
  loop: true,
  speed: 900,
  pagination: {
    el: ".sc-olive .swiper-pagination",
  },
  on : {
    slideChange: function() {
      var Idx = this.realIndex;
      $('.sc-olive .page-item').eq(Idx).addClass('on').siblings().removeClass('on');
    }
  },
});
$('.sc-olive .page-item').click(function(e) {
  e.preventDefault();
  var Idx = $(this).index();
  oliveSlide.slideTo(Idx);
})





// 이상품어때요
var recomSlide = new Swiper('.recom-slide', {
  slidesPerView: "auto",
  spaceBetween: 15,
  loop: true,
  speed: 900,
  pagination: {
    el: ".sc-recom .swiper-pagination",
  },
  on : {
    slideChange: function() {
      var Idx = this.realIndex;
      $('.sc-recom .page-item').eq(Idx).addClass('on').siblings().removeClass('on');
    }
  },
  navigation: {
    nextEl: ".sc-recom .navi-next",
    prevEl: ".sc-recom .navi-prev",
  },
});
$('.sc-recom .page-item').click(function(e) {
  e.preventDefault();
  var Idx = $(this).index();
  recomSlide.slideTo(Idx);
})







// 주목해야할브랜드
var brTabSlide = new Swiper('.sc-brand .group-tab', {
  spaceBetween:8,
  slidesPerView:'auto'
})

var brandSlide = new Swiper('.sc-brand .brand-slide', {
  slidesPerView: 1,
  loop: true,
  speed: 900,
  navigation: {
    nextEl: ".brand-slide .navi-next",
    prevEl: ".brand-slide .navi-prev",
  },
  on : {
    slideChange: function() {
      var Idx = this.realIndex;
      $('.sc-brand .tab-item').eq(Idx).addClass('on').siblings().removeClass('on');
      brTabSlide.slideTo(Idx);
    }
  }
});

$('.sc-brand .tab-item a').click(function(e) {
  e.preventDefault();
  var index = $(this).parent('li').index();
  brandSlide.slideTo(index+1, 500);
})








// 조회 급상승

// for (let index = 0; index < 10; index++) {
//   setTimeout(() => {

//     if(index == 5) {
//       $('.prd-box li').removeClass('hidden');
//       $('.prd-box li').slice(0,5).addClass('hidden');
//     } else if(index == 0) {
//       $('.prd-box li').removeClass('hidden');
//       $('.prd-box li').slice(6,9).addClass('hidden');
//     }

//     $('.prd-box li').removeClass('active');
//       $('.prd-box li').eq(index).addClass('active');


//   }, 1000*index)
  
// }


document.addEventListener("DOMContentLoaded", () => {
  const txtItems = document.querySelectorAll(".txt-area li");
  const pageItems = document.querySelectorAll(".page-item");
  const updateButton = document.querySelector(".update");
  const totalItems = txtItems.length;
  let currentIndex = 0;
  const interval = 1000; // 1초
  let timer;

  function updatePageIndicator() {
      if (currentIndex >= 0 && currentIndex < 5) {
          pageItems[0].classList.add("on");
          pageItems[1].classList.remove("on");
      } else if (currentIndex >= 5 && currentIndex < 10) {
          pageItems[0].classList.remove("on");
          pageItems[1].classList.add("on");
      }
  }

  function showNext() {
      // 현재 active 제거
      txtItems[currentIndex].classList.remove("active");

      // 다음 인덱스로 이동
      currentIndex++;

      if (currentIndex === 5) {
          // 5번에서 6번으로 넘어가며 6~10번 표시
          for (let i = 0; i < 5; i++) {
              txtItems[i].classList.add("hidden");
              txtItems[i + 5].classList.remove("hidden");
          }
      }

      if (currentIndex === totalItems) {
          // 마지막 항목에 도달하면 처음으로 돌아가기
          for (let i = 0; i < 5; i++) {
              txtItems[i].classList.remove("hidden");
              txtItems[i + 5].classList.add("hidden");
          }
          currentIndex = 0;
      }

      // 새 active 추가
      txtItems[currentIndex].classList.add("active");

      // 페이지 인디케이터 업데이트
      updatePageIndicator();

      timer = setTimeout(showNext, interval);
  }

  function moveToIndex(index) {
      // 현재 active 제거
      txtItems[currentIndex].classList.remove("active");

      // 클릭된 인덱스로 이동
      currentIndex = index;

      // 클릭된 인덱스 활성화
      txtItems[currentIndex].classList.add("active");

      // 6번 이상이면 6~10번 표시
      if (currentIndex >= 5) {
          for (let i = 0; i < 5; i++) {
              txtItems[i].classList.add("hidden");
              txtItems[i + 5].classList.remove("hidden");
          }
      } else {
          for (let i = 0; i < 5; i++) {
              txtItems[i].classList.remove("hidden");
              txtItems[i + 5].classList.add("hidden");
          }
      }

      // 페이지 인디케이터 업데이트
      updatePageIndicator();

      // 타이머 재설정
      clearTimeout(timer);
      timer = setTimeout(showNext, interval);
  }

  txtItems.forEach((item, index) => {
      item.addEventListener("click", () => {
          moveToIndex(index);
      });
  });

  pageItems[0].addEventListener("click", () => {
      moveToIndex(0);
  });

  pageItems[1].addEventListener("click", () => {
      moveToIndex(5);
  });

  updateButton.addEventListener("click", () => {
      moveToIndex(0);
  });

  timer = setTimeout(showNext, interval);
});











//footer select
$('.btn-select').click(function() {
  $('.select-list').toggleClass('display');
})
