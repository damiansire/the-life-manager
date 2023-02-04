export enum Stack {
    javascript = "javascript",
    angular = "angular",
    tailwindcss = "tailwindcss",
    git = "git",
}

export enum ProjectStatus {
    backlog,
    inProgress,
    completed,
    abandoned
}

export interface Project {
    name: string,
    projectStatus: ProjectStatus,
    stack: Stack[]
}

export interface GeneralProjectStatistics {
    backlog: number,
    inProgress: number,
    completed: number,
    total: number,
}

export interface GetProjectsReponse extends GeneralProjectStatistics {
    projects: Project[]
}


