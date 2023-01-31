import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}

  getProjects() {
    return of([
      {
        name: 'Life Manager',
      },
    ]);
  }
}
