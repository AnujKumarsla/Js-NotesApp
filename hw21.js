let a=document.createElement("div");
a.className="mydiv";
a.id="division";
a.innerHTML=`<ul id="list" style="padding: 0;margin: 0;">
<li onclick="edit()">Name</li>
<li onclick="edit()">Age</li>
<li onclick="edit()">Class</li>
</ul>`;
console.log(a);
let body=document.getElementsByTagName("body")[0];
console.log(body);
body.appendChild(a);

// let text=document.createElement("input");
// text.setAttribute('type','textfield');
let text=null;
let on=false;

let list=document.getElementById("list");
// list.addEventListener("dblclick",function(e){
//     let content;
//     if(text){
//         content=text.value;
//         let li=document.createElement('li');
//         li.innerHTML=content;
//         console.log(content);
//         text.replaceWith(li);
//         text=null;
//     }
//     text=document.createElement("input");
//     text.setAttribute('type','textfield');


//     let node=e.target;
//     text.value=node.innerText;
//     console.log(node);
//     node.replaceWith(text);
    
//     on=true;
// });
function edit(){

    // let content;
    // if(text){
    //     content=text.value;
    //     let li=document.createElement('li');
    //     li.innerHTML=content;
    //     console.log(content);
    //     text.replaceWith(li);
    //     text=null;
    // }
    // text=document.createElement("input");
    // text.setAttribute('type','textfield');


    // let node=e.target;
    // text.value=node.innerText;
    // console.log(node);
    // node.replaceWith(text);
    
    // on=true;
};

body.addEventListener('click',function(e){
    let content;
    if(text){
        content=text.value;
        let li=document.createElement('li');
        li.innerHTML=content;
        console.log(content);
        text.replaceWith(li);
        text=null;
    }
});