import express, { Application, Request, Response } from 'express'
import createProject from './routes/createProjectRoute'
import fetchProjects from './routes/fetchProjectsRoute'
import gitInitRoute from './routes/gitInitRoute'
import cors from 'cors'
import env from './config-loader'

const app: Application = express()
app.use(cors())
app.use(express.json())
//app.use(express.urlencoded({extended: true}))

app.use('/gitArtist', createProject)
app.use('/gitArtist', fetchProjects)
app.use('/gitArtist', gitInitRoute)

const { PORT = 3001} = env
app.listen(PORT, () => console.log(`server running on port ${PORT}...`))
