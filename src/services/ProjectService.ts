import ProjectCard from './types/IProjectCard'
import { projectCard } from './projectCard'
import simpleGit, { SimpleGit } from 'simple-git';
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

    public gitInitUtil(path: string): Promise<string> {
        if(!this.projectExists(path)){
            console.log('Specified project does not exist')
            return Promise.reject({
                errorCode: 'PROJECT_PATH_DOES_NOT_EXIST',
                errorReason: 'Specified project does not exist'
            })
        }
        
        const git: SimpleGit = simpleGit(path, {binary: 'git'})

        return new Promise((resolve, reject) => {
            git.init()
                .then(() => {
                    console.log('git initialization success')
                    resolve("git initialization success")
                })
                .catch(err => {
                    console.log(err)
                    reject(err)
                })
        })
    }

    private projectExists(path: string): boolean {
        return fs.existsSync(path) ? true : false
    }

}

export default ProjectService