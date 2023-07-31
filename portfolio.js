var head=document.querySelector('.head_container');
var head_height=window.getComputedStyle(head).height;
head_height=+(head_height.substr(0,head_height.length-2));
console.log(head_height);

var tab_link=document.querySelector('.login');
var links_tab=document.querySelector('.link_container');
var link_count=1;

var btn_show=document.querySelector('.btn');
var show_count=1;
var desc=document.querySelector('.desc');
var lft=window.getComputedStyle(desc).left;




lft=+(lft.substr(0,head_height.length-2));


var extral=document.querySelector('.ext_section');
 var ext=window.getComputedStyle(extral).right;
 ext=+(ext.substr(0,ext.length-2));
console.log(ext);
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
btn_show.addEventListener('click',function(){
	show_count++;
	var e_o=(show_count%2==0)?1:0;
	if(e_o==1){
  desc.style.transition='1s';
  desc.style.left=lft+'px';
	}
	else{
desc.style.transition='1s';
  desc.style.left='-100%';
	}

});
window.addEventListener('scroll',function(){
	if(screen.width<400){
		extral.style.right='50px';
	}
	else{

	var scr=window.scrollY;
	console.log(scr);
	extral.style.right=-600+scr*3.8+'px';
}
})