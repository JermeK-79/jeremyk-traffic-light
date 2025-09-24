import { useState } from 'react'

import '../../styles/trafficLight.css'

const TrafficLight = () => {
	const [color,setColor] = useState('red');

	const nextColor = () => {
    setColor(prev => {
      if (prev === 'red') return 'yellow';
      if (prev === 'yellow') return 'green';
      return 'red';
    	});
  	};

	
	return (
		<>
            <div className="traffic-light-stem"></div>
            <div className="traffic-light-body">
				<div 
					className={color === "red" ? "light red selected" : "light red"}>
				</div>
				<div 
					className={color === "yellow" ? "light yellow selected" : "light yellow"}>
				</div>
				<div 
					className={color === "green" ? "light green selected" : "light green"}>
				</div>
            </div>
			<div className="text-center mt-3">
        		<button className="btn btn-success" onClick={nextColor}>Change Color</button>
      		</div>
	
		
	
        </>
	);
};
export default TrafficLight;