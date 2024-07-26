
// ---------------- json파일 가져오기 ---------------- 



// 1) 요즘 주목 받는 상품
let pop_index = 0;
let pop_page_idx = 1;

getpopData(pop_index);

function getpopData(idx) {
  fetch('./assets/data/sc-pop.json')
  .then(res=>res.json())
  .then(json=>{
      data = json.results;
      const newData = [];

      newData.push(...data.slice(idx, idx + 2));
      pophtmlEl=``;
      newData.forEach( popEl => {
        pophtmlEl+= 
          `
            <li class="prd-item">
              <a href="#" class="link"></a>
              <div class="thumb-wrap">
                <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/${popEl.product.itemImage}" alt="${popEl.product.itemName}">
              </div>
              <div class="info-wrap">
                <p class="subtitle">${popEl.product.itemName}</p>
                <div class="price-info">
                  <span class="del"><span>17,000</span>원</span>
                  <span class="price"><span>8,910</span>원~</span>
                  <button></button>
                </div>
                <ul class="sale-box">
                  <li class="sale">세일</li>
                  <li class="coupon">쿠폰</li>
                  <li class="gift">증정</li>
                  <li class="today">오늘드림</li>
                </ul>
              </div>
            </li>
          `
      });
      $('#pop-list').html(pophtmlEl);
      newData.push(...data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

$('.pop-more').click(function() {
  pop_index = pop_index + 2;
  pop_page_idx++;

  if(pop_page_idx > 20) {
    pop_page_idx = 1;
  }
  if(pop_index > 38) {
    pop_index = 0;
  }

  getpopData(pop_index);
  $('.sc-pop .curr').html(pop_page_idx);
})








// 2) 고객님을 위한 추천 상품
let cus_index = 0;
let cus_page_idx = 1;

getcusData(cus_index);

function getcusData(idx) {
  fetch('./assets/data/sc-custo.json')
  .then(res=>res.json())
  .then(json=>{
      data = json.results;
      const newData = [];

      newData.push(...data.slice(idx, idx + 2));

      cushtmlEl=``;
      newData.forEach( cusEl => {
        cushtmlEl+= 
          `
            <li class="prd-item">
              <a href="#"></a>
              <div class="thumb-wrap">
                <img src="https://image.oliveyoung.co.kr/uploads/images/goods/400/${cusEl.product.itemImage}" alt="${cusEl.product.itemName}">
              </div>
              <div class="info-wrap">
                <p class="subtitle">${cusEl.product.itemName}</p>
                <div class="price-info">
                  <span class="del"><span>17,000</span>원</span>
                  <span class="price"><span>8,910</span>원~</span>
                  <button></button>
                </div>
                <ul class="sale-box">
                  <li class="sale">세일</li>
                  <li class="coupon">쿠폰</li>
                  <li class="gift">증정</li>
                  <li class="today">오늘드림</li>
                </ul>
              </div>
            </li>
          `
      });
      $('#custo-list').html(cushtmlEl);
      newData.push(...data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}

$('.custo-more').click(function() {
  cus_index = cus_index + 2;
  cus_page_idx++;

  if(cus_page_idx > 5) {
    cus_page_idx = 1;
  }
  if(cus_index > 8) {
    cus_index = 0;
  }

  getcusData(cus_index);
  $('.sc-custo .curr').html(cus_page_idx);
})










