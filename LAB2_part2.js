<!DOCTYPE html>
<html>

<body>

    <script>
        function Students() {
            this.name = 'Mary';
            this.gender = 'Female';
        }

        var studObj = new Students();

        Students.prototype.sayHi = function () {
            alert("Hi");
        };

        var studObj1 = new Students();
        var proto = Object.getPrototypeOf(studObj1); // повертає Students prototype object

        alert(proto.constructor);  //повертає Student function 
    </script>


    <script>
        console.log("-----------------EXAMPLE # 1----------------------------------");


        function Person1(firstName, lastName) {  // создается новый объект Person
            this.firstName = firstName;           // от "this" к новому объекту
            this.lastName = lastName;
        }

        Person1.prototype.getFullName = function () {
            return this.firstName + " " + this.lastName;
        };

        function Student1(studentId, firstName, lastName) {
            this._super.call(this, firstName, lastName);  // функцию конструктора Person через использование вызова,таким образом могут быть установлены свойства имени и фамилии
            this.studentId = studentId;
        }

        Student1.prototype = Object.create(Person1.prototype);

        Student1.prototype.constructor = Student1;

        Student1.prototype._super = Person1; 

        Student1.prototype.getStudentInfo = function () {
            return this.studentId + " " + this.lastName + ", " + this.firstName;
        };

        var student = new Student1("ID: 1", "Samuel", "Smith");// устанавливаем новый объект Student

        console.log(student.getFullName());// вызываем функцию в выводе родительского прототипа "SamuelSmith"

        console.log(student.getStudentInfo());// вызываем функцию в выводе родительского прототипа "ID: 1 Smith, Samuel"
    </script>

    <script>
        console.log("-----------------EXAMPLE # 1 (use EXTENDS)--------------------");


        class Person2 {

            constructor(firstName, lastName) {
                this.firstName = firstName;
                this.lastName = lastName;
            }

            getFullName() {
                return this.firstName + " " + this.lastName;
            }

        }

        class Student2 extends Person2 {

            constructor(studentId, firstName, lastName) {
                super(firstName, lastName);
                this.studentId = studentId;
            }

            getStudentInfo() {
                return this.studentId + " " + this.lastName + ", " + this.firstName;
            }

        }

        var student = new Student2("ID: 1", "Maria", "Jenkins");
        console.log(student.getFullName());
        console.log(student.getStudentInfo());

    </script>


    <script>
        console.log("-----------------EXAMPLE # 2----------------------------------");

        class Person3 {
            constructor(firstname, lastname, age) {
                this.firstname = firstname,
                    this.lastname = lastname
                this.age = age
            }

            fullname() {
                return this.firstname + " " + this.lastname;
            }
        }

        class WorkPlace {
            constructor(organization) {
                this.organization = organization;
            }
        }

        class Employee extends Person3 {
            constructor(firstname, lastname, age, id) {
                super(firstname, lastname, age);
                this.id = id;
            }

        }

        class Manager extends Employee {
            constructor(position) {
                super(position);
                this.position = "MANAGER";
            }
        }

        var emp = new Employee("KLAUDIA", "PRUSAK", 31, 223311);
        var man = new Manager();
        Object.assign(emp, new WorkPlace("CAPGEMINI"));
        console.log("Employee ID: " + (emp.id));
        console.log("Employee Place of Work: " + (emp.organization));
        console.log("Employee name and surname: " + emp.fullname());

        console.log("Has been promoted: " + emp.fullname() + " employee of " + emp.organization + " has got a promotion to the " + man.position);

    </script>
</body>

</html>