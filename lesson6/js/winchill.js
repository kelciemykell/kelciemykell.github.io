function () {
    document.getElementById('s').textContent = 45;
    document.getElementById('t').textContent = 15;
    if {
        s<=50 && t>=3
    let ws = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    }
    else {
        ws= "N/A"
    }
    
    function windChill(t, s) {
    let factor = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    return factor;
    }