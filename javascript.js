// import {array_products} from "../lista_productos.js";
// import {evento_menu} from "../javascript";
// import {eventos_menuDesplegable} from "../javascript";

// const $header_template=document.querySelector('#header');
// const $footer_template=document.querySelector('#footer');
// const $body=document.querySelector('body');
//
// const $header_clone=$header_template.content.cloneNode(true);
// const $footer_clone=$footer_template.content.cloneNode(true);
//
//
// $body.prepend($header_clone);
// $body.appendChild($footer_clone);


function event_header(){
    const $category_style=document.createElement('style');
    $category_style.innerHTML=`
    .active_span{
    opacity: 1;
    }

`
    document.head.appendChild($category_style);
    document.querySelectorAll('.span').forEach(span=>{

        span.addEventListener('mouseover',event=>{

            if(event.target.matches('.span')) {

                const next = event.target.nextElementSibling;
                next.classList.toggle("active_span");
            }
        })

        span.addEventListener('mouseout',event=>{


            if(event.target.matches('.span')) {

                const next = event.target.nextElementSibling;
                next.classList.toggle("active_span");
            }

        })
    })


}

event_header();

function listaHeader_zIndex(){
    const style_desplegable=document.createElement('style');
    style_desplegable.innerHTML = `
    .lista{
    z-index: 2;
    }    
    .span{
    
    }
    .active_span{
    opacity:1;
    }
`

    document.head.appendChild(style_desplegable);
}
listaHeader_zIndex();

