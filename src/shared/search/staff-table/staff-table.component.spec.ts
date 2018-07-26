import { FilterPerson } from './../../../app/pipes/filter-person';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTableComponent } from './staff-table.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';

describe('StaffTableComponent', () => {
  let component: StaffTableComponent;
  let fixture: ComponentFixture<StaffTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ StaffTableComponent, FilterPerson ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
