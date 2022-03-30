<template>
  <header>
    <div class="logo-container">
        <a href="/"><img class="logo-img" src="./assets/logo-tigresse-dor.png"></a>
    </div>
    <div class="nav-container">
        <nav>
            <router-link to="/">Ordenar</router-link>
            <router-link to="/baker">Insumos</router-link>
            <router-link to="/location">Encuéntranos</router-link>
        </nav>
    </div>
    <div class="clearfix"></div>
  </header>
  <router-view/>
</template>

<style>
#app {
  width: 100%;
  height: 100%;
}

.clearfix {
    display: block;
    clear: both;
}

.nav-container {
    height: 98%;
    float: left;
    width: 80%;
    position: relative;
    margin: 2px 5px;
}

nav {
    position: absolute;
    bottom: 15%;
}

nav a {
    margin: 5px 5px;
    padding: 0px 5px;
    color: white;
    position: relative;
    bottom: 0;
}

nav a:hover {
    color:burlywood;
}

html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
}

body {
    height: 100%;
    width: 100%;
    margin: 0;
    background: rgb(57,236,240);
    background: linear-gradient(0deg,rgba(57,236,240,1) 7%,rgba(179,252,254,1) 48%);
    background-repeat: no-repeat;
    background-attachment: fixed;
}

header {
    color: white;
    background-color: black;
    height: 13%;
    width: auto;
    margin: 0;
    padding: 10px 10px 0 10px;
}

img {
    width: 200px;
    height: 200px;
}

.logo-container {
    margin: 0 5px;
    float: left;
    width: 15%;
    margin: auto;
    height: 90%;
    max-height: 90%;
}

.logo-container a{
    margin: auto;
}

.logo-container img {
    object-fit: cover;
    overflow: hidden;
    width: 98%;
    height: 100%;
    object-position: 50% 28%;
}

a {
    color: white;
}

a:hover {
    color: burlywood;
}

table, th, td {
   border: 1px solid;
   border-color: black;
}

table {
    width: 50%;
    margin: auto;
}

th {
    background-color: black;
    color: white;
}

td {
    padding: 2px 5px;
}

.actual-body {
    margin: 0;
    padding: 1% 0;

}

.table-title {
    text-align: center;
    width: 50%;
    margin: auto;
}

.table-div {
    padding: 20px 0;
    background-color: white;
    width: 100%;
    margin: 0;
}

.section1, .section2 {
    margin: 20px;
    width: auto;
}

.jump-link {
    color: white;
}

a.jump-link:hover {
    color: burlywood;
}

.section-title {
    width: 100%;
    text-align: center;
    background: rgb(68,68,68);
    background: linear-gradient(0deg,rgba(68,68,68,1) 19%,rgba(73,73,73,1) 50%,rgba(61,61,61,1) 89%);
    margin: 0;
    padding: 10px 0;
    color: white;
}
</style>
