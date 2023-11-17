<template>
  <div class="SearchLocation">
    <input id="autocomplete" type="text" placeholder="Enter address you interested" v-model="inputAddress"
      @keyup.enter="getGeolocation">
    <br><br>
    <button @click="getGeolocation" type="submit">Search Location</button>
    <br><br>

    <div class="addressSection"> <b>Search History</b>
      <li v-for="address in addressList"
        v-show="(addressList.indexOf(address) < addressListPage * 10) && (addressList.indexOf(address) + 1 > addressListPage * 10 - 10)">
        <input type="checkbox" :id="address.addressId" name="addressItemCheckBox" :value="address.formattedAddress">
        <label :for="address.addressId">{{ address.formattedAddress }}</label>
      </li>
      <div>
        <button class="removebutton" @click="removeSelectedRecord" :disabled="addressList == false">Remove</button>
        <div class="buttonField">
          <button @click="addressListPage--" :disabled="addressListPage == 1">Previous</button>
          <button @click="addressListPage++" :disabled="addressListPage < 1">Next</button>
          <div>
            <p>Page {{ addressListPage }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-show="timeZone">
      <h4>Address</h4>
      <p>{{ inputAddress }}</p>
      <h4>Time Zone</h4>
      <p>{{ timeZone }}</p>
      <h4>Local Time</h4>
      <p>{{ localTime }}</p>
    </div>

    <div id="map"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';


export default {
  name: 'SearchLocation',

  data() {
    return {
      jackyWongKey: "AIzaSyCBJn6oNgEbN5mfNeWrsORdBurfuAYp2-0",
      inputAddress: "",
      tmpLat: null,
      tmpLong: null,
      addressList: [],
      addressIdIncrement: 1,
      addressListPage: 1,
      timeZone: null,
      localTime: null
    }
  },
  mounted() {
    new google.maps.places.Autocomplete(document.getElementById("autocomplete"))
  },
  methods: {
    async getGeolocation() {
      this.inputAddress = document.getElementById("autocomplete").value;
      const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: this.inputAddress,
          key: this.jackyWongKey
        }
      })
      this.tmpLat = response.data.results[0].geometry.location.lat;
      this.tmpLong = response.data.results[0].geometry.location.lng;

      this.addressList.push({ addressId: "address" + this.addressIdIncrement.toString(), formattedAddress: this.inputAddress, lat: this.tmpLat, long: this.tmpLong });
      this.addressIdIncrement++;

      this.showOnMap(this.tmpLat, this.tmpLong);
      for (let address of this.addressList) {
        this.setMarker(address.lat, address.long);
      }
      this.getTimeZoneInfo(this.tmpLat, this.tmpLong);
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
    },
    async getTimeZoneInfo(lat, lng) {
      const apiKey = this.jackyWongKey;
      const apiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${lng}&timestamp=${Math.floor(Date.now() / 1000)}&key=${apiKey}`;
      const response = await axios.get(apiUrl);

      this.timeZone = response.data.timeZoneName;
      this.localTime = new Date().toLocaleString('en-US', {
        timeZone: response.data.timeZoneId
      })
    },
    removeSelectedRecord() {
      let checkboxes = document.getElementsByName("addressItemCheckBox");
      let selectedCboxes = Array.prototype.slice.call(checkboxes).filter(ch => ch.checked == true);

      let addressIdList = [];

      for (let i of selectedCboxes) {
        addressIdList.push(i.id);
      }

      let newAddressList = [];

      for (let x of this.addressList) {
        if (!addressIdList.includes(x.addressId)) {
          newAddressList.push(x);
          console.log(addressIdList)
          console.log(x.id);
        }
      }

      this.addressList = newAddressList;

      if (this.addressList.length > 0) {

        this.showOnMap(this.addressList[0].lat, this.addressList[0].long);

        for (let address of this.addressList) {
          this.setMarker(address.lat, address.long);
        }

        
      }
      else{

        this.showOnMap(43.6532, 79.3832);
        
      }
    }
  }
}
</script>

<style>
#map {
  position: absolute;
  height: 100%;
  width: 60%;
}

#autocomplete {
  width: 20%;
}

.addressSection {
  margin-left: 20%;
  margin-bottom: 5%;
  border: 2px solid green;
  width: 60%;
}

li {
  list-style-type: none;
  text-align: left;
}

.buttonField {
  position: relative;
  left: 35%;
}

.removebutton {
  position: relative;
  right: 40%;
}
</style>
