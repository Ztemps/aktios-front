import { NgModule } from '@angular/core';

// Modules
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './search/search.module';
import { HeaderModule } from './header/header.module';
import { StaffTableModule } from './search/staff-table/staff-table.module';
import { FooterModule } from './footer/footer.module';

// Components
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { StaffTableComponent } from './search/staff-table/staff-table.component';
import { FooterComponent } from './footer/footer.component';

// Providers
import { SearchService } from './search/search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SearchModule,
    HeaderModule,
    StaffTableModule,
    FooterModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    SearchComponent,
    HeaderComponent,
    StaffTableComponent,
    FooterComponent
  ],
  declarations: [],
  providers: [SearchService]
})
export class SharedModule {}
