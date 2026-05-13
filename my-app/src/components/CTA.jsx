import React from "react";
import './../styles/CTA.css'

const CTA = () => {
    return (
        <section className="cta" id="cta-section">
        <h2>Ready to See the Difference?</h2>
        <p>
            Join thousands of users who are experiencing the world in
            <br />
            new ways with ABSIR.
        </p>

        <div className="cta-buttons">
            <button className="btn primary">Download For iOS</button>
            <button className="btn secondary">Download For Android</button>
        </div>

        <span className="cta-note">
            Free to download · No credit card required · Available on iOS & Android
        </span>
        </section>
    );
};

export default CTA;
