'use strict';

describe('Directive: notifier', function() {
    var scope;

    /**
     * Setup
     */

    beforeEach(module('notifier'));

    beforeEach(inject(function($rootScope, $compile) {
        scope = $rootScope;

        $compile(angular.element('<notifier></notifier>'))(scope);
        scope.$digest();
    }));

    /**
     * Tests
     */

    it('should notify', inject(function($rootScope, $timeout) {
        // when
        $rootScope.$broadcast('notify', {
            type: 'error',
            message: 'msg'
        });

        // then
        expect(scope.notification).toBeDefined();

        // when
        $timeout.flush();

        // then
        expect(scope.notification).toBeUndefined();
    }));
});