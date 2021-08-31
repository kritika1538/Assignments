const btn=document.querySelector("#btn");
let inp=document.querySelector("#inp");
let content=document.querySelector("#content");
let work=[];
let count=0;
let btn1=document.querySelector("#btn1");
let flag=false;
function refreshItems()
{    
    content.innerHTML="";
        setTimeout(()=>{
        work.map((val)=>{
               
                flag=true;
                content.insertAdjacentHTML("afterbegin",`<div class="items" id="${val.id}">
                <h3>${val.text}</h3>
               <div class="prop">
                   <i class="fas fa-sort-up"></i>
                   <i class="fas fa-trash"></i>
                   <i class="far fa-edit"></i>
                   <i class="fas fa-sort-down"></i>
               </div>
            </div>`);
               
        })
       },1);
    };
const addData=()=>{
    let text=inp.value.trim();
  refreshItems();
   if(text!="")
   {
        count++;
        work.push({text,id:count});
        
        count++;
        inp.value=""; 
        inp.focus();
    }
    else{
        alert("Please enter Something");
    }
    
}
console.log(content.innerHTML);
document.addEventListener("keydown",(e)=>{if(e.key==="Enter")
{
    addData();
}});
btn.addEventListener("click",()=>{
    addData();
    btn.style.transition="all 1s ease";
    if(flag)
    {
        btn.innerHTML='<i class="far fa-star"></i>';
        flag=false;
    }
    
});
content.addEventListener('click', deleteCheck);
function  deleteCheck(e){
const item=e.target;
if(item.classList[1]==="fa-sort-up")
{
    const todo=item.parentElement.parentElement.getAttribute('id');
    console.log(todo);
     let index=-1;
     for(let i=0;i<work.length;i++)
     {
         if(work[i].id==todo)
         {
             index=i;
         }
        
     }
     if(index!=work.length-1)
     {
        const temp=work[index+1];
        work[index+1]=work[index];
        work[index]=temp;
        
        refreshItems();
     }
     else{
         alert("Please enter a item to move it upwards");
     }
}

if(item.classList[1]==="fa-trash")
{
    const todo=item.parentElement.parentElement;
 todo.classList.add("slide-out-elliptic-top-bck");
todo.addEventListener("animationend",()=>todo.remove());
const newArray=work.filter(({id})=>id!=todo.getAttribute("id"));
work=newArray;

}

if(item.classList[1]==="fa-edit")
{
  const change= prompt("enter the changed item here!");
  if(change!="")
  item.parentElement.parentElement.children[0].innerText=change;
  }
  
}

if(item.classList[1]==="fa-sort-down")
{
    const todo=item.parentElement.parentElement.getAttribute('id');
    console.log(todo);
     let index=-1;
     for(let i=0;i<work.length;i++)
     {
         if(work[i].id==todo)
         {
             index=i;
         }
        
     }
     if(index!=0)
     {
        const temp=work[index-1];
        work[index-1]=work[index];
        work[index]=temp;
        
        refreshItems();
     }
     else
     {
         alert("Please enter a item to move it downwards");
     }
}


btn1.addEventListener("click",(e)=>{
    console.log(e.target.value);
    let todos=content.childNodes;
    console.log(todos);

});