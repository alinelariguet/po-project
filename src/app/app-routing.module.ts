import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoPageDynamicDetailComponent, PoPageDynamicEditComponent, PoPageDynamicTableComponent } from '@po-ui/ng-templates';

const routes: Routes = [
  {
    path: 'people',
    component: PoPageDynamicTableComponent,
    data: {
      serviceApi: 'http://localhost:3000/v1/people'
    }
  },
  {
    path: 'new',
    component: PoPageDynamicEditComponent,
    data: {
      serviceApi: 'http://localhost:3000/v1/people'
    }
  },
  {
    path: 'edit/:id',
    component: PoPageDynamicEditComponent,
    data: {
      serviceApi: 'http://localhost:3000/v1/people'
    }
  },
  {
    path: 'detail/:id',
    component: PoPageDynamicDetailComponent,
    data: {
      serviceApi: 'http://localhost:3000/v1/people'
    }
  },
  {
    path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
