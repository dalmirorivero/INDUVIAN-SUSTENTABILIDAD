var map=undefined;

function addMarkers(induvian) {
    var infowindow = new google.maps.InfoWindow({
        content: induvian.infoWindow.content
    });
    var myLatlng = new google.maps.LatLng(induvian.lat,induvian.lng);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: induvian.icon,
      title: induvian.title
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    marker.setMap(map);
    //google.maps.event.trigger(map, 'resize');
    /**/
}

function initMap(){
var myLatlng = new google.maps.LatLng(-34.539127,-58.522147);
    var mapOptions = {
        zoom: 15,
        center: myLatlng,
          
        styles: [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#a9a9a9"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f9f9f9"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f9f9f9"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f9f9f9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f9f9f9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ]


    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

  var object = [];       
      object.push({lat:-34.539127,lng:-58.522147, title:'induvian', infoWindow:{content:'<div class="box-card-map"><h1 class="title-card">Induvian</h1><p>Hipólito Yrigoyen 4552, B1604 Florida Oeste, Buenos Aires, Argentina.</p><p><b>Lineas Rotativas</b>:(5411) 4761-0040</p><p><b>Whatsapp</b>:(5411) 15-6758-7892</p></div>'
      },icon:'assets/images/market-pin-sede.png'}); 
      for(var i=0; i<object.length;i++) {
        addMarkers(object[i]);
      }

}



