var count=0;
window.onload=function(){
    var Msg=document.getElementById('msg');
    var Btn=document.getElementById('btn');
    var Msg_c=document.getElementById('msg_c');
    var Ul=document.createElement('ul');
    Msg_c.appendChild(Ul);
    Btn.onclick=function(){
        var msgValue=Msg.value;
        var Li=document.createElement('li');
        Li.innerHTML=msgValue+'<span>删除</span>';
        var arrLi=document.getElementsByTagName('li');
        if(arrLi.length>0){
            Ul.insertBefore(Li,arrLi[0]);
            count++;
        }else{
            Ul.appendChild(Li);
            count++;
        }
        Msg.value='';
        var span=document.getElementsByTagName('span');
        for(var i=0;i<span.length;i++){
            span[i].onclick=function(){
                Ul.removeChild(this.parentNode);
                count--;
            }
        }
    }
}
function totalMessage(){
    alert("一共有： "+count+"条留言！")
}