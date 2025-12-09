export class ValidationResult {
  constructor(input, valid) {
    this.input = input;
    this.valid = valid;
    this.checkedAt = new Date().toISOString();
  }
}
