"use client";
import { useEffect, useRef, useState } from "react";

/* ═══════════════════════════════════
   DATA
   ═══════════════════════════════════ */
interface Project {
  icon:string; title:string; desc:string; tech:string[]; color:string;
  featured?:boolean; acquired?:boolean; github?:string;
  full:string; features:string[]; role:string; year:string; cat:string;
}

const P: Project[] = [
  { icon:"📡",title:"First Air Tag",desc:"NFC medical profiles for first responders — offline encrypted data via wristbands.",tech:["React Native","Next.js","PostgreSQL","NFC","AWS"],color:"#e85d5d",featured:true,github:"https://github.com/Umer9538/NFCAPP",full:"A life-saving NFC platform storing encrypted health profiles on wristbands. First responders tap devices to access allergies, blood type, medications — offline, without internet. HIPAA-compliant with QR fallback.",features:["NFC read/write with encrypted medical data","Offline-first emergency architecture","Admin dashboard (Next.js) with RBAC","Biometric auth + 2FA + JWT sessions","AWS EC2 backend with PostgreSQL","QR code fallback for non-NFC devices"],role:"Full Stack Developer",year:"2025",cat:"Healthcare / IoT" },
  { icon:"🏗️",title:"BuildBuddy",desc:"Construction management with live budgets, Stripe payments, and multi-role collaboration.",tech:["Flutter","Firebase","Stripe","Maps"],color:"#3dd9c0",github:"https://github.com/Umer9538/budgetBot",full:"All-in-one construction app for homeowners and contractors. Budgets, milestones, contractor marketplace, and Stripe payments with role-based dashboards.",features:["Real-time budget tracking","Contractor marketplace","Milestone-based Stripe payments","Photo progress docs","Google Maps integration","Push notification alerts"],role:"Lead Flutter Developer",year:"2024",cat:"Construction / SaaS" },
  { icon:"✈️",title:"Mershad",desc:"AI travel companion for Saudi Arabia — Gemini itineraries and offline maps.",tech:["Flutter","Gemini API","Google Maps"],color:"#9b7aed",full:"Intelligent travel companion for Saudi Arabia using Gemini 1.5 Flash. Personalized itineraries, hotel booking, AI chatbot, and offline navigation across 5 cities.",features:["Gemini AI itineraries","Hotel & experience booking","Offline maps with navigation","Multi-language support","Emergency SOS","Cultural recommendations"],role:"Mobile Developer",year:"2024",cat:"Travel / AI" },
  { icon:"🎓",title:"AI Learning Platform",desc:"AI courseware with real-time coding evaluation. Investor acquired.",tech:["Flutter","LangChain","OpenAI","WebRTC"],color:"#e8c96e",acquired:true,full:"AI education platform adapting to each student. Real-time code evaluation, live video classrooms, gamification. Acquired after strong beta engagement.",features:["Adaptive learning paths","AI code evaluation","Live WebRTC classrooms","Progress analytics","Auto quiz generation","Gamified leaderboards"],role:"Full Stack Developer",year:"2024",cat:"EdTech / AI" },
  { icon:"👶",title:"Maternity Care Bot",desc:"AI medical assistant for expecting mothers. Investor acquired.",tech:["Flutter","Node.js","Firebase"],color:"#e85d5d",acquired:true,full:"AI chatbot for pregnant mothers — health advice, symptom tracking, appointments, community. Acquired for emerging market healthcare gap.",features:["Maternal health AI chatbot","Pregnancy milestone tracking","Symptom severity alerts","Doctor appointments","Meal planning","Community forum"],role:"Full Stack Developer",year:"2024",cat:"Healthcare / AI" },
  { icon:"🏨",title:"CloudKey",desc:"Hotel management with NFC digital keys and multi-language support.",tech:["Cloud","NFC","Docker","REST APIs"],color:"#5b8af5",github:"https://github.com/Umer9538/CloudKey",full:"Cloud hotel management replacing physical keys with NFC/barcode digital keys. Automates check-in, manages reservations, deploys via Docker.",features:["NFC/barcode digital keys","Reservation management","Multi-factor auth","Multi-language support","Payment processing","Docker deployment"],role:"Backend Developer",year:"2024",cat:"Hospitality" },
  { icon:"🛒",title:"GroceryMate",desc:"Smart grocery list with barcode scanning and family sharing.",tech:["Flutter","Firebase","Barcode API"],color:"#3dd9c0",full:"Scan barcodes, compare prices, share lists with family in real-time, AI suggestions from purchase history.",features:["Barcode scanning","Family list sharing","Price comparison","Spending analytics","Smart suggestions","Aisle categorization"],role:"Flutter Developer",year:"2024",cat:"Lifestyle" },
  { icon:"💳",title:"SecurePay",desc:"Encrypted payments with Stripe and biometric auth.",tech:["Flutter","Firebase","Stripe"],color:"#e85d5d",full:"Secure payment app with E2E encryption, spending analytics, Stripe integration, budgets, and biometric login.",features:["E2E encrypted payments","Stripe integration","Category analytics","Budget alerts","CSV/PDF export","Biometric auth"],role:"Mobile Developer",year:"2023",cat:"FinTech" },
  { icon:"🩺",title:"HealthSync",desc:"Health tracker with AI insights and telemedicine.",tech:["Flutter","AI","Firebase"],color:"#9b7aed",full:"Health management combining fitness tracking, medication management, and telemedicine with AI analysis.",features:["AI fitness insights","Medication tracking","Video telemedicine","Health dashboard","Wearable integration","Shareable reports"],role:"Flutter Developer",year:"2023",cat:"Healthcare" },
  { icon:"🤖",title:"AI Chatbot",desc:"GPT-powered AI with specialized modes.",tech:["Flutter","OpenAI API","NLP"],color:"#e8c96e",full:"GPT-powered chatbot with multi-turn conversations, code/writing/research modes, customizable personality, export.",features:["Multi-turn dialogue","Code/writing/research modes","History search","Custom personality","Syntax highlighting","PDF export"],role:"Mobile Developer",year:"2023",cat:"AI" },
  { icon:"📅",title:"ServiceMate",desc:"Multi-business booking SaaS platform.",tech:["TypeScript","Next.js","SaaS"],color:"#3dd9c0",github:"https://github.com/Umer9538/ServiceMate",full:"White-label booking SaaS for salons, clinics, studios. Booking pages, reminders, payments, CRM.",features:["Custom booking pages","Automated reminders","Staff scheduling","Invoicing","CRM with history","Revenue analytics"],role:"Full Stack Developer",year:"2024",cat:"SaaS" },
  { icon:"⚖️",title:"Insaf",desc:"Legal platform connecting users with lawyers.",tech:["TypeScript","React Native"],color:"#5b8af5",github:"https://github.com/Umer9538/insaf",full:"Legal tech connecting citizens and lawyers in Pakistan. Find lawyers, book consultations, track cases.",features:["Lawyer directory","Consultation booking","Case tracking","Secure messaging","Legal resources","Rating system"],role:"React Native Developer",year:"2023",cat:"LegalTech" },
  { icon:"🏫",title:"CJE",desc:"School community platform for parents and teachers.",tech:["Flutter","Firebase"],color:"#9b7aed",github:"https://github.com/Umer9538/CJE",full:"School community platform — announcements, events, attendance, grades, parent-teacher messaging.",features:["Real-time announcements","Event RSVP","Attendance tracking","Grade portal","Messaging system","Fee management"],role:"Flutter Developer",year:"2023",cat:"EdTech" },
  { icon:"⚽",title:"Mundial Manager",desc:"FIFA World Cup fantasy game with live scores.",tech:["Flutter","REST APIs"],color:"#e8c96e",github:"https://github.com/Umer9538/Mundial-Manager",full:"World Cup fantasy — build teams, compete on leaderboards, live scores, dynamic scoring, player trading.",features:["Fantasy team building","Live scores & stats","Global leaderboards","Dynamic scoring","Player trading","Goal notifications"],role:"Flutter Developer",year:"2022",cat:"Sports" },
];

