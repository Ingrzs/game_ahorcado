//vistas
var vinicio = document.querySelector(".container_main");
var vgame = document.querySelector(".container_game");
var vaddword = document.querySelector(".container_addword");

//botones
var btn_init = document.querySelector(".btn_init") 
var btn_addword = document.querySelector(".btn_addword")
var btn_nuevojuego = document.querySelector(".btn_nuevojuego");
var btn_desistir = document.querySelector(".btn_desistir");
var btn_word = document.querySelector(".btn_word");
var btn_cancelar = document.querySelector(".btn_cancelar");

//variables con datos para el juego
const listapalabras = ['FACEBOOK', 'GOOGLE', 'TWITTER', 'ORACLE'];
var palabraleatoria = listapalabras[Math.floor(Math.random() * listapalabras.length)]

//variables del dibujo
var cuadroahorcado = document.querySelector("canvas");
var pincel = cuadroahorcado.getContext("2d");
    pincel.font="bold 60px arial";
    pincel.fillStyle = "red"; 



//funciones para ir dibujando en el canva
function dibujarTablero(){
    pincel.fillStyle = "whitesmoke";
    pincel.fillRect(0,0,1200,800);
}

function dibujarGuiones() {
    for (var i = 0; i < palabraleatoria.length; i++) {
        pincel.beginPath();
        pincel.moveTo((500+50*i),500);
        pincel.lineTo((525+50*i),500);
        pincel.stroke();
       
    }
}

function dibujarLineas(x, y, x1, y2) {
    pincel.beginPath();
    pincel.moveTo(x, y);
    pincel.lineTo(x1, y2);
    pincel.stroke();
    
}

function dibujarHorca(){
    dibujarLineas(100, 600, 200, 600);
    dibujarLineas(150, 600, 150, 200);
    dibujarLineas(150, 200, 250, 200);
    dibujarLineas(250, 200, 250, 220);
    pincel.stroke();
}


function dibujarCabeza(){
    pincel.beginPath();
    pincel.arc(250, 270, 50, 0, 2*3.14);
    pincel.stroke();
}

function dibujarCuerpo(){
    dibujarLineas(250, 320, 250, 500);
    pincel.stroke();
}

function dibujarPiernaIzq(){
    dibujarLineas(250, 500, 200, 550);
    pincel.stroke()
}

function dibujarPiernaDer(){
    dibujarLineas(250, 500, 300, 550);
    pincel.stroke()
}

function dibujarBrazoIzq(){
    dibujarLineas(250, 350, 200, 400);
    pincel.stroke()
}

function dibujarBrazoDer(){
    dibujarLineas(250, 350, 300, 400);
    pincel.stroke()
}

function dibujarLineaFinal(){
    dibujarLineas(190, 320, 310, 320);
    pincel.stroke()
}


