import express, { Application, Request, Response } from 'express'
import createProject from './routes/createProjectRoute'
import fetchProjects from './routes/fetchProjects'
import cors from 'cors'

const app: Application = express()
app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({extended: true}))

app.use('/gitArtist', createProject)
app.use('/gitArtist', fetchProjects)

app.get('/test', (req, res) => {
    res.send('testing success')
})


const PORT: number =  3001
app.listen(PORT, () => console.log(`server running on port ${PORT}...`))