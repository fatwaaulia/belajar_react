import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
	const nama_orang = ['Aang', 'Fatwa', 'Sefia', 'Azrul'];

	return (
		<>
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12 text-center mt-5">
						<h1>Home Page</h1>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet vero molestiae enim laboriosam, inventore, quisquam iste impedit error aliquid optio cum. A facere molestias earum commodi? Perspiciatis, iste expedita.
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

