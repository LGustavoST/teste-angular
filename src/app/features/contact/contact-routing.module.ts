import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path:'',
    //loadComponent: () => import('./contact.component').then(m => m.ContactComponent)
    component: ContactComponent
  },
  {
    path: 'whatsapp',
    loadComponent: () => import('./whatsapp/whatsapp.component').then(m => m.WhatsappComponent)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ContactRoutingModule { }