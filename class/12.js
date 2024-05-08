var u = {
    name: 'luke',
    age: 20,
    info: function () {
        return "".concat(this.name, "-").concat(this.age);
    },
    book: true
};
console.log(u);
