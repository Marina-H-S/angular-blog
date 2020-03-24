import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shade/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthGaurd } from './shade/services/auth.guard';
import { SearchPipe } from './shade/search.pipe';

@NgModule({
    declarations: [AdminLayoutComponent, LoginPageComponent, DashboardPageComponent, CreatePageComponent, EditPageComponent, SearchPipe],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
    RouterModule.forChild([
      {
          path: '', component: AdminLayoutComponent, children: [
              {
                  path: '', redirectTo: '/admin/login', pathMatch: 'full'
              },
              {
                  path: 'login', component: LoginPageComponent
              },
              {
                  path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGaurd]
              },
              {
                  path: 'create', component: CreatePageComponent, canActivate: [AuthGaurd]
              },
              {
                  path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGaurd]
              }
          ]
      }
    ])],
    exports: [RouterModule],
    providers: [ AuthGaurd ]
})

export class AdminModule {

}
