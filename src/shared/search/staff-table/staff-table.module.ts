import { NgModule } from '@angular/core';
import { StaffTableComponent } from './staff-table.component';
import { BrowserModule } from '../../../../node_modules/@angular/platform-browser';
import { FilterPerson } from '../../../app/pipes/filter-person';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [StaffTableComponent, FilterPerson],
    exports: [StaffTableComponent],
    providers: []
})
export class StaffTableModule { }
