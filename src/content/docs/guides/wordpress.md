---
title: WordPress
description: Step by step guide for running WordPress in Endor
---

## Installing and Running Wordpress

Navigate to [Download WordPress](https://wordpress.org/download/) to download the source code of WordPress to your computer. The file will be named `wordpress-6.7.1.zip` or similar

You can unzip the file locally in your computer.

![Uncompressed directory](wordpress/wordpress-selectdirectory.png)


Next, you need to add the folder to Endor. This means the files will be accessible from inside the Endor pod. To do so you can click on the folder icon on the left of the page, then click on the Add Folder button. A file selection dialog will appear. Select the `wordpress` folder.

![Add folder](wordpress/wordpress-addfolder.png)

A pop up dialog will ask you to confirm you want the browser to have read only access to the folder and its files

![View files permission dialog](wordpress/wordpress-viewfiles.png)

The files are now accessible from inside the Endor pod. If you navigate to the built-in terminal, you will see the files are located inside the app

![List mounted folder contents](wordpress/wordpress-list.png)

Create a wordpress database, using phpMyAdmin or the command line. If you do it from the command line, you need to execute the following command, using `root` as both the username and password.

```shell
mysql -u root -p
```

Then, issue `create database wordpress;` and exit the tool. You are now ready to run the WordPress installer by navigating to `/app/wp-admin/setup-config.php` in the built-in browser.


![Create 'wordpress' database in the command line](wordpress/wordpress-create-database.png)


After pressing 'Let's go!', you will enter the values needed to connect to the database. 

![WordPress setup 1](wordpress/wordpress-setup-1.png)

If all goes well you will see a screen that directs you to run the installation proper:

![WordPress setup 2](wordpress/wordpress-setup-2.png)

In the installation screen you can provide the name for your site as well as an username and password to access the admin section of WordPress.

![WordPress setup 3](wordpress/wordpress-setup-3.png)

IF all goes well, you should see a success screen.

![WordPress setup 4](wordpress/wordpress-setup-4.png)

You can now visit `/app/` in the bundled browser to access your new site.


Change WP_HOME and WP_SITEURL
