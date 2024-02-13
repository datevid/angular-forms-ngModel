import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MainComponent,FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  variable1 = 'abc';
}
