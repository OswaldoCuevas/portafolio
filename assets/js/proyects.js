$(document).ready(function() {
    events();
    function events(){
        $(".scale1-left").on("click", function(){
            var screenWidth = window.innerWidth;
            if(screenWidth > 800){
                $(".scale1-left").off("click");
                $(".scale1-rigth").off("click");
                $(".front").off("click");
                $(".back").off("click");


                $(".scale2-left").css("z-index","2")
                $(".scale2-left").removeClass("scale2-left").addClass("scale1-left");

                $(".scale-bottom").css("z-index","1")
                $(".scale-bottom").removeClass("scale-bottom").addClass("scale2-left");

                $(".scale2-rigth").css("z-index","0")
                $(".scale2-rigth").removeClass("scale2-rigth").addClass("scale-bottom");

                $(".scale1-rigth").css("z-index","1")
                $(".scale1-rigth").removeClass("scale1-rigth").addClass("scale2-rigth");

                $(".scale-top").css("z-index","3")
                $(".scale-top").removeClass("scale-top").addClass("scale1-rigth");

                $(this).css("z-index","4")
                $(this).removeClass("scale1-left").addClass("scale-top");
                

                

           

               

               

               
                events()
            }
           
        });
        $(".scale1-rigth").on("click", function(){
            var screenWidth = window.innerWidth;
            if(screenWidth > 800){
                $(".scale1-left").off("click");
                $(".scale1-rigth").off("click");

                $(".scale2-rigth").css("z-index","2")
                $(".scale2-rigth").removeClass("scale2-rigth").addClass("scale1-rigth");

                $(".scale-bottom").css("z-index","1")
                $(".scale-bottom").removeClass("scale-bottom").addClass("scale2-rigth");

                $(".scale2-left").css("z-index","0")
                $(".scale2-left").removeClass("scale2-left").addClass("scale-bottom");

                $(".scale1-left").css("z-index","1")
                $(".scale1-left").removeClass("scale1-left").addClass("scale2-left");

                $(".scale-top").css("z-index","3")
                $(".scale-top").removeClass("scale-top").addClass("scale1-left");

                $(this).css("z-index","4")
                $(this).removeClass("scale1-rigth").addClass("scale-top");
                events()
            }
           
        });
        $(".front").on("click", function(){
            const parent = $(this).parent(".video");
            var screenWidth = window.innerWidth;
            if( $(parent).hasClass("scale-top") || screenWidth <= 800){
            $(parent).find(".back").addClass("back-rotate");
            $(parent).find(".front").addClass("front-rotate");
           }
           
        });
        $(".back").on("click", function(){
            const parent = $(this).parent(".video");
            var screenWidth = window.innerWidth;
            if( $(parent).hasClass("scale-top") || screenWidth <= 800){
                $(parent).find(".back").removeClass("back-rotate");
                $(parent).find(".front").removeClass("front-rotate");
            }
         
        });
    }
        
   
   $(".watch-video").on("click", function(event){
    event.stopPropagation();
    const id = $(this).attr("id");
    ShowVideo(id);
   });
   $("#exit-alert").on("click", function(event){
    CleanVideo()
   });
   function ShowVideo(name){
    $("#title-video").html(name)
    $(".alert-video").css("transform", "translateX(0)");
    const video = ` <video autoplay id="video-print" controls>
                        <source src="assets/video/${name}.mp4" type="video/mp4">
                    </video>`;
    $("#video-container").html(video);
    document.getElementById("video-print").play();
   }
   function CleanVideo(){
    $(".alert-video").css("transform", "translateX(100%)");
    document.getElementById("video-print").remove();
   }
});
