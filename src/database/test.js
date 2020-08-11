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
        subject: 1,
        cost: "23",
        //o proffy id será gerado pelo bando de dados
    }

    classScheduleValues = [
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


    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    // consultar dados inseridos 

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // consultar as classes de determinade professor e trazer junto os dados delu 

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horario do time_from precisa ser menor ou igual ao horario solicitado e o time_to precisa ser acima
    const selectClassesSchedule = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1320"
        AND class_schedule.time_to > "1320"
    `)

    console.log(selectClassesSchedule)
})



