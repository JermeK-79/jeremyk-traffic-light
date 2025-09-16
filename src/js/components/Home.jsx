import React from "react";
import { useState } from "react";
import TrafficLight from "./TrafficLight";

//create your first component
const Home = () => {
	
	return (
		<div className="text-center mt-5">
           
		<TrafficLight />
		
		</div>
	);
};

export default Home;