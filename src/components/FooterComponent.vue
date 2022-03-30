<template>
    <footer>
        <h2>Encuéntranos</h2>
        <h5>Dirección: Calle del Tigre #123 Colonia Centro, Guadalajara, Jalisco</h5>
        <h5>Teléfono: 555-55555</h5>
        <router-link to="/location">Horarios de Atención</router-link>
    </footer>
</template>

<style scoped>
    footer {
        width: 96%;
        height: auto;
        margin: 5px auto;
        color: white;
        background-color: black;
        padding: 2px 10px;
        padding-bottom: 10px;
    }

    footer h5 {
        margin-left: 20px;
    }
</style>
