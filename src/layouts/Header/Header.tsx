import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="headMain">
			<div className="mx-auto container flex justify-evenly p-5">
				<Link to={'home'} className="linkItem">
					Home
				</Link>
				<Link to={'home/new'} className="linkItem">
					Create
				</Link>
			</div>
		</div>
	);
};

export default Header;
