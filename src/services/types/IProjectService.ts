import ProjectCard from './IProjectCard'

interface ProjectService {
    projectExists(path: string): boolean 
    createProject(path: string): boolean
    fetchProjects(): ProjectCard[]
}

export default ProjectService