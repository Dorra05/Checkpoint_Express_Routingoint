let express=require('express');
let route=express.Router();

//navbar
const navbar = `
<nav>
   <lu><a href="/">Accueil</a></li>
   <lu><a href="/service">Nos services</a></li> 
   <lu><a href="/contact">Contacter nous</a></li>
</nav> `


//contact
route.get('/contact',(req,res)=>{
    res.send(`${navbar}<h1>Contactez-nous</h1>
        <link rel="stylesheet" href="/styles.css">`)
})

module.exports={route};