const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // inserir dados

    proffyValue = {
        name: "Kai Pimenta",
        avatar: "https://avatars3.githubusercontent.com/u/65174706?s=460&u=f94c6045bfc9e6d3fcc68b315288585d3ac6cdf2&v=4",
        whatsapp: "11 99512415", 
        bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: "Artes",
        cost: "23",
        //o proffy id será gerado pelo bando de dados
    }

    classSheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
            }
    ]
    // class id será gerado pelo banco de dados após cadastrar a class 


    await createProffy(db, {proffyValue, classValue, classSheduleValues})
    // consultar dados inseridos 
})

