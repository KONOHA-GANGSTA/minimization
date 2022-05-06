let tbl = document.createElement('table');
let vars = ["X<sub>1</sub>","X<sub>2</sub>","X<sub>3</sub>"];
let combs = [];
for(let i = 0; i < vars.length-1; ++i)
for(let j = i+1; j < vars.length; ++j)
    combs.push(""+vars[i]+vars[j]);
//Построение таблицы
for(let i = 1; i <= 8; ++i){
    let rw= document.createElement('tr');
    rw.id="r"+i;
    for(let j = 1; j <= 7; ++j ){
        let tb = document.createElement('td');
        tb.id="r"+i+"c"+j;
        if (j<=3) tb.innerHTML="<span>X</span><sub>"+j+"</sub>";
        else if (j==7) tb.innerHTML="<span>X</span><sub>1</sub><span>X</span><sub>2</sub><span>X</span><sub>3</sub>";
        else{
            tb.innerHTML=combs[j-4];
        }
        rw.appendChild(tb);
    }
    tbl.appendChild(rw);
}
tbl.setAttribute("border","1");
document.body.appendChild(tbl);
////Инвертирование
//Единичных
for (let i = 1; i<=8;++i)
    for (let j = 1; j <= 3; ++j){
        if ((j == 1) & (i > 4)) document.querySelector("#r"+i+"c"+j+" > span").classList.add("inv");
        if(([3,4,7,8]).includes(i) & j == 2)  document.querySelector("#r"+i+"c"+j+" > span").classList.add("inv");
        if ((j==3) & !(i%2)) document.querySelector("#r"+i+"c"+j+" > span").classList.add("inv");
    }
//Двоиных
for (let i = 1; i<=8;++i)
    for (let j = 4; j <= 6; ++j){
        let cel = document.querySelector("#r"+i+"c"+j).querySelectorAll('span');
        if ((j == 4) & (i > 4)) cel[0].classList.add("inv");
        if(([3,4,7,8]).includes(i) & j == 4) cel[1].classList.add("inv");
    }

