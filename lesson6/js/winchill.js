function () {
    let s= 5;
    let t = 25;
    let factor = windChill(t, s);
    document.getElementById('outputDiv');
    }
    
    function windChill(t, s) {
    let factor = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    return factor;
    }