(function () {
    'use strict';

    angular
        .module('userGitHub')
        .directive('cardUser', cardUser);

    cardUser.$inject = ['userGitHubService'];

    function cardUser(userGitHubService) {
        function linker(scope) {
            userGitHubService.getUser(scope.nickName)
                .then(onSuccess, onError);

            function onSuccess(response) {
                scope.user = response;
                console.log(response);
            }

            function onError(error) {
                console.error(error);
            }
        }

        return {
            scope: {
                nickName: '='
            },
            restrict: 'AE',
            templateUrl: 'components/user-git-hub/card/card.html',
            link: linker
        };
    }
})();