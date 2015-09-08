var cerPos = new google.maps.LatLng(-23.6141258,-46.6402754);
var fesPos = new google.maps.LatLng(-23.613387,-46.658125);

var mapCanvas = document.getElementById('map_canvas');
var mapOptions = {
    center: cerPos,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(mapCanvas, mapOptions);

var marker = new google.maps.Marker({
    position: cerPos,
    map: map,
    title: 'Comunidade Messianica Universal'
});

var bcer = document.getElementById("cer");
var bfes = document.getElementById("fes");
var data = document.getElementById("data");
var localtitle = document.getElementById("localtitle");
var localadd = document.getElementById("localadd");

bcer.style.textDecoration = "underline";

google.maps.event.addDomListener(bcer,"click",function() {
    bcer.style.color = "#ffffff";
    bcer.style.textDecoration = "underline";
    bfes.style.color = "#31b0d5";
    bfes.style.textDecoration = "";

    data.innerHTML = "21 de fevereiro de 2015<br>&Agrave;s 16:30 hs.";
    localtitle.innerHTML = "Comunidade Messi&acirc;nica Universal<br>Templo Regional SP<br>";
    localadd.innerHTML = "Rua Dona Ces&aacute;ria Fagundes, 55<br>Mirand&oacute;polis (Pra&ccedil;a da &Aacute;rvore)<br>S&atilde;o Paulo-SP<br>";

    marker.setPosition(cerPos);
    map.panTo(cerPos);
    marker.title = "Comunidade Messianica Universal";
});

google.maps.event.addDomListener(bfes,"click",function() {
    bcer.style.color = "#31b0d5";
    bcer.style.textDecoration = "";
    bfes.style.color = "#ffffff";
    bfes.style.textDecoration = "underline";

    data.innerHTML = "21 de fevereiro de 2015<br>&Agrave;s 18:00 hs.";
    localtitle.innerHTML = "Casa Petra<br>";
    localadd.innerHTML = "Avenida Arat&atilde;s, 1010 - Moema<br>";

    marker.setPosition(fesPos);
    map.panTo(fesPos);
    marker.title = "Casa Petra";
});