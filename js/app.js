"use strict"
document.addEventListener("DOMContentLoaded", () => {
  // обработка ошибок в асинхронном коде

  (async () => {
    try {
      // 2.1            1.1
      const res = await fetch('https://mail.ru/')

      console.log('После получения ответа от Mail.ru')
      // 3.1             2.2
      const data = await res.json()

      console.log('После получения тела ответа')
    } catch (error) {
      console.log(`Не удалось получить ответ от Mail.ru: ${error.message}`)
    }
  })();

  // 1.2
  console.log('Пытаемся получить главную старницу Mail.ru...')


  // обработка ошибок в промисах
  fetch('https://mail.ru/')
    .then(res => {
      console.log('После получения ответа от Mail.ru')
      return res.json()
    }).then(data => {
      console.log('После получения тела ответа')
      return data
    }).catch(error => {
      console.log(`Не удалось получить ответ от Mail.ru: ${error.message}`)
      return { title: 'И без ответа справимся' }
    })
    .then(arg => console.log(arg))

  console.log('Пытаемся получить главную старницу Mail.ru...')

  const backToTop = document.getElementById("back-to-top");

  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 160) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });

  // Плавная прокрутка при клике на кнопку
  backToTop.addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})