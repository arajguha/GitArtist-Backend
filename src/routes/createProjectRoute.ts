import express, { Request, Response, Router} from 'express'
import { BASE_DIR } from './baseDir'
import createProject from '../services/createProject'
//import fs from 'fs'
import path from 'path'

const router: Router = express.Router()

router.post('/create-project/', (req: Request, res: Response) => {
    const projectName: string = req.body.name
    console.log('[*]project name: ', projectName)
    console.log('[*]creating new project directory')
    
    createProject(path.join(BASE_DIR, projectName), res)
})

export default router