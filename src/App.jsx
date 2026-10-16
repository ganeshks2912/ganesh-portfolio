import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Phone, Menu, X, GraduationCap, Trophy } from 'lucide-react';
import { profile, projects, skills, education, activities } from './data.js';

const links = [['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['education', 'Education'], ['contact', 'Contact']];

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Heading({ no, label, title }) {
  return (
    <Reveal>
      <p className="eyebrow"><span>{no}</span>{label}</p>
      <h2 className="h2">{title}</h2>
    </Reveal>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 30);
    f(); window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <header className={`nav ${solid ? 'solid' : ''}`}>
      <div className="wrap nav-in">
        <a href="#top" className="logo">GKS<i>.</i></a>
        <nav className={open ? 'open' : ''}>
          {links.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <a className="btn btn-sm hide-m" href="#contact">Let's talk</a>
        <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef(null);
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg)`;
  };
  const reset = () => (ref.current.style.transform = '');
  return (
    <section className="hero" id="top">
      <div className="glow" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="pill"><span className="dot" /> Open to SDE internships &amp; roles</p>
          <h1>Ganesh<br /><em>K S</em></h1>
          <p className="lead">Software engineer in the making — I design <b>scalable backend systems</b>, distributed architectures and clean full-stack products.</p>
          <div className="actions">
            <a className="btn" href="#projects">View projects <ArrowDown size={16} /></a>
            <a className="link" href="#contact">Get in touch <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="portrait-wrap" onMouseMove={onMove} onMouseLeave={reset}>
          <div className="portrait" ref={ref}>
            <video src="/videos/portrait.mp4" autoPlay muted loop playsInline preload="auto" />
            <span className="corner tl" /><span className="corner br" />
          </div>
          <span className="tag t1">Node.js · Redis</span>
          <span className="tag t2">RabbitMQ · Docker</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="sec" id="about">
      <div className="wrap about">
        <Heading no="01" label="About" title={<>Building systems that<br /><em>hold up under load.</em></>} />
        <div>
          <Reveal delay={80}><p className="big">{profile.objective}</p></Reveal>
          <Reveal delay={160}>
            <p className="muted">I enjoy the parts of software most people never see — authentication flows, queues, retries, rate limits and tenant isolation. I like turning messy requirements into dependable systems with clear boundaries.</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="acts">
              <h3><Trophy size={16} /> Leadership</h3>
              <ul>{activities.map((a) => <li key={a}>{a}</li>)}</ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const all = skills.flatMap((s) => s.i);
  return (
    <section className="sec alt" id="skills">
      <div className="wrap">
        <Heading no="02" label="Skills" title={<>The toolkit,<br /><em>organised.</em></>} />
        <div className="skill-grid">
          {skills.map((s, i) => (
            <Reveal key={s.t} delay={i * 50} className={i === 5 || i === 6 ? 'span2' : ''}>
              <div className="card">
                <h3>{s.t}</h3>
                <div className="chips">{s.i.map((x) => <span key={x}>{x}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="marquee" aria-hidden>
        <div className="track">{[...all, ...all].map((x, i) => <span key={i}>{x}<i>✳</i></span>)}</div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="sec" id="projects">
      <div className="wrap">
        <Heading no="03" label="Projects" title={<>Selected work,<br /><em>engineered with intent.</em></>} />
        <div className="proj-list">
          {projects.map((p) => (
            <Reveal key={p.n}>
              <article className="proj">
                <a className="shot" href={p.repo} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`}>
                  <img src={p.image} alt={`${p.title} preview`} loading="lazy" />
                </a>
                <div className="proj-body">
                  <div className="proj-head"><span className="proj-n">{p.n}</span><span className="eyebrow plain">{p.tag}</span></div>
                  <h3>{p.title}</h3>
                  <p className="sub">{p.sub}</p>
                  <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                  <div className="proj-foot">
                    <div className="chips">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                    <a className="btn btn-sm repo" href={p.repo} target="_blank" rel="noreferrer"><Github size={16} /> Source code <ArrowUpRight size={14} /></a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="sec alt" id="education">
      <div className="wrap">
        <Heading no="04" label="Education" title={<>Where I've<br /><em>learned.</em></>} />
        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={e.y} delay={i * 90}>
              <div className="tl-item">
                <span className="tl-y">{e.y}</span>
                <div><h3>{i === 0 && <GraduationCap size={18} />} {e.t}</h3><p className="school">{e.s}</p><p className="muted">{e.d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="sec contact" id="contact">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow"><span>05</span>Contact</p>
          <h2 className="mega">Let's build something<br /><em>reliable together.</em></h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="contact-row">
            <a className="btn" href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
            <a className="link" href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={15} /> {profile.phone}</a>
            <div className="social">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </Reveal>
        <div className="foot"><span>© {new Date().getFullYear()} Ganesh K S</span><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}

export default function App() {
  return <><Nav /><main><Hero /><About /><Skills /><Projects /><Education /></main><Contact /></>;
}
