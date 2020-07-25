import { BASE_DIR } from './baseDir'
import ProjectCard from './types/IProjectCard'
import { projectCard } from './projectCard'
import fs from 'fs'

class ProjectService {
    projectExists(path: string): boolean {
        return fs.existsSync(path) ? true : false
    }

    createProject(path: string): boolean{
        fs.mkdir(path, err => {
            if(err){
                console.log(`[*]error while creating directory: ${err}`)
                return false
            }
            else{
                console.log('[*]project directory created')
            }
        })
        return true
    }

    fetchProjects(): ProjectCard[] {
        const projects = fs.readdirSync(BASE_DIR)
    
        const projectCards: ProjectCard[] = projects.map((project: string) => {
            const files: string[] = fs.readdirSync(`${BASE_DIR}/${project}`)
            return projectCard(project, files)
        })
        return projectCards
    }

}

export default ProjectService