import express, { Router, Request, Response } from 'express'
import { BASE_DIR } from './baseDir'
import fs from 'fs'
import { Console } from 'console'

const router: Router = express.Router()

const projectCard = (projectName: string, files: string[]) => {
    return {
        name: projectName,
        files: files
    }
}

router.get('/fetch-projects', (req: Request , res: Response) => {
    const projects = fs.readdirSync(BASE_DIR)
   
    const projectCards = projects.map((project: string) => {
        //console.log(fs.readdirSync(`${BASE_DIR}/${project}`))
        const files: string[] = fs.readdirSync(`${BASE_DIR}/${project}`)
        return projectCard(project, files)
    })
    res.send(projectCards)
})

export default router
