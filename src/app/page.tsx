import { Month } from '@/components/pages/client';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<section>
				<div>
					<Month />
				</div>
			</section>
		</main>
	);
}
