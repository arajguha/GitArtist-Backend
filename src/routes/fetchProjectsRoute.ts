import express, { Router, Request, Response } from 'express'
import { BASE_DIR } from './baseDir'
import fs from 'fs'
import fetchProjects from '../services/fetchProjects'

const router: Router = express.Router()

router.get('/fetch-projects', (req: Request , res: Response) => {
    fetchProjects(BASE_DIR, res)
   
})

export default router
