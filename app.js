const express = require("express");
const app = express();
const port = 3000;

const mainRoutes = require("./src/routes/utility_routes/routes");

// handle data post json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/", mainRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
