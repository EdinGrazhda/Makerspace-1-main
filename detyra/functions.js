let users = [
    {
        _id: '650c726ef7e50871bcfba0c3',
        index: 0,
        guid: 'be670100-24e5-4a7f-8906-3e660ea29841',
        isActive: false,
        balance: '$1,666.05',
        picture: 'http://placehold.it/32x32',
        age: 25,
        eyeColor: 'brown',
        name: 'Lila Castro',
    },
    {
        _id: '650c726e8b34e81136f58c13',
        index: 1,
        guid: '67f26eb4-4a3f-413d-983b-ec8204531d54',
        isActive: false,
        balance: '$1,262.87',
        picture: 'http://placehold.it/32x32',
        age: 37,
        eyeColor: 'green',
        name: 'Keith Nelson',
    },
    {
        _id: '650c726ecd96ebd73128384f',
        index: 2,
        guid: 'd916e7db-448f-4214-9f21-fa40a3488e59',
        isActive: true,
        balance: '$3,126.59',
        picture: 'http://placehold.it/32x32',
        age: 35,
        eyeColor: 'brown',
        name: 'Pacheco Reese',
    },
    {
        _id: '650c726e52766d770ac0767f',
        index: 3,
        guid: 'aed97931-85ef-4962-8552-d064a24ebe08',
        isActive: true,
        balance: '$1,740.79',
        picture: 'http://placehold.it/32x32',
        age: 30,
        eyeColor: 'green',
        name: 'Peck Boyd',
    },
    {
        _id: '650c726e6a8b6511a06b548b',
        index: 4,
        guid: 'db02219f-479c-4b32-ab40-b93df3a8ebd8',
        isActive: false,
        balance: '$3,311.48',
        picture: 'http://placehold.it/32x32',
        age: 32,
        eyeColor: 'blue',
        name: 'Lenore Taylor',
    },
];


function sum (x,y){
    let s = x + y ;
    return s;
}
result=sum(4,5);
console.log(result);

// function sum(arr){
//     for(let user of arr){
//         console.log(`My name is ${user.name} and im ${user.age} years old`);
//     }
// }

console.log(sum(users));

module.exports={sum};