
function encriptar(){
    var texto = document.getElementById('texto1').value;    
    var textoCifrado = "x";
    if(texto.includes('e')){        
        textoCifrado = texto.replace(/e/g ,'enter');        
    
    if(textoCifrado.includes('o')){        
        textoCifrado = textoCifrado.replace(/o/g ,'ober');        
    }
    if(textoCifrado.includes('i')){        
        textoCifrado = textoCifrado.replace(/i/g ,'imes');        
    }
    if(textoCifrado.includes('a')){        
        textoCifrado = textoCifrado.replace(/a/g ,'ai');        
    }
    if(texto.includes('u')){        
        textoCifrado = textoCifrado.replace(/u/g ,'ufat');        
    }    
    }   

    document.getElementById("imagen1").style.visibility = "hidden";
    document.getElementById("mensaje-no-encontrado").style.visibility = "hidden";
    document.getElementById("mensaje-deseado").style.visibility = "hidden";
    document.getElementById("cuadro-respuesta").style.visibility = "visible";
    document.getElementById("cuadro-respuesta").innerHTML = textoCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById('texto1').value;    
    var textoCifrado = "x";
    if(texto.includes('enter')){        
        textoCifrado = texto.replace(/enter/g ,'e');        
    
    if(textoCifrado.includes('ober')){        
        textoCifrado = textoCifrado.replace(/ober/g ,'o');        
    }
    if(textoCifrado.includes('imes')){        
        textoCifrado = textoCifrado.replace(/imes/g ,'i');        
    }
    if(textoCifrado.includes('ai')){        
        textoCifrado = textoCifrado.replace(/ai/g ,'a');        
    }
    if(texto.includes('ufat')){        
        textoCifrado = textoCifrado.replace(/ufat/g ,'u');        
    }    
    }   

    document.getElementById("imagen1").style.visibility = "hidden";
    document.getElementById("mensaje-no-encontrado").style.visibility = "hidden";
    document.getElementById("mensaje-deseado").style.visibility = "hidden";
    document.getElementById("cuadro-respuesta").style.visibility = "visible";
    document.getElementById("cuadro-respuesta").innerHTML = textoCifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("#cuadro-respuesta");
    contenido.select();
    document.execCommand("copy");
}