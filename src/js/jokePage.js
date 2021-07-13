import { getJoke } from "./http-provider";
//const container1 = document.querySelector('.container');

const body = document.body;
let button, otherJokeM;
const jokeCreate = () => {
    const html = `
        <h1 class="mt-5">Jokes</h1>
        <hr>
        <button class="btn btn-primary">Load</button>
        <ul class="mt-4 list-group">
            
        </ul>
    `

    const container1 = document.createElement('div');
    container1.classList.add('container');
    container1.innerHTML = html;
    body.append(container1)
}

const events = () => {
    otherJokeM = document.querySelector('ul')
    button = document.querySelector('button')
    button.addEventListener('click', async() => {
    button.disabled = true 
        drawJoke(await getJoke());//la funcion async lanzara una promesa que el await esperara resolver con la funcion getJoke como parametro
    button.disabled = false
})
}
//{value, id} = chiste
 const drawJoke = (chiste) => {
    const ulItem = document.createElement('li');
    const num = ulItem.map(getJoke).lenght
    ulItem.innerHTML = `<strong>${chiste.id}</strong>: ${chiste.value}`
    ulItem.classList.add('list-group-item')
    otherJokeM.append(ulItem);
    console.log(otherJokeM.lenght);
}

export const init = () =>{
    jokeCreate();
    events();
}