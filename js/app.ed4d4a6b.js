(function(){"use strict";var e={3724:function(e,t,o){var n=o(9242),s=o(3396);function a(e,t){const o=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",null,[(0,s.Wm)(o,{to:"/"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(o,{to:"/currentLocation"},{default:(0,s.w5)((()=>[(0,s.Uk)("Current Location")])),_:1}),(0,s.Uk)(" | "),(0,s.Wm)(o,{to:"/searchLocation"},{default:(0,s.w5)((()=>[(0,s.Uk)("Search Location")])),_:1})]),(0,s.Wm)(n)],64)}var r=o(89);const i={},l=(0,r.Z)(i,[["render",a]]);var d=l,c=o(2483);const u={class:"HomePage"},h=(0,s.uE)('<h1>Applicant: Jacky, Chap Shing Wong</h1><h3><u>Create a web page with the following features:</u></h3><ol type="1" class="scheme"><li>A button to allow users to acquire their current location from their browser.<span class="redText"> (Done in Current Location)</span></li><li>A search module that lets users input the name of a location. The search feature is triggered by both button clicks and pressing the enter key on the keyboard.<span class="redText"> (Done in Search Location)</span></li><li>Display the location on a map and add a marker to each searched location every time the location changes.<span class="redText"> (Done in Search Location)</span></li><li>A table with pagination to show all searched places: <ol type="a"><li>Display a maximum of 10 records on each page. <span class="redText"> (Done in Search Location)</span></li><li>A checkbox at the beginning of each row to let users select multiple records at the same time. <span class="redText"> (Done in Search Location)</span></li><li>A delete button on the top to remove all selected records as well as their markers on the map. <span class="redText"> (Done in Search Location)</span></li></ol></li><li>Display the time zone and local time of the latest searched location. <span class="redText"> (Done in Search Location)</span></li></ol><span class="redText"><h1>P.S. Please be reminded that Google Map API can sometime being unstable, if error occurs, you may simply refresh the browser.</h1></span>',4),m=[h];function p(e,t,o,n,a,r){return(0,s.wg)(),(0,s.iD)("div",u,m)}var g={name:"HomePage"};const f=(0,r.Z)(g,[["render",p]]);var y=f,b=o(7139);const v=(0,s._)("br",null,null,-1),w=(0,s._)("br",null,null,-1),L=(0,s._)("br",null,null,-1),k={class:"displayResult"},_=(0,s._)("div",{id:"map"},null,-1);function A(e,t,o,a,r,i){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("button",{onClick:t[0]||(t[0]=(...e)=>i.getCurrentAddress&&i.getCurrentAddress(...e))},"Click to get your current location"),v,w,(0,s.wy)((0,s._)("div",null,[L,(0,s.Uk)("Fetching your current location...wait a moment...")],512),[[n.F8,r.fetching]]),(0,s.wy)((0,s._)("div",null,[(0,s._)("h1",k,[(0,s.Uk)("Your Current Address:"),(0,s._)("h6",null,(0,b.zw)(r.address),1)])],512),[[n.F8,r.address&&!r.fetching]]),_])}var S=o(1076),C={name:"CurrentLocation",data(){return{jackyWongKey:"AIzaSyCBJn6oNgEbN5mfNeWrsORdBurfuAYp2-0",latitude:null,longitude:null,address:null,fetching:!1,map:null}},mounted(){},methods:{getCurrentAddress(){this.fetching=!0,navigator.geolocation?navigator.geolocation.getCurrentPosition((e=>{this.latitude=e.coords.latitude,this.longitude=e.coords.longitude,this.address=this.formatAddress(this.latitude,this.longitude),this.fetching=!1,this.showOnMap(this.latitude,this.longitude),this.setMarker(this.latitude,this.longitude)}),(e=>{console.log(e.message)})):console.log("Your browser does not support geolocation API")},formatAddress(e,t){S.Z.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+e+","+t+"&key="+this.jackyWongKey).then((e=>{e.data.error_message?console.log(e.data.error_message):this.address=e.data.results[0].formatted_address})).catch((e=>{console.log(e.message)}))},showOnMap(e,t){this.map=new google.maps.Map(document.getElementById("map"),{center:{lat:e,lng:t},zoom:15,maxZoom:20,minZoom:3,streetViewControl:!1,mapTypeControl:!1})},setMarker(e,t){new google.maps.Marker({position:{lat:e,lng:t},map:this.map})}}};const x=(0,r.Z)(C,[["render",A]]);var O=x;const I={class:"SearchLocation"},P=(0,s._)("br",null,null,-1),T=(0,s._)("br",null,null,-1),Z=(0,s._)("br",null,null,-1),M=(0,s._)("br",null,null,-1),D={class:"addressSection"},j=(0,s._)("b",null,"Search History",-1),z=["id","value"],W=["for"],B=["disabled"],E={class:"buttonField"},N=["disabled"],U=["disabled"],F=(0,s._)("h4",null,"Address",-1),K=(0,s._)("h4",null,"Time Zone",-1),R=(0,s._)("h4",null,"Local Time",-1),G=(0,s._)("div",{id:"map"},null,-1);function H(e,t,o,a,r,i){return(0,s.wg)(),(0,s.iD)("div",I,[(0,s.wy)((0,s._)("input",{id:"autocomplete",type:"text",placeholder:"Enter address you interested","onUpdate:modelValue":t[0]||(t[0]=e=>r.inputAddress=e),onKeyup:t[1]||(t[1]=(0,n.D2)(((...e)=>i.getGeolocation&&i.getGeolocation(...e)),["enter"]))},null,544),[[n.nr,r.inputAddress]]),P,T,(0,s._)("button",{onClick:t[2]||(t[2]=(...e)=>i.getGeolocation&&i.getGeolocation(...e)),type:"submit"},"Search Location"),Z,M,(0,s._)("div",D,[j,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.addressList,(e=>(0,s.wy)(((0,s.wg)(),(0,s.iD)("li",null,[(0,s._)("input",{type:"checkbox",id:e.addressId,name:"addressItemCheckBox",value:e.formattedAddress},null,8,z),(0,s._)("label",{for:e.addressId},(0,b.zw)(e.formattedAddress),9,W)],512)),[[n.F8,r.addressList.indexOf(e)<10*r.addressListPage&&r.addressList.indexOf(e)+1>10*r.addressListPage-10]]))),256)),(0,s._)("div",null,[(0,s._)("button",{class:"removebutton",onClick:t[3]||(t[3]=(...e)=>i.removeSelectedRecord&&i.removeSelectedRecord(...e)),disabled:0==r.addressList},"Remove",8,B),(0,s._)("div",E,[(0,s._)("button",{onClick:t[4]||(t[4]=e=>r.addressListPage--),disabled:1==r.addressListPage},"Previous",8,N),(0,s._)("button",{onClick:t[5]||(t[5]=e=>r.addressListPage++),disabled:r.addressListPage<1},"Next",8,U),(0,s._)("div",null,[(0,s._)("p",null,"Page "+(0,b.zw)(r.addressListPage),1)])])])]),(0,s.wy)((0,s._)("div",null,[F,(0,s._)("p",null,(0,b.zw)(r.inputAddress),1),K,(0,s._)("p",null,(0,b.zw)(r.timeZone),1),R,(0,s._)("p",null,(0,b.zw)(r.localTime),1)],512),[[n.F8,r.timeZone]]),G])}o(560);var Y={name:"SearchLocation",data(){return{jackyWongKey:"AIzaSyCBJn6oNgEbN5mfNeWrsORdBurfuAYp2-0",inputAddress:"",tmpLat:null,tmpLong:null,addressList:[],addressIdIncrement:1,addressListPage:1,timeZone:null,localTime:null}},mounted(){new google.maps.places.Autocomplete(document.getElementById("autocomplete"))},methods:{async getGeolocation(){this.inputAddress=document.getElementById("autocomplete").value;const e=await S.Z.get("https://maps.googleapis.com/maps/api/geocode/json",{params:{address:this.inputAddress,key:this.jackyWongKey}});this.tmpLat=e.data.results[0].geometry.location.lat,this.tmpLong=e.data.results[0].geometry.location.lng,this.addressList.push({addressId:"address"+this.addressIdIncrement.toString(),formattedAddress:this.inputAddress,lat:this.tmpLat,long:this.tmpLong}),this.addressIdIncrement++,this.showOnMap(this.tmpLat,this.tmpLong);for(let t of this.addressList)this.setMarker(t.lat,t.long);this.getTimeZoneInfo(this.tmpLat,this.tmpLong)},showOnMap(e,t){this.map=new google.maps.Map(document.getElementById("map"),{center:{lat:e,lng:t},zoom:15,maxZoom:20,minZoom:3,streetViewControl:!1,mapTypeControl:!1})},setMarker(e,t){new google.maps.Marker({position:{lat:e,lng:t},map:this.map})},async getTimeZoneInfo(e,t){const o=this.jackyWongKey,n=`https://maps.googleapis.com/maps/api/timezone/json?location=${e},${t}&timestamp=${Math.floor(Date.now()/1e3)}&key=${o}`,s=await S.Z.get(n);this.timeZone=s.data.timeZoneName,this.localTime=(new Date).toLocaleString("en-US",{timeZone:s.data.timeZoneId})},removeSelectedRecord(){let e=document.getElementsByName("addressItemCheckBox"),t=Array.prototype.slice.call(e).filter((e=>1==e.checked)),o=[];for(let s of t)o.push(s.id);let n=[];for(let s of this.addressList)o.includes(s.addressId)||(n.push(s),console.log(o),console.log(s.id));if(this.addressList=n,this.addressList.length>0){this.showOnMap(this.addressList[0].lat,this.addressList[0].long);for(let e of this.addressList)this.setMarker(e.lat,e.long)}else this.showOnMap(43.6532,79.3832)}}};const $=(0,r.Z)(Y,[["render",H]]);var J=$;const V=[{path:"/",name:"homePage",component:y},{path:"/currentLocation",name:"currentLocation",component:O},{path:"/searchLocation",name:"searchLocation",component:J}],q=(0,c.p7)({history:(0,c.PO)("/"),routes:V});var Q=q;(0,n.ri)(d).use(Q).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,a){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],a=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(i=!1,a<r&&(r=a));if(i){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,s,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,r=n[0],i=n[1],l=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(s in i)o.o(i,s)&&(o.m[s]=i[s]);if(l)var c=l(o)}for(t&&t(n);d<r.length;d++)a=r[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},n=self["webpackChunklocator"]=self["webpackChunklocator"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3724)}));n=o.O(n)})();
//# sourceMappingURL=app.ed4d4a6b.js.map