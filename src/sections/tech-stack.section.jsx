import { DiMongodb, DiMsqlServer } from 'react-icons/di';
import { FaAws, FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import {
	SiDjango,
	SiDocker,
	SiExpress,
	SiFlask,
	SiMui,
	SiMysql,
	SiRedis,
	SiTailwindcss
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Core Stack I Work With',
		items: [
			{
				title: 'Next JS',
				icon: <TbBrandNextjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'React JS',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},

			{
				title: 'Express JS',
				icon: <SiExpress color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Django',
				icon: <SiDjango color='rgb(9, 188, 100)' />,
				color: 'rgba(9, 188, 100, 0.6)',
			},
			{
				title: 'Flask',
				icon: <SiFlask color='rgba(255, 255, 255, 0.9)' />,
				color: 'rgba(255, 255, 255, 0.35)',
			},

		],
	},
	{
		heading: 'Databases I Use',
		items: [
			{
				title: 'MsSQL',
				icon: <DiMsqlServer color='rgb(230, 50, 42)' />,
				color: 'rgb(241, 83, 75, 0.5)',
			},
			{
				title: 'MongoDB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgb(0, 237, 100, 0.7)',
			},
			{
				title: 'MySQL',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
			{
				title: 'Redis',
				icon: <SiRedis color='rgb(220, 50, 47)' />,
				color: 'rgba(220, 50, 47, 0.6)',
			},
		],
	},
	{
		heading: 'UI & Styling',
		items: [
			{
				title: 'Material UI',
				icon: <SiMui color='rgb(0, 127, 255)' />,
				color: 'rgb(0, 127, 255, 0.6)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgb(6, 182, 212, 0.7)',
			},
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgb(125, 17, 248, 0.75)',
			},
		],
	},
	{
		heading: 'Cloud & DevOps',
		items: [
			{
				title: 'AWS',
				icon: <FaAws color='rgb(255, 153, 0)' />,
				color: 'rgba(255, 153, 0, 0.6)',
			},
			{
				title: 'Docker',
				icon: <SiDocker color='rgb(30, 154, 234)' />,
				color: 'rgba(30, 154, 234, 0.6)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
