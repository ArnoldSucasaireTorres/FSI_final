$(document).ready(function () {
    var map = L.map('map').
        setView([-10.0000000, -76.0000000], 5);

    L.tileLayer('https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=CRUVM7jh3L0GyKshKy4W', {
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        maxZoom: 18
    }).addTo(map);
    //L.control.scale().addTo(map);

    //AMAZONAS
    var amazonas= L.marker([-6.23169, -77.86903], { draggable: false }).addTo(map);
    amazonas.bindPopup("<b>amazonas</b>").openPopup();
    var circle = L.circle([-6.23169, -77.86903],{
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 40000
    }).addTo(map);
    //ÁNCASH
    var ancash = L.marker([-9.52779, -77.52778], { draggable: false }).addTo(map);
    //APURÍMAC
    var apurimac = L.marker([-13.63389, -72.88139], { draggable: false }).addTo(map);
    //AREQUIPA
    var arequipa = L.marker([-16.39889, -71.535], { draggable: false }).addTo(map);
    //AYACUCHO
    var ayacucho = L.marker([-13.15878, -74.22321], { draggable: false }).addTo(map);
    //CAJAMARCA
    var cajamarca = L.marker([-7.16378, -78.50027], { draggable: false }).addTo(map);
    //CALLAO
    var callao = L.marker([-12.05659, -77.11814], { draggable: false }).addTo(map);
    //CUSCO
    var cusco = L.marker([-13.52264, -71.96734], { draggable: false }).addTo(map);
    //HUANCAVELICA
    var huancavelica = L.marker([-12.78261, -74.97266], { draggable: false }).addTo(map);
    //HUÁNUCO
    var huanuco = L.marker([-9.93062, -76.24223], { draggable: false }).addTo(map);
    //ICA
    var ica = L.marker([-14.06777, -75.72861], { draggable: false }).addTo(map);
    //JUNÍN
    var junin = L.marker([-11.15895, -75.99304], { draggable: false }).addTo(map);
    //LA LIBERTAD
    var lalibertad = L.marker([-8.11599, -79.02998], { draggable: false }).addTo(map);
    //-8.11599, -79.02998
    //LAMBAYEQUE
    var lambayeque = L.marker([-6.70111, -79.90611], { draggable: false }).addTo(map);
    //LIMA
    var lima = L.marker([-12.04318, -77.02824], { draggable: false }).addTo(map);
    //LORETO
    var loreto = L.marker([-3.74912, -73.25383], { draggable: false }).addTo(map);
    //MADRE DE DIOS
    var madrededios = L.marker([-12.020019, -70.541291], { draggable: false }).addTo(map);
    //-11.46667, -69.3
    //MOQUEGUA
    var moquegua = L.marker([-17.19832, -70.93567], { draggable: false }).addTo(map);
    //PASCO
    var pasco = L.marker([-10.66748, -76.25668], { draggable: false }).addTo(map);
    //PIURA
    var piura = L.marker([-5.19449, -80.63282], { draggable: false }).addTo(map);
    //PUNO
    var puno = L.marker([-15.8422, -70.0199], { draggable: false }).addTo(map);
    //SAN MARTÍN
    var sanmartin = L.marker([-6.03416, -76.97168], { draggable: false }).addTo(map);
    //TACNA
    var tacna = L.marker([-18.01465, -70.25362], { draggable: false }).addTo(map);
    //TUMBES
    var tumbes = L.marker([-3.56694, -80.45153], { draggable: false }).addTo(map);
    //UCAYALI
    var ucayali = L.marker([-8.37915, -74.55387], { draggable: false }).addTo(map);

});