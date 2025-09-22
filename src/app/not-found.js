import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="main-content">
            <section>
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-6">
                            <h1>404 - Page Not Found</h1>
                            <p>We could not find the page you were looking for.</p>
                            <Link
                                href="/"
                                className="button-solid"
                                aria-label="Return Home">
                                <span className="button-solid__text">Return Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}