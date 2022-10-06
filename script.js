let numeroRandom = parseInt(Math.random() * 100) ;
let url ="https://pokeapi.co/api/v2/pokemon/"+numeroRandom;
console.log(url);
let pElement = document.querySelector(".texto");
let figura = document.getElementById("figura");
let urlImagenPKM = "";
let pokemon = document.querySelector(".pokemon");
console.log(pokemon);

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        {
            console.log(data.abilities[0].ability);
            console.log("Order " +data.order);
            console.log(data.name);
            let figuraImg = document.createElement("img");
            figura.appendChild(figuraImg);
            console.log(data.name.length);
            let nombrePKM = [] 
            nombrePKM = data.name.split("");
            console.log(nombrePKM);
            for(let i=0; i < nombrePKM.length; i ++)
            {
                let letra = document.createElement("div");
                letra.setAttribute("contentEditable","")
                letra.dataset.pos = i;
                letra.classList.add("letra")
                //letra.innerHTML = nombrePKM[i];
                letra.innerHTML = " _ "
                pokemon.appendChild(letra);          
            }
            let tipo = data.types[0].type.name; console.log(tipo);
            let ataque = data.moves[2].move.name; console.log(ataque);
            let letra = data.name.substr(0,1); console.log(letra);
            urlImagenPKM = data.sprites.other.home.front_default; console.log(urlImagenPKM);
            figuraImg.setAttribute("src",urlImagenPKM);
            figuraImg.classList.add("ocultar");
            pElement.innerHTML = data.name ;
            let letrasUsuario = document.querySelectorAll(".letra");
            console.log(letrasUsuario);
            
            for(let p of letrasUsuario){
                console.log(p);
                p.addEventListener("keydown", (e) => {
                    p.innerHTML =""
                    p.style.textDecoration = "underline .5px red";
                    let p1 = p.childNodes[0];
                    //[0].outerText
                    console.log(p1);
                })
            }
        }
    })

// let letrasUsuario = document.querySelectorAll(".letra");
// console.log(letrasUsuario);
// let i=0;


// letrasUsuario.forEach(el => el.addEventListener("keydown",(e)=>{
    
//     console.log(nombrePKM[i]);
//     el.innerHTML += nombrePKM[i];
//     i++;
// }))

