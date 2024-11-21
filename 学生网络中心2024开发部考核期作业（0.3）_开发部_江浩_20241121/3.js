let Daihao=document.getElementById("Minn");
let load = function(){
    return JSON.parse(localStorage.The_All);
}
var sum=0;//防止生成多个结果
let tab=document.createElement("table");
tab.border=1;
let FiIR = function(){
    let han=document.createElement("tr");
    let han1=document.createElement("th");
    let han2=document.createElement("th");
    han1.innerText="参与者";
    han.appendChild(han1);
    han2.innerText="奖品";
    han.appendChild(han2);    
    tab.appendChild(han);
} 
let chenc=function(){
    if(sum===1)
    {
        alert("结果已经生成");
        return 1;
    }
    if(localStorage.The_All==null){
        alert("无奖池");
    }else{
        let real_All=load();
        var v=-1;
        for(let i=0;i<real_All.length;i++)
        {
            if(Daihao.value==real_All[i][1])
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

        let All=load()[v];
        let n=All[4].length;
        for(let i=0;i<n;i++)
        {
            let trs=document.createElement("tr");
            let tds1=document.createElement("td");
            let tds2=document.createElement("td");
            if(i==0) {FiIR();}//表头
            tds1.innerText=All[4][i];
            trs.appendChild(tds1);
            tds2.innerText=All[5][i];
            trs.appendChild(tds2);
            tab.appendChild(trs);
        }
        sum=1;
    }
}
document.body.appendChild(tab);