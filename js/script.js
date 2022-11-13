let keyAPI = '0dc14b95512a30f4dcf4cd3afc03dd24'

let boton = document.getElementById('button-1')
boton.addEventListener('click', function () {
let codigoProv = document.getElementById('codigo').value

  const getCiudad = async () => {
    const resultado = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${codigoProv}&lang=es&appid=${keyAPI}`)
    const response = await resultado.json()
    nombreCiudad = response.name;
    return response
  }

  const tarjetas = async () => {
    const ciudad = await getCiudad();
    let tarjeta = document.getElementById('card')
    tarjeta.innerHTML = `
    <img src="http://openweathermap.org/img/wn/${ciudad.weather[0].icon}@2x.png" alt="">
    <p class="fs-4">${Math.ceil(ciudad.main.temp) / 10}°C</p>
    <h3 class="descripcion_clima fs-5">${ciudad.weather[0].description}</h3>
    <h2 class="fs-3">${ciudad.name}</h2>
    <section class="mb-4 d-flex justify-content-around justify-content-lg-evenly">
    <p>Min <br> ${Math.floor(ciudad.main.temp_min / 10)}°C</p>
    <p>Max <br> ${Math.floor(ciudad.main.temp_max / 10)}°C</p>
    </section>`
  }
tarjetas()
})
