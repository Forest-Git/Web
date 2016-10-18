/**
 * Created by hxsd on 2016/9/30.
 */
var myapp=angular.module("myApp",["ionic"]);
    myapp.config(function($stateProvider,$urlRouterProvider){
//---------------------------------------------------------------------------------------路由
        $stateProvider.state("tabs",{
            url:"/tabs",
            abstract:true,
            templateUrl:"views/tabs/tabs.html"
        }).state("tabs.home",{
                url:"/home",
                views: {
                    "tabs-home":{templateUrl:"views/home/home.html"
                }}
            }).state("tabs.room",{url:"/room?:id:title",views: { "tabs-home":{templateUrl:"views/detail/room.html"}}})
            .state("tabs.kitchen",{url:"/kitchen?:id:title",views: { "tabs-home":{templateUrl:"views/detail/kitchen.html"}}})
            .state("tabs.baby",{url:"/baby?:id:title",views: { "tabs-home":{templateUrl:"views/detail/baby.html"}}})
            .state("tabs.pergnant",{url:"/pergnant?:id:title",views: { "tabs-home":{templateUrl:"views/detail/pergnant.html"}}})
            .state("tabs.appliances",{url:"/appliances?:id:title",views: { "tabs-home":{templateUrl:"views/detail/appliances.html"}}})
            .state("tabs.electron",{url:"/electron?:id:title",views: { "tabs-home":{templateUrl:"views/detail/electron.html"}}})
            .state("tabs.newstyle",{url:"/newstyle?:id:title",views: { "tabs-home":{templateUrl:"views/detail/newstyle.html"}}})
            .state("tabs.brand",{url:"/brand?:id:title",views: { "tabs-home":{templateUrl:"views/detail/brand.html"}}})














            .state("tabs.my-cart",{
            url:"/my cart",
            views: {
                "tabs-mycart":{templateUrl:"views/my cart/mycart.html"
                }}
        }).state("tabs.offers",{
            url:"/offers",
            views: {
                "tabs-offers":{templateUrl:"views/offers/offers.html"
                }}
        }).state("tabs.user",{
            url:"/user",
            views: {
                "tabs-user":{templateUrl:"views/user/user.html"
                }}
        }).state("tabs.more",{
            url:"/more",
            views: {
                "tabs-more":{templateUrl:"views/more/more.html"
                }}
        })
            .state("tour",{
                url:"/tour",
                templateUrl:"views/tour/tour.html",

            })
        $urlRouterProvider.otherwise("/tour")
    })