function createCirclesImagenes() {

    const $style_circles = document.createElement('style');

    $style_circles.innerHTML = `
    body{
    // height:100vh;
    }
    header{
 
    }
    main{
 
    }
  
    .slider_circles_main{
       display: flex;
       flex-direction: column;
      position: relative;
      margin-top: 50px;
      aspect-ratio: 16/9;
      z-index: 1;
   
    }
    .imagenes_container_slider{
      display:flex;
      width: 100%;
     
    
    }
    .img_circle{
        min-width: 100%;
        width: 100%;
        position:absolute;
        top:0;
        left:0;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        // aspect-ratio: 16/9;
    
    }
    .active{
        opacity: 1;
     }
`;
    const $style_carrousel = document.createElement('style');
    $style_carrousel.innerHTML = `
    .carousel_top{
     overflow: hidden;
    }

`
    const $style_arrow = document.createElement('style');
    $style_arrow.innerHTML = `
    .container_info{
    margin-top: 25px;
    }

    .arrow_carrousel{
        display: flex;
        position: absolute;
        top:50%;
        transform: translateY(-50%);
        width:100%;
        padding: 0 10px;
        justify-content: space-between;
    }
    .arrow_carrousel>span{
    font-size: 75px;
    color: rgba(10,10,10,0.9);
    }

`
    document.head.appendChild($style_circles);
    document.head.appendChild($style_carrousel);
    document.head.appendChild($style_arrow);
}
function controlador_circles(){

    let contador_2=0;
    const $all_circle=document.querySelectorAll('.anim_circle');
    $all_circle[contador_2].classList.toggle('active_circle');

    let auxiliar_1=setInterval(()=>{

        $all_circle[contador_2].classList.remove('active_circle');
        contador_2=(contador_2+1)%$all_circle.length;
        $all_circle[contador_2].classList.toggle('active_circle');

    },5000);
    document.querySelector('.slider_circles_main').addEventListener('click',(event)=> {

        clearInterval(auxiliar_1);

        if (event.target.matches('.arrow_left')) {

            $all_circle[contador_2].classList.remove('active_circle');
            contador_2 = ((contador_2 - 1) + $all_circle.length) % $all_circle.length;
            $all_circle[contador_2].classList.toggle('active_circle');

        }
        if (event.target.matches('.arrow_right')) {

            $all_circle[contador_2].classList.remove('active_circle');
            contador_2 = ((contador_2 + 1) % $all_circle.length);
            $all_circle[contador_2].classList.toggle('active_circle');
        }

        auxiliar_1=setInterval(()=>{

            $all_circle[contador_2].classList.remove('active_circle');
            contador_2=(contador_2+1)%$all_circle.length;
            $all_circle[contador_2].classList.toggle('active_circle');


        },5000)
    })
}
function controlador_imagenes(){

    let contador=0;
    const $imagenes=document.querySelectorAll('.img_circle');
    $imagenes[contador].classList.toggle('active');

    let auxiliar_2=setInterval(()=>{

        $imagenes[contador].classList.remove('active');
        contador=(contador+1)%$imagenes.length;
        $imagenes[contador].classList.toggle('active');

    },5000)
    document.querySelector('.slider_circles_main').addEventListener('click',(event)=>{

        clearInterval(auxiliar_2);

        if(event.target.matches('.arrow_left')){

            $imagenes[contador].classList.remove('active');
            contador=((contador-1)+$imagenes.length)%$imagenes.length;
            $imagenes[contador].classList.toggle('active');

        }
        if(event.target.matches('.arrow_right')){

            $imagenes[contador].classList.remove('active');
            contador=((contador+1)%$imagenes.length);
            $imagenes[contador].classList.toggle('active');
        }

        auxiliar_2=setInterval(()=>{

            $imagenes[contador].classList.remove('active');
            contador = (contador + 1) % $imagenes.length;
            $imagenes[contador].classList.toggle('active');

        },5000);

    });
}
function animationCirclesImagenes() {

    createCirclesImagenes()

    const $all_imagenes = document.querySelectorAll('.img_circle');

    $all_imagenes.forEach((element, index) => {
        const $circle = document.createElement('span');
        $circle.classList.add('anim_circle', `anime_circle_${index + 1}`);
        const $style_circle = document.createElement('style');
        $style_circle.innerHTML = `
            .anim_circle{
            width: 17.5px;
            display: block;
            height: 17.5px;
            border-radius: 50%;
            border:1px solid black;
            background: transparent;
            }
            
        `
        document.querySelector('head').appendChild($style_circle);
        document.querySelector('.circles_animated_carrousel').appendChild($circle);

    })

    const $circles_animated_carrousel = document.querySelector('.circles_animated_carrousel');
    const $style_circles_container = document.createElement('style');
    $style_circles_container.innerHTML = `
            .circles_animated_carrousel{
                position: absolute;
                top: 95%;
                transform: translateX(50%);
                right:50%;
                display: flex;
                gap: 7.5px;
            }
            .active_circle{
            background: black;
            }
            
            `

    document.head.appendChild($style_circles_container);


    controlador_circles();
    controlador_imagenes();
}

animationCirclesImagenes();

function all_products(){
    const $container_products=document.querySelector('.container_products');
    const $container_products_style=document.createElement('style');
    $container_products_style.innerHTML=`
    body{
    background: #F2F0EB;
    }
    .container_products{
     gap: 25px;
     border-radius: 15px;
     width:90%;
     margin: 0 auto;
    }
    .product_element{
    border: 1px solid black;
    border-radius: 15px;
    display: flex;
    width:100%;
 
    align-items: center;
    justify-content: center;
    position:relative;
    // min-height: 300px;
    }
    .product_element>h1{
    text-align:center;
    font-size: 1px;
    position: absolute;
    }
    
`

    document.head.appendChild($container_products_style);

    const array_background=[
        "TOCOBO.webp","NUMBUZIN.png","COSRX.webp","HARUHARU.webp","BEAUTYOFJOSEON.webp"
        ,"CENTELA.png","NACIFIC.webp","EUCERIN.jpg","AVENE.png","LAROCHEPOSAY.png"
    ]
    const $product_element=document.querySelectorAll('.product_element');

    $product_element.forEach((element,index)=>{

        element.style.background=`url(Imagenes-main/${array_background[index]}`;
        element.style.backgroundPosition="center center";
        element.style.backgroundRepeat="no-repeat";
        element.style.backgroundSize="contain";
        // element.style.backgroundOrigin="content-box";

    })
}
all_products();


