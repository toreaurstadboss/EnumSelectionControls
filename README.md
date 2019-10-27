# Enumselectioncontrols

Please note - this repository contains a library and a consuming project of an enum selection control for enums in Typescript to be used in Angular. It contains a SELECT control and a list of RADIO button INPUT control. It is however in beta still and should not be used in production yet. Known issues:

- The group name of the radio button is problematic to set in the DOM and must be resolved.
- The controls use Norwegian language some places.
- It is not possible to assign custom descriptions to the enum members - You can choose from the RAW enum values and text only. E.g. like the Display Attribute in C# capapbilities.

## Code example:

The following HTML shows how to use these two library components.

**app.component.html**

```html
<form>
  <div class="form-group span-2">
    <label>Iskrem:</label>
    <lib-enum-select
      (selectionChange)="onIceCream($event)"
      [enumtype]="IceCreamType"
    ></lib-enum-select>
  </div>

  <div class="form-group span-2">
    <label>Iskrem:</label>
    <lib-enum-radio-button-list
      [enumtype]="IceCreamType"
      (selectionChange)="onIceCream($event)"
      [groupname]="IceCreamGroup"
    ></lib-enum-radio-button-list>
  </div>
</form>
```

With a sample app.component.ts file 'view model':

**app.component.ts**

```typescript
import { Component } from "@angular/core";
import { IceCream } from "./ice-cream";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Consume EnumSelectors";
  IceCreamType = IceCream;
  IceCream: IceCream = IceCream.None;

  onIceCream(someIcream) {
    this.IceCream = someIcream;
  }
}
```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.0.

## Code scaffolding

Run `ng generate component component-name --project enumselectioncontrols` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project enumselectioncontrols`.

> Note: Don't forget to add `--project enumselectioncontrols` or else it will be added to the default project in your `angular.json` file.

## Build

Run `ng build enumselectioncontrols` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build enumselectioncontrols`, go to the dist folder `cd dist/enumselectioncontrols` and run `npm publish`.

## Running unit tests

Run `ng test enumselectioncontrols` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

```

# LibraryWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
```
