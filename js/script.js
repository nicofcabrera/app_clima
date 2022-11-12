/*
La pagina web debe ser responsive
Se debe poder buscar cualquier localidad 
El proyecto debe estar en github
Agregar al proyecto a los usuarios: patoogm y cajimenez96
Cada miembro del grupo, si es los hay, debe tener al menos 1 rama en el proyecto.
Los grupos no pueden ser mas de 3 personas*/
// const resultado = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${codigoPostal},${codigoPais}&appid=0dc14b95512a30f4dcf4cd3afc03dd24`)
// const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${provincia},${codigoPais}&lang=es&appid=${keyAPI}`)

/*
##### Falta probar que se introduzca por nombre
adjunto este link que seria la forma para obtener el 'name'
https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key} 

*/

let keyAPI = '0dc14b95512a30f4dcf4cd3afc03dd24'

const defaultApi = () => {
  const getCiudad = async () => {
    let nombreCiudad = ''
    const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=tucuman,ar&lang=es&appid=${keyAPI}`)
    const response = await resultado.json()
    nombreCiudad = response.name;
    // console.log(response)
    return response
  }

  const tarjetas = async () => {
    const ciudad = await getCiudad();
    // console.log(ciudad)
    let tarjeta = document.getElementById('card')
    tarjeta.innerHTML = `
  <img src="http://openweathermap.org/img/wn/${ciudad.weather[0].icon}@2x.png" alt="">
  <p class="fs-4">${Math.ceil(ciudad.main.temp) / 10}°C</p>
  <h2 class="descripcion_clima fs-5">${ciudad.weather[0].description}</h2>
  <h1 class="fs-3">${ciudad.name}</h1>
  <section class="d-flex justify-content-around justify-content-lg-evenly">
  <p clas="fs-4">Min <br> ${Math.floor(ciudad.main.temp_min / 10)}°C</p>
  <p ">Max <br> ${Math.floor(ciudad.main.temp_max / 10)}°C</p>
  </section>
  `
}
tarjetas()
}
defaultApi()

let boton = document.getElementById('button-1')
boton.addEventListener('click', function () {
// let provincia = document.getElementById('provincia').value
// let seleccion = document.getElementById('seleccion').value
// console.log(seleccion)
let codigoPais = document.getElementById('codigo').value
  let nombreCiudad = ''


  const getCiudad = async () => {
    // const resultado = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${codigoPostal},${codigoPais}&appid=0dc14b95512a30f4dcf4cd3afc03dd24`)
     const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${codigoPais}&lang=es&appid=${keyAPI}`)
    const response = await resultado.json()
    nombreCiudad = response.name;
    // console.log(nombreCiudad)
    // console.log(response)  
    return response
  }

  const tarjetas = async () => {
    const ciudad = await getCiudad();
    // console.log(ciudad)
    let tarjeta = document.getElementById('card')
    tarjeta.innerHTML = `
  <img src="http://openweathermap.org/img/wn/${ciudad.weather[0].icon}@2x.png" alt="">
  <p class="fs-4">${Math.ceil(ciudad.main.temp) / 10}°C</p>
  <h2 class="descripcion_clima fs-5">${ciudad.weather[0].description}</h2>
  <h1 class="fs-3">${ciudad.name}</h1>
  <section class="d-flex justify-content-around justify-content-lg-evenly">
  <p clas="fs-4">Min <br> ${Math.floor(ciudad.main.temp_min / 10)}°C</p>
  <p ">Max <br> ${Math.floor(ciudad.main.temp_max / 10)}°C</p>
  </section>
  `
}

tarjetas()
})


/*
const getTemperaturas = async () => {
  const ciudad = await getCiudad();
  const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${ciudad.lat}&lon=${ciudad.lon}&lang=es&appid=${keyAPI}`)
  const response = await resultado.json()
  // console.log(response)
  // console.log(nombreCiudad)

  return response
}
*/



/*
const getClima = async () => {
  // const resultado = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=0dc14b95512a30f4dcf4cd3afc03dd24')
  // const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${keyAPI}`)
  // const resultado = await fetch('https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=0dc14b95512a30f4dcf4cd3afc03dd24')
  const resultado = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip=4000,AR&appid=0dc14b95512a30f4dcf4cd3afc03dd24')
  const response = await resultado.json()
  
  console.log(response)
  
}

const pidiendoDatas = async () => {
  const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-26.8083&lon=-65.2333&appid=${keyAPI}`)
  const response = await resultado.json()
  
  console.log(response)
}

// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}

getClima()
pidiendoDatas()
*/

//   const getPersonajes = async () => {
//   const resultado = await fetch('https://rickandmortyapi.com/api/character');
//   const personajes = await resultado.json();
//   return personajes.results
// }


const getCiudad1 = async () => {
    // const resultado = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${codigoPostal},${codigoPais}&appid=0dc14b95512a30f4dcf4cd3afc03dd24`)
    const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=3835869&lang=es&appid=${keyAPI}`)
    const response = await resultado.json()
    // nombreCiudad = response.name;
  // console.log(response)
    // console.log(nombreCiudad)
    // console.log(response)  
    return response
}

getCiudad1()
  


const probandoId = async () => {
  
}