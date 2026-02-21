export const FloatingButton = ({ label, className, href }) => {
	return (
		<a
			href={href}
			className={`floating-btn ${className}`}
		>
			<div>{label}</div>
			<span></span>
		</a>
	);
};
