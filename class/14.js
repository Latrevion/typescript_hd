var user = {
    name: 'luke',
    age: 11,
    isLock: false
};
function isLock(user, lock) {
    user.isLock = lock;
    return user;
}
isLock(user, true);
console.log(user);
