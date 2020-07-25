import ProjectCard from './IProjectCard'

interface ProjectService {
    createProject(path: string): Promise<void>
    fetchProjects(path: string): ProjectCard[]
}

export default ProjectService