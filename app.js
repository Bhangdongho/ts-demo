// 변수의 데이터 타입 명시
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "nue";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = "park";
        this.age = 30;
        this.gender = "male";
        this.course = "node.js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름 설정 : " + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName("엘리스");
function getInfo(id) {
    return {
        stdId: id,
        stdName: "lee",
        // age: 20,
        gender: "female",
        course: "javascript",
        completed: true,
    };
}
var std = {
    stdId: 91011,
    stdName: "park",
    age: 30,
    gender: "male",
    course: "node.js",
    completed: true,
};
function setInfo(student) {
    // console.log(student);
}
// setInfo(std);
// console.log(getInfo(5678));
// 함수의 데이터 타입 명시(매개변수, 리턴타입)
function Plus(a, b) {
    return a + b;
}
// void라고 쓰면 아무것도 리턴하지 않게 된다.
// type strOrNum = number | string;
// let numStr: strOrNum = "100";
// let item: number;
// function convertToString(val: strOrNum): string {
//   if (typeof val === "string") {
//     item = 0;
//   } else {
//     item = val;
//   }
//   return String(val);
// }
// function convertToNumber(val: strOrNum): number {
//   return Number(val);
// }
// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));
// let numbers: number[] = [1, 2, 3, 4, 5];
// let fruits: string[] = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
// 배열의 유니온 타입
// let mixedArray: (number | stirng)[] = [1, "two", 3, "four"];
// for (let i = 0; i < mixedArray.length; i++) {
//   console.log(mixedArray[i]);
// }
// let infer = [1, 2, 3]; // 타입 추론
// for (let i = 0; i < infer.length; i++) {
//   console.log(infer[i]);
// }
// let readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
// 튜플 : 타입의 순서가 정해져 있다.
// let greeting: [number, string, boolean] = [1, "hello", true];
// for (let i = 0; i < greeting.length; i++) {
//   console.log(greeting[i]);
// }
// Spread 연산자
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true);
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
