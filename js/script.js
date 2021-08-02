const screenContent = document.getElementById("screenContent")
const screenContentTwo = document.getElementById("screenContentTwo")
const centerContent = document.getElementById("centerContent")

let startCont = false //Se apertou em START

//Start Game
function start(){
    screenContent.style.transform = 'translateY(-600px)'
    screenContentTwo.style.transform = 'translateY(0%)'
    startCont = true
    setTimeout(() => { centerContent.style.animationName = "loopAnima"; }, 480);

}

//Back to Home
function back(){
    screenContent.style.transform = 'translateY(150px)'
    screenContentTwo.style.transform = 'translateY(100%)'
    startCont = false
    centerContent.style.animationName = "";
}

let NumberReference = document.getElementById("numberPhoto")//Resgata o Numero indicador

//Array com os Títulos
let projects = ["Button Generator", "Em breve"]
//Puxa o parágrafo do Título
let projName = document.getElementById("projName")

//Sites dos meus projetos
let urlSite = ["https://guztlimz.github.io/ButtonCodeGenerator/","teste"];

let urlSiteCont = 0;
let contEndArray = false;


//Direita
function RightButton(){
    if(startCont==true){
        if(NumberReference.textContent<projects.length){
            NumberReference.textContent = parseInt( NumberReference.textContent ) + parseInt( 1 )
            projName.textContent = projects[NumberReference.textContent - 1]
            urlSiteCont++;
            console.log(urlSiteCont)
            if(projects[(NumberReference.textContent - 1)] == "Em breve"){
                document.getElementById("ShapePhoto").style.backgroundColor = "#3a3247"
                contEndArray = true
            }
        }
    }
}

//Esquerda
function LeftButton(){
    if(startCont==true){
        if(NumberReference.textContent>1){
            NumberReference.textContent = parseInt( NumberReference.textContent ) - parseInt( 1 )   
            projName.textContent = projects[NumberReference.textContent - 1]  
            urlSiteCont-= 1;
            console.log(urlSiteCont)
            if(projects[(NumberReference.textContent - 1)] != "Em breve"){
                document.getElementById("ShapePhoto").style.backgroundColor = "#6924FD"
                contEndArray = false
            }
        }
    }
}
function redirect(){
    if(contEndArray == false){
        window.location.href = urlSite[urlSiteCont];
    }
    else{
        window.location.href = "https://www.google.com/"
    }
}
