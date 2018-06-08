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
import { AccueilComponent } from './accueil/accueil.component';
import { CasnumberComponent } from './casnumber/casnumber.component';
import { NameComponent } from './name/name.component';
import { FormuleComponent } from './formule/formule.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { AtomesComponent } from './atomes/atomes.component';
import { AtomeCellComponent } from './atome-cell/atome-cell.component';
import { AtomeDetailsComponent } from './atome-details/atome-details.component';
import { WebComponent } from './web/web.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';



const appRoutes: Routes = [{path: '', component: AccueilComponent},

{path: 'formule', component: FormuleComponent},
{path: 'atomCell', component: AtomeCellComponent },
{path: 'atom', component: AtomesComponent },
{path: 'nom', component: NameComponent},
{path: 'cas', component: CasnumberComponent},
{ path: 'all', component: ElementsComponent },
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
    AccueilComponent,
    CasnumberComponent,
    NameComponent,
    FormuleComponent,
    PeriodicTableComponent,
    AtomesComponent,
    AtomeCellComponent,
    AtomeDetailsComponent,
    WebComponent,
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule, FormsModule, HttpClientModule,
  ],
  providers: [ElementsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
