const express = require('express');
const hbs = require('hbs');
var app = express();

const port = process.env.PORT ||3000;

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');

app.use((req,res,next)=>{
   var now = new Date().toString();
   var log = `${now}: ${req.method} ${req.url}`;
   console.log(log);
   next();
});

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
        WelcomeMessage: 'Welcome to my website'
    });
});

app.get('/projects',(req,res)=>{
    
    res.render('projects.hbs',{
        pageTitle: 'projects page',
        
    });
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        pageTitle: 'About page',
        
    });
});


app.listen(port,()=>
{
    console.log(`Server is up on port ${port}`);
});