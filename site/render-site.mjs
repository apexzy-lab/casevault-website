const DOMAIN = "https://casvault.com";
const APP_URL = "https://app.casvault.com/";
const SUPPORT_URL = "https://support.casvault.com/";
const SALES_URL = "mailto:sales@casvault.com";

export const routes = [
  "/",
  "/features/",
  "/case-management/",
  "/document-management/",
  "/client-portal/",
  "/how-it-works/",
  "/pricing/",
  "/security/",
  "/solutions/solo-consultants/",
  "/solutions/immigration-law-firms/",
  "/solutions/multi-country-practices/",
  "/about/",
  "/faq/",
  "/demo/",
  "/contact/",
];

const css = `
:root{--ink:#12161f;--muted:#68707d;--line:#dfe3e8;--paper:#f8f7f3;--white:#fff;--violet:#5b50ea;--violet-dark:#4137d2;--mint:#dff4df;--navy:#111927;--soft:#efede7;--font:Inter,"Segoe UI",Arial,sans-serif}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;overflow-x:hidden;color:var(--ink);background:var(--paper);font-family:var(--font);-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}button,input,select,textarea{font:inherit}.wrap{width:min(1220px,calc(100% - 48px));margin:auto}.skip{position:absolute;left:-999px;top:0}.skip:focus{left:12px;top:12px;z-index:100;padding:10px;background:#fff}
.announcement{min-height:36px;padding:8px 20px;display:flex;align-items:center;justify-content:center;gap:10px;color:#d5d9e1;background:#131722;font-size:11px}.announcement b{padding:3px 7px;border-radius:4px;color:#fff;background:var(--violet);font-size:8px;letter-spacing:.12em}.announcement a{color:#fff;font-weight:700}
.header{position:relative;z-index:30;background:rgba(248,247,243,.94);backdrop-filter:blur(15px);border-bottom:1px solid rgba(18,22,31,.11)}.header-row{height:78px;display:flex;align-items:center;justify-content:space-between}.logo{display:inline-flex;align-items:center}.logo img{display:block;width:155px;height:auto}
.desktop-nav,.nav-actions{display:flex;align-items:center;gap:28px}.desktop-nav>a,.nav-actions>a:first-child,.nav-group>button{color:#515865;font-size:12px;font-weight:650}.desktop-nav>a,.nav-group>button{position:relative}.desktop-nav>a,.nav-actions>a:first-child,.nav-group>button{transition:color .18s ease}.desktop-nav>a:hover,.nav-actions>a:first-child:hover,.nav-group:hover>button,.nav-group:focus-within>button{color:var(--ink)}.nav-group{position:relative}.nav-group>button{min-height:44px;padding:0;display:inline-flex;align-items:center;gap:7px;border:0;background:transparent;cursor:pointer}.nav-chevron{width:7px;height:7px;display:block;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;color:#7b828d;transform:translateY(-2px) rotate(45deg);transition:color .18s ease,transform .18s ease}.nav-group:hover .nav-chevron,.nav-group:focus-within .nav-chevron{color:var(--violet);transform:translateY(2px) rotate(225deg)}.desktop-nav>a:after,.nav-group>button:after{content:"";position:absolute;left:0;right:0;bottom:4px;height:1.5px;background:var(--violet);transform:scaleX(0);transform-origin:left;transition:transform .18s ease}.desktop-nav>a:hover:after,.desktop-nav>a:focus-visible:after,.nav-group:hover>button:after,.nav-group:focus-within>button:after{transform:scaleX(1)}.nav-menu{position:absolute;width:280px;left:-24px;top:46px;padding:10px;display:none;gap:2px;border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:0 22px 50px rgba(31,36,49,.15)}.nav-menu:before{content:"";position:absolute;left:0;right:0;top:-10px;height:12px}.nav-group:hover .nav-menu,.nav-group:focus-within .nav-menu{display:grid}.nav-menu a{padding:12px 13px;border:1px solid transparent;border-radius:9px;transition:background .18s ease,border-color .18s ease,transform .18s ease}.nav-menu a:hover,.nav-menu a:focus-visible{outline:0;border-color:#e7e5df;background:#f5f4f0;transform:translateX(2px)}.nav-menu b,.nav-menu small{display:block}.nav-menu b{font-size:11px}.nav-menu small{margin-top:4px;color:#8a909a;font-size:8px;line-height:1.4}
.btn{min-height:48px;padding:0 22px;display:inline-flex;align-items:center;justify-content:center;gap:17px;border:0;border-radius:8px;color:#fff;background:var(--violet);box-shadow:0 13px 30px rgba(91,80,234,.22);font-size:12px;font-weight:750;transition:.2s ease}.btn:hover{transform:translateY(-2px);background:var(--violet-dark)}.btn.dark{background:var(--ink);box-shadow:none}.btn.light{color:var(--ink);background:#fff;box-shadow:none}.btn.ghost{color:var(--ink);background:transparent;border:1px solid var(--line);box-shadow:none}.mobile-nav{display:none}
.eyebrow,.section-label{display:flex;align-items:center;gap:9px;color:#656c78;font-size:9px;font-weight:800;letter-spacing:.13em;text-transform:uppercase}.signal{width:7px;height:7px;border-radius:50%;background:#45b96d;box-shadow:0 0 0 4px rgba(69,185,109,.14)}
.home-hero{min-height:700px;padding:88px 0 100px;display:grid;grid-template-columns:.78fr 1.22fr;gap:42px;align-items:center}.hero-copy h1{margin:23px 0 23px;font-size:clamp(58px,6.1vw,89px);line-height:.93;letter-spacing:-.075em}.hero-copy>p{max-width:510px;margin:0;color:#59616e;font-size:16px;line-height:1.75}.hero-actions{margin-top:32px;display:flex;align-items:center;gap:24px}.text-link{font-size:12px;font-weight:750}.proof-note{margin-top:38px;display:flex;align-items:center;gap:12px;color:#737a85;font-size:9px}.proof-note strong{color:#252a34}
.dashboard-wrap{position:relative}.dashboard{min-height:470px;overflow:hidden;display:grid;grid-template-columns:118px 1fr;border:1px solid rgba(40,45,58,.14);border-radius:14px;background:#f4f6f8;box-shadow:0 35px 70px rgba(31,36,49,.17);transform:perspective(1300px)rotateY(-2deg)}.dash-side{padding:17px 10px;color:#9ca6b6;background:#17202f}.dash-brand{margin-bottom:24px;color:#fff;font-size:9px;font-weight:800}.dash-item{margin:4px 0;padding:8px;border-radius:5px;font-size:7px}.dash-item.active{color:#fff;background:var(--violet)}.dash-item b{float:right;padding:2px 5px;border-radius:5px;background:#303a4b}.dash-main{padding:20px}.dash-head{display:flex;align-items:center;justify-content:space-between}.dash-head small{color:#949ca9;font-size:6px;letter-spacing:.09em}.dash-head h3{margin:5px 0 0;font-size:16px;letter-spacing:-.03em}.avatar{width:28px;height:28px;display:grid;place-items:center;border-radius:8px;color:#fff;background:#6d5f9e;font-size:7px;font-weight:800}.metrics{margin:19px 0 13px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.metric{padding:12px;border:1px solid #e4e7eb;border-radius:8px;background:#fff}.metric small,.metric strong,.metric em{display:block}.metric small{font-size:6px;color:#959ca8;letter-spacing:.08em}.metric strong{margin:7px 0 3px;font-size:20px}.metric em{color:#4e9b6c;font-size:6px;font-style:normal}.dash-grid{display:grid;grid-template-columns:1.45fr .75fr;gap:9px}.case-list,.deadline-list{overflow:hidden;border:1px solid #e4e7eb;border-radius:8px;background:#fff}.panel-title{padding:12px;border-bottom:1px solid #edf0f2;font-size:7px;font-weight:800}.case-line{min-height:49px;padding:8px 11px;display:grid;grid-template-columns:1fr auto;align-items:center;border-bottom:1px solid #f0f1f3}.case-person{display:flex;align-items:center;gap:8px}.case-person i{width:27px;height:27px;display:grid;place-items:center;border-radius:8px;color:#a7635d;background:#f6e7e5;font-size:7px;font-style:normal;font-weight:800}.case-person b,.case-person small{display:block}.case-person b{font-size:8px}.case-person small{margin-top:3px;color:#9ba1aa;font-size:6px}.status{padding:4px 7px;border-radius:10px;color:#38835c;background:#e8f5ed;font-size:6px;font-style:normal}.deadline{padding:13px 11px;border-bottom:1px solid #f0f1f3}.deadline b,.deadline small{display:block;font-size:7px}.deadline small{margin-top:4px;color:#9ca2ac;font-size:6px}.float-note{position:absolute;right:-12px;top:-25px;padding:12px 15px;border:1px solid #e2e4e8;border-radius:9px;background:#fff;box-shadow:0 15px 35px rgba(30,36,49,.15);font-size:7px}.float-note b{display:block;margin-top:4px;font-size:8px}
.trust{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#f2f1ec}.trust .wrap{min-height:100px;display:grid;grid-template-columns:1.3fr repeat(3,.55fr);align-items:center}.trust p{color:#6f7681;font-size:10px}.trust-stat{padding-left:25px;border-left:1px solid var(--line)}.trust-stat strong,.trust-stat span{display:block}.trust-stat strong{font-size:21px;letter-spacing:-.04em}.trust-stat span{margin-top:5px;color:#888f99;font-size:7px;text-transform:uppercase;letter-spacing:.1em}
.section{padding:110px 0}.section.soft{background:var(--soft)}.section.dark{color:#fff;background:var(--navy)}.section-head{display:grid;grid-template-columns:1.15fr .85fr;gap:70px;align-items:end;margin-bottom:50px}.section-head h2{margin:17px 0 0;font-size:clamp(40px,4.4vw,64px);line-height:1.04;letter-spacing:-.058em}.section-head>p{max-width:460px;margin:0;color:var(--muted);font-size:14px;line-height:1.75}.dark .section-label,.dark .section-head>p{color:#8d98aa}.dark .section-head h2{color:#fff}
.card-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.card{min-height:270px;padding:29px;border:1px solid var(--line);border-radius:12px;background:#fff}.card-icon{width:40px;height:40px;display:grid;place-items:center;border-radius:9px;color:var(--violet);background:#eceaff;font-size:16px}.card h3{margin:48px 0 11px;font-size:18px;letter-spacing:-.035em}.card p{margin:0;color:var(--muted);font-size:11px;line-height:1.68}.card a{display:inline-block;margin-top:22px;color:var(--violet);font-size:10px;font-weight:750}.dark .card{border-color:#354052;background:#182333}.dark .card p{color:#98a4b4}
.bento{display:grid;grid-template-columns:1.15fr .85fr;gap:15px}.bento-card{position:relative;min-height:420px;overflow:hidden;padding:35px;border:1px solid var(--line);border-radius:14px;background:#fff}.bento-card.large{grid-column:1/-1;display:grid;grid-template-columns:.72fr 1.28fr;gap:45px;align-items:center;background:#efede7}.bento-card.dark-card{color:#fff;background:#17202f}.bento-card.green{background:#dff0e4}.bento-card h3{margin:20px 0 13px;font-size:29px;line-height:1.1;letter-spacing:-.045em}.bento-card p{max-width:400px;margin:0;color:#737a85;font-size:12px;line-height:1.7}.dark-card p{color:#a2acb9}.pipeline{padding:25px;border:1px solid #dde0e3;border-radius:11px;background:#fff;box-shadow:0 18px 38px rgba(30,36,49,.09)}.pipe-head{display:flex;justify-content:space-between;margin-bottom:20px;font-size:10px}.pipe-row{margin:15px 0;display:grid;grid-template-columns:75px 1fr 18px;gap:12px;align-items:center;color:#747c87;font-size:7px}.pipe-row div{height:7px;border-radius:7px;background:#eceef0}.pipe-row i{height:100%;display:block;border-radius:7px;background:var(--violet)}.pipe-row b{color:#333943}
.steps{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #354052}.step{padding:33px 30px 20px 0;border-right:1px solid #354052}.step:not(:first-child){padding-left:30px}.step:last-child{border:0}.step>span{color:#768193;font-size:9px}.step i{width:45px;height:45px;margin:43px 0 32px;display:grid;place-items:center;border-radius:10px;color:#fff;background:var(--violet);font-style:normal}.step h3{margin:0 0 11px;font-size:18px}.step p{margin:0;color:#8f9bab;font-size:10px;line-height:1.65}
.page-hero{padding:82px 0 90px;border-bottom:1px solid var(--line)}.breadcrumbs{margin-bottom:34px;color:#858b95;font-size:9px}.breadcrumbs a{color:#5f6670}.page-hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:70px;align-items:center}.page-hero h1{margin:18px 0 22px;font-size:clamp(54px,6vw,84px);line-height:.96;letter-spacing:-.07em}.page-hero p{max-width:580px;margin:0;color:#626a76;font-size:16px;line-height:1.74}.page-hero .hero-actions{margin-top:30px}.hero-panel{min-height:370px;padding:24px;border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:0 25px 55px rgba(31,36,49,.12)}.hero-panel.dark-panel{color:#fff;background:#17202f}.hero-panel h3{margin:5px 0 19px;font-size:18px}.check-list{margin:0;padding:0;list-style:none}.check-list li{margin:11px 0;display:flex;align-items:flex-start;gap:10px;color:#5e6671;font-size:11px;line-height:1.5}.check-list i{width:20px;height:20px;flex:0 0 20px;display:grid;place-items:center;border-radius:50%;color:#32825d;background:#e2f3e9;font-size:8px;font-style:normal}.dark-panel .check-list li{color:#b5beca}
.split{display:grid;grid-template-columns:1fr 1fr;gap:75px;align-items:center}.split-copy h2{margin:18px 0;font-size:clamp(39px,4vw,59px);line-height:1.04;letter-spacing:-.055em}.split-copy>p{color:var(--muted);font-size:14px;line-height:1.75}.visual-card{min-height:410px;padding:24px;border:1px solid var(--line);border-radius:14px;background:#fff;box-shadow:0 20px 50px rgba(31,36,49,.09)}.visual-head{display:flex;align-items:center;justify-content:space-between;padding-bottom:15px;border-bottom:1px solid #e9ebee;font-size:9px}.visual-list{margin-top:12px}.visual-row{min-height:62px;padding:10px 0;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #eef0f2}.visual-row:last-child{border:0}.visual-row b,.visual-row small{display:block}.visual-row b{font-size:9px}.visual-row small{margin-top:5px;color:#9299a3;font-size:7px}.visual-row em{padding:5px 7px;border-radius:10px;color:#4f6c9d;background:#e9eef8;font-size:6px;font-style:normal}
.pricing-toggle{margin:0 auto 35px;width:max-content;padding:4px;display:flex;border:1px solid var(--line);border-radius:9px;background:#fff}.pricing-toggle span{padding:10px 15px;border-radius:6px;font-size:9px;font-weight:750}.pricing-toggle span.active{color:#fff;background:var(--ink)}.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.price-card{position:relative;padding:30px;border:1px solid var(--line);border-radius:13px;background:#fff}.price-card.featured{color:#fff;background:var(--navy);transform:translateY(-10px)}.price-card .badge{position:absolute;right:20px;top:20px;padding:5px 7px;border-radius:12px;color:#fff;background:var(--violet);font-size:7px;font-weight:800;text-transform:uppercase}.price-card>span{color:#7e858f;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}.price-card h3{margin:17px 0 8px;font-size:22px}.price-card .amount{margin:22px 0;font-size:46px;font-weight:800;letter-spacing:-.06em}.price-card .amount small{color:#89919b;font-size:10px;font-weight:500;letter-spacing:0}.price-card p{min-height:44px;color:#747b86;font-size:10px;line-height:1.6}.featured p,.featured .check-list li{color:#aab4c3}.price-card .btn{width:100%;margin:18px 0}.price-card .check-list{padding-top:15px;border-top:1px solid #e4e6e9}.featured .check-list{border-color:#354052}
.faq-layout{display:grid;grid-template-columns:.65fr 1.35fr;gap:80px}.faq-layout h2{margin:17px 0;font-size:48px;letter-spacing:-.055em}.faq-list{border-top:1px solid var(--line)}details{border-bottom:1px solid var(--line)}summary{padding:24px 0;display:flex;align-items:center;justify-content:space-between;cursor:pointer;list-style:none;font-size:13px;font-weight:700}summary::-webkit-details-marker{display:none}summary span{font-size:18px;font-weight:300}details[open] summary span{transform:rotate(45deg)}details p{margin:-5px 0 24px;color:var(--muted);font-size:12px;line-height:1.7}
.cta{position:relative;overflow:hidden;padding:100px 24px;color:#fff;background:var(--navy);text-align:center}.cta:before,.cta:after{content:"";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.08);border-radius:50%}.cta:before{width:700px;height:700px}.cta:after{width:1100px;height:420px}.cta>*{position:relative;z-index:2}.cta h2{margin:18px 0 13px;font-size:clamp(48px,5.8vw,76px);line-height:1;letter-spacing:-.065em}.cta p{margin:0 0 30px;color:#9da7b6;font-size:13px}
.footer{padding:70px 0 25px;background:#fff}.footer-main{display:grid;grid-template-columns:1.4fr repeat(3,.7fr);gap:45px;padding-bottom:55px}.footer-brand p{margin-top:22px;color:#858c96;font-size:10px;line-height:1.7}.footer h4{margin:4px 0 20px;font-size:9px;text-transform:uppercase;letter-spacing:.1em}.footer nav a{display:block;margin:12px 0;color:#6e7580;font-size:10px}.footer-bottom{padding-top:20px;display:flex;justify-content:space-between;border-top:1px solid #e4e6e8;color:#9298a1;font-size:8px}
.story{padding:38px;border-left:4px solid var(--violet);background:#fff}.story p{margin:0;font-size:24px;line-height:1.45;letter-spacing:-.03em}.story small{display:block;margin-top:20px;color:#7e858f;font-size:9px}.contact-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.contact-card{padding:30px;border:1px solid var(--line);border-radius:12px;background:#fff}.contact-card h3{margin:35px 0 10px}.contact-card p{min-height:50px;color:var(--muted);font-size:11px;line-height:1.6}.contact-card a{color:var(--violet);font-size:10px;font-weight:750}
.notice{padding:18px;border:1px solid #ddd7c7;border-radius:10px;background:#fff8e8;color:#6c614c;font-size:10px;line-height:1.6}.comparison{width:100%;border-collapse:collapse;background:#fff}.comparison th,.comparison td{padding:17px;border-bottom:1px solid var(--line);text-align:left;font-size:10px}.comparison th{color:#6e7580;font-size:8px;text-transform:uppercase;letter-spacing:.09em}.comparison td:first-child{font-weight:700}
.legal-copy{max-width:850px;margin:auto}.legal-copy>p{color:#757c87;font-size:11px}.legal-copy article{padding:28px 0;border-bottom:1px solid var(--line)}.legal-copy h2{margin:0 0 12px;font-size:22px;letter-spacing:-.035em}.legal-copy p,.legal-copy li{color:#626a76;font-size:12px;line-height:1.75}.legal-copy ul{padding-left:20px}
@media(max-width:950px){.desktop-nav{display:none}.mobile-nav{display:block;position:relative}.mobile-nav summary{padding:8px;border:1px solid var(--line);border-radius:7px}.mobile-menu{position:absolute;right:0;top:45px;width:260px;padding:12px;display:grid;border:1px solid var(--line);border-radius:10px;background:#fff;box-shadow:0 18px 45px rgba(31,36,49,.16)}.mobile-menu a{padding:10px;font-size:11px}.home-hero,.page-hero-grid,.split{grid-template-columns:1fr}.hero-copy{max-width:650px}.dashboard-wrap{width:min(100%,780px);margin:auto}.section-head{grid-template-columns:1fr;gap:24px}.steps{grid-template-columns:1fr 1fr}.step:nth-child(2){border-right:0}.step:nth-child(3),.step:nth-child(4){border-top:1px solid #354052}.faq-layout{grid-template-columns:1fr}.footer-main{grid-template-columns:1fr 1fr}}
@media(max-width:700px){.wrap{width:min(100% - 30px,620px)}.logo img{width:132px}.announcement a{display:none}.nav-actions>a:first-child{display:none}.home-hero{padding:60px 0 78px}.hero-copy h1{font-size:53px}.hero-actions{align-items:stretch;flex-direction:column}.dashboard{width:710px;transform:scale(.69);transform-origin:left top}.dashboard-wrap{height:330px;overflow:hidden}.float-note{display:none}.trust .wrap{grid-template-columns:1fr 1fr}.trust p{grid-column:1/-1;padding-top:18px}.trust-stat{padding:16px;border-top:1px solid var(--line)}.section{padding:80px 0}.card-grid,.pricing-grid,.contact-grid,.bento{grid-template-columns:1fr}.bento-card.large{grid-column:auto;grid-template-columns:1fr}.steps{grid-template-columns:1fr}.step,.step:not(:first-child){padding:28px 0;border-right:0;border-top:0;border-bottom:1px solid #354052}.page-hero{padding:60px 0 70px}.page-hero h1{font-size:52px}.hero-panel{min-height:auto}.section-head h2,.split-copy h2{font-size:41px}.pricing-grid{gap:20px}.price-card.featured{transform:none}.faq-layout h2{font-size:41px}.footer-main{grid-template-columns:1fr}.footer-bottom{gap:10px;flex-direction:column}.comparison{display:block;overflow-x:auto}.story{padding:25px}.story p{font-size:19px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
`;

