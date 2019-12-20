let inputUser = document.getElementById('tasks');
let taskCount = document.getElementById('task-counter');


document.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
        submitTask()
    }
});


let counter = 0;


let emojiArr = ['⌛','⌚','⏰','⏱','⏲','🤢','⏳','☕','👹','🤖'];


function submitTask(){

    if(inputUser.value !== ''){

        let newTask = document.createElement('h5');
        let dlt = document.createElement('button');
        

        newTask.innerHTML = inputUser.value + ' ' + emojiArr[Math.floor(Math.random() * 10)];
        newTask.setAttribute('id','tsk' + counter);


        dlt.innerHTML = 'Task done!';
        dlt.setAttribute('id','btn' + counter);
        dlt.setAttribute('class','btn'); 

        document.body.appendChild(newTask);
        document.body.appendChild(dlt);

        let x = document.getElementsByClassName('btn');

        x[counter].addEventListener('click', taskDone);

        counter += 1;
    }

    countSubmits();
    
};


let cleanCall = false;

function cleanAll(){
    cleanCall = true;
    let body = document.body; 

    for(let i=0; i<counter; i++){
        let btns = document.getElementById('btn'+i);
        body.removeChild(btns);
    }
    
    for(let i=0; i<counter; i++){
        let tasks = document.getElementById('tsk'+i);
        body.removeChild(tasks);
    }

    counter = 0;
   return cleanCall;
} 



let countCalls = 0;

let arrTaskDone = [];

function taskDone(event){


    let num = event.target.id.replace('btn','');
    let tasks = document.getElementById('tsk'+ num);
    let btns = document.getElementById('btn'+num);

    tasks.classList.add('underLine');

    if(countCalls == 0 || countCalls%2==0){
        tasks.classList.add('underLine');
        btns.innerText = 'NOT DONE YET?';
    } 

    else {
        tasks.classList.remove('underLine');
        btns.innerText = 'TASK DONE!';

    }

    countCalls += 1;
    arrTaskDone.push(num);
   
}   




function newDate(){
    let date = new Date();
    let container = document.createElement('h2');
    container.innerHTML = date; //`CURRENT DATE : ${date.getDate()} - ${date.getMonth()+1} - ${date.getFullYear()}`;
    document.body.appendChild(container);
}

newDate();




let delbtn = document.getElementById('buttonDel');
delbtn.addEventListener('click', function(){
    let tasksC = 0;

    for(let i=0; i<counter; i++){
        let tasks = document.getElementById('tsk'+i);
        let btns = document.getElementById('btn'+i);

        if(tasks.classList.contains('underLine')){
        tasks.innerHTML = '<h1>✔️<h1>';
        tasks.style.textDecoration = "none";
        btns.style.visibility = "hidden";
    
        tasksC += 1;
        taskCount.innerText = 'TASKS DONE TODAY: ' + tasksC + '/' + counter;
        
        }
    }
    
});



let taskSubmit = 0;

function countSubmits(){
    
    if(inputUser.value !== ''){
        taskSubmit += 1;
        taskCount.innerText = 'TASKS DONE TODAY: ' + 0 + '/' + taskSubmit;

        if(cleanCall){
        taskSubmit = 0;
        for(let i=0; i<=counter; i++){
            taskCount.innerText = 'TASKS DONE TODAY: ' + 0 + '/' + i;
        }
        }
    }
    
}

