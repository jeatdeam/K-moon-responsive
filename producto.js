export class Product{
    constructor(marca_product,tittle_description,price,imagenes,lista_1,lista_2,container){
    this.marca_product= marca_product;
    this.tittle_description=tittle_description;
    this.price=price;
    this.imagenes=imagenes;
    this.lista_1=lista_1;
    this.lista_2=lista_2;
    this.container=container;
}
    crear() {

















        const $plantilla=document.createElement(this.container[1]);
            $plantilla.classList.add(this.container[this.container.length-1]);

        const $section = document.createElement('section');
        $section.classList.add('container');
        $plantilla.appendChild($section);

        const $h1_container = document.createElement('h1');
        $h1_container.textContent=this.marca_product;
        $section.appendChild($h1_container);

        /*-----------------------section .container-----------------------------*/
        const $div_container_bot = document.createElement('div');
        $div_container_bot.classList.add('container_bot');
        $section.appendChild($div_container_bot);
        /*----------------------------------------------------*/
        const $div_container_element_one = document.createElement('div');
        $div_container_element_one.classList.add('element', 'element_container_1');
        $div_container_bot.appendChild($div_container_element_one);

        const $div_section_top = document.createElement('div');
        $div_section_top.classList.add('section_top');
        $div_container_element_one.appendChild($div_section_top);



        const $div_section_bot = document.createElement('div');
        $div_section_bot.classList.add('section_bot');
        $div_container_element_one.appendChild($div_section_bot);
        // /*----------------------Requiere forEach-------------------------------*/


        this.imagenes.forEach((element,index)=>{
            const $img_element=document.createElement("img");

            if(index===0){
                const $img_element=document.createElement("img");
                $img_element.setAttribute('src',`Imagenes/${element}`);
                $div_section_top.appendChild($img_element);
            } else {
                const $img_element=document.createElement("img");
                $img_element.classList.add('img', `img_${index+1}`)
                $img_element.setAttribute('src',`Imagenes/${element}`);
                $div_section_bot.appendChild($img_element);
            }

        })

        /*------------------------------------------------------------------------------*/
        const $div_container_element_two = document.createElement('div');
        $div_container_element_two.classList.add('element', 'element_container_2');
        $div_container_bot.appendChild($div_container_element_two);

        const $h2_element_two = document.createElement('h2');
        $h2_element_two.textContent = this.tittle_description;
        $div_container_element_two.appendChild($h2_element_two);

        const $price_stars = document.createElement('div');
        $price_stars.classList.add('price_stars');
        $div_container_element_two.appendChild($price_stars);

        const $h3_price = document.createElement('h3');
        $h3_price.classList.add('price');
        $h3_price.textContent=`S/. ${this.price}0`
        $price_stars.appendChild($h3_price);

        const $ul_stars = document.createElement('ul');
        $ul_stars.classList.add('stars');
        $price_stars.appendChild($ul_stars);

        for (let i = 0; i < 5; i++) {
            const $li_star = document.createElement('li');
            const $li_i = document.createElement('i');
            $li_i.classList.add('fa-solid', 'fa-star');
            $li_star.appendChild($li_i);
            $ul_stars.appendChild($li_star);
        }

        /*----------UL .lista_info---------------*/

        const $hr=document.createElement('hr');
        $div_container_element_two.appendChild($hr);

        const $ul_info = document.createElement('ul');
        $ul_info.classList.add('lista_info');
        $div_container_element_two.appendChild($ul_info);

        const $hr_2=document.createElement('hr');
        $div_container_element_two.appendChild($hr_2);


        this.lista_1.forEach((element,index)=>{
            const $li_info=document.createElement('li');
            const $span=document.createElement('span');
            $span.textContent=element;
            $li_info.appendChild($span);
            const $span_2=document.createElement('span');
            $span_2.textContent=this.lista_2[index];
            $li_info.appendChild($span_2);
            $ul_info.appendChild($li_info);
        })

        /*--------------------------div container_lista_2---------------------------------*/
        const $container_lista_two = document.createElement('div');
        $container_lista_two.classList.add('container_lista_2');
        $div_container_element_two.appendChild($container_lista_two);

        const $h3_lista_two = document.createElement('h3');
        $h3_lista_two.textContent="todo sobre este articulo majestad";
        $container_lista_two.appendChild($h3_lista_two);



        const $ul_lista_two = document.createElement('ul');
        $ul_lista_two.classList.add('lista_info_2');
        $container_lista_two.appendChild($ul_lista_two);

        for(let i=0;i<5;i++){
            const $li_lista_two=document.createElement('li');
            $li_lista_two.textContent="Un suero diario de acido pantogenico ligero(vitamina B5) que hidrata y controla\n" +
                "instantaneamente el exceso de aceite para calmar y prevenir brote";
            $ul_lista_two.appendChild($li_lista_two);

        }
    // document.querySelector('body').appendChild($plantilla);
        document.querySelector(this.container[0]).appendChild($plantilla);
    }
}