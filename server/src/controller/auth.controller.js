import errorThrower from "../helper/errorThrower.js";

class AuthController {
  async login(request, response, next) {
    try {
      //   const { email, password } = request.body;
      //   if (!email || !password) {
      //     throw errorThrower(400, "please provide the email and password");
      //   }
      response
        .status(200)
        .send({ status: "success", message: "login successfull" });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
