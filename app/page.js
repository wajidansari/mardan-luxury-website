import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=85`;

const services = [
  ["Landscape Design","From concept to considered outdoor environments.","photo-1600607687939-ce8a6c25118c"],
  ["Landscape Construction","Precise execution, premium materials and refined finishes.","photo-1600585154340-be6161a56a0c"],
  ["Garden Maintenance","Long-term care that keeps landscapes exceptional.","photo-1558904541-efa843a96f01"],
  ["Irrigation","Efficient irrigation designed around your landscape.","photo-1598902108854-10e335adac99"],
  ["Pools & Water","Pool environments and architectural water features.","photo-1600566753086-00f18fb6b3ea"],
  ["Green Walls","Living and artificial vertical greenery for distinctive spaces.","photo-1604014237800-1c9102c219da"]
];

const projects = [
  ["Private Villa","Jumeirah, Dubai","photo-1600607687920-4e2a09cf159d"],
  ["Garden Transformation","Dubai Hills","photo-1600210492486-724fe5c67fb0"],
  ["Outdoor Living","Emirates Hills","photo-1600585154526-990dced4db0d"],
  ["Architectural Greenery","Dubai","photo-1600566753190-17f0baa2a6c3"]
];

const steps = [
  ["01","Discover","We understand the property, architecture, lifestyle and practical requirements."],
  ["02","Design","We shape the concept, planting, materials, lighting and outdoor experience."],
  ["03","Plan","Every key detail is coordinated before work begins."],
  ["04","Build","Our team translates the design into a finished landscape."],
  ["05","Refine","Finishing details are inspected, adjusted and perfected."],
  ["06","Care","Ongoing maintenance protects the quality of the landscape over time."]
];

function Nav(){
 return <nav className="nav"><div className="container navrow">
   <Link className="logo" href="/">MARDAN</Link>
   <div className="navlinks">
    <Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/residential">Residential</Link><Link href="/commercial">Commercial</Link><Link href="/contact">Contact</Link>
   </div>
   <Link className="cta" href="/contact">Start a project <ArrowUpRight size={14}/></Link>
   <button className="mobileMenu">MENU</button>
 </div></nav>
}

export default function Home(){
 return <>
  <Nav/>
  <main>
   <section className="hero" style={{"--bg":`url(${img("photo-1600607687920-4e2a09cf159d")})`}}>
    <div className="container heroContent">
      <div className="eyebrow">Landscape & Gardening Works · Dubai</div>
      <h1 className="display">Landscapes,<br/>designed to belong.</h1>
      <p className="heroCopy">Bespoke landscape design, construction and garden care for exceptional properties across Dubai.</p>
      <div className="heroActions"><Link className="cta" href="/projects">Explore our work <ArrowUpRight size={14}/></Link><Link className="cta" href="/contact">Private consultation <ArrowUpRight size={14}/></Link></div>
    </div>
   </section>

   <section className="section">
    <div className="container">
     <div className="sectionHead"><h2 className="sectionTitle">Outdoor spaces,<br/>considered differently.</h2><p className="sectionIntro">Mardan creates landscapes that balance architecture, nature and everyday living — from the first idea to long-term care.</p></div>
     <div className="stats"><div className="stat"><strong>01</strong><span>Design</span></div><div className="stat"><strong>02</strong><span>Build</span></div><div className="stat"><strong>03</strong><span>Care</span></div><div className="stat"><strong>∞</strong><span>Possibilities</span></div></div>
    </div>
   </section>

   <section className="section dark">
    <div className="container"><div className="sectionHead"><h2 className="sectionTitle">Signature services.</h2><p className="sectionIntro">A complete landscape journey, delivered with one considered point of view.</p></div></div>
    <div className="container"><div className="grid">{services.map(([t,p,i])=><Link className="card" href="/services" key={t}><div className="cardImage" style={{backgroundImage:`url(${img(i)})`}}/><div><div className="eyebrow">Mardan</div><h3>{t}</h3><p>{p}</p></div></Link>)}</div></div>
   </section>

   <section className="section" style={{paddingBottom:0}}>
    <div className="container"><div className="sectionHead"><h2 className="sectionTitle">Selected work.</h2><Link className="cta" href="/projects">View all projects <ArrowUpRight size={14}/></Link></div></div>
    <div className="projectGrid">{projects.map(([t,l,i])=><Link className="project" href="/projects" key={t}><div className="cardImage" style={{backgroundImage:`url(${img(i)})`}}/><div className="projectInfo"><div className="eyebrow">{l}</div><h3>{t}</h3><span>View project →</span></div></Link>)}</div>
   </section>

   <section className="section"><div className="split"><div className="splitImage" style={{backgroundImage:`url(${img("photo-1600566753086-00f18fb6b3ea")})`}}/><div className="splitText"><div className="eyebrow">Our philosophy</div><p className="quote">“We don't just build gardens. We create places to live.”</p><p className="sectionIntro">Every successful landscape begins with a clear relationship between the property, its people and the environment around it.</p><Link className="cta" style={{marginTop:30,width:"fit-content"}} href="/about">Discover Mardan <ArrowUpRight size={14}/></Link></div></div></section>

   <section className="section"><div className="container"><div className="sectionHead"><h2 className="sectionTitle">From first conversation<br/>to final detail.</h2><p className="sectionIntro">A transparent process designed to keep every decision purposeful.</p></div><div className="process">{steps.map(([n,t,p])=><div className="step" key={n}><div className="num">{n}</div><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

   <section className="section dark"><div className="container"><div className="sectionHead"><h2 className="sectionTitle">Your outdoor space<br/>starts here.</h2><p className="sectionIntro">Tell us about your property and what you want to create.</p></div><Link className="cta" href="/contact">Request a private consultation <ArrowUpRight size={14}/></Link></div></section>
  </main>
  <Footer/>
 </>
}

function Footer(){
 return <footer className="footer"><div className="container"><div className="footerGrid"><div><div className="eyebrow">Mardan Landscape & Gardening Works</div><h2>Let's create something exceptional.</h2></div><div><div className="eyebrow">Explore</div><p><Link href="/about">About</Link></p><p><Link href="/projects">Projects</Link></p><p><Link href="/services">Services</Link></p></div><div><div className="eyebrow">Contact</div><p>Dubai, UAE</p><p>WhatsApp · Call · Email</p><Link className="cta" href="/contact">Start a project</Link></div></div><div className="footerBottom"><span>© 2026 Mardan. All rights reserved.</span><span>Landscape design · Construction · Garden care</span></div></div></footer>
}