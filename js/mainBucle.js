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

class Pokemon  extends Personajes {
    constructor(vida = (Math.floor(Math.random() * (200 - 100) + 100)), fuerza = 30){
        super();
        this.Vida = vida;
        this.Fuerza = fuerza;
    }
}

function mostrarPokemon1(){
    // alert(Math.floor(Math.random() * (200 - 100) + 100));
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
    

//CREAMOS LOS POKEMON
let vidaPo1 = Math.floor(Math.random() * (200 - 100) + 100);
let vidaPo2 = Math.floor(Math.random() * (200 - 100) + 100);
let po1 = new Pokemon (vidaPo1);
let po2 = new Pokemon (vidaPo2);
po1.Nombre = primerPokemon;
po2.Nombre = segundoPokemon;


let turno = 0;
// let p1 = new Personajes(150, 30);
// p1.Nombre = primerPokemon;
// let p2 = new Personajes(200, 20);
// p2.Nombre = segundoPokemon;

console.log(`Vida ${primerPokemon}: ${po1.Vida}`);
console.log(`Vida ${segundoPokemon}: ${po2.Vida}`);

let contJugador1 = 0;
let contJugador2 = 0;
let pokemonJug1 = 2;
let pokemonJug2 = 2;

for (let i = 0; i < 2; i++) {
    do {
        turno++;
        console.log(`Turno: ${turno}`)
        po2.Vida = po1.atacar(po2);
        console.log(`${primerPokemon} quita ${po1.Fuerza} y la Vida de '${segundoPokemon}' se queda en: ${po2.Vida}`);
        po1.Vida = po2.atacar(po1);
        console.log(`${segundoPokemon} quita ${po2.Fuerza} puntos de vida y la Vida de '${primerPokemon}' se queda en: ${po1.Vida} puntos de vida`);
        console.log(`RESUMEN DEL COMBATE => '${primerPokemon}': ${po1.Vida} y '${segundoPokemon}': ${po2.Vida}`)
    
    } while (po1.Vida > 0 && po2.Vida > 0);
    po1.Vida = Math.floor(Math.random() * (200 - 100) + 100);
    po2.Vida = Math.floor(Math.random() * (200 - 100) + 100);
    if(po2.Vida < po1.Vida){
        console.log(po2.Vida);
        contJugador1++;
        console.log(`${po1.Nombre} ha ganado el pokemon nº ${contJugador1}`);
        console.log(`${po1.Nombre} HA GANADO LA PARTIDA Nº ${contJugador1}`);
        pokemonJug2--;
        console.log(`A ${po2.Nombre} le queda ${pokemonJug2} pokemon menos`);
    } else {
        console.log(po2.Vida);
        contJugador2++;
        console.log(`${po2.Nombre} ha ganado el pokemon nº ${contJugador2}`);   
        console.log(`${po2.Nombre} HA GANADO LA PARTIDA Nº ${contJugador2}`);
        pokemonJug1--;
        console.log(`A ${po1.Nombre} le queda ${pokemonJug1} pokemon menos`);
    
    }
    
}

console.log(po1);
console.log(po2);
 
 }


 


// let nombrePok12 = this.m;
// console.log(nombrePok12);




