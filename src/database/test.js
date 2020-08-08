const Database = require('./db.js')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // inserir dados
    proffyValue = {
        name: "Mayk Brito",
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "11115096688",
        bio: "Instrutor de Educação Física para iniciantes, minha missão de vida é levar saúde e contribuir para o crescimento de quem se interessar.<br>Comecei a minha jornada profissional em 2001, quando meu pai me deu dois alteres de 32kg com a seguinte condição: Aprenda a fazer dinheiro com isso!"
    }

    classValue = {
        subject: 1,
        cost: "40"
        // proffy_id virá pelo banco
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 777,
            time_to: 1112
        },
        {
            weekday: 0,
            time_from: 667,
            time_to: 1010
        }
        // class_id virá pelo banco
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    // consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "567"
        AND class_schedule.time_to > "567"
    `)

    //console.log(selectClassesSchedules)
})