//funcio e iniciar juego
function jugar(){
    var intentoscorrectos = 0;
    var palabraingresada = [];
    var intentosincorrecots = 0;

  dibujarTablero();
  dibujarHorca();
  dibujarGuiones(palabraleatoria);

  document.addEventListener('keydown',function(event){
    const keyName = event.key;
    var patron = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var letra = keyName.toUpperCase();
    var palabrasecreta = palabraleatoria.split("");
       
    if (patron.includes(letra)){

      if (!palabraingresada.includes(letra)){

            // ACIERTOS
            for (var i = 0; i < palabrasecreta.length; i++) {
                if (letra == palabrasecreta[i]) {
                    pincel.fillStyle = "#169d8d";
                    pincel.fillText(letra,(505+50*i),495);
                    intentoscorrectos = intentoscorrectos + 1;
                }
            }
            
            if (intentoscorrectos == palabrasecreta.length) {
                pincel.fillStyle = "#169d8d";
                pincel.fillText("Ganaste, felicidades!",500,200);
                pincel.clearRect(0,0,450,pantalla.height);
                pincel.strokeStyle = "#169d8d";
               
            }
            
            // ERRORES
            if (!palabrasecreta.includes(letra)) 
                {
                if (intentosincorrecots == 0) {
                    dibujarCabeza();
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(letra,(550+50*intentosincorrecots),400);
                    intentosincorrecots = intentosincorrecots + 1;
                }
                else if (intentosincorrecots == 1) {
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(letra,(550+50*intentosincorrecots),400);
                    dibujarCuerpo();
                    intentosincorrecots = intentosincorrecots + 1;
                }
                else if (intentosincorrecots == 2) {
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(letra,(550+50*intentosincorrecots),400);
                    dibujarPiernaIzq();
                    intentosincorrecots = intentosincorrecots + 1;
                }
                else if (intentosincorrecots == 3) {
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(letra,(550+50*intentosincorrecots),400);
                    dibujarPiernaDer();
                    intentosincorrecots = intentosincorrecots + 1;
                }
                else if (intentosincorrecots == 4) {
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(letra,(550+50*intentosincorrecots),400);
                    dibujarBrazoIzq();
                    intentosincorrecots = intentosincorrecots + 1;
                }
                else if (intentosincorrecots == 5) {
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(letra,(550+50*intentosincorrecots),400);
                    dibujarBrazoDer();
                    intentosincorrecots = intentosincorrecots + 1;
                }
                                   
                else if (intentosincorrecots == 6)  {
                    
                    pincel.fillStyle = "#0A3871";
                    pincel.fillText(letra,(550+50*intentosincorrecots),400);
                    dibujarLineaFinal();
                    pincel.fillStyle = "#ad0000";
                    pincel.fillText("Juego Terminado!",500,200);
                    pincel.strokeStyle = "#ad0000";
                    
                }
            }
            //guarda las palabras usadas
            palabraingresada.push(letra);
             
      }else {
            alert("Esa letra ya fue ingresada");
        }
    }else {
        alert("Sólo use letras");
    }        
   
});

};

//funciones para mostar u ocular segun sea el caso
function mostrar(show){
show.style.display = 'block';
}
function ocultar (hide){
    hide.style.display = 'none';
}


//function validar texto en input
function validarpalabra(texto){
  var buscar = /[^A-ZÑ\s]/g;
  var resultado = buscar.test(texto);

  if (resultado) {
      alert("No se permiten vocales con tilde ni caracteres especiales");
      return false;
  }
  else {
      return true;
  }
}
//funcion para agregar la palabra a listadepalabras
function agregarPalabra() {
    var capturarpalabra = document.querySelector(".input_addword");
    var palabracapturada = capturarpalabra.value.toUpperCase(); 

    if (capturarpalabra.value != "") {    
        if (validarpalabra(palabracapturada)) {
            if (!listapalabras.includes(palabracapturada)) {
                listapalabras.push(palabracapturada);
                console.log(listapalabras);
            }
            else {
                alert("La palabra ya existe");    
            }
        }

        capturarpalabra.value = "";
        
    }
    else {
        alert("No se puede guardar un valor vacio!!!");
    }
}



function resetcanva(){
    intentoscorrectos = 0;
    palabraingresada = [];
    intentosincorrecots = 0;
    palabrasecreta = [] 
    pincel.clearRect(0, 0, cuadroahorcado.width, cuadroahorcado.height);
    
}







//iniciando evento de ventana de juego
btn_init.addEventListener("click", function(){
    ocultar(vinicio)
    mostrar(vgame)
   jugar() 
})


btn_addword.addEventListener("click" ,function(){
    ocultar(vinicio)
    mostrar(vaddword)
})

btn_nuevojuego.addEventListener("click", function(){
    resetcanva()
    jugar()
})

btn_desistir.addEventListener("click",function(){
    location.reload(true);
    ocultar(vgame)
    mostrar(vinicio)
})

btn_word.addEventListener("click",function(){
agregarPalabra()
ocultar(vaddword)
mostrar(vgame)
jugar()
})

btn_cancelar.addEventListener("click" ,function(){
    ocultar(vaddword)
    mostrar(vinicio)
})

