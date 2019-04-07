$(document).ready()
function GetNumber(){ 
var number=Math.floor(Math.random()*10);
return number;
}

function Color() {var x1=GetNumber();

for (var i=1;i <=10;i++){
    do x1=GetNumber();
    
    while((x1==0)||(x1>3));
 switch (x1)
     {
         case 1:$("#slot1").attr('class','one');break;
         case 2:$("#slot1").attr('class','two');break;
         case 3:$("#slot1").attr('class','three');break;
     }
};
    
var x2=GetNumber();

for (var i=1;i <=10;i++){
    do x2=GetNumber();
    
    while((x2==0)||(x2>3));
 switch (x2)
     {
         case 1:$("#slot2").attr('class','one');break;
         case 2:$("#slot2").attr('class','two');break;
         case 3:$("#slot2").attr('class','three');break;
     }
};
    
var x3=GetNumber();

for (var i=1;i <=10;i++){
    do x3=GetNumber();
    
    while((x3==0)||(x3>3));
 switch (x3)
    {
         case 1:$("#slot3").attr('class','one');break;
         case 2:$("#slot3").attr('class','two');break;
         case 3:$("#slot3").attr('class','three');break;
    }
    };
		 if ((x1==x2)&&(x1==x3))
		 $("#msg").text("Congratulation, you won!!!");
		 else $("#msg").text("Sorry try again");
    };

         $(document).ready(function(){
		 $("#button1").mouseover,(function(){
		 $("#button1").css("background-color");
		
  });
         $(document).ready(function(){
  		 $("#button1").mouseleave(function(){
		 $(this).text('Spin Again');
		 $(this).attr("*","lightgreen";
   		
  });
  
         $(document).ready(function(){
     	 $("#button2").on('click',function(){
     	 $("*").fadeOut(2000);
     	 $('div').text('BYE');
    
     
  });
});
