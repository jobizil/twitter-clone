import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res) => {
	const payload = {
		title: "Home",
	};
	res.status(200).render("home", payload);
});
export default app;
