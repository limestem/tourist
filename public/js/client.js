$( document ).ready(function()
 {

$('#submitform').submit(function(e){  
var str = new String("please enter correct credential");
           e.preventDefault();   
           var postData=$(this).serialize();
           console.log("data:"+JSON.stringify(postData));

                 $.ajax({
                          url: "/login",
                          type: "POST",
                          data:postData,              
                          success: function(response) {   
                             console.log(response);
                      			   if(response)
                      				{

                      					window.location.href="/dashbord";
                      				}
                              else
                              {

                                var loggin='<h4 style="color:red;">incorrect credential </h4>';

                                $('#sucess').append(loggin);
                              }
                         }
                      });  

 });


 $("#submit").click(function(){
        $('#submitform').submit();
    });     

 //hide the incorrect credential text after some time
    $('#sucess').delay(10000).fadeOut();     
  
});
