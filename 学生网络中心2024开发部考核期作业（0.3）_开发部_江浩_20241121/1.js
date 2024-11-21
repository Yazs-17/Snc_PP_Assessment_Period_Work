let esave=document.getElementById("saved");
let eclean=document.getElementById("cleaned");
let eprize=document.getElementById("prized");
let tab=document.createElement("table");
let ans=0;
tab.border=1;

let FiIR = function(){  //输入列表的表头
    let han=document.createElement("tr");
    let han1=document.createElement("th");
    let han2=document.createElement("th");
    han1.innerText="奖品";
    han.appendChild(han1);
    han2.innerText="数量";
    han.appendChild(han2);    
    tab.appendChild(han);
} 
eprize.onclick = function(){  //增加奖品
    // let try111=document.getElementsByClassName("111");  
    let trs=document.createElement("tr");
    let tds1=document.createElement("td");
    let tds2=document.createElement("td");
    let named1=document.createElement("input");
    let named2=document.createElement("input");
    if(ans==0) {FiIR();}  //表头
    named1.className="111"; named2.className="222"; //用于储存数据
    named2.type="Number"; //用numble好像没用，必须用Numble
    tds1.appendChild(named1); 
    trs.appendChild(tds1);
    tds2.appendChild(named2);
    trs.appendChild(tds2);
    tab.appendChild(trs);
    ans=ans+1;
}
document.body.appendChild(tab);



esave.onclick = function(){   //保存
    let All=[];
    All[2]=[];All[3]=[];
    All[0]=Number(joins.value);All[1]=names.value;All[6]=0;
    
    //获取奖品信息
    let A111=document.getElementsByClassName("111");
    let A222=document.getElementsByClassName("222");
    for(let i=0;i<ans;i++)
    {
        All[2][i]=A111[i].value;
        All[3][i]=Number(A222[i].value);
        All[6]=All[6]+Number(A222[i].value);
    }
    if(All[6]<All[0])//用空气填充奖品
    {
        All[2][ans]="空气";
        All[3][ans]=All[0]-All[6];
        All[6]=All[0];
    }
    let real_all=[];
    if(localStorage.The_All!=null) real_all=load();//储存
    real_all.push(All);
    localStorage.The_All=JSON.stringify(real_all);
    // console.log(load());
    location.reload();
    alert('创建成功');
}
let load = function(){
    return JSON.parse(localStorage.The_All);
}
/*
The_All[x]表示第x+1个奖池，也表示一个All
All[0]表示参与人数
All[1]表示奖池名称
All[2]与All[3]分别表示奖品名称与数量，之后每被抽走一个奖品，奖品数量-1
All[4]与All[5]分别表示参与者名称与其抽到的奖品
All[6]表示奖品总数，搞随机数时要用
*/