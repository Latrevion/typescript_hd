var SexType;
(function (SexType) {
    SexType[SexType["BOY"] = 0] = "BOY";
    SexType[SexType["GIRL"] = 1] = "GIRL";
})(SexType || (SexType = {}));
var user = {
    name: 'luke',
    sex: 1
};
console.log(SexType.GIRL);