const pageData = {
  "/": {
    title: "Immigration Case Management Software | Casevault",
    description: "Manage immigration clients, cases, documents, deadlines, invoicing and communication in one secure platform built for practices working across borders.",
    keywords: "immigration case management software, immigration practice management software, immigration consultant software, visa case management software",
  },
  "/features/": {
    title: "Immigration Practice Management Features | Casevault",
    description: "Explore Casevault features for case tracking, document management, client communication, invoicing, intake and team collaboration.",
    keywords: "immigration practice management features, immigration case tracking, client portal, immigration invoicing software",
  },
  "/case-management/": {
    title: "Immigration Case Management & Tracking | Casevault",
    description: "Track every immigration case from intake to decision with structured timelines, owners, tasks, deadlines and complete client histories.",
    keywords: "immigration case tracking software, visa case management, immigration matter management, case timeline software",
  },
  "/document-management/": {
    title: "Immigration Document Management Software | Casevault",
    description: "Securely organize immigration documents by client and case, track missing files and keep every submission-ready record in one place.",
    keywords: "immigration document management software, visa document tracking, secure client documents, immigration document portal",
  },
  "/client-portal/": {
    title: "Immigration Client Portal & Case Updates | Casevault",
    description: "Give immigration clients secure access to case status, document requests, messages and invoices while reducing repetitive update calls.",
    keywords: "immigration client portal, visa application status portal, immigration client communication software, case update portal",
  },
  "/how-it-works/": {
    title: "How Casevault Immigration Software Works",
    description: "See how Casevault connects client intake, immigration history, documents, case stages, communication and invoicing in one workflow.",
    keywords: "how immigration case management software works, immigration workflow software, client intake case management",
  },
  "/pricing/": {
    title: "Casevault Pricing | Immigration Case Management Plans",
    description: "Compare Casevault plans for solo immigration consultants, growing practices and established multi-country agencies.",
    keywords: "immigration case management software pricing, immigration consultant software cost, visa case management pricing",
  },
  "/security/": {
    title: "Casevault Security | Protecting Immigration Client Data",
    description: "Learn how Casevault approaches access control, secure document storage, account protection and responsible handling of immigration client data.",
    keywords: "secure immigration case management software, immigration client data security, secure document portal",
  },
  "/solutions/solo-consultants/": {
    title: "Immigration Software for Solo Consultants | Casevault",
    description: "Run your immigration practice without scattered spreadsheets, folders and message threads. Casevault keeps every client and case organized.",
    keywords: "immigration consultant software, case management for solo immigration consultants, visa consultant CRM",
  },
  "/solutions/immigration-law-firms/": {
    title: "Immigration Law Firm Case Management Software | Casevault",
    description: "Coordinate immigration matters, documents, case handlers, deadlines, client updates and billing across your law firm.",
    keywords: "immigration law firm software, immigration legal case management, immigration attorney practice management",
  },
  "/solutions/multi-country-practices/": {
    title: "Multi-Country Immigration Case Management | Casevault",
    description: "Manage immigration cases across the UK, Canada, US, Ireland and global corridors without forcing every matter into one country's workflow.",
    keywords: "multi-country immigration case management, global immigration software, cross-border immigration practice software",
  },
  "/about/": {
    title: "About Casevault | Built From Real Immigration Casework",
    description: "Casevault was shaped by a team that processed more than 1,680 real immigration cases before building the platform.",
    keywords: "about Casevault, immigration technology company, immigration practice software",
  },
  "/faq/": {
    title: "Casevault FAQ | Immigration Case Management Software",
    description: "Answers about Casevault countries, setup, client data, team access, pricing, client portal and immigration case workflows.",
    keywords: "Casevault FAQ, immigration case management questions, immigration consultant software FAQ",
  },
  "/demo/": {
    title: "Book a Casevault Demo | Immigration Practice Software",
    description: "See how Casevault can organize your immigration clients, cases, documents, deadlines, communication and invoicing.",
    keywords: "Casevault demo, immigration software demo, immigration case management demonstration",
  },
  "/contact/": {
    title: "Contact Casevault | Sales, Support & Partnerships",
    description: "Contact Casevault for product questions, demonstrations, account support and partnership enquiries.",
    keywords: "contact Casevault, Casevault support, immigration software sales",
  },
  "/legal/": {
    title: "Casevault Legal | Terms, Privacy & Data",
    description: "Read Casevault terms, privacy information and an overview of how the platform handles account and immigration case data.",
    keywords: "Casevault legal, Casevault terms, Casevault privacy policy, immigration software data policy",
  },
  "/legal/terms-and-conditions/": {
    title: "Casevault Terms and Conditions",
    description: "Read the terms governing Casevault accounts, subscriptions, acceptable use, client data, service availability and termination.",
    keywords: "Casevault terms and conditions, Casevault subscription terms, immigration software terms",
  },
  "/legal/privacy-policy/": {
    title: "Casevault Privacy Policy",
    description: "Read how Casevault collects, uses, stores and protects account data and client immigration case data.",
    keywords: "Casevault privacy policy, immigration software privacy, client case data protection",
  },
};

