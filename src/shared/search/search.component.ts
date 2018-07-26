import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../../app/models/person.model';
import { finalize } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public results: any;
  public totalResults: [Person];
  public staff: any;
  public searchValue: string;
  public searched = false;
  constructor(public _searchService: SearchService) {}

  ngOnInit() {
    this._searchService.getStaff().subscribe((res: Person) => {
    this.staff = res;
    this.totalResults = this.staff;
    this._searchService.getDataSource().subscribe(resp => {
      this.results = resp;
      this.staff.forEach((staff, i) => {
        this.results.sex.forEach(data => {
          if (staff.sex === data.key) {
            this.staff[i].sex = data.description;
          }
        });
        this.results.country.forEach(data => {
          if (staff['country-id'] === data.id) {
            this.staff[i].phone = `+${data.prefix} ${this.staff[i].phone}`;
            this.staff[i].country = data.description;
          }
        });
      });
    });
  });
}

  searchPerson(value: any) {
    this.searched = true;
    this.searchValue = value;
  }
}
