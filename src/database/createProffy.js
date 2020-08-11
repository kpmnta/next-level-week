module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    // sinserir dados na tabela de proffys 
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)
    // await espera antes de executar - precisa de async

    const proffy_id = insertedProffy.lastID

    // inserir dados na tabela 

    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValue.subject}",
                "${classValue.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID
    // inserir dados na tabela class_schedule
    const insertedAllClassScheduleValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `) 
    })

    await Promise.all(insertedAllClassScheduleValues)

}

// executar aqui todos os db.run() das class_schedule

// o for each itera cada elemento e não da return o map sim agrupando em um novo array.