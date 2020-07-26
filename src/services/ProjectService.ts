import ProjectCard from './types/IProjectCard'
import { projectCard } from './projectCard'
import fileSystem from 'fs'

class ProjectService {
    public createProject(path: string): Promise<void>{
        if (this.projectExists(path)) {
            return Promise.reject({
                errorCode: 'PROJECT_PATH_ALREADY_EXISTS',
                errorReason: 'The specified path already exists'
            });
        }

        return new Promise((resolve, reject) => {
            fileSystem.mkdir(path, error => {
                if (error) {
                    console.log(`[*]error while creating directory: ${error}`);
                    reject(new Error(error.message));
                }
                else{                
                    console.log('[*]project directory created');
                    resolve();
                }
            });
        })
    }

    fetchProjects(path: string): ProjectCard[] {
        const projects = fileSystem.readdirSync(path)
    
        const projectCards: ProjectCard[] = projects.map((project: string) => {
            const files: string[] = fileSystem.readdirSync(`${path}/${project}`)
            return projectCard(project, files)
        })
        return projectCards
    }

    private projectExists(path: string): boolean {
        return fileSystem.existsSync(path) ? true : false
    }

}

export default ProjectService