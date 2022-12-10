module.exports = (name) => {
	let res = "";
	if (name == "Monthly") res = "4 Weeks";
	if (name == "Weekly") res = "1 Week";
	if (name == "EightWeek") res = "8 Weeks";
	if (name == "TwelveWeek") res = "12 Weeks";

	return res;
};
