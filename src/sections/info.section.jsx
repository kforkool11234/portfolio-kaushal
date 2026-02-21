import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

import { GlowLink } from '../components/glow-box-link';
import { TextHover } from '../components/text-hover.component';

export const InfoSection = () => {
	return (
		<div className='hero-section'>

			{/* Full-page ripple rings — fixed to viewport center */}
			<span className='ripple-ring' style={{ animationDelay: '0s' }} />
			<span className='ripple-ring' style={{ animationDelay: '2s' }} />
			<span className='ripple-ring' style={{ animationDelay: '4s' }} />
			<span className='ripple-ring' style={{ animationDelay: '6s' }} />

			<p>Hi, I am</p>

			<div className='ripple-origin'>
				<TextHover
					text='Kaushal'
					className='name'
				/>
			</div>

			<p>Full Stack Developer</p>

			<div className='blur'></div>
			<div className='bottom-bar'>
				<GlowLink
					href='https://github.com/kforkool11234'
					color='rgba(255, 255, 255, 0.4)'
					icon={<FaGithub color='rgba(255, 255, 255,0.9)' />}
					aria-label='github'
				/>
				<GlowLink
					href='https://www.linkedin.com/in/kaushal-sengupta-2b4277256/'
					color='rgb(0, 160, 220, 0.6)'
					icon={<FaLinkedinIn color='rgb(0, 160, 220)' />}
					aria-label='linkedin'
				/>
				<GlowLink
					href='mailto:kaushalsubho2005@gmail.com'
					icon={<IoMailOutline color='rgb(18, 122, 209)' />}
					color=' rgb(18, 122, 209,0.7)'
					aria-label='mail'
				/>
			</div>
		</div>
	);
};
