import { createStore } from "vuex";
import counterStore from "./counter";




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

    modules:{
        counter: counterStore
    }
})
