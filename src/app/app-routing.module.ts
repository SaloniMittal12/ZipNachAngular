import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MandateformComponent } from './mandateform/mandateform.component';
import { UserComponent } from './user/user.component';
import { EntityComponent } from './entity/entity.component';
import { HistoricalComponent } from './historical/historical.component';
import { ReportComponent } from './report/report.component';
import { DownloadmandateComponent } from './downloadmandate/downloadmandate.component';
import { DownloadEMandateComponent } from './download-e-mandate/download-e-mandate.component';
import { UploadmandateComponent } from './uploadmandate/uploadmandate.component';
import { DownloadoldmandateComponent } from './downloadoldmandate/downloadoldmandate.component';
import { DownloadoldemandateComponent } from './downloadoldemandate/downloadoldemandate.component';
import { BulkmandateComponent } from './bulkmandate/bulkmandate.component';
import { BulkemandateComponent } from './bulkemandate/bulkemandate.component';
import { BulkresendemandateComponent } from './bulkresendemandate/bulkresendemandate.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'mandateform', component: MandateformComponent },
  { path: 'user', component: UserComponent},
  { path: 'entity', component: EntityComponent},
  { path: 'historical', component: HistoricalComponent},
  { path: 'report', component: ReportComponent},
  { path: 'downloadmandate', component: DownloadmandateComponent},
  { path: 'download-e-mandate', component: DownloadEMandateComponent},
  { path: 'uploadmandate', component: UploadmandateComponent},
  { path: 'downloadoldmandate', component: DownloadoldmandateComponent},
  { path: 'downloadoldemandate', component: DownloadoldemandateComponent},
  { path: 'bulkmandate', component: BulkmandateComponent},
  { path: 'bulkemandate', component: BulkemandateComponent},
  { path: 'bulkresendemandate', component: BulkresendemandateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
