# App02

## Uso de binding en un formulario con la actualizacion de stanalone:true
app.component.html
```htmls
<form>
    <label for="variable1">
        <input type="text" [(ngModel)]="variable1" 
        [ngModelOptions]="{standalone: true}">
    </label>
    {{variable1}}
</form>
```
app.component.ts
```ts
import { Component } from '@angular/core';
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

```

##

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
