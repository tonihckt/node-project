// AGREGAR MODULOS DE NODE_MODULES
const cowsay = require("cowsay")
const fs = require ('fs')
const readline = require ('readline')
const childProcess = require ('child_process')
const http = require ('http')
const express = require ('express')
// AGREGAR MODULOS LOCALES
const math = require ('./src/notes_func/func/math')
const {substract, multiply } = require('./src/notes_func/func/math')
const hello = require ('./src/notes_func/func/hello')
const add = require ('./src/notes_func/func/addition')
const sync = require ('./src/notes_func/func/syncAsync')
const callbacks = require ('./src/notes_func/func/callbacks')
const asyncAwait = require ('./src/notes_func/func/asyncAwait')
const ops = require ('./src/notes_func/func/fileops')
const erros = require ('./src/err/errors')
const handle = require ('./src/err/handling')
const event = require ('./src/notes_func/func/event')
const db = require('./src/notes_func/func/eventdb')

//------------------------------------------------
// ### ----.JS
//------------------------------------------------
// console.log(math.add(9,8))
// console.log(multiply(4,5))
// console.log(substract(15,3))

//------------------------------------------------
// ### GRETING.JS
//------------------------------------------------
// console.log(greet.greet('Toni'))
// console.log(hello.sayHello('Antonio'))

//------------------------------------------------
// ### COWSAY
//------------------------------------------------
// console.log(cowsay.say({
// 	text : "I'm a Tonito",
// 	e : "oO",
// 	T : "U "
// }));

//------------------------------------------------
// ### ADDITIONS.JS
//------------------------------------------------
// add.asyncSum(8,9)
// add.asyncSum(2,9)

//------------------------------------------------
// ### SYNCASYNC.JS
//------------------------------------------------
//sync
// sync.simulateSync()
//Async
// sync.simulateAsync()


//------------------------------------------------
// ### CALLBACKS.JS
//------------------------------------------------
//sync
// console.log(callbacks.sync('Toni with sync'))
//withCallback
// callbacks.withCallback('Toni with callback',callbacks.sync)
//withPromise (then = resolve || cath = reject)
// callbacks.withPromise('Toni with promise')
//     .then(name=>{ 
//         console.log(name)
//     })

//------------------------------------------------
// ### SYNCAWAIT.JS
//------------------------------------------------
// asyncAwait.greet('Toni')
// Promesa
// asyncAwait.withPromise('Toni', 'Resbalones')
//     .then(name=>{ console.log(name) })
//     .catch(err=>{ console.log(err, 'Hubo un error') })
// asynawait
// async function callWithPromise (){
//     const fullName = await asyncAwait.withPromise('Toni', 'Resbalones')
//     console.log(fullName)
// }
// callWithPromise()

//------------------------------------------------
// ### FILEOPS.JS _ leer - escribir archivos
//------------------------------------------------
//NUMBERS
// fs.readFile('./src/notes_func/resources/number.txt', 'utf-8', (err, numberTextList)=>{
//     if (err) throw err // detenine el proceso
//     // console.log(numberTextList)
    
//     const numberList = numberTextList.split('\n').map(n=>Number(n))
//     console.log(numberList)
//     const incrementedValues = ops.incrementValues(numberList)
//     fs.writeFile('./src/notes_func/resources/numberNew.txt', incrementedValues.join('\n'), (err, result) => {
//         if (err) throw err
//         console.log('The file has been saved!')
//     })
// })
// NAMES
// fs.readFile('./src/notes_func/resources/name.txt', 'UTF-8',  (err, nameTextList)=>{
//     if (err) throw err
//     // console.log(nameTextList)

//     const nameList = nameTextList.split('\n')
//     const savedNameList = ops.callNames(nameList)
//     console.log(savedNameList)
//     fs.writeFile('./src/notes_func/resources/nameNew.txt', savedNameList.join('\n'), (err, result) => {
//         if (err) throw err
//         console.log('The file has been saved!')
//     })
// })

//------------------------------------------------
// ### READLINE.JS Captura datos desde la linea de comandos
//------------------------------------------------
// const readLineInterface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
  
// const questionsList = [
//     'Cual es tu nombre?\n', 
//     'Cual es tu apellido?\n', 
//     'Cual es tu edad?\n'
// ]

// const askQuestions = (readLineInterface, question) => {
//     return new Promise ((resolve, reject) => {
//         // pasa un argumento paa ser impreso el front
//         readLineInterface.question(question,answer => {
//             resolve(answer)
//         })
//     })
// }

