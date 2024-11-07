---
title: Laravel
description: Step by step guide for running a Laravel app
---

## Running a Laravel App in Endor

Endor sandboxes have limitations such as lack of network access that make them unsuitable for day to day development. For example, the typical Laravel workflow requires downloading and installing packages. That does not mean the _resulting_ projects cannot be run inside Endor.

For example, in your local machine create a sample Laravel project:

```shell
composer create-project laravel/laravel hello-world
```

You can then access the resulting `hello-world` folder From the browser by adding it in the Folders sidebar section. By default it will be accessible from the /app/ URL, or, alternatively. click on the Visit URL link. Navigating to the `public` folder will bring up the Laravel app. It's that easy!

