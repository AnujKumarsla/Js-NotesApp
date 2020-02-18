console.log("hello world!")

{   // cards load on loading page
 let saveNote=localStorage.getItem('notes');
 // notes are stored into a "notes" variable in the form of array 
 let notes= ( saveNote==null  ) ? [] : ( JSON.parse(saveNote) ) ;
 updateCards(notes);
}

// trigeerred on addButton click
function addNote(){
    let saveNote=localStorage.getItem('notes');
    let notes= ( saveNote==null  ) ? [] : ( JSON.parse(saveNote) ) ;
    let text=document.getElementById('textArea');
    let title=document.getElementById('AddTitle');


    let myObj={
        text:text.value,
        title: title.value
    }
    // console.log(newNote);
    // add the new note into "notes" array
    notes.push(myObj);
    // update the notes array in the local storage
    localStorage.setItem('notes',JSON.stringify(notes));
    // Clear the textArea
    text.value=null;
    title.value=null;
    updateCards(notes); 
};

function updateCards(notes){
        // iterate through notes to create html text of dynamic cards
        let html="";
        notes.forEach(function(element,index) {
            html+=`
        <div class="card noteCard m-2" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${index+1}.${element.title} </h5>
              <p class="card-text">${element.text}</p>
              <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            </div>
          </div>`;
        });
        //Insert the cards in the parent element 
        let parent=document.getElementById('notes');
            parent.innerHTML= html=="" ? "<h3>You dont have created any notes till now</h3>" : html;
}


function deleteNote(index){
    let saveNote=localStorage.getItem('notes');
    let notes= ( saveNote==null  ) ? [] : ( JSON.parse(saveNote) ) ;

    notes.splice(index,1);
        // update the notes array in the local storage
        localStorage.setItem('notes',JSON.stringify(notes));
    
        updateCards(notes);
};


let search=document.getElementById('searchBtn');
search.addEventListener('input',function(){
    let val=search.value;
    let cards=document.getElementsByClassName("noteCard");

      for (item of cards) { 
        let text=item.getElementsByTagName('p')[0].innerText;
        // console.log(text);
        if(   text.includes( val )  )   {
            item.style.display="block";
        }
        else
            item.style.display="none";
    }
});
