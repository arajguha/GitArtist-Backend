import express, { Request, Response, Router} from 'express'
import env from '../config-loader'
import ProjectService  from '../services/ProjectService'
import IProjectService  from '../services/types/IProjectService'
import path from 'path'
import CodedRuntimeException, { isCodedRuntimeException } from './CodedRuntimeException'

const { BASE_DIR = '' } = env

const router: Router = express.Router()
const projectService: IProjectService = new ProjectService()

router.post('/create-project/', (req: Request, res: Response) => {
    const projectName: string = req.body.name

    console.log('[*]project name: ', projectName)
    console.log('[*]creating new project directory')
    
    projectService
        .createProject(path.join(BASE_DIR, projectName))
        .then(() => { res.sendStatus(201) })
        .catch(err => {
            if (isCodedRuntimeException(err)) {
                res.statusCode = 422
                res.send(err)
            }
            else {
                res.statusCode = 500
                const customError: CodedRuntimeException = {
                    errorCode: 'UNKNOWN_ERROR',
                    errorReason: err
                }
                res.send(customError);
            }
        })
})

export default router