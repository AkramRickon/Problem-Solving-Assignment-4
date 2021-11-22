
//Problem 1
// Convert Seer to Mon

function seerToMon(seer) {
    if (typeof (seer) != 'number') {
        return 'Please enter a number as  input';
    }
    else if (seer < 0) {
        return 'Invalid input';
    }
    return (seer / 40);
}
console.log(seerToMon(2000));




//problem 2
// Given the price of shirt , Pant and shoe.Calculate total cost based on Quantity of each item

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    if (typeof (shirtQuantity) !== 'number' || typeof (pantQuantity) !== 'number' || typeof (shoeQuantity) !== 'number') {
        return 'Please enter numbers as input';
    }

    else if (shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0) {
        return 'Invalid input';
    }

    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
    let totalPrice = (shirtPrice * shirtQuantity) + (pantPrice * pantQuantity) + (shoePrice * shoeQuantity);

    return totalPrice;
}
console.log(totalSales(0, 1, 1));





// problem 3
// Given a number of shirts.You have to calculate total cost including delivery charge of each shirt.

function deliveryCost(tShirt) {
    if (typeof (tShirt) !== 'number') {
        return 'please enter a number as input';
    }
    else if (tShirt < 0) {
        return 'Invalid input';
    }

    // Delivery cost for first 100 tShirt is stored at 0 index of the array
    // Delivery cost for 101-200 tShirt is stored at 1st index of the array
    // Delivery cost for more than 200 tShirt is stored at 2nd index of the array

    const deliveryCost = [100, 80, 50];
    let totalCost;

    if (tShirt <= 100) {
        return totalCost = deliveryCost[0] * tShirt;
    }
    else if (tShirt <= 200) {
        return totalCost = (deliveryCost[0] * 100) + (deliveryCost[1] * (tShirt - 100));
    }
    else {
        return totalCost = (deliveryCost[0] * 100) + (deliveryCost[1] * 100) + (deliveryCost[2] * (tShirt - 200));
    }
}
console.log(deliveryCost(250));





// problem 4
// Given an array of names Return the first 5 length name from the given array
 
const friends = ['Momo', 'Redowan', 'Mim', 'Hossain', 'Akram', 'Tareq', 'Murad'];

function perfectFriend(friends) {

    if (friends.length === 0) {
        return 'Please Provide an array of names';
    }

    let bestFriend = '';
    for (let friend of friends) {
        if (friend.length === 5) {
            bestFriend = friend;
            break;
        }
    }
    if (bestFriend.length === 0) {
        return 'Sorry no name of length 5 is found';
    }
    else return bestFriend;
}

console.log(perfectFriend(friends));