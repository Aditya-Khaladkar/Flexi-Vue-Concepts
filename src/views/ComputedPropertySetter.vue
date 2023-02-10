<template>
    <div>
      <h1>Computed property setter example</h1>
      <input type="text" placeholder="Firstname" v-model="fname">
      <br><br>
      <input type="text" placeholder="Lastname" v-model="lname">
      <br><br>
      {{ flname }}
      <br><br>
      <input type="text" placeholder="Fullname" v-model="flname">
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
        // flname() {
        //   return this.fname + " " + this.lname
        // },
        flname: {
          get() {
            return this.fname + " " + this.lname
          },
          set(newValue) {
            let name = newValue.split(" ")
            this.fname = name[0]
            this.lname = name[1]
          }
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>