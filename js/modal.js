const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
const courseBtn = document.querySelector('.course__button')

modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})

modal.addEventListener('click', (evt) => {
  const modalContent = evt.target.closest('.modal__inner') // проверяем, есть ли подобный класс у объекта
  if (!modalContent) {
    modal.style.display = ''
  } 
})

courseBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})
