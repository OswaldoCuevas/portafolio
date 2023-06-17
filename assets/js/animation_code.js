$(document).ready(function() {

    let guest = localStorage.getItem('name') ;
    let stopAnimation = false;
    PrintFirst()
    async function PrintFirst(){
        $(".code-options").attr("disabled", true);
      await  delay(1500);
        PrintJavascript();
    }
    function MessageGuest(){
    return `Hola ${guest}!`;
    }
   async function PrintCode(structure){
        const language = structure.language;
        const function_ = structure.function_;
        const function_name = structure.function_name;
        const code = structure.code;
        const rawCode = structure.rawCode;
        const sizeLine1 = function_.length + function_name.length;
        const sizeLine2 = rawCode.length+MessageGuest().length+5;
        $("#function").html(function_);
        $("#function_name").html(function_name);
        $("#line2").html(code);

        if(structure.language=="python"){
            $("#start-block").html(":")
        }else{
            $("#start-block").html("{}")
        }
        await PrintLine1(sizeLine1,function_.length-1);
        await PrintLine2(language,sizeLine2);
     
    }
    function CleanCode(){
        $(".line").css("border-right","none");
        $(".line").css("width","0");
        $("#line-number-2").hide();
        $("#line-number-3").hide();
    }
    function PrintJavascript(){
        const language = "javascript";
        const function_ = "function ";
        const function_name = "GreetingFromJavascript";
        const code = `<span class="color4">  console</span><span class="color3">.</span><span class="color2">log</span><span class="color3">(</span><span class="color5">"${MessageGuest()}"</span><span class="color3">);</span>`;
        const rawCode="  console.log";
        PrintCode({language,function_, function_name, code,rawCode})
    }
    function PrintJava(){
        const language = "java";
        const function_ = "public void ";
        const function_name = "GreetingFromJava";
        const code = `<span class="color2">  System.<span class="color3">out</span>.println</span><span class="color3">(</span><span class="color5">"${MessageGuest()}"</span><span class="color3">);</span>`;
        const rawCode="  System.out.println";
        PrintCode({language,function_, function_name, code,rawCode})
    }
    
    function PrintCSharp(){
        const language = "csharp";
        const function_ = "public void ";
        const function_name = "GreetingFromCSharp";
        const code = `<span class="color4">  Console</span><span class="color3">.</span><span class="color2">WriteLine</span><span class="color3">(</span><span class="color5">"${MessageGuest()}"</span><span class="color3">);</span>`;
        const rawCode="  Console.WriteLine";
        PrintCode({language,function_, function_name, code,rawCode})
    }
    function PrintPython(){
        const language = "python";
        const function_ = "def ";
        const function_name = "GreetingFromPython"
        const code = `<span class="color3">  print</span><span class="color3">(</span><span class="color5">"${MessageGuest()}"</span><span class="color3">);</span>`;
        const rawCode="  print";
        PrintCode({language,function_, function_name, code,rawCode})
    }
    async function PrintLine1 (length , pause){
        
        $("#line1").css("border-right","1px solid white");
        for(var i=0; i<=length+4; i++){
            $("#line1").css("width",i+"ch");
            if(i==pause){
                await delay(500); 
            }
            await delay(100);
        }
        $("#line1").css("width",(length+3)+"ch");
        $("#line1").css("border-right","none");
    }
    async function PrintLine2 (language,length ){
        await delay(400);
        if(language!="python"){
            $("#line-number-3").show();
            $("#line3").css("width","1ch");
        }
        
        $("#line-number-2").show();
        $("#line2").css("border-right","1px solid white");
        $("#line2").css("width","2ch");
        for(var i=2; i<=length; i++){
            $("#line2").css("width",i+"ch");
            await delay(100);
        }
        $("#line2").css("border-right","none");
        if(language=="python"){
            await delay(600);
            $("#line2").css("width",(length-1)+"ch");
        }
        $(".code-options").attr("disabled", false);
    }
    function delay(time){
        return new Promise(res => setTimeout(res, time));
    } 
    async function ShowCode(language){
   
            CleanCode();
            switch(language){
                case "javascript":PrintJavascript();break;
                case "java":PrintJava();break;
                case "python":PrintPython();break;
                case "c-sharp":PrintCSharp();break;
              
            }
      
    }
    $(".code-options").on("click",function(){
      
        $(".code-options").removeClass("active");
        $(this).addClass("active");
        $(".code-options").attr("disabled", true);
       
        ShowCode($(this).attr("id"));
        
    })

});