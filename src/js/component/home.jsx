import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState(null);

	return (
		<div className="position-absolute top-50 start-50 translate-middle">
			<div className="traffic-light">
				<div
					onClick={() => setSelected("red")}
					className={
						"light red" + (selected === "red" ? " shine" : "")
					}></div>
				<div
					onClick={() => setSelected("yellow")}
					className={
						"light yellow" + (selected === "yellow" ? " shine" : "")
					}></div>

				<div
					onClick={() => setSelected("green")}
					className={
						"light green" + (selected === "green" ? " shine" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
