$(document).ready(function () {
   $("#li").click(function(){
    $("#col").toggleClass("col-10 col-11");
    $("#side").toggleClass("col-2 col-1");
    $(".st").toggleClass("fa-2x");
    $(".si").toggle();
   });

    $(".y").hide();

    $("#j").change(function () {
        let v = $(this).val();
        if (v == 4) {
            $(".y").show("slow");
        } else {
            $(".y").hide()

        }


    })
        
     $(".z").click(function(){
        $(".t").toggle();
     });
     $(".w").click(function(){
        $("#col").hide("slow");
     });
       
        $("#hi").click(function(){
            $("#che").css({
                'transition':'transform 1s',
                'transform':'rotate(90deg)'
            });
        })
        $("#h").click(function(){
            $("#ch").css({
                'transition':'transform 1s',
                'transform':'rotate(90deg)'
            });
        })
        $(".si").click(function(){
            $("#he").css({
                'transition':'transform 1s',
                'transform':'rotate(90deg)'
            });
        })


        $("#c").click(function(){
             e = $("#e").val();
             a = $("#in").val();

             if(e != "stella@gmail.com"){
                alert(" password incorrect");
             }
             else if(a != "2000"){
                alert("  password incorrect");
             }
             else{
                $("#c").replaceWith('<a href="projet2.html"> <button type="button" class="btn text-white bg-success py-1 btn" id="c">Connect</button></a>')
             }
        })
       
});