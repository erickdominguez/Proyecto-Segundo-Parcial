<template>
    <div>
        <h1>Listar Todo</h1>
        <ul>
            <li v-for="libro in libros" :key="libro.Autor">
                ID: {{libro.IDLIBRO}} <hr>
                Autor: {{libro.AUTOR}}<hr>
                Titulo: {{libro.TITULO}} <hr>
                Editorial: {{libro.EDITORIAL}} <hr>
                Clasificación: {{libro.CLASIFICACION}}

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