const EXP = [
  { date:"2025 — Present",role:"Senior Mobile App Developer",co:"Infinitiv.AI",loc:"Lahore",desc:"Production mobile apps with Flutter, React Native, native. BLE, WebSocket, speech-to-text. AWS + Docker.",tech:["Flutter","React Native","AWS","BLE"],color:"#e85d5d" },
  { date:"2025 — 2026",role:"App Developer",co:"DriftMeta",loc:"Remote",desc:"Two investor-acquired products. AI learning app (LangChain/OpenAI) and maternity chatbot. Full lifecycle.",tech:["Flutter","LangChain","OpenAI","Node.js"],color:"#3dd9c0" },
  { date:"2024 — 2025",role:"Senior Full Stack Engineer",co:"Vireon Solutions",loc:"Islamabad",desc:"AI-driven apps with TensorFlow, PyTorch, LangChain. NLP, speech recognition, RAG architectures.",tech:["TensorFlow","PyTorch","Redis","RAG"],color:"#9b7aed" },
  { date:"2023 — 2024",role:"Associate Full Stack Engineer",co:"Vireon Solutions",loc:"Islamabad",desc:"Web and mobile apps with Flutter, React Native, React.js. AI integration and optimization.",tech:["Flutter","React Native","React.js"],color:"#e8c96e" },
];

