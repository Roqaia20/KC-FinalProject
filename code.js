
const circle = document.querySelector('.focus_circle');
const focusFront= document.querySelector('.focus--front');
document.addEventListener('mousemove' , (event) => {
   const mouseX = event.pageX;
   const mouseY = event.pageY;
   focusFront.style = `clip-path: circle(10em at ${mouseX}px ${mouseY}px);`;
    circle.style = `transfoem : translate(${mouseX}px , ${mouseY}px)`;
})


let searchable = [
    'التقبل',
    ' عادات الاداء العالى',
    'عرين الاسد',
    'قوة الطبيعة',
    'طريقة جديدة للتفكير',
    'صاحب الظل الظل الطويل',
    'السندباد الاعمى',
    'قلعة هاول',
    'محاولة متأخرة للبكاء',
    'دلشاد',
    'عبق الجنوب',
    'اركاديا',
];

const searchInput = document.getElementById('my-search');
const searchWrapper = document.querySelector('.my-search-box');
const resultsWrapper = document.querySelector('.my-results');


searchInput.addEventListener('keyup',(e) =>{
    let results =[];
    let input = searchInput.value;
    if(input.length){
        results = searchable.filter((item) => {
            return item.toLowerCase().includes(input.toLowerCase());
        })
    }

    renderResults(results);
});

function renderResults(results){
    if (!results.length){
        return searchWrapper.classList.remove('show')
    }

    let content = results.map((item) => {
        return `<li>${item}</li>`

    }).join('');

    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}



