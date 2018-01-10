var app = angular.module("FirstApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/easter", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/easter_cakes.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/karpatka", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Karpatka_with_strawberrys.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/bd_cake", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Birthday_cake.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/cheesecake", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Cheesecake_with_strawberrys.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/choco_cake", {
        template: '<div class="card bg-light" style="width: 40rem;">\n' +
        '    <img class="card-img-top" style="padding: 10px" src="img/Some_cake_with_choco.jpg">\n' +
        '    <div class="card-body">\n' +
        '        <h4 class="card-title">Cream cake</h4>\n' +
        '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
        '        <p class="text-right">$12.00</p>\n' +
        '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
        '    </div>\n' +
        '</div>'

    })
        .when("/plump_cake", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Plump_pie.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/karp_grape", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Karpatka_with_grapes.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/cake_fruits", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Cake_with_fruits.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/bird_milk", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Bird_milk.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/piece_cake", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Strawberrys_karpatka2.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/cake_berries", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/Cheescake_with_berries.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })
        .when("/white_cake", {
            template: '<div class="card bg-light" style="width: 40rem;">\n' +
            '    <img class="card-img-top" style="padding: 10px" src="img/White_cake.jpg">\n' +
            '    <div class="card-body">\n' +
            '        <h4 class="card-title">Cream cake</h4>\n' +
            '        <p class="card-text text-left">Some quick example text to build on the card <br> title and make up the bulk of the card\'s content.</p>\n' +
            '        <p class="text-right">$12.00</p>\n' +
            '        <a href="#" class="btn btn-primary">Add to list</a>\n' +
            '    </div>\n' +
            '</div>'

        })

});