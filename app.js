const riddles = [
    {
        question: "Se mira pero no se toca. ¿Qué es?",
        answer: "espejo"
    },
    {
        question: "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué es?",
        answer: "pera"
    },
    {
        question: "¿Qué tiene llaves pero no abre puertas?",
        answer: "piano"
    },
]

let question = document.getElementById('question')
let response = document.getElementById('response')
let result = document.getElementById('result')
let form = document.getElementById('form')
let number = document.getElementById('number')

let i = 0

const loadQuestion = ()=>{
    question.innerHTML = riddles[i].question
}

document.getElementById('form').addEventListener('submit', (e)=>{
    e.preventDefault()
    if (response.value === riddles[i].answer) {
        i += 1
        number.innerHTML=i
        result.innerHTML = `Respuesta correcta`
        setTimeout(()=>{
            result.innerHTML = ``
        },3000)        
        result.classList.add('resultTrue')
        response.value=''
        loadQuestion()
    } else{
        result.classList.add('resultFalse')
        result.innerHTML = `Respuesta incorrecta`
        setTimeout(()=>{
            result.innerHTML = ``
        },3000)  
    }
})

