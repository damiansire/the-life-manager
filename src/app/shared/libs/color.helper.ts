import { ProjectStatus } from "src/app/interfaces/project.interface";

/**
* Get status color according to the project status
* @returns If there is a match, return the name of the color, otherwise, undefined
*eg: 'red'
*/
export const getProjectColorStatus = (status: ProjectStatus) => {
    if (status === ProjectStatus.backlog) { return "yellow" }
    if (status === ProjectStatus.inProgress) { return "blue" }
    if (status === ProjectStatus.finalized) { return "green" }
    if (status === ProjectStatus.discontinued) { return "red" }
    return "red";
}