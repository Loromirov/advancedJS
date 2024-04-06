/**
 * Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.



Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
 */

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const feedback = document.querySelector(".feedback");
const send = document.querySelector(".send");
const comment = document.querySelector(".comment");
// Функция, которая добавляет отзыв в контейнер. Если длина введенного
// отзыва меньше 50 символов или больше 500, она генерирует исключение.
function addReview(review) {
  if (review.length < 50 || review.length > 500) {
    throw new Error("Review length must be between 50 and 500 characters.");
  }
  const displayReview = document.createElement("div");
  displayReview.classList.add(`review`);
  displayReview.innerHTML = review;
  document.getElementById(`displayReviews`).appendChild(displayReview);
}
// Массив начальных данных для начальной загрузки при запуске приложения

document.addEventListener("DOMContentLoaded", () => {
  // Заполнение контейнера начальными данными
  initialData.forEach((review) => {
    addReview(review);
  });

  // Обработка отправки формы
  document.querySelector("#submitReview").addEventListener("click", (e) => {
    e.preventDefault();
    const reviewInput = document.querySelector("#reviewInput");
    try {
      addReview(reviewInput.value);
    } catch (error) {
      console.error(error);
    }
    // Очистка текстового поля после отправки отзыва
    reviewInput.value = "";
  });
});
