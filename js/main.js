const deadlineV1 = '2021-04-05';
const deadlineV2 = '2021-04-12';
const change = '2341';

setClockV1('.timer__v1', deadlineV1);
setClockV2('.timer__v2', deadlineV2);

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const days = Math.floor((t / (1000 * 60 * 60 * 24)));
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60) % 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    };
}

function getZero(num) {
    if (num >= 0 && num < 10) {
        return '0' + num
    }
    return num
}

function setClockV1(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days-v1');
    const hours = timer.querySelector('#hours-v1');
    const minutes = timer.querySelector('#minutes-v1');
    const seconds = timer.querySelector('#seconds-v1');
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

function setClockV2(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days-v2');
    const hours = timer.querySelector('#hours-v2');
    const minutes = timer.querySelector('#minutes-v2');
    const seconds = timer.querySelector('#seconds-v2');
    const timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

if (change) {
    $('.top').addClass('activated');
    $('.bottom__wrap').addClass('deactivated');
} else if (!change) {
    $('.bottom__wrap').addClass('activated-b');
    $('.top').addClass('deactivated');
}
