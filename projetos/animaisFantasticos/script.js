
function initalTabNavAnimais(){

  const listaAnimaisImg = document.querySelectorAll('.js-lista-animais li')
  const descriçaoAnimais = document.querySelectorAll('.js-animais-descriçao section')
  
  if(listaAnimaisImg.length && descriçaoAnimais.length){
    descriçaoAnimais[0].classList.add('ativo')
  
    function activeTab(index){
      descriçaoAnimais.forEach((item)=>{
        item.classList.remove('ativo')
      })
      descriçaoAnimais[index].classList.add('ativo')
    }
    
    listaAnimaisImg.forEach((item, index, a)=>{
      item.addEventListener('click', ()=>{
        activeTab(index)
      })
    })
  }
}  
initalTabNavAnimais();

function arccordion(){
const tabArccordeon = document.querySelectorAll('.js-faq-lista dt')
tabArccordeon[0].classList.add('ativo')
tabArccordeon[0].nextElementSibling.classList.add('ativo')

function activeArccordion(){
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

tabArccordeon.forEach((item)=>{
  item.addEventListener('click', activeArccordion)
})
}
arccordion();

function scrollInterno(){
  const linksInterno = document.querySelectorAll('.js-menu a[href^="#"]')
  
  function scroll(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  
  linksInterno.forEach((item)=>{
    item.addEventListener('click', scroll)
  })
}
scrollInterno();

function animeScroll(){
  const sections = document.querySelectorAll('.js-anime');
  const windowHeight = window.innerHeight * 0.6;
  if(sections.length){
    function animeScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = (sectionTop - windowHeight) < 0;
        if(sectionVisible)
        section.classList.add('animeAtivo');
        else
        section.classList.remove('animeAtivo')
      })
    }
    animeScroll()
    window.addEventListener('scroll', animeScroll)
  }
}
animeScroll();