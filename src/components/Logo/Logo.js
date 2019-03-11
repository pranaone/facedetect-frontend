import React from 'react';
import Tilt from 'react-tilt';
import pic from './icon.png';
import './Logo.css';


const Logo = () => {
	return (
	 	<div className='ma4 mt0 center'>
	 	<Tilt className="Tilt br2 shadow-2" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
 		<div className="Tilt-inner pa3">
 		<img style={{paddingTop: '5px'}} alt='logo' src={pic}/>
 		</div>
		</Tilt>
	 	</div>
	);
}
export default Logo;
