class Personajes {
    constructor(Vida = 100, Fuerza =10){
        this.Nombre = '';
        this.Vida = Vida;
        this.Fuerza = Fuerza;
      
    }

    atacar(Enemigo){
        return Enemigo.Vida - this.Fuerza
    }

    
}

function mostrarPokemon1(){
     
    nombrePok1 = document.getElementById('nombre1').value;
    let primerPokemon = document.getElementById('pokemon1').innerHTML = nombrePok1;
    nombrePok2 = document.getElementById('nombre2').value;
    let segundoPokemon = document.getElementById('pokemon2').innerHTML = nombrePok2;

    //GENERO NUM ALEATORIO DONDE N SERA EL ARRAY DE IMAGENES
    function rand(n){
        // creamos un numero al azar entre 1 y 10 (o cual sea la cantidad de imágenes)
         return(Math.floor(Math.random() * n + 1 ));
        }

    //ARRAY DE IMAGENES
    let generarImagenAleatorio = new Array();
    generarImagenAleatorio[0] = "images/mario.jpg";
    generarImagenAleatorio[1] = "images/princesa.jpg";
    generarImagenAleatorio[2] = "images/estrella.jpg";
    generarImagenAleatorio[3] = "images/sol.jpg";

    //CAMBIAR LA RUTA DEL SRC DE LAS IMAGENES
    document.getElementById('img1').src = generarImagenAleatorio[rand(generarImagenAleatorio.length)-1];
    document.getElementById('img2').src = generarImagenAleatorio[rand(generarImagenAleatorio.length)-1];
    document.getElementById('img1-2').src = generarImagenAleatorio[rand(generarImagenAleatorio.length)-1];
    



let turno = 0;
let p1 = new Personajes(150, 30);
p1.Nombre = primerPokemon;
let p2 = new Personajes(200, 20);
p2.Nombre = segundoPokemon;

console.log(`Vida ${primerPokemon}: ${p1.Vida}`);
console.log(`Vida ${segundoPokemon}: ${p2.Vida}`);

let contJugador1 = 0;
let contJugador2 = 0;
let pokemonJug1 = 3;
let pokemonJug2 = 3;

for (let i = 0; i < 3; i++) {
    do {
   
        turno++;
        console.log(`Turno: ${turno}`)
        p2.Vida = p1.atacar(p2);
        console.log(`${primerPokemon} quita ${p1.Fuerza} y la Vida de '${segundoPokemon}' se queda en: ${p2.Vida}`);
        p1.Vida = p2.atacar(p1);
        console.log(`${segundoPokemon} quita ${p2.Fuerza} puntos de vida y la Vida de '${primerPokemon}' se queda en: ${p1.Vida} puntos de vida`);
        console.log(`RESUMEN DEL COMBATE => '${primerPokemon}': ${p1.Vida} y '${segundoPokemon}': ${p2.Vida}`)
    
    } while (p1.Vida > 0 && p2.Vida > 0);
    p1 = new Personajes((Math.random()*200 - 100)-1,30);
    console.log(`PRUEBA DE VIDA ${p1.Vida}`);
    p2 = new Personajes(200,20);
    if(p2.Vida <= 0){
        console.log(`${p1.Nombre} ha ganado el primer pokemon`);
        contJugador1++;
        console.log(`${p1.Nombre} HA GANADO ${contJugador1} partida/s`);
        pokemonJug1--;
    } else {
        console.log(`${p2.Nombre} ha ganado el primer pokemon`);
        contJugador2++;
        console.log(`${p2.Nombre} HA GANADO ${contJugador2} partida/s`);
        pokemonJug2--;
    
    }
    
}

console.log(p1);
console.log(p2);
 
 }


 


// let nombrePok12 = this.m;
// console.log(nombrePok12);




