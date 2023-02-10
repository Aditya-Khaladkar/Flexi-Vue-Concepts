<template>
    <div>
      <h1>Primitive array example</h1>
      <ul>
        <li v-for="(str, index) in techStack" :key="index"> {{ index }} - {{ str }} </li>
      </ul>
      <h1>Object array example</h1>
      <ul>
        <li v-for="item in items" :key="item.id"> {{ item.name }} - Rs {{ item.price }} /- </li>
      </ul>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          techStack: ['Android', 'Kotlin', 'Flutter', 'Dart', 'Vue', 'React', 'React Native'],
          items: [
                    { id: 1, name: "Orange", price: 24 },
                    { id: 2, name: "Banana", price: 12 },
                    { id: 3, name: "Apple", price: 15 },
                ]
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>