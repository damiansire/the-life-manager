export enum ProjectStatus {
    backlog,
    inProgress,
    completed,
}

export interface Project {
    name: string,
    projectStatus: ProjectStatus
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


