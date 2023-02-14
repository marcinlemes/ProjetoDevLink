function toggleMode() {

const html= document.documentElement


if(html.classList.contains('light')) { 
    html.classList.remove('light')
} else{
    html.classList.add('light')
} 


/*Versão resumida
html.classList.toggle('light')
*/


//Adicionando a troca dos atributos do profile img com o img.setAttribute e o document.querySelector//

const img = document.querySelector('#profile img')

if(html.classList.contains('light')){
    img.setAttribute('src','./assets/ellipsesun.png')
} else{
    img.setAttribute('src', './assets/Ellipse.png')
}


if(html.classList.contains('light')){
    img.setAttribute('alt','Foto de Márcio Lemes sob o céu claro sorrindo')
} else{
    img.setAttribute('alt','foto de márcio lemes usando camisa branca sorrindo e fazendo carinho em um gato.')
}

}