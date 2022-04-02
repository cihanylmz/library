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

const book = new Book('LOTR', 'JRR', 100, false);

function addBookToLibrary() {
    let title = prompt('Enter the title: ')
    let author = prompt('Enter author name: ');
    let pages = prompt('Enter page number: ');
    let isRead = prompt('Enter whether already read (true or false)');
    myLibrary.push(new Book(title, author, pages, isRead));
}

//addBookToLibrary();
console.log(myLibrary);

myLibrary.forEach((book) => {
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
    readBtn.classList.add('btn', 'btn-info', 'mr-4');
    readBtn.textContent = (book.isRead ? 'Read' : 'Unread')

    let removeBtn = document.createElement('button');
    removeBtn.classList.add('btn', 'btn-danger')
    removeBtn.textContent = 'Remove';
    
    
    footer.appendChild(readBtn);
    footer.appendChild(removeBtn);

    card.appendChild(info);
    card.appendChild(footer);

    
    const body = document.querySelector('body');
    body.appendChild(card);
})