<template>
    <div>
      <h1>Welcome to computed property labs</h1>
      <input type="text" placeholder="Firstname" v-model="fname">
      <br><br>
      <input type="text" placeholder="Lastname" v-model="lname">
      <br><br>
      <h1>Welcome Computed {{ fullName }}</h1>
      <h1>Welcome Method {{ getFullName() }}</h1>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          fname: "",
          lname: "",
        }
      },
      computed: {
        fullName() {
          console.log("in computed");
          return this.fname + " " + this.lname
        }
      },
      methods: {
      getFullName() {
        console.log("in method");
          return this.fname + " " + this.lname
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>