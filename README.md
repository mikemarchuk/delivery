# Delivery App

## About
Project implemented using ReactJS and Symfony (it is my first experience of building
applications using these frameworks). Database engine is MySQL.

## Installation
1. Clone source code from [github repository](https://github.com/mikemarchuk/delivery.git)
2. Set `app.google.api.key` in `parameters` section in the `[path_to_project\config\services.yaml]` file.
This setting is used in the `AddressAutocomplete` component.
2. Go to project directory and make the next actions:
   - execute `composer install` command
   - execute `npm install` command
3. Create `delivery` database and use dump `[path_to_project\backup\delivery.sql]` file to fill it.
4. Set correct `DATABASE_URL` (user and password) in `[path_to_project\.env]` file.
5. Go to project directory and run application using `symfony server:start` command.
6. Open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) in browser.
7. Use application.

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)
