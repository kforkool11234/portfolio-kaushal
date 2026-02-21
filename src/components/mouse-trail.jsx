import { useEffect, useRef } from 'react';

export const MouseTrail = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);

		const HISTORY = 22; // max trail points — caps streak length
		const MIN_DIST = 4; // ignore mouse moves smaller than this (px)
		const trail = [];
		let lastX = -999;
		let lastY = -999;
		let speed = 0;
		let frameCount = 0;

		const onResize = () => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		};

		const onMouseMove = (e) => {
			const px = lastX === -999 ? e.clientX : lastX;
			const py = lastY === -999 ? e.clientY : lastY;
			const dx = e.clientX - px;
			const dy = e.clientY - py;
			const dist = Math.sqrt(dx * dx + dy * dy);

			// Skip tiny jitter — prevents duplicate points collapsing the polygon
			if (dist < MIN_DIST && trail.length > 0) return;

			speed = dist;
			trail.push({ x: e.clientX, y: e.clientY });
			if (trail.length > HISTORY) trail.shift();
			lastX = e.clientX;
			lastY = e.clientY;
		};

		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('resize', onResize);

		const drawComet = (points, maxHalfW) => {
			if (points.length < 2) return;

			const tail = points[0];
			const head = points[points.length - 1];

			// Guard: if trail has no spread, skip drawing to avoid degenerate gradient
			const spanDx = head.x - tail.x;
			const spanDy = head.y - tail.y;
			if (Math.sqrt(spanDx * spanDx + spanDy * spanDy) < 2) return;

			const left = [];
			const right = [];

			for (let i = 0; i < points.length; i++) {
				const t = i / (points.length - 1);
				const halfW = Math.pow(t, 0.5) * maxHalfW;

				let dx, dy;
				if (i < points.length - 1) {
					dx = points[i + 1].x - points[i].x;
					dy = points[i + 1].y - points[i].y;
				} else {
					dx = points[i].x - points[i - 1].x;
					dy = points[i].y - points[i - 1].y;
				}
				const len = Math.sqrt(dx * dx + dy * dy) || 1;
				const nx = (-dy / len) * halfW;
				const ny = (dx / len) * halfW;

				left.push({ x: points[i].x + nx, y: points[i].y + ny });
				right.push({ x: points[i].x - nx, y: points[i].y - ny });
			}

			ctx.beginPath();
			ctx.moveTo(left[0].x, left[0].y);
			for (let i = 1; i < left.length; i++) ctx.lineTo(left[i].x, left[i].y);
			for (let i = right.length - 1; i >= 0; i--) ctx.lineTo(right[i].x, right[i].y);
			ctx.closePath();

			const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
			grad.addColorStop(0, 'rgba(100, 210, 255, 0)');
			grad.addColorStop(0.5, 'rgba(140, 220, 255, 0.35)');
			grad.addColorStop(1, 'rgba(210, 245, 255, 0.88)');
			ctx.fillStyle = grad;
			ctx.fill();
		};

		let rafId;

		const draw = () => {
			ctx.clearRect(0, 0, width, height);
			frameCount++;

			if (trail.length >= 2) {
				drawComet(trail, 8);
				if (trail.length > 1 && frameCount % 2 === 0) trail.shift();
			}

			// Dot — always at cursor
			if (lastX !== -999) {
				const a = 0.65 + Math.min(speed / 30, 1) * 0.3;
				const g = ctx.createRadialGradient(lastX, lastY, 0, lastX, lastY, 13);
				g.addColorStop(0, `rgba(230, 248, 255, ${a})`);
				g.addColorStop(0.45, `rgba(100, 210, 255, ${a * 0.6})`);
				g.addColorStop(1, 'rgba(100, 210, 255, 0)');
				ctx.beginPath();
				ctx.arc(lastX, lastY, 13, 0, Math.PI * 2);
				ctx.fillStyle = g;
				ctx.fill();
			}

			rafId = requestAnimationFrame(draw);
		};

		draw();

		return () => {
			cancelAnimationFrame(rafId);
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('resize', onResize);
		};
	}, []);

	return <canvas ref={canvasRef} className='mouse-trail-canvas' />;
};
