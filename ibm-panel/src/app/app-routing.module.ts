import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LessonsComponent } from './pages/lessons/lessons.component';
import { ProductsComponent } from './pages/products/products.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersFormComponent } from './pages/users-form/users-form.component';
import { AppRoutes } from './utils/routes/routes.enum';
import { AuthGuard } from './utils/guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { ProductsFormComponent } from './pages/products-form/products-form.component';
import { ArticlesFormComponent } from './pages/articles-form/articles-form.component';
import { LessonsFormComponent } from './pages/lessons-form/lessons-form.component';
import { CampaignsComponent } from './pages/campaigns/campaigns.component';
import { CampaignsFormComponent } from './pages/campaigns-form/campaigns-form.component';


export const routes: Routes = [
  // { path: AppRoutes.DASHBOARD, component: DashboardComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.DASHBOARD, component: LessonsComponent, canActivate: [AuthGuard] },

  { path: AppRoutes.LIST_LESSONS, component: LessonsComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.NEW_LESSON, component: LessonsFormComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.EXISTENT_LESSON, component: LessonsFormComponent, canActivate: [AuthGuard] },

  { path: AppRoutes.LIST_CAMPAIGNS, component: CampaignsComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.NEW_CAMPAIGN, component: CampaignsFormComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.EXISTENT_CAMPAIGN, component: CampaignsFormComponent, canActivate: [AuthGuard] },

  { path: AppRoutes.LIST_ARTICLES, component: ArticlesComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.NEW_ARTICLE, component: ArticlesFormComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.EXISTENT_ARTICLE, component: ArticlesFormComponent, canActivate: [AuthGuard] },

  { path: AppRoutes.LIST_PRODUCTS, component: ProductsComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.NEW_PRODUCT, component: ProductsFormComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.EXISTENT_PRODUCT, component: ProductsFormComponent, canActivate: [AuthGuard] },

  { path: AppRoutes.LIST_USERS, component: UsersComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.NEW_USER, component: UsersFormComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.EXISTENT_USER, component: UsersFormComponent, canActivate: [AuthGuard] },

  { path: AppRoutes.LOGIN_PAGE, component: LoginComponent },

  { path: "**", redirectTo: AppRoutes.DASHBOARD },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
