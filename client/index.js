let express= require('express');
let serv=require('./routers/contact');
let contact=require('./routers/service');
let working=require('./Middleware/WorkingHours');
let dor=express();
let port=5000;

//dor
dor.use(working.checkWorkingHours);
dor.use(serv.route);
dor.use(contact.route);
dor.use(express.static('public'));

//navbar
const navbar = `
<nav>
   <lu><a href="/">Accueil</a></li>
   <lu><a href="/services">Nos services</a></li> 
   <lu><a href="/contact">Contacter nous</a></li>
</nav> `

//Accueil
dor.get('/',(req,res)=>{
    res.send(`${navbar}<h1>Accueil</h1>
        <link rel='stylesheet' href='styles.css'/>`)
})


dor.listen(port , console.log(`server run on http://localhost:${port}`));

// let express= require('express');
// let serv=require('./routers/service');
// let contact=require('./routers/contact');
// let working=require('./Middleware/WorkingHours');
// let project=express();
// let port=5000;

// project.use(serv.route);
// project.use(contact.route);
// project.use(working.travail);
// project.use(express.static('public'));


// const navbar = `
// <nav>
// <a href='/'>Home page</a>
//    <a href='/service'>Our Services</a>
// <a href='/contact'>Contact Us</a>
// </nav>
// `

// project.get('/',(req,res)=>{
//     res.send(`${navbar}<h1>Home page</h1>
//         <link rel='stylesheet' href='styles.css'> 
//         `)
// })


// project.listen(port , console.log(`server run on http://localhost:${port}`));
