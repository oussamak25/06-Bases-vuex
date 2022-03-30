import { createStore } from "vuex";
import getRandomNumber from "@/helpers/getRandomNumber";




/* usaremos vuex para aplicaciones en las que sepamos que distintos componente intentaran 
acceder al mismo dato del state por ejemplo */



//HAY QUE SEPARAR EN MODULOS LOS CAMPOS QUE SEPAMOS QUE VAN A TENER SUS POROPIOS GETTER SUS PROPIAS ACCIIONES
//PARA NO COMPLICARSE POR ESO HAY QUE CREAR MODULOS Y EN CADA UNO TENDREMOS UN DATO DISTINTO

//expor del create strore asi  se exporta todo 
export default createStore({
    //esto es como la data es reactivo
    //por ahora solo tenemos un contador
    //para usarlo hay que ponerlo como un plugin en el main
    //para cambiar el state se usa la mutation


    state: {
        count: 1,
        lastMutation: 'nada',
        isLoading: false
    },
    //metodos para cambiar el state
    //LAS MUTACIONES DEBEN SER SINCRONAS SIEMPRE NO PUEDEN SER ASYNC
    mutations:{
        //el state ya viene por defecto a la hora de llamar a la mutacion

        //pàra hacer referencia a una propiedad del state debemos acceder con el valor state. valor
        //no podemos usar el this
        increment(state){   
            state.count++
            state.lastMutation='increment '
        },
        incrementBy(state, valor){   
            state.count+=valor
            state.lastMutation='incrementBy '  + valor  
        },
        setLoading(state, valor){
            state.isLoading=valor
        }

    },
    //acciones que sirven para realizar peticiones etc y depues usamos las mutaciones para cambiar los datos
    //LAS ACCIONES SI PUEDEN SER ASYNC


    //como llamamos a los comits en actions en las mutaciones tenemos como 
    //argumento predeterminado el state en las actions tenemos el context
    //El context tiene la informacion necesaria osbre el store en el que nos enconcontramos
    actions:{
        async incrementRandomInt(context){
            context.commit('setLoading', true)
            const randomInt = await getRandomNumber()
            console.log(randomInt)
            //y para llamar a una mutacion seria tal que asi 
            context.commit('incrementBy', randomInt)
            context.commit('setLoading', false)

        }
    },

    //los getters nos devuelven un valor coo las computer properties
    getters:{
        //los getters tambien reciben el argumento del state y podemos estraer la parte que nos interesa
        contadorCuadrado (state){
            //los getters se van a actualizar cuando el state cambie
            return state.count * state.count
        }

    },
    modules:{
        
    }
})
