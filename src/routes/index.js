import requireLogin from "../middlewares/auth.js";
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
}
