import express from 'express';
import fs from 'fs';
import { format } from 'date-fns';
import { log } from 'console';

const app = express();
const PORT = 4000;


app.get('/write', (req, res) => {
    let today = format(new Date(), 'dd-mm-yyyy-HH-mm-ss')
    console.log(("today", today));
    const filePath = `TimeStamp/${today}.txt`
    fs.writeFileSync(filePath, `${today}`, 'utf8')
     let data = fs.readFileSync(filePath, 'utf8')
    res.status(200).send(data)
})

app.get('/read', (req, res) => {
    let today = format(new Date(), 'dd-mm-yyyy-hh-mm-ss')
    const filePath = `TimeStamp/ ${today}.txt`
    fs.writeFileSync(filePath, `${today}`, 'utf8')
    let dataTime = fs.readFileSync(filePath, 'utf8')
    res.status(200).send(dataTime)
})


app.listen(PORT, () => {
    console.log(`App is running in the port ${PORT}`);
})