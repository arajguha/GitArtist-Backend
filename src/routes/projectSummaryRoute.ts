import express, { Router, Request, Response } from 'express'
import ProjectService from '../services/ProjectService'
import IProjectService from '../services/types/IProjectService'
import env from '../config-loader'

const router: Router = express.Router()
const projectService: IProjectService = new ProjectService()
const { BASE_DIR = ''} = env

router.get('/:project_name', (req: Request, res: Response) => {
    //console.log('[*] GET Request from project with name', req.params.project_name)
    const projectName = req.params.project_name
    const projectDetails = projectService.projectSummary(BASE_DIR, projectName)
    console.log('[*] Project Details Route', projectDetails)
    res.send(projectDetails)
})

export default router