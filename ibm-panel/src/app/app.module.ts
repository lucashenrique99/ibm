import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { LessonsTableComponent } from './pages/lessons/lessons-table/lessons-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ListViewComponent } from './components/list-view/list-view.component';
import { UsersTableComponent } from './pages/users/users-table/users-table.component';
import { ProductsTableComponent } from './pages/products/products-table/products-table.component';
import { ArticlesTableComponent } from './pages/articles/articles-table/articles-table.component';

import { TableButtonBarComponent } from './components/table-button-bar/table-button-bar.component';
import { DeleteDialogComponent } from './components/dialog/delete-dialog/delete-dialog.component';

import { MatDialogModule } from '@angular/material/dialog';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { ProductsFormComponent } from './pages/products-form/products-form.component';
import { FormViewComponent } from './components/form-view/form-view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesFormComponent } from './pages/articles-form/articles-form.component';
import { QuillComponent } from './components/editor/quill/quill.component';
import { LessonsFormComponent } from './pages/lessons-form/lessons-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MatNativeDateModule } from '@angular/material/core';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { CampaignsFormComponent } from './pages/campaigns-form/campaigns-form.component';
import { CampaignsTableComponent } from './pages/campaigns/campaigns-table/campaigns-table.component';
registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    LessonsComponent,
    ArticlesComponent,
    ProductsComponent,
    UsersComponent,
    LessonsTableComponent,
    ListViewComponent,
    UsersTableComponent,
    ProductsTableComponent,
    ArticlesTableComponent,
    TableButtonBarComponent,
    DeleteDialogComponent,
    UsersFormComponent,
    ProductsFormComponent,
    FormViewComponent,
    LoginComponent,
    ArticlesFormComponent,
    QuillComponent,
    LessonsFormComponent,
    CampaignsComponent,
    CampaignsFormComponent,
    CampaignsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  entryComponents: [DeleteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
