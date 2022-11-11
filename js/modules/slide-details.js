export default async function initSlidedDetails() {
  const boxPrejetos = document.querySelector('.projetos');
  const dadosProjetos = await fetch('../../projetos.json')
  const projetosJSON = await dadosProjetos.json();
  
  for(let i = 0; i< projetosJSON.length; i++){
    const newLi = document.createElement('li');
    const newImg = document.createElement('img');

    ['item', 'swiper-slide'].forEach(className =>{
      newLi.classList.add(className);
    });
    newLi.style.backgroundColor = projetosJSON[i].cor;
    
    ['src','alt'].forEach(att=>{
      newImg.setAttribute(att, projetosJSON[i][att]);
      console.log(newImg)
    });

    newLi.appendChild(newImg);
    newLi.innerHTML += `
    <span class="orb orb-proj-item">
      <span class="astro astro-proj-item"></span>
      <span class="astro astro-proj-item"></span>
    </span>`
    boxPrejetos.appendChild(newLi);
  }
}