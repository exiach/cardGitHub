(function () {
    'use strict';

    angular
        .module('userGitHub')
        .service('userGitHubService', userGitHubService);

    userGitHubService.$inject = ['$resource', 'BASE_URL', 'USER_GIT_HUB_URL'];

    function userGitHubService($resource, BASE_URL, USER_GIT_HUB_URL) {
        var services = {
            getUser: getUser,
            getUsers: getUsers
        };

        function getUser(nickName) {
            return $resource(BASE_URL + USER_GIT_HUB_URL + '/' + nickName, {})
                .get()
                .$promise;
        }

        function getUsers() {
            return $resource(BASE_URL + USER_GIT_HUB_URL, {})
                .query()
                .$promise;
        }

        return services;
    }
})();