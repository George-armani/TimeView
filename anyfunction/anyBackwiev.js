window.onload = function() {
    window.setInterval(function() {
        let date = new Date();

        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();


        let timeocklock = h + ":" + m + ":" + s ;

        document.getElementById("clockView").innerHTML = clock;




    }
    );
}