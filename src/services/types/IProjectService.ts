import ProjectCard from './IProjectCard'

interface ProjectService {
    createProject(path: string): Promise<void>
    fetchProjects(path: string): ProjectCard[]
    gitInitUtil(path: string): Promise<string>
    projectSummary(path: string, name: string): ProjectCard | null
}

export default ProjectService