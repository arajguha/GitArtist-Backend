import express, { Router, Request, Response } from 'express'
import ProjectService from '../services/ProjectService'
import IProjectService from '../services/types/IProjectService'
import path from 'path'
import env from '../config-loader'

const { BASE_DIR = '' } = env
const router: Router = express.Router()
const projectService: IProjectService = new ProjectService()

router.post('/git-init/', (req: Request, res: Response) => {
    const _path = path.join(BASE_DIR, req.body.name)
    console.log(_path)
    
    projectService.gitInitUtil(_path)
        .then(response => res.send(response))
        .catch(err => res.send({
            errorCode: 'UNKNOW_ERROR',
            errorReason: err
        }))
})

export default router