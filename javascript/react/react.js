export class InputCell {
  constructor(value) {
    this.value = value;
    this.callbacks = [];
  }

  setValue(value) {
    this.value = value;
    this.callbacks.forEach((callback) => callback.fn());
  }
}

export class ComputeCell {
  constructor(inputCells, fn) {
    this.inputCells = inputCells;
    this.fn = fn;
    this.callbacks = [];
    this.value = fn(inputCells);

    inputCells.forEach((cell) => {
      const updateComputeCell = new CallbackCell(this.setValue.bind(this));
      cell.callbacks.push(updateComputeCell);
    });
  }

  setValue() {
    const newValue = this.fn(this.inputCells);
    if (newValue !== this.value) {
      this.value = newValue;
      this.callbacks.forEach((callback) => {
        callback.values.push(callback.fn(this));
      });
    }
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    const cbIndex = this.callbacks.indexOf(cb);
    if (cbIndex >= 0) {
      this.callbacks.splice(cbIndex, 1);
    }
  }
}

export class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }
}
