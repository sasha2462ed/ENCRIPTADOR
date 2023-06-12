const textArea = document.querySelector(".text-area");
const mensajes = document.querySelector(".mensajes");


    function btnEncriptar(){
        const textoEncriptado = encriptar(textArea.value);
        if(textoEncriptado.length != 0){
            textArea.value= textoEncriptado;
            mensajes.value= "Mensaje Encriptado";

        }else{
           mensajes.value= "Mensaje no escrito, ingrese texto!!";
           /*swal("Ooops!", "Debes ingresar un texto", "warning");*/
        }
        
    }

    function encriptar (stringEncriptada){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        //console.table(matrizCodigo);
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i =0; i< matrizCodigo.length; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }
        return stringEncriptada;

    }


    function btnDesencriptar(){
        const textoDesencriptado = Desencriptar(textArea.value);

        if(textoDesencriptado.length != 0){
            textArea.value= textoDesencriptado;
            mensajes.value= "Mensaje Desencriptado";


        }else{
           mensajes.value= "Mensaje no escrito, ingrese texto!!";
          /* swal("Ooops!", "Debes ingresar un texto", "warning");*/
        }

    }

    function Desencriptar (stringDesencriptada){
        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i =0; i< matrizCodigo.length; i++){
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }
        return stringDesencriptada;

    }
