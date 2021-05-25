const startTime = new Date();
const maxTimeSecs = 30000;

function updateClock() {
    const clockContainer = document.querySelector('.clock');
    const deltaSecs = Math.round((new Date() - startTime) / 1000);
    const secsLeft = maxTimeSecs - deltaSecs;
    clockContainer.innerText = secsLeft;
}

setInterval(updateClock, 1000);