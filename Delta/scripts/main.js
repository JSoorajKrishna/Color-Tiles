let myimage=document.querySelector('img');
let myimage1=myimage.getAttribute('src');
let i=0;
let new3='images/ben10.png'
myimage.onclick=function()
{i++;
	let new1='images/'+i;
	let new2=new1+'.png';
	if(new3!=='images/9.png')
	{
	
		myimage.setAttribute('src',new2);
		new3=myimage.getAttribute('src');
	}
	else
		{myimage.setAttribute('src','images/ben10.png');
	new3=myimage.getAttribute('src');
	i=0;
}
}