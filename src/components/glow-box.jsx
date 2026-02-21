export const GlowBox = ({ color, icon, title }) => {
	return (
		<div className='glow-box-parent'>
			<div className='glow-box-title'>{title}</div>
			<div
				className='glow-box'
				style={{
					'--clr': color,
				}}
			>
				{icon}
			</div>
		</div>
	);
};
