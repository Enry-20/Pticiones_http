const urlJoke = 'https://api.chucknorris.io/jokes/random' 
const users = 'https://reqres.in/api/users?page=2'

const getJoke = async() => {
    try{
        const resp = await fetch (urlJoke);
         if (!resp.ok) throw 'No se encontro el chiste don come mierda'
         const {icon_url, id, value} =  await resp.json(); 
         return {icon_url, id, value} 
    }
    catch(err){
        throw err
    }
}
const getUser = async() => {
    const resp = await fetch(users);
    const {data} = await resp.json();

    return data    
}

export {
    getJoke,
    getUser
}


//notes
//1._si no se encuentra, el catch retornara el mensaje de error
//2._ destructuracion de elementos del objeto json y los gardar en la const
//3._retorno de esos elementos, se puede hacer de esta manera por tener el mismo nombre de los elementos, y por ende NO SE PUEDE CAMBIAR porque se perderia la referencia
//4._//Atrapara el error del throw y lo mostrara por pantalla en lugar del 'undefided', omitiendo el then del index