# AngularCourseProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

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

## Steps I took to Setup
* Create the app with Angular CLI `ng new`
* Setting up bootstrap, apply to styles in angular.json
* Create the components, if manual create the class and component directive and import to App Module
  * Ensure works by templating to App.HTML
* Plan the usage of each component
* Create the navigation bar for header component
* Create the recipe model, `recipe.model.ts`
  * model is simply a TS file, it is a blueprint for the object we create
  * Class is instantiated in the file so we can create new objects
    * create properties and constructor
* Added content to our Recipe components
  * Make sure models are imported to the component.ts file so they can be used
  * Seed models
  * Output lists if any with ngFor
    * use string interpolation to output the text
    * or in the case of filling in attribute we use property binding
* Added content to the Shopping List components
* Create Ingredients Model
  * Placed in a folder called share as it will be shared amongst other components
* Now to create and output the shopping list within the component
  * List ingredients
  * Form to edit ingredients
