import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './components/disbursement-wrapper/disbursement-wrapper';

@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
