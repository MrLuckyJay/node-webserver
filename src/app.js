const path = require('path')

const express = require('express')
const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const hbs = require('hbs')

const port = process.env.PORT || 3000 

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))


//defind paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewDirectoryPath = path.join(__dirname, '../template/views')
const partialsPath = path.join(__dirname, '../template/partials')



const app = express()



//setup static directory
app.use(express.static(publicDirectoryPath))

//setup view handlebars for view engine
app.set('view engine', 'hbs')
app.set('views',viewDirectoryPath)
hbs.registerPartials(partialsPath)



app.get('',(req, res)=>{
    res.render('index',{
        title:'Welcome to the Weather App',
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
        message:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus et ullam animi, deleniti, quaerat ipsa, quod nulla fugiat quidem dignissimos aliquid error sapiente? Cumque maiores, tenetur expedita quaerat explicabo enim!',
        name:'Titus Jusu Nabieu'
    })
})

app.get('/weather', (req, res) => {

    if(!req.query.address){
        return res.send({
            error:'Please enter an address'
        })
    }



    geoCode(req.query.address, (error, { latitude, longititude, location }={}) => {

        if (error) {
            return res.send({
                error
            })
        }
        
        forecast(latitude, longititude, (error, forecastdata) => {

            if (error) {
                return res.send({
                    error
                })
            }


            res.send({location,
                forecastdata})
            
        })



    })


//     res.send({
//         location:'Bo Sierra Leone',
//         cordinate:43.5 -332.6,
//         sumary:'Partly Cloudy',
//         address:req.query.address,
// })
})

app.get('/products', (req, res) => {

    if(!req.query.search){
        return res.send(
            {
                error:'Search term needed'
            }
        )
    }

    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Titus Jusu Nabieu',
        message:'Help article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Titus Jusu Nabieu',
        message:'page not found'
    })
})

app.listen(port,()=>{
    console.log(chalk.green('Server Started Sucessfully on port'+port))
})