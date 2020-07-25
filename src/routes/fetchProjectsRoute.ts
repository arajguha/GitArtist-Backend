import express, { Router, Request, Response } from 'express'
import ProjectCard from '../services/types/IProjectCard'
import IProjectService  from '../services/types/IProjectService'
import ProjectService from '../services/ProjectService'

const router: Router = express.Router()
const projectService: IProjectService = new ProjectService()

router.get('/fetch-projects', (req: Request , res: Response) => {
    const projectCards: ProjectCard[] = projectService.fetchProjects()
    res.send(projectCards)
})

export default router
