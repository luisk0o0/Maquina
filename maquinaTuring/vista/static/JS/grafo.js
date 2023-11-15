function mensajeVoz(idioma){
    if(document.getElementById("mensajeAutomata")!=null){
        let textoMens=new SpeechSynthesisUtterance();
        if (idioma=="Espaniol") {
            textoMens.lang = "es-ES";
            textoMens.voice=speechSynthesis.getVoices()[5];
        }
        if (idioma=="English") {
            textoMens.lang = "en-US";
            textoMens.voice=speechSynthesis.getVoices()[2];
        }
        if (idioma=="Frances") {
            textoMens.lang = "fr-FR";
            textoMens.voice=speechSynthesis.getVoices()[7];
        }
        textoMens.rate=1;
        textoMens.volume=1;
        textoMens.text=document.getElementById("mensajeAutomata").innerText;
        speechSynthesis.speak(textoMens);
    }
}
function historialEspacio(){
    if(document.getElementById("historial")!=null){
        let tabla=document.getElementById("historial");
        let numFilas=tabla.rows.length;
        let espacio=numFilas*7;
        let grafo=document.getElementById("grafo");
        let medida=espacio+"mm";
        grafo.style.marginBottom=medida;
        document.getElementById("contCinta").style.marginBottom=medida;
    }
}

function obtenerPrimeraParteCad(cadenaCompleta) {
    let primeraParte=null;
    for (let i = 0; i < cadenaCompleta.length; i++){
        if (cadenaCompleta[i]=='"') {
            primeraParte=cadenaCompleta.substring(0,i-1);
            break;
        }
    }
    return primeraParte
}
function obtenerSegundaParteCad(cadenaCompleta) {
    let segundaParte=null;
    let indiceFinal=cadenaCompleta.length-1;
    for (let i = indiceFinal; i>=0; i--){
        if (cadenaCompleta[i]=='"') {
            segundaParte=cadenaCompleta.substring(i+2,cadenaCompleta.length);
            break;
        }
    }
    return segundaParte
}
function validarPalabra(cadenaCompleta) {
    let palabraIndiceInicial=cadenaCompleta.indexOf('"');
    let valido=false;
    let palabra=null;
    for (let i = cadenaCompleta.length; i>=0; i--) {
        if (cadenaCompleta[i]=='"') {
            palabra=cadenaCompleta.substring(palabraIndiceInicial+1,i);
            break;
        }
    }
    valido=esValido(palabra);
    return valido;
}
function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
    // Reemplaza cadenaVieja por cadenaNueva en cadenaCompleta
    
       for (let i = 0; i < cadenaCompleta.length; i++) {
          if (cadenaCompleta.substring(i, i + cadenaVieja.length) == cadenaVieja) {
             cadenaCompleta= cadenaCompleta.substring(0, i) + cadenaNueva + cadenaCompleta.substring(i + cadenaVieja.length, cadenaCompleta.length);
          }
       }
       return cadenaCompleta;
}
function esValido(palabra) {
    let palabraVal=null;
    if (palabra.length > 0) {
        for (let i = 0; i < palabra.length; i++) {
            if (palabra[i]=="a" || palabra[i]=="b") {
                palabraVal=true;
            }
            else{
                palabraVal=null;
                break;
            }
        }
    }
    return palabraVal;
}

function controlPasoSeleccionado(controlPasoEscog) {
    let url=document.getElementById("evaluador").action;
    let urlPasoFinal=null;
    let seleccion=document.getElementById("pasoSelec").innerHTML;
    let auxValid=0;
    if (controlPasoEscog=="null") {
        controlPasoEscog=document.getElementById("evaluarPaso").value; 
    }
    if (controlPasoEscog=="si") {
        document.getElementById("contCinta").style.marginBottom="40mm";
    }
    let controlPasoActual=null;
    for (let i = url.length; i>=0; i--) {
        if (url[i]=="/" && urlPasoFinal!=null) {
            controlPasoActual=url.substring(i+1,urlPasoFinal);
            break;
        }
        if (url[i]=="/"){
            auxValid++;
        }
        if (auxValid==2){
            urlPasoFinal=i;
            auxValid=0;
        }
    }
    let seleccionActual=null;
    for (let j = 0; j < seleccion.length; j++) {
        if (seleccion[j]==":") {
            seleccionActual=seleccion.substring(j+1);
            break;
        }
    }
    document.getElementById("pasoSelec").innerHTML=seleccion.replace(seleccionActual,controlPasoEscog+"}");
    document.getElementById("evaluador").action=url.replace(controlPasoActual,controlPasoEscog);
}