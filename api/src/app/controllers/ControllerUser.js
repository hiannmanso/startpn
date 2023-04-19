import User from "./../models/user.js";

class ControllerUsers {
  async storage(req, res) {
    const { name, email, password, confirmPassword } = req.body;
    console.log(name, email, password);
    try {
      const response = await User.create({ name, email, password });
      return res.status(200).json({ response });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default ControllerUsers;
