import { Component, OnInit } from '@angular/core';
import { Person } from '../../app/models/person.model';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public totalResults: [Person];
  public searchValue: string;
  public searched = false;
  constructor(public _searchService: SearchService) { }

  ngOnInit() {
    this._searchService.match();
  }

  public searchPerson(value: any) {
    this.searched = true;
    this.searchValue = value;
    this.totalResults = this._searchService.totalResults;
  }

}
