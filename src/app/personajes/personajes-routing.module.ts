import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';



const routes:Routes= [
  
  {
    path: "",
    children: [

       
  {

    path:"agregar",
    component:AgregarComponent

  },
  {

    path:"buscar",
    component:BuscarComponent

  },
  {

    path:"home",
    component:HomeComponent

  },
  {

    path:"listado",
    component:ListadoComponent

  },
  {

    path:"editar:id",
    component:AgregarComponent

  },
  {
    path:"**",
    redirectTo:"listado"
  },
  {
    path:"id",
    component:PersonajeComponent
  }
      
    ]
  }

 
]

@NgModule({
  
  imports: [

    RouterModule.forChild(routes)
   
  ],
  exports:[
    RouterModule
  ]
})
export class PersonajesRoutingModule { }
