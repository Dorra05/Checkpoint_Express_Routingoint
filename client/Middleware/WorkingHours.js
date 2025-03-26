let currentDate=new Date();
let hour=currentDate.getHours();
let dayOfWeek=currentDate.getDay(); // 0 (dimanche) à 6 (samedi)

// Middleware pour vérifier l'heure de la requête
const checkWorkingHours=(req,res,next)=>{

    // L'application est disponible du lundi au vendredi, de 9h à 17h
    if(dayOfWeek>=1 && dayOfWeek<=5 && hour>=9 && hour<17){
        next()
    }
    else{res.send(`<h1>L'application est disponible uniquement pendant les heures de travail (9h-17h, du lundi au vendredi)</h1>`) 
    } 
}

// Utilisation du middleware
module.exports={checkWorkingHours};