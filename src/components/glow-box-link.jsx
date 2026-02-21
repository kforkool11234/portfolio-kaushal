export const GlowLink = ({ color, icon, href, ...props }) => {
	return (
		<a
			target='_black'
			href={href}
			className='glow-box glow-link'
			style={{
				'--clr': color,
			}}
			{...props}
		>
			{icon}
		</a>
	);
};
