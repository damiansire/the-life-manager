import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTableRowComponent } from './project-table-row.component';

describe('ProjectTableRowComponent', () => {
  let component: ProjectTableRowComponent;
  let fixture: ComponentFixture<ProjectTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTableRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