const SKILLS = [
  { cat:"Mobile",tags:["Flutter","React Native","Kotlin","Swift","Java","Dart","Expo"],color:"#e85d5d" },
  { cat:"Frontend",tags:["React.js","Next.js","TypeScript","JavaScript","HTML5","CSS3","Tailwind CSS","Bootstrap","Redux","Zustand","GSAP","Framer Motion"],color:"#5b8af5" },
  { cat:"Backend",tags:["Node.js","Express","Flask","FastAPI","Django","PHP","Laravel","GraphQL","REST APIs","Socket.io","Prisma"],color:"#9b7aed" },
  { cat:"AI / ML",tags:["TensorFlow","PyTorch","LangChain","OpenAI","OpenCV","RAG","FAISS","ChromaDB","Gemini","NLP","Hugging Face","Scikit-learn"],color:"#e8c96e" },
  { cat:"Database",tags:["Firebase","PostgreSQL","MongoDB","MySQL","Redis","SQLite","Firestore","Supabase","DynamoDB"],color:"#e85d5d" },
  { cat:"Cloud",tags:["AWS EC2","AWS S3","Docker","Kubernetes","CI/CD","Heroku","Git","GitHub Actions","Vercel","Nginx","Linux"],color:"#3dd9c0" },
];

/* ═══════════════════════════════════
   HOOKS
   ═══════════════════════════════════ */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("vis"); }),
      { threshold:0.06, rootMargin:"0px 0px -30px 0px" }
    );
    document.querySelectorAll(".rv").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

