export default function initSlidedProjects() {
  const gridProjects = document.querySelector('.projetos');
  const btnSlide = document.querySelectorAll('[data-slide]')
  const projetos = document.querySelectorAll('.item');
  
  function nextSlide(e) {
    e.preventDefault();
    let trava = true;
    console.log(gridProjects.offsetWidth)
    const width = gridProjects.offsetWidth
    gridProjects.style.transform = `translateX(${width - (width - 300)}px)`;
    /*
    -------------------------------------------------------------------------------------
      concerta o slide, ao redimensionar a tela volta ao estado inicial e também ao clica 
      só desloca uma unica vez.
    -------------------------------------------------------------------------------------
    */
    projetos.forEach(projeto => {
      if(e.target.classList.contains('next')){
        if (projeto.classList.contains('active') && trava) {
          trava = false;
          projeto.classList.remove('active');
          projeto.classList.add('previous');
          projeto.nextElementSibling.classList.add('active');
        }
      } else{
        if (projeto.classList.contains('active') && trava) {
          trava = false;
          projeto.classList.remove('active');
          projeto.classList.add('next');
          projeto.previousElementSibling.classList.add('active');
        }
      }
    });
  }

  btnSlide.forEach(btn=>btn.addEventListener('click', nextSlide))

  function handleScreenProjects(width) {
    gridProjects.style.transform = `translateX(${(width / 2) - 150}px)`;
  }

  function screenSize(e) {
    e.preventDefault();
    handleScreenProjects(window.innerWidth);
  }
  ['resize', 'load'].forEach(event => {
    window.addEventListener(event, screenSize);
  });

}