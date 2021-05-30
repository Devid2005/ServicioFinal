// https://pley.today/__export/1596596781723/sites/mui/img/2020/08/04/9cd077911a00165865a90ca5bf3d7fbd.jpg_697727896.jpg
// https://static3.depositphotos.com/1008525/244/i/950/depositphotos_2444604-stock-photo-very-sad-little-boy.jpg
// https://laboratoriosniam.com/wp-content/uploads/2018/07/michael-dam-258165-unsplash_WEB2.jpg

const axios = require( 'axios' );

const prompt = require( 'prompt-sync' )();

var Rurl = prompt("Ingresa el url de la foto --> ")

function primer(callback){
    var informacion;
    axios.get( 'http://localhost:5004/2' )
    .then( respuesta =>{
        informacion = respuesta.data
        callback(informacion)
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
            if(datos[i].sentimient == 'negative'){
                datosN[i] = "Id: " + datos[i].id + ' || Nombre: ' + datos[i].nombre + ' || Autor: ' + datos[i].autor + ' || Url: ' + datos[i].url
            } else{ datosN[i] = null }
            if(datos[i].sentimient == 'positive'){
                datosP[i] = "Id: " + datos[i].id + ' || Nombre: ' + datos[i].nombre + ' || Autor: ' + datos[i].autor + ' || Url: ' + datos[i].url
            } else{ datosP[i] = null }
            if(datos[i].sentimient == 'mixed'){
                datosM[i] = "Id: " + datos[i].id + ' || Nombre: ' + datos[i].nombre + ' || Autor: ' + datos[i].autor + ' || Url: ' + datos[i].url
            } else{ datosM[i] = null  }
            i++
        }while( i < datos.length )
        callback(datosN,datosP,datosM)
    }
    function cuatro(a1,a2,a3){
        var valor2 = a1
        var valor3 = a2
        var valor4 = a3
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
                console.log( " De acuerdo al analisis de su foto, sus sentimientos son(1 mayor nota): " )
                if( datosIma.anger > 0 ){
                    console.log( " Furia: "+datosIma.anger )
                }
                if( datosIma.neutral > 0 ){
                    console.log( " Neutral: "+datosIma.neutral )
                }
                if( datosIma.happiness > 0 ){
                    console.log( " Feliz: "+datosIma.happiness )
                }
                if( datosIma.disgust > 0 ){
                    console.log( " Disgusta: "+datosIma.disgust )
                }
                if( datosIma.fear > 0 ){
                    console.log( " Miedo: "+datosIma.fear )
                }
                if( datosIma.sadness > 0 ){
                    console.log( " Tristeza: "+datosIma.sadness )
                }
                if( datosIma.surprise > 0 ){
                    console.log( " Sorpresa: "+datosIma.surprise )
                }
            
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
                    var Rurl2 = prompt( "Coloca el id de la cancion: " );
                    var datosTexto = Number(Rurl2) - 1
                    var datosTexto1 = arreglo[datosTexto].text;
                    var idiomaPedido = prompt( "Coloca el id del idioma: Japones(ja) : Inglés(en) : Francés(fr) : Español(es) : Coreano(ko) :  Italiano(it) : Ruso(ru) --> " );
                    var datosTraducion = [{ "text" : datosTexto1 }]
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
            }
        }).catch( error => {
            console.log( error );
        })
    }
    tercero(cuatro)
}
primer(segundo)