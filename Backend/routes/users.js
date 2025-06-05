router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const users = JSON.parse(fs.readFileSync("data/users.json", "utf-8"));

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.json({
      message: "Login successful",
      token: "fake-jwt-token",
      username: user.username
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});