function useTyping(words:string[]) {
  const [text, setText] = useState("");
  const i = useRef(0), c = useRef(0), del = useRef(false);
  useEffect(() => {
    const tick = () => {
      const w = words[i.current];
      if (del.current) { setText(w.substring(0,c.current-1)); c.current--; if(c.current<=0){del.current=false;i.current=(i.current+1)%words.length;return setTimeout(tick,350);} return setTimeout(tick,35); }
      else { setText(w.substring(0,c.current+1)); c.current++; if(c.current>=w.length){del.current=true;return setTimeout(tick,2200);} return setTimeout(tick,75); }
    };
    const t = setTimeout(tick,800);
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

/* ═══════════════════════════════════
   MODAL
   ═══════════════════════════════════ */
function Modal({ p, onClose }:{ p:Project; onClose:()=>void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const esc = (e:KeyboardEvent) => { if(e.key==="Escape") onClose(); };
    window.addEventListener("keydown",esc);
    return () => { document.body.style.overflow=""; window.removeEventListener("keydown",esc); };
  }, [onClose]);

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal-box" onClick={(e)=>e.stopPropagation()}>
        {/* accent bar */}
        <div style={{ height:3, background:`linear-gradient(90deg, ${p.color}, transparent)` }} />
        {/* close */}
        <button onClick={onClose} style={{ position:"absolute",top:18,right:18,width:36,height:36,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"var(--text2)",fontSize:18,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"0.2s" }}
          onMouseEnter={(e)=>{e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--text)";}}
          onMouseLeave={(e)=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";e.currentTarget.style.color="var(--text2)";}}>×</button>

        <div style={{ padding:"clamp(24px,5vw,52px)" }}>
          {/* badges */}
          <div style={{ display:"flex",flexWrap:"wrap",gap:8,marginBottom:20 }}>
            {p.acquired && <span className="mono" style={{ padding:"4px 12px",borderRadius:20,fontSize:9,fontWeight:600,letterSpacing:1.5,textTransform:"uppercase",background:p.color,color:"var(--bg)" }}>Acquired</span>}
            <span className="mono" style={{ padding:"4px 12px",borderRadius:20,fontSize:9,fontWeight:600,letterSpacing:1.5,textTransform:"uppercase",border:`1px solid ${p.color}44`,color:p.color }}>{p.cat}</span>
            <span className="mono" style={{ padding:"4px 12px",borderRadius:20,fontSize:9,fontWeight:600,letterSpacing:1.5,textTransform:"uppercase",color:"var(--text3)",border:"1px solid rgba(255,255,255,0.08)" }}>{p.year}</span>
          </div>
          {/* title */}
          <div style={{ display:"flex",alignItems:"center",gap:14,marginBottom:6 }}>
            <span style={{ fontSize:36 }}>{p.icon}</span>
            <h2 className="serif" style={{ fontSize:"clamp(28px,4vw,44px)",fontWeight:400,fontStyle:"italic",color:"var(--text)" }}>{p.title}</h2>
          </div>
          <p className="mono" style={{ fontSize:11,letterSpacing:2,textTransform:"uppercase",color:p.color,marginBottom:28 }}>{p.role}</p>
          <p style={{ color:"var(--text2)",fontSize:15,lineHeight:1.8,marginBottom:36,maxWidth:700 }}>{p.full}</p>

          <div className="grid-responsive" style={{ display:"grid",gridTemplateColumns:"1.5fr 1fr",gap:36 }}>
            <div>
              <h3 style={{ fontSize:14,fontWeight:600,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:10 }}>
                <span style={{ width:20,height:1,background:p.color }} />Key Features
              </h3>
              {p.features.map((f,i) => (
                <div key={i} style={{ display:"flex",gap:10,marginBottom:12,fontSize:14,color:"var(--text2)",lineHeight:1.6 }}>
                  <span style={{ width:5,height:5,borderRadius:"50%",background:p.color,flexShrink:0,marginTop:8 }} />{f}
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ fontSize:14,fontWeight:600,color:"var(--text)",marginBottom:16,display:"flex",alignItems:"center",gap:10 }}>
                <span style={{ width:20,height:1,background:p.color }} />Stack
              </h3>
              <div style={{ display:"flex",flexWrap:"wrap",gap:6,marginBottom:28 }}>
                {p.tech.map((t) => <span key={t} className="pill" style={{ background:`${p.color}12`,color:p.color,border:`1px solid ${p.color}22` }}>{t}</span>)}
              </div>
              {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex",alignItems:"center",gap:6,padding:"10px 20px",borderRadius:10,fontSize:13,fontWeight:600,background:`${p.color}12`,color:p.color,border:`1px solid ${p.color}25`,textDecoration:"none",transition:"0.2s" }}
                onMouseEnter={(e)=>{e.currentTarget.style.transform="translateY(-2px)";}}
                onMouseLeave={(e)=>{e.currentTarget.style.transform="none";}}>GitHub →</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════
   PAGE
   ═══════════════════════════════════ */
export default function Home() {
  const typed = useTyping(["Mobile App Developer","AI Engineer","Full Stack Developer","Flutter Specialist","React Native Expert"]);
  const [sel, setSel] = useState<Project|null>(null);
  const [mOpen, setMOpen] = useState(false);
  const [mouse, setMouse] = useState({x:0,y:0});
  useReveal();

  useEffect(() => {
    const h = (e:MouseEvent) => setMouse({x:e.clientX,y:e.clientY});
    window.addEventListener("mousemove",h);
    return () => window.removeEventListener("mousemove",h);
  }, []);

  return (
    <>
      {/* Cursor glow — hidden on mobile via CSS */}
      <div className="cursor-glow" style={{ position:"fixed",width:500,height:500,borderRadius:"50%",pointerEvents:"none",zIndex:0,background:`radial-gradient(circle,rgba(232,201,110,0.04) 0%,transparent 70%)`,transform:"translate(-50%,-50%)",left:mouse.x,top:mouse.y,transition:"left 0.15s,top 0.15s" }} />

      {/* ═══ NAV ═══ */}
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"16px 0",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",background:"rgba(8,8,15,0.8)",borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="container" style={{ display:"flex",justifyContent:"space-between",alignItems:"center" }}>
          <a href="#" className="serif" style={{ fontSize:24,fontStyle:"italic",color:"var(--accent)",textDecoration:"none" }}>MU</a>
          <div className="hide-mobile" style={{ display:"flex",gap:28 }}>
            {["About","Skills","Projects","Experience","Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="mono" style={{ fontSize:10,letterSpacing:2.5,textTransform:"uppercase",color:"var(--text3)",textDecoration:"none",transition:"color 0.2s" }}
                onMouseEnter={(e)=>e.currentTarget.style.color="var(--accent)"}
                onMouseLeave={(e)=>e.currentTarget.style.color="var(--text3)"}>{l}</a>
            ))}
          </div>
          <button className="show-mobile" onClick={()=>setMOpen(!mOpen)} style={{ display:"none",background:"none",border:"none",flexDirection:"column",gap:4,cursor:"pointer" }}>
            {[0,1,2].map((i)=><span key={i} style={{ width:20,height:1.5,background:"var(--text2)",transition:"0.3s" }} />)}
          </button>
        </div>
        {mOpen && (
          <div style={{ padding:"16px clamp(24px,6vw,96px)",display:"flex",flexDirection:"column",gap:14,borderTop:"1px solid rgba(255,255,255,0.04)" }}>
            {["About","Skills","Projects","Experience","Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setMOpen(false)} className="mono" style={{ fontSize:11,letterSpacing:2,textTransform:"uppercase",color:"var(--text2)",textDecoration:"none" }}>{l}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight:"100vh",display:"flex",alignItems:"center",paddingTop:100,paddingBottom:60 }}>
        <div className="container hero-grid" style={{ display:"flex",alignItems:"center",justifyContent:"space-between",gap:48 }}>
          <div style={{ maxWidth:620,flex:1 }}>
            {/* availability */}
            <div className="rv" style={{ display:"inline-flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:30,border:"1px solid rgba(232,201,110,0.15)",marginBottom:32 }}>
              <span style={{ width:7,height:7,borderRadius:"50%",background:"var(--accent)",animation:"pulse-dot 2s infinite" }} />
              <span className="mono" style={{ fontSize:10,letterSpacing:2,textTransform:"uppercase",color:"var(--accent)" }}>Available for work</span>
            </div>
            {/* name */}
            <h1 className="rv rv-d1" style={{ marginBottom:16 }}>
              <span style={{ display:"block",fontFamily:"'Outfit',sans-serif",fontSize:"clamp(42px,7vw,80px)",fontWeight:800,lineHeight:0.95,letterSpacing:-3,color:"var(--text)" }}>Muhammad</span>
              <span className="serif gt" style={{ display:"block",fontSize:"clamp(48px,8vw,92px)",fontWeight:400,fontStyle:"italic",lineHeight:1 }}>Umer</span>
            </h1>
            {/* typed */}
            <div className="rv rv-d2" style={{ height:28,marginBottom:32 }}>
              <span className="mono" style={{ fontSize:"clamp(13px,2vw,17px)",color:"var(--text3)" }}>
                {typed}<span style={{ display:"inline-block",width:2,height:"1em",background:"var(--accent)",marginLeft:3,verticalAlign:"text-bottom",animation:"blink 1s step-end infinite" }} />
              </span>
            </div>
            {/* CTAs */}
            <div className="rv rv-d3" style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
              <a href="#projects" style={{ padding:"12px 28px",borderRadius:8,background:"var(--accent)",color:"var(--bg)",fontWeight:700,fontSize:13,textDecoration:"none",transition:"0.3s",letterSpacing:0.3 }}
                onMouseEnter={(e)=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(232,201,110,0.25)";}}
                onMouseLeave={(e)=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                View Projects
              </a>
              <a href="#contact" style={{ padding:"12px 28px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",color:"var(--text2)",fontSize:13,fontWeight:500,textDecoration:"none",transition:"0.3s" }}
                onMouseEnter={(e)=>{e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent)";}}
                onMouseLeave={(e)=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";e.currentTarget.style.color="var(--text2)";}}>
                Get in touch
              </a>
            </div>
          </div>
          {/* Stats column instead of phone */}
          <div className="rv rv-d4 hide-mobile" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,width:280 }}>
            {[{n:"20+",l:"Apps",c:"var(--accent)"},{n:"2.5+",l:"Years",c:"var(--coral)"},{n:"600+",l:"Mentored",c:"var(--teal)"},{n:"5",l:"Acquired",c:"var(--violet)"}].map((s,i) => (
              <div key={i} className="gc" style={{ padding:"24px 16px",textAlign:"center" }}>
                <div style={{ fontFamily:"'Instrument Serif',serif",fontSize:32,fontStyle:"italic",color:s.c }}>{s.n}</div>
                <div className="mono" style={{ fontSize:9,letterSpacing:2,textTransform:"uppercase",color:"var(--text3)",marginTop:4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ ABOUT ═══ */}
      <section id="about" style={{ padding:"80px 0" }}>
        <div className="container grid-responsive" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center" }}>
          <div className="rv">
            <div className="mono" style={{ fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:12 }}>— About</div>
            <h2 className="serif rv rv-d1" style={{ fontSize:"clamp(32px,4vw,48px)",fontStyle:"italic",fontWeight:400,color:"var(--text)",lineHeight:1.15,marginBottom:20 }}>Building digital<br/>products that matter.</h2>
            <p className="rv rv-d2" style={{ fontSize:15,lineHeight:1.85,marginBottom:14 }}>
              I&apos;m a <strong style={{ color:"var(--text)" }}>Senior Mobile App Developer</strong> with 2.5+ years of experience architecting production-grade cross-platform applications. I specialize in <strong style={{ color:"var(--text)" }}>Flutter, React Native, and AI-powered mobile solutions</strong> that scale.
            </p>
            <p className="rv rv-d3" style={{ fontSize:15,lineHeight:1.85 }}>
              With <strong style={{ color:"var(--text)" }}>20+ shipped apps</strong> and <strong style={{ color:"var(--accent)" }}>5 investor-acquired products</strong>, I bring end-to-end expertise — from clean architecture and real-time systems (BLE, WebSockets, NFC) to AI integration with LangChain, OpenAI, and TensorFlow. FAST NUCES CS graduate with a major in Generative AI.
            </p>
          </div>
          <div className="rv rv-d2" style={{ display:"flex",flexDirection:"column",gap:12 }}>
            {[{label:"Dean's List — FAST NUCES (Top 10%)",color:"var(--accent)"},{label:"Admin Head — FCAP Club (100+ members)",color:"var(--teal)"},{label:"Teaching Assistant — 600+ students",color:"var(--violet)"},{label:"1st Place — Software Sprint, DAIRA 2024",color:"var(--coral)"},{label:"3rd Place — Hackathon, GIKI 2025",color:"#5b8af5"}].map((item,i) => (
              <div key={i} className="gc" style={{ padding:"14px 20px",display:"flex",alignItems:"center",gap:12 }}>
                <span style={{ width:6,height:6,borderRadius:"50%",background:item.color,flexShrink:0 }} />
                <span style={{ fontSize:14,color:"var(--text2)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ SKILLS ═══ */}
      <section id="skills" style={{ padding:"80px 0" }}>
        <div className="container">
          <div className="mono rv" style={{ fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:12 }}>— Tech Stack</div>
          <h2 className="serif rv rv-d1" style={{ fontSize:"clamp(32px,4vw,48px)",fontStyle:"italic",fontWeight:400,color:"var(--text)",lineHeight:1.15,marginBottom:36 }}>Tools of the trade.</h2>
          <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
            {SKILLS.map((r,i) => (
              <div key={r.cat} className={`gc rv rv-d${Math.min(i+1,5)}`} style={{ padding:"16px 22px",display:"flex",alignItems:"center",gap:20,flexWrap:"wrap" }}>
                <span className="mono" style={{ fontSize:10,letterSpacing:2,textTransform:"uppercase",fontWeight:600,color:r.color,minWidth:80 }}>{r.cat}</span>
                <div style={{ display:"flex",flexWrap:"wrap",gap:6 }}>
                  {r.tags.map((t) => (
                    <span key={t} className="pill" style={{ color:"var(--text2)",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",cursor:"default" }}
                      onMouseEnter={(e)=>{const el=e.currentTarget;el.style.background=r.color;el.style.borderColor=r.color;el.style.color="var(--bg)";el.style.transform="translateY(-2px)";}}
                      onMouseLeave={(e)=>{const el=e.currentTarget;el.style.background="rgba(255,255,255,0.03)";el.style.borderColor="rgba(255,255,255,0.06)";el.style.color="var(--text2)";el.style.transform="none";}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ PROJECTS ═══ */}
      <section id="projects" style={{ padding:"80px 0" }}>
        <div className="container">
          <div className="mono rv" style={{ fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:12 }}>— Selected Work</div>
          <h2 className="serif rv rv-d1" style={{ fontSize:"clamp(32px,4vw,48px)",fontStyle:"italic",fontWeight:400,color:"var(--text)",lineHeight:1.15,marginBottom:12 }}>Projects that shipped.</h2>
          <p className="rv rv-d2" style={{ fontSize:14,color:"var(--text3)",marginBottom:36 }}>14 production apps — click any to explore.</p>
          <div className="project-grid" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(min(300px, 100%), 1fr))",gap:14 }}>
            {P.map((p,i) => (
              <div key={p.title} className={`gc rv ${i<6?`rv-d${i+1}`:""}`} style={{ padding:24,cursor:"pointer",position:"relative",overflow:"hidden",display:"flex",flexDirection:"column",...(p.featured?{gridColumn:"1 / -1"}:{}) }}
                onClick={()=>setSel(p)}>
                <div style={{ position:"absolute",top:0,left:0,right:0,height:2,background:`linear-gradient(90deg,${p.color},transparent)` }} />
                {p.acquired && <span className="mono" style={{ display:"inline-flex",padding:"3px 8px",borderRadius:4,fontSize:9,fontWeight:600,letterSpacing:1,textTransform:"uppercase",background:p.color,color:"var(--bg)",marginBottom:8,width:"fit-content" }}>Acquired</span>}
                <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10 }}>
                  <span style={{ fontSize:22 }}>{p.icon}</span>
                  <span className="mono" style={{ fontSize:9,letterSpacing:1,textTransform:"uppercase",color:"var(--text3)",opacity:0,transition:"opacity 0.3s" }}
                    ref={(el) => { if(el) { const parent = el.parentElement?.parentElement; parent?.addEventListener("mouseenter",()=>el.style.opacity="1"); parent?.addEventListener("mouseleave",()=>el.style.opacity="0"); } }}>
                    Details →
                  </span>
                </div>
                <h3 style={{ fontSize:16,fontWeight:700,letterSpacing:-0.3,marginBottom:6,color:"var(--text)" }}>{p.title}</h3>
                <p style={{ fontSize:13,color:"var(--text2)",lineHeight:1.6,marginBottom:14,flex:1 }}>{p.desc}</p>
                <div style={{ display:"flex",flexWrap:"wrap",gap:5 }}>
                  {p.tech.map((t) => <span key={t} className="pill" style={{ background:`${p.color}10`,color:p.color }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience" style={{ padding:"80px 0" }}>
        <div className="container">
          <div className="mono rv" style={{ fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:12 }}>— Career</div>
          <h2 className="serif rv rv-d1" style={{ fontSize:"clamp(32px,4vw,48px)",fontStyle:"italic",fontWeight:400,color:"var(--text)",lineHeight:1.15,marginBottom:36 }}>Where I&apos;ve worked.</h2>
          <div style={{ position:"relative",paddingLeft:32 }}>
            <div style={{ position:"absolute",left:5,top:6,bottom:6,width:2,borderRadius:2,background:"linear-gradient(to bottom,#e85d5d,#3dd9c0,#9b7aed,#e8c96e)" }} />
            {EXP.map((j,i) => (
              <div key={i} className={`rv rv-d${Math.min(i+1,5)}`} style={{ position:"relative",paddingBottom:i===EXP.length-1?0:28 }}>
                <div style={{ position:"absolute",left:-29,top:5,width:12,height:12,borderRadius:"50%",border:`2px solid ${j.color}`,background:"var(--bg)",boxShadow:`0 0 10px ${j.color}33` }} />
                <div className="gc" style={{ padding:22 }}>
                  <div className="mono" style={{ fontSize:10,letterSpacing:1.5,color:j.color,marginBottom:6 }}>{j.date}</div>
                  <h3 style={{ fontSize:17,fontWeight:700,color:"var(--text)",marginBottom:3 }}>{j.role}</h3>
                  <div style={{ fontSize:13,fontWeight:500,color:j.color,marginBottom:8 }}>{j.co} · {j.loc}</div>
                  <p style={{ fontSize:13,color:"var(--text2)",lineHeight:1.6,marginBottom:10 }}>{j.desc}</p>
                  <div style={{ display:"flex",flexWrap:"wrap",gap:5 }}>
                    {j.tech.map((t) => <span key={t} className="pill" style={{ background:`${j.color}10`,color:j.color }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ═══ CONTACT ═══ */}
      <section id="contact" style={{ padding:"80px 0" }}>
        <div className="container">
          <div className="mono rv" style={{ fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"var(--accent)",marginBottom:12 }}>— Connect</div>
          <h2 className="serif rv rv-d1" style={{ fontSize:"clamp(32px,4vw,48px)",fontStyle:"italic",fontWeight:400,color:"var(--text)",lineHeight:1.15,marginBottom:12 }}>Let&apos;s build something.</h2>
          <p className="rv rv-d2" style={{ fontSize:14,color:"var(--text3)",marginBottom:36,maxWidth:420 }}>Open to remote and on-site opportunities worldwide. Let&apos;s create something impactful.</p>
          <div className="rv rv-d3 grid-responsive contact-grid" style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:24 }}>
            <div style={{ display:"flex",flexDirection:"column",gap:10 }}>
              {[
                {icon:"✉️",label:"Email",val:"muhammadumer7574@gmail.com",href:"mailto:muhammadumer7574@gmail.com",c:"var(--coral)"},
                {icon:"💼",label:"LinkedIn",val:"muhammadumer2521",href:"https://linkedin.com/in/muhammadumer2521",c:"#5b8af5"},
                {icon:"💻",label:"GitHub",val:"Umer9538",href:"https://github.com/Umer9538",c:"var(--violet)"},
                {icon:"📱",label:"Phone",val:"+92-312-7574084",href:"tel:+923127574084",c:"var(--teal)"},
              ].map((l) => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http")?"_blank":undefined} rel={l.href.startsWith("http")?"noopener noreferrer":undefined}
                  className="gc" style={{ padding:16,display:"flex",alignItems:"center",gap:14,textDecoration:"none",color:"var(--text)" }}>
                  <div style={{ width:40,height:40,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,background:`${l.c}10` }}>{l.icon}</div>
                  <div>
                    <div className="mono" style={{ fontSize:9,letterSpacing:1.5,textTransform:"uppercase",color:l.c }}>{l.label}</div>
                    <div style={{ fontSize:13,fontWeight:500,marginTop:2,color:"var(--text2)" }}>{l.val}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="gc" style={{ padding:36,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center" }}>
              <h3 className="serif" style={{ fontSize:26,fontStyle:"italic",fontWeight:400,color:"var(--text)",marginBottom:10 }}>Ready to collaborate?</h3>
              <p style={{ fontSize:13,color:"var(--text3)",marginBottom:24,lineHeight:1.6 }}>Full-time, contract, or partnerships.</p>
              <a href="mailto:muhammadumer7574@gmail.com" style={{ padding:"12px 28px",borderRadius:8,background:"var(--accent)",color:"var(--bg)",fontWeight:700,fontSize:13,textDecoration:"none",transition:"0.3s" }}
                onMouseEnter={(e)=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(232,201,110,0.25)";}}
                onMouseLeave={(e)=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
                Send email →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding:"28px 0",borderTop:"1px solid rgba(255,255,255,0.04)" }}>
        <div className="container" style={{ display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:12,color:"var(--text3)",flexWrap:"wrap",gap:10 }}>
          <span>© 2026 Muhammad Umer</span>
          <div style={{ display:"flex",gap:16 }}>
            {[{l:"LinkedIn",h:"https://linkedin.com/in/muhammadumer2521"},{l:"GitHub",h:"https://github.com/Umer9538"},{l:"Email",h:"mailto:muhammadumer7574@gmail.com"}].map((a) => (
              <a key={a.l} href={a.h} target="_blank" rel="noopener noreferrer" style={{ color:"var(--text3)",textDecoration:"none",transition:"0.2s" }}
                onMouseEnter={(e)=>e.currentTarget.style.color="var(--accent)"}
                onMouseLeave={(e)=>e.currentTarget.style.color="var(--text3)"}>{a.l}</a>
            ))}
          </div>
        </div>
      </footer>

      {sel && <Modal p={sel} onClose={()=>setSel(null)} />}
    </>
  );
}
