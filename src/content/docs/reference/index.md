---
title: Endor Reference
description: Basic reference information about how to use Endor
---

# Reference

## Available Software

### Linux

Alpine Linux x86 32 bit version 3.20 [https://alpinelinux.org/](https://alpinelinux.org/)

### Apache

Apache web server version 2.4.62 [https://httpd.apache.org/](https://httpd.apache.org/)

How to start/stop/restart Apache

```shell
# Start the server
$ service apache2 start

# Stop the server
$ service apache2 stop

# Restart the server
$ service apache2 restart
```

Configuration files location

`/etc/apache2/`

Note that to improve performance `.htaccess` is disabled by default. To enable it, change `AllowOverride` to `All` in the appropriate directory sections

Log files

`/var/log/apache2/`

### MySQL

MariaDB is a MySQL-compatible Open Source database.

MariaDB version 15.1 [https://mariadb.org/](https://mariadb.org/)

How to start/stop/restart MariaDB

```shell
# Start the server
$ service mysql start

# Stop the server
$ service mysql stop

# Restart the server
$ service mysql restart
```

Configuration files location

`/etc/my.cnf`

`/etc/my.cnf.d/`

Log file

`/var/log/messages`


### PHP

PHP version 8.3.12 [https://www.php.net/](https://www.php.net/)

PHP is configured using php-fpm. Static requests, such as CSS and images are served by Apache and php-fpm serves the PHP code.

How to start/stop/restart php-fpm

```shell
# Start the server
$ service php-fpm83 start

# Stop the server
$ service php-fpm83 stop

# Restart the server
$ service php-fpm83 restart
```

Configuration files location for PHP and php-fpm

`/etc/php83`

In particular, you can enable/disable extensions in:

`/etc/php83/php.ini`

Log file

`/var/log/php83/`
