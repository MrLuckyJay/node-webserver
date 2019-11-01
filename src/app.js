const express = require('express')
const chalk = require('chalk')

console.log(__dirname)
console.log(__filename)

const app = express()


app.get('',(req,res)=>{
    res.send('<h1>Hello Express!</h1>')
})

app.get('/help', (req, res) => {
    res.send({
        name:'Titus Jusu Nabieu',
        Age: 23,
        Pragram: 'Bsc Computer Science'
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>Welcome to the Abouut Page</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        location:'Bo Sierra Leone',
        cordinate:43.5 -332.6,
        sumary:'Partly Cloudy'
})
})



app.listen(3000,()=>{
    console.log(chalk.green('Server Started Sucessfully on port 3000'))
})