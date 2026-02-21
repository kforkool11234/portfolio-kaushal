export const SectionTitle = ({ title, subTitle }) => {
	return (
		<div className='title'>
			<p className='primary-text'>{title}</p>
			{subTitle && <p className='secondary-text'>{subTitle}</p>}
		</div>
	);
};
