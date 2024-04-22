let totalSeconds;
let timer;

function start() {
    totalSeconds = calculateTotalSeconds();

    if (totalSeconds <= 0) {
        alert("Please enter a valid time!");
        return;
    }

    timer = setInterval(updateTimer, 1000);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    document.getElementById("hours").value = 0;
    document.getElementById("min").value = 0;
    document.getElementById("sec").value = 0;
    clearInterval(timer);
}

function calculateTotalSeconds() {
    const hours = Number(document.getElementById("hours").value);
    const min = Number(document.getElementById("min").value);
    const sec = Number(document.getElementById("sec").value);
    
    return hours * 3600 + min * 60 + sec;
}

function updateTimer() {
    if (totalSeconds <= 0) {
        clearInterval(timer);
        alert("Time's up!");
        return;
    }

    const hours = Math.floor(totalSeconds / 3600);
    const min = Math.floor((totalSeconds % 3600) / 60);
    const sec = totalSeconds % 60;

    document.getElementById("hours").value = hours;
    document.getElementById("min").value = min;
    document.getElementById("sec").value = sec;

    totalSeconds--;
}
