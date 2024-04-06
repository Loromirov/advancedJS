// /**
//  * Задание 1
// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

//  */

// class Library {
//   #books = [];
//   constructor(books) {
//     if (books && books.length > 0) {
//       const uniqueBooks = Array.from(new Set(books));
//       if (uniqueBooks.length !== books.length) {
//         throw new Error("Такая книга уже есть в списке!");
//       }
//       this.#books = uniqueBooks;
//     } else {
//       throw new Error("Invalid input");
//     }
//   }

//   get allBooks() {
//     return this.#books;
//   }

//   addBook(title) {
//     const bookExists = this.#books.includes(title);
//     if (!bookExists) {
//       this.#books.push(title);
//       return;
//     }
//     throw new Error(`Book with title '${title}' already exists`);
//   }

//   removeBook(title) {
//     const index = this.#books.indexOf(title);
//     if (index > -1) {
//       this.#books.splice(index, 1);
//       return;
//     }
//     throw new Error(`Book with title '${title}' not found`);
//   }
//   hasBook(title) {
//     return this.#books.includes(title);
//   }
// }

// const library = new Library(["Book 1", "Book 2", "Book 3"]);
// console.log(library.allBooks);
// library.addBook("Book 4");
// library.removeBook("Book 1");
// console.log(library.hasBook("Book 5"));
