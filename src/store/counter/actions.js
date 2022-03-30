

export const   incrementRandomInt= async(context) =>{
    context.commit('setLoading', true)
    const randomInt = await getRandomNumber()
    console.log(randomInt)
    //y para llamar a una mutacion seria tal que asi 
    context.commit('incrementBy', randomInt)
    context.commit('setLoading', false)

}