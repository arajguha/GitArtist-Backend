import express, { Router, Request, Response } from 'express'
import ProjectService from '../services/ProjectService'
import IProjectService from '../services/types/IProjectService'
import path from 'path'
import env from '../config-loader'
import CodedRuntimeException, { isCodedRuntimeException } from './CodedRuntimeException'

const { BASE_DIR = '' } = env
const router: Router = express.Router()
const projectService: IProjectService = new ProjectService()

router.post('/git-init/', (req: Request, res: Response) => {
    const _path = path.join(BASE_DIR, req.body.name)
    console.log(_path)

    projectService.gitInitUtil(_path)
        .then(() => res.sendStatus(201))
        .catch(err => {
            if(isCodedRuntimeException(err)){
                res.statusCode = 422
                res.send(err)
            }else{
                const customError: CodedRuntimeException = {
                    errorCode: 'UKNOWN_ERROR',
                    errorReason: err
                }
                res.send(customError)
            }
        })
})

export default router