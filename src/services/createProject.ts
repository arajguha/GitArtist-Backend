import fs from 'fs'
import { Response } from 'express'

function createProject(path: string, res: Response): boolean{
    if(fs.existsSync(path)) {
        console.log('Project directory already exists')
        res.send('project exists already')
        return false
    }

    fs.mkdir(path, err => {
        if(err){
            res.send('error while creating project directory')
            console.log(`[*]error while creating directory: ${err}`)
            return false
        }
        else{
            res.send('project directory created')
            console.log('[*]project directory created')
        }
    })
    return true
}

export default createProject