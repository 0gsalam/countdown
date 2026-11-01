function updateCounter() {
    //Constants of the timers
    const now = new Date();
    const gtavi = new Date(2026,10,19,0,0,0);
    const dif = gtavi - now;

    //Checks if the game is released
    if(dif <= 0)
    {
        document.getElementById('gta').textContent = 'Released!';
        return 0;   
    }
    //Calculating time
    const day = Math.floor(dif / (1000 * 60 * 60) / 24);
    const hours = String(Math.floor(dif / (1000 * 60 * 60) % 24)).padStart(2, '0');
    const minute = String(Math.floor(dif / (1000 * 60) % 60)).padStart(2, '0');
    const second = String(Math.floor(dif / 1000 % 60)).padStart(2, '0');
    
    // console.log(`${second} seconds`); 
    // console.log(`${minute} minutes`);
    // console.log(`${hours} hours`);
    // console.log(`${day} days`);

    //Updating the HTML element
    document.getElementById('gta').textContent = `${day}:${hours}:${minute}:${second}`;
}

//1. Run
updateCounter();

//2. Interval
setInterval(updateCounter, 1000);

//3. Icons
lucide.createIcons();