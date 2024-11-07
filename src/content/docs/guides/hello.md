---
title: Hello World!
description: Step by step guide for running your first PHP program
---

## Running your first PHP app

The LAMP Pod comes pre-configured with everything you need to run PHP applications. You can run your PHP code simply by creating a file under the Apache `htdocs` directory. Click on the terminal icon and type the following:

```shell
cd /var/www/localhost/htdocs/
mkdir -p example
cd example
echo '<?php echo "Hello World!"; ?>' > index.php
```

Now you can enter `/example/` in the URL bar of the inline browser and should see the results

## Adding files from your computer

You can access local files from your computer by adding folders using the sidebar tool. By default, the first folder you add will be accessible from the terminal in the `/var/www/localhost/htdocs/app` and from the inline browser in the /app URL.