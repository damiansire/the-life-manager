import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsStatisticsComponent } from './projects-statistics.component';

describe('ProjectsStatisticsComponent', () => {
  let component: ProjectsStatisticsComponent;
  let fixture: ComponentFixture<ProjectsStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
