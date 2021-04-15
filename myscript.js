let myLibrary = [];

function Book(title,author,pages, read, bookID){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.bookID = bookID;

    this.info = function(){
        return[title,author,pages,read,bookID];
    }
}

let x = 0;

function AddBookToLibrary(book){
    
    let title = prompt("Please enter Title of Book");
    let author = prompt("Author Name")
    let pages = prompt("How Many Pages")
    let read = prompt("Have you finished reading this book? Yes/No")
    let bookID = x;

    book = new Book(title, author, pages, read, bookID)
   myLibrary.push(book.info())
   return x++
    
}



let library = document.getElementById('library')
function printBook(){
    let currentBook = myLibrary.slice(-1)
    let tiles = document.createElement('div');
    tiles.style.backgroundColor = "red";
    tiles.style.margin = '10px'
    let title = document.createElement('div');
    title.textContent=("Title: " + currentBook[0][0])
    let author = document.createElement('div');
    author.textContent="Author: " + currentBook[0][1];
    let pages = document.createElement('div');
    pages.textContent = "Number of Pages: " + currentBook[0][2];
    let read = document.createElement('div');
    let check = currentBook[0][3];
    check = check.toLowerCase();
    let haveRead = false;
    if (check == 'yes' ){
        read.textContent = "Status: Read"
        haveRead = true
    }
    else{
        read.textContent = "Status: Not Read"
        haveRead = false;
    }
    let change = document.createElement('button')
    change.textContent = "Change Status";
    change.addEventListener('click',() =>{
        for (i=0; i<myLibrary.length;i++){
            if (myLibrary[i][4] === currentBook[0][4]){
        
                if (haveRead == true ){
                    haveRead = false;
                    read.textContent = "Status: Not Read"
                    myLibrary[i][3] = "no"
                    
            }
                else if (haveRead == false){
                    haveRead = true;
                    read.textContent = "Status: Read";
                    myLibrary[i][3] = "yes"
                    
            }
            console.log(myLibrary)
        }
    }
        
    })

    let remove = document.createElement('button')
    remove.textContent = "Remove"
    remove.addEventListener('click', () =>{
        let confirm = prompt("Are you sure you would like to delete this entry?Yes/No")
        confirm = confirm.toLowerCase();
        if (confirm == 'yes'){
        tiles.style.display = "none";
        change.style.display = "none";
        remove.style.display = "none";


        for (i=0; i<myLibrary.length;i++){
            if (myLibrary[i][4] === currentBook[0][4]){
                myLibrary.splice(i,1);
            }
        }
        }
    })
    
    library.append(tiles);
    tiles.append(title);
    tiles.append(author);
    tiles.append(pages);
    tiles.append(read);
    tiles.append(change);
    tiles.append(remove)
    

}

let btn = document.getElementById('btn');
btn.addEventListener("click", ()=>{
    AddBookToLibrary();
    console.log(myLibrary)
    printBook();
})


