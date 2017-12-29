(function () {
    'use strict';

    angular
        .module('userGitHub', [])
        .controller('UserGitHubController', UserGitHubController);

    UserGitHubController.$inject = [];

    function UserGitHubController() {
        var vm = this;
        vm.message = 'test';
    }
})();