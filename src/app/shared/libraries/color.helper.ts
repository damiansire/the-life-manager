import { ProjectStatus } from "src/app/interfaces/project.interface";

/**
* Get status color according to the project status
* @returns If there is a match, return the name of the color, otherwise, undefined
*eg: 'red'
*/
export const getProjectColorStatus = (status: ProjectStatus) => {
    const projectStatusColor: { [key: string]: string; } = {}
    projectStatusColor[ProjectStatus.backlog] = "yellow"
    projectStatusColor[ProjectStatus.inProgress] = "blue"
    projectStatusColor[ProjectStatus.finalized] = "green"
    projectStatusColor[ProjectStatus.discontinued] = "red"
    return projectStatusColor[status];
}