const array_products=[
    {
        dataId: 1,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 2,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 3,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 4,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 5,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 6,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 7,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 8,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 9,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 10,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 11,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 12,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 13,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 14,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    }
]


function masVendidos_1(){
    const $mas_Vendido=document.querySelector('.carousel_masVendidos_one');

    for(let i=0;i<array_products.length;i++){
        const $element_carousel=document.createElement('div');
        $element_carousel.classList.add('masV_element',`masV_element_${i+1}`);

        const figure=document.createElement('figure');
        figure.innerHTML=`
    <img src="Imagenes-main/${array_products[i].imgs[0]}">
    <figcaption>${array_products[i].marca_product}</figcaption>
    <figcaption>${array_products[i].sub_tittle}</figcaption>
    <figcaption>${array_products[i].price}</figcaption>

    `
        const figure_style=document.createElement('style');

        figure_style.innerHTML=`
        .masV_element_${i+1}>figure{
          display: flex;
          width: 300px;
          height: 450px;
          flex-direction: column;
          align-items:center;
          justify-content: center;
        }
        .masV_element_${i+1}:hover{
         transition: scale 0.25s ease-in-out;
        
        }
        .masV_element_${i+1}>figure>img{
            height: 70%;
            object-fit: cover;
            
        }
        .masV_element_${i+1}>figure>figcaption{
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        }
        `
        document.head.appendChild(figure_style);
        $element_carousel.appendChild(figure);
        $mas_Vendido.appendChild($element_carousel);
    }
}
masVendidos_1()

const array_products_2=[
    {
        dataId: 1,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 2,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 3,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 4,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 5,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 6,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 7,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 8,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 9,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 10,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 11,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 12,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 13,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    },
    {
        dataId: 14,
        marca_product: "TOCOBO",
        tittle_description: "hola hola hola hola hola tittle description",
        price: "100",
        imgs: ["ciudad-1.jpg", "Tocobo1.webp", "Tocobo3.webp", "Tocobo4.jpg"],
        info_1: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"],
        info_2: ["cucucucuc 1", "cucucucu 2", "cucucucu 3", "cucucucu 4", "cucucucuc 5"],
        sub_tittle:"Exfoliante de rostro tocobo"
    }
]


function masVendidos_2(){
    const $mas_Vendido_2=document.querySelector('.carousel_masVendidos_two');

    for(let i=0;i<array_products_2.length;i++){
        const $element_carousel_2=document.createElement('div');
        $element_carousel_2.classList.add('masV_element_2',`masV_element_2_${i+1}`);

        const figure_2=document.createElement('figure');
        figure_2.innerHTML=`
    <img src="Imagenes-main/${array_products[i].imgs[0]}">
    <figcaption>${array_products[i].marca_product}</figcaption>
    <figcaption>${array_products[i].sub_tittle}</figcaption>
    <figcaption>${array_products[i].price}</figcaption>

    `
        const figure_style=document.createElement('style');

        figure_style.innerHTML=`
        .masV_element_2_${i+1}>figure{
          display: flex;
          width: 300px;
          height: 450px;
          flex-direction: column;
          align-items:center;
          justify-content: center;
        }
        .masV_element_2_${i+1}:hover{
        transition: scale 0.25s ease-in-out;
        }
        .masV_element_2_${i+1}>figure>img{
            height: 70%;
            object-fit: cover;
            
        }
        .masV_element_2_${i+1}>figure>figcaption{
        height: 10%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        }
        
        `
        document.head.appendChild(figure_style);
        $element_carousel_2.appendChild(figure_2);
        $mas_Vendido_2.appendChild($element_carousel_2);
    }
}
masVendidos_2()


