import {Product} from "./producto.js";


// Para mostrar el menú desplegable
// Listener único para manejar tanto 'mouseover' en .span como 'mouseleave' en .category
// Listener único para manejar 'mouseenter' en .span y 'mouseleave' en .category
document.querySelector('.menu_desplegable').addEventListener('mouseenter', (e) => {
    if (e.target.matches('.span')) {
        const menu = e.target.nextElementSibling; // El siguiente hermano, que es la lista
        menu.classList.add('active'); // Mostrar el menú
    }
}, true);

document.querySelector('.menu_desplegable').addEventListener('mouseleave', (e) => {
    if (e.target.matches('.category')) {
        const menu = e.target.querySelector('.lista'); // Buscar el menú dentro de la categoría
        menu.classList.remove('active'); // Ocultar el menú al salir
    }
}, true);


const $c1_element_1 = document.querySelector('.c1_element_1');
const $c1_element_top = document.querySelector('.c1_element_top');
const $c1_element_bot = document.querySelector('.c1_element_bot');

const $all_img = document.querySelectorAll('.c1_element_top > img, .c1_element_bot > img');

let auxiliar_array = Array.from($all_img).map(img => img.src);
let contador = 0;

setInterval(() => {
    // Actualiza las imágenes según el contador
    $all_img[0].src = auxiliar_array[(contador) % auxiliar_array.length];
    $all_img[1].src = auxiliar_array[(contador + 1) % auxiliar_array.length];
    $all_img[2].src = auxiliar_array[(contador + 2) % auxiliar_array.length];
    $all_img[3].src = auxiliar_array[(contador + 3) % auxiliar_array.length];

    // Incrementa el contador para la siguiente iteración
    contador = (contador + 1) % auxiliar_array.length;
}, 500);

