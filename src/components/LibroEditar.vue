<template>
    <div>
        <h1>Editar o marcar como entregado</h1>
        <form @submit.prevent="updateLibro">
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
            <button type="submit">Editar</button>
        </form>
        <hr>
        <hr>
        <button @click="eliminar = !eliminar" v-if="eliminar===false">Entregado</button>
        <div v-if="eliminar===true">
            <h1>Seguro?</h1>
            <button @click="deleteLibro">Asi es</button>
            <button @click="eliminar=!eliminar">NOOOOO</button>

        </div>
    </div>
</template>

<script>
    import {db} from '../firebase.js'
    import router from '../router'
    export default {
            name:"Edit",
            data(){
                return{
                    idlibro:"",
                    autor:"",
                    titulo:"",
                    editorial:"",
                    clasificacion:"",
                    eliminar: false
                }
            },
            created() {
                this.getLibro();
            },
            methods: {
                async getLibro() {
                    const id = this.$route.params.id
                    const data = await db.collection('Libros').doc(id).get();
                    const libro = data.data();
                    this.idlibro=libro.IDLIBRO;
                    this.autor=libro.AUTOR;
                    this.titulo=libro.TITULO;
                    this.editorial=libro.EDITORIAL;
                    this.clasificacion=libro.CLASIFICACION;
                    },
                async updateLibro(){
                    const id = this.$route.params.id
                    await db.collection('Libros').doc(id).set({
                        IDLIBRO: this.idlibro,
                        AUTOR: this.autor,
                        TITULO: this.titulo,
                        EDITORIAL: this.editorial,
                        CLASIFICACION: this.clasificacion,
                    });
                    router.push("/");
                },
                async deleteLibro(){
                    const id = this.$route.params.id
                    await db.collection('Libros').doc(id).delete()
                    router.push("/");
                }
            }
        }
</script>