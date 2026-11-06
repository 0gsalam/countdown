//Calculation the time from ms to real time
function timeToDate(time){
    const day = Math.floor(time / (1000 * 60 * 60) / 24);
    const hours = String(Math.floor(time / (1000 * 60 * 60) % 24)).padStart(2, '0');
    const minute = String(Math.floor(time / (1000 * 60) % 60)).padStart(2, '0');
    const second = String(Math.floor(time / 1000 % 60)).padStart(2, '0');

    const format = `${day}:${hours}:${minute}:${second}`;
    return format;
}
//The update of the countdown
function updateCounter() {
    //Constants of the timers
    const now = new Date();
    const gtavi = new Date(2026,10,19,0,0,0);
    const download = new Date(2026,10,10,0,0,0);

    //Checks if the game is released
    if((gtavi - now) <= 0)
    {
        document.getElementById('gta').textContent = 'Released!';
        return 0;   
    }

    document.getElementById('gta').textContent = timeToDate(gtavi-now);
    document.getElementById('download').textContent = timeToDate(download - now);
}


//1. Run
updateCounter();

//2. Interval
setInterval(updateCounter, 1000);

//3. Icons
lucide.createIcons();