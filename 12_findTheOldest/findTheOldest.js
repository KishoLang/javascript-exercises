const findTheOldest = function(people) {
    const oldestList = people.sort((a, b) => getAge(a.yearOfBirth, a.yearOfDeath) - getAge(b.yearOfBirth, b.yearOfDeath));
    return oldestList[oldestList.length - 1];
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}


// Do not edit below this line
module.exports = findTheOldest;
