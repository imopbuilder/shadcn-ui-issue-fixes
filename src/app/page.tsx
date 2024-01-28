import { AlertDialogDemo } from '@/components/pages/client';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<section>
				<div>
					<AlertDialogDemo />
					<div>
						<p className='text-5xl text-center h-screen'>Hello world 1</p>
						<p className='text-5xl text-center h-screen'>Hello world 1</p>
						<p className='text-5xl text-center h-screen'>Hello world 1</p>
						<p className='text-5xl text-center h-screen'>Hello world 1</p>
						<p className='text-5xl text-center h-screen'>Hello world 1</p>
					</div>
				</div>
			</section>
		</main>
	);
}
