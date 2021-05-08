import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon'; 

const MaterialComponents = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule
]

@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
