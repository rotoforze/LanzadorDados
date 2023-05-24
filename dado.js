let ultimos = [0,0,0,0,0];
function launch(){
    document.getElementById('lastresultado').innerHTML = ultimos.toString(); //Actualiza el html con el nuevo contenido del array
    ultimos.reverse();
    var caras = document.getElementById('caras').value; //Toma la información del input
    var resultado = Math.floor(Math.random() * caras)+1; //Genera un número aleatorio
    if(ultimos.length >= 5){
        ultimos.shift(4);
    };
    ultimos.push(resultado); //Añade el último resultado al array ultimos
    ultimos.reverse();
    document.getElementById('resultado').innerHTML = resultado; //Actualiza el html con el nuevo resultado
    return console.log(resultado); //Debug para saber que llega al final
};
function showLast(){
    if(document.getElementById('lastNum').hidden == true){
        document.getElementById('lastNum').hidden = false;
        return console.log("Últimos números enseñandose"); 
        }else{
            document.getElementById('lastNum').hidden = true;
            return console.log("Últimos números escondido"); 
        };
};
function ajustes(){
    if(document.getElementById('ajustes').hidden == true){
        document.getElementById('ajustes').hidden = false;
        return console.log("Ajustes enseñandose"); 
        }else{
            document.getElementById('ajustes').hidden = true;
            return console.log("Ajustes escondido"); 
        };
};
