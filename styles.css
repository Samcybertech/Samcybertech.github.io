
/* Existing styles from previous + updates for balance and new sections */

/* Theme variables (unchanged) */
:root {
    --bg-color: #f4f4f4;
    --text-color: #333;
    --card-bg: #fff;
    --accent: #00bfff;
    --header-bg: #1a1a1a;
    --header-text: #fff;
}

[data-theme="dark"] {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --card-bg: #1e1e1e;
    --accent: #00d4ff;
    --header-bg: #0d0d0d;
    --header-text: #f0f0f0;
}

/* Header & Nav (unchanged) */

/* Hero updates for centered content and badges */
.hero {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, var(--accent), #0077b6);
    color: white;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
}

.hero-content {
    max-width: 800px;
    z-index: 2;
}

.badges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1.5rem 0;
}

.linkedin-btn img {
    margin: 1rem 0;
}

/* About (with animation integration) */
#about {
    background: var(--card-bg);
    padding: 8rem 2rem 4rem;
}

.about-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

/* Skills section - grid for balance */
#skills {
    padding: 4rem 2rem;
    background: var(--bg-color);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto 2rem;
}

.skill-category ul {
    list-style-type: disc;
    padding-left: 1.5rem;
}

.tech-badges {
    max-width: 1200px;
    margin: 0 auto;
}

.tech-badges h3 {
    margin-top: 2rem;
}

.tech-badges div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

/* Certifications */
#certifications {
    padding: 4rem 2rem;
    background: var(--card-bg);
    text-align: center;
}

.cert-grid {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}

.cert-item img {
    margin: 1rem;
}

/* Projects (with scan overlay) */
#projects {
    position: relative;
    padding: 4rem 2rem;
    background: var(--bg-color);
}

/* Connect */
#connect {
    padding: 4rem 2rem;
    background: var(--card-bg);
    text-align: center;
}

.connect-content {
    max-width: 800px;
    margin: 0 auto;
}

.connect-content ul {
    list-style: none;
    margin-bottom: 1.5rem;
}

.quote {
    font-style: italic;
    margin-top: 2rem;
    color: var(--accent);
}

/* Footer (unchanged) */

/* Animations (from previous - integrated) */
.secure-icon { /* Pulsing lock/shield */ 
    position: relative;
    width: 120px;
    height: 140px;
    margin: 2rem auto;
}

.shield {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--accent), #0077b6);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    animation: pulse-shield 3s infinite ease-in-out;
    box-shadow: 0 0 30px rgba(0, 191, 255, 0.6);
}

@keyframes pulse-shield {
    0%, 100% { transform: scale(1); opacity: 0.8; }
    50%      { transform: scale(1.08); opacity: 1; }
}

.lock-body {
    position: absolute;
    bottom: 20px;
    left: 30px;
    width: 60px;
    height: 70px;
    background: #0d1b2a;
    border-radius: 8px 8px 20px 20px;
    border: 4px solid var(--accent);
    animation: glow 2.5s infinite alternate;
}

.lock-shackle {
    position: absolute;
    top: 10px;
    left: 40px;
    width: 40px;
    height: 50px;
    border: 4px solid var(--accent);
    border-bottom: none;
    border-radius: 40px 40px 0 0;
    animation: shake-shackle 4s infinite ease-in-out;
}

@keyframes glow {
    from { box-shadow: 0 0 10px var(--accent); }
    to   { box-shadow: 0 0 35px var(--accent); }
}

@keyframes shake-shackle {
    0%, 100% { transform: rotate(0deg); }
    25%      { transform: rotate(3deg); }
    75%      { transform: rotate(-3deg); }
}

.scan-overlay { /* Scanning line */
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
        to bottom,
        transparent 45%,
        rgba(0, 255, 0, 0.12) 50%,
        transparent 55%
    );
    animation: scan 6s linear infinite;
    z-index: 1;
}

@keyframes scan {
    0%   { transform: translateY(-100%); }
    100% { transform: translateY(200%); }
}

/* Media queries (unchanged) */
@media (max-width: 768px) {
    /* ... existing mobile styles ... */
}
