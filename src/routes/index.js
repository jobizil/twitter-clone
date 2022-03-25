import requireLogin from "../middlewares/auth.js";
// import {createUserHandler} from "../controller/user.controller.js";
export default function (app) {
	app.get("/status", (req, res) => {
		res.send({
			status: "ok",
			uptime: process.uptime(),
		});
	});
	app.get("/", requireLogin, (req, res) => {
		const payload = {
			title: "Home",
		};
		res.status(200).render("home", payload);
	});
	app.get("/login", (req, res) => {
		res.status(200).render("login");
	});
	app.get("/register", (req, res) => {
		res.status(200).render("register", payload);
	});
	app.post("/register", (req, res) => {
		const user = req.body;
		const { firstName, lastName, username, phoneNumber, password, email } = user;
		const payload = req.body;
		if (firstName && lastName && username && password && email) {
			console.log("User created");
			console.log(user);
		} else {
			payload.error = "Missing fields";
			res.status(400).send("Missing fields");
		}
		res.status(200).render("register", payload);
	});
}
