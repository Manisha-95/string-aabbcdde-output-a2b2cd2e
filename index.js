// Import stylesheets
import './style.css';

function myString(msg){
console.log(msg);
for(var i=0;i<msg.length;i++)
{
    var count=1;
   
    if(msg[i]==msg[i+1])
    {
    i++;
    count++;
    }
    var t;
    count>1 ? t+=msg[i]+count:t+=msg[i];
    // var output;
    // output+=t;
    
}
console.log(t);


    }
    myString("aabbcdde");
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;