export default class custonError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}
