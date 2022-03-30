


// aqui ponemos el codigo del campo mutatiion y los expotamos 
//los convertimos en funciones de flecha y los exportamos

export const increment =(state) =>{   
    state.count++
    state.lastMutation='increment '
}


export const incrementBy =(state, valor) =>{   
    state.count+=valor
    state.lastMutation='incrementBy '  + valor  
}


export const setLoading =(state, valor) =>{
    state.isLoading=valor
}