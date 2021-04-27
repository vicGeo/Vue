<template>
  <img src="./assets/sesame-hr.jpg">
  <header>
  <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
    <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
      <div class="ml-4 mt-4">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ firstName }} {{ lastName }}
            </h3>
            <p class="text-sm">
                <timer class="text-green-500 relative inline-flex items-center text-xl font-medium"
                :timer="formattedTime"
                :state="timerState"
                />
            </p>
          </div>
        </div>
      </div>
      <div class="ml-4 mt-4 flex-shrink-0 flex">
        <div v-if="employeeWorking">
          <button v-on:click="start(); toogleInOut();" class="relative inline-flex items-center mx-1 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100">
          Entry In
          </button>
        </div>
        <div v-else>
          <button v-on:click="pause(); toogleInOut();" class="relative inline-flex items-center mx-1 px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-100">
          Entry Out
          </button>
        </div>
      </div>
    </div>
  </div>
  </header>
</template>

<script>
import axios from 'axios';
// Hardcoded token
const token = '9a4c685e6fca0347ca0775119e9c47b6ba00e49096ba99ffcf6a41fe06e6f001';

import Timer from './components/Timer.vue';




export default {
  name: 'App',
  components: {
    Timer,

  },
  data() {
    return {

      firstName: '',
      lastName: '',
      workStatus: '',
      employeeWorking: true,
      timerState: 'stopped',
      currentTimer: 0,
      formattedTime: '00:00:00',
      ticker: undefined,
    }
  },
  methods: {
    async getEntries() {
      let response = await axios.get("http://localhost:8080/schedule/v1/work-entries", {
        headers: {
          Authorization: 'Bearer ' + token
        },
      });

      // Testing render data from API
      this.firstName = response.data.data[0].employee.firstName
      this.lastName = response.data.data[0].employee.lastName
      this.workStatus = response.data.data[0].employee.workStatus
    },

    toogleInOut() {
      this.employeeWorking = !this.employeeWorking;
    },
    async start() {
      if (this.timerState !== 'running') {
        this.tick();
        this.timerState = 'running';

        // POST workEntryIn
        let workIn = {
        "employeeId": "cf4e03eb-6945-4fa5-ada7-f902492303c4",
          "workEntryIn": {
            "coordinates": {
              "latitude": null,
              "longitude": null
              }
          }
      }
      let response = await axios.post("http://localhost:8080/schedule/v1/work-entries/clock-in", workIn, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      console.log(response.data);

      }
    },

    async pause() {
      window.clearInterval(this.ticker);
      this.timerState = 'paused';

      // POST workEntryOutasync
      let workOut = {
        "employeeId": "cf4e03eb-6945-4fa5-ada7-f902492303c4",
          "workEntryOut": {
            "coordinates": {
              "latitude": null,
              "longitude": null
              }
          }
      }
      let response = await axios.post("http://localhost:8080/schedule/v1/work-entries/clock-out", workOut, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      console.log(response.data);
    },

    async stop() {

      if (this.timerState == 'running') {
        window.clearInterval(this.ticker);
        this.currentTimer = 0;
        this.formattedTime = "00:00:00"
        this.timerState = "stopped"
      }

      // POST workEntryOutasync
      let workOut = {
        "employeeId": "cf4e03eb-6945-4fa5-ada7-f902492303c4",
          "workEntryOut": {
            "coordinates": {
              "latitude": null,
              "longitude": null
              }
          }
      }
      let response = await axios.post("http://localhost:8080/schedule/v1/work-entries/clock-out", workOut, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      console.log(response.data);
    },

    // Logic timer HH:MM:SS

    tick() {
      this.ticker = setInterval(() => {
        this.currentTimer++;
        this.formattedTime = this.formatTime(this.currentTimer);
      }, 1000)
    },
    formatTime (seconds) {
      let measuredTime = new Date(null);
      measuredTime.setSeconds(seconds);
      let HMSTime = measuredTime.toISOString().substr(11, 8);
      return HMSTime;
    }
  },
  mounted() {
      this.getEntries();
  },


}
</script>

<style>

* {
  box-sizing: border-box;
}

#app body {
  margin: 0;
}

#app header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #5EBEA3;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

</style>