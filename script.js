var form = document.getElementById('form');
var email = document.getElementById('input-email');

for(x=0;x>100;x++){
   if(email[x]=='@' || email[x]=='.'){
      form.addEventListener('submit', function(e){
         alert("Isso");
      })
   }
   else{
      form.addEventListener('submit', function(e){
         alert("Error");
      })
   }
}

