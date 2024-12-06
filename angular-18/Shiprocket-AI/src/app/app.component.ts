import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent {
  title = 'shiprocket-AI';
}
