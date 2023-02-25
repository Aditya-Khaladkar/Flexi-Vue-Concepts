<template>
    <div style="margin-bottom: 16px; background-color: lightgray; padding:1">
        <h3>{{ name }}</h3>
        <h5>{{ id}}</h5>
        <h6>Rs.{{price}}</h6>
    </div>
</template>

<script>
    export default {
        props:['name','id','price']
        
    }
</script>

<style scoped>
h3,h5,h6{
    margin:0;
}
</style>

<!-- <template>
    <div>
      <ButtonCounter/>
      <br>
      <h1>Fruit Card</h1>
      <center>
        <table><tr v v-for="item in items" :key=item.id>
          <FruitCard :id="item.id" :name="item.name" :price="item.price"/>
        </tr></table>
      </center>
    </div>
  </template>
  
  <script>
  import ButtonCounter from '@/components/ButtonCounter.vue';
  import FruitCard from '@/components/FruitCard.vue';
    export default {
      components:{ FruitCard, ButtonCounter },
      data() {
        return {
          frameworks : ['Angular', 'React', 'Vue', 'Expressjs', 'Vue'],
          items: [
                  { id: 1, name: "Orange", price: 24 },
                  { id: 2, name: "Banana", price: 12 },
                  { id: 3, name: "Apple", price: 15 },
              ],
        }
      },
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style> -->