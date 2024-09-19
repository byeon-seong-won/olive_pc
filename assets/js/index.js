

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
const txtItems = document.querySelectorAll(".txt-area li");
const imgItems = document.querySelectorAll(".img-area > li");
let currentIndex = 0;
let imgindx = 0;
const totalItems = txtItems.length;
const interval = 4000; 

function showNext() {
  txtItems[currentIndex].classList.remove("active");
  imgItems[imgindx].classList.remove("active");
  currentIndex++;
  imgindx++;

  if (currentIndex === 5) {
    for (let i = 0; i < 5; i++) {
      txtItems[i].classList.add("hidden");
      txtItems[i + 5].classList.remove("hidden");
    }
  }
  if (currentIndex === totalItems) {
    for (let i = 0; i < 5; i++) {
      txtItems[i].classList.remove("hidden");
      txtItems[i + 5].classList.add("hidden");
    }
    currentIndex = 0;
  }
  if (imgindx === imgItems.length) {
    imgindx = 0;
  }
  txtItems[currentIndex].classList.add("active");
  imgItems[imgindx].classList.add("active");

  timer = setTimeout(showNext, interval);
}


timer = setTimeout(showNext, interval);












//footer select
$('.btn-select').click(function() {
  $('.select-list').toggleClass('display');
})
