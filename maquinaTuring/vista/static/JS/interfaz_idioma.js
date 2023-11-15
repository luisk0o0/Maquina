function interfazIdioma(validacion, idiomaSel) {
    if(validacion=="true"){
        idiomaSel=document.getElementById("lenguaje").value;
    }
    let cadenaCompleta=null;
    let primeraParte=null;
    let segundaParte=null;
    let palabraValida=null;
    let idiomaSelActual=null;
    let idiomaSelTrad=null;
    let pasoSelActual=null;
    let pasoSelTrad=null;
    let velSelActual=null;
    let velSelTrad=null;
    switch (idiomaSel) {
        case "Espaniol":
            document.getElementById("palabra").placeholder = "Ingrese una palabra...";
            document.getElementById("validacion").innerText = "Evaluar";
            document.getElementById("eleccionLeng").innerText = "elija el idioma:";
            document.getElementById("eleccionEval").innerText = "¿evaluar paso a paso?";
            document.getElementById("eleccionVel").innerText = "Elige la velocidad de ejecucion del grafo y la cinta:";
            idiomaSelActual=document.getElementById("lenguajeSelec").innerText;
            
            for(let i=0; i<idiomaSelActual.length; i++){
                if (idiomaSelActual[i]==":") {
                   idiomaSelTrad=idiomaSelActual.substring(0,i);
                }
            }
            pasoSelActual=document.getElementById("pasoSelec").innerText;
            for(let j=0; j<pasoSelActual.length; j++){
                if (pasoSelActual[j]==":") {
                   pasoSelTrad=pasoSelActual.substring(0,j); 
                }
            }
            velSelActual=document.getElementById("velocidadSelec").innerText;
            for(let j=0; j<velSelActual.length; j++){
                if (velSelActual[j]==":") {
                   velSelTrad=velSelActual.substring(0,j); 
                }
            }
            document.getElementById("lenguajeSelec").innerText = idiomaSelActual.replace(idiomaSelTrad,"{idioma seleccionado");
            document.getElementById("pasoSelec").innerText = pasoSelActual.replace(pasoSelTrad,"{paso a paso");
            document.getElementById("velocidadSelec").innerText = velSelActual.replace(velSelTrad,"{velocidad seleccionada");
            if(document.getElementById("mensajeAutomata") != null) {
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta);
                cadenaCompleta=reemplazarCadena(primeraParte,"la cadena",cadenaCompleta);
                if (palabraValida==true) {
                    cadenaCompleta = reemplazarCadena(segundaParte, "es aceptada", cadenaCompleta);
                } 
                else {
                    cadenaCompleta=reemplazarCadena(segundaParte,"no tiene suficientes letras o tiene algun caracter invalido",cadenaCompleta);
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="Mostrar historial";
            document.getElementById("botonBorrarHistorial").innerText="Borrar historial";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="Palabra ingresada";
                document.getElementById("tablaEstado").innerText='"Estado de la palabra"';
                cambiarIdiomaEstadoHistorial("la cadena","es aceptada","no tiene suficientes letras o tiene algun caracter invalido");
            }
            else{
                document.getElementById("sinHistorial").innerText='"No hay palabras en el historial."';
            }
            

            if (document.getElementById("validacionPaso")) {
                document.getElementById("validacionPaso").innerText = "Evaluar paso a paso";
            }
            break;

        case "English":
            document.getElementById("palabra").placeholder="Enter a word...";
            document.getElementById("validacion").innerText="evaluate";
            document.getElementById("eleccionLeng").innerText="choose language:";
            document.getElementById("eleccionEval").innerText = "evaluate step by step?";
            document.getElementById("eleccionVel").innerText = "Choose the execution speed of the graph and the tape:";
            idiomaSelActual=document.getElementById("lenguajeSelec").innerText;
            for(let i=0; i<idiomaSelActual.length; i++){
                if (idiomaSelActual[i]==":") {
                   idiomaSelTrad=idiomaSelActual.substring(0,i); 
                }
            }
            pasoSelActual=document.getElementById("pasoSelec").innerText;
            for(let j=0; j<pasoSelActual.length; j++){
                if (pasoSelActual[j]==":") {
                   pasoSelTrad=pasoSelActual.substring(0,j); 
                }
            }
            velSelActual=document.getElementById("velocidadSelec").innerText;
            for(let j=0; j<velSelActual.length; j++){
                if (velSelActual[j]==":") {
                   velSelTrad=velSelActual.substring(0,j); 
                }
            }
            document.getElementById("lenguajeSelec").innerText = idiomaSelActual.replace(idiomaSelTrad,"{selected language");
            document.getElementById("pasoSelec").innerText = pasoSelActual.replace(pasoSelTrad,"{Step by Step");
            document.getElementById("velocidadSelec").innerText = velSelActual.replace(velSelTrad,"{selected speed");           
            if(document.getElementById("mensajeAutomata")!=null){
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta);
                cadenaCompleta=reemplazarCadena(primeraParte,"The string",cadenaCompleta);
                if (palabraValida==true) {    
                    cadenaCompleta=reemplazarCadena(segundaParte,"is accepted",cadenaCompleta); 
                }
                else {
                    cadenaCompleta=reemplazarCadena(segundaParte,"does not have enough letters or has some invalid character",cadenaCompleta);
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="show history";
            document.getElementById("botonBorrarHistorial").innerText="Delete history";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="word entered";
                document.getElementById("tablaEstado").innerText='"word status"';
                cambiarIdiomaEstadoHistorial("The string","is accepted","does not have enough letters or has some invalid character");
            }
            else{
                document.getElementById("sinHistorial").innerText='"There are no words in the history."';
            }
            
            if (document.getElementById("validacionPaso")) {
                document.getElementById("validacionPaso").innerText = "Évaluer étape par étape";
            }
            break;

        case "Frances":
            document.getElementById("palabra").placeholder="Saisir un mot...";
            document.getElementById("validacion").innerText="Évaluer";
            document.getElementById("eleccionLeng").innerText="choisir la langue :";
            document.getElementById("eleccionEval").innerText = "évaluer étape par étape?";
            document.getElementById("eleccionVel").innerText = "Choisissez la vitesse d'exécution du graphique et de la bande:";
            idiomaSelActual=document.getElementById("lenguajeSelec").innerText;
            for(let i=0; i<idiomaSelActual.length; i++){
                if (idiomaSelActual[i]==":") {
                   idiomaSelTrad=idiomaSelActual.substring(0,i); 
                }
            }
            pasoSelActual=document.getElementById("pasoSelec").innerText;
            for(let j=0; j<pasoSelActual.length; j++){
                if (pasoSelActual[j]==":") {
                   pasoSelTrad=pasoSelActual.substring(0,j); 
                }
            }
            velSelActual=document.getElementById("velocidadSelec").innerText;
            for(let j=0; j<velSelActual.length; j++){
                if (velSelActual[j]==":") {
                   velSelTrad=velSelActual.substring(0,j); 
                }
            }
            document.getElementById("lenguajeSelec").innerText = idiomaSelActual.replace(idiomaSelTrad,"{langue sélectionnée");
            document.getElementById("pasoSelec").innerText = pasoSelActual.replace(pasoSelTrad,"{pas à pas");
            document.getElementById("velocidadSelec").innerText = velSelActual.replace(velSelTrad,"{vitesse sélectionnée");          
            if(document.getElementById("mensajeAutomata")!=null){
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta);
                cadenaCompleta=reemplazarCadena(primeraParte,"La chaîne",cadenaCompleta);
                if (palabraValida==true) {
                    cadenaCompleta=reemplazarCadena(segundaParte,"est acceptée.",cadenaCompleta); 
                }
                else {
                    cadenaCompleta=reemplazarCadena(segundaParte,"n'a pas assez de lettres ou a un caractère invalide",cadenaCompleta);
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="afficher l'historique";
            document.getElementById("botonBorrarHistorial").innerText="Supprimer l'historique";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="mot saisi";
                document.getElementById("tablaEstado").innerText='"statut du mot"';
                cambiarIdiomaEstadoHistorial("La chaîne", "est acceptée.", "n'a pas assez de lettres ou a un caractère invalide");
            }
            else{
                document.getElementById("sinHistorial").innerText='"Il n y a pas de mots dans l histoire."';
            }
            
            if (document.getElementById("validacionPaso")) {
                document.getElementById("validacionPaso").innerText = "Évaluer étape par étape";
            }
            break;
    default:
        break;
    }
}
function cambiarIdiomaEstadoHistorial(parteNueva1,parteNueva2,palabraNula,parteNueva2Neg) {
    let historialEstado=document.getElementsByClassName("estadoPalabra");
    let cadenaCompleta=null;
    let primeraParte=null;
    let segundaParte=null;
    for (let i=0; i<historialEstado.length; i++){
        cadenaCompleta=historialEstado[i].innerText;        
        if (cadenaCompleta.indexOf('"')==-1) {
            historialEstado[i].innerText=palabraNula;
        }
        else{
            palabraValida=validarPalabra(cadenaCompleta);
            primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
            segundaParte=obtenerSegundaParteCad(cadenaCompleta);
            cadenaCompleta=reemplazarCadena(primeraParte,parteNueva1,cadenaCompleta);
            if (palabraValida==true) {
                cadenaCompleta=reemplazarCadena(segundaParte,parteNueva2,cadenaCompleta);
            }
            else{
                if (palabraValida==null) {
                    cadenaCompleta=reemplazarCadena(segundaParte,palabraNula,cadenaCompleta);     
                }
                else{
                    cadenaCompleta=reemplazarCadena(segundaParte,parteNueva2Neg,cadenaCompleta); 
                }
            }
            historialEstado[i].innerText=cadenaCompleta; 
        }

    }
}
function idiomaSeleccionado(idiomaEscogido) {
    let url = document.getElementById("evaluador").action;
    let seleccion = document.getElementById("lenguajeSelec").innerHTML;
    let indexIdiomaFinal = null;

    if (idiomaEscogido == "null") {
        idiomaEscogido = document.getElementById("lenguaje").value;
    }

    let idiomaActual = null;
    for (let i = url.length; i >= 0; i--) {
        if (url[i] == "/" && indexIdiomaFinal != null) {
            idiomaActual = url.substring(i + 1, indexIdiomaFinal);
            break;
        }
        if (url[i] == "/") {
            indexIdiomaFinal = i;
        }
    }

    let seleccionActual = null;
    for (let j = 0; j < seleccion.length; j++) {
        if (seleccion[j] == ":") {
            seleccionActual = seleccion.substring(j + 1);
            break;
        }
    }

    document.getElementById("evaluador").action = url.replace(idiomaActual, idiomaEscogido);

    if (idiomaEscogido == "Espaniol") {
        document.getElementById("lenguajeSelec").innerHTML = seleccion.replace(seleccionActual, "Español}");
    } else {
        document.getElementById("lenguajeSelec").innerHTML = seleccion.replace(seleccionActual, idiomaEscogido + "}");
    }
}