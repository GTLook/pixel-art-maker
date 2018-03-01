const verticalBox = 50
const horizontalBox = 50
let curentColor = 'color1'
const colorList = ['color1','color2','color3','color4','color5','color6','color7', 'color8']

//render grid
function render(verticalBox, horizontalBox){
  const container = document.querySelector('.container')
  for(let vIndex = 0; vIndex < verticalBox; vIndex++){
    const row = document.createElement('div')
    for(let hIndex = 0; hIndex < horizontalBox; hIndex++){
      const pixel = document.createElement('div')
      pixel.classList.add('square');
      pixel.addEventListener('click',function changeColor(event){
        for(let cIndex in colorList){
        pixel.classList.remove(colorList[cIndex])
      }
        pixel.classList.add(curentColor)
      })
      row.appendChild(pixel)
    }
    container.appendChild(row)
  }
}

//pick colors
// function pickcolor(){
//   const pallet = document.querySelector('pallet')
//   for(let iteration in pallet){
//     pixel.addEventListener('click',function changeColor(event){curentColor)}))
//   }
// }
let pickColor1 = document.querySelector('.pallet').firstElementChild;
pickColor1.addEventListener('click',function changeColor1(event){curentColor='color1'})

let pickColor2 = document.querySelector('.pallet').firstElementChild.nextElementSibling;
pickColor2.addEventListener('click',function changeColor2(event){curentColor='color2'})

let pickColor3 = document.querySelector('.pallet').firstElementChild.nextElementSibling.nextElementSibling;
pickColor3.addEventListener('click',function changeColor3(event){curentColor='color3'})

let pickColor4 = document.querySelector('.pallet').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;
pickColor4.addEventListener('click',function changeColor4(event){curentColor='color4'})

let pickColor5 = document.querySelector('.pallet').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
pickColor5.addEventListener('click',function changeColor5(event){curentColor='color5'})

let pickColor6 = document.querySelector('.pallet').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
pickColor6.addEventListener('click',function changeColor6(event){curentColor='color6'})

let pickColor7 = document.querySelector('.pallet').firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
pickColor7.addEventListener('click',function changeColor7(event){curentColor='color7'})

let pickColor8 = document.querySelector('.pallet').lastElementChild;
pickColor8.addEventListener('click',function changeColor8(event){curentColor='color8'})


render(verticalBox, horizontalBox)
