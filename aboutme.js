var head=document.querySelector('.head_container');
var head_height=window.getComputedStyle(head).height;
head_height=+(head_height.substr(0,head_height.length-2));


var tab_link=document.querySelector('.login');
var links_tab=document.querySelector('.link_container');
var link_count=1;
tab_link.addEventListener('click',function(){
	link_count++;
	var e_o=(link_count%2==0)?1:0;
	if(e_o==1){
		links_tab.style.transition='1s';
		links_tab.style.top=head_height+20+'px';

	}else{
		links_tab.style.transition='1s';
		links_tab.style.top=-1*(head_height)*4+'px';
	}
});

var inspiration=1;
var journey=1;
var btn1x=document.querySelector('.btn1');
var btn2=document.querySelector('.btn2');
var lft1=document.querySelector('.lftdesc1');
var lft2=document.querySelector('.lftdesc2');
var wid=window.getComputedStyle(lft1).width;
var mar=window.getComputedStyle(lft1).marginLeft;
mar=+((mar.substr(0,mar.length-2)));
var tot=(+(wid.substr(0,wid.length-2)))+(mar);
console.log(mar);
btn1x.addEventListener('click',function(){
	
	inspiration++;
	var eo=(inspiration%2==0)?1:0;
	
	if(eo==1){
		lft1.style.transition='1s';
		lft1.style.transform=`translateX(-${tot-mar*1.76}px)`;


	}
	else{
		
		lft1.style.transition='1s';
		lft1.style.transform=`translateX(${tot}px)`;
	}

});
btn2.addEventListener('click',function(){
	
	journey++;
	var eo=(journey%2==0)?1:0;
	
	if(eo==1){
		lft2.style.transition='1s';
		lft2.style.transform=`translateX(-${tot-mar*1.76}px)`;


	}
	else{
		
		lft2.style.transition='1s';
		lft2.style.transform=`translateX(${tot}px)`;
	}

});

setTimeout(function(){
	if( inspiration==1){
		alert('Please press My inspiration Button if not pressed');
	}


},8000);
