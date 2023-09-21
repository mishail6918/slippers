const deadline = new Date();
deadline.setHours(deadline.getHours() + 4);
deadline.setMinutes(deadline.getMinutes() + 51);
deadline.setSeconds(deadline.getSeconds() + 17);
function getTimeRemaining(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function initializeClock(id, endtime){
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    function updateClock(){
        var t = getTimeRemaining(endtime);
        hoursSpan.innerHTML = t.hours + ':';
        minutesSpan.innerHTML = t.minutes + ':';
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    }
    updateClock();
    var timeinterval = setInterval(updateClock,1000);
}
initializeClock('timer', deadline);

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    autoplay: true,
    thumbs: {
        swiper: swiper,
    },
});

const select = document.querySelectorAll('.select');
select.forEach((element) => {
    const selectTitle = element.querySelector('.select__title');
    const select_labels = element.querySelectorAll('.select__label');
    selectTitle.addEventListener('click', () => {
        if ('active' === element.getAttribute('data-state')) {
            element.setAttribute('data-state', '');
        } else {
            element.setAttribute('data-state', 'active');
        }
    });
    for (let i = 0; i < select_labels.length; i++) {
        select_labels[i].addEventListener('click', (e) => {
            selectTitle.textContent = e.target.textContent;
            element.setAttribute('data-state', '');
        });
    }
});
