const User = require("./users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



//genrenate token
const generateToken =(user)=>{
  const token = jwt.sign({ id: user._id, email: user.email }, "4b94f55522497239f8de28f52a4e5dfb163937ab196b6d4b422298dbe4ffaec6",
    {
      expiresIn: "1h",
    }
  );
  return {
    token,
    user,
  };
 
}

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  // check if user already exists
  const isExist = await User.findOne({ email: email });

  if (isExist) {
    return res.status(400).json({ error: "user already exist" });
  }

  //hash password
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = await User.create({ ...req.body, password: hashedPassword });

  //genrenate token
  const token= generateToken(user)
  res.status(201).json({ token });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  //check if user exist

  let user = await User.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ msg: "invalid credential" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ msg: "invalid credential" });
  }
  
  //generate token
  const token= generateToken(user)

  res.status(201).json({ token });
};

module.exports = { registerUser, loginUser };
