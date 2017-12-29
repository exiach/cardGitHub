(function () {
    'use strict';

    angular
        .module('userGitHub', [])
        .controller('UserGitHubController', UserGitHubController);

    UserGitHubController.$inject = ['userGitHubService'];

    function UserGitHubController(userGitHubService) {
        var vm = this;

        userGitHubService.getUsers()
            .then(onSuccess, onError);
        
        function onSuccess(response) {
            vm.users = response;
            console.log(response);
        }

        function onError(error) {
            console.error(error);
        }
    }
})();