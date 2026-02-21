export const TextHover = ({ text, className }) => {
	return (
		<p className={`hover-text ${className}`}>
			{text.split('').map((char, index) => (
				<span
					key={index}
					data-char={char}
					style={{
						'--delay': `${0.1 * index}s`,
					}}
				>
					{char}
				</span>
			))}
		</p>
	);
};
