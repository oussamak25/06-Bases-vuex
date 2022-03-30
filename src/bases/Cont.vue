<template>
    <!-- podemos acceder al store de la siguiente manera como si fuese un plugin 
    ya que hemos declarado el store en el main -->

    <!-- Si lo hacemos por states directos no podemos  -->
    <h1>Counter - vuex</h1>
    <h1>Acceso directo : {{$store.state.counter.count}}</h1>

    <h1>Propiedad Computada: {{countComputed}}</h1>


    <!-- con el boton llamamos al metodo de abajo que es el incrementar -->
    <button  @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

    <h1>MapState</h1>
    <h1>mapState: {{count}} </h1>
    <h1>lastMutation: {{lastMutation}} </h1>

    <!-- acceso a getter de forma directa -->
    <h2>Direct getter : {{$store.getters.contadorCuadrado}}</h2>
  
</template>

<script>
//con el map podemos mapear todo lo que queramos del store
//y ppdemos usar el mapActions para poder acceder directamente a las acciones y desestructurarlas
//tambien tenemos el mapGetters  
import {mapState, mapActions} from 'vuex'


export default {

  //de esta forma tambien accedemos al valor que tenemos entre los corchetes
  //computed: mapState(['count'])
  


  // como accedo en la parte de js
    computed:{
      //desde la zona de js podemos aaceder a ese valor usando el this seguido del 
      //simbolo del dolar
      countComputed(){
        return this.$store.state.count
      },
      //tambnien tenemos la siguiente forma con la desestructuracion especial
      //...mapState(['count','lastMutation'])

      //otra manera seria la siguiente
      //de esta manera podemos acceder a valores que a lo mejor tienen el mismo nombre que 
      //la varibale de clase
      //se puede usar una de las siguientes formas 
      //  ...mapState({
      //   count: 'count',
      //   lastMutation: 'lastMutation'
      // })
      ...mapState({
        count: state => state.count,
        lastMutation: state => state.lastMutation,
        isLoading: state => state.isLoading
      })
   },
   methods:{
     //este metodo a su vez llama a la mutacion del store que tiene el nombre que le pasamos enter comilllas
     //pero esta forma es llamarlo sin argumntos cuando es una funcion sin argumentos
     
     increment(){
       /* cuando tenenemos modulos separados que es como deberia de estar desde un principio 
       hay que acceder la siguiente manera  */
       this.$store.commit('counter/increment')
     },
    
     incrementBy(){

       //de esta manera le pasamos los argumentos
       //si necesitamos muchos argumentos podemos envviar un objetoy despues desistructurarlos
       this.$store.commit('counter/incrementBy', 5)
       //this.randomInt
     },
    //  incrementRandomInt(){
    //    //podemos hacerlo de 2 manera primro vemos el dispach 
    //    //esto es para llamar  auna accion 
    //    this.$store.dispatch('incrementRandomInt')

    //  }

    //segunda manera 
    //usamnos el map de acciones
    //de esta manera no llamamnos al dispacher  
    //ademas el mapActions va a habilitar todo lo que definamos y podremos usarlo pj desde incrementBY()
    //de esta forma es cuando tenemos los modulos por separado
    ...mapActions('counter', ['incrementRandomInt'])
    
    // ...mapActions({
    //     randomInt: 'incrementRandomInt'
      
    //   }),


    

   }



}
</script>

<style>

</style>