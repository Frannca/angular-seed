# Angular Folder Structure
> Highly scalable folder structure for your Angular projects

Save time thinking about your project folder structure and focus on what's important for your clients: finishing the project on time.

## Getting started

Fork this repository to start using it.

1. Install npm packages: ```npm install```
2. Run ```ng serve``` for a dev server
3. Navigate to http://localhost:4200/
4. The app will automatically reload if you change any of the source files

## Usage

```
src/
└── app/
    ├── components/
    │   └── example/
    │       ├── example.component.html
    │       ├── example.component.scss
    │       ├── example.component.spec.ts
    │       └── example.component.ts
    ├── directives/
    │   ├── example.directive.spec.ts
    │   └── example.directive.ts
    ├── guards/
    │   ├── example.guard.spec
    │   └── example.guard.ts
    ├── models/
    │   └── example.guard.ts
    ├── modules/
    │   ├── admin/
    │   │   ├── admin-routing.module.ts
    │   │   └── admin.module.ts
    │   ├── dashboard/
    │   │   ├── dashboard-routing.module.ts
    │   │   └── dashboard.module.ts
    │   ├── home/
    │   │   ├── home-routing.module.ts
    │   │   └── home.module.ts
    │   └── site/
    │       ├── site-routing.module.ts
    │       └── site.module.ts
    ├── pages/
    │   ├── admin/
    │   │   └── dashboard/
    │   │       ├── dashboard.page.html
    │   │       ├── dashboard.page.scss
    │   │       ├── dashboard.page.spec.ts
    │   │       └── dashboard.page.ts
    │   ├── site/
    │   │   └── home/
    │   │       ├── home.page.html
    │   │       ├── home.page.scss
    │   │       ├── home.page.spec.ts
    │   │       └── home.page.ts
    ├── pipes/
    │   ├── example.pipe.spec.ts
    │   └── example.pipe.ts
    ├── services/
    │   ├── core/
    │   │   ├── http-error-handler.service.spec.ts
    │   │   └── http-error-handler.service.ts
    │   ├── example.service.spec.ts
    │   └── example.service.ts
    ├── templates/
    │   ├── admin/
    │   │   └── default/
    │   │       ├── default.template.html
    │   │       ├── default.template.scss
    │   │       ├── default.template.spec.ts
    │   │       └── default.template.ts
    │   └── site/
    │   │   └── default/
    │   │       ├── default.template.html
    │   │       ├── default.template.scss
    │   │       ├── default.template.spec.ts
    │   │       └── default.template.ts
    ├── app-routing.module.ts
    ├── app.component.html
    ├── app.component.scss
    ├── app.component.spec.ts
    ├── app.component.ts
    └── app.module.ts
```

### Components

All components that are not a `page` or `template`, should be placed inside the `components` folder.

### Directives

Place all directives inside the `directives` folder.

### Guards

Place all guards inside the `guards` folder.

## Models

Place all models insite the `models` folder.

### Modules

Place all modules inside the `modules` folder. Each module should be placed inside its respective folder with the module itself and the routing module.

### Pages

Place all pages inside the `pages` folder. A page is a specific component that represents a site page. Besides that, each page should be inside its respective scope: admin, site.

### Pipes

Place all pipes inside the `pipes` folder.

### Services

Place all services inside the `services` folder.

### Templates

Place all templates inside the `templates` folder. A template is a specific component that represents a site template. Besides that, each template should be inside its respective scope: admin, site.

## Developing

This project uses [commitlint](https://github.com/conventional-changelog/commitlint) to check if the commits messages meet the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

The commit message pattern:

```
type(scope?): subject  #scope is optional
```

Types list:

* **feat**:  Adds a new feature
* **fix**: Solves a bug
* **chore**: Other changes that don't modify src or test files
* **docs**: Adds or alters documentation
* **style**: Improves formatting, white-space
* **refactor**: Rewrites code without feature, performance or bug changes
* **perf**: Improves performance
* **test**: Adds or modifies tests
* **build**: Affects the build system or external dependencies
* **ci**: Changes CI configuration files and scripts
* **revert**: Reverts a previous commit

## Licensing

The code in this project is licensed under MIT license.
