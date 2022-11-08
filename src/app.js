const exp = require("constants");
const express = require("express");
const app = express();
const path = require("path");
const conn = require("./db/conn");
const userModel = require("./models/model");
require("./models/model");
const cors = require("cors");

const port = process.env.PORT || 3000;

const domainsFromEnv = process.env.CORS_DOMAINS || "";
const whitelist = domainsFromEnv.split(",").map((item) => item.trim());

const corsOptions = {
	origin: "*",
	methods: ["GET", "POST"],
	allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

// const static_path = path.join(__dirname, "..");
// app.use(express.static(static_path));
// app.use(express.json());
// app.use(function (req, res, next) {
// 	res.setHeader("Access-Control-Allow-Origin", "*");
// 	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
// 	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
// 	res.setHeader("Access-Control-Allow-Credentials", true);
// 	next();
// });
app.options(cors());
// app.set("view engine", "hbs");

app.get("/register/:fn/:ln/:pass/:em/:age", (req, res) => {
	const { fn, ln, pass, em, age } = req.params;
	console.log(fn);
	console.log(1);
	console.log(ln);
	console.log(pass);
	console.log(em);
	console.log(age);
	console.log(1);
	const userData = new userModel({
		first_name: fn,
		last_name: ln,
		pass,
		email: em,
	});
	userData
		.save()
		.then((item) => {
			res.json("Details Saved");
			console.log(1);
		})
		.catch((err) => {
			// res.status(400).json("Error");
		});
});

app.get("/login/:em/:pass", (req, res) => {
	try {
		const { em, pass } = req.params;
		// console.log("Email: " + em);
		// console.log("Password: " + pass);
		userModel.findOne({ email: em, pass: pass }, (err, obj) => {
			console.log(obj);
			if (obj !== null) {
				return res.json("success");
			} else {
				return res.json("fail");
			}
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
});

app.listen(port, () => {
	console.log(`Server is running on port no ${port}`);
});
