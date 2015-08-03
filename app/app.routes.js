app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/components/login/loginView.html"
        })
        .state('home', {
            url: "/home",
            templateUrl: "app/components/home/homeView.html"
        })
        .state('course', {
            url: "/course",
            templateUrl: "app/components/course/courseView.html"
        })
});