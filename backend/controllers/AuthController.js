const passport = require("passport");
const User = require("../models/User");

module.exports.signup = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password)
      return res.status(400).json({ error: "All fields are required" });

    const user = new User({ email, username });
    const newUser = await User.register(user, password);

    req.login(newUser, (err) => {
      if (err) return res.status(500).json({ error: "Login after signup failed" });

      res.status(201).json({
        success: true,
        user: { id: newUser._id, email: newUser.email, username: newUser.username },
      });
    });
  } catch (err) {
    if (err.name === "UserExistsError")
      return res.status(409).json({ error: "Email or username already exists" });
    res.status(500).json({ error: "Signup failed" });
  }
};

module.exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ error: "Authentication error" });
    if (!user) return res.status(401).json({ error: "Invalid email or password" });

    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ error: "Login failed" });

      res.json({
        success: true,
        user: { id: user._id, email: user.email, username: user.username },
      });
    });
  })(req, res, next);
};


module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });

    req.session.destroy(() => {
      res.clearCookie("stocktrading.sid");
      res.json({ success: true, message: "Logged out successfully" });
    });
  });
};

module.exports.checkUser = (req, res) => {
  if (!req.isAuthenticated()) return res.status(401).json({ loggedIn: false });

  const user = req.user;
  res.json({
    loggedIn: true,
    user: {
      id: user._id,
      email: user.email,
      username: user.username,
    },
  });
};
