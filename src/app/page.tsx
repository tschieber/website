import Link from 'next/link';

export default function Home() {
    return (
        <main className="main-content">
            <section>
                <div className="container">
                    <div className="hero">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="hero__asset">
                            <path d="M80-680v-80q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v80zm240 560v-80H160q-33 0-56.5-23.5T80-280v-80h80v80h640v-80h80v80q0 33-23.5 56.5T800-200H640v80zM192-520l104-104-56-56L80-520l160 160 56-56zm576 0L664-416l56 56 160-160-160-160-56 56z"/>
                        </svg>
                        <h1>Hey, I&apos;m Tim</h1>
                        <p>a web developer with a strong background in building high-performance, modern, and responsive web applications.</p>

                        <ul className="list-buttons">
                            <li>
                                <Link
                                    href="/pdf/tim-schieber.pdf"
                                    className="button-solid"
                                    target="_blank"
                                    aria-label="Resume">
                                    <span className="button-solid__text">Resume</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 -960 960 960"
                                        className="button-solid__icon">
                                        <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58zM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160z"/>
                                    </svg>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.linkedin.com/in/timschieber/"
                                    className="button-solid"
                                    target="_blank"
                                    aria-label="LinkedIn">
                                    <span className="button-solid__text">LinkedIn</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        className="button-solid__icon">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                    </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <p>I specialize in turning ideas into clean, modern, and responsive digital experiences that engage users and deliver results. With deep expertise in front-end technologies, performance optimization, and seamless UI/UX, I help businesses stand out online and achieve their goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <h2>Core Technical Skills</h2>
                            <ul>
                                <li><strong>HTML/CSS/JavaScript</strong>
                                    <ul>
                                        <li>Component architecture</li>
                                        <li>Templating engines (big fan of <a href="https://mozilla.github.io/nunjucks/" target="_blank">Nunjucks</a>)</li>
                                        <li>Sass</li>
                                    </ul>
                                </li>
                                <li><strong>Modern Frameworks/Libraries</strong>
                                    <ul>
                                        <li>React + Next.js</li>
                                        <li>.NET MVC</li>
                                        <li>Salesforce Lightning</li>
                                        <li>11ty</li>
                                    </ul>
                                </li>
                                <li><strong>Responsive & Accessible Design</strong>
                                    <ul>
                                        <li>Bootstrap</li>
                                        <li>Web Content Accessibility Guidelines (WCAG)</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h2>Tooling & Workflow</h2>
                            <ul>
                                <li><strong>Version Control</strong> &mdash; Git + GitHub/Azure</li>
                                <li><strong>Build Tools</strong> &mdash; Webpack</li>
                                <li><strong>Package Managers</strong> &mdash; npm, Yarn</li>
                                <li><strong>Testing</strong> &mdash; Level Access, Cypress, Sauce Labs</li>
                                <li><strong>Design Tools</strong> &mdash; Figma, Sketch, Adobe XD, Photoshop</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h2>Other Notables</h2>
                            <ul>
                                <li><strong>Responsive Websites</strong> &mdash; Responsive layouts, browser/device debugging</li>
                                <li><strong>DevOps</strong> &mdash; Deployment configuration</li>
                                <li><strong>UI/UX Principles</strong> &mdash; Defining solutions and collaborating with designers</li>
                                <li><strong>Design Systems/Libraries</strong></li>
                                <li><strong>Requirements</strong> &mdash; Working with BSA and QC</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section>
                <div className="container">
                    <h2>Some fun things</h2>
                    <p>
                        <Link href="/working-with-ai">Working with AI</Link>
                    </p>
                </div>
            </section>
        </main>
    )
}