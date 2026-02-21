import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '../components/section-title.component';

const projects = [
	{
		title: 'SyncFlow',
		tech: 'React · Node.js · MongoDB · Socket.io',
		description:
			'SyncFlow is a real-time team management app that streamlines multi-project collaboration through a unified digital workspace. It combines Socket.io-powered chat for instant communication with dynamic calendar timelines for precise project planning. It allows teams to manage tasks, track progress, and stay synchronized in one responsive platform.',
		link: 'https://syncflow-git-exp-kforkool11234s-projects.vercel.app/',
		accent: 'rgb(31, 195, 255)',
	},
	{
		title: 'Autonomus QA Agent',
		tech: 'Django · LangChain · Gemini API',
		description:
			'OceanAI is an Autonomous QA Agent that transforms project documentation into executable testing suites. Using Retrieval-Augmented Generation (RAG), it analyzes technical requirements to automatically generate structured test cases and production-ready Selenium scripts. By bridging the gap between static documentation and automated execution, it eliminates manual overhead and ensures high-precision software validation.',
		link: 'https://oceanaigit-9igbmmcnuatqcleffon5g3.streamlit.app/',
		accent: 'rgb(100, 220, 180)',
	},
	{
		title: 'SmartMarks',
		tech: 'Next.js · Supabase · Tailwind',
		description:
			'Developed SmartMarks, a real-time bookmark manager using Next.js 15 (App Router), Supabase (Auth, PostgreSQL, Realtime), and Tailwind CSS. Implemented Google OAuth for authentication, Row Level Security for data privacy, and optimistic UI updates for instant feedback. Deployed on Vercel with environment-based configuration for local and production.',
		link: 'https://bookmarks-delta-ten.vercel.app/',
		accent: 'rgb(155, 100, 255)',
	},

];

const WorkCard = ({ project, isActive }) => {
	return (
		<div
			className={`work-card ${isActive ? 'work-card--active' : ''}`}
			style={{ '--card-accent': project.accent }}
		>
			<div className='work-card__header'>
				<h2 className='work-card__title'>{project.title}</h2>
				<span className='work-card__tech'>{project.tech}</span>
			</div>
			<p className='work-card__desc'>{project.description}</p>
			<a
				className='work-card__link'
				href={project.link}
				target='_blank'
				rel='noreferrer'
			>
				View Project →
			</a>
		</div>
	);
};

export const MyWork = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const itemRefs = useRef([]);

	useEffect(() => {
		const handleScroll = () => {
			const viewportCenter = window.innerHeight / 2;
			let closestIndex = 0;
			let closestDistance = Infinity;

			itemRefs.current.forEach((ref, i) => {
				if (!ref) return;
				const rect = ref.getBoundingClientRect();
				const cardCenter = rect.top + rect.height / 2;
				const distance = Math.abs(cardCenter - viewportCenter);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = i;
				}
			});

			setActiveIndex(closestIndex);
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll(); // set correct card on first render
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section className='my-work' id='my-work'>
			{/* Left: vertically scrollable project list */}
			<div className='my-work__right'>
				{projects.map((project, i) => (
					<div
						key={i}
						ref={(el) => (itemRefs.current[i] = el)}
						className='work-card-wrapper'
					>
						<WorkCard project={project} isActive={i === activeIndex} />
					</div>
				))}
			</div>

			{/* Right: sticky title */}
			<div>
				<SectionTitle title='My' subTitle='WORK' />
			</div>
		</section>
	);
};
