
// Pegar alturo/largura do Elemento
// const listaAnimais = document.querySelector('.lista-animais')
// console.log(listaAnimais.scrollHeight)
// console.log(listaAnimais.clientHeight)
// console.log(listaAnimais.clientWidth)

// Exercicio


// // Reorne no console todas as imagens do site
//  var imagens = document.querySelectorAll('img') 
//  console.log(imagens)

// // ------------------------------------------------
// // Reorne no console apenas as imagens que começa com a palavra imagem
// var imagens2 = document.querySelectorAll('img[src^="img/imagem"]')
// console.log(imagens2)

// // ------------------------------------------------
// // Selecione todos os links internos (onde o href começa com #)
// const linksInternos = document.querySelectorAll('a[href^="#"]')
// console.log(linksInternos) 

// // ------------------------------------------------
// // Selecione o primeiro h2 dentro de .animais-descriçao
// const h2Animais = document.querySelector('.animais-descriçao h2')
// console.log(h2Animais)

// // ------------------------------------------------
// // Selecione o ultimo p do site
// const ultimoP = document.querySelectorAll('p')
// console.log(ultimoP[ultimoP.length - 1])

// // ------------------------------------------------
// // Mostre no console cada parágrafo do site
// const paragrafos = document.querySelectorAll('p')
// console.log(paragrafos)
// paragrafos.forEach((item)=>{
//   console.log(item)
// })

// // ------------------------------------------------
// // Mostre o texto dos paragráfos no console
// paragrafos.forEach((item)=>{
//   console.log(item.innerText)
// })

// // ------------------------------------------------
// // Como Corrigir os Erros abaixo:
// // const imgs = document.querySelectorAll('img')
// const imgs = document.querySelectorAll('img')
// // imgs.forEach(item, index => {
// //  console.log(item, index)
// //})
// imgs.forEach((item, index) =>{
//   console.log(item, index)
// })
// // let i = 0 
// // imgs.forEach( =>{
// //  console.log(i++) 
// //})
// let i = 0
// imgs.forEach(()=>{
//   console.log(i++)
// })
// // imgs.forEach(() => i++)
// imgs.forEach(()=> i++)
// console.log(i)

// // ------------------------------------------------
// // Adicione a classe ativo a todos os itens do menu:
// const addClassAtivoItensMenu = document.querySelectorAll('.nav li a')
// addClassAtivoItensMenu.forEach((item)=>{
//   item.classList.add('ativo')
// })

// // ------------------------------------------------
// // Remova a classe ativo de todos os itens do menu e mantenha a penas no primeiro:
// addClassAtivoItensMenu.forEach((item)=>{
//   item.classList.remove('ativo')
// })
// addClassAtivoItensMenu[0].classList.add('ativo')

// // ------------------------------------------------
// // Verifique se as imagens possuem o atributo alt:
// const altImgs = document.querySelectorAll('img')
// altImgs.forEach((img)=>{
//   console.log(img.hasAttribute('alt'))
// })

// // ------------------------------------------------
// // Modifique o href do link externo no menu:
// const linkExterno = document.querySelector('a[href^=https]')
// linkExterno.setAttribute('href', 'https://www.google.com')

// // ------------------------------------------------
// // Verifique a distância da primeira imagem 
// // em relação ao topo da página
// const primeiraImg = document.querySelector('img')
// console.log(primeiraImg.offsetTop)
// //         OU ↓
// const distanciaImgTopo = primeiraImg.getBoundingClientRect()
// console.log(distanciaImgTopo.top)

// // ------------------------------------------------
// // Retorne a soma da largura de todas as imagens 
// function somaLarguraImgs(){
//   const larguraTodasImgs = document.querySelectorAll('img')
//   let imgsSoma = 0
//   larguraTodasImgs.forEach((img)=>{
//     imgsSoma += img.offsetWidth
//   })
//   console.log(imgsSoma)
// }
// window.onload = function(){
//   somaLarguraImgs()
// }
// // ------------------------------------------------
// // Verifique se os links da página possuem
// // o mínimo recomedado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o Google)
// const larguraLinks = document.querySelectorAll('a')
// larguraLinks.forEach((link) =>{
//   const linkWidth = link.offsetWidth
//   const linkHeight = link.offsetHeight
//   if(linkWidth >= 48 && linkHeight >= 48){
//     console.log('Possui boa acessibilidade.')
//   } else{
//     console.log('Não possui boa acessibilidade.')
//   }
// })
// // ------------------------------------------------
// // Se o browser for menor que 720px 
// // adicione a classe menu-mobile ao menu
// const browseMobile = window.matchMedia('(max-width: 720px)').matches

// if(browseMobile){
//   const addMenuMobile = document.querySelector('.nav')
//   addMenuMobile.classList.add('menu-mobile')
// }

// // ------------------------------------------------
// // Quando o usuário clicar nos links internos do site,
// // adicione a classe ativo ao item clicado e remova dos 
// // demias itens caso eles possuam a mesma.
// // Previna o comportamento padrão desses links
// const linksInternos2 = document.querySelectorAll('a[href^="#"]')

// function linkAtivo(event){
//   event.preventDefault()
//   linksInternos2.forEach((link)=>{
//     link.classList.remove('ativo')
//   })
//   event.currentTarget.classList.add('ativo')
// }

// linksInternos2.forEach((link)=>{
//   link.addEventListener('click', linkAtivo)
// })

// // ------------------------------------------------
// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados
// const bodyElementos = document.querySelectorAll('body *')

// function mostraElementos(event){
//   console.log(event.currentTarget)
// }

// bodyElementos.forEach((elements)=>{
//   elements.addEventListener('click', mostraElementos)
// })

// // ------------------------------------------------
// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que esá sendo clicado, o método remove() remove em elemento.
// function removeElementos(event){
//   // event.currentTarget.remove()
// }

// bodyElementos.forEach((elements)=>{
//   elements.addEventListener('click', removeElementos)
// })
// // ------------------------------------------------
// // Se o usúario clicar na tecla (t), aumente todo o texto do site.
// function handleClickT(event){
//   if(event.key === 't'){
//     document.documentElement.classList.toggle('textoMaior')
//   }
// }

// window.addEventListener('keydown', handleClickT)

// // ------------------------------------------------
// // Duplique o menu e adicione ele no copy
// const nav = document.querySelector('.nav')
// const copy = document.querySelector('.copy')
// const cloneNav = nav.cloneNode(true)
// copy.appendChild(cloneNav)

// // ------------------------------------------------
// //Selecione o primeiro dt da dl de faq
// const faq = document.querySelector('.faq')
// const primeiroDT = faq.querySelector('dt')
// console.log(primeiroDT.innerHTML)

// // ------------------------------------------------
// //Selecione o dd referente ao primeiro dt
// const primeiroDD = primeiroDT.nextElementSibling
// console.log(primeiroDD.innerHTML)

// // ------------------------------------------------
// //Substitua o conteúdo html de .faq pelo de .animais
// faq.innerHTML = document.querySelector('.sec-animais').innerHTML