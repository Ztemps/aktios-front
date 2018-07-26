import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../../constants';

@Injectable()
export class SearchService {

    constructor(public http: HttpClient) { }

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
