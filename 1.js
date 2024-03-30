// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const musicCollection = {
  godIsAnAstronaut: [
    {
      title: "Origins",
      artist: "God Is An Astronaut",
      year: "2024",
    },
    {
      title: "Somnia",
      artist: "God Is An Astronaut",
      year: "2022",
    },
    {
      title: "Epitaph",
      artist: "God Is An Astronaut",
      year: "2018",
    },
    {
      title: "Hellios | Erebus",
      artist: "God Is An Astronaut",
      year: "2015",
    },
    {
      title: "Age of the Fifth Sun",
      artist: "God Is An Astronaut",
      year: "2010",
    },
  ],
  [Symbol.iterator]() {
    this.current = 0;
    return this;
  },
  next() {
    return this.current < this.godIsAnAstronaut.length
      ? { done: false, value: this.godIsAnAstronaut[this.current++] }
      : { done: true };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
