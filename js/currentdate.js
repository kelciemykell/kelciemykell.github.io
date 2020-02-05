//const options={minute: "numeric", hour: "numeric", day: "numeric", month: "long", }
/*const options= {year:"numeric"};
          
document.getElementById('currentdate').textContent=new Date().toLocaleDateString("en-US", options);
// const modoptions ={ second: "numeric", minute: "numeric", hour: "numeric", day: "numeric", month:"numeric", year: "numeric"};
//document.getElementById('lastModified').textContent=new Date(document.lastModified);
document.getElementById('lastModified').textContent=document.lastModified;
*/

var d = new Date();
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var days = ['Sunday, ','Monday, ','Tuesday, ','Wednesday, ','Thursday, ','Friday, ','Saturday, '];

document.getElementById("currentDate").innerHTML = 
days[d.getDay()] + ' '+ 
d.getDate() +' '+ 
months[d.getMonth()] +' '+ 
d.getFullYear();