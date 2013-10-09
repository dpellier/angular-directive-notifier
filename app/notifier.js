'use strict';

angular.module('notifier', []);

angular.module('notifier').directive('notifier', function($timeout) {
    return {
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
        },
        template: '<div class="alert {{notification.type}}" ng-show="notification"'
            + '     style="position: fixed; text-align: center; right: 0; left: 0; width: 50%; margin: auto; z-index: 99;">'
            + '    <button type="button" class="close" ng-click="notification = undefined">&times;</button>'
            + '    {{notification.message}}'
            + '</div>'
    };
});
