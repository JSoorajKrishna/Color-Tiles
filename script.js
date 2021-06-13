let sel=document.querySelectorAll("td");
let x=0;
let score=document.querySelectorAll("button");
let move=0;
let y=0;
let min=0;
let sec=0;
let r=0;
let nxt=1;
let ini=0;
let stat=0;
window.setInterval(timer,1000);
window.setInterval(submit,1000);
alert("To start the game press START button");


//code for beggining look before start begins
for(let k=0;k<34;k++)
    {let l=sel[k].getAttribute("val");
        if(l==1||l==15||l==17||l==21)
            sel[k].setAttribute("class","black");
        if(l==3||l==6||l==18||l==22)
            sel[k].setAttribute("class","black");
        if(l==2||l==9||l==13||l==23||l==25)
            sel[k].setAttribute("class","black");
        if(l==4||l==7||l==11||l==20)
            sel[k].setAttribute("class","black");
        if(l==5||l==8||l==14||l==16||l==24)
            sel[k].setAttribute("class","black");
        if(l==12||l==19)
            sel[k].setAttribute("class","black");
        if(l==10)
            sel[k].setAttribute("class","black");
    }
 //code for beggining look before start ends


 //code for apperance after start button is pressed begins
score[1].onclick=function()
{    if(stat==0)
    {stat++;
    ini=1;
    r=1;
    x=1;
    y=1;
    for(let k=0;k<34;k++)
    {let l=sel[k].getAttribute("val");
        if(l==1||l==15||l==17||l==21)
            sel[k].setAttribute("class","red");
        if(l==3||l==6||l==18||l==22)
            sel[k].setAttribute("class","green");
        if(l==2||l==9||l==13||l==23||l==25)
            sel[k].setAttribute("class","yellow");
        if(l==4||l==7||l==11||l==20)
            sel[k].setAttribute("class","blue");
        if(l==5||l==8||l==14||l==16||l==24)
            sel[k].setAttribute("class","white");
        if(l==12||l==19)
            sel[k].setAttribute("class","orange");
        if(l==10)
            sel[k].setAttribute("class","black");
    }
    }
}
//code for apperance after start button is pressed ends


//code for moving the titles begins
for(let i=9;i<34;i++)
{
    sel[i].onclick=function()
    {
        let a=sel[i].getAttribute("val");
        let b=sel[i].getAttribute("class");
        let c=document.getElementsByClassName("black");
        let d=c[0].getAttribute("val");
        let e=d;
        e++;
        let f=e;
        if(d!=a)
            move++;
        f++;
        f++;
        f++;
        f++;
        if(y==1)
        {
        if((d%5!=0)&&(d-1)%5!=0)
        if(a==d-1||a==e||a==f||a==d-5)
        {
            c[0].setAttribute("class",b);
            sel[i].setAttribute("class","black");
        }
        if(d%5==0)
        {if(a==d-1||a==f||a==d-5)
            {
              c[0].setAttribute("class",b);
            sel[i].setAttribute("class","black");  
            }

        }
        if((d-1)%5==0)
        {
           if(a==e||a==f||a==d-5)
        {
            c[0].setAttribute("class",b);
            sel[i].setAttribute("class","black");
        } 
        }}
    }
}
//code for moving the titles ends


//code for timer begins here
function timer()
{if(x==1)
    {
    let time=document.getElementsByClassName("timer");
    sec++;
    if((sec%60)==0)
    {
        min++;
        sec=0;
    }
    if(sec<10&&min<10)
    {time[0].innerHTML="0"+min+":0"+sec;
    }
    else if(sec>=10&&min<10)
    {
        time[0].innerHTML="0"+min+":"+sec;
    }
    else if(sec<10&&min>=10)
    {
       time[0].innerHTML=min+":0"+sec; 
    }
    else
    {
       time[0].innerHTML=min+":"+sec; 
    }
}
}
//code for timer ends here


//code for winning message begins
function submit()
{   let i,j,y;
    y=0;
    score1=document.getElementsByClassName("score");
    for(i=0,j=15;i<3;i++,j++)
    {let p=sel[i].getAttribute("class");
    let q=sel[j].getAttribute("class");
    if(p==q)
    y++;
    }
    for(i=3,j=20;i<6;i++,j++)
    {let p=sel[i].getAttribute("class");
    let q=sel[j].getAttribute("class");
    if(p==q)
    y++;
    }
    for(i=6,j=25;i<9;i++,j++)
    {let p=sel[i].getAttribute("class");
    let q=sel[j].getAttribute("class");
    if(p==q)
    y++;
    }
    if(r==1)
    if(y==9)
    {   score1[0].innerHTML=score1[0].innerHTML+"+"+(100-move);
        alert("VICTORY");
        r=2;
        x++;
        if(nxt==2)
        next2();
        if(nxt==1)
        next1();
    }
}
//code for winning message ends


//code for restart begins
score[0].onclick=function()
{if(ini==1)
    {x=1;
    score1[0].innerHTML='';
    for(let k=0;k<34;k++)
    {let l=sel[k].getAttribute("val");
        if(l==1||l==15||l==17||l==21)
            sel[k].setAttribute("class","red");
        if(l==3||l==6||l==18||l==22)
            sel[k].setAttribute("class","green");
        if(l==2||l==9||l==13||l==23||l==25)
            sel[k].setAttribute("class","yellow");
        if(l==4||l==7||l==11||l==20)
            sel[k].setAttribute("class","blue");
        if(l==5||l==8||l==14||l==16||l==24)
            sel[k].setAttribute("class","white");
        if(l==12||l==19)
            sel[k].setAttribute("class","orange");
        if(l==10)
            sel[k].setAttribute("class","black");
    }
    min=0;
    sec=0;
    move=0;
    r=1;
    nxt=1;
    }
}
//code for restart ends


//code for next level begins
function next1()
{ nxt++;
    r=1;
    x=1
    min=0;
    sec=0;
    move=0;
    score1[0].innerHTML=score1[0].innerHTML+'';
    for(let k=0;k<34;k++)
    {let l=sel[k].getAttribute("val");
        if(l==3||l==8||l==16||l==20)
            sel[k].setAttribute("class","red");
        if(l==6||l==10||l==14||l==21)
            sel[k].setAttribute("class","green");
        if(l==1||l==9||l==18||l==19)
            sel[k].setAttribute("class","yellow");
        if(l==5||l==12||l==15||l==23)
            sel[k].setAttribute("class","blue");
        if(l==2||l==9||l==17||l==22)
            sel[k].setAttribute("class","white");
        if(l==4||l==11||l==13||l==24)
            sel[k].setAttribute("class","orange");
        if(l==7)
            sel[k].setAttribute("class","black");
    }
}


function next2()
{ nxt++;
    r=1;
    x=1
    min=0;
    sec=0;
    move=0;
    score1[0].innerHTML=score1[0].innerHTML+'';
    for(let k=0;k<34;k++)
    {let l=sel[k].getAttribute("val");
        if(l==2||l==9||l==17||l==21)
            sel[k].setAttribute("class","red");
        if(l==3||l==8||l==15||l==22)
            sel[k].setAttribute("class","green");
        if(l==6||l==10||l==16||l==20)
            sel[k].setAttribute("class","yellow");
        if(l==5||l==12||l==14||l==24)
            sel[k].setAttribute("class","blue");
        if(l==4||l==11||l==18||l==23)
            sel[k].setAttribute("class","white");
        if(l==1||l==7||l==13||l==19)
            sel[k].setAttribute("class","orange");
        if(l==25)
            sel[k].setAttribute("class","black");
    }
}