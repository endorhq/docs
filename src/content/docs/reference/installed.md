---
title: Installed Software
description: Basic reference information about the included software
---

## Linux

Alpine Linux x86 32 bit version 3.20 [https://alpinelinux.org/](https://alpinelinux.org/)

## Apache

Apache web server version 2.4.62 [https://httpd.apache.org/](https://httpd.apache.org/)

How to manage Apache

```shell
# Start the server
service apache2 start
```

```shell
# Stop the server
service apache2 stop
```

```shell
# Restart the server
service apache2 restart
```

Configuration files location

`/etc/apache2/`

Note that to improve performance `.htaccess` is disabled by default. To enable it, change `AllowOverride` to `All` in the appropriate directory sections

Log files

`/var/log/apache2/`

## MySQL

MariaDB version 15.1 [https://mariadb.org/](https://mariadb.org/)

MariaDB is a MySQL-compatible Open Source database.

How to manage MariaDB

```shell
# Start the server
service mysql start
```

```shell
# Stop the server
service mysql stop
```

```shell
# Restart the server
service mysql restart
```

Configuration files location

`/etc/my.cnf`

`/etc/my.cnf.d/`

Log file

`/var/log/messages`

If your application needs to be configured for MySQL, you can use the following information:

Username: `root`
Password: `root`
Port: `3306`
Host: `127.0.0.1`

You can access the database from the terminal line by typing:

```shell
mysql -u root -p
```


## PHP

PHP version 8.3.12 [https://www.php.net/](https://www.php.net/)

PHP is configured using php-fpm. Static requests, such as CSS and images are served by Apache and php-fpm serves the PHP code.

How to manage php-fpm

```shell
# Start the server
service php-fpm83 start
```

```shell
# Stop the server
service php-fpm83 stop
```

```shell
# Restart the server
service php-fpm83 restart
```

Configuration files location for PHP and php-fpm

`/etc/php83`

In particular, you can enable/disable extensions in:

`/etc/php83/php.ini`

Log file

`/var/log/php83/`

## phpMyAdmin
