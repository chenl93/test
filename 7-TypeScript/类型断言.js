function getName(animal) {
    return animal.name;
}
function isFish(animal) {
    //if (typeof animal.swim === "function") { //Property 'swim' does not exist on type 'Cat | Fish'. Property 'swim' does not exist on type 'Cat'.
    if (typeof animal.swim === "function") {
        return true;
    }
    return false;
}
