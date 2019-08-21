// declare your functions here...
function paragraphSelector() {
    return $('p');
}

function lastImageSelector() {
    let images = $('img');
    return images.last()
}

function ninjaBabySelector() {
    let images = $('img');
    return images.first()
}

function divSelector() {
    return $('.pics');
}

function firstListItem() {
    return $('ul li').first()
}
