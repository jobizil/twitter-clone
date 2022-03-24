import dotenv from "dotenv";
dotenv.config();
export default {
	env: process.env.NODE_ENV,
	port: process.env.PORT,
	database: {
		development: process.env.DB_URI_DEV,
		test: process.env.DB_URI_TEST,
		production: process.env.DB_URI_PROD,
	},

	cloudName: process.env.CLOUD_NAME,
	apiKey: process.env.API_KEY,
	apiSecret: process.env.API_SECRET,

	bcryptSalt: process.env.BCRYPT_SALT,

	globalSecret: process.env.GLOBAL_SECRET,
	jwt_expire: process.env.JWT_EXPIRE,
	issuer: process.env.ISSUER,
	jwt_cookie_expire: process.env.JWT_COOKIE_EXPIRE,
	cookie_secret: process.env.COOKIE_SECRET,
	CLIENT_URL: process.env.CLIENT_URL,

	accessTokenExpire: "50m",
	refreshTokenExpire: "1y",
	// publicKey: process.env.PUBLIC_KEY,
	privateKey: process.env.PRIVATE_KEY,

	SMTP_HOST: process.env.SMTP_HOST,
	SMTP_PORT: process.env.SMTP_PORT,
	SMTP_EMAIL: process.env.SMTP_EMAIL,
	SMTP_PASSWORD: process.env.SMTP_PASSWORD,
	FROM_EMAIL: process.env.FROM_EMAIL,
	FROM_NAME: process.env.FROM_NAME,
};
