<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item,index) in values" :key="index">
      <p>{{item}}</p>
    </div>
    <button @click="callApi">Call API</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      values: ["no data yet"],
    }
  },
  methods: {
    async callApi() {
      try {
        const response = await axios.get("https://localhost:5000/api/values");
        this.values = response.data;
      } catch (err) {
        this.values.push("Ooops!" + err);
      }
    }
  }
}
</script>

