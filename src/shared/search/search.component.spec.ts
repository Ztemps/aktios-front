import { Observable } from 'rxjs/Observable';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StaffTableModule } from './staff-table/staff-table.module';
import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/observable/from';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StaffTableModule, HttpClientModule],
      providers: [SearchService],
      declarations: [SearchComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    service = TestBed.get(SearchService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Searched should be true after searchPerson execution', () => {
    expect(component.searched).toBeFalsy();
    component.searchPerson(true);
    expect(component.searched).toBeTruthy();
  });

});
