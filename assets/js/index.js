$(document).ready(function (){

    let readySavedGuest = false;
    let PrintWelcomeSection = false;
    let PrintPianoSection = false;
    let DarkActive = false;
    let PrintLanguages = false;
    if((localStorage.getItem('light') != "null") && (localStorage.getItem('dark') != null)){
        theme()
    }else{
        showDark()
    }
    $(".content-proyects").load("assets/components/proyects.html");
    $(".languages").load("assets/components/languages.html");
    ValidityName();
    $("#theme").on("click", function(e) {
        changeTheme()
    });
    async function changeTheme(){
        $("#theme").prop('disabled', true);
        if(!DarkActive){
            showDark()
        }else{
            showLight()
        }
    }
     async function showDark(){
        var lottiePlayer = document.getElementById('lottie');
        localStorage.setItem('light', null);
            theme()
            lottiePlayer.play();
            await delay(700);
            lottiePlayer.pause();
            DarkActive = true;
            $("#theme").prop('disabled', false);
        
    }
    async function showLight(){
        var lottiePlayer = document.getElementById('lottie');
        localStorage.setItem('light', true);
        theme()
        lottiePlayer.play();
        await delay(700);
        lottiePlayer.stop();
        DarkActive = false; 
        $("#theme").prop('disabled', false);
        
    }
    function theme(){
        const _theme = (localStorage.getItem('light') != "null") && (localStorage.getItem('light') != null)  ? "light" : "dark";
            $("section").removeClass("dark light").addClass(_theme);
            $(".section-color").removeClass("dark light").addClass(_theme);
            $(".info-me").removeClass("content-dark content-light").addClass("content-"+_theme);
            $(".info-me").removeClass("content-dark content-light").addClass("content-"+_theme);
            $(".content-technologies").removeClass("content-dark content-light").addClass("content-"+_theme);
            $(".section span").removeClass("content-dark content-light").addClass("content-"+_theme);
            $(".front").removeClass("content-dark content-light").addClass("content-"+_theme);
            $(".back").removeClass("content-dark content-light").addClass("content-"+_theme);
            $("span").removeClass("font-dark font-light").addClass("font-"+_theme);
            $("ul").removeClass("font-dark font-light").addClass("font-"+_theme);
            $(".img-contact").removeClass("img-dark img-light").addClass("img-"+_theme);
            $(".horizontal-line").removeClass("line-dark line-light").addClass("line-"+_theme);
           
            
        
    }
    function ValidityName(){
        if(localStorage.getItem('name')!=null){
            ShowAnimation($(window).scrollTop());
        }else{
            $(".alert").css("display","flex");
        }
       
    }
   $(".main-options").on("click", function(){
        $(".main-options").removeClass("active");
        $(this).addClass("active");
        var target = $(this).find('a').attr('href'); // Obtiene el valor del atributo href del enlace
        $('html, body').scrollTop($(target).offset().top);
   });
        function ShowAnimation(){
            if(detectVisibility("section1")){
                ShowWelcome()
                $(".main-options").removeClass("active");
                $("#redirect-section-1").addClass("active");
            }
            if(detectVisibility("section2")){
                ShowWelcome()
                $(".main-options").removeClass("active");
                $("#redirect-section-2").addClass("active");
            }
            if(detectVisibility("section3")){
                ShowWelcome()
                $(".main-options").removeClass("active");
                $("#redirect-section-2").addClass("active");
            }
            if(detectVisibility("section4")){
                ShowWelcome()
                $(".main-options").removeClass("active");
                $("#redirect-section-4").addClass("active");
                $("#title-section-4").css("transform", "scale(1)");
                $(".content-proyects").css("opacity","1");
            }
             if(detectVisibility("info-me") ){
                showSection2()
                ShowPiano()
                
            }
           
            if(detectVisibility("section3")){
                ShowLanguages()
            }
            theme()
            
        }
        function ShowLanguages(){
           $("#title-section3").css("opacity","1")
           $("#lottie").css("opacity","1")
            // if(!PrintLanguages){
            //     $(".languages").load("assets/components/languages.html");
            // }
            // PrintLanguages = true;
           
        }
        async function showSection2(){
           await delay(100)
            var screenWidth = window.innerWidth;
            if(screenWidth > 800){
                $(".section-color").css( "width","80%") 
            }
            
            $(".info-me").css("opacity","1");
            $(".info-me").css("transform","translateY(0)")
        }
      async  function ShowPiano(){
        await  delay(100)
            if(!PrintPianoSection){
                PrintPianoSection = true;
                $(".content-piano").load("assets/components/piano.html");
                $(".content-piano").css("opacity","1");
                $(".content-piano").css("transform","translateY(0)")
                $("#decore3").css("transform","scale(1.4) translateY(20px)")
                $("#decore4").css("transform","scale(1.4) translateY(20px)")
                $("#info").css("opacity","1");
                $("#info").css("transform","translateY(0)");
                $(".line-decorate").css("opacity","1");
            }
           
        }
        $(window).scroll(function() {
        ShowAnimation($(window).scrollTop());
       });
       async function ShowWelcome(){
        $(".title").css("opacity","1")
        $("#decore1").css("transform","scale(1.4) translateY(20px)")
        $("#decore2").css("transform","scale(1.4) translateY(20px)")
        await delay(200);
        $(".subtitle").css("opacity","1")
        $("#button-section1").css("opacity","1");
        $("#button-section1-min").css("opacity","1");
        $("#theme").css("opacity","1");
        if(!PrintWelcomeSection){
            $(".animation_code").load("assets/components/animation_code.html");
            
        }
        $(".animation_code").css("opacity","1");
        PrintWelcomeSection = true
       }
       function ActiveInput(){
        $("#guest").css("color","#02bfe9;");
       }
       function delay(time){
        return new Promise(res => setTimeout(res, time));
    } 
    $("#saved_guest").on("click",function(){
        if(readySavedGuest){
            SavedGuest($(guest).val());
        }
        $("#guest").css("width", "230px")
        $('#guest').focus();
        $(this).html(`<i class="fa-solid fa-arrow-right"></i>`);
        $(this).css("background-color","#02bfe9");
        $(this).css("color","#ffff");
        readySavedGuest = true;
    });
    function SavedGuest(guest){
        if(guest.length>0){
            localStorage.setItem('name', guest);
            $(".alert").hide();
            ShowAnimation($(window).scrollTop());
        }
        
    }
    function detectVisibility(elementId) {
        var element = $('#' + elementId);
        var elementRect = element.get(0).getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var elementHeight = elementRect.height;
        var visibleThreshold = windowHeight * 0.2; // 20% of the window height
      
        return isVisible = (
          elementRect.top <= windowHeight - visibleThreshold &&
          elementRect.bottom >= visibleThreshold
        );
    
      }
      
      $("#guest").on("keyup",function(e){
        if (e.key === "Enter") {
            // Simular un clic en el botón
            $("#saved_guest").click();
          }
      })
});
