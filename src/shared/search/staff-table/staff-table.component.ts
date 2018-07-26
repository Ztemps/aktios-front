import { Component, Input } from '@angular/core';
import { Person } from '../../../app/models/person.model';
import { FilterPerson } from './../../../app/pipes/filter-person';

@Component({
  selector: 'app-staff-table',
  templateUrl: './staff-table.component.html',
  styleUrls: ['./staff-table.component.css'],
  providers: [FilterPerson]
})
export class StaffTableComponent {
  @Input() totalResults: Person;
  @Input() queryFilter: string;
  @Input() searched: string;

  public tableResults: Person;
  public filter: any;
  public pagination = [
    { value: 10 },
    { value: 20 },
    { value: 50 }
  ];
  public pagValue: any;
  constructor() {
    this.pagValue = 10;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    this.filter = this.queryFilter;
    this.tableResults = this.totalResults;
  }

}
