<template>
    <div>
        <h1>Nuevo retiro de libro</h1>
        <form @submit.prevent="addLibro">
            <p>
                ID Libro:
                <input type="text" v-model="idlibro">
            </p>
            <p>
                Autor:
                <input type="text" v-model="autor">
            </p>
             <p>
                Titulo:
                <input type="text" v-model="titulo">
            </p>
             <p>
            Editorial:
                <input type="text" v-model="editorial">
            </p>
             <p>
                Clasificación:
                <select v-model="clasificacion">
                    <option value="18+">18+</option>
                    <option value="Infantil">Infantil</option>
                    <option value="Adolescentes">Adolescentes</option>
                </select>
            </p>
            <button type="submit">Registrar</button>
        </form>
    </div>
</template>

<script>
    import {db} from '../firebase.js'
    import router from '../router'
    export default {
            name:"Crear",
            data(){
                return{
                    idlibro:"",
                    autor:"",
                    titulo:"",
                    editorial:"",
                    clasificacion:""
                }
            },
            methods: {
                async addLibro(){
                    await db.collection('Libros').add({
                        IDLIBRO: this.idlibro,
                        AUTOR: this.autor,
                        TITULO: this.titulo,
                        EDITORIAL: this.editorial,
                        CLASIFICACION: this.clasificacion,
                        
                    })
                    this.idlibro="";
                    this.autor="";
                    this.titulo="";
                    this.editorial="";
                    this.clasificacion="";
                    router.push("/")
                }
            },
    }
</script>