import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreportBuilderComponent } from './editreport-builder.component';

describe('EditreportBuilderComponent', () => {
  let component: EditreportBuilderComponent;
  let fixture: ComponentFixture<EditreportBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreportBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreportBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
