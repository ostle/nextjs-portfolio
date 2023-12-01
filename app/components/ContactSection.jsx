import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactSection = () => {
	return (
		<section
			id='contact'
			className='mt-12 my-12 md:my-16 py-24 relative flex items-center justify-center'
		>
			<div className='absolute w-96 h-96 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900 to-transparent rounded-full blur-lg -top-6 left-1/2 transform -translate-x-1/2'></div>
			<div className='z-10 text-center'>
				<h5 className='text-2xl font-bold text-white my-4'>
					Let&apos;s Connect
				</h5>
				<p className='text-[#ADB7BE] mb-6 max-w-md'>
					I&apos;m currently looking for new opportunities, my inbox
					is always open. Whether you have a question or just want to
					say hi, I&apos;ll try my best to get back to you!
				</p>
				<div className='socials flex items-center justify-center gap-4'>
					<a
						href='https://www.github.com/ostle'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src={GithubIcon} alt='github-icon' />
					</a>
					<a
						href='https://www.linkedin.com/in/leonel-ostrower-30aa781b9/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<Image src={LinkedinIcon} alt='github-icon' />
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
