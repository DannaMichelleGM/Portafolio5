function saludar() {
    let salida= document.getElementById("salida boton");

    salida.innerText = "Hola gatitos";
}

let otro_boton = document.getElementById("otro_boton");

otro_boton.addEventListener("click", function(){
    let salida= document.getElementById("salida_otro");
    salida.innerText= "Otro saludo a los gaturros 😻";
});

otro_boton.addEventListener("mouseenter", function(){
this.innerText= "Entro el mouse";
});

otro_boton.addEventListener("mouseleave", function(){
    this.innerText= "Salio el mouse";
    });

otro_boton.addEventListener("mousemove", function(){
     this.innerText= "🐀";
 });

 let nombreTxt=document.getElementById("nombre");
 let salida_teclado = document.getElementById("Salida_teclado");

 nombreTxt.addEventListener("keydown" , function(event) {
salida_teclado.innerHTML = `Se presiono <kbd>${event.key}</kbd>`;
 });

 let miForm=document.getElementById("miForm");

 miForm.addEventListener("submit", function(event){
    event.preventDefault();

    //alert("Se intento procesar el formulario");
    let aTxt = document.getElementById("a");
    let bTxt = document.getElementById("b");
    //console.log (a, b);
    let salida = document.getElementById("Salida_suma");

    //let resultado = aTxt.value+bTxt.value;
    let a = parseInt(aTxt.value);
    let b = parseInt(bTxt.value);
    let resultado= a + b;
    salida.innerText = resultado;
 });
