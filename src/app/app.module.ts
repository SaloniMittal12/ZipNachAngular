import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MandateformComponent,
    UserComponent,
    EntityComponent,
    HistoricalComponent,
    ReportComponent,
    DownloadmandateComponent,
    DownloadEMandateComponent,
    UploadmandateComponent,
    DownloadoldmandateComponent,
    DownloadoldemandateComponent,
    BulkmandateComponent,
    BulkemandateComponent,
    BulkresendemandateComponent ,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
