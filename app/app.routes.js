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
        .state('avisos', {
            url: "/avisos",
            templateUrl: "app/components/avisos/avisosView.html"
        })
        .state('course', {
            url: "/course/:course_id/:tutorial_id",
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
        .state('suscripcion', {
            url: "/suscripcion",
            templateUrl: "app/components/suscripcion/suscripcionView.html"
        })
        .state('suscripcion.courses',       {url: '/courses',views: {'suscripcion': { templateUrl: 'app/components/suscripcion/suscripcionCoursesView.html'}}})
        .state('suscripcion.dudas',       {url: '/dudas',views: {'suscripcion': { templateUrl: 'app/components/suscripcion/suscripcionDudasView.html'}}})

        .state('account', {
            url: "/account",
            templateUrl: "app/components/account/accountView.html"
        })

        .state('account.info',       {url: '/info',views: {'account': { templateUrl: 'app/components/account/accountInfoView.html'}}})
        .state('account.email',       {url: '/email',views: {'account': { templateUrl: 'app/components/account/accountEmailView.html'}}})
        .state('account.pass',       {url: '/pass',views: {'account': { templateUrl: 'app/components/account/accountPassView.html'}}})
        .state('account.notifications',       {url: '/notifications',views: {'account': { templateUrl: 'app/components/account/accountNotificationsView.html'}}})
        .state('account.social',       {url: '/social',views: {'account': { templateUrl: 'app/components/account/accountSocialView.html'}}})
        .state('account.config',       {url: '/config',views: {'account': { templateUrl: 'app/components/account/accountConfigView.html'}}})

        .state('help', {
            url: "/help",
            templateUrl: "app/components/help/helpView.html"
        })
        .state('help.sobre',       {url: '/sobre',views: {'help': { templateUrl: 'app/components/help/aboutView.html'}}})
        .state('help.faq',       {url: '/faq',views: {'help': { templateUrl: 'app/components/help/faqView.html'}}})
        .state('help.tos',       {url: '/tos',views: {'help': { templateUrl: 'app/components/help/tosView.html'}}})
        .state('help.cookies',       {url: '/cookies',views: {'help': { templateUrl: 'app/components/help/cookiesView.html'}}})
        .state('help.contact',       {url: '/contact',views: {'help': { templateUrl: 'app/components/help/contactView.html'}}})

});