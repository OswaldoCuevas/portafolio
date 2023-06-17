$(document).ready(function() {
 
  const pianoKeyBoard = [
    ["C4","q","key"],
   ["D4","w","key"],
   ["E4","e","key"],
   ["F4","r","key"],
   ["G4","t","key"],
   ["A4","y","key"],
   ["B4","u","key"],

   ["C5","i","key"],
   ["D5","o","key"],
   ["E5","p","key"],
   ["F5","z","key"],
   ["G5","x","key"],
   ["A5","c","key"],
   ["B5","v","key"],

   ["C6","b","key"],
   ["D6","n","key"],
   ["E6","m","key"],

   ["CSharp4","1","keySharp"],
   ["DSharp4","2","keySharp"],
   ["FSharp4","3","keySharp"],
   ["GSharp4","4","keySharp"],
   ["ASharp4","5"],"keySharp",

   ["CSharp5","7","keySharp"],
   ["DSharp5","8","keySharp"],
   ["FSharp5","9","keySharp"],
   ["GSharp5","a","keySharp"],
   ["ASharp5","s","keySharp"],

   ["CSharp6","d","keySharp"],
   ["DSharp6","f","keySharp"],

    ];
    let keyboardActive = false;
    const route = "assets/sounds/";
    const C4 = new Audio(route+'C4.mp3');
    const D4 = new Audio(route+'D4.mp3');
    const E4 = new Audio(route+'E4.mp3');
    const F4 = new Audio(route+'F4.mp3');
    const G4 = new Audio(route+'G4.mp3');
    const A4 = new Audio(route+'A4.mp3');
    const B4 = new Audio(route+'B4.mp3');

    const C5 = new Audio(route+'C5.mp3');
    const D5 = new Audio(route+'D5.mp3');
    const E5 = new Audio(route+'E5.mp3');
    const F5 = new Audio(route+'F5.mp3');
    const G5 = new Audio(route+'G5.mp3');
    const A5 = new Audio(route+'A5.mp3');
    const B5 = new Audio(route+'B5.mp3');

    const C6 = new Audio(route+'C6.mp3');
    const D6 = new Audio(route+'D6.mp3');
    const E6 = new Audio(route+'E6.mp3');
    const F6 = new Audio(route+'F6.mp3');

    const CSharp4 = new Audio(route+'CSharp4.mp3');
    const DSharp4 = new Audio(route+'DSharp4.mp3');
    const FSharp4 = new Audio(route+'FSharp4.mp3');
    const GSharp4 = new Audio(route+'GSharp4.mp3');
    const ASharp4 = new Audio(route+'ASharp4.mp3');

    const CSharp5 = new Audio(route+'CSharp5.mp3');
    const DSharp5 = new Audio(route+'DSharp5.mp3');
    const FSharp5 = new Audio(route+'FSharp5.mp3');
    const GSharp5 = new Audio(route+'GSharp5.mp3');
    const ASharp5 = new Audio(route+'ASharp5.mp3');

    const CSharp6 = new Audio(route+'CSharp6.mp3');
    const DSharp6 = new Audio(route+'DSharp6.mp3');

  
    $(".keyboard").on('click', function(){
      if(keyboardActive){
        keyboardActive = false;
        $(this).removeClass("active");
        HideKeys();
      }else{
        keyboardActive = true;
        $(this).addClass("active");
        ShowKeys()
      }
      
    });
    $('.key').mousedown(function() {
        switch($(this).attr('id')){
            case 'C4':C4.currentTime = 0;C4.play();break;
            case 'D4':D4.currentTime = 0;D4.play();break;
            case 'E4':E4.currentTime = 0;E4.play();break;
            case 'F4':F4.currentTime = 0;F4.play();break;
            case 'G4':G4.currentTime = 0;G4.play();break;
            case 'A4':A4.currentTime = 0;A4.play();break;
            case 'B4':B4.currentTime = 0;B4.play();break;

            case 'C5':C5.currentTime = 0;C5.play();break;
            case 'D5':D5.currentTime = 0;D5.play();break;
            case 'E5':E5.currentTime = 0;E5.play();break;
            case 'F5':F5.currentTime = 0;F5.play();break;
            case 'G5':G5.currentTime = 0;G5.play();break;
            case 'A5':A5.currentTime = 0;A5.play();break;
            case 'B5':B5.currentTime = 0;B5.play();break;

            case 'C6':C6.currentTime = 0;C6.play();break;
            case 'D6':D6.currentTime = 0;D6.play();break;
            case 'E6':E6.currentTime = 0;E6.play();break;
            case 'F6':F6.currentTime = 0;F6.play();break;
    
        }
      });
      $("#volume").on("change", function(){
        const volume = $(this).val();
        C4.volume = volume;
         D4.volume = volume;
         E4.volume = volume;
         F4.volume = volume;
         G4.volume = volume;
         A4.volume = volume;
         B4.volume = volume;
    
         C5.volume = volume;
         D5.volume = volume;
         E5.volume = volume;
         F5.volume = volume;
         G5.volume = volume;
         A5.volume = volume;
         B5.volume = volume;
    
         C6.volume = volume;
         D6.volume = volume;
         E6.volume = volume;
         F6.volume = volume;
    
         CSharp4.volume = volume;
         DSharp4.volume = volume;
         FSharp4.volume = volume;
         GSharp4.volume = volume;
         ASharp4.volume = volume;
    
         CSharp5.volume = volume;
         DSharp5.volume = volume;
         FSharp5.volume = volume;
         GSharp5.volume = volume;
         ASharp5.volume = volume;
    
         CSharp6.volume = volume;
         DSharp6.volume = volume;
      })
      $('.keySharp').mousedown(function() {
        switch($(this).attr('id')){
            case 'CSharp4':CSharp4.currentTime = 0;CSharp4.play();break;
            case 'DSharp4':DSharp4.currentTime = 0;DSharp4.play();break;
            case 'FSharp4':FSharp4.currentTime = 0;FSharp4.play();break;
            case 'GSharp4':GSharp4.currentTime = 0;GSharp4.play();break;
            case 'ASharp4':ASharp4.currentTime = 0;ASharp4.play();break;

            case 'CSharp5':CSharp5.currentTime = 0;CSharp5.play();break;
            case 'DSharp5':DSharp5.currentTime = 0;DSharp5.play();break;
            case 'FSharp5':FSharp5.currentTime = 0;FSharp5.play();break;
            case 'GSharp5':GSharp5.currentTime = 0;GSharp5.play();break;
            case 'ASharp5':ASharp5.currentTime = 0;ASharp5.play();break;

            case 'CSharp6':CSharp6.currentTime = 0;CSharp6.play();break;
            case 'DSharp6':DSharp6.currentTime = 0;DSharp6.play();break;

           
        }
      });
      $(document).keydown(function(event) {
       
        for(let key of pianoKeyBoard){
          if(event.key.toLowerCase() == key[1]){
           return key[2] == "key" ?  ClickKey(key[0]):ClickKeySharp(key[0]);
          }
        }
        
      });
      function ShowKeys(){
        for(let key of pianoKeyBoard){
        const id = key[0];
        const letter = key[1];
        const type = key[2];
        $("#"+id).html('<span>'+letter+'</span><div></div>');
        }
        
      } 
      function HideKeys(){
        for(let key of pianoKeyBoard){
        const id = key[0];
        const letter = key[1];
        const type = key[2];
        $("#"+id).html('<div></div>');
        }
        
      } 
      function ClickKey(id){
        $('#'+id).trigger('mousedown');
        $('#'+id).addClass('active');
        setTimeout(function() {
          $('#'+id).removeClass('active');
          }, 200);
      }
      function ClickKeySharp(id){
        $('#'+id).trigger('mousedown');
        $('#'+id).addClass('active');
        setTimeout(function() {
          $('#'+id).removeClass('active');
          }, 200);
      }
      function delay(time){
        return new Promise(res => setTimeout(res, time));
      } 
      Sound();
     async  function Sound(){
      var screenWidth = window.innerWidth;
       X1 = screenWidth > 800 ? 200:150;
       X2 = screenWidth > 800 ? 100:50;
       XFinally = screenWidth > 800 ? 75:45;
       dimension = screenWidth > 800 ? "":" scale(0.7)";
       await delay(3000);
       ClickKeySharp("ASharp5")
       if(screenWidth)
       $("#img-angular").css("transform", "translateY(150px) translateX(-"+X1+"px)"+dimension);
       $("#img-angular").css("opacity", "1");
       await delay(450);
       ClickKeySharp("FSharp5")
       $("#img-nodejs").css("transform", "translateY(200px) translateX(-"+X2+"px)"+dimension);
       $("#img-nodejs").css("opacity", "1");
       await delay(450);
       ClickKeySharp("GSharp5")
       $("#img-android").css("transform", "translateY(200px) translateX("+X2+"px)"+dimension);
       $("#img-android").css("opacity", "1");
       await delay(450);
       ClickKeySharp("ASharp5")
       $("#img-net").css("transform", "translateY(150px) translateX("+X1+"px)"+dimension);
       $("#img-net").css("opacity", "1");
       await delay(200);
       ClickKeySharp("FSharp5")
       await delay(800);
       ClickKeySharp("FSharp5")
       await delay(50);
       ClickKeySharp("CSharp6")
       ClickKeySharp("FSharp4")
       ClickKeySharp("CSharp")
       $("#img-android").css("transform", "translateY(150px) translateX("+XFinally+"px)"+dimension);
       $("#img-nodejs").css("transform", "translateY(150px) translateX(-"+XFinally+"px)"+dimension);
      }

    
});