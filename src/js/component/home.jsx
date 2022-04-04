import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selected, setSelected] = "red";

	return (
		<div>
			<div
				id="red"
				className="bg-danger"
				onClick={() => {
					setSelected("red");
				}}>
				{" "}
			</div>
			<div
				id="yellow"
				className="bg-warning"
				onClick={() => {
					setSelected("yellow");
				}}>
				{" "}
			</div>
			<div
				id="green"
				className="bg-sucess"
				onClick={() => {
					setSelected("green");
				}}>
				{" "}
			</div>
			{selected == "red" ? <h1> {selected} </h1> : <h1> X </h1>}
			{selected == "red" ? <h1> {selected} </h1> : <h1> X </h1>}
			{selected == "red" ? <h1> {selected} </h1> : <h1> X </h1>}
		</div>
	);
};

export default Home;
