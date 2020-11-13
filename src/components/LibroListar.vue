<template>
    <div >
        <h1>Libros Pendientes de Entrega</h1>
        <ul>
            <li v-for="libro in libros" :key="libro.Autor">
                ID: {{libro.IDLIBRO}} ||
                Autor: {{libro.AUTOR}} ||
                Titulo: {{libro.TITULO}} ||
                Editorial: {{libro.EDITORIAL}} ||
                Clasificación: {{libro.CLASIFICACION}} <hr> 
                <router-link :to="{ name: 'Editar', params: {id: libro.id}}">Editar</router-link>
                <hr> <hr>
                
                

            </li>
        </ul>
        
    </div>
</template>

<script>
import {db} from '../firebase.js'
export default {
        name:"Lista",
        data(){
            return {
            libros: []
            }
        },
        created(){
            this.listLibros();
        },
        methods: {
            async listLibros(){
                const data = await db.collection("Libros").get();
                this.libros = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(this.libros)
            }
        },
}
</script>