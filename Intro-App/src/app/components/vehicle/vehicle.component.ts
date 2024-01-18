import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent {
  myVehicle: Vehicle = {
    id: 2,
    make: 'Toyota',
    model: 'Tacoma',
    year: 2024
  };
    


}
