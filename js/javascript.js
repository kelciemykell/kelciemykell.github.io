try {
    let options = {
        weekday: "long"
        day: "numeric"
        month: "long"
        year: "numeric"
    };
    document.getElementById("currentdate2").textContent=new Date().toLocaleDateString("en-us", options);
}