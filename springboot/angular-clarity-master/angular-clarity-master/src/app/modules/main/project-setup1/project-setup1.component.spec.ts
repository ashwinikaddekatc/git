import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSetup1Component } from './project-setup1.component';

describe('ProjectSetup1Component', () => {
  let component: ProjectSetup1Component;
  let fixture: ComponentFixture<ProjectSetup1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSetup1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSetup1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
