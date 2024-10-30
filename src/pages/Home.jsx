import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import reactLogo from '@/assets/img/react.svg';

export default function Home() {
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
					<div className="col-6 col-md-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat amet vero molestiae enim laboriosam, inventore, quisquam iste impedit error aliquid optio cum. A facere molestias earum commodi? Perspiciatis, iste expedita.
					</div>
					<div className="col-6 col-md-6">
						<img src={ reactLogo } className="w-25" alt="React Logo" title="React Logo" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

