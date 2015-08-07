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
        .state('reminder', {
            url: "/reminder",
            templateUrl: "app/components/login/reminderView.html"
        })
        .state('register', {
            url: "/register",
            templateUrl: "app/components/register/registerView.html"
        })
        .state('home', {
            url: "/",
            templateUrl: "app/components/home/homeView.html"
        })
        .state('dudas', {
            url: "/dudas",
            templateUrl: "app/components/dudas/dudasView.html"
        })
        .state('course', {
            url: "/course",
            templateUrl: "app/components/course/courseView.html"
        })

        .state('welcome', {
            url: "/welcome",
            templateUrl: "app/components/account/welcomeView.html"
        })
        .state('search', {
            url: "/search",
            templateUrl: "app/components/search/searchView.html"
        })
        .state('account', {
            url: "/account",
            templateUrl: "app/components/account/accountView.html"
        })

        .state('account.info',       {url: '/info',views: {'account': { templateUrl: 'app/components/account/accountInfoView.html'}}})
        .state('account.courses',       {url: '/courses',views: {'account': { templateUrl: 'app/components/account/accountCoursesView.html'}}})
        .state('account.email',       {url: '/email',views: {'account': { templateUrl: 'app/components/account/accountEmailView.html'}}})
        .state('account.notifications',       {url: '/notifications',views: {'account': { templateUrl: 'app/components/account/accountNotificationsView.html'}}})
        .state('account.social',       {url: '/social',views: {'account': { templateUrl: 'app/components/account/accountSocialView.html'}}})
        .state('account.config',       {url: '/config',views: {'account': { templateUrl: 'app/components/account/accountConfigView.html'}}})

        .state('help', {
            url: "/help",
            templateUrl: "app/components/help/helpView.html"
        })

});