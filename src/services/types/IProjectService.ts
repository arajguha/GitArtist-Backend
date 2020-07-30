import ProjectCard from './IProjectCard'

interface ProjectService {
    createProject(path: string): Promise<void>
    fetchProjects(path: string): ProjectCard[]
    gitInitUtil(path: string): Promise<string>
}

export default ProjectService