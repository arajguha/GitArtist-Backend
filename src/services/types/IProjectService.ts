import ProjectCard from './IProjectCard'

interface ProjectService {
    createProject(path: string): Promise<void>
    fetchProjects(): ProjectCard[]
}

export default ProjectService