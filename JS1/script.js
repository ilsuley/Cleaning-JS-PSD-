let cavab = confirm("Biz Frontendi ne vaxt oyrenecik?");

document.getElementById("Screen").innerHTML = cavab; 

 let x=10;
   if(x == 9){
        alert("duzdu");
   }
   else if(x == 10){
        alert("duzdu")
   }
   else{
        alert("sehfdi");
   }
 


    /*  let x = 10; */

   x == 8 ? alert("x10") : alert("sehfdi"); x == 9 ? alert("x9") : "sehfdi" 



    function Check(){
     let email = "ilham.suleymanli@gmail.com";
     let password = 123456789 ;



     let useremail = document.getElementById("email");
     let userpassword = document.getElementById("pass");

     console.log(useremail.value)
     console.log(userpassword.value)

     if(useremail.value == email && userpassword.value == password )
     alert("duzdu")
     else{
     alert('sehfdi')     
     }
   }
 

   function Check(){
     let username = "ilsuley";

     let durdane = document.getElementById("username")

     console.log(durdane.value)
   }
