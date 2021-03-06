app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
    //
/*
    $databaseProvider.name = 'vts';
    $databaseProvider.description = 'VTS database';
    $databaseProvider.version = '1.0.0';
    $databaseProvider.size = 4 * 1024 * 1024;
*/

    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        //.state('login', { url: "/login", templateUrl: "app/components/login/loginView.html"})
        .state('reminder', { url: "/reminder", templateUrl: "app/components/login/reminderView.html"})
        .state('register', { url: "/register", templateUrl: "app/components/register/registerView.html"})
        .state('home', { url: "/", templateUrl: "app/components/home/homeView.html"})
        .state('profile', { url: "/profile", templateUrl: "app/components/profile/profileView.html"})
        .state('calendar', { url: "/calendar", templateUrl: "app/components/calendar/calendarView.html"})
        .state('dudas', { url: "/dudas/:doubt_id", templateUrl: "app/components/dudas/dudasView.html"})
        .state('avisos', { url: "/avisos", templateUrl: "app/components/avisos/avisosView.html"})
        .state('course', { url: "/course/:course_id", templateUrl: "app/components/course/courseView.html"})
        .state('tutorial', { url: "/tutorial/:tutorial_id", templateUrl: "app/components/tutorial/tutorialView.html"})


        .state('activation', { url: "/activation", templateUrl: "app/components/login/activationView.html"})
        .state('activate', { url: "/activation/:email/:token", templateUrl: "app/components/login/activationView.html"})


        .state('search', { url: "/search/:type/:q/:page", templateUrl: "app/components/search/searchView.html"})


        .state('account', { url: "/account", templateUrl: "app/components/account/accountView.html"})
        .state('account.info',       {url: '/info',views: {'account': { templateUrl: 'app/components/account/accountInfoView.html'}}})
        .state('account.email',       {url: '/email',views: {'account': { templateUrl: 'app/components/account/accountEmailView.html'}}})
        .state('account.pass',       {url: '/pass',views: {'account': { templateUrl: 'app/components/account/accountPassView.html'}}})
        .state('account.notifications',       {url: '/notifications',views: {'account': { templateUrl: 'app/components/account/accountNotificationsView.html'}}})
        .state('account.config',       {url: '/config',views: {'account': { templateUrl: 'app/components/account/accountConfigView.html'}}})
        .state('account.subDudas',       {url: '/SDoubts',views: {'account': { templateUrl: 'app/components/account/accountSuscriptionDudasView.html'}}})
        .state('account.subCourses',       {url: '/SCourses',views: {'account': { templateUrl: 'app/components/account/accountSuscriptionCoursesView.html'}}})

        .state('help', { url: "/help", templateUrl: "app/components/help/helpView.html" })
        .state('help.sobre',       {url: '/sobre',views: {'help': { templateUrl: 'app/components/help/aboutView.html'}}})
        .state('help.faq',          {url: '/faq',views: {'help': { templateUrl: 'app/components/help/faqView.html'}}})
        .state('help.tos',       {url: '/tos',views: {'help': { templateUrl: 'app/components/help/tosView.html'}}})
        .state('help.cookies',       {url: '/cookies',views: {'help': { templateUrl: 'app/components/help/cookiesView.html'}}})
        .state('help.contact',       {url: '/contact',views: {'help': { templateUrl: 'app/components/help/contactView.html'}}})


   // $locationProvider.html5Mode(true);
});