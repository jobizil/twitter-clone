import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import app from "./src/app.js";
import config from "./src/config/index.js";
const { port } = config;
import routes from "./src/routes/index.js";

const PORT = Number(port) || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}.`);
	routes(app);
});
