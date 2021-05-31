<template>
  <div class="">
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-12 MarginTopImg">
            <img src="../assets/logo.jpg" class="img-fluid img" alt="">
        </div>
        <div class="col-12">
            <h1>Sobre Nós</h1>
        </div>
        <div class="col-12">
            <p>Javafox drivers é uma escola de condução criada em 2021,
              por Ibrano Raposo,Juliana Soba e José Wilmy,com intuito e objetivo de formar melhores automobilistas e condutores.
              É 100% confiável e tem como ponto forte a certificação de alunos ,
              a garantia de exames práticos e a aprendizagem segura .</p>
        </div>
        <div class="col-12">
            <div id="map" class="mb-5"></div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { API_KEY } from "../components/API_KEY";
import {Loader} from 'google-maps';
import Footer from '@/components/Home/Footer'

const loader = new Loader(API_KEY);
export default {
    name:'Sobre_Nos',
    components:{
        Navbar,
        Footer
    },
    mounted() {
    loader.load().then(function (google) {
      var myLatlng = new google.maps.LatLng(-8.8243033, 13.2444611);
      var mapOptions = {
        zoom: 13,
        center: myLatlng,
        scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var marker = new google.maps.Marker({
        position: myLatlng,
        title: "Hello World!"
      });

      // To add the marker to the map, call setMap();
      marker.setMap(map);
    });
  }
}
</script>

<style scoped>
.img{
    /* margin-top: -80px; */
    width: 120px;
}
.MarginTopImg{
    margin-top: 70px !important;
  }
  #map {
    position: relative;
    width: 100%;
    height: calc(100vh - 60px);
}
@media only screen and (max-width: 650px) {
  .MarginTopImg{
    margin-top: 70px !important;
  }
}
</style>
