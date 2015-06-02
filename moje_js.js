var main=function(){
  $('input').focus(function(){

    $(this).css('background','#ddd');
  });



  // function dodajKomunikat(){

  // 	$(this).parent().find('label').remove();

  // 	var lengthInput=0;
  // 	lengthInput=$(this).val().length;

  //   var etykieta= $('<label class=\'komunikat\'></label>');
  //   $(this).parent().append( etykieta);

  //   if(lengthInput<=4){
     
  //   	//$(this).parent().append( label );
  //   	etykieta.text('ten tekst jest za krótki');
  //       //console.log($(this).parent().find('.komunikat').length);
  //   }
  //   else if(lengthInput>4)
  //   {
    	
  //   	//$(this).parent().append( label );
    	
  //   	etykieta.text('Ok');
  //   	//$('.komunikat').removeClass('komunikat');
  //   }

  // }


  // input.on('keydown',dodajKomunikat);
  // pass.on('keydown', dodajKomunikat);

 

  


  $('form').on('submit', function(e){

     var kolkoImie=$('#kolko').val();
     console.log(kolkoImie);
     var krzyzykImie=$('#krzyzyk').val();
     console.log(krzyzykImie);
  	 
    var etykietaKolko= $('<p class="text-center" id=\'kolko\'></p>');
    var etykietaKrzyzyk= $('<p class="text-center" id=\'krzyzyk\'></p>');
     
    $('body').append(etykietaKolko );
    etykietaKolko.text(kolkoImie+' - KÓŁKO');

    $('body').append(etykietaKrzyzyk );
    etykietaKrzyzyk.text(krzyzykImie+' - KRZYŻYK');
  	

    $('form').remove()
    $('.blink').removeClass('blink');
    e.preventDefault();


  })

  var wygrana=[];
  wygrana[0]=[1,2,3];
  wygrana[1]=[4,5,6];
  wygrana[2]=[7,8,9];
  wygrana[3]=[1,4,7];
  wygrana[4]=[2,5,8];
  wygrana[5]=[3,6,9];
  wygrana[6]=[1,5,9];
  wygrana[7]=[3,5,7];

  function checkGame(tabelaNowa,tabelaWygrana){
   //console.log(tabelaWygrana);
  
    for(var i=0; i<tabelaWygrana.length;i++){
    


      //to był obiekt, dlatego rzutuję go na string
      //ar a = tabelaWygrana[i].valueOf();
      //console.log('a = '+a);
     // console.log('tabelaNowa '+tabelaNowa.length);


     var tmp=[];
          for(var m=0; m<tabelaNowa.length;m++){
              
              var b = tabelaWygrana[i].indexOf(parseInt(tabelaNowa[m]));

              console.log(tabelaWygrana[i]);
              console.log('tabelaNowa'+tabelaNowa[m]);
              console.log('b '+b);

              //var zmienna=b.search(a);

              //alert(zmienna);

              //console.log('zmienna '+zmienna);
              //console.log(tabelaNowa[0]);
               if(b!=(-1)){
                  tmp.push(b);
                  console.log('tmp '+tmp);
               }
             
              if(tmp.length==3){
                console.log('wygrana');
                return;
              }

          }

       // tmpTable[i]=tmpTable.push(a);

        //console.log(tmpTable[i].length);

      // for(var j=0; j<tabelaWygrana[i].length; j++){
      
      //   var a = tabelaNowa.valueOf(tabelaWygrana[i][j]);
      //   tmpTable[i]=tmpTable.push(a);
      //   console.log(tmpTable[i].length);
      // }



      // if(tmpTable[i].length>3)
      // {
      //   console.log('wygrana');

      // }

    }


  }
  


  
  var i=0;
  var redTable=[]; 
  var greenTable=[]; 

  $('td').on('click',function(){
    if(i%2===0){
    $(this).addClass('red');
    redTable.push($(this).attr('id'));
    console.log(redTable);
    checkGame(redTable,wygrana);
    }
    else{
     $(this).addClass('green');
     greenTable.push($(this).attr('id'));
     console.log(greenTable);

    }
    i++;
  });


}
$(document).ready(main);