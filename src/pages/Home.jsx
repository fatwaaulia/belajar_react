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
					{
						nama_orang.map(nama => (
							<div className="col-12 col-md-6 col-lg-4 col-xl-3" key={ nama }>
								<div className="card">
									<div className="card-body">
										<h1>{ nama }</h1>
									</div>
								</div>
							</div>
						))
					}
				</div>
			</div>
			<Footer />
		</>
	)
}

