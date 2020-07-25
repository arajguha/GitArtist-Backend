import express, { Request, Response, Router} from 'express'
import { BASE_DIR } from '../services/baseDir'
import ProjectService  from '../services/ProjectService'
import IProjectService  from '../services/types/IProjectService'
import path from 'path'

const router: Router = express.Router()
const projectService: IProjectService = new ProjectService()

router.post('/create-project/', (req: Request, res: Response) => {
    const projectName: string = req.body.name
    console.log('[*]project name: ', projectName)
    console.log('[*]creating new project directory')
    
    if(projectService.projectExists(path.join(BASE_DIR, projectName)))
        res.send('project already exists')
    else{
        const success: boolean = projectService.createProject(path.join(BASE_DIR, projectName))
        if(!success)
            res.send('some error occured while creating project ')
        else
            res.send('project created successfully')
    }
    
})

export default router