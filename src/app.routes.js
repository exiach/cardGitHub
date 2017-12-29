(function () {
    'use strict';
    angular
        .module('CardGitHub')
        .controller('CardGitHubController', CardGitHubController);

    CardGitHubController.$inject = ['$router'];

    function CardGitHubController($router) {
        $router.config([
            {path: '/', redirectTo: '/userGitHub'},
            {path: '/userGitHub', component: 'userGitHub'}
        ]);
    }
})();