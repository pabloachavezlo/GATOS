let api_url = "https://api.thecatapi.com/v1/images/search?limit=10" ;


async function actualizaGato(api){
  let obtenerGato = await fetch(api); // la función api_url
  let dato = await obtenerGato.json(); 
  cargar_datos(dato);    
}
actualizaGato(api_url);


function cargar_datos(data){
  let dom = document.querySelector(".root");
  data.forEach(element => {

    let item = document.createElement("div");
    item.classList.add("box-img")  
    item.innerHTML = `
    <img src="${element.url}">
    `;
  dom.appendChild(item);
 })};

/*button de la pagina para que carge */
let botonCargar = document.querySelector("button");
    botonCargar.addEventListener("click", function () {
  location.reload();
});