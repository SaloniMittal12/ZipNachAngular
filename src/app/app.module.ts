import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MandateformComponent } from './mandateform/mandateform.component';
import { UserComponent } from './user/user.component';
import { EntityComponent } from './entity/entity.component';
import { HistoricalComponent } from './historical/historical.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    MandateformComponent,
    UserComponent,
    EntityComponent,
    HistoricalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
