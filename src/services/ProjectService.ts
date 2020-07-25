import { BASE_DIR } from './baseDir'
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
                    return reject(error);
                }
                
                console.log('[*]project directory created');
                return resolve();
            });
        })
    }

    fetchProjects(): ProjectCard[] {
        const projects = fileSystem.readdirSync(BASE_DIR)
    
        const projectCards: ProjectCard[] = projects.map((project: string) => {
            const files: string[] = fileSystem.readdirSync(`${BASE_DIR}/${project}`)
            return projectCard(project, files)
        })
        return projectCards
    }

    private projectExists(path: string): boolean {
        return fileSystem.existsSync(path) ? true : false
    }

}

export default ProjectService