//se suele llamar index a cada store de cada modulo para poder hacer referencia al nombre 
//de la carpeta y ya ni lllamar al ficheroi


import getRandomNumber from "@/helpers/getRandomNumber"

//importamos el state
import state from  './state'


//importamos de las mutations
//con el asteriscon podemos importar todas las mutations importamos todas las
//exportaciones del archivo mutations
import * as mutations from './mutations'

import * as actions from './actions'

import * as getters from './getters'


//creamos un objeto con todoas los valores necesarios para una store esto es un simple objeto

const counterStore = {
    

    //los cambios que debemos hacer son los siguientes
    //cambiamos el state y le ponemos una funcion de flecha
    //cuando se cree el store va a comprobar el state y transformara el objeto en una forma reactiva
    
    //en namespaced hay que ponerlo en tododos los modulos por separado 
    namespaced : true,

    //llamamos al state importado asi con cada uno de los apartados
    state: state,
    //metodos para cambiar el state
    //LAS MUTACIONES DEBEN SER SINCRONAS SIEMPRE NO PUEDEN SER ASYNC
    mutations: mutations,
        //el state ya viene por defecto a la hora de llamar a la mutacion

        //pàra hacer referencia a una propiedad del state debemos acceder con el valor state. valor
        //no podemos usar el this
        

    
    //acciones que sirven para realizar peticiones etc y depues usamos las mutaciones para cambiar los datos
    //LAS ACCIONES SI PUEDEN SER ASYNC


    //como llamamos a los comits en actions en las mutaciones tenemos como 
    //argumento predeterminado el state en las actions tenemos el context
    //El context tiene la informacion necesaria osbre el store en el que nos enconcontramos
    actions: actions,

    //los getters nos devuelven un valor coo las computer properties
    getters: getters,
        //los getters tambien reciben el argumento del state y podemos estraer la parte que nos interesa,
}

 
export default counterStore


/* pasos creamos un obejeto con todos los valores, el state lo metemos en una funcion de flecha
y exportamos */