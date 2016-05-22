'use strict';

describe('myApp.GeekQuiz module', function() {

    beforeEach(module('myApp.GeekQuiz'));

    describe('GeekQuiz controller', function(){

        it('should ....', inject(function($controller) {
            //spec body
            var view1Ctrl = $controller('GeekQuizCtrl');
            expect(GeekQuizCtrl).toBeDefined();
        }));

    });
});