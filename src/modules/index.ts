let nr1: number
let nr2: number


const imgDiv: HTMLDivElement | null = document.querySelector('#img');

const img: HTMLImageElement = document.createElement('img')
if (imgDiv) imgDiv.append(img)

const imgUrl = new URL('../img/animal.png', import.meta.url);
img.src = imgUrl.href;
img.style.width = "100px"


const calcDiv: HTMLElement = document.querySelector('#calculator')!;
const calculatorHidden: HTMLElement | null = document.querySelector('#calculator-hidden')
const h1Result: HTMLElement = document.createElement('h1');
const showNumber: HTMLElement | null = document.querySelector('#first-number')
const secNumber: HTMLElement | null = document.querySelector('#second-number')
document.body.append(h1Result)
const button: HTMLElement | null = document.querySelector('#count')

let tools: HTMLElement | null = document.getElementById('tools')
//arrayen skapar slutliga nummer1
let numberArray: number[] = []
//första numret som ska användas skapas med clickfunktionen
calcDiv.addEventListener('click', event => {
     h1Result.innerText = ''
     console.log(event.target);
     const target: HTMLElement = event.target as HTMLElement;

     if (target) {
          //if sats för att man inte ska kunna lägga in null i arrayen om man missar siffran
          if (target.className == 'number') {
               numberArray.push(Number(target.id.replace("nr", "")))
          }
     }

     //första numret som ska användas och visas
     if (showNumber) {
          showNumber.innerText = JSON.stringify(numberArray).replaceAll(",", "").replaceAll("[", "").replaceAll("]", "")
     }
     nr1 = Number(JSON.stringify(numberArray).replaceAll(",", "").replaceAll("[", "").replaceAll("]", ""))
     //välj viljen metod, plus minus mm
     if (tools) {
          tools.addEventListener('click', event => {
               const target: HTMLElement = event.target as HTMLElement;
               if (target) {
                    const toolClicked: string = target.id
                    if (calculatorHidden) {
                         calculatorHidden.style.display = "block"
                         calcDiv.style.display = "none";
                         //arrayen skapar slutliga nummer2
                         const numberArraySecond: number[] = []

                         //sedan samma procedur för andra numret
                         calculatorHidden.addEventListener('click', event => {
                              const target: HTMLElement = event.target as HTMLElement;
                              if (target) {
                                   if (target.className == 'number') {
                                        numberArraySecond.push(Number(target.id.replace("andra-", "")))
                                   }
                              }
                              if (secNumber) {
                                   secNumber.innerText = JSON.stringify(numberArraySecond).replaceAll(",", "").replaceAll("[", "").replaceAll("]", "")
                              }
                              nr2 = Number(JSON.stringify(numberArraySecond).replaceAll(",", "").replaceAll("[", "").replaceAll("]", ""))

                              //sedan räknar man ut med hjälp av knappen och kallar på rätt callbackfunktion
                              if (button) {
                                   button.addEventListener('click', event => {

                                        if (toolClicked == 'add') {

                                             higherOrder(add, nr1, nr2)
                                        }
                                        if (toolClicked == 'minus') {
                                             higherOrder(minus, nr1, nr2)
                                        }
                                        if (toolClicked == 'multiply') {
                                             higherOrder(multiply, nr1, nr2)
                                        }
                                        if (toolClicked == 'divide') {
                                             higherOrder(divide, nr1, nr2)
                                        }
                                        calculatorHidden.style.display = "none"
                                        calcDiv.style.display = "block"
                                        if (showNumber) {
                                             showNumber.innerText = ''
                                        }
                                        if (secNumber) {
                                             secNumber.innerText = ''
                                        }
                                        numberArray.length = 0

                                   })
                              }
                         })

                    }
               }
          })
     }
})
//funktionerna som gör beräkningar

function add(first: number, second: number): void {
     const show = first + second
     h1Result.innerText = show.toString()
}
function minus(first: number, second: number): void {
     const show = first - second
     h1Result.innerText = show.toString()
}

function multiply(first: number, second: number): void {
     const show = first * second
     h1Result.innerText = show.toString()
}

function divide(first: number, second: number): void {
     const show = first / second
     h1Result.innerText = show.toString()
}
//higherorder funktionen
function higherOrder(func: Function, number1: number, number2: number): void {
     func(number1, number2)
}

