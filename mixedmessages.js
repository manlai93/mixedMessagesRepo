// MixedMessages

let person = ['I ','You ','We ', 'They ', 'He ', 'She '];
let activity = ['like ', 'eat ', 'have ', 'taste ', ];
let meal = ['burger', 'hot dog', 'sandwich', 'taco', 'burrito', 'steak' ];

let mixedMessage = [];

function selectMessage (arr)
{  
    mixedMessage.push(arr[Math.floor(Math.random()*arr.length)]);
}

function mixMessages()
{
    selectMessage(person);
    selectMessage(activity);
    selectMessage(meal);
    return mixedMessage;
}
console.log(mixMessages().join(''));
