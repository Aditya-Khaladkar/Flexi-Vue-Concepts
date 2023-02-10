<template>
    <div>
      <h1>Welcome to Watcher Lab</h1>
      <input type="text" placeholder="Firstname" v-model="fname">
        <br><br>
        <input type="text" placeholder="Lastname" v-model="lname">
        <br><br>
        <br>Welcome to Watcher {{ fullname }}
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          fname: "",
          lname: "",
          fullname: ""
        }
      },
      watch: {
        fname(newValue, oldValue) {
          this.fullname = newValue + " " + this.lname
        },
        lname(newValue, oldValue) {
          this.fullname = this.fname + " " + newValue
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>