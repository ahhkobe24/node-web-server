const express = require('express');
const hbs = require('hbs');
var app = express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
   return text.toUpperCase();
});

app.get('/',(req,res)=>{
    
    res.render('home.hbs',{
        pageTitle: 'home page',
        currentYear: new Date().getFullYear(),
        WelcomeMessage: 'Welcome to my website'
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});


app.listen(3000,()=>
{
    console.log('Server is up on port 3000');
});