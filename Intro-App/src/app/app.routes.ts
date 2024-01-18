import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

export const routes: Routes = [
    { path: ' ', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'vehicle', component: VehicleComponent }
];
