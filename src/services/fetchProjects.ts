import fs from 'fs'
import { Response } from 'express'
import { projectCard } from './projectCard'

function fetchProjects(BASE_DIR: string, res: Response): void {
    const projects = fs.readdirSync(BASE_DIR)

    const projectCards = projects.map((project: string) => {
        //console.log(fs.readdirSync(`${BASE_DIR}/${project}`))
        const files: string[] = fs.readdirSync(`${BASE_DIR}/${project}`)
        return projectCard(project, files)
    })
    res.send(projectCards)
}

export default fetchProjects