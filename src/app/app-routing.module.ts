import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CardliComponent } from './components/cardli/cardli.component';
import { RTOSComponent } from './components/rtos/rtos.component';
import { BitstoryComponent } from './components/bitstory/bitstory.component'; 
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'cardli', component: CardliComponent},
  {path: 'RTOS', component: RTOSComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'bitstory', component: BitstoryComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
