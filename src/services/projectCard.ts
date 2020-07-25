import ProjectCard from './types/IProjectCard'

export const projectCard = (projectName: string, files: string[]): ProjectCard => {
    return {
        name: projectName,
        files: files
    }
}