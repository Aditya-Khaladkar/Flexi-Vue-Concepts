<template>
  <div>
    <h1>Primitive array example</h1>
    <input type="text" placeholder="add todo" id="str" v-model="todo">
    <button @click="addTodo()"> add todo</button>
    <ul>
      <li v-for="(str, index) in techStack" :key="index"> {{ str }} </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        todo: "",
        techStack: [],
      }
    },
    methods: {
      addTodo() {
        if (this.todo) {
          this.techStack.push(this.todo)
          this.todo = ""
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>