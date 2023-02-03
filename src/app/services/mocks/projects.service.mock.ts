import { ProjectStatus } from "src/app/interfaces/project.interface";

export const getProjectsReponseMock = {
    backlog: 10,
    inProgress: 8,
    completed: 3,
    total: 21,
    projects: [
        {
            name: 'Life Manager',
            projectStatus: ProjectStatus.backlog
        },
        {
            name: 'Life Manager2',
            projectStatus: ProjectStatus.completed
        },
        {
            name: 'Life Manager3',
            projectStatus: ProjectStatus.inProgress
        },
    ]
}