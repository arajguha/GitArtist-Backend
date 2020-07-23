import express, { Request, Response, Router} from 'express'
import { BASE_DIR } from './baseDir'
import fs from 'fs'
import path from 'path'

//base location for all GitArtist Projects
//const BASE_DIR = 'C:\\Users\\Debanik\\Desktop\\gitDownload\\gitArtist-projects'

const router: Router = express.Router()

router.post('/create-project/', (req: Request, res: Response) => {
    const projectName: string = req.body.name
    console.log('[*]project name: ', projectName)
    console.log('[*]creating new project directory')
    
    if(fs.existsSync(path.join(BASE_DIR, projectName))) {
        console.log('Project directory already exists')
        res.send('project exists already')
    }

    fs.mkdir(path.join(BASE_DIR, projectName), err => {
        if(err){
            res.send('error while creating project directory')
            console.log(`[*]error while creating directory: ${err}`)
        }
        else{
            res.send('project directory created')
            console.log('[*]project directory created')
        }
    })
})

export default router