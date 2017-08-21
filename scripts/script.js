// JavaScript source code

//$(document).ready(function () {
//    console.log("Sorority Slayers!");
//    alert("Sorority Cholas!");
//});

(function () {

    var app = angular.module('slayApp', []);
    
    app.controller('SlayController', function () {
        // is this where i would hard-code bios, episodes, bts?
        // example below: gems
        // dont' forget to use ng-repeat to display your chingaderas.
        // i don't think i neeed this.
        //alert("Angular biatch!");

    });

    app.controller('TabController', function () {
        // refer to lesson 2.8
        this.tab = 1;

        this.setTab = function (newValue) {
            this.tab = newValue;
        };

        this.isSet = function (tabName) {
            return this.tab === tabName;
        };
    });

    app.controller('CastAndCrewController', function () {
        // refer to lesson 2.10
        this.items = castAndCrew;
    });

    app.controller('BehindTheScenesController', function () {
        // refer to lesson 2.10
        this.items = behindTheScenes;
    });

    var episodes = [
        {
            season: 1
            , episode: 1
            , name: 'Cannabis Cannibals'
            , description: 'Sorority Slayer School Girl lures a new student Michael to her Alpha sister. The sisters get careless, Johnnie meets her demise, and Michael escapes.'
            , image: 'images/vampire.jpg'
        },
        {
            season: 1
            , episode: 3
            , name: 'Save the Date'
            , description: 'Sorority slayer Cherie and a lonely guy Milton chat via webcam. They schedule to meet in a her apartment complex. He arrives and can\'t find the room number. A cat and mouse game ensue. He has no idea what he\'s being set up for.'
            , image: "images/vampire.jpg"
        },
        {
            season: 1
            , episode: 4
            , name: 'Doll for Nerds'
            , description: 'Sorority Slayer Dolly draws in wannabee theater student Duncan to audition for a drama piece. She hooks him and they meet in the theater alone, Dolly disguised as a hot drama teacher has the student right where she wants him. Fresh for the pickings.'
            , image: "images/vampire.jpg"
        },
        {
            season: 1
            , episode: 6
            , name: 'Initiation Fee'
            , description: 'Sorority Sisters Lavina and Davina meet the demonic school dean Little Rob. He promises a youthful appearance forever if rituals are followed. The final ritual is a slaying, one sister must take out the other to earn the head sorority mistress and forever beauty.'
            , image: "images/vampire.jpg"
        }
    ];

    var castAndCrew = [
        {
            name: 'Abraham Mu&#241oz'
            , credit1: 'Writer'
            , credit2: 'Director'
            , bio: 'Lorem ipsum dolor sit amet risus id volutpat pellentesque. Et tellus nibh. Arcu neque mauris sapiente nullam ullamcorper in mauris est a nibh eu. Aliquam nam dicta. Magna sit convallis. Id donec massa et tempora.'
            , image: 'images/vampire.jpg'
        },
        {
            name: 'Rob Diaz'
            , credit1: 'Writer'
            , credit2: 'Director'
            , bio: 'Lorem ipsum dolor. Sit amet id felis ac magna blandit fusce augue. Fames pellentesque necessitatibus nec orci integer vestibulum mauris vivamus. Nec a eget. Scelerisque nec in. Et est fermentum quia enim imperdiet conubia eu.'
            , image: 'images/vampire.jpg'
        },
        {
            name: 'Jane Doe'
            , credit1: 'Actress'
            , credit2: null
            , bio: 'Lorem ipsum dolor sit amet dui. Nonummy id in. Donec condimentum condimentum at ac volutpat. Est convallis nam. Aliquet justo in. Ut elit mi condimentum vel sed montes in elementum lacinia et lacinia neque amet.'
            , image: 'images/vampire.jpg'
        }
    ]

    var behindTheScenes = [
        {
            image: 'images/vampire.jpg'
        },
        {
            image: 'images/vampire.jpg'
        },
        {
            image: 'images/vampire.jpg'
        },
        {
            image: 'images/vampire.jpg'
        },
    ];

})();