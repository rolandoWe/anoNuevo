

let nuevoAno=new Date(`Jan 1 2023 00:00:00`).getTime();
function crear(){
    let hoy=new Date().getTime();
    let ver=nuevoAno-hoy;

    let segundo=1000;
    let minuto=segundo*60;
    let hora=minuto*60;
    let dia=hora*24;

    let dias=Math.floor(ver / (dia));
    let horas=Math.floor((ver % (dia)) / (hora));
    let minutos=Math.floor((ver % (hora))/(minuto));
    let segundos=Math.floor((ver%(minuto))/(segundo));

    if(segundos==1){
    document.querySelector(".f_s").innerHTML="Segundo"; 
    }else{
        document.querySelector(".f_s").innerHTML="Segundos";
    }
    document.querySelector(".dia").innerHTML=dias;
    document.querySelector(".hora").innerHTML=horas;
    document.querySelector(".minuto").innerHTML=minutos;
    document.querySelector(".segundo").innerHTML=segundos;

}
crear()
setInterval(crear,1000);

// ******************************
let estellas="";
[1].forEach(function(f){
    Array(f).fill("").forEach(function(x,d){
        estellas+=([...Array(25).fill("<span class='sp'>*</span>")].join(""))
    })
})
document.querySelector(".cuerda").innerHTML=estellas;

let spans=document.querySelectorAll(".sp");

function color(){
    for(let i=0;i<spans.length;i++){
        let contar=i/100+2;
        spans[i].style.animation="colores "+ contar+"s infinite"
    }
}
color()