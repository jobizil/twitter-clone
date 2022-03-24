import app from "./src/app.js";
import config from "./src/config/index.js";
const { port } = config;

const PORT = Number(port) || 3000;

app.listen(PORT, () => {
	console.log(`Server is listening on ${PORT}.`);
});
