let palabras = ['PROGRAMACION', 'HTML', 'CSS', 'CODIFICAR', 'FUNCTION',];

let palabraSecreta= '';
let selecionarLetra = '';
let aciertos = 5;
let desaciertos = 0;
let respuestas = [];
let espacio = null;

function elegirPalabra(){
  palabraSecreta= palabras[Math.floor(Math.random()*palabras.length)];
}

let empezar = document.querySelector('#empezar');
//let nuevaPalabra = document.querySelector('#nueva-palabra');
//let agregar = document.querySelector('#agregar');
let horca = document.querySelector('#horca');
let final = document.querySelector('#final');
let reset = document.querySelector('#reset');


empezar.addEventListener('click', ()=>{
  empezar.style.display = 'none';
  //nuevaPalabra.style.display = 'none';
  //agregar.style.display = 'none';
  horca.style.display = 'flex';
  alert('La Palabra es parte de Programacion. Suerte!');
  
  elegirPalabra();
  mostrarLetras();

  document.addEventListener('keydown', (e)=>{
    selecionarLetra = e.key.toUpperCase();
    if(!selecionarLetra.match(/[A-Z]/)) alert('Solamente ingresar letras!');
    procesarLetras(selecionarLetra);
  })
})



function mostrarLetras(){
  espacio = palabraSecreta.split('').map(letra => (respuestas.indexOf(letra) >= 0 ? letra : ' _ ')).join(''); 
  document.querySelector('#secreto').textContent = espacio;
  }

function procesarLetras(letra){
  respuestas.indexOf(letra) === -1 ? respuestas.push(letra) : null;

  if(palabraSecreta.indexOf(letra) >= 0){
    mostrarLetras();
    checkWinner();
  } else if(palabraSecreta.indexOf(letra) === -1){
    desaciertos++;
    actualizarHorca();
    checkGameOver();
  }
}

function checkWinner(){
  if(espacio === palabraSecreta){
    final.style.display = 'flex';
    final.textContent = 'Ganaste, felicidades!';
    final.style.color = 'green';
    reset.style.display = 'flex';
    
  }
}

function checkGameOver(){
  if(aciertos=== desaciertos){
    final.style.display = 'flex';
    final.textContent = 'Fin del juego! la palabra era: ' + palabraSecreta;
    final.style.color = 'red';
    reset.style.display = 'flex';
    
  }
}

function actualizarHorca(){
  horca.src = `imagenes1/ahorcado${desaciertos}.png`;
}
function gan(){
  horca.src = `imagenes1/bata${aciertos}.gif`;
}

reset.addEventListener('click', ()=>{
  reset.style.display = 'none';
  final.style.display = 'none';
  palabraSecreta = '';
  selecionarLetra = '';
  aciertos = 5;
  desaciertos = 0;
  respuestas = [];
  espacio = null;
  elegirPalabra();
  mostrarLetras();
})
