'use strict';

describe('Directive: notifier', function() {
    var scope, element;

    /**
     * Setup
     */

    beforeEach(module('notifierDirective'));
    beforeEach(module('app/notifier.html'));

    beforeEach(inject(function($rootScope, $compile, $httpBackend, $templateCache) {
        scope = $rootScope;
        $httpBackend.whenGET('notifier.html').respond($templateCache.get('app/notifier.html'));

        element = angular.element('<notifier></notifier>');
        $compile(element)(scope);
        scope.$digest();
        $httpBackend.flush();
    }));

    /**
     * Tear Down
     */

    afterEach(inject(function($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
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