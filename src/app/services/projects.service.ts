import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetProjectsReponse } from '../interfaces/project.interface';
import { getProjectsReponseMock } from './mocks/projects.service.mock';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {

  constructor() { }

  getProjects(): Observable<GetProjectsReponse> {
    return of(getProjectsReponseMock);
  }
}
