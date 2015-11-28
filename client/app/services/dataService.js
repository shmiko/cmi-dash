"use strict";

angular.module('app').factory('dataService',
    ['$timeout',
    function ($timeout) {

    var locations = [
        {
            id: 1000,
            name: 'Las Vegas',
            temperature: 55,
            days: 20,
            events: 18,
            todos: 200,
            image: '../material-backgrounds-2/pngs/mb-bg-fb-23.png'
        },
        {
            id: 1001,
            name: 'New York',
            temperature: 53,
            days: 36,
            events: 22,
            todos: 250,
            image: '../material-backgrounds-2/pngs/mb-bg-fb-22.png'
        },
        {
            id: 1002,
            name: 'San Fransisco',
            temperature: 58,
            days: 56,
            events: 40,
            todos: 500,
            image: '../material-backgrounds-2/pngs/mb-bg-fb-20.png'
        },
        {
            id: 1003,
            name: 'Riverside',
            temperature: 39,
            days: 8,
            events: 10,
            todos: 40,
            image: '../material-backgrounds-2/pngs/mb-bg-fb-21.png'
        },
        {
            id: 1004,
            name: 'Yosemite Valley',
            temperature: 32,
            days: 8,
            events: 8,
            todos: 100,
            image: '../material-backgrounds-2/pngs/mb-bg-fb-18.png'
        },
        {
            id: 1005,
            name: 'Black Bear County',
            temperature: 34,
            days: 22,
            events: 12,
            todos: 230,
            image: '../material-backgrounds-2/pngs/mb-bg-fb-17.png'
        },
        {
            id: 1006,
            name: 'Batten Hill',
            temperature: 54,
            days: 20,
            events: 24,
            todos: 420,
            image: '../material-backgrounds-2/pngs/mb-bg-fb-16.png'
        },
        {
            id: 1007,
            name: 'Dalby',
            temperature: 38,
            days: 12,
            events: 8,
            todos: 225,
            image: '../material-backgrounds-2/pngs/mb-bg-fb-15.png'
        }
    ];

    var employees = [
        {
            id: 5000,
            name: 'Jonsey',
            location: 'Riverside',
            image: '../material-avatars/images/Men/Face-5/hair-grey-eyes-blue-green-skin-light.png'
        },
        {
            id: 5001,
            name: 'Johno',
            location: 'Yosemite Valley',
            image: '../material-avatars/images/Men/Face-13/hair-black-eyes-dark-skin-dark.png'
        },
        {
            id: 5002,
            name: 'Lizzy',
            location: 'Black Bear County',
            image: '../material-avatars/images/Women/Face-11/hair-blonde-eyes-blue-green-skin-tanned.png'
        },
        {
            id: 5003,
            name: 'Sammy',
            location: 'Dalby',
            image: '../material-avatars/images/Women/Face-18/hair-brown-eyes-blue-green-skin-tanned.png'
        },
        {
            id: 5004,
            name: 'Johno',
            location: 'Batton Hill',
            image: '../material-avatars/images/Men/Face-18/hair-brown-eyes-dark-skin-tanned.png'
        }
    ];

    var getLocations = function () {
        return $timeout(function () {
            return locations;
        }, 500);
    };

    var getLocation = function (id) {
        var timeout = $timeout(function () {
            //$timeout.cancel(timeout);
            //return undefined;
            for (var i = 0; i < locations.length; i++)
                if (locations[i].id == id)
                    return locations[i];
            return undefined;
        }, 300);

        return timeout;
    };

    var getEmployees = function () {
        return $timeout(function () {
            return employees;
        }, 500);
    };

    var getEmployee = function (id) {
        return $timeout(function () {
            for (var i = 0; i < employees.length; i++)
                if (employees[i].id == id)
                    return employees[i];
            return undefined;
        }, 300);
    };


    return {
        getLocations: getLocations,
        getLocation: getLocation,
        getEmployees: getEmployees,
        getEmployee: getEmployee
    };
}]);