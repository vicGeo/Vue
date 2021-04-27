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
            <p class="text-sm text-gray-500">
              <a href="#">
              </a>
            </p>
          </div>
        </div>
      </div>
      <div class="ml-4 mt-4 flex-shrink-0 flex">
        <button type="button" class="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100">
          <!-- <PhoneIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
          <span>
            EntryIn
          </span>
        </button>
        <button type="button" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-100">
          <!-- <MailIcon class="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" /> -->
          <span>
            Reset Time
          </span>
        </button>
      </div>
    </div>
  </div>
  </header>
</template>

<script>
import axios from 'axios';
// Hardcoded token
const token = '9a4c685e6fca0347ca0775119e9c47b6ba00e49096ba99ffcf6a41fe06e6f001';

export default {
  name: 'App',
  components: {

  },
  data() {
    return {

      firstName: '',
      lastName: '',
      workStatus: '',
      employeeWorking: true,
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
      console.log(response.data);
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