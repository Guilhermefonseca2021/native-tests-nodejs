import express, { Express, Request, Response, Application } from "express";
import { ListManager } from "./ListManager";

const app: Application = express();
const port = process.env.PORT || 3333;

app.use(express.json())
app.get("/", (req: Request, res: Response) => {
  const listManager = new ListManager(5);

  listManager.addItem("Apple");
  listManager.addItem("Banana");
  listManager.addItem("Cherry");

  console.log("Remaining capacity:", listManager.capacity()); // 2

  console.log('Is "Banana" in the list?', listManager.findItem("Banana")); // true

  listManager.removeItem("Banana");

  console.log('Is "Banana" still in the list?', listManager.findItem("Banana")); // false

  console.log("Current items:", listManager.getAllItems()); // ['Apple', 'Cherry']
  res.send(listManager);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
