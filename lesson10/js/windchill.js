let t = document.getElementById('valCurrent').innerHTML;
let s = document.getElementById('valWind').innerHTML;

/*Establish temperature and windseed requirements*/
if ((t <= 50) && (s >= 3)) {
  /*Establish variable "f" to hold value of wind chill calculation using "t" and "s" values*/
  let f = (t*0.6215+35.74)-(35.75*Math.pow(s,.16));
  /*If requirements are met, display "f" wind chill factor calculation to span id "windChill", rounded to integer.*/
  document.getElementById('windChill').innerHTML = Math.round(f);
}

/*If  requirements are NOT met, display "N/A" to span id "windChill"*/
else {
  document.getElementById('windChill').innerHTML = 'N/A';
};