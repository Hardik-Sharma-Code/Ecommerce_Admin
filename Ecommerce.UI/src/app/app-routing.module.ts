import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { EditProductsComponent } from './components/products/edit-products/edit-products.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { EditCategoryComponent } from './components/category/edit-category/edit-category.component';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { AddOrdersComponent } from './components/orders/add-orders/add-orders.component';
import { EditOrdersComponent } from './components/orders/edit-orders/edit-orders.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { AddUsersComponent } from './components/users/add-users/add-users.component';
import { EditUsersComponent } from './components/users/edit-users/edit-users.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'products', component:ListProductsComponent},
  {path:'products/add', component:AddProductsComponent},
  {path:'products/edit', component:EditProductsComponent},
  {path:'orders', component:ListOrdersComponent},
  {path:'orders/add', component:AddOrdersComponent},
  {path:'orders/edit', component:EditOrdersComponent},
  {path:'category', component:ListCategoryComponent},
  {path:'category/add', component:AddCategoryComponent},
  {path:'category/edit', component:EditCategoryComponent},
  {path:'users', component:ListUsersComponent},
  {path:'users/add', component:AddUsersComponent},
  {path:'users/edit', component:EditUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
