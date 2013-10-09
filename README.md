Description
===========
The directive give you an easy way to show some message on top of your application.

The css classes used here are defined in the [Twitter boostrap](http://getbootstrap.com/2.3.2/components.html#alerts) files.

If your project doesn't include this, you'll have to redefined your own alert classes.

Installation
============
You can add this directive as a dependency with bower :
```
"notifier": "git://github.com/dpellier/angular-directive-notifier"
```

Or you can just add directly the script in your application.

Include the script and add the dependency into your app.
```
angular.module('myModule', ['notifier']);
```

Usage
=====

In your html, just add the directive inside your DOM (usually right after body) :
```
<notifier></notifier>
```

The notifier is listening to the 'notify' event.

To make a notification appear, you have to emit a 'notify' event with your message and the type of the notification.
```
$rootScope.$emit('notify', {
  type: 'info',             // type can be 'info', 'success', 'warn' or 'error'
  message: 'your message',
  duration: 2000            // [Optional] default value is 2000
});
```
