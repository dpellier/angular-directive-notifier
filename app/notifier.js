'use strict';

angular.module('notifierDirective', []);

angular.module('notifierDirective').directive('notifier', function($timeout) {
    return {
        templateUrl: 'notifier.html',
        replace: true,
        restrict: 'E',
        link: function(scope) {
            scope.$on('notify', function(event, notification) {
                scope.notification = notification;
                scope.notification.type = 'alert-' + scope.notification.type;

                $timeout(function() {
                    scope.notification = undefined;
                }, scope.notification.duration || 2000);
            });
        }
    };
});
