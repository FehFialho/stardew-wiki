const botaoTema = document.getElementById("botao-tema");
const main = document.querySelector("main");
const imgTema = document.querySelector(".img-tema");

botaoTema.addEventListener("click", () => {

    const modoClaroAtivo = main.classList.contains("claro")

    main.classList.toggle("claro")

    if (modoClaroAtivo){
        imgTema.setAttribute("src", "./src/img/moon.png") 
    } else {
        console.log("AAAA");
        imgTema.setAttribute("src", "./src/img/sun.png")    
    }
})