function logo() {
  return `<a class="logo" href="/" aria-label="Casevault home"><img src="/assets/casevault-wordmark.png" width="552" height="122" alt="Casevault"></a>`;
}

function header() {
  return `<a class="skip" href="#main">Skip to content</a>
  <div class="announcement"><b>NEW</b><span>Immigration form auto-fill is now live.</span><a href="/features/">Explore the update →</a></div>
  <header class="header"><div class="header-row wrap">
    ${logo()}
    <nav class="desktop-nav" aria-label="Primary navigation">
      <div class="nav-group"><button type="button" aria-haspopup="true"><span>Platform</span><i class="nav-chevron" aria-hidden="true"></i></button><div class="nav-menu">
        <a href="/features/"><b>All features</b><small>Everything in one connected platform</small></a>
        <a href="/case-management/"><b>Case management</b><small>Timelines, stages, tasks and deadlines</small></a>
        <a href="/document-management/"><b>Documents</b><small>Secure, case-linked document control</small></a>
        <a href="/client-portal/"><b>Client portal</b><small>Status, messages and document requests</small></a>
      </div></div>
      <div class="nav-group"><button type="button" aria-haspopup="true"><span>Solutions</span><i class="nav-chevron" aria-hidden="true"></i></button><div class="nav-menu">
        <a href="/solutions/solo-consultants/"><b>Solo consultants</b><small>One login for your entire practice</small></a>
        <a href="/solutions/immigration-law-firms/"><b>Law firms</b><small>Coordinate teams without losing control</small></a>
        <a href="/solutions/multi-country-practices/"><b>Multi-country practices</b><small>Flexible workflows across jurisdictions</small></a>
      </div></div>
      <a href="/how-it-works/">How it works</a><a href="/pricing/">Pricing</a><a href="/security/">Security</a>
    </nav>
    <div class="nav-actions"><a href="${APP_URL}">Log in</a><a class="btn dark" href="${APP_URL}">Start free <span>↗</span></a>
      <details class="mobile-nav"><summary aria-label="Open navigation">Menu</summary><nav class="mobile-menu"><a href="/features/">Features</a><a href="/case-management/">Case management</a><a href="/document-management/">Documents</a><a href="/client-portal/">Client portal</a><a href="/how-it-works/">How it works</a><a href="/pricing/">Pricing</a><a href="/security/">Security</a><a href="/about/">About</a></nav></details>
    </div>
  </div></header>`;
}

function footer() {
  return `<footer class="footer"><div class="wrap"><div class="footer-main">
    <div class="footer-brand">${logo()}<p>Immigration case management built for consultants and firms working across borders.</p></div>
    <nav aria-label="Product links"><h4>Product</h4><a href="/features/">Features</a><a href="/case-management/">Case management</a><a href="/document-management/">Documents</a><a href="/client-portal/">Client portal</a><a href="/pricing/">Pricing</a></nav>
    <nav aria-label="Solution links"><h4>Solutions</h4><a href="/solutions/solo-consultants/">Solo consultants</a><a href="/solutions/immigration-law-firms/">Law firms</a><a href="/solutions/multi-country-practices/">Multi-country practices</a><a href="/how-it-works/">How it works</a></nav>
    <nav aria-label="Company links"><h4>Company</h4><a href="/about/">About</a><a href="/security/">Security</a><a href="/faq/">FAQ</a><a href="/demo/">Book a demo</a><a href="/contact/">Contact</a><a href="/legal/">Legal</a><a href="${SUPPORT_URL}">Support ↗</a></nav>
  </div><div class="footer-bottom"><span>© 2026 Casevault™</span><span><a href="/legal/privacy-policy/">Privacy</a> · <a href="/legal/terms-and-conditions/">Terms</a></span><span>Built for immigration practices worldwide</span></div></div></footer>`;
}

