const path = require('path')

const express = require('express')
const chalk = require('chalk')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))


//defind paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewDirectoryPath = path.join(__dirname, '../template')



const app = express()



//setup static directory
app.use(express.static(publicDirectoryPath))

//setup view handlebars for view engine
app.set('view engine', 'hbs')
app.set('views',viewDirectoryPath)



app.get('',(req, res)=>{
    res.render('index',{
        title:'Welcome to the home page',
        name:'Titus Jusu Nabieu',
        linkT:'HomeMain'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Titus Jusu Nabieu'
    })
})

app.get('/help',(req, res)=>{
    res.render('help',{
        title:'Help Page',
        message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus et ullam animi, deleniti, quaerat ipsa, quod nulla fugiat quidem dignissimos aliquid error sapiente? Cumque maiores, tenetur expedita quaerat explicabo enim!'
    })
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