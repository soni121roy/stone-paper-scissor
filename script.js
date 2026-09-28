let us=0, cs=0;
function play(user){
 let ch=["Stone","Paper","Scissor"];
 let comp = ch[Math.floor(Math.random()*3)];
 let res="";
 if(user==comp) res="Draw! 😐";
 else if((user=="Stone"&&comp=="Scissor")||(user=="Paper"&&comp=="Stone")||(user=="Scissor"&&comp=="Paper")){ res=`You Win! ${user} beats ${comp} 🎉`; us++; }
 else{ res=`You Lose! ${comp} beats ${user} 😢`; cs++; }
 document.getElementById("result").innerText=res;
 document.getElementById("score").innerText=`You: ${us} | Computer: ${cs}`;
}