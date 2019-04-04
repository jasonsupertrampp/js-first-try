



var Questions=function(question,answers,checkanswers){
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
var q1=new Questions("Can you hear what he is___?",["Saying","Speaking","Telling","Talking"],0);
var q2=new Questions("She hasn’t come home___",["Still","Till","Yet","Already"],2);
var q3=new Questions("I___TV yesterday evening.",["Viewed","Watched","Saw","Looked"],1);
var q4=new Questions("She looks___a famous film star.",["As","Like","Smilar","Same"],1);
var q5=new Questions("I want you to tell me the___truth.",["Whole","Exact","Real","All"],0);
var q6=new Questions("Some people only read the___line",["Head","Main","Big","Top"],0);
var q7=new Questions("The boss was good enough to___my mistake.",["Oversee","Overdo","Overlook","Overtake"],2);
var q8=new Questions("I think I've got a cold,I can't stop___",["Sneeze","To sneeze","Sneezing","The sneezing"],2);
var q9=new Questions("If I__earlier.I wouldn't have been late for work",["Left","Was Leaving","Have Left","Had Left"],3);
var q10=new Questions("Did they___the dogs last night?",["Fed","Feeds","Feed","Feded"],2);
var questions=[q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];
var n=Math.floor(Math.random()*questions.length); 
questions[n].displayQuestion(); //konsola rastgele bir soruyu,sorunun cevap seçeneklerini ve şıklardaki doğru cevabın indeks değerini function constructor prototipini kullanarak getirdim 
//console.log(questions[n].checkanswers); random gelen sorunun doğru cevap indeksi örneğin q2 için "2" indeksi 



       
 y=document.getElementById("name-2"); // Find the elements
 y.textContent=questions[n].question;  
                
x=document.getElementsByClassName("buton");    
//select the buton class.
for(var i = 0; i < x.length; i++){
x[i].textContent=questions[n].answers[i]; // Change the content
x[i].classList.add("sacma2"); //random şıklara css ekledim :)                                       
 }


 var nodes = document.getElementsByClassName('buton');
 for (var i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function(i) {
       console.log('You clicked element #' + i); //tıkladığım butonun indeks numarasını konsola getirdim
       if(i==questions[n].checkanswers){ //eğer tıkladığım butonun indeks numarası ile random gelen sorunun doğru                                   cevabını gösteren  indeks numarası eşit ise correct imgesi gelecek değil ise yanlış simgesi gelecek
       
              CorrectSound();
        FindCorrect(i);// :)))) eğer yukardaki olay doğru ise correct iconu bastığım butonun indeksindeki kutucuğuna gelecek
                            //not burda next soru functionu tasarlayıp koyman lazım çünkü diğer butona basınca wrong simgesi de gelir.
         
    }else{
        InCorrectSound();    
        FindWrong(i);//:)))) eğer yukardaki olay yanlis ise wrong iconu bastığım butonun indeksteki kutucuğuna gelecek
 }
}.bind(null, i));
}

/*
document.querySelector(".kral").addEventListener("click",function(){ 
    FindCorrect(2); 
    FindWrong(3);
})     

*/






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
   }
   








document.querySelector(".kral").addEventListener("click",function(){  //Butonların her hangi birine bastığımda (kral classı)!!



}) 

 










/*
    function JasonButton(){
        var player= document.getElementById('pl');
        player.play();}*/

function CorrectSound(){
    var player1=document.getElementById('pl-1');
    player1.play();
}
function InCorrectSound(){
    var player2=document.getElementById('pl-2');
    player2.play();
}










































//YÖNTEMLERİM VE ONLARIN KISA YOLLARI
/*
checkcevaplar=[q1.checkanswers,q2.checkanswers,q3.checkanswers,q4.checkanswers,q5.checkanswers,q6.checkanswers,q7.checkanswers,q8.checkanswers,q9.checkanswers,q10.checkanswers];
cevaplar=[q1.answers,q2.answers,q3.answers,q4.answers,q5.answers,q6.answers,q7.answers,q8.answers,q9.answers,q10.answers];
sorular=[q1.question,q2.question,q3.question,q4.question,q5.question,q6.question,q7.question,q8.question,q9.question,q10.question];

console.log(sorular[n]);       == console.log(questions[n].question);     bunlar eşit
console.log(cevaplar[n]);      == console.log(questions[n].answers);      bunlar da eşit
console.log(checkcevaplar[n]); == console.log(questions[n].checkanswers); bunlar da eşit 

console.log(questions[n].question); random gelen soru
console.log(questions[n].checkanswers); random gelen sorunun doğru cevap indeksi örneğin q2 için "2" indeksi
console.log(questions[n].answers); random gelen sorunun şıklarının arrayi örneğin [""Viewed", "Watched", "Saw", "Looked"]

    x=document.getElementsByClassName("buton"); //select the buton class.
    for(var i = 0; i < x.length; i++){
   x[i].textContent=cevaplar[n][i]; // Change the content
   x[i].classList.add("sacma2"); //random şıklara css ekledim :)                                       
    }

************** çok önemli.... :))) eğer butona basarsam(.kral) wrong klasının display özelliği (normalde css'de display="none") initial olsun yani "baştaki,görünür,ilk " olsun normalde  html de görünmeyen icon belirsin
    document.querySelector(".kral").addEventListener("click",function(){
document.querySelector(".wrong").style.display="initial"; 
    }
//Buna ayrıntılı bak inceles
var nodes = document.getElementsByClassName('buton'); ///tıkladığım butonun indeks değerini getirdim
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function(i) {
      console.log('You clicked element #' + i);
   }.bind(null, i));
}
 /METHOD  setTimeout(function,time)
setTimeout(function() {    
            FindWrong(i);
        }, 200)













//gerekli mi değil nmi bilmiyorum bulunsun
    for(i=0;i<questions[n].answers.length;i++){
    var butonsikindeks=[]
    butonsikindeks.push(questions[n].answers[i]);    //bu işlemi yapınca ["Head"] gibi örnek olarak şıkların array hali geliyor.
    console.log(butonsikindeks);                                         ["Main"]
                                                                         ["Big"]
                                                                         ["Top"]
    
}
   */  