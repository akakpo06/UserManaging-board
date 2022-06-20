let date = (new Date()).toLocaleDateString('fr-FR' , {
    year: "numeric",
    month:"long",
    day:"2-digit",
});

document.getElementById("date").textContent = date;

function showtime() {
    let time = (new Date()).toLocaleTimeString('fr-FR' , {
        hour: "numeric",
        minute:"numeric",
        second:"2-digit"
    });
    document.getElementById("time").textContent = time
}
 setInterval( "showtime()", 1);