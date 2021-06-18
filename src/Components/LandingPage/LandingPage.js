import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div id="landing-page">
            <section className="greetings">
                <span className="hi">Hi, My name is <br /><span className="name">BALASUBRAMANIAM S R</span></span><br />
                <span className="designation">I love to build Web Applications</span><br />
                <button className="resume">
                    <a href="https://drive.google.com/file/d/16v31rURJsGCDgDFVGNoeLJex87c2c0Zp/view" target="_blank" rel="noreferrer">
                        View Resume
                    </a>
                </button>
            </section>    
        </div>
    )
}