function dashboard() {
  return `<div class="dashboard-wrap" aria-label="Casevault product dashboard preview"><div class="dashboard">
    <aside class="dash-side"><div class="dash-brand">▣ casevault</div><div class="dash-item active">⌂ Overview</div><div class="dash-item">◎ Cases <b>42</b></div><div class="dash-item">♙ Clients</div><div class="dash-item">▤ Documents</div><div class="dash-item">◷ Tasks <b>8</b></div><div class="dash-item">▢ Invoices</div></aside>
    <div class="dash-main"><div class="dash-head"><div><small>MONDAY, 27 JULY</small><h3>Good morning, Amara</h3></div><span class="avatar">AO</span></div>
    <div class="metrics"><div class="metric"><small>ACTIVE CASES</small><strong>42</strong><em>+12% this month</em></div><div class="metric"><small>COMPLETED</small><strong>128</strong><em>8 this month</em></div><div class="metric"><small>TASKS DUE</small><strong>8</strong><em>3 due today</em></div></div>
    <div class="dash-grid"><div class="case-list"><div class="panel-title">RECENTLY UPDATED</div>
      <div class="case-line"><div class="case-person"><i>CA</i><span><b>Chen, Amira</b><small>UK Spouse Visa</small></span></div><em class="status">Documents</em></div>
      <div class="case-line"><div class="case-person"><i>OM</i><span><b>Okafor, Michael</b><small>Canada Express Entry</small></span></div><em class="status">Review</em></div>
      <div class="case-line"><div class="case-person"><i>AS</i><span><b>Ahmed, Sara</b><small>UK Skilled Worker</small></span></div><em class="status">Filed</em></div>
      <div class="case-line"><div class="case-person"><i>KB</i><span><b>Kamau, Brian</b><small>Family Sponsorship</small></span></div><em class="status">Intake</em></div>
    </div><div class="deadline-list"><div class="panel-title">DEADLINES</div><div class="deadline"><b>Biometrics appointment</b><small>Today · 10:30</small></div><div class="deadline"><b>Document submission</b><small>27 July</small></div><div class="deadline"><b>Visa expiry reminder</b><small>02 August</small></div></div></div></div>
  </div><div class="float-note"><span>CLIENT UPDATE</span><b>Amira viewed your message</b></div></div>`;
}

function trust() {
  return `<section class="trust"><div class="wrap"><p>Built by people who managed immigration cases before building software.</p><div class="trust-stat"><strong>1,680+</strong><span>Real cases</span></div><div class="trust-stat"><strong>5 min</strong><span>First setup</span></div><div class="trust-stat"><strong>24/7</strong><span>Secure access</span></div></div></section>`;
}

function cta(title = "Ready to run every case in one place?", text = "Start free. No credit card required. Set up your first case in minutes.") {
  return `<section class="cta"><span class="section-label" style="justify-content:center;color:#8f99aa">Your practice, without the chaos</span><h2>${title}</h2><p>${text}</p><a class="btn light" href="${APP_URL}">Start free <span>↗</span></a></section>`;
}

function visualList(title, rows) {
  return `<div class="visual-card"><div class="visual-head"><b>${title}</b><span class="avatar">AO</span></div><div class="visual-list">${rows.map((row) => `<div class="visual-row"><span><b>${row[0]}</b><small>${row[1]}</small></span><em>${row[2]}</em></div>`).join("")}</div></div>`;
}

function breadcrumb(path, label) {
  if (path === "/") return "";
  return `<div class="breadcrumbs"><a href="/">Home</a> / <span>${label}</span></div>`;
}

function interiorHero({ path, label, eyebrow, title, copy, panel, primary = "Start free", secondary = "Book a demo" }) {
  return `<section class="page-hero"><div class="wrap">${breadcrumb(path, label)}<div class="page-hero-grid"><div><span class="eyebrow"><i class="signal"></i>${eyebrow}</span><h1>${title}</h1><p>${copy}</p><div class="hero-actions"><a class="btn" href="${APP_URL}">${primary} ↗</a><a class="btn ghost" href="/demo/">${secondary}</a></div></div>${panel}</div></div></section>`;
}

