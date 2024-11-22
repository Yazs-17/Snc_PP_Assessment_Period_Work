document.getElementById('start').addEventListener('click',function(){
    let max=document.getElementById('member').value;
    let winner=document.getElementById('winner').value;
    if(max<=0||winner<=0||max<winner){
        alert('请输入有效的数字范围');
        return;
    }
    let result=[];
    while(result.length<winner){
        let unique;
        unique=Math.floor(Math.random()*max)+1;
        if(result.indexOf(unique)===-1){
            result.push(unique);
        }
    }
    document.getElementById('result').textContent = result.join(', '); 
})