import React from "react";

const Footer = () => {
	return (
		<footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
			<div className='container p-6 md:p-12 flex flex-col md:flex-row md:items-center justify-between'>
				<div className='flex flex-col items-center md:flex-row md:items-center'>
					<span className='text-muted mb-2 md:mb-0 mr-4'>OSTLE</span>
					<div className='flex flex-col md:flex-row'>
						<a
							href='https://github.com/ostle'
							target='_blank'
							rel='noopener noreferrer'
							className='footer-link text-gray-300 text-xs mb-2 md:mb-0 md:mr-4'
						>
							Github
						</a>
						<a
							href='https://www.linkedin.com/in/leonel-ostrower-30aa781b9/'
							target='_blank'
							rel='noopener noreferrer'
							className='footer-link text-gray-300 text-xs mb-2 md:mb-0 md:mr-4'
						>
							Linkedin
						</a>
						<a
							href='mailto:leoostrower@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
							className='footer-link text-gray-300 text-xs'
						>
							Email
						</a>
					</div>
				</div>
				<p className='text-slate-700 mt-4 md:mt-0'>
					All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
