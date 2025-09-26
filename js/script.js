
// 데스크탑 
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