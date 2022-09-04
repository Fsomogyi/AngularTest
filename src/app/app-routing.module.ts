import { NgModule } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { RouterModule, Routes } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { MlmpComponent } from './mlmp/mlmp.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PublicationsComponent } from './publications/publications.component';

const routes: Routes = [
  { path: 'introduction', component: IntroComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: 'mlmp', component: MlmpComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: '', redirectTo: '/introduction', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },  // TODO
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
