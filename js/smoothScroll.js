const navBar = document.querySelector('.header__nav')
const links = navBar.querySelectorAll('a')

links.forEach((link) => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault()

    const section = document.querySelector(link.getAttribute('href')) //выводим нужную секцию

    // на всякий случай проверяем наличие секции
    if (section) {
      //section.scrollIntoView({
       // block: 'start',
        //behavior: 'smooth'
     // }) // прокрутка к нужному блоку, работает не во всех браузерах

      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
    }); // кроссбраузерная прокрутка из библиотеки
    } 
  })
})
