import { GetProjectsReponse, ProjectStatus, Stack } from "src/app/interfaces/project.interface";

export const getProjectsReponseMock: GetProjectsReponse = {
    backlog: 10,
    inProgress: 8,
    completed: 3,
    total: 21,
    projects: [
        {
            name: 'Life Manager',
            projectStatus: ProjectStatus.backlog,
            stack: [Stack.angular, Stack.tailwindcss]
        },
        {
            name: 'Life Manager2',
            projectStatus: ProjectStatus.completed,
            stack: [Stack.angular, Stack.tailwindcss]

        },
        {
            name: 'Life Manager3',
            projectStatus: ProjectStatus.inProgress,
            stack: [Stack.angular, Stack.tailwindcss]
        },
        {
            name: 'Life Manager4',
            projectStatus: ProjectStatus.abandoned,
            stack: [Stack.angular, Stack.tailwindcss]
        },
    ]
}