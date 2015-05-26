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
     
    $('#gracz1').append(etykietaKolko );
    etykietaKolko.text(kolkoImie+' - KÓŁKO - red');

    $('#gracz2').append(etykietaKrzyzyk );
    etykietaKrzyzyk.text(krzyzykImie+' - KRZYŻYK - green');
  	

    $('form').remove()
    $('.blink').removeClass('blink');
    e.preventDefault();


  })


   $('#pytanie').on('click', function(e){
     $('td').removeClass('red');
     $('td').removeClass('green');
     $('#pytanie p').remove();

     koniecGry=false;
     table=[
       [null,null,null],
       [null,null,null],
       [null,null,null],
     ];
     i=0;
   
    e.preventDefault();
  })

  // var wygrana=[];
  // wygrana[0]=[1,2,3];
  // wygrana[1]=[4,5,6];
  // wygrana[2]=[7,8,9];
  // wygrana[3]=[1,4,7];
  // wygrana[4]=[2,5,8];
  // wygrana[5]=[3,6,9];
  // wygrana[6]=[1,5,9];
  // wygrana[7]=[3,5,7];

 function checkGame(tabela,znak){
  
  var tmp_prawyskos=[];
  var tmp_lewyskos=[];

  var dl=tabela.length;

  //badanie rzędów
  for(var r=0; r<tabela.length;r++){
    //tmp - tabela pomocnicza do badania rzędów
    var tmp=[]; 
    for(var c=tabela[r].length;c>=0;c--){
       
       if(tabela[r][c]===znak){
        tmp.push(znak);
        if((tmp.length)===(tabela[r].length)){
          console.log('wygrana pozioma'+znak);
          return true
        }
       }
     } 


      //skos prawy
       if(tabela[r][r]===znak){
         tmp_prawyskos.push(znak);
        if((tmp_prawyskos.length)===(tabela.length)){
          console.log('wygrana skos prawy'+znak);
          return true
        }
       }  

       //skos lewy
         if(tabela[r][dl-1]===znak){
           tmp_lewyskos.push(znak);
           console.log(tmp_lewyskos);
         if((tmp_lewyskos.length)===(tabela.length)){
            console.log('wygrana skos lewy'+znak);
            return true
        }
       }  

       dl--;
  }


  //badanie kolumn
   for(var m=0; m<tabela[0].length;m++){
    var tmp_pion=[];
    for(var n=0;n<tabela.length;n++){
       
       if(tabela[n][m]===znak){
        tmp_pion.push(znak);
        if((tmp_pion.length)===(tabela[0].length)){
          console.log('wygrana pionowa'+znak);
          return true;
        }

       }
    }  
  }


 }
     
      

  
  var i=0;
  var table=[
       [null,null,null],
       [null,null,null],
       [null,null,null],
     ];
  
 
  var koniecGry=false;

  $('.klik').on('click',function(){
   

    var field=($(this).attr('id'));
    console.log(field);

    var y=(field.slice(0,1)-1);
    var x=(field.slice(1,2)-1);

 
    var znak;
     
     if(koniecGry===false)
     {
      if(table[y][x]===null){

            if(i%2===0){
              znak='red';
              table[y][x]='red';
              $(this).addClass('red');
            }
            else{
               znak='green';
               table[y][x]='green';
               $(this).addClass('green');
            }
  
            if(checkGame(table,znak))
            {
              var wynikGry= $('<p class="text-center" id=\'wynikGry\'></p>');
                  $('#wynik').append(wynikGry);
                   wynikGry.text('WYGRANA: '+znak);
              koniecGry=true;
            }
            i++;
          }
      else{
           console.log('to zajęte pole!!!');
          }
        }
        else{ 
           var pytanie= $('<p class="text-center"></p>');
                  $('#pytanie').append(pytanie);
                   pytanie.text('Zagraj ponownie');
          alert('Koniec');

        }
   
  
  });


}
$(document).ready(main);