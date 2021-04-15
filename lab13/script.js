/*
// get va set
let student = {
    name = "cuong",
    get age() {
        return 25;
    },
    set age(value) {
        if (15 < value && value < 25) {
            this._age = value;
        } else {
            console.log("tuoi khong hop le");
        }
    }
};

// tao obj moi
function student2(name, age, phone) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.hello = function () {
        console.log("hello" + this.name);
    }
    this.toString = function () {
        console.log("sting" + this.name);
    }
}
let cuong = new student2("cuong", 25, 0354114);
console.log(cuong());
*/
/*
// Viết hàm khởi tạo Weapon(name, type, damage) khởi tạo các object weapon
function Weapon(name, type, damage, speed) {
    // VD
    // name = Thợ Săn
    // type = Súng
    // damage = 1000
    // speed = 1.5
}
*/
// 1. Thêm phương thức toString() cho Weapon trả về loại - tên vũ khí. VD: Súng Thợ Săn
/*
function Weapon(name, type, damage, speed) {
    this.name = "Thợ Săn";
    this.type = "Súng";
    this.damage = 1000;
    this.speed = 1.5;
    this.toString = function () {
        console.log( "ten vu khi" + this.type + this.name)
    }
}

// 2. Thêm phương thức valueOf() cho Weapon trả về damage * speed

function Weapon(name, type, damage, speed) {
    this.name = "Thợ Săn";
    this.type = "Súng";
    this.damage = 1000;
    this.speed = 1.5;
    this.valueOf = function () {
        console.log( "chi so tan cong: " + (this.dame * this.speed))
    }
}

// Viết hàm khởi tạo Character(name, level, weapon) khởi tạo các object character, weapon là một object được tạo từ Weapon()
/*
function Character(name, level, weapon) {
    // VD
    // name = phoebe
    // level = 1
    // weapon = sungThoSan
}
*/

/*
function Character(name, level, weapon) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.attack = function () {
        console.log("sat thuong gay ra: " + this.weapon.valueOf());
    };
    this.changeWeapon = function (newWeapon) {
        this.weapon = newWeapon;
    }
}
let phoebe = new Character("sung tho", 10, SungThoSan)
// 3. Thêm phương thức attack() cho Character in ra lượng sát thương gây ra tương ứng với weapon damage và speed

// 4. Thêm phương thức changeWeapon(newWeapon) cho Character thay đổi weapon cho character tương ứng với tham số newWeapon
*/
// Viết hàm khởi tạo Calculator(), có các phương thức:
// get(a, b) nhận vào 2 số a, b lưu vào 2 prop a, b tương ứng
// add() trả về tổng a + b
// sub() trả về hiệu a - b
// div(), mul(), rem(), exp(), … trả về kết quả phép tính tương ứng

// Làm thế nào để cho phép gọi hàm theo chuỗi
// VD cal.get(4,5).add(); // 9
/*
function Calculator() {
    this.get = function (a, b) {
        this.a = a;
        this.b = b;
        return this;
    }
    this.add = function () {
        return this.a + this.b;
    }
    this.sub = function () {
      return this.a - this.b;
    };
}


let cal = new Calculator();
cal.get(5, 6);
cal.add();
*/
// Viết hàm tạo Counter(count), count mặc định = 0, và các phương thức
// up() tăng count lên 1
// down() giảm count 1
// get() in ra count hiện tại

function Counter(count) {
    this.count = count || 0;
  this.up = function () {
      this.count++;
      return this;
  };
  this.down = function () {
      this.count--;
      return this;
  };
  this.get = function () {
      console.log("count hien tai" + this.count);
      return this;
  };
};

// Làm thế nào để cho phép gọi hàm theo chuỗi VD counter.up().up().get().down().get();
