$(document).ready(function(){
    $("#bt").click(function(){
        $(".p").css("color", "orange")
        $("div").toggleClass()

    })
   
    $("#by").click(function(){
        $('.g').remove()
    })
    $("#by").click(function(){
        $('.o').append("<li> liste non ordonnees</li>")
    })

$("div:even").css
   
    $(".b").click(function(){
        $("ul").FadeIn()
        $(".t").click(function(){
            $(".w").slideDown()
        })
    })

    $("#c").click(function(){
        e = $("#e").val();
        a = $(".in").val();

        if(e == "toto"){
        
        
        }
        else if(a != "ange"){
        }
        else{
           $("#c").replaceWith('<a href="projet2.html"> <button type="button" class="btn text-white bg-success py-1 btn" id="c">Connect</button></a>')
        }
   })


   $(".v").click(function(){
    $(".m").toggleClass("n")
    $(".m").slideToggle("n")
    $(".m").fadeToggle("n")
    




    $.each($("#div li"), function(index, value){
           console.log('index: ${index}, value: $($(value).text)}')
    })

        $(".mn").click(function(){
            $("#py").append("<li>ajouter</li>");
        })
    $("#py").on("click", "li", function(){
        $(this).toggleClass("d");
    })




    

   })
})