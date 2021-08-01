const screenContent = document.getElementById("screenContent")
const screenContentTwo = document.getElementById("screenContentTwo")
const centerContent = document.getElementById("centerContent")

let startCont = false //Se apertou em START
let NumberReference = document.getElementById("numberPhoto")//Resgata o Numero indicador

//Array com os Títulos
let projects = ["Button Generator","RuthVagas", "FireDoom"]
//Puxa o parágrafo do Título
let projName = document.getElementById("projName")

function start(){
    screenContent.style.transform = 'translateY(-600px)'
    screenContentTwo.style.transform = 'translateY(0%)'
    startCont = true
    setTimeout(() => { centerContent.style.animationName = "loopAnima"; }, 480);

}

function back(){
    screenContent.style.transform = 'translateY(150px)'
    screenContentTwo.style.transform = 'translateY(100%)'
    startCont = false
    centerContent.style.animationName = "";
}

function RightButton(){
    if(startCont==true){
        if(NumberReference.textContent<projects.length){
            NumberReference.textContent = parseInt( NumberReference.textContent ) + parseInt( 1 )
            projName.textContent = projects[NumberReference.textContent - 1] 
        }
    }
}
function LeftButton(){
    if(startCont==true){
        if(NumberReference.textContent >1){
            NumberReference.textContent = parseInt( NumberReference.textContent ) - parseInt( 1 )   
            projName.textContent = projects[NumberReference.textContent - 1]  
        }
    }
}
function redirect(){
    window.location.href = "http://google.com";
}
