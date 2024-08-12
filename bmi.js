class BMICalculator {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }

  kalkulasi() {
    return this.weight / (this.height * this.height);
  }

  category() {
    const bmi = this.kalkulasi();
    if (bmi < 18.5) return "Berat Rendah";
    if (bmi >= 18.5 && bmi < 24.9) return "Berat Normal";
    if (bmi >= 25 && bmi < 29.9) return "Berat Berlebih";
    return "Obesitas";
  }

  tampilkan() {
    const bmi = this.kalkulasi();
    const category = this.category();
    return `BMI: ${bmi.toFixed(2)} (${category})`;
  }
}

const bmi = new BMICalculator(70, 1.75);
console.log(bmi.tampilkan());
