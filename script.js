let myLibrary = [new Book('LOTR', 'JRR', 100, false), new Book('LOTR', 'JRR', 100, false), new Book('LOTR', 'JRR', 100, false)];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${isRead ? "already read" : "not read yet"}`;
    }
}

function addBookToPage(book) {
    let card = document.createElement('div');
    card.classList.add('card', 'text-center', 'border-dark', 'mb-3', 'm-5');

    let info = document.createElement('ul');
    info.classList.add('list-group', 'list-group-flush');

    let title = document.createElement('li');
    title.classList.add('list-group-item');
    title.textContent = book.title;
    let author = document.createElement('li');
    author.classList.add('list-group-item')
    author.textContent = book.author;
    let pages = document.createElement('li');
    pages.classList.add('list-group-item')
    pages.textContent = book.pages;
    
    info.appendChild(title);
    info.appendChild(author);
    info.appendChild(pages);

    let footer = document.createElement('div')
    footer.classList.add('card-footer')

    let readBtn = document.createElement('button');
    readBtn.addEventListener('click', () => {
        book.isRead = !book.isRead;
        readBtn.textContent = (book.isRead ? 'Not read' : 'Read');
        console.log(book);
    });
    readBtn.classList.add('btn', 'btn-info', 'mr-4');
    readBtn.textContent = (book.isRead ? 'Not read' : 'Read');

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger')
    removeBtn.dataset.book = myLibrary.indexOf(book);
    removeBtn.addEventListener('click', (e) => {
        myLibrary.splice(e.target.dataset.book, 1);
        card.remove();
    })
    removeBtn.textContent = 'Remove';
    
    
    
    footer.appendChild(readBtn);
    footer.appendChild(removeBtn);

    card.appendChild(info);
    card.appendChild(footer);

    
    const body = document.querySelector('body');
    body.appendChild(card);
}

function toggleRead(book) {
    
}

myLibrary.forEach((book) => {
    addBookToPage(book);
})

const btn = document.querySelector(".submit");
btn.addEventListener('click', () => {
    let title = document.querySelector('#bookTitle').value;
    let author = document.querySelector('#bookAuthor').value;
    let pages = document.querySelector('#pages').value;
    let isRead = document.querySelector('#isRead').value;

    const book = new Book(title, author, pages, isRead);

    myLibrary.push(book);
    addBookToPage(book);
})
