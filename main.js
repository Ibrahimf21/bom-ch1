let myIn = document.querySelector('input[class = "input"]')
let myAdd = document.querySelector('input[class = "add"]')
let myTasks = document.querySelector('div[class = "tasks"]')
let mycon = document.querySelector(".container")
let myform = document.querySelector("form")
let myDiv = document.createElement("div")
let myP = document.createElement("p")
let mybut = document.createElement("button")
// window.localStorage.clear();
// const mediaQuery = window.matchMedia('(min-width:550px)')
// const mediaQueryla = window.matchMedia('(min-width:768px)')
// Check if the media query is true
// mycon.style.cssText= `
// // margin: 50%;

// // transform: translate(50px, 50px);
// // display: g;
// // grid-template-columns: calc(100% - 100px);
// `;
myform.style.cssText= `
display:flex;
align-items: center;
// gap: 10px;
border-bottom: 20px solid white;
background-color: #eee;
padding: 10px;
text-align-last: justify;
`;
// if(mediaQuery.matches){
//     mycon.style.width = "650px"
// }
// if(mediaQueryla.matches){
//     mycon.style.width = "750px"
// }
myIn.style.cssText= `
width: calc(100% - 95px);
height: 22px;
/* border: none; */
border-radius: 3%;
border: 1px solid transparent;
`;
myAdd.style.cssText= `
width: auto;
color: white;
border: 3px solid transparent;
border-radius: 15%;background: #ff0000b8;
`;
myTasks.style.cssText= `
width: auto;
display: flex;
flex-direction: column;border: 12px soild #eee;
`;
myDiv.style.cssText= `
display: flex;
border: 2px solid #eee;
background-color: #eee;
padding: 1px;
// width: 100%;
`;
myP.style.cssText= `
border-radius: 6%;
background-color: white;
width: 100%;
border: 4px solid transparent;
margin-left:10px;
`;
mybut.style.cssText= `
color: white;
border-radius: 12%;
// width: 47px;
height: 22px;
border: 1px solid transparent;
background-color: #ff0000d1;
transform: translate(0px, 17px);
margin: 1px;
`;

let arr = [];
if(localStorage.getItem("task")){
    
    arr = JSON.parse(localStorage.getItem("task"));
}


window.onLoad =()=>{
    myIn.focus();
};

// we are making an todo list function

myAdd.onclick=(e)=>{
    let item=myIn.value
    if(item != ""){
        
        arr.push(item)
    }
    
    
    localStorage.setItem("task",JSON.stringify(arr));
    // e.preventDefault();
};
let v =JSON.parse(localStorage.getItem("task"));
// console.log(arr[2]);

// print function that willl print all local stoareg value

// print function that willl print all local stoareg value

pf();

function pf(){
    for(let i = 0; i < v.length;i++){
        
        makeT(i);
        
    }
    
}





function makeT(i) {
    let newp = myP.cloneNode(); 
    let newd = myDiv.cloneNode(); 
    let newbut = mybut.cloneNode();
    newp.innerHTML= v[i];
    newd.className = v[i];
    // newp.style.cssText= `width: 100%; Background-color:silver;`;
    // newd.style.cssText= `display: flex;`;
    // newbut.style.cssText= ``
    newbut.textContent = "delet";
    newbut.onclick=()=>{del(v,i);}
    newd.appendChild(newp);
    newd.appendChild(newbut);
    myTasks.appendChild(newd);  
    // myAdd.style.color= "red";
    
}


function del(v,i){
    
    
    console.log(v[i]);
    
    let x = v.filter(word => word != v[i]);
    console.log(x);

        
        localStorage.setItem("task",JSON.stringify(x));
    
    location.reload();
    
}





    // newbut.parentNode.parentNode.removeChild(newbut.parentNode);



































/*
let arr =[];

myAdd.addEventListener("click", function (e) {
    
    
    arr.push(myIn.value);
    window.localStorage.setItem("tasks",JSON.stringify(arr));
    // e.preventDefault()
    
// }




open window

case one : no local  =>   when you click add take the value from the inut 
and push him in array andthen updathe the array in local storage

if no local make arr and local

ifthay have alocal and array just push and upsate maybe uyou need json















*/






















// // check if has a local stoarge
// if(window.localStorage.getItem("cn")){
//     // if have a local :
//     // 1-print make div for each value and content text
    
    
//     myAdd.addEventListener("click", function (e) {
        
//         // let myc = ++window.localStorage.cn;
//         //  window.localStorage["task-" + [++window.localStorage.cn]] = myIn.value;
//         //  makeT();
//         arr.push(myIn.value);
        
//         // e.preventDefault();
        
        
//     });
// }
// else{
//     let arr = [];
//     window.localStorage.cn = 0;
// }
// console.log(arr);
// let k = window.localStorage["task-" + ++[window.localStorage.cn]];
    
    // myTasks.innerHTML = window.localStorage["task-" + [window.localStorage.cn]];











// for(let i = 1; i < )












// myAdd.addEventListener("click", function (e) {
//     window.localStorage["task-" + ++[myc]] = myIn.value;
//     makeT();
//     e.preventDefault();
//     // make new div function ;
   
//    });
// 
// else{
//    window.localStorage.cn = 0;
// }
// let myc = window.localStorage.cn ;
// let k = window.localStorage["task-" + [myc]];
// myTasks.innerHTML = k;







