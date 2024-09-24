const library = [];
const bookDisplay = document.getElementById("booksss")
const newBookTitle = document.getElementById("booktitle")
const newBookPages = document.getElementById("bookpages")
const newBookAuthor = document.getElementById("bookauthor")
const addNewBookButton = document.getElementById("addnew")
function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}

function addBookToLibrary(){
    author = newBookAuthor.value
    pages = newBookPages.value
    title = newBookTitle.value
    read = false
    const book = new Book(title, author, pages, read)
    library.push(book)
}
addNewBookButton.addEventListener("click", () => {
    addBookToLibrary();
    displayBooks()
})
function displayBooks(){
        if (bookDisplay.hasChildNodes()){
            bookDisplay.replaceChildren()
        }
        for (let i = 0; i < library.length; i++){
        deleteEntryButton = document.createElement("button")
        deleteEntryButton.textContent = "delete"
        deleteEntryButton.addEventListener("click", () => {
            library.splice(i, 1)
            bookDisplay.removeChild(document.getElementById(i))
        })
        readToggleButton = document.createElement("button")
        readToggleButton.textContent = "Not read"
        readToggleButton.addEventListener("click", () => {
            library[i].read = !library[i].read
            if (library[i].read === true){
                readToggleButton.textContent = "Read"
            }
            if (library[i].read === false){
                readToggleButton.textContent = "Not read"
            }

        })
        bookCardMain = document.createElement("div")
        bookCardMain.setAttribute("id", i)
        bookCardTitle = document.createElement("div")
        bookCardAuthor = document.createElement("div")
        bookCardPages = document.createElement("div")
        bookCardTitle.textContent = library[i].title
        bookCardAuthor.textContent = library[i].author
        bookCardPages.textContent = library[i].pages
        bookCardMain.appendChild(bookCardTitle)
        bookCardMain.appendChild(bookCardAuthor)
        bookCardMain.appendChild(bookCardPages)
        bookCardMain.appendChild(deleteEntryButton)
        bookCardMain.appendChild(readToggleButton)
        bookDisplay.appendChild(bookCardMain)
        }
    }

