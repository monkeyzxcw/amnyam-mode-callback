
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Amnyam Mode callback is running");
});

app.post("/huevo/callback", (req, res) => {
  const signature = req.get("X-Huevo-Signature");

  if (!signature) {
    return res.status(401).json({ ok: false, error: "Missing signature" });
  }

  // Signature verification must be implemented
  // according to Huevo's exact hu_hash specification
  // before trusting or processing payment notifications.
  return res.status(501).json({
    ok: false,
    error: "Signature verification is not configured yet"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on ${port}`);
});
