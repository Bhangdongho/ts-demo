// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
var Employee = /** @class */ (function () {
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log(_this._empName +
                "의 나이는" +
                _this._age +
                "이고, 직업은" +
                _this._empJob +
                "입니다.");
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get/set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// public private protected
var employee1 = new Employee("kim", 20, "소프트웨어개발자");
employee1.empName = "lee";
employee1.printEmp();
