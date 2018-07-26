import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { SearchService } from './search.service';
import { StaffTableModule } from './staff-table/staff-table.module';
import { StaffTableComponent } from './staff-table/staff-table.component';

@NgModule({
    imports: [StaffTableModule],
    declarations: [SearchComponent],
    exports: [SearchComponent],
    providers: [SearchService]
})
export class SearchModule { }
