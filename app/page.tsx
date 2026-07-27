const Arrow = () => <span aria-hidden="true">↗</span>;

const Check = () => <span className="check" aria-hidden="true">✓</span>;

const Logo = () => (
  <a className="brand" href="#top" aria-label="Casevault home">
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
    </span>
    <span>casevault</span>
  </a>
);

export default function Home() {
  return (
    <main id="top">
      <div className="announcement">
        <span>NEW</span>
        Immigration form auto-fill is now live
        <a href="#workflow">See what’s new <Arrow /></a>
      </div>

      <header className="site-header">
        <Logo />
        <nav aria-label="Main navigation">
          <a href="#product">Product</a>
          <a href="#workflow">How it works</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="https://app.casvault.com/">
            Log in
          </a>
          <a className="button button-dark button-small" href="https://app.casvault.com/">
            Start free <Arrow />
          </a>
        </div>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="signal" /> Built for modern immigration practices</div>
          <h1>Run every case.<br />Miss nothing.</h1>
          <p className="hero-lede">
            One secure workspace for clients, documents, deadlines, billing,
            and communication—from first intake to final decision.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://app.casvault.com/">
              Start your free trial <Arrow />
            </a>
            <a className="text-link" href="#product">
              Explore the platform <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="proof-row">
            <div className="avatars" aria-hidden="true">
              <span>AO</span><span>KM</span><span>NS</span>
            </div>
            <p><strong>1,680+ real cases</strong><br />shaped every workflow</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Casevault product dashboard preview">
          <div className="glow glow-one" />
          <div className="glow glow-two" />
          <div className="dashboard">
            <aside className="dash-sidebar">
              <div className="mini-logo"><b>C</b><span>casevault</span></div>
              <div className="workspace-switch"><i>CV</i><span>Casvault Legal<br /><small>Admin workspace</small></span><b>⌄</b></div>
              <div className="dash-menu">
                <span className="active">⌂ <b>Overview</b></span>
                <span>◎ <b>Cases</b><em>42</em></span>
                <span>♙ <b>Clients</b></span>
                <span>▱ <b>Documents</b></span>
                <span>◷ <b>Tasks</b><em>8</em></span>
                <span>▢ <b>Invoices</b></span>
              </div>
              <div className="dash-help"><i>?</i><span>Need help?<small>Visit help centre</small></span></div>
            </aside>
            <div className="dash-main">
              <div className="dash-topbar">
                <div><small>FRIDAY, 24 JULY</small><h3>Good morning, Amara</h3></div>
                <div className="dash-top-actions"><span>⌕</span><span>♢</span><i>AO</i></div>
              </div>
              <div className="metric-grid">
                <div><span className="metric-icon lilac">▣</span><small>ACTIVE CASES</small><strong>42</strong><em>+12% this month</em></div>
                <div><span className="metric-icon mint">✓</span><small>COMPLETED</small><strong>128</strong><em>8 this month</em></div>
                <div><span className="metric-icon amber">◷</span><small>TASKS DUE</small><strong>8</strong><em>3 due today</em></div>
              </div>
              <div className="dash-content">
                <div className="case-table">
                  <div className="panel-heading"><div><small>CASES</small><h4>Recently updated</h4></div><a href="#product">View all →</a></div>
                  <div className="case-row">
                    <i className="case-avatar rose">CA</i><span><b>Chen, Amira</b><small>UK Spouse Visa</small></span><em className="stage blue">Documents</em><time>2m</time>
                  </div>
                  <div className="case-row">
                    <i className="case-avatar green">OM</i><span><b>Okafor, Michael</b><small>Canada Express Entry</small></span><em className="stage purple">Review</em><time>1h</time>
                  </div>
                  <div className="case-row">
                    <i className="case-avatar gold">AS</i><span><b>Ahmed, Sara</b><small>UK Skilled Worker</small></span><em className="stage teal">Filed</em><time>3h</time>
                  </div>
                  <div className="case-row">
                    <i className="case-avatar blue-bg">KB</i><span><b>Kamau, Brian</b><small>Family Sponsorship</small></span><em className="stage gray">Intake</em><time>1d</time>
                  </div>
                </div>
                <div className="deadline-card">
                  <div className="panel-heading"><div><small>UPCOMING</small><h4>Deadlines</h4></div><b>•••</b></div>
                  <div className="deadline"><strong>24</strong><span><b>Biometrics appointment</b><small>Chen, Amira · 10:30</small></span></div>
                  <div className="deadline"><strong>27</strong><span><b>Document submission</b><small>Okafor, Michael</small></span></div>
                  <div className="deadline"><strong>02</strong><span><b>Visa expiry reminder</b><small>Ahmed, Sara</small></span></div>
                  <button>+ Add task</button>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-note note-one"><span>✓</span><div><small>TASK COMPLETE</small><b>Police certificate received</b></div></div>
          <div className="floating-note note-two"><span>◉</span><div><small>CLIENT UPDATE</small><b>Amira viewed your message</b></div></div>
        </div>
      </section>

      <section className="trust-strip">
        <p>Built for practices serving clients across borders</p>
        <div className="country-row">
          <span>🇬🇧 United Kingdom</span>
          <span>🇨🇦 Canada</span>
          <span>🇳🇬 Nigeria</span>
          <span>🇬🇭 Ghana</span>
          <span>🇰🇪 Kenya</span>
          <span>＋ Anywhere</span>
        </div>
      </section>

      <section className="problem-section section-shell" id="product">
        <div className="section-intro">
          <div>
            <span className="section-index">01 / THE PLATFORM</span>
            <h2>One calm workspace.<br /><em>Complete control.</em></h2>
          </div>
          <p>
            Replace scattered spreadsheets, chat threads, and folders with a
            single source of truth your whole practice can trust.
          </p>
        </div>
        <div className="bento-grid">
          <article className="feature-card feature-large">
            <div className="feature-copy">
              <span className="feature-number">01</span>
              <h3>See every case at a glance.</h3>
              <p>Live stages, deadlines, owners, and next actions—without asking for an update.</p>
              <a href="#workflow">Explore case management <Arrow /></a>
            </div>
            <div className="pipeline">
              <div className="pipeline-head"><b>Case pipeline</b><span>Last 30 days⌄</span></div>
              <div className="pipeline-row"><span>Intake</span><div><i style={{ width: "38%" }} /></div><b>8</b></div>
              <div className="pipeline-row"><span>Documents</span><div><i style={{ width: "67%" }} /></div><b>14</b></div>
              <div className="pipeline-row"><span>Review</span><div><i style={{ width: "48%" }} /></div><b>10</b></div>
              <div className="pipeline-row"><span>Filed</span><div><i style={{ width: "29%" }} /></div><b>6</b></div>
              <div className="pipeline-row"><span>Decision</span><div><i style={{ width: "19%" }} /></div><b>4</b></div>
            </div>
          </article>

          <article className="feature-card feature-dark">
            <div className="doc-stack" aria-hidden="true">
              <div className="doc back"><span>PDF</span><i /><i /><i /></div>
              <div className="doc front"><span>DOC</span><b>Passport copy</b><i /><i /><i /><small>Verified ✓</small></div>
            </div>
            <div className="feature-copy">
              <span className="feature-number">02</span>
              <h3>Documents, finally organized.</h3>
              <p>Securely collect, review, and attach every file to the right client and case.</p>
            </div>
          </article>

          <article className="feature-card feature-green">
            <div className="message-preview">
              <div className="message-top"><span className="case-avatar rose">CA</span><b>Amira Chen<small>Online now</small></b><i>•••</i></div>
              <div className="bubble left">Hi Amira — your documents have been reviewed and your application is ready to file.</div>
              <div className="bubble right">Amazing, thank you! 🙌</div>
              <div className="message-input">Write a message… <span>➤</span></div>
            </div>
            <div className="feature-copy">
              <span className="feature-number">03</span>
              <h3>Keep clients in the loop.</h3>
              <p>Send clear updates and give clients a portal they’ll actually use.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="section-shell">
          <div className="section-intro light">
            <div>
              <span className="section-index">02 / HOW IT WORKS</span>
              <h2>From new enquiry<br />to final decision.</h2>
            </div>
            <p>Casevault follows the way immigration work actually moves—so setup feels familiar from day one.</p>
          </div>
          <div className="steps">
            <article><span>01</span><i>＋</i><h3>Create the client</h3><p>Capture personal details and immigration history once, with structured digital intake.</p></article>
            <article><span>02</span><i>▤</i><h3>Build the case</h3><p>Choose the matter type, assign an owner, and start with the right workflow and checklist.</p></article>
            <article><span>03</span><i>✓</i><h3>Move with confidence</h3><p>Track documents, tasks, fees, and communication until the final outcome is recorded.</p></article>
          </div>
        </div>
      </section>

      <section className="outcomes section-shell" id="security">
        <div className="outcome-quote">
          <span className="section-index">BUILT FROM EXPERIENCE</span>
          <blockquote>“We didn’t imagine the workflow.<br /><em>We lived it.</em>”</blockquote>
          <p>Casevault was shaped by a team that managed 1,680+ immigration cases before writing a line of code.</p>
        </div>
        <div className="outcome-stats">
          <article><strong>1,680+</strong><span>Real cases behind the product</span></article>
          <article><strong>5 min</strong><span>To set up your first matter</span></article>
          <article><strong>24/7</strong><span>Secure access across borders</span></article>
          <article><strong>1</strong><span>Source of truth for your practice</span></article>
        </div>
      </section>

      <section className="pricing-section section-shell" id="pricing">
        <div className="pricing-card">
          <div>
            <span className="section-index">SIMPLE, TRANSPARENT PRICING</span>
            <h2>Start small.<br />Scale without switching.</h2>
          </div>
          <div className="price">
            <p>Plans from</p>
            <strong><sup>$</sup>39<small>/ month</small></strong>
            <ul>
              <li><Check /> No credit card required</li>
              <li><Check /> Guided setup included</li>
              <li><Check /> Cancel anytime</li>
            </ul>
            <a className="button button-primary" href="https://app.casvault.com/">
              Start free for 14 days <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="faq section-shell">
        <div>
          <span className="section-index">COMMON QUESTIONS</span>
          <h2>Good to know.</h2>
        </div>
        <div className="faq-list">
          <details><summary>What countries does Casevault support?<span>＋</span></summary><p>Casevault is country-flexible and designed for practices managing immigration matters across multiple jurisdictions.</p></details>
          <details><summary>Can my whole team use it?<span>＋</span></summary><p>Yes. Pro and Agency plans support multiple case handlers, shared visibility, and clear case ownership.</p></details>
          <details><summary>Is client data secure?<span>＋</span></summary><p>Casevault uses role-based access and secure cloud infrastructure to keep sensitive client information protected.</p></details>
          <details><summary>Do I need technical skills to set it up?<span>＋</span></summary><p>No. The workflow is designed to feel familiar, and guided onboarding is included.</p></details>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-orbit orbit-one" />
        <div className="cta-orbit orbit-two" />
        <span>YOUR PRACTICE, WITHOUT THE CHAOS</span>
        <h2>Every case. One vault.</h2>
        <p>Give your team clarity—and your clients confidence.</p>
        <a className="button button-light" href="https://app.casvault.com/">Start your free trial <Arrow /></a>
      </section>

      <footer>
        <div className="footer-main">
          <div><Logo /><p>Immigration case management<br />built for work across borders.</p></div>
          <div><h4>Product</h4><a href="#product">Features</a><a href="#workflow">How it works</a><a href="#pricing">Pricing</a><a href="https://support.casvault.com">Help centre</a></div>
          <div><h4>Company</h4><a href="https://casvault.com/about/">About</a><a href="https://blog.casvault.com/">Insights</a><a href="https://casvault.com/contact/">Contact</a><a href="https://casvault.com/demo/">Book a demo</a></div>
          <div><h4>Get started</h4><p>Ready to bring calm to your caseload?</p><a className="footer-cta" href="https://app.casvault.com/">Create your account <Arrow /></a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Casevault™</span><span>Privacy · Terms · Security</span><span>LinkedIn · X</span></div>
      </footer>
    </main>
  );
}
