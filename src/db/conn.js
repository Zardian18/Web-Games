const mongoose = require("mongoose");
mongoose
	.connect("mongodb://localhost:27017/accountRegister", {
		// useNewUrlParser: true,
		// useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	.then(() => {
		console.log("database created");
	})
	.catch((e) => {
		console.log(e);
	});
