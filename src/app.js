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
	origin: function (origin, callback) {
		if (!origin || whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
};

app.use(cors(corsOptions));

// const static_path = path.join(__dirname, "..");
// app.use(express.static(static_path));
app.use(express.json());
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

app.get("/login/:em/:pass", async (req, res) => {
	try {
		const { em, pass } = req.params;
		const result = await userModel.findOne({ email: em, pass: pass });
		console.log(result);
		return res.json("good");
	} catch (err) {
		console.log(err.message);
		res.status(500).send("Server Error");
	}
});

app.listen(port, () => {
	console.log(`Server is running on port no ${port}`);
});
