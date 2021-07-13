const urlJoke = 'https://api.chucknorris.io/jokes/random' //extraigo la api directamente del url

fetch( urlJoke ).then( resp => {
    resp.json().then(({ id, value}) => {
        console.log(value);
        console.log(id)
    })
}) 
//CADENA DE PROMESAS
fetch(urlJoke).then(res => res.json()).then(({id, value})=>{
    console.log(id, value)
})

//1 fetch recibe la informacion,  y devuelve una promesa con una respuesta,
//2 then establece res con otra pormes que es el objeto json,
//3 desestructura las propiedades del objeto json requeridas, y se muestran.
//RAZON DE HACERLO = Evitar un "calllback hell"