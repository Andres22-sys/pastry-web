import devPartner from '/src/assets/team/dev-partner.jpg';
import ceo from '/src/assets/team/ceo.jpg';
import marketingPartner from '/src/assets/team/marketing-partner.jpg';
import './Team.css';

function Team() {
    return (
        <section className="team-section">
            <h2>Our Team</h2>
            <div className="team-grid">
                <div className="team-member">
                    <img src={devPartner} alt="John Doe" />
                    <div className="team-member-text">
                        <h3>John Doe</h3>
                        <p>Partner - Research and Development</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src={ceo} alt="Jane Doe"/>
                    <div className="team-member-text">
                        <h3>Jane Doe</h3>
                        <p>CEO - Founder and Principal Investor</p>
                    </div>
                </div>
                <div className="team-member">
                    <img src={marketingPartner} alt="Jake Doe"/>
                    <div className="team-member-text">
                        <h3>Jake Doe</h3>
                        <p>Partner - Partnerships & Marketing</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;
