<template>
  <div>
    <button @click="getCurrentAddress">Click to get your current location</button><br><br>
    <div v-show="fetching"><br>Fetching your current location...wait a moment...</div>
    <div v-show="address && !fetching">
      <h1 class="displayResult">Your Current Address:<h6> {{ address }}</h6>
      </h1>
    </div>
      <div id="map"></div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';


export default {
  name: 'CurrentLocation',

  data() {
    return {
      jackyWongKey: "AIzaSyCBJn6oNgEbN5mfNeWrsORdBurfuAYp2-0",
      latitude: null,
      longitude: null,
      address: null,
      fetching: false,
      map: null
    }
  },
  mounted() {

  },
  methods: {
    getCurrentAddress() {
      this.fetching = true

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.address = this.formatAddress(this.latitude, this.longitude);
            this.fetching = false;
            this.showOnMap(this.latitude, this.longitude);
            this.setMarker(this.latitude, this.longitude);
          },
          error => {
            console.log(error.message)
          }
        )
      } else {
        console.log("Your browser does not support geolocation API")
      }
    },
    formatAddress(lat, long) {
      axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=" + this.jackyWongKey)
        .then(response => {
          if (response.data.error_message) {
            console.log(response.data.error_message);
          } else {
            this.address = response.data.results[0].formatted_address;
          }
        })
        .catch(error => {
          console.log(error.message);
        })
    },
    showOnMap(lat, long) {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: long },
        zoom: 15,
        maxZoom: 20,
        minZoom: 3,
        streetViewControl: false,
        mapTypeControl: false
      })
    },
    setMarker(lat, long) {
      const marker = new google.maps.Marker({
        position: { lat: lat, lng: long },
        map: this.map
      });
    }
  }
}
</script>

<style>
.displayResult {
  margin: auto;
  width: 40%;
}

#map {
  position: absolute;
  height: 100%;
  width: 60%;
  left: 20%;
}
</style>

