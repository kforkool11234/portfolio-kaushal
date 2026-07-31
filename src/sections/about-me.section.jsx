import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Education',
		items: [
			{
				title: 'Bachelor of Technology',
				place: 'Vellore Institute of Technology',
				timePeriod: '2022-2026',
				description: '',
			},
		],
	},
	{
		title: 'Certification',
		items: [
			{
				title: 'Oracle Generative AI Professional',
				place: 'Online',
				timePeriod: '2025-2027',
				description: " ",
			},
			{
				title: 'Informatica GenAi Hackathon',
				place: 'Online',
				timePeriod: 'january 2025-March 2025',
				description: " ",
			}
		],
	},

	{
		title: 'Club Experience',
		items: [
			{
				title: 'Web Lead',
				place: 'Cyber Security Club VIT',
				timePeriod: '2024 - 2025',
				description: (
					<ul>
						<li>
							Led a technical team to <strong>deploy and maintain</strong> the official club website.
						</li>
						<li>
							Architected and managed a <strong>centralized online registration system</strong> for club events, streamlining the onboarding process for hundreds of participants.
						</li>

					</ul>
				),
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						I'm <strong>Kaushal Sengupta</strong>, a Full Stack Developer & AI Enthusiast.
					</p>
					<p>
						I specialize in the <strong>MERN Stack</strong> and <strong>Django</strong>.
						Over the past <strong>three years</strong>, I've been building scalable web applications
						and integrating <strong>Generative AI</strong> to create smarter, more intuitive digital experiences.
					</p>
					<p>
						I love solving complex problems and experimenting with new tech. When I'm not coding,
						you'll probably find me at a <strong>hackathon</strong>, turning caffeine into a functional
						prototype in a single weekend.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
