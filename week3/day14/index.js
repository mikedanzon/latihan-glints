import { tambah } from "./function.js";

// tambah(6,5);

class Students {
    constructor(nama, usia, hobby) {
        this.nama = nama;
        this.usia = usia;
        this.hobby = hobby;
    }

    belajar() {
        return `Nama saya ${this.nama}, usia saya ${this.usia} tahun, dan hobby saya ${this.hobby}`;
    }
}

const studentsOne = new Students("Michael Max", 20, "Main Game");
const studentsTwo = new Students("Tiara", 25, "Main hati");
const studentsThree = new Students("Hendro", 35, "Main Main sama kamu");

// console.log(studentsOne.belajar())
// console.log(studentsTwo.nama)
// console.log(studentsThree.hobby)
// console.log(studentsOne.belajar() + "\n" + studentsTwo.belajar() + "\n" + studentsThree.belajar())

class Kelas extends Students {
    constructor(nama, usia, hobby, kelas, jam) {
        super(nama, usia, hobby);
        this.kelas = kelas;
        this.jam = jam;
    }

    belajarKelas() {
        return `${super.belajar()}. Hari ini saya kelas ${this.kelas} jam ${this.jam}.`
    }

    tambahJam() {
        return this.jam++;
    }
}

const studentsFour = new Kelas("Michael", 20, "Belajar", "Biologi", 9);

console.log(studentsFour.belajarKelas())
console.log(studentsFour.jam)
console.log(studentsFour.tambahJam())
console.log(studentsFour.jam)