console.log('This is notes!!');
shownotes();

let addBtn = document.getElementById('addbtn');
addBtn.addEventListener('click', function (e) {
    let addtxt = document.getElementById('addtxt');//txtarea
    let notes = localStorage.getItem('notes');
    //we are storing notes in array format//
    if (notes == null) {
        notesObj = [];//array
    }
    else {
        notesObj = JSON.parse(notes);//array
    }
    notesObj.push(addtxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));//local storage take value in string format only
    addtxt.value = '';
    // console.log(notesObj);
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];//array
    }
    else {
        notesObj = JSON.parse(notes);//array
    }
    let html = '';
    notesObj.forEach(function (element, index) {
        html += ` <div class="card my-3 mx-3 notescard" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button onclick="delnote(this.id)" id="${index}" class="btn btn-primary">Delete</button>
            </div>
        </div>`
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `<h3>Nothing to show</h3><br>
            Use Add note to add notes`
    }

}
//delete notes
function delnote(index){
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];//array
    }
    else {
        notesObj = JSON.parse(notes);//array
    }
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));//updating localstorage
    shownotes();
   

}
let search = document.getElementById('search');
search.addEventListener('input',function(e){//input event occur when you press any key
    let input = search.value.toLowerCase();
    let notecard = document.getElementsByClassName('notescard');
    Array.from(notecard).forEach(function(element){
        let cardtxt = element.getElementsByTagName('p')[0].innerText;
        if(cardtxt.includes(input)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });

})