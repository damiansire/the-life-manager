import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTableListComponent } from './projects-table-list.component';

describe('ProjectsTableListComponent', () => {
  let component: ProjectsTableListComponent;
  let fixture: ComponentFixture<ProjectsTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsTableListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
