---
title: General Questions
description: Frequently Asked Questions
---

## What is Endor?

Endor is a website that allows you to run server software _inside_ your browser. You can quickly spin up development stacks like LAMP (Linux Apache MySQL and PHP) in a safe and reproducible way.

## What is a Pod?

A pod is the name of the development sandboxes that you can create with Endor. The name is inspired by “coffee pods” and “escape pods”, and we aim to make them easy to use and self-contained. Think of them as a “computers that runs inside your browser”. There are three different types of pods at the moment:

- Virtual Machines: Fully emulated x86 Linux environments. They provide the best compatibility but can be slow.
- Containers: Similar to VMs, provide access to a large array of software distributed in this format.
- Browser-native: These are applications and language runtimes that have been compiled to WebAssembly and run directly in the browser. They have near-native speed but may have some functionality limitations.

Software may be available in more than one format, so you can choose the appropriate pod based on your compatibility and performance needs.

## What is Endor useful for?

Endor can be helpful for when you need a quick, disposable development environment::

- Trying a new version of an app or framework without interfering with your existing setup. For example, you are developing a WordPress plugin and need to test your software with different versions of WordPress. Or you heard about a new web application and you want to set it up in a controlled environment.

- Learning. If you are new to Linux or web development, it can be tricky to get everything installed to get started. Endor provides ready-made environments that you can use right away, helping ease the learning curve. If you mess up, it won’t interfere with your system and you can easily start again.

- Teaching. Endor is a great way to provide students with free, standardized environments, whether it is a conference workshop, a university course or an online tutorial. Everyone starts learning on the same page (literally!)

## What is Endor _not_ useful for?

As a replacement for your day to day development environment. It is a convenient tool that complements it.

## How can I save changes I make?

Currently it is not possible. All changes are lost if you close or reload the browser tab. We plan to add persistence support in the near future, but for now pods are best thought of as temporary development sandboxes.

## Where can I report problems or share suggestions?

You can reach us as described in the [contact us](https://endor.dev/about) section of the site. Make sure to leave your email address if you want us to follow up

## Technical Questions

## What software is included?

We are starting with a LAMP stack (Linux, Apache, MySQL and PHP) but plan to add new stacks and language runtimes in the near future, including Ruby, Python and Java-based ones.

## Can I install new software?

Yes and no. Because there's not yet networking to the outside world the Alpine Linux package manager `apk` will not work normally. A work around is to download the package manually, upload it to the od and install it then.

## How can I upload my files?

You can 'mount' local directories and access their contents from inside the machine. Once mounted, new files added to the directory will not be visible inside the pod, and changes from the pod will not be applied back.

If you mounted a directory on `app` then it will be available writing `/app` in the URL bar of the embedded browser.

## Is it safe?

Pods run inside your browser and by default don't have access to any resources in your machine. You can optionally give permission to access certain directories in your machine to transfer files to the pod. Once you are done with a pod, you can simply close the tab and it will be deleted. No files or code are transmitted to our servers, everything is local to your computer.

## What are the minimum requirements?

Endor is developed and tested on Desktop Chrome. We plan to add support for Firefox, Safari and others.

There are no minimum requirements CPU or memory requirements, but the performance will of course vary.

## What are the known limitations? 

The following are some of the limitations of pods. 

- Can be slow: Depending on the type of pod (emulated or browser-native) applications may run an order of magnitude slower.
- Cannot save state: There is no persistence. Any changes will be lost if you close or reload the browser tab.
- No direct access to the outside world:  Networking is restricted, so it is not possible to make arbitrary connections to other machines on the internet.

We are working on addressing them to make Endor even more useful. For example, it is already possible to clone repositories on GitHub
