import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (_req: any, res: any) => {
  res.json({ status: "ok" });
});

app.use("/api", router);

export default app;
