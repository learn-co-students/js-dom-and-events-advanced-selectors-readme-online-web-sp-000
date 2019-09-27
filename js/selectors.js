// declare your functions here...

// 1st attempt
function paragraphSelector() {
    return $('p');
};

// 2nd attempt
// $(function paragraphSelector() {
//     $('p');
// });

// 3rd attempt
// function paragraphSelector() {
//     $(document).ready(function() {
//         $("p")
//     });
// }

// 4th attempt
// $(document).ready(function paragraphSelector() {
//     $('p');
// });

// 5th attempt
// $(document).ready(function(){
//     $.fn.paragraphSelector = function() {
//         $("p");
//     }
// });

function lastImageSelector() {
    return $('.pics #pic-list img:last');
}

function ninjaBabySelector() {
    return $('.pics #baby-ninja');
}

function divSelector() {
    return $('.pics');
}

function firstListItem() {
    return $('.pics ul li:first-child');
}
