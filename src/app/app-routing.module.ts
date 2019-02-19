import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MandateformComponent } from './mandateform/mandateform.component';
import { UserComponent } from './user/user.component';
import { EntityComponent } from './entity/entity.component';
import { HistoricalComponent } from './historical/historical.component';

const routes: Routes = [
  { path: 'mandateform', component: MandateformComponent },
  { path: 'user', component: UserComponent},
  { path: 'entity', component: EntityComponent},
  { path: 'historical', component: HistoricalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
