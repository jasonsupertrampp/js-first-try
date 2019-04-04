
var Questions=function(aktifsoru,question,answers,checkanswers){
    this.aktifsoru=aktifsoru;
    this.question=question;
    this.answers=answers;
    this.checkanswers=checkanswers; }
    Questions.prototype.displayQuestion=function(){  
        console.log(this.question);
        for(i=0;i<this.answers.length;i++){   
          console.log(this.answers[i])
        }
        console.log(this.checkanswers)
    }
var q1=new Questions(0,"Can you hear what he is___?",["Saying","Speaking","Telling","Talking"],0);
var q2=new Questions(1,"She hasn’t come home___",["Still","Till","Yet","Already"],2);
var q3=new Questions(2,"I___TV yesterday evening.",["Viewed","Watched","Saw","Looked"],1);
var q4=new Questions(3,"She looks___a famous film star.",["As","Like","Smilar","Same"],1);
var q5=new Questions(4,"I want you to tell me the___truth.",["Whole","Exact","Real","All"],0);
var q6=new Questions(5,"Some people only read the___line",["Head","Main","Big","Top"],0);
var q7=new Questions(6,"The boss was good enough to___my mistake.",["Oversee","Overdo","Overlook","Overtake"],2);
var q8=new Questions(7,"I think I've got a cold,I can't stop___",["Sneeze","To sneeze","Sneezing","The sneezing"],2);
var q9=new Questions(8,"If I__earlier.I wouldn't have been late for work",["Left","Was Leaving","Have Left","Had Left"],3);
var q10=new Questions(9,"Did they___the dogs last night?",["Fed","Feeds","Feed","Feded"],2);
var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var aktifsorular=[q1.aktifsoru,q2.aktifsoru,q3.aktifsoru,q4.aktifsoru,q5.aktifsoru,q6.aktifsoru,q7.aktifsoru,q8.aktifsoru,q9.aktifsoru];
n=aktifsorular[0];
questions[n].displayQuestion();
transformwrong=["translate(173px,-104px)","translate(173px,-71px)","translate(173px,-38px)","translate(173px,-5px)"]
transformcorrect=["translate(173px,-104px)","translate(173px,-71px)","translate(173px,-38px)","translate(173px,-5px)"];



GetSiklar(n);
GetQuestionName(n);
  
    var buttons = document.getElementsByTagName("button");
    var buttonsCount = buttons.length;
    for (var i = 0; i <= buttonsCount; i += 1) {
    
        buttons[i].addEventListener("click",function(){
            console.log("this is buton number"+this.id);
            if(this.id==questions[n].checkanswers){
                CorrectSound();
            setTimeout(nextQuestion,1500);
            checkIconCorrect(this.id);
            }else{
            InCorrectSound();
            setTimeout(nextQuestion,1500);
             checkIconWrong(this.id);
    
            }
        })
    }
    

  function nextQuestion(){
   document.querySelector(".correct").style.display="none";
   document.querySelector(".wrong").style.display="none";
   n++ 
   GetQuestionName(n);
   GetSiklar(n); 
   /*if(n==9){
    Applause();
        }*/ 
   }  

      
      




function GetSiklar(n){
x=document.getElementsByClassName("buton");    
//select the buton class.
for(var i = 0; i < x.length; i++){
x[i].textContent=questions[n].answers[i]; // Change the content
x[i].classList.add("sacma2"); //random şıklara css ekledim :)                                       
    }
}       




function GetQuestionName(n){
y=document.getElementById("name-2"); // Find the elements
y.textContent=questions[n].question; 
} 

function checkIconWrong(m){
var y = document.querySelector(".wrong");
 y.style.display="block";
  y.style.transform=transformwrong[m];
 }
 function checkIconCorrect(m){
 var y = document.querySelector(".correct");
 y.style.display="block";
 y.style.transform=transformcorrect[m];
 }
        
function CorrectSound(){
 var player1=document.getElementById('pl-1');
 player1.play();
}
function InCorrectSound(){
var player2=document.getElementById('pl-2');
player2.play();
}



    






/*
     function nextQuestion(){
        document.querySelector(".kral").addEventListener("click",function(){
            n++
            questions[n].displayQuestion();
           GetQuestionName(n);
           GetSiklar(n);        
       
         })
     }
*/



/*
 function nextQuestion(){
    document.querySelector(".kral").addEventListener("click",function(){
        n++
        questions[n].displayQuestion();
        y=document.getElementById("name-2"); // Find the elements
y.textContent=questions[n].question;  
               
x=document.getElementsByClassName("buton");    
//select the buton class.
for(var i = 0; i < x.length; i++){
x[i].textContent=questions[n].answers[i]; // Change the content
x[i].classList.add("sacma2"); //random şıklara css ekledim :)                                       
}
    })
 }
*//*
function FindWrong(id){
        var b=document.querySelector(".wrong");
        a=document.createAttribute("class");
        a.value=("find-wrong"+id);
        b.setAttributeNode(a);
            }     
        function FindCorrect(id){
        var a=document.querySelector(".correct");
        b=document.createAttribute("class");
        b.value=("find-correct"+id);
        a.setAttributeNode(b);
        }*/

       
        /*document.querySelector(".kral").addEventListener("click",function(){
            var x = document.querySelector(".correct");    
            var y = document.querySelector(".wrong"); 
            let a="6";
            switch(a){
            case "1": 
            x.style.transform="translate(173px,-4px)"; 
            x.style.display="block";
            CorrectSound();
            break;
            case "2":
            CorrectSound();
            x.style.transform="translate(173px,-38px)";
            x.style.display="block";
            break;
            case "3":
            CorrectSound();
            x.style.transform="translate(173px,-70px)";
            x.style.display="block";
            break;
            case "4":
            CorrectSound();
            x.style.transform="translate(173px,-103px)";
            x.style.display="block";
            break;
            case "5": 
            InCorrectSound();
            y.style.transform="translate(173px,-5px)"; 
            y.style.display="block";
            break;
            case "6":
            InCorrectSound();
            y.style.transform="translate(173px,-38px)";
            y.style.display="block";
            break;
            case "7":
            InCorrectSound();
            y.style.transform="translate(173px,-71px)";
            y.style.display="block";
            break;
            case "8":
            InCorrectSound();
            y.style.transform="translate(173px,-104px)";
            y.style.display="block";
            break;   
            }
         })
*/

         