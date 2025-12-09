// 상세메뉴 펼치기
const items = document.querySelectorAll('.top_menu');
items.forEach(li=>{
  const i = li.querySelector('.sub_menu');
  if (!i) return;

  let timer = null;
  const show = () => {
    clearTimeout(timer); i.style.display = 'block'};
  const hide = () => {
    timer = setTimeout(()=>{i.style.display = 'none'}, 200);};
  li.addEventListener('mouseover',show);
  li.addEventListener('mouseleave',hide);
});

// 스와이퍼
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
