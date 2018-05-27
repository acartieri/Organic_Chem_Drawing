import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ElementsComponent } from './elements/elements.component';
import { ElementDetailComponent } from './element-detail/element-detail.component';
import { ElementsService } from './_service/elements.service';
import { RouterModule, Routes } from '@angular/router';
import { ElementsPageComponent } from './elements-page/elements-page.component';
import {ChemicalPipe} from './chemical.pipe';

const appRoutes: Routes = [{ path: 'all', component: ElementsComponent },
{ path: 'hello', component: HelloComponent },
{ path: 'element/:id', component: ElementsPageComponent}];


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent,
    ElementsComponent,
    ElementDetailComponent,
    ElementsPageComponent,
    ChemicalPipe,
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule
  ],
  providers: [ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
