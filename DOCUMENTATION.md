# Widgets

The project was built based on the .psd file and I tried to develop each widget in a modular way. In the folder [`src/app/`](./src/app/) you can find each component used by each widget (blog-post, contact-form, statistics and profile).

If you open the app, you will see something like the psd. You can re-size the screen to see each widget in different sizes.

I choose that four widgets because I like the design of them, and I also found interesting to develop them because they are different between each other.

The project don't use `JSON` files to get the data information. Instead, I choose to mock the files and use `RXJS` to convert that data in Observables which are used in the respective service.

The support for i18n was built using the library `@ngx-translate`.

As a design framework, the project use `Foundation`, `@angular/material` and `@ng-select` in order to save work and have a better design.

As a chart library the widgets uses `Google Charts`.

You can see each library and the version in [`package.json`](./package.json).

## Modify data

- To modify the words used by each language you can go to [`src/assets/i18n/`](./src/assets/i18n) and edit each language file.
- To modify the dynamic data you can go to [`src/app/mocks/`](./src/app/mocks) and edit each file.

## Requirements

- Nodejs (Tested in version: 8.10.0)
- npm (Tested in version: 5.8.0)
- Chrome (65) or firefox (59)

## Execute

After install npm packages (`npm install`) in the project folder, run `npm run serve` or `ng serve` (if you have installed angular-cli) to execute the app. Then, navigate to [http://localhost:4200/](http://localhost:4200/).

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Example page in GitHub pages

[https://jkevingutierrez.github.io/widgets/](https://jkevingutierrez.github.io/widgets/)