// // itera sobre cada pregunta
// const ask = function( questions) {
//     return new Promise(async resolve => {
//         let questionsCapture  = []
//         for (let i=0; i < questions.length; i++) {
//             const resultAnswers = await askQuestions(readLineInterface, questions[i])
//             questionsCapture.push(resultAnswers)
//         }
//         // for (let question of questions) {
//         //     const questionsCapture = await askQuestions.bind(null, readLineInterface)(question)
//         //     questionsCapture .push(questionsCapture)
//         // }
//         readLineInterface.close()
//         resolve(questionsCapture)
//     })
// }

// ask(questionsList)
//     .then(questionsList=>{
//         console.log(`Hola! ${questionsList[0]} ${questionsList[1]}, tu edad es ${questionsList[2]} años`)
// })

//------------------------------------------------
// ### CHILDPROCESS.JS EJECUCION DE SUBPROCESOS
//------------------------------------------------
// function execCommand (command) {
//     childProcess.exec(command, (err,stdout, stderr) => {
//         if (err){
//             console.log(`Error: ${err}`)
//             return
//         }
//         if (stdout) console.log(`standar out: \n${stdout}`)
//         if (stderr) console.log(`standar out: \n${stderr}`)
//     })
// }
// // execCommand('ls')
// // execCommand('node ./src/script.js --base=5')

//------------------------------------------------
// ### DEBUGGER-DEPURACIÓN
//------------------------------------------------
// const {
//   from0to,
//   asyncFrom0to
// } = require("./src/counter");

// // Llamadas a funciones
// asyncFrom0to(10,3);
// from0to(10, 2);

//------------------------------------------------
// ### ERROS: MANEJO DE ERRORES
//------------------------------------------------
//error
// try {
//   errors.standardErr.range()
// } catch (error) {
//   console.log('Ha ocurrido un error', error)
// }
// handle
// handle.errorFirstCallbackWrong()

//------------------------------------------------
// ### EVENTS: EMISION Y RECEPCION DE EVENTOS
//------------------------------------------------

// event.emit('clap')
// event.emit('shout','lararalala' )
// event.emit('call','Toni', (name) =>{
//     console.log('lamando a ...', name)
// })

// db event
// const objDb = new db('plazti', 'test', 'itzalp')

// objDb.on('status', status => {
//   console.log(`Estado de Base Datos: ${status}`)

//   if (status === 'open') {
//     const data = objDb.getTable('students')
//     console.log('Datos dela tabla Student:\n', data)
//     objDb.close()
//   }
// })

// objDb.on('getTable', tableName => {
//   console.log(`Consultando la tabla ${tableName}`)
// })

// objDb.open()

//------------------------------------------------
// ### CREATE SERVIDOR HTTP
//------------------------------------------------

// const port = 5745;
// const routeFile = './src/notes_func/resources/index.html'

// const server = http.createServer((req, res ) => {
// 	fs.readFile(routeFile, (err, data ) => {
// 		if(err) { 
//             console.error(err)
//             return
//         }
//         res.statusCode = 200
// 		res.end(data)
// 	})
// })
// console.log(`Iniciando el servidor... en el puerto ${port}`)	
// server.listen(port)

//------------------------------------------------
// ### CREATE SERVIDOR EXPRESS
//------------------------------------------------
// const port = 5785;
// const routeFile = './src/notes_func/resources/index.html'
// const app = express()
// // Routers
// app.get("/",(req,res)=>{
//     fs.readFile(routeFile,(err,data)=>{
//       if (err) {console.error(err);return;}
//       res.end(data)
//     })
// })
// app.get('/app', (req, res) => {
//     res.send('App')
// })
// app.get('*', (req, res) => {
//     res.send('No exite esta ruta')
// })
// app.listen(port,()=>{
//     console.log(`listening http://localhost:${port}`)
// })

//------------------------------------------------
// ### API - EXPRESS
//------------------------------------------------
// const app = express()
// const { PORT } = require("./config")

// require("./routes/api")(app)
// require("./routes/views")(app)

// function init(){
//     console.log("Iniciando instancia de Express...")
//     app.listen(PORT, ()=>{
//         console.log(`listening http://localhost:${PORT}`)
//     });
// }

// init();

//------------------------------------------------
// ### MongoDB: Conexión y escritura de datos
//------------------------------------------------
// ---> ver en index.js