function cardGrid(items) {
  return `<div class="card-grid">${items.map((item) => `<article class="card"><span class="card-icon">${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p>${item[3] ? `<a href="${item[3]}">Learn more →</a>` : ""}</article>`).join("")}</div>`;
}

function sectionHead(label, title, copy) {
  return `<div class="section-head"><div><span class="section-label">${label}</span><h2>${title}</h2></div><p>${copy}</p></div>`;
}

const faqs = [
  ["What countries does Casevault support?", "Casevault is not built around one country's immigration system. It can support practices working across the UK, US, Canada, Ireland and global immigration corridors."],
  ["Do I need technical skills to use Casevault?", "No. Casevault is designed for immigration professionals. If you are comfortable using email and everyday business software, you can get started with Casevault."],
  ["Can my team work in Casevault together?", "Yes. Pro and Agency plans support multiple case handlers working from the same case information, documents and timelines."],
  ["Does Casevault include a client portal?", "Yes. The client experience brings case status, document requests, messages and other important information into one secure place."],
  ["Can Casevault manage documents?", "Yes. Documents are organized around the client and case so they are easier to request, review, find and prepare for the next step."],
  ["Does Casevault support invoicing?", "Yes. Casevault can generate invoices and fee agreement documents with numbering and prefixes that fit your practice."],
  ["Is there a plan for solo consultants?", "Yes. The Starter plan is designed for one user managing up to 25 active cases."],
  ["Can I try Casevault before paying?", "Yes. You can start free without entering a credit card."],
];

function faqMarkup(items = faqs) {
  return `<div class="faq-list">${items.map(([q, a]) => `<details><summary>${q}<span>＋</span></summary><p>${a}</p></details>`).join("")}</div>`;
}

function homePage() {
  return `<main id="main"><section class="home-hero wrap"><div class="hero-copy"><span class="eyebrow"><i class="signal"></i>Built for modern immigration practices</span><h1>Run every case.<br>Miss nothing.</h1><p>One secure workspace for clients, documents, deadlines, billing and communication—from first intake to final decision.</p><div class="hero-actions"><a class="btn" href="${APP_URL}">Start free <span>↗</span></a><a class="text-link" href="/how-it-works/">See how it works ↓</a></div><div class="proof-note"><i class="signal"></i><span><strong>1,680+ real cases</strong> shaped every workflow</span></div></div>${dashboard()}</section>${trust()}
  <section class="section"><div class="wrap">${sectionHead("01 / The platform", "One calm workspace.<br>Complete control.", "Replace scattered spreadsheets, WhatsApp threads and forgotten folders with a single source of truth your whole practice can trust.")}
    <div class="bento"><article class="bento-card large"><div><span class="section-label">Case management</span><h3>See every case at a glance.</h3><p>Live stages, deadlines, owners and next actions—without asking for an update.</p><a class="text-link" href="/case-management/" style="display:inline-block;margin-top:24px">Explore case management →</a></div><div class="pipeline"><div class="pipe-head"><b>Case pipeline</b><span>42 active cases</span></div><div class="pipe-row"><span>Intake</span><div><i style="width:38%"></i></div><b>8</b></div><div class="pipe-row"><span>Documents</span><div><i style="width:67%"></i></div><b>14</b></div><div class="pipe-row"><span>Review</span><div><i style="width:48%"></i></div><b>10</b></div><div class="pipe-row"><span>Filed</span><div><i style="width:29%"></i></div><b>6</b></div><div class="pipe-row"><span>Decision</span><div><i style="width:19%"></i></div><b>4</b></div></div></article>
      <article class="bento-card dark-card"><span class="section-label" style="color:#9ba6b6">Documents</span><h3>Nothing lost.<br>Nothing misplaced.</h3><p>Securely collect, review and attach every file to the right client and case.</p><a class="btn light" href="/document-management/" style="margin-top:30px">Explore documents →</a></article>
      <article class="bento-card green"><span class="section-label">Client experience</span><h3>Updates clients actually see.</h3><p>Send clear updates and give clients a portal they will actually use.</p><a class="btn dark" href="/client-portal/" style="margin-top:30px">Explore the portal →</a></article>
    </div></div></section>
  <section class="section dark"><div class="wrap">${sectionHead("02 / How it works", "From new enquiry<br>to final decision.", "Casevault follows the way immigration work actually moves, so setup feels familiar from day one.")}<div class="steps"><article class="step"><span>01</span><i>＋</i><h3>Create the client</h3><p>Capture personal details and immigration history once.</p></article><article class="step"><span>02</span><i>▤</i><h3>Build the case</h3><p>Select the matter type, assign an owner and start the workflow.</p></article><article class="step"><span>03</span><i>✓</i><h3>Move with confidence</h3><p>Track documents, tasks, fees and communication.</p></article><article class="step"><span>04</span><i>↗</i><h3>Record the outcome</h3><p>Close the matter with a complete, organized record.</p></article></div></div></section>
  <section class="section"><div class="wrap"><div class="split"><div class="split-copy"><span class="section-label">Built from experience</span><h2>We did not imagine the workflow. We lived it.</h2><p>Casevault was shaped by a team that processed more than 1,680 real immigration cases before writing a line of code. The result is software grounded in the practical details that generic tools miss.</p><a class="btn ghost" href="/about/" style="margin-top:20px">Our story →</a></div><div class="story"><p>“The best immigration software should make the work feel clearer—not add another layer of administration.”</p><small>THE PRINCIPLE BEHIND CASEVAULT</small></div></div></div></section>
  <section class="section soft"><div class="wrap">${sectionHead("03 / Built to scale", "One platform for every stage of your practice.", "Start as a solo consultant, add case handlers as your practice grows and keep one consistent operating system.")}${cardGrid([["◎","Solo consultants","Manage every client, document, invoice and update without ten different tools.","/solutions/solo-consultants/"],["♙","Growing firms","Give every case handler the same live case information and clear ownership.","/solutions/immigration-law-firms/"],["⌾","Cross-border practices","Handle cases across countries without forcing every matter into one country's system.","/solutions/multi-country-practices/"]])}</div></section>${cta()}</main>`;
}

function featuresPage() {
  const panel = `<div class="hero-panel"><span class="section-label">Everything connected</span><h3>A complete practice workspace</h3><ul class="check-list"><li><i>✓</i>Structured client intake and immigration history</li><li><i>✓</i>Stage-by-stage case timeline tracking</li><li><i>✓</i>Case-linked document management</li><li><i>✓</i>Client portal and WhatsApp-ready updates</li><li><i>✓</i>Invoices and fee agreement documents</li><li><i>✓</i>Team ownership, tasks and deadlines</li></ul></div>`;
  return `<main id="main">${interiorHero({path:"/features/",label:"Features",eyebrow:"Immigration practice management",title:"Every moving part.<br>One connected platform.",copy:"Casevault brings casework, documents, clients, communication and billing together so your practice can move faster without losing control.",panel})}
  <section class="section"><div class="wrap">${sectionHead("Platform capabilities", "Everything your practice needs, without the chaos.", "Each feature is designed around real immigration work and the information your team needs to move a case forward.")}${cardGrid([["◎","Case management","Structured client profiles, case stages, timelines, owners, tasks and critical deadlines.","/case-management/"],["▤","Document management","Case-linked storage, document requests and clear visibility into what is still missing.","/document-management/"],["↗","Client portal","Give clients a secure place for status updates, documents, messages and invoices.","/client-portal/"],["◷","Tasks and deadlines","Keep the next action visible and assign work to the right case handler."],["▢","Smart invoicing","Create invoices and fee agreement PDFs with practice-specific numbering."],["⌾","Multi-country flexibility","Manage matters across jurisdictions without a rigid country-only workflow.","/solutions/multi-country-practices/"]])}</div></section>
  <section class="section soft"><div class="wrap"><div class="split"><div class="split-copy"><span class="section-label">One source of truth</span><h2>Stop rebuilding the same context in every tool.</h2><p>Client details should flow into the case. Documents should belong to the matter. Tasks should show the owner. Updates should use the latest status. Casevault keeps the information connected.</p></div>${visualList("Connected case record",[["Client profile","Personal details and immigration history","Complete"],["Spouse visa matter","Stage, owner and next action","In review"],["Document checklist","9 of 12 files received","3 missing"],["Invoice CV-0142","Fee agreement and payment status","Sent"]])}</div></div></section>${cta("Bring your whole practice into one view.")}</main>`;
}

function caseManagementPage() {
  const panel = visualList("Recently updated cases",[["Amira Chen","UK Spouse Visa","Documents"],["Michael Okafor","Canada Express Entry","Review"],["Sara Ahmed","UK Skilled Worker","Filed"],["Brian Kamau","Family Sponsorship","Intake"]]);
  return `<main id="main">${interiorHero({path:"/case-management/",label:"Case management",eyebrow:"Immigration case tracking software",title:"Every case.<br>Always clear.",copy:"Track every immigration matter from intake to approval with structured stages, owners, deadlines, documents and a complete history in one place.",panel})}
  <section class="section"><div class="wrap">${sectionHead("Case command", "Know what is happening—and what happens next.", "A live view of every matter helps solo consultants and teams act before deadlines become emergencies.")}${cardGrid([["◎","Structured case stages","Build a clear journey from intake and document collection through filing and decision."],["◷","Tasks and deadlines","Connect work and due dates directly to the relevant matter."],["♙","Clear ownership","See who is responsible for the next action across a growing team."],["▤","Complete case history","Keep immigration history, documents, notes and changes attached to the record."],["⌕","Fast retrieval","Find the client or case context without searching through folders and chats."],["↗","Client-ready updates","Turn the latest case stage into a clear update for the client."]])}</div></section>
  <section class="section dark"><div class="wrap">${sectionHead("Built for real caseloads", "Your practice at a glance.", "View pipeline health, upcoming deadlines and recently updated matters without opening every record.")}<div class="steps"><article class="step"><span>01</span><i>42</i><h3>Active matters</h3><p>See volume across stages and case handlers.</p></article><article class="step"><span>02</span><i>8</i><h3>Tasks due</h3><p>Bring today's priorities into focus.</p></article><article class="step"><span>03</span><i>3</i><h3>At risk</h3><p>Surface matters that need intervention.</p></article><article class="step"><span>04</span><i>6</i><h3>Recently filed</h3><p>Track movement through the pipeline.</p></article></div></div></section>${cta("Make every case easier to run.")}</main>`;
}

function documentPage() {
  const panel = `<div class="hero-panel dark-panel"><span class="section-label" style="color:#9ba6b6">Document checklist · Amira Chen</span><h3>9 of 12 documents received</h3><ul class="check-list"><li><i>✓</i>Passport bio page</li><li><i>✓</i>Marriage certificate</li><li><i>✓</i>Proof of accommodation</li><li><i>!</i>Police certificate — requested</li><li><i>!</i>Bank statements — requested</li><li><i>!</i>Employment letter — requested</li></ul></div>`;
  return `<main id="main">${interiorHero({path:"/document-management/",label:"Document management",eyebrow:"Immigration document management software",title:"Nothing lost.<br>Nothing “FINAL_v3.”",copy:"Collect, organize and review every immigration document inside the client and case record—never in a random folder or buried message thread.",panel})}
  <section class="section"><div class="wrap"><div class="split"><div class="split-copy"><span class="section-label">Case-linked storage</span><h2>Every document arrives with context.</h2><p>Know who uploaded the file, which matter it belongs to and whether it satisfies the checklist. Your team spends less time searching and more time reviewing.</p><ul class="check-list"><li><i>✓</i>Centralized, case-linked document storage</li><li><i>✓</i>Clear missing-document visibility</li><li><i>✓</i>Simple retrieval for you and your team</li><li><i>✓</i>Client-friendly document requests</li></ul></div>${visualList("Recent documents",[["Police certificate.pdf","Amira Chen · Client upload","New"],["Bank statements.pdf","Michael Okafor · 6 pages","Review"],["Employment letter.pdf","Sara Ahmed · Verified","Ready"],["Passport scan.pdf","Brian Kamau · Client upload","New"]])}</div></div></section>
  <section class="section soft"><div class="wrap">${sectionHead("A cleaner document workflow", "Request. Receive. Review. Move forward.", "Casevault makes document progress visible to both the professional and the client.")}${cardGrid([["↗","Request clearly","Tell clients exactly which documents are needed and why."],["⇣","Receive securely","Keep uploads inside the client and matter context."],["✓","Review confidently","See what is ready, what needs review and what is still missing."]])}</div></section>${cta("Take control of every case document.")}</main>`;
}

function clientPortalPage() {
  const panel = `<div class="hero-panel"><div class="visual-head"><div class="case-person"><i>CA</i><span><b>Welcome back, Amira</b><small>Your application is moving forward</small></span></div><em class="status">On track</em></div><div style="padding:25px 0 15px"><b style="font-size:10px">UK Spouse Visa application</b><div style="height:8px;margin:10px 0;border-radius:8px;background:#eceef0"><i style="display:block;width:74%;height:100%;border-radius:8px;background:var(--violet)"></i></div><span style="font-size:8px;color:#858c96">Current stage: Document review</span></div><div class="visual-list"><div class="visual-row"><span><b>Police certificate</b><small>Uploaded today</small></span><em>Received</em></div><div class="visual-row"><span><b>Case update</b><small>Your documents are being reviewed</small></span><em>New</em></div><div class="visual-row"><span><b>Invoice CV-0142</b><small>Due 30 July</small></span><em>View</em></div></div></div>`;
  return `<main id="main">${interiorHero({path:"/client-portal/",label:"Client portal",eyebrow:"Immigration client portal",title:"Keep clients informed.<br>Keep your day moving.",copy:"Give every client one secure place to check case status, respond to document requests, read updates and view invoices.",panel})}
  <section class="section"><div class="wrap">${sectionHead("A better client experience", "Fewer “what is happening?” calls. More confidence.", "Clients do not need every internal detail. They need a clear status, a clear request and confidence that their case is moving.")}${cardGrid([["◎","Live case status","Let clients see the latest meaningful stage without exposing internal complexity."],["▤","Document requests","Make outstanding items easy to understand and simple to provide."],["↗","Clear updates","Share important progress in language clients can follow."],["▢","Invoices in one place","Give clients a direct route to their fee and invoice documents."],["◷","Important reminders","Surface approaching appointments and outstanding actions."],["⌾","Access from anywhere","Support clients working across countries and time zones."]])}</div></section>
  <section class="section soft"><div class="wrap"><div class="split">${visualList("Client update",[["Application status","Moved to final review","Just now"],["Documents","Police certificate received","Today"],["Next action","Review and confirm details","Due Friday"],["Message","Your case handler sent an update","Unread"]])}<div class="split-copy"><span class="section-label">Communication with context</span><h2>Every update starts from the latest case information.</h2><p>Casevault helps your team communicate from the shared record, reducing mixed messages and keeping important information attached to the matter.</p></div></div></div></section>${cta("Give clients clarity without adding more admin.")}</main>`;
}

function howItWorksPage() {
  const panel = `<div class="hero-panel"><span class="section-label">Your first case</span><h3>Set up in four clear steps</h3><ul class="check-list"><li><i>1</i>Add practice details</li><li><i>2</i>Create the client and matter</li><li><i>3</i>Collect documents and move the timeline</li><li><i>4</i>Invoice, communicate and record the outcome</li></ul><div class="notice" style="margin-top:20px">No credit card required. Start with one real case and build from there.</div></div>`;
  return `<main id="main">${interiorHero({path:"/how-it-works/",label:"How it works",eyebrow:"From setup to decision",title:"A familiar workflow.<br>A much clearer system.",copy:"Casevault follows the natural movement of immigration work, connecting client details, case stages, documents, communication and billing.",panel})}
  <section class="section dark"><div class="wrap">${sectionHead("The workflow", "From first enquiry to final outcome.", "A consistent process helps every matter move with less friction and fewer missed details.")}<div class="steps"><article class="step"><span>01</span><i>＋</i><h3>Set up the practice</h3><p>Add practice details and invite case handlers when needed.</p></article><article class="step"><span>02</span><i>♙</i><h3>Create the client</h3><p>Capture identity, contact details and immigration history once.</p></article><article class="step"><span>03</span><i>◎</i><h3>Run the case</h3><p>Track stages, documents, tasks, communication and deadlines.</p></article><article class="step"><span>04</span><i>✓</i><h3>Record the outcome</h3><p>Complete the matter with an organized, reusable record.</p></article></div></div></section>
  <section class="section"><div class="wrap"><div class="split"><div class="split-copy"><span class="section-label">Built to feel familiar</span><h2>Start with the work you already understand.</h2><p>You do not need to redesign your entire practice before using Casevault. Begin with one client, use the workflow that matches the matter and expand as your team becomes comfortable.</p><ul class="check-list"><li><i>✓</i>No technical setup required</li><li><i>✓</i>Guided onboarding for larger teams</li><li><i>✓</i>Flexible multi-country case support</li></ul></div>${visualList("First case checklist",[["Practice profile","Brand and document details","Complete"],["Client record","Personal and immigration history","Complete"],["Matter workflow","UK Spouse Visa","Selected"],["Document request","12 items prepared","Ready"]])}</div></div></section>${cta("Set up your first case in minutes.")}</main>`;
}

function pricingPage() {
  const panel = `<div class="hero-panel"><span class="section-label">Simple pricing</span><h3>Start at $39/month</h3><p style="color:var(--muted);font-size:11px;line-height:1.7">Choose a plan around the way your practice works today. Upgrade as your caseload or team grows.</p><ul class="check-list"><li><i>✓</i>No credit card required to start</li><li><i>✓</i>Annual plans save 20%</li><li><i>✓</i>Dedicated onboarding on Agency</li></ul></div>`;
  return `<main id="main">${interiorHero({path:"/pricing/",label:"Pricing",eyebrow:"Plans for every practice",title:"Start small.<br>Scale without switching.",copy:"Clear plans for independent consultants, growing practices and established firms managing cases across countries.",panel})}
  <section class="section"><div class="wrap"><div class="pricing-toggle" aria-label="Pricing period"><span class="active">Monthly pricing</span><span>Annual · Save 20%</span></div><div class="pricing-grid">
    <article class="price-card"><span>Starter</span><h3>Solo practice</h3><div class="amount">$39<small>/month</small></div><p>For independent consultants managing their own caseload.</p><a class="btn ghost" href="${APP_URL}">Start with Starter ↗</a><ul class="check-list"><li><i>✓</i>Up to 25 active cases</li><li><i>✓</i>1 user</li><li><i>✓</i>Client and case management</li><li><i>✓</i>Documents and invoicing</li></ul></article>
    <article class="price-card featured"><span>Pro</span><b class="badge">Most popular</b><h3>Growing practice</h3><div class="amount">$89<small>/month</small></div><p>For practices with multiple case handlers and a growing caseload.</p><a class="btn" href="${APP_URL}">Start with Pro ↗</a><ul class="check-list"><li><i>✓</i>Up to 3 team members</li><li><i>✓</i>Task management</li><li><i>✓</i>Shared case visibility</li><li><i>✓</i>Client portal and communication</li></ul></article>
    <article class="price-card"><span>Agency</span><h3>Established firm</h3><div class="amount">$179<small>/month</small></div><p>For established firms managing high case volume across countries.</p><a class="btn ghost" href="/demo/">Talk to us ↗</a><ul class="check-list"><li><i>✓</i>Unlimited team members</li><li><i>✓</i>High-volume case management</li><li><i>✓</i>Dedicated onboarding</li><li><i>✓</i>Built for multi-country work</li></ul></article>
  </div><div class="notice" style="margin-top:25px">Annual billing: Starter $384/year, Pro $888/year and Agency $1,788/year. Prices shown in USD.</div></div></section>
  <section class="section soft"><div class="wrap"><div class="faq-layout"><div><span class="section-label">Pricing questions</span><h2>Good to know.</h2><p style="color:var(--muted);font-size:12px;line-height:1.7">Choose based on active cases and the number of people who need to work inside the practice.</p></div>${faqMarkup([faqs[6],faqs[7],faqs[2],["Can I change plans later?","Yes. Choose the plan that fits your practice today and change as your caseload or team requirements evolve."]])}</div></div></section>${cta("Choose your plan and start organizing the work.")}</main>`;
}

function securityPage() {
  const panel = `<div class="hero-panel dark-panel"><span class="section-label" style="color:#9ba6b6">Security principles</span><h3>Protect access. Minimize exposure. Keep control.</h3><ul class="check-list"><li><i>✓</i>Practice-controlled user access</li><li><i>✓</i>Secure document storage</li><li><i>✓</i>Account and session protection</li><li><i>✓</i>Responsible operational practices</li></ul><div class="notice" style="margin-top:20px;background:#243244;border-color:#3c4a5b;color:#b8c3d0">Request the current security documentation for technical and procurement review.</div></div>`;
  return `<main id="main">${interiorHero({path:"/security/",label:"Security",eyebrow:"Client data deserves care",title:"Security designed around sensitive casework.",copy:"Immigration matters contain personal and confidential information. Casevault is designed to keep practice access controlled and case information organized in one secure system.",panel,primary:"Start securely",secondary:"Request security details"})}
  <section class="section"><div class="wrap">${sectionHead("Security approach", "Clear controls for a high-trust workflow.", "Security is not a marketing badge. It is a combination of product controls, infrastructure, operational discipline and responsible user practices.")}${cardGrid([["♙","Controlled access","Keep account access limited to the people authorized by your practice."],["▤","Secure document handling","Store client files inside the relevant matter instead of uncontrolled folders and message threads."],["⌁","Protected connections","Use secure web connections for access to the Casevault service."],["◷","Session awareness","Reduce risk by keeping account and session behavior controlled."],["◎","Case-level organization","Prevent accidental confusion by attaching information to the correct client and matter."],["↗","Procurement support","Contact the team for the latest security and data-handling documentation."]])}</div></section>
  <section class="section soft"><div class="wrap"><div class="split"><div class="split-copy"><span class="section-label">Shared responsibility</span><h2>Good security includes the way your practice works.</h2><p>Use unique accounts, review team access, remove former users promptly, keep devices protected and avoid exporting sensitive information into uncontrolled channels.</p></div><div class="hero-panel"><h3>Recommended practice controls</h3><ul class="check-list"><li><i>✓</i>Use individual user accounts</li><li><i>✓</i>Review access when roles change</li><li><i>✓</i>Keep browsers and devices updated</li><li><i>✓</i>Use strong authentication practices</li><li><i>✓</i>Report suspicious access immediately</li></ul></div></div></div></section>${cta("Move sensitive casework into a clearer system.")}</main>`;
}

function solutionPage(type) {
  const data = {
    solo: {
      path:"/solutions/solo-consultants/",label:"Solo consultants",eyebrow:"Immigration consultant software",title:"One login.<br>Your whole practice.",copy:"Manage clients, cases, documents, invoices and updates yourself—without ten different tools and a messy trail of spreadsheets and messages.",
      cards:[["◎","Your caseload at a glance","See every active matter, deadline and next action from one view."],["▤","Documents in context","Keep every client file attached to the right case."],["▢","Professional billing","Generate clean invoices and fee agreement documents quickly."]],
      section:"Stay organized without hiring more administration.",sectionCopy:"Casevault reduces the time spent rebuilding context across tools, so you can focus on reviewing matters, advising clients and moving applications forward."
    },
    firms: {
      path:"/solutions/immigration-law-firms/",label:"Immigration law firms",eyebrow:"Immigration law firm software",title:"Bring your team in.<br>Keep control.",copy:"Give every case handler the same live client, case and document information while keeping ownership and upcoming work clear.",
      cards:[["♙","Clear case ownership","See who is responsible for the next action on every matter."],["◎","Shared case visibility","Reduce handoff gaps with one current record for the whole team."],["◷","Tasks and deadlines","Connect assignments and due dates directly to the matter."]],
      section:"Scale the team without multiplying the chaos.",sectionCopy:"A shared system protects continuity when cases move between people, workloads shift or the practice adds new case handlers."
    },
    global: {
      path:"/solutions/multi-country-practices/",label:"Multi-country practices",eyebrow:"Global immigration case management",title:"One system.<br>Every country you serve.",copy:"Manage UK, US, Canadian, Irish and global immigration matters without forcing every case into one country's assumptions.",
      cards:[["⌾","Flexible matter types","Organize different immigration routes inside one consistent practice system."],["◎","One portfolio view","See cases across countries, stages and case handlers together."],["↗","Cross-border client access","Support clients working across locations and time zones."]],
      section:"Built for the global corridor—and beyond.",sectionCopy:"Casevault gives your practice a consistent operating layer while leaving room for the differences between jurisdictions and matter types."
    }
  }[type];
  const panel = visualList("Practice overview",[["Amira Chen","UK Spouse Visa","Documents"],["Michael Okafor","Canada Express Entry","Review"],["Sara Ahmed","UK Skilled Worker","Filed"],["Brian Kamau","Family Sponsorship","Intake"]]);
  return `<main id="main">${interiorHero({path:data.path,label:data.label,eyebrow:data.eyebrow,title:data.title,copy:data.copy,panel})}<section class="section"><div class="wrap">${sectionHead("Designed for your practice",data.section,data.sectionCopy)}${cardGrid(data.cards)}</div></section><section class="section soft"><div class="wrap"><div class="split"><div class="split-copy"><span class="section-label">From experience, not guesswork</span><h2>Workflows shaped by more than 1,680 real cases.</h2><p>Casevault was built after the team understood the day-to-day friction of immigration casework: repeated client updates, scattered documents, unclear next actions and the difficulty of seeing the whole practice at once.</p><a class="btn ghost" href="/about/" style="margin-top:20px">Read the Casevault story →</a></div>${visualList("What stays connected",[["Client details","Identity and immigration history","Current"],["Matter timeline","Stage, owner and deadlines","Live"],["Documents","Requests, uploads and review","9 of 12"],["Communication","Updates and client access","Connected"]])}</div></div></section>${cta()}</main>`;
}

function aboutPage() {
  const panel = `<div class="hero-panel dark-panel"><span class="section-label" style="color:#9ba6b6">The starting point</span><h3>1,680+ immigration cases</h3><p style="color:#aab4c1;font-size:12px;line-height:1.75">Before Casevault became software, it was a real operational problem: keeping clients, cases, documents, communication and billing together while the caseload kept growing.</p></div>`;
  return `<main id="main">${interiorHero({path:"/about/",label:"About Casevault",eyebrow:"Built from real casework",title:"We knew the problem before we built the product.",copy:"Casevault was shaped by people who processed more than 1,680 immigration cases and understood exactly where generic tools stop helping.",panel,primary:"Explore Casevault",secondary:"Meet the platform"})}
  <section class="section"><div class="wrap"><div class="split"><div class="split-copy"><span class="section-label">Why Casevault exists</span><h2>Good immigration work should not depend on perfect memory.</h2><p>As caseloads grow, information spreads across spreadsheets, folders, email, WhatsApp and individual team members. The work becomes harder to see, clients ask for more updates and important context is easy to miss.</p><p>Casevault exists to give immigration practices one clear operating system: a connected record of the client, the matter, the documents, the communication and the money.</p></div><div class="story"><p>Build the product around the casework—not the other way around.</p><small>CASEVAULT PRODUCT PRINCIPLE</small></div></div></div></section>
  <section class="section soft"><div class="wrap">${sectionHead("What guides the product", "Clearer work. Better client confidence.", "The strongest software disappears into a better practice workflow.")}${cardGrid([["◎","Clarity before complexity","Make the state of every matter understandable at a glance."],["↗","Clients deserve context","Help practices communicate clearly without adding repetitive work."],["⌾","Built for work across borders","Support the real flexibility of modern immigration practices."]])}</div></section>${cta("See what a calmer practice can look like.")}</main>`;
}

function faqPage() {
  const panel = `<div class="hero-panel"><span class="section-label">Quick answer</span><h3>Can I start without a credit card?</h3><p style="color:var(--muted);font-size:12px;line-height:1.7">Yes. Start free, set up your practice and create your first case without entering a credit card.</p><a class="btn" href="${APP_URL}" style="margin-top:20px">Start free ↗</a></div>`;
  return `<main id="main">${interiorHero({path:"/faq/",label:"Frequently asked questions",eyebrow:"Answers before you start",title:"Everything you need to know about Casevault.",copy:"Find answers about countries, setup, team access, the client portal, documents, invoicing, security and pricing.",panel})}<section class="section"><div class="wrap"><div class="faq-layout"><div><span class="section-label">Casevault FAQ</span><h2>Good to know.</h2><p style="color:var(--muted);font-size:12px;line-height:1.7">Still deciding? Book a demo and walk through the workflow with the Casevault team.</p><a class="btn ghost" href="/demo/" style="margin-top:20px">Book a demo →</a></div>${faqMarkup()}</div></div></section>${cta()}</main>`;
}

function demoPage() {
  const panel = `<div class="hero-panel"><span class="section-label">What we will cover</span><h3>A practical product walkthrough</h3><ul class="check-list"><li><i>✓</i>Your current case workflow</li><li><i>✓</i>Client and document organization</li><li><i>✓</i>Team access and case ownership</li><li><i>✓</i>Pricing and onboarding fit</li></ul></div>`;
  return `<main id="main">${interiorHero({path:"/demo/",label:"Book a demo",eyebrow:"See Casevault in context",title:"Bring one workflow.<br>Leave with a clearer way to run it.",copy:"See how Casevault can organize your clients, cases, documents, deadlines, communication and invoicing around the way your practice already works.",panel,primary:"Start free now",secondary:"Contact the team"})}
  <section class="section"><div class="wrap">${sectionHead("A useful conversation", "Your practice first. Product second.", "A good demo should answer whether Casevault fits your caseload, team and jurisdictions—not just show every button.")}${cardGrid([["01","Tell us how you work","Share your practice size, countries and biggest operational challenge."],["02","Walk through a real flow","See the journey from client intake to documents, updates, billing and outcome."],["03","Choose the right next step","Start free or plan guided onboarding for a larger team."]])}<div style="margin-top:30px;text-align:center"><a class="btn" href="${SALES_URL}">Request your demo by email →</a></div></div></section>${cta("Prefer to explore on your own?", "Start free and create your first practice workspace without a credit card.")}</main>`;
}

function contactPage() {
  const panel = `<div class="hero-panel"><span class="section-label">Fastest routes</span><h3>Choose what you need</h3><ul class="check-list"><li><i>↗</i>Product and pricing questions</li><li><i>↗</i>Account and technical support</li><li><i>↗</i>Partnership and media enquiries</li></ul></div>`;
  return `<main id="main">${interiorHero({path:"/contact/",label:"Contact",eyebrow:"Talk to Casevault",title:"The right conversation, without the runaround.",copy:"Whether you are choosing a plan, setting up a team or looking for account help, use the route that gets you to the right place fastest.",panel,primary:"Start free",secondary:"Book a demo"})}
  <section class="section"><div class="wrap"><div class="contact-grid"><article class="contact-card"><span class="card-icon">↗</span><h3>Sales and demos</h3><p>Talk through your caseload, team and the plan that fits your practice.</p><a href="${SALES_URL}">Email sales@casvault.com →</a></article><article class="contact-card"><span class="card-icon">?</span><h3>Account support</h3><p>Get help with an existing Casevault workspace or product question.</p><a href="${SUPPORT_URL}">Visit the support centre ↗</a></article><article class="contact-card"><span class="card-icon">＋</span><h3>Start immediately</h3><p>Prefer to explore first? Create your workspace without a credit card.</p><a href="${APP_URL}">Start free ↗</a></article></div></div></section>${cta()}</main>`;
}

function legalHero(path, label, title, copy) {
  return `<section class="page-hero"><div class="wrap">${breadcrumb(path,label)}<span class="eyebrow"><i class="signal"></i>Casevault legal</span><h1 style="max-width:900px">${title}</h1><p>${copy}</p></div></section>`;
}

function legalIndexPage() {
  return `<main id="main">${legalHero("/legal/","Legal","Clear terms.<br>Responsible data handling.","Understand the terms that govern Casevault and how account and client case data are handled.")}<section class="section"><div class="wrap"><div class="contact-grid"><article class="contact-card"><span class="card-icon">01</span><h3>Terms and Conditions</h3><p>Account use, subscriptions, client data, acceptable use and service terms.</p><a href="/legal/terms-and-conditions/">Read the terms →</a></article><article class="contact-card"><span class="card-icon">02</span><h3>Privacy Policy</h3><p>How Casevault collects, uses, stores and protects account and client data.</p><a href="/legal/privacy-policy/">Read the privacy policy →</a></article><article class="contact-card"><span class="card-icon">03</span><h3>Security</h3><p>Product security principles and responsible access controls.</p><a href="/security/">Review security →</a></article></div></div></section></main>`;
}

function termsPage() {
  const sections = [
    ["1. Introduction",`These Terms and Conditions govern access to and use of Casevault, a case management software product owned and operated by Rova Media Digital, Inc., a Delaware corporation. By creating an account or using Casevault, you agree to be bound by these Terms. If you do not agree, do not access or use Casevault.`],
    ["2. Who can use Casevault",`Casevault is designed for immigration consultants, advisers, agencies and law firms. You must be at least 18, have authority to bind your practice or firm, and be authorized to provide immigration services where local law requires it. Casevault is a case management tool; it does not provide immigration advice or legal representation.`],
    ["3. Account registration",`You agree to provide accurate, current information and keep your login credentials confidential. You are responsible for activity under your account, including actions taken by team members you invite.`],
    ["4. Subscription plans and billing",`Casevault is offered under Starter, Pro, Agency and any future subscription tiers described on the Pricing page. Fees are billed monthly or annually in advance. Subscriptions renew automatically unless cancelled before renewal. Pricing changes will be communicated with at least 30 days' notice to existing subscribers. Refunds are discretionary except where required by law.`],
    ["5. Client data you upload",`You represent that you have the necessary consent to process and store client data through Casevault, that your practice acts as data controller and Rova Media Digital, Inc. acts as data processor, and that you will comply with applicable data protection laws.`],
    ["6. Acceptable use",`You may not use Casevault for unlawful purposes, immigration fraud or misrepresentation; attempt to breach or disrupt platform security; upload data you are not authorized to process; share access with unauthorized parties; or use the platform in a way that violates applicable law. Accounts that violate these requirements may be suspended or terminated.`],
    ["7. Intellectual property",`Casevault software, design and underlying technology remain the property of Rova Media Digital, Inc. Nothing in these Terms transfers ownership of the platform to you.`],
    ["8. Data ownership",`You retain ownership of client data, case data and documents you upload. Rova Media Digital, Inc. does not claim ownership over user content and processes it only to provide and improve the platform as described in the Privacy Policy.`],
    ["9. Service availability",`Casevault aims to provide a reliable service but cannot guarantee uninterrupted access. Maintenance, technical issues or events outside reasonable control may cause temporary downtime.`],
    ["10. Limitation of liability",`To the maximum extent permitted by law, Rova Media Digital, Inc. is not liable for indirect, incidental or consequential damages; immigration outcomes resulting from user input, user error or government processing; or losses caused by user error. Casevault does not guarantee application outcomes, approval timelines or government decisions.`],
    ["11. Termination",`You may cancel your subscription at any time. Casevault may suspend or terminate accounts that violate these Terms, engage in fraudulent activity or create a security risk. Data export and deletion requests are handled according to the current retention policy and applicable law.`],
    ["12. Governing law",`These Terms are governed by the laws of the State of Delaware, USA, without prejudice to mandatory consumer or data protection rights under applicable local law.`],
    ["13. Changes",`Material changes to these Terms will be communicated by email or in-app notice before they take effect.`],
    ["14. Contact",`Questions about these Terms can be sent to sales@casvault.com.`],
  ];
  return `<main id="main">${legalHero("/legal/terms-and-conditions/","Terms and Conditions","Terms and Conditions","Last updated: 15 July 2026")}<section class="section"><div class="wrap legal-copy">${sections.map(([title,copy])=>`<article><h2>${title}</h2><p>${copy}</p></article>`).join("")}</div></section></main>`;
}

function privacyPage() {
  const sections = [
    ["1. Who we are",`Casevault is owned and operated by Rova Media Digital, Inc., a Delaware corporation. This policy explains how personal data is collected, used, stored and protected through the Casevault platform.`],
    ["2. The data roles",`For account information such as name, email, billing details and practice information, Rova Media Digital, Inc. acts as data controller. For client immigration case data uploaded by a practice, the practice acts as data controller and Rova Media Digital, Inc. acts as data processor.`],
    ["3. What we collect",`Casevault may collect account registration details, practice information, billing information processed by payment providers, client case data entered by users, document uploads, case notes, usage and device data, and communications sent to support.`],
    ["4. How data is used",`Data is used to provide and maintain Casevault, process subscriptions, provide support, improve platform reliability, send service communications and comply with legal obligations. Casevault does not sell account or client data and does not use client immigration data for advertising.`],
    ["5. Legal bases",`Where applicable, processing is based on contract, legitimate interests in improving and securing the platform, consent where required, and legal obligations.`],
    ["6. Data protection standards",`Casevault is built to align with applicable standards including the UK GDPR and Data Protection Act 2018, PIPEDA in Canada, Nigeria Data Protection Act 2023, EU GDPR where applicable, and other local frameworks in the jurisdictions served.`],
    ["7. Storage and security",`Data is encrypted in transit and at rest. Access to client case data is limited to the practice and team members it authorizes. Casevault uses reputable cloud providers and reasonable security reviews. No system can guarantee absolute security.`],
    ["8. Data retention",`Account data is retained while an account is active. Client case data is retained while users maintain it in the platform or as required for legal recordkeeping. Account deletion and retention requests are processed according to applicable law and the current retention schedule.`],
    ["9. Your rights",`Depending on jurisdiction, rights may include access, correction, deletion, portability and objection. Practices remain responsible for client data-subject requests and Casevault supports users in fulfilling those requests as data processor.`],
    ["10. International transfers",`Data may be processed or stored outside the location of a user or client. Where required, Casevault uses appropriate safeguards for cross-border transfers.`],
    ["11. Service providers",`Trusted providers may be used for payment processing, cloud storage and email delivery. They are required to protect data and process it only for the contracted service.`],
    ["12. Children's data",`Casevault is not intended for use by people under 18. Users may upload case data about minors as dependants; practices are responsible for obtaining appropriate parent or guardian consent.`],
    ["13. Policy changes",`Material changes to this policy will be communicated by email or in-app notice.`],
    ["14. Contact",`Privacy and data requests can be initiated through the Casevault support centre.`],
  ];
  return `<main id="main">${legalHero("/legal/privacy-policy/","Privacy Policy","Privacy Policy","Last updated: 15 July 2026")}<section class="section"><div class="wrap legal-copy">${sections.map(([title,copy])=>`<article><h2>${title}</h2><p>${copy}</p></article>`).join("")}<p style="margin-top:30px"><a class="btn ghost" href="${SUPPORT_URL}">Contact privacy support →</a></p></div></section></main>`;
}

function jsonLd(path) {
  const data = pageData[path] || pageData["/"];
  const schemas = [
    {
      "@context":"https://schema.org","@type":"Organization","@id":`${DOMAIN}/#organization`,
      name:"Casevault",legalName:"Rova Media Digital, Inc.",url:DOMAIN,email:"sales@casvault.com",logo:`${DOMAIN}/assets/casevault-wordmark.png`,
      description:"Immigration case management software for consultants and firms working across borders.",
      sameAs:["https://www.linkedin.com/company/casevault/","https://x.com/casevaultc"]
    },
    {
      "@context":"https://schema.org","@type":"WebSite","@id":`${DOMAIN}/#website`,
      url:DOMAIN,name:"Casevault",publisher:{"@id":`${DOMAIN}/#organization`},inLanguage:"en"
    }
  ];
  if (path === "/") {
    schemas.push({
      "@context":"https://schema.org","@type":"WebApplication","@id":`${DOMAIN}/#software`,
      name:"Casevault",url:DOMAIN,applicationCategory:"BusinessApplication",operatingSystem:"Web",
      description:data.description,
      offers:[
        {"@type":"Offer",name:"Starter",price:"39",priceCurrency:"USD",url:`${DOMAIN}/pricing/`},
        {"@type":"Offer",name:"Pro",price:"89",priceCurrency:"USD",url:`${DOMAIN}/pricing/`},
        {"@type":"Offer",name:"Agency",price:"179",priceCurrency:"USD",url:`${DOMAIN}/pricing/`}
      ],
      publisher:{"@id":`${DOMAIN}/#organization`}
    });
  }
  if (path !== "/") {
    const label = path.split("/").filter(Boolean).pop().replaceAll("-"," ");
    schemas.push({
      "@context":"https://schema.org","@type":"BreadcrumbList",
      itemListElement:[
        {"@type":"ListItem",position:1,name:"Home",item:DOMAIN},
        {"@type":"ListItem",position:2,name:label.replace(/\b\w/g,(c)=>c.toUpperCase()),item:`${DOMAIN}${path}`}
      ]
    });
  }
  if (path === "/faq/") {
    schemas.push({
      "@context":"https://schema.org","@type":"FAQPage",
      mainEntity:faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))
    });
  }
  if (path === "/about/") schemas.push({"@context":"https://schema.org","@type":"AboutPage","@id":`${DOMAIN}/about/#page`,url:`${DOMAIN}/about/`,name:data.title});
  if (path === "/contact/") schemas.push({"@context":"https://schema.org","@type":"ContactPage","@id":`${DOMAIN}/contact/#page`,url:`${DOMAIN}/contact/`,name:data.title});
  return schemas.map((schema)=>`<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("");
}

function shell(path, body) {
  const data = pageData[path] || pageData["/"];
  const canonical = `${DOMAIN}${path === "/" ? "/" : path}`;
  return `<!doctype html><html lang="en"><head>
    <meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${data.title}</title><meta name="description" content="${data.description}">
    <meta name="keywords" content="${data.keywords}"><meta name="robots" content="index,follow,max-image-preview:large">
    <link rel="canonical" href="${canonical}"><meta name="theme-color" content="#111927">
    <meta property="og:type" content="website"><meta property="og:site_name" content="Casevault"><meta property="og:title" content="${data.title}"><meta property="og:description" content="${data.description}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${DOMAIN}/assets/casevault-social.png">
    <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${data.title}"><meta name="twitter:description" content="${data.description}"><meta name="twitter:image" content="${DOMAIN}/assets/casevault-social.png">
    <meta name="application-name" content="Casevault"><meta name="apple-mobile-web-app-title" content="Casevault">
    <link rel="icon" href="/assets/favicon.ico" sizes="any"><link rel="icon" href="/assets/favicon-32x32.png" type="image/png" sizes="32x32"><link rel="icon" href="/assets/favicon-16x16.png" type="image/png" sizes="16x16"><link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" sizes="180x180"><link rel="manifest" href="/site.webmanifest">
    ${jsonLd(path)}<style>${css}</style>
  </head><body>${header()}${body}${footer()}</body></html>`;
}

export function renderSite() {
  const pages = {
    "/": homePage(),
    "/features/": featuresPage(),
    "/case-management/": caseManagementPage(),
    "/document-management/": documentPage(),
    "/client-portal/": clientPortalPage(),
    "/how-it-works/": howItWorksPage(),
    "/pricing/": pricingPage(),
    "/security/": securityPage(),
    "/solutions/solo-consultants/": solutionPage("solo"),
    "/solutions/immigration-law-firms/": solutionPage("firms"),
    "/solutions/multi-country-practices/": solutionPage("global"),
    "/about/": aboutPage(),
    "/faq/": faqPage(),
    "/demo/": demoPage(),
    "/contact/": contactPage(),
    "/legal/": legalIndexPage(),
    "/legal/terms-and-conditions/": termsPage(),
    "/legal/privacy-policy/": privacyPage(),
  };
  return Object.fromEntries(Object.entries(pages).map(([path, body]) => [path, shell(path, body)]));
}

export function render404() {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found | Casevault</title><style>${css}</style></head><body>${header()}<main id="main"><section class="page-hero"><div class="wrap"><div class="page-hero-grid"><div><span class="eyebrow"><i class="signal"></i>404 · Page not found</span><h1>This case file is not here.</h1><p>The page may have moved during the Casevault website rebuild. Return home or explore the platform.</p><div class="hero-actions"><a class="btn" href="/">Back to Casevault →</a><a class="btn ghost" href="/features/">Explore features</a></div></div>${dashboard()}</div></div></section></main>${footer()}</body></html>`;
}