function responsive_menu(){
    const array_menu=[
        {dataIconMenu: '1',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '2',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '3',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '4',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '5',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"},
        {dataIconMenu: '6',texto1:"hola",texto2:"hola2",texto3:"hola3",texto4:"hola4",texto5:"hola5",texto6:"hola6"}
    ];


    function menu_left(){

        const $div_menu=document.createElement('div');
        $div_menu.classList.add('menu_responsive');
        const $container_menu=document.querySelector('.nav_div');
        function menu_inner() {
            $div_menu.innerHTML = `
    <h1>K-MOON</h1>
    <ul>
    <li>INICIO<i data-icon-menu="1" class="fa-solid fa-angle-down"></i></li>
    <li>MARCAS<i data-icon-menu="2" class="fa-solid fa-angle-down"></i></li>
    <li>CUIDADO DE LA PIEL<i data-icon-menu="3" class="fa-solid fa-angle-down"></i></li>
    <li>DERMOCOSMETICA<i data-icon-menu="4" class="fa-solid fa-angle-down"></i></li>
    <li>SKINCARE COREANO<i data-icon-menu="5" class="fa-solid fa-angle-down"></i></li>
    <li>MAQUILLAJE<i data-icon-menu="6" class="fa-solid fa-angle-down"></i></li>
    </ul>  
    <i class="fa-solid fa-user"></i>
`
            return $div_menu.innerHTML;
        }

        menu_inner();

        function menu_inner_style(){
            const $style_menu=document.createElement('style');
            $style_menu.innerHTML=`
    .nav_div{
    position:relative;
    }
    .menu_responsive{
    z-index: 2;
    position:absolute;
    left: 0;
    top: 100%;
    border: 2px solid black;
    width: 325px;
    height: 550px;
    display: none;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background: rgba(150,150,150,0.8);
    border-radius:15px;
  
    }
    .active_menu{
    display: flex;
    background: rgba(150,150,150,0.8);
    }
    .menu_responsive > ul{
    display: flex;
    flex-direction:column;
    gap: 35px 0;
    padding: 0 35px;
    list-style: none;
    align-items: center;
    width: 100%;
  
    }
    .menu_responsive > ul > li{
    padding: 7.5px 25px;
    border: 1px solid transparent;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    background: lightblue;
    gap: 15px;
    width: 100%;
    // text-align: center;
    }
    .menu_responsive > ul > li:hover{
    border-color: black;
    color: white; 
    
    }
    .menu_responsive>ul>li>i:hover{
    color: blue;
   
    }
    // .li_active {
    //    opacity:0;
    // }


    .menu_responsive > i{
    
    border: 1px solid black;
    border-radius: 50%;
    padding: 10px;
    
    
    }
`
            document.head.appendChild($style_menu);


            $container_menu.appendChild($div_menu);

            return $container_menu;
        }
        menu_inner_style();

        $container_menu.addEventListener('click', (e) => {

            if (e.target.matches('#lista_1 > li:nth-of-type(3)>i')) {
                $div_menu.classList.toggle('active_menu');
            }

            if (e.target.matches('.menu_responsive>ul>li>i')) {

                const iClicked=e.target.closest('li');
                iClicked.classList.toggle('li_active');

                const menu_comodin=document.querySelector('.list_two_dinamic');

                if(menu_comodin) {
                    menu_comodin.remove();
                    menu_inner();
                }
                else {

                    const all_i = document.querySelectorAll('.menu_responsive > ul > li>i');
                    const all_li = document.querySelectorAll('.menu_responsive > ul > li');
                    const icon = e.target.getAttribute('data-icon-menu');
                    const encontrado = array_menu.find((dataIconMenu) => dataIconMenu.dataIconMenu == icon);

                    // Convertimos los `NodeList` a un array y recorremos hacia atrás
                    [...all_i].forEach((el, index) => {
                        if (el.getAttribute('data-icon-menu') !== icon) {
                            // Eliminamos el <li> asociado al <i> si no coincide con el icono
                            all_li[index].remove();
                        }
                    });

                    const list_two = document.createElement('ul');
                    list_two.classList.add('list_two_dinamic');
                    const list_two_style = document.createElement('style');
                    list_two_style.innerHTML = `
            .list_two_dinamic{
            list-style: none;
            display:flex;
            flex-direction: column;
            width: 100%;
            align-items: center;
            justify-content: center;
            gap: 20px;
          
            }
            .list_two_dinamic>li{
            border:1px solid black;
            padding: 7.5px;
            width: 100%;
            border-radius: 15px;
            text-align: center;
            }
            .list_two_dinamic>li:hover{
            color: white;
            background: lightblue;
            }
            
            `
                    document.head.appendChild(list_two_style);

                    Object.keys(encontrado).forEach(key => {

                        if (key !== 'dataIconMenu') {
                            const li_two = document.createElement('li');
                            li_two.textContent = encontrado[key];
                            list_two.appendChild(li_two);
                        }
                    })

                    document.querySelector('.menu_responsive > ul').appendChild(list_two);
                }
            }
        });

        const $menu = document.querySelector('.menu_responsive');
        const mediaQuery = window.matchMedia('(max-width: 769px)');


        function handleMenuOnResize() {
            if (!mediaQuery.matches) {
                // Si el ancho de la ventana es mayor a 750px, escondemos el menú
                // $menu.classList.add('active_menu');
                // icon_width.style.display="none";
            }
        }

// Escuchar el evento de redimensionamiento
        window.addEventListener('resize', handleMenuOnResize);

// Ejecutar la función al cargar la página para asegurarnos que el menú esté en el estado correcto
        handleMenuOnResize();

    }
    menu_left()
}
responsive_menu()

function eventos_menuDesplegable(){

    const $menu_desplegable=document.querySelector('.menu_desplegable');
// Define los estilos para el desplegable
    const style_desplegable = document.createElement('style');
    style_desplegable.innerHTML = `
    .lista {
        z-index: 2;
        pointer-events: none;
        opacity: 0; /* Por defecto, oculta la lista */
        transition: opacity 0.3s ease; /* Animación de transición para la opacidad */
    }
    .active_span {
        opacity: 1;
    }
    .lista_desactiv {
        pointer-events: auto; /* Permite interacción con la lista cuando está activa */
        opacity: 1; /* Muestra la lista cuando está activa */
    }

    .lista > li {
        border: 1px solid black;
    }
`;

// Agrega los estilos al documento
    document.head.appendChild(style_desplegable);

    const $span_all = document.querySelectorAll('.span');
    const $lista_all = document.querySelectorAll('.lista');

// Añadir el evento mouseenter a los spans para mostrar la lista
    $span_all.forEach(span => {
        span.addEventListener('mouseenter', () => {
            span.nextElementSibling.classList.add('active_span', 'lista_desactiv');
        });
    });

// Ocultar la lista cuando el mouse sale de la lista o el span
    $span_all.forEach(span => {
        span.addEventListener('mouseleave', () => {
            setTimeout(() => { // Timeout para permitir que el mouse entre en la lista antes de ocultarla
                if (!span.nextElementSibling.matches(':hover')) { // Verifica si el mouse no está sobre la lista
                    span.nextElementSibling.classList.remove('active_span', 'lista_desactiv');
                }
            }, 100);
        });
    });

    $lista_all.forEach(ul => {
        ul.addEventListener('mouseleave', () => {
            ul.classList.remove('active_span', 'lista_desactiv');
        });
    });

// Añadir el evento mouseenter a los elementos li
    $lista_all.forEach(ul => {
        ul.querySelectorAll('li').forEach(li => {
            li.addEventListener('mouseenter', () => {
                console.log("Mouse sobre un li");
                li.style.background = "red"; // Cambia el color del li al pasar el mouse
            });
            li.addEventListener('mouseleave', () => {
                li.style.background = ""; // Vuelve al color original cuando el mouse sale
            });
        });
    });
}

eventos_menuDesplegable();

document.querySelector('.container_products').addEventListener('click',(event)=>{

    if(event.target.classList.contains('product_element')){
        const element_clicked=event.target.getAttribute('data-marca');

        window.location='main.html';

        // sessionStorage()




    }





})







