import Link from 'next/link';

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tim Schieber',
    jobTitle: 'Senior Software Developer',
    description: 'Senior Software Developer with 18 years of experience delivering high-performance, accessible, and scalable web applications.',
    url: 'https://www.timschieber.dev/',
    sameAs: [
        'https://www.linkedin.com/in/timschieber/',
    ],
    knowsAbout: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Salesforce Lightning',
        '.NET MVC',
        'Web Accessibility (WCAG)',
        'Core Web Vitals',
    ],
};

export default function Home() {
    return (
        <main className="main-content">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <section data-section="intro">
                <div className="container">
                    <div className="hero">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 -960 960 960"
                            className="hero__asset">
                            <path d="M80-680v-80q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v80h-80v-80H160v80zm240 560v-80H160q-33 0-56.5-23.5T80-280v-80h80v80h640v-80h80v80q0 33-23.5 56.5T800-200H640v80zM192-520l104-104-56-56L80-520l160 160 56-56zm576 0L664-416l56 56 160-160-160-160-56 56z"/>
                        </svg>
                        <h1>Hey, I&apos;m Tim</h1>
                        <p>a Senior Software Developer with over 15 years of experience delivering high-performance, accessible, and scalable web applications.</p>

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

            <section data-section="about">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-9">
                            <p>I love turning ideas into clean, modern, responsive experiences that people actually enjoy using. Over my career, I&apos;ve led development on multi-language global websites serving Ireland, the United Kingdom, France, Germany, Spain, and Japan, taking projects from the first line of code through launch and support with teams of 2&ndash;4 developers. I pair solid front-end fundamentals with AI-assisted workflows to build faster without cutting corners on quality, and I&apos;m always looking for ways to make the end product a little better and the process a little smoother.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section data-section="skills">
                <div className="container">
                    <h2>Technical Skills</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Front-End Technologies</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3, SCSS/Sass</li>
                                <li>JavaScript (ES6+)</li>
                                <li>TypeScript</li>
                                <li>Responsive web design</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h3>Frameworks & Platforms</h3>
                            <ul>
                                <li>React + Next.js</li>
                                <li>Salesforce Lightning</li>
                                <li>.NET MVC</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h3>Tooling & DevOps</h3>
                            <ul>
                                <li>Git, GitHub, Azure DevOps</li>
                                <li>CI/CD pipelines</li>
                                <li>Webpack, npm</li>
                                <li>GitHub Copilot &amp; AI-assisted development</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h3>Testing & Quality</h3>
                            <ul>
                                <li>Unit testing, Cypress</li>
                                <li>Web accessibility (WCAG)</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h3>Performance & Architecture</h3>
                            <ul>
                                <li>Core Web Vitals optimization</li>
                                <li>Design systems</li>
                                <li>JSON / API data handling</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h3>Design & Collaboration</h3>
                            <ul>
                                <li>Figma, Sketch</li>
                                <li>Adobe XD, Adobe Photoshop</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section data-section="highlights">
                <div className="container">
                    <h2>Highlights</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <h3>Leadership & Delivery</h3>
                            <ul>
                                <li>18 years of professional software development experience</li>
                                <li>Lead developer on multi-language global websites spanning Ireland, the UK, France, Germany, Spain, and Japan, from concept through deployment and support</li>
                                <li>Directed digital project delivery across creative, UX, and development teams</li>
                                <li>Led teams of 2&ndash;4 developers across project lifecycles, estimation, and technical documentation</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h3>AI-Assisted Development</h3>
                            <ul>
                                <li>Integrated GitHub Copilot into daily workflows to accelerate feature delivery and improve development efficiency</li>
                                <li>Leveraged AI-assisted development to improve code quality and consistency across projects</li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h3>Client & Business Impact</h3>
                            <ul>
                                <li>Served as lead Salesforce Lightning resource, contributing to winning additional client business</li>
                                <li>Partnered with cross-functional teams &mdash; BSAs, QC, and design &mdash; to ensure scalable, maintainable solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}