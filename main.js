var nom= document.getElementById('name').value;

function my_name(){
    var nom= document.getElementById('name').value;
    if(nom!='')
   document.querySelector(".game").style.visibility='visible';
   if(nom==='')
  window.alert('le nom est vide !');

}
let title=document.querySelector('.title');
let squares=[];
function end(n1,n2,n3){
    var nom= document.getElementById('name').value;
    if(squares[n1]=='x'){
        title.innerHTML='<span>'+nom+'</span>'+' Won';
        var audio=new Audio('gagne.mp3');
audio.play();
    }
    else{
        title.innerHTML='Computer Win';
        var audio=new Audio('perdu.mp3');
        audio.play();
    }
    document.getElementById('item'+n1).style.background='red';
    document.getElementById('item'+n2).style.background='red';
    document.getElementById('item'+n3).style.background='red';
   title.style.background='black';
   title.style.color='white';

    setInterval(function(){title.innerHTML+='.'},1000);
    setTimeout(function(){location.reload()},3000);

}
function winner(){
   for(let i =1;i<10;i++){
  squares[i]=  document.getElementById('item'+i).innerHTML;

   }
   if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!=''){
      end(1,2,3);
   }
   else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[4]!=''){
    end(4,5,6);

   }
  else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[7]!=''){
       end(7,8,9);
}
else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[1]!=''){
     end(1,4,7);  
}
else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[2]!=''){
       end(2,5,8);
}
else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[3]!=''){
       end(3,6,9);
}
else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!=''){
     end(1,5,9);  
}
else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[3]!=''){
       end(3,5,7);
}

}

function game(id){
        var divs=[];
for(let i=1;i<10;i++){
    divs[i]=document.getElementById('item'+i);
}
    var element=document.getElementById(id);
    if(element.innerHTML==''){
        element.innerHTML='x';
        var pb;
        pb=Math.floor((Math.random()*9)+1);
        for(let i=1;i<10;i++){
            if(divs[pb].innerHTML==''){
                divs[pb].innerHTML='o';
                break;
            }
            pb=Math.floor((Math.random()*9)+1);
        }
    }
   
    winner();
}
