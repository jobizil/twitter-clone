const createUserHandler = async (req, res) => {
	const user = req.body;
	// const user = new User({ name, email, password });
	try {
		// await user.save();
		res.status(201).send(user);
	} catch (error) {
		res.status(400).send(error);
	}
};
export { createUserHandler };
