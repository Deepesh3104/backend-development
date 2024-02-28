class ApiRes {
  constructor(message = "Sucess", status, data) {
    this.status = status;
    this.message = message;
    this.data = data;
    this.success = status < 400;
  }
}
export default ApiRes;
