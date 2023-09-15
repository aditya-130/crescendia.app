import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PermissionsService } from './services/permissions.service';
import { AdminPermissionsService } from './services/admin-permissions.service';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'products', component: ProductsComponent},
  {path:'login', component: LoginComponent},
  {path:'shopping-cart', component: ShoppingCartComponent},

  {path:'check-out', component: CheckOutComponent, canActivate:[PermissionsService]},
  {path:'order-success', component: OrderSuccessComponent, canActivate:[PermissionsService]},
  {path:'my/orders', component: MyOrdersComponent, canActivate:[PermissionsService]},

  {path:'admin/products', component: AdminProductsComponent, canActivate:[PermissionsService, AdminPermissionsService]},
  {path:'admin/orders', component: AdminOrdersComponent, canActivate:[PermissionsService, AdminPermissionsService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
