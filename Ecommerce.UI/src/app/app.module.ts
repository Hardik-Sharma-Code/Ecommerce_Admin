import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditProductsComponent } from './components/products/edit-products/edit-products.component';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { AddOrdersComponent } from './components/orders/add-orders/add-orders.component';
import { EditOrdersComponent } from './components/orders/edit-orders/edit-orders.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { AddUsersComponent } from './components/users/add-users/add-users.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditProductsComponent,
    AddProductsComponent,
    ListProductsComponent,
    ListOrdersComponent,
    AddOrdersComponent,
    EditOrdersComponent,
    EditCategoryComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    ListUsersComponent,
    AddUsersComponent,
    EditUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
