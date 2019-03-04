import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { BsDatepickerModule } from 'ngx-bootstrap';



import { LoginServiceService } from './webservices/login-service.service';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { XhrInterceptor } from './XhrInterceptor';


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
    BulkresendemandateComponent,
    LoginComponent ,
  ],
  imports: [
    BrowserModule, GridModule, BrowserAnimationsModule, [BsDatepickerModule.forRoot()],
    HttpClientModule, AppRoutingModule, ReactiveFormsModule, AgGridModule.withComponents([])
  ],
  providers: [LoginServiceService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

