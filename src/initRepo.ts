import express, { Application, Request, Response } from 'express'
import simpleGit, { SimpleGit } from 'simple-git'
import fs from 'fs'

const app: Application = express()

console.log('test server started...')

const path = 'C:\\Users\\Debanik\\Desktop\\gitDownload\\test'

if(!fs.existsSync(path)){
    console.log('directory does not exist')
    console.log('exiting process')
    process.exit()
}

const git: SimpleGit = simpleGit(path)

app.get('/gitArtist/init/', (req: Request, res: Response) => {
    res.send('init endpoint hit')
    //console.log('[*] path specified: ', req.params.dirPath)
    
    git.init()
        .then(initResult => console.log(initResult))
        .catch(err => console.log(err))
})

app.listen(3001, () => console.log('server running on port 3001'))
