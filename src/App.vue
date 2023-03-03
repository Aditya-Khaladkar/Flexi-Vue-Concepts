<template>
  <div id="app">
      <nav class="navbar">
        <div class="navbar-brand">Concepts</div>

        <router-link to="/" class="nav-router">Hello</router-link>
        <router-link to="/list" class="nav-router">List</router-link>
        <router-link to="/watcher" class="nav-router">Watcher</router-link>
        <router-link to="/computed" class="nav-router">computed property</router-link>
        
          <form class="navbar-form">
            <div class="navbar-input">
              <input type="text" placeholder="Search...">
            </div>
            <div class="navbar-btn">
              <button type="submit">Search</button>
            </div>
          </form>
      </nav>
      <nav></nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Nav bar css */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #fff;
  height: 60px;
  padding: 0 20px;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  color: black;
}

.navbar-form {
  display: flex;
  align-items: center;
}

.navbar-input {
  margin-right: 10px;
}

.navbar-input input[type="text"] {
  padding: 10px;
  border: 1px solid #000; /* add this line to set a black border */
  border-radius: 5px;
  width: 200px;
}

.navbar-btn button {
  background-color: dodgerblue;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
}

.nav-router {
  padding: 10px;
  outline: 2px solid #000;
}

</style>
