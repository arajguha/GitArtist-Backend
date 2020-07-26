import ProjectCard from './types/IProjectCard'
import { projectCard } from './projectCard'
import fs from 'fs'


class ProjectService {
    public createProject(path: string): Promise<void>{
        if (this.projectExists(path)) {
            return Promise.reject({
                errorCode: 'PROJECT_PATH_ALREADY_EXISTS',
                errorReason: 'The specified path already exists'
            });
        }

        return new Promise((resolve, reject) => {
            fs.mkdir(path, error => {
                if (error) {
                    console.log(`[*]error while creating directory: ${error}`);
                    reject(error);
                }
                else{                
                    console.log('[*]project directory created');
                    resolve();
                }
            });
        })
    }

    public fetchProjects(path: string): ProjectCard[] {
        const projects = fs.readdirSync(path)
    
        const projectCards: ProjectCard[] = projects.map((project: string) => {
            const files: string[] = fs.readdirSync(`${path}/${project}`)
            return projectCard(project, files)
        })
        return projectCards
    }

    private projectExists(path: string): boolean {
        return fs.existsSync(path) ? true : false
    }

}

export default ProjectService