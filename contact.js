var head=document.querySelector('.head_container');
var head_height=window.getComputedStyle(head).height;
head_height=+(head_height.substr(0,head_height.length-2));
console.log(head_height);

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
const panels = document.querySelectorAll('.cards');
let cnt=0;
panels.forEach(panel => {
    panel.addEventListener('click', () => {
    	cnt++;
        removeActiveClasses()
        panel.classList.add('active1')
    });
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active1')
    });
}
setTimeout(function(){
	if(cnt==0){
		alert('Press on any language cards if not pressed to get the content');
	}
},8000);
