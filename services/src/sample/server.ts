import app from "./app";

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("Start server at port " + PORT);
});
