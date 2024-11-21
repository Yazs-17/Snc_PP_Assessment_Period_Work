let Name=document.getElementById("name");
let Daihao=document.getElementById("daihao");
let kaichou=function(){
    if(localStorage.The_All==null){
        alert("无奖池");
    }else{
        let real_All=load();
        let v=-1;
        for(let i=0;i<real_All.length;i++)
        {
            if(Daihao.value==real_All[i][1])//匹配奖池
            {
                v=i;
                break;
            }
        }
        if(v===-1)
        {
            alert('没有叫这个名称的奖池');
            return 0;
        }
        else
        {
            
            let All=load()[v];
            //alert(All[4]);
            if(All[4]!==null)
             if(All[4].length===All[0]||All[6]===0)
             {
                alert('该奖池已经被抽完');
                return 0;
             }
            //alert(333);
            if(All[4]===null)//实验的结果
            {
                All[4]=[];
                All[5]=[];
                var J=0;
            }
            else
             var J=All[4].length;//第J+1个抽奖的人
            
            var num = Math.floor(Math.random()*(All[6]-1));//随机数
            for(let i=0;i<All[2].length;i++)
            {
                num=num-All[3][i];
                if(num<0)
                {
                    All[3][i]=All[3][i]-1;//同时让该奖池的该奖品数-1
                    All[6]=All[6]-1;//让该奖池的奖品总数-1

                    //记录参与者信息
                    All[4][J]=Name.value;
                    All[5][J]=All[2][i];
                    break;
                }
            }
            alert('你抽到了'+All[5][J]);
            //记录信息
            real_All[v]=All;
            localStorage.The_All=JSON.stringify(real_All);
        }
    }
}
let load = function(){
    return JSON.parse(localStorage.The_All);
}
let open1=function(){
    window.open('创建抽奖.html');
}
let open2=function(){
    window.open('抽奖结果.html');
}