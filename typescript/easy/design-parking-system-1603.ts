interface Park {
  [index: number]: number;
}
class ParkingSystem {
  private capacity: Park;
  constructor(big: number, medium: number, small: number) {
    this.capacity = {
      1: big,
      2: medium,
      3: small,
    };
  }

  addCar(carType: number): boolean {
    if (this.capacity[carType] <= 0) {
      return false;
    }
    this.capacity[carType]--;
    return true;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
