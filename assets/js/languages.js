$(document).ready(function() {
  activeAnimation = false;
  ShowItems()
 async function ShowItems(){
    if(!activeAnimation && detectVisibility("section3")){
      activeAnimation = true; 
      ShowAnimation()
    }
  }
 async function ShowAnimation(){
    {
      const elements = $(".content-technologies");
      $("#title-section-3").css("transform", "scale(1)");
        await delay(200);
      for (let element of elements) {
        $(element).css("transform", "scale(1)");
        ImgAPPear($(element).attr("id"));
        await delay(200);
      }
      
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
  async function ImgAPPear(id){
    const images = document.querySelectorAll('#'+id+' .technologies img');
    for (let i = 0; i < images.length; i++) {
    const image = images[i];
    
    $(image).css("opacity", "1");

    await delay(200);
    }
    await delay(1000);
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        $(image).css("transform", "scale(1)");
        await delay(200);
    }
  }
  function delay(time){
    return new Promise(res => setTimeout(res, time));
} 
$(window).scroll(function() {
    if(detectVisibility("languages") ){
        ShowItems();
    }
   });
function detectVisibility(elementId) {
    var element = $('#' + elementId);
    var elementRect = element.get(0).getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var elementHeight = elementRect.height;
    var visibleThreshold = windowHeight * 0.5; // 50% of the window height
  
    return isVisible = (
      elementRect.top <= windowHeight - visibleThreshold &&
      elementRect.bottom >= visibleThreshold
    );

  }
});