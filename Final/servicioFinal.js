const axios = require( 'axios' );

const prompt = require( 'prompt-sync' )();

var Rurl = prompt("--> ")


function primer(callback){
    var informacion;
    axios.get( 'http://localhost:5004/2' )
    .then( respuesta =>{
        informacion = respuesta.data
        callback(informacion)
    /*
    for(i=0; i < informacion.length; i++){
        var valor = informacion[i].sentimient;
        var valor1 = informacion[i].url;
        callback(valor,valor1)
    }
    */
    }).catch( error => {
    console.log( error );
    });
}
function segundo(llegada){
    var datos = llegada;
    i = 0; 
    var datosN = [];
    var datosP = [];
    var datosM = [];
    function tercero(callback){
        do{
            //var positivo = (datos[i].sentimient == 'negative')
             
            //console.log( positivo.length )
            //console.log( datos[i].id + ":" + positivo )
          
            if(datos[i].sentimient == 'negative'){
                datosN[i] = "Id: " + datos[i].id + ' || Nombre: ' + datos[i].nombre + ' || Autor: ' + datos[i].autor + ' || Url: ' + datos[i].url
                //console.log(datosN[i])
                //var datosN3 = "Negativos: " + datosN[i]
                //console.log(  datosN3 )
            
            } else{ datosN[i] = null }
            if(datos[i].sentimient == 'positive'){
                datosP[i] = "Id: " + datos[i].id + ' || Nombre: ' + datos[i].nombre + ' || Autor: ' + datos[i].autor + ' || Url: ' + datos[i].url
                //var datosP3 = "Positivos: " + datosP[i]
                //console.log(  datosP3 )
                //console.log(datosP[i])
                //console.log(  "Positivos: " + datosP[i])
                
                //console.log( datos[i].id + ":" + datos1 )
                
            } else{ datosP[i] = null }
            if(datos[i].sentimient == 'mixed'){
                datosM[i] = "Id: " + datos[i].id + ' || Nombre: ' + datos[i].nombre + ' || Autor: ' + datos[i].autor + ' || Url: ' + datos[i].url
                //console.log(datosM[i])
                
                //console.log(  "Neutrales: " + datosM[i])
                
                //console.log( datos[i].id + ":" + datos1 )
                
            } else{ datosM[i] = null  }
            
            i++
        
        }while( i < datos.length )
        callback(datosN,datosP,datosM)
    }
    function cuatro(a1,a2,a3){
        var valor2 = a1
        var valor3 = a2
        var valor4 = a3
        //console.log(valor2[i])
        //for(i=0; i<valor2.length; i++){

          //  console.log(valor2[i]=="true")
        //}
        //console.log("afds: "+valor3)
        //for(i=0;i<valor2.length;i++){
          // data1 = valor2[i]
        //}
        //console.log(data1)


        
        var datosImagen = { url: Rurl };
        var direccionImagen = 'https://servicioface.cognitiveservices.azure.com/face/v1.0/detect?returnFaceId=false&returnFaceAttributes=emotion';
        axios.post( direccionImagen, datosImagen, {
            headers:{
                'Content-Type' : 'application/json',
                'Ocp-Apim-Subscription-Key' : '326d364a0fbe4a39998455172d1a3b46'
            }
        })
        .then( respuesta =>{
            var datosIma = respuesta.data[0].faceAttributes.emotion

            var newDataNe = datosIma.anger + datosIma.contempt + datosIma.disgust + datosIma.fear + datosIma.sadness
            var newDataM = datosIma.neutral
            var newDataP = datosIma.happiness + datosIma.surprise
            if( (newDataNe > newDataM) && (newDataNe > newDataP) ){
                for( i = 0; i < valor2.length ; i++){
                    if( valor2[i] !== null ){
                        console.log( " Las canciones que te recomendamos son: " + valor2[i] )
                    }
                }
            }
            if( (newDataM > newDataNe) && (newDataM > newDataP) ){
                for( i = 0; i < valor4.length ; i++){
                    if( valor4[i] !== null ){
                        console.log( " Las canciones que te recomendamos son: " + valor4[i] )
                    }
                }
            }
            if( (newDataP > newDataM) && (newDataP > newDataNe) ){
                for( i = 0; i < valor3.length ; i++){
                    if( valor3[i] !== null){
                        console.log( " Las canciones que te recomendamos son: " + valor3[i] )
                    }
                }
            }


            var Rurl1 = prompt("Quiere traducir la letra de alguna cancion recomenadada(Yes o No): " );
            if( Rurl1 == 'Yes' ){
                var arreglo = llegada;
                //console.log("Coloca el id de la cancion: ")
                //for( i =0; i < arreglo.length; i++){
                    //var letra = arreglo[i].text;
                    var Rurl2 = prompt( "Coloca el id de la cancion: " );
                    var datosTexto = Number(Rurl2) - 1
                    //console.log( arreglo[datosTexto].text )
                    var datosTexto1 = arreglo[datosTexto].text;
                    var idiomaPedido = prompt( "Coloca el id del idioma: Japones(ja) : Inglés(en) : Francés(fr) : Español(es) : Coreano(ko) :  Italiano(it) : Ruso(ru) --> " );
                    var datosTraducion = [{ "text" : datosTexto1 }]

                    //console.log("Coloca el id del idioma: Japones(ja) : Inglés(en) : Francés(fr)")
                    var direccionTraduccion = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to="+idiomaPedido;
                    axios.post( direccionTraduccion, datosTraducion, {
                        headers:{
                            'Ocp-Apim-Subscription-Key':'58f9f4075c9c46bca61a78cfc71a45b6',
                            'Ocp-Apim-Subscription-Region':'southcentralus',
                            'Content-Type':'application/json'
                        }
                    }).then( respuesta2 => {
                        console.log( respuesta2.data[0].translations[0].text );
                    }).catch( error => {
                        console.log( error );
                    })
                //}
            }
            //console.log( datosIma )
        }).catch( error => {
            console.log( error );
        })
        

    }
    tercero(cuatro)
}
primer(segundo)