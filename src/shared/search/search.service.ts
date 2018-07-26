import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../../constants';
import { Person } from '../../app/models/person.model';

@Injectable()
export class SearchService {
    public staff: any;
    public results: any;
    public totalResults: [Person];
    constructor(public http: HttpClient) { }

    match() {
      this.getStaff().subscribe((res: Person) => {
        this.staff = res;
        this.totalResults = this.staff;
        this.getDataSource().subscribe(resp => {
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

      return this.totalResults;
    }

    getDataSource() {
        return this.http.get(`${API_URL}/data`)
          .pipe(
            map((res: any) => {
                return res.data;
            })
        );
    }

    getStaff() {
      return this.http.get(`${API_URL}/population`)
        .pipe(
          map((res: any) => {
              return res.population.person;
          })
      );
  }

}
