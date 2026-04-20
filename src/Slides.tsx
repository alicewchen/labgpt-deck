import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin,
  Search,
  Truck,
  ShieldCheck,
  FlaskConical,
  Activity,
  Zap,
  TrendingUp,
  Layout,
  MousePointer2,
  Box,
  Layers,
  ArrowRight
} from 'lucide-react';

const SlideContainer = ({ children }: { children: React.ReactNode }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full h-full flex flex-col justify-start p-[64px] pt-[110px] md:pt-[110px] relative overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } }
};

const SlideItem = ({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties, key?: React.Key }) => (
  <motion.div variants={itemVariants} className={className} style={style}>
    {children}
  </motion.div>
);

// SLIDE 1: Title
const Slide1Title = () => (
  <SlideContainer>
    {/* Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[120px] rounded-full pointer-events-none" />
    
    <div className="mt-auto">
      <SlideItem className="mb-8">
        <h1 className="text-[140px] md:text-[220px] font-black leading-[0.85] tracking-[-0.08em] uppercase flex flex-col md:flex-row items-baseline relative">
          <span className="hero-word-filled">LAB</span>
          <span className="hero-word-outline md:-ml-6">GPT</span>
        </h1>
        <div className="mt-4">
          <span className="text-5xl md:text-7xl font-black uppercase tracking-[-0.04em] leading-none">
            Science. For <span className="text-brand">Everyone.</span>
          </span>
        </div>
      </SlideItem>

      <SlideItem className="mb-12">
        <p className="text-3xl md:text-4xl text-white/40 max-w-5xl leading-tight font-light">
          The operating system for <span className="text-orange-emphasis italic text-brand">discovery-to-invention</span>.
        </p>
      </SlideItem>

      <SlideItem className="w-full flex flex-col gap-6 pb-24">
        <div className="divider-orange w-full opacity-60" />
        <div className="flex items-center justify-end">
          <span className="text-xs uppercase tracking-[8px] text-muted font-black opacity-30 whitespace-nowrap">ESTABLISHING INFRASTRUCTURE DNA</span>
        </div>
      </SlideItem>
    </div>
  </SlideContainer>
);

// SLIDE 2: The Innovation Gap
const Slide2Gap = () => (
  <SlideContainer>
    <SlideItem className="mb-16 mt-8">
      <h2 className="text-[64px] font-black uppercase leading-[1.0] tracking-tighter max-w-4xl">
        Nature drives <br /><span className="text-brand">physical invention</span>
      </h2>
      <p className="text-muted mt-4 text-2xl font-light italic opacity-60">But the field-to-lab pipeline is broken.</p>
    </SlideItem>

    <div className="grid grid-cols-2 gap-16 max-w-6xl">
      <SlideItem className="space-y-3">
        <div className="text-xl uppercase tracking-[3px] font-black mb-3 text-white/40">Nature as a design source</div>
        {[
          { icon: <Activity className="w-5 h-5" />, text: "Velcro ← Burr hooks" },
          { icon: <FlaskConical className="w-5 h-5" />, text: "Penicillin ← Mold sample" },
          { icon: <Zap className="w-5 h-5" />, text: "Drones ← Bio-mechanics" },
          { icon: <TrendingUp className="w-5 h-5" />, text: "Carbon Capture ← Sequestration" },
          { icon: <Layers className="w-5 h-5" />, text: "Spider Silk ← Field Biology" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-default">
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-brand transition-colors">
              {item.icon}
            </div>
            <span className="text-xl uppercase tracking-widest font-bold text-white/40 group-hover:text-white transition-colors">{item.text}</span>
          </div>
        ))}
      </SlideItem>
      <SlideItem className="flex flex-col justify-center border-l border-white/10 pl-12">
        <div className="text-xl uppercase tracking-[3px] font-black mb-6 text-white/40">The Innovation Gap</div>
        <div className="space-y-8">
          <div>
            <span className="text-brand font-black block text-xl mb-1 tracking-widest uppercase">Software / Now</span>
            <p className="text-xl text-white/80 leading-relaxed">"Build and ship globally in days."</p>
          </div>
          <div>
            <span className="text-white/40 font-black block text-xl mb-1 tracking-widest uppercase">Atoms / Now</span>
            <p className="text-xl text-white/40 leading-relaxed">"Physical research relies on clipboards and fragmented logistics."</p>
          </div>
        </div>
      </SlideItem>
    </div>
  </SlideContainer>
);

// SLIDE 3: The Problem
const Slide3Problem = () => (
  <SlideContainer>
    <SlideItem className="mt-8">
      <h2 className="text-[64px] font-black uppercase mb-16 tracking-tighter">The field-to-lab pipeline is <span className="hero-word-outline">broken</span></h2>
    </SlideItem>
    
    <SlideItem className="flex items-center justify-between gap-4 max-w-6xl relative mb-24">
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -z-10" />
      {[
        { label: 'Research Goal', status: 'ok' },
        { label: 'Field Design', status: 'fail' },
        { label: 'Collection', status: 'fail' },
        { label: 'Custody', status: 'fail' },
        { label: 'Shipping', status: 'fail' },
        { label: 'Lab Intake', status: 'fail' },
        { label: 'Autonomous Lab', status: 'ok' }
      ].map((step, i) => (
        <div key={i} className="flex flex-col items-center group">
          <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-500 bg-bg ${step.status === 'ok' ? 'border-white/20 text-white/40' : 'border-brand text-brand ring-4 ring-brand/10'}`}>
            {step.status === 'ok' ? i + 1 : <Zap className="w-5 h-5 animate-pulse" />}
          </div>
          <span className={`text-sm uppercase tracking-widest font-black text-center max-w-[100px] ${step.status === 'ok' ? 'text-white/20' : 'text-brand'}`}>{step.label}</span>
        </div>
      ))}
    </SlideItem>
    
    <div className="grid grid-cols-3 gap-6 max-w-7xl">
      <SlideItem className="glass-panel p-8 rounded-xl relative group border-t-2 border-t-brand/40 hover:border-brand transition-all flex items-center justify-center text-center h-full">
        <p className="text-white/80 text-lg font-light leading-relaxed">
          Field campaigns are expensive, repetitive, and poorly digitized.
        </p>
      </SlideItem>
      <SlideItem className="glass-panel p-8 rounded-xl relative group border-t-2 border-t-brand/40 hover:border-brand transition-all flex items-center justify-center text-center h-full">
        <p className="text-white/80 text-lg font-light leading-relaxed">
          Fragmented tools risk failure at every handoff.
        </p>
      </SlideItem>
      <SlideItem className="glass-panel p-8 rounded-xl relative group border-t-2 border-t-brand/40 hover:border-brand transition-all flex items-center justify-center text-center h-full">
        <p className="text-white/80 text-lg font-light leading-relaxed">
          Legacy "AI for Science" tools ignore the field-to-lab gap where sample integrity and data flow originate.
        </p>
      </SlideItem>
    </div>
  </SlideContainer>
);

// SLIDE 4: Why Now
const Slide4WhyNow = () => (
  <SlideContainer>
    
    <div className="mb-16 mt-8">
      <SlideItem>
        <h2 className="text-[120px] font-black leading-none uppercase tracking-[-0.04em]">
          <span className="hero-word-filled">WHY</span>
          <span className="hero-word-outline ml-4">NOW</span>
        </h2>
      </SlideItem>
    </div>

    <div className="grid grid-cols-2 gap-16 max-w-5xl">
      <div className="space-y-6">
        {[
          { title: "Foundation Models", desc: "Map language goals to machine protocols." },
          { title: "Field Robotics", desc: "Drones and rovers are orchestration-ready." },
          { title: "ESG / SBTN Mandates", desc: "Auditable, standardized field monitoring data is now required." }
        ].map((item, i) => (
          <SlideItem key={i} className="border-l-2 border-brand/40 pl-8 py-1 group hover:border-brand transition-colors">
            <h4 className="text-xl font-black uppercase mb-1 tracking-tight group-hover:text-brand transition-colors">{item.title}</h4>
            <p className="text-base text-muted font-light">{item.desc}</p>
          </SlideItem>
        ))}
      </div>
      <SlideItem className="flex flex-col justify-end glass-panel p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <TrendingUp className="w-32 h-32" />
        </div>
        <div className="text-base font-black uppercase tracking-[3px] text-brand mb-4">MARKET SIGNAL</div>
        <div className="text-4xl font-black uppercase tracking-tight text-white/80">$17.1B MARKET</div>
        <p className="text-base text-muted uppercase tracking-widest mt-2 leading-tight">Smart environmental monitoring by 2033 (11.4% CAGR)</p>
      </SlideItem>
    </div>
  </SlideContainer>
);

// SLIDE 5: Our Solution
const Slide5Solution = () => (
  <SlideContainer>
    
    <div className="mb-12 relative mt-2">
      <SlideItem>
        <h2 className="text-[80px] md:text-[100px] font-black leading-[0.9] uppercase tracking-[-0.04em] relative z-10">
          AI-NATIVE ORCHESTRATION
        </h2>
        <div className="hero-word-outline text-[80px] md:text-[100px] uppercase absolute top-0 left-0 -z-10 opacity-20 translate-x-12 translate-y-8 select-none">PIPELINE</div>
      </SlideItem>
      <SlideItem>
        <p className="text-muted mt-8 text-xl font-light max-w-3xl leading-snug">
          "From a natural-language study goal to a verified sample in an autonomous lab — <span className="text-brand italic font-bold">no manual handoffs.</span>"
        </p>
      </SlideItem>
    </div>

    <div className="flex items-center gap-2 max-w-full">
      {[
        { id: "01", icon: <MapPin />, title: "FIELD APP", body: "BARCODE + GPS SYNC", sub: "Snap, tag, and sync every field sample." },
        { id: "02", icon: <Search />, title: "PLANNER", body: "PROTOCOL PLANNER", sub: "Turn study goals into routed field tasks." },
        { id: "03", icon: <Truck />, title: "LOGISTICS", body: "COURIER GRID", sub: "Track vans, temperatures, and custody handoffs." },
        { id: "04", icon: <ShieldCheck />, title: "CUSTODY", body: "CUSTODY LEDGER", sub: "Audit‑ready trail for GLP / ISO work." },
        { id: "05", icon: <FlaskConical />, title: "LAB", body: "ROBOTIC LAB INTAKE", sub: "Directly routes samples into automated lab runs." }
      ].map((item, i) => (
        <React.Fragment key={i}>
          <SlideItem className="flex-1 p-6 glass-panel border-t-2 border-t-brand/40 group hover:border-t-brand transition-all h-[260px] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-brand/20 group-hover:bg-brand transition-colors" />
            <div className="text-brand mb-4">{item.icon}</div>
            <div className="text-xs font-black uppercase tracking-[3px] text-white/40 mb-2">{item.id} / {item.title}</div>
            <div className="text-lg font-black uppercase tracking-tight mb-3 leading-snug">{item.body}</div>
            <div className="text-base text-muted font-light leading-relaxed flex-grow">{item.sub}</div>
          </SlideItem>
          {i < 4 && (
            <div className="flex flex-col items-center gap-2">
              <div className="h-[1px] w-6 bg-brand/20" />
              <ArrowRight className="text-brand shrink-0 w-4 h-4" />
              <div className="h-[1px] w-6 bg-brand/20" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </SlideContainer>
);

// SLIDE 6: Discovery to Invention
const Slide6Evolution = () => (
  <SlideContainer>
    <SlideItem className="relative z-10 mt-8">
      <h2 className="text-[42px] md:text-[64px] font-black uppercase mb-8 md:mb-12 tracking-tighter leading-[0.9] max-w-4xl">
        From nature to <br className="hidden md:block" />
        <span className="hero-word-outline">physical invention</span>
      </h2>
    </SlideItem>
    
    <div className="flex flex-col gap-2 max-w-4xl">
      <SlideItem className="staircase-step group">
        <div className="timeline-dot" />
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-3xl font-bold uppercase mb-2 tracking-tight">Nature Field Discovery</h4>
            <p className="text-lg text-muted max-w-lg font-light">Identify natural materials and mechanisms via field campaigns.</p>
          </div>
          <div className="hero-word-outline text-[48px] opacity-10 group-hover:opacity-40 transition-opacity hidden sm:block">DISCOVERY</div>
        </div>
      </SlideItem>
      <SlideItem className="staircase-step ml-12 group">
        <div className="timeline-dot" />
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-3xl font-bold uppercase mb-2 tracking-tight">Autonomous Lab Invention</h4>
            <p className="text-lg text-muted max-w-lg font-light">Route samples to autonomous labs for rapid prototyping.</p>
          </div>
          <div className="hero-word-outline text-[48px] opacity-10 group-hover:opacity-40 transition-opacity hidden sm:block">INVENTION</div>
        </div>
      </SlideItem>
      <SlideItem className="staircase-step ml-24 border-l-brand group">
        <div className="timeline-dot" />
        <div className="flex justify-between items-start border-l-2 border-brand/40 p-1 -ml-[34px] pl-8">
          <div>
            <h4 className="text-3xl font-bold uppercase mb-2 tracking-tight text-brand uppercase">Physical Innovation</h4>
            <p className="text-lg text-brand/60 max-w-lg font-normal italic">Iterative performance and reliability tuning.</p>
          </div>
          <div className="hero-word-outline text-[48px] opacity-10 group-hover:opacity-60 transition-opacity text-brand hidden sm:block">INNOVATION</div>
        </div>
      </SlideItem>
    </div>
  </SlideContainer>
);

// SLIDE 7: Product Wedge
const Slide7Wedge = () => (
  <SlideContainer>
    <SlideItem className="mt-8">
      <h2 className="text-[64px] font-black uppercase mb-16 tracking-tighter">The Starting <span className="hero-word-outline">Wedge</span></h2>
    </SlideItem>
    
    <div className="flex gap-4 max-w-5xl">
      <SlideItem className="flex-1 p-8 bg-brand rounded-lg text-bg relative overflow-hidden group">
        <div className="text-xs font-black uppercase tracking-[3px] mb-8 bg-bg text-brand w-fit px-3 py-1">PHASE 01 / NOW</div>
        <h4 className="text-2xl font-black uppercase mb-4 leading-none">Nature-Based research</h4>
        <p className="text-lg font-medium leading-relaxed bg-bg/5 p-4 rounded border border-bg/10">Automating field-to-lab workflows for ESG and ecology.</p>
      </SlideItem>
      <SlideItem className="flex-1 p-8 bg-white/5 border border-white/10 rounded-lg group hover:bg-white/10 transition-colors">
        <div className="text-xs font-black uppercase tracking-[3px] mb-8 text-white/40">PHASE 02 / NEXT</div>
        <h4 className="text-2xl font-black uppercase mb-4 leading-none text-white/80 uppercase">Discovery Workflows</h4>
        <p className="text-lg text-muted font-light leading-relaxed">Multi-domain discovery on established infrastructure.</p>
      </SlideItem>
      <SlideItem className="flex-1 p-8 bg-white/5 border border-white/10 rounded-lg group hover:bg-white/10 transition-colors">
        <div className="text-xs font-black uppercase tracking-[3px] mb-8 text-white/40">PHASE 03 / LONG</div>
        <h4 className="text-2xl font-black uppercase mb-4 leading-none text-white/80 uppercase">Invention OS</h4>
        <p className="text-lg text-muted font-light leading-relaxed">A global OS for physical invention.</p>
      </SlideItem>
    </div>
  </SlideContainer>
);

// SLIDE 8: Market Opportunity
const Slide8Market = () => (
  <SlideContainer>
    <div className="mb-12 relative mt-8">
      <SlideItem>
        <h2 className="text-[160px] md:text-[200px] font-black leading-none uppercase tracking-[-0.06em] relative z-10 flex items-baseline">
          $100B<span className="text-brand ml-4 scale-125">+</span>
        </h2>
        <div className="hero-word-outline text-[130px] md:text-[170px] uppercase absolute top-12 left-1/2 -translate-x-1/2 -z-10 opacity-30 uppercase pointer-events-none select-none tracking-tighter w-full text-center">
          OPPORTUNITY
        </div>
      </SlideItem>
    </div>

    <div className="grid grid-cols-3 gap-6 max-w-6xl">
      {[
        { id: "01 / NOW", val: "$8B", desc: "Global environmental monitoring software markets." },
        { id: "02 / NEXT", val: "$25B", desc: "Autonomous discovery and AI-integrated R&D services." },
        { id: "03 / LONG", val: "$100B+", desc: "The infrastructure layer for all physical invention." }
      ].map((item, i) => (
        <SlideItem 
          key={i} 
          className={`p-8 border-t-4 transition-all duration-500 overflow-hidden relative group
            ${i === 2 ? 'bg-brand text-bg border-brand' : 'bg-white/5 border-white/20 hover:border-brand hover:bg-white/10'}
          `}
        >
          {i === 2 && (
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <TrendingUp className="w-48 h-48" />
            </div>
          )}
          <div className={`text-xs font-black uppercase tracking-[3px] mb-6 ${i === 2 ? 'text-bg/60' : 'text-brand'}`}>{item.id}</div>
          <div className={`text-6xl font-black uppercase tracking-tighter mb-4 ${i === 2 ? 'text-bg' : 'group-hover:text-brand transition-colors text-white'}`}>{item.val}</div>
          <p className={`text-lg leading-snug font-medium ${i === 2 ? 'text-bg/80' : 'text-muted'}`}>{item.desc}</p>
        </SlideItem>
      ))}
    </div>
  </SlideContainer>
);

// SLIDE 9: Competitive Landscape
const Slide9Landscape = () => (
  <SlideContainer>
    <SlideItem className="mt-2">
      <h2 className="text-[64px] font-black uppercase mb-4 tracking-tighter text-white">Market <span className="hero-word-outline">Positioning</span></h2>
    </SlideItem>
    
    <div className="relative w-full max-w-5xl h-[540px] border border-white/5 bg-[#050505] rounded-xl overflow-hidden">
      {/* Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-x-0 border-x border-dashed border-white/20 left-1/2" />
        <div className="absolute inset-y-0 border-y border-dashed border-white/20 top-1/2" />
      </div>

      {/* Quadrant Captions */}
      <div className="absolute top-6 left-6 text-sm font-black uppercase tracking-widest text-white/20">AI Copilots</div>
      <div className="absolute top-6 right-6 text-sm font-black uppercase tracking-widest text-brand/40 text-right">Autonomous Leaders</div>
      <div className="absolute bottom-6 left-6 text-sm font-black uppercase tracking-widest text-white/20">Workflow Software</div>
      <div className="absolute bottom-6 right-6 text-sm font-black uppercase tracking-widest text-white/20 text-right">Lab Infrastructure</div>

      {/* Competitor Pills */}
      {/* Top Left: AI Copilots */}
      <div className="absolute top-[25%] left-[15%] flex flex-wrap gap-2 max-w-[250px]">
        {['FutureHouse', 'DeepMind', 'Thesis Labs', 'OpenAI/Prism', 'Inkvell'].map(name => (
          <div key={name} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/30">{name}</div>
        ))}
      </div>

      {/* Bottom Left: Workflow Software */}
      <div className="absolute bottom-[25%] left-[15%] flex flex-wrap gap-2 max-w-[200px]">
        {['Schrödinger', 'Citrine', 'Godela'].map(name => (
          <div key={name} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/30">{name}</div>
        ))}
      </div>

      {/* Bottom Right: Lab Infrastructure */}
      <div className="absolute bottom-[25%] right-[10%] flex flex-wrap gap-2 max-w-[250px] justify-end">
        {['Strateos', 'Benchling', 'TetraScience', 'Emerald Cloud'].map(name => (
          <div key={name} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/30">{name}</div>
        ))}
      </div>

      {/* Top Right: LabGPT & Lila */}
      <div className="absolute top-[15%] right-[10%] flex flex-col items-center">
        <SlideItem className="p-8 bg-white text-bg rounded-lg shadow-[0_0_80px_rgba(232,76,30,0.6)] relative group animate-pulse-subtle z-20">
          <div className="text-4xl font-black uppercase tracking-tighter text-center font-display mb-1">LABGPT</div>
          <div className="text-xs font-bold uppercase opacity-60 text-center tracking-widest">The Field-to-Lab OS</div>
        </SlideItem>
        <div className="mt-8 mr-32 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white/30 z-10 select-none">Lila Sciences</div>
      </div>
    </div>
  </SlideContainer>
);

// SLIDE 10: Why LabGPT Wins
const Slide10WhyWin = () => (
  <SlideContainer>
    <SlideItem className="mt-4">
      <h2 className="text-[56px] font-black uppercase mb-1 tracking-tighter">Why <span className="hero-word-outline">LabGPT wins</span></h2>
      <p className="text-xl text-brand font-medium uppercase tracking-[2px] mb-8">We start where invention actually starts — in the field.</p>
    </SlideItem>
    
    <SlideItem className="w-full max-w-7xl glass-panel rounded-lg overflow-hidden border border-brand/20 shadow-2xl">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="px-6 py-5 text-sm uppercase tracking-[2px] font-black text-white/40 border-r border-white/5">Capability</th>
            <th className="px-6 py-5 text-sm uppercase tracking-[2px] font-black text-white/20 leading-tight">Remote <br/>Infrastructure</th>
            <th className="px-6 py-5 text-sm uppercase tracking-[2px] font-black text-white/20 leading-tight">Scientific <br/>Software</th>
            <th className="px-6 py-5 text-sm uppercase tracking-[2px] font-black text-white/20 leading-tight">AI Research <br/>Copilots</th>
            <th className="px-6 py-5 text-sm uppercase tracking-[2px] font-black text-white/20 leading-tight">Autonomous <br/>Platforms</th>
            <th className="px-8 py-5 text-sm uppercase tracking-[4px] font-black text-brand bg-brand/10">LabGPT</th>
          </tr>
        </thead>
        <tbody className="text-xs font-light">
          {[
            { 
              tag: 'Field Collection', 
              r1: 'None (In-lab)', r2: 'None', r3: 'None', r4: 'Limited', 
              labgpt: 'DEEP-NATIVE' 
            },
            { 
              tag: 'Chain-of-Custody', 
              r1: 'Fragmented', r2: 'Assumed', r3: 'None', r4: 'Partial', 
              labgpt: 'VERIFIED LEDGER' 
            },
            { 
              tag: 'Field-to-Lab Execution', 
              r1: 'Manual', r2: 'Digital Only', r3: 'Planning Only', r4: 'Partial', 
              labgpt: 'FULL CONTROL' 
            },
            { 
              tag: 'Invention Scope', 
              r1: 'Lab Door', r2: 'Digital Only', r3: 'Hypothesis Only', r4: 'Lab Only', 
              labgpt: 'FIELD-TO-LAB' 
            },
            { 
              tag: 'Infrastructure', 
              r1: 'Third-party', r2: 'Layered', r3: 'None', r4: 'Partner-led', 
              labgpt: 'FULL-STACK' 
            }
          ].map((row, i) => (
            <tr key={i} className="border-b border-white/5 group hover:bg-white/5 transition-colors">
              <td className="px-6 py-4 font-black uppercase tracking-widest text-white/60 border-r border-white/5 text-sm">{row.tag}</td>
              <td className="px-6 py-4 text-white/20 text-sm">{row.r1}</td>
              <td className="px-6 py-4 text-white/20 text-sm">{row.r2}</td>
              <td className="px-6 py-4 text-white/20 text-sm">{row.r3}</td>
              <td className="px-6 py-4 text-white/20 text-sm">{row.r4}</td>
              <td className="px-8 py-4 text-brand font-black bg-brand/5 group-hover:bg-brand/10 transition-colors uppercase whitespace-nowrap text-sm">{row.labgpt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SlideItem>

    <div className="grid grid-cols-2 gap-12 mt-8 w-full max-w-6xl">
      <SlideItem>
        <div className="flex gap-4">
          <div className="w-1 h-12 bg-brand/30" />
          <p className="text-lg text-muted leading-relaxed italic">
            "We own the physical sample provenance from the moment of discovery."
          </p>
        </div>
      </SlideItem>
      <SlideItem className="flex items-center justify-end">
        <div className="text-right">
          <div className="text-sm font-black uppercase tracking-[3px] text-brand/60 mb-1">Defense Moat</div>
          <p className="text-xl font-bold text-white uppercase tracking-tight">Full Stack Control + Proprietary Corpus</p>
        </div>
      </SlideItem>
    </div>
  </SlideContainer>
);

// SLIDE 11: Business Model
const Slide11BusinessModel = () => (
  <SlideContainer>
    <SlideItem className="mt-4">
      <h2 className="text-[64px] font-black uppercase mb-2 tracking-tighter">Business <span className="hero-word-outline">model</span></h2>
      <p className="text-xl text-brand font-medium uppercase tracking-[2px] mb-8">Infrastructure and workflow control first; platform economics over time.</p>
    </SlideItem>
    
    <div className="grid grid-cols-4 gap-6 w-full max-w-6xl mx-auto mt-12 mb-12">
      {[
        { 
          title: "Vertical SaaS", 
          tag: "PHASE 1: CORE", 
          desc: "SaaS subscriptions for field campaign orchestration." 
        },
        { 
          title: "AI Automation", 
          tag: "PHASE 2: GROWTH", 
          desc: "Managed autonomous field workflows." 
        },
        { 
          title: "Data Insights", 
          tag: "PHASE 3: SCALE", 
          desc: "Environmental datasets licensed to insurers and investors." 
        },
        { 
          title: "Invention Platform", 
          tag: "THE DESTINATION", 
          desc: "Usage fees as lab invention workflows scale." 
        }
      ].map((item, i) => (
        <SlideItem 
          key={i} 
          className={`p-6 transition-all duration-300 shadow-xl flex flex-col justify-between group border rounded-lg h-[240px]
            ${i === 0 ? 'bg-brand text-bg border-brand/20' : 'bg-[#121212] border-white/5 text-white/40 hover:text-white hover:border-white/20 hover:bg-[#181818]'}
          `}
          style={{ 
            marginTop: `${i * 32}px`
          }}
        >
           <div>
              <div className={`text-xs font-black uppercase tracking-[2px] mb-2 ${i === 0 ? 'text-bg/60' : 'text-brand'}`}>{item.tag}</div>
              <h4 className="text-2xl font-black uppercase leading-[1.0] tracking-tighter">{item.title}</h4>
           </div>
           <p className={`text-base font-medium leading-relaxed ${i === 0 ? 'text-bg/80' : 'text-white/20 group-hover:text-white/60'}`}>{item.desc}</p>
        </SlideItem>
      ))}
    </div>
  </SlideContainer>
);

// SLIDE 12: Founders
const Slide12Founders = () => (
  <SlideContainer>
    <SlideItem className="mt-2">
      <h2 className="text-[64px] font-black uppercase mb-1 tracking-tighter">Founders</h2>
      <p className="text-xl text-brand font-medium uppercase tracking-[2px] mb-8">Cloud Scale Infrastructure X Global R&D Policy</p>
    </SlideItem>
    
    <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
      {/* ROHAN */}
      <SlideItem className="flex flex-col group">
        <div className="flex gap-8 mb-6">
          <div className="w-48 h-64 bg-white/5 border border-white/10 shrink-0 relative overflow-hidden rounded-sm">
            <img src="https://picsum.photos/seed/rohan/480/640" className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 border-2 border-brand opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="flex flex-col justify-end">
            <h4 className="text-4xl font-black uppercase leading-[0.85] mb-2">Rohan<br />Talwadia</h4>
            <span className="text-sm text-brand font-black uppercase tracking-widest mb-4">CEO // Co-Founder</span>
            <div className="flex items-center gap-3">
              <div className="text-xs font-black uppercase tracking-widest text-white/30 whitespace-nowrap">Timeline</div>
              <div className="h-px w-full bg-white/10" />
            </div>
            <div className="mt-3 text-sm font-black uppercase tracking-[3px] text-white/60">
              Google Cloud <span className="text-brand/40 mx-2">→</span> Planck Network <span className="text-brand/40 mx-2">→</span> LabGPT
            </div>
          </div>
        </div>
        <ul className="space-y-2 pr-8 list-none">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
            <p className="text-base text-white/80 leading-snug font-light whitespace-nowrap">
              Former <span className="text-white font-bold">Google Cloud engineer</span> (~6 yrs) with infrastructure DNA.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
            <p className="text-base text-white/80 leading-snug font-light whitespace-nowrap">
              Built Planck Network into a <span className="text-white font-bold">$2B cloud company</span>.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
            <p className="text-base text-white/80 leading-snug font-light italic whitespace-nowrap">
              Applying distributed systems to physical field campaigns.
            </p>
          </li>
        </ul>
      </SlideItem>

      {/* ALICE */}
      <SlideItem className="flex flex-col group">
        <div className="flex gap-8 mb-6">
          <div className="w-48 h-64 bg-white/5 border border-white/10 shrink-0 relative overflow-hidden rounded-sm">
            <img src="https://picsum.photos/seed/alice/480/640" className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 border-2 border-brand opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="flex flex-col justify-end">
            <h4 className="text-4xl font-black uppercase leading-[0.85] mb-2">Alice<br />Chen</h4>
            <span className="text-sm text-brand font-black uppercase tracking-widest mb-4">COO // Co-Founder</span>
            <div className="flex items-center gap-3">
              <div className="text-xs font-black uppercase tracking-widest text-white/30 whitespace-nowrap">Timeline</div>
              <div className="h-px w-full bg-white/10" />
            </div>
            <div className="mt-3 text-sm font-black uppercase tracking-[3px] text-white/60">
              R&D & Lab Ops <span className="text-brand/40 mx-2">→</span> $1.5B+ Policy <span className="text-brand/40 mx-2">→</span> LabGPT
            </div>
          </div>
        </div>
        <ul className="space-y-2 pr-8 list-none">
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
            <p className="text-base text-white/80 leading-snug font-light whitespace-nowrap">
              <span className="text-white font-bold">14+ years in R&D</span> and institutional lab operations.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
            <p className="text-base text-white/80 leading-snug font-light whitespace-nowrap">
              Shaped national policy directing <span className="text-white font-bold">$1.5B+ in R&D investment</span>.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2.5" />
            <p className="text-base text-white/80 leading-snug font-light italic whitespace-nowrap">
              Bridging regulatory rigor with autonomous orchestration.
            </p>
          </li>
        </ul>
      </SlideItem>
    </div>

  </SlideContainer>
);

// SLIDE 13: Roadmap
const Slide13Roadmap = () => (
  <SlideContainer>
    <SlideItem className="mt-8">
      <h2 className="text-[64px] font-black uppercase mb-16 tracking-tighter">Proving the <span className="hero-word-outline">loop</span></h2>
    </SlideItem>
    
    <div className="grid grid-cols-4 gap-8 max-w-6xl">
      {[
        { time: 'T+3 MO', title: 'Early MVP', desc: 'Architecture defined & owned-lab strategy locked.' },
        { time: 'T+9 MO', title: 'Field-to-Lab', desc: 'Complete loop: field sample to lab intake workflow.' },
        { time: 'T+14 MO', title: 'Data Moat', desc: 'First proprietary nature-based datasets.' },
        { time: 'T+18 MO', title: 'Pilot Ready', desc: 'Working proof of field-to-invention use case.' }
      ].map((item, i) => (
        <SlideItem key={i} className="flex flex-col group border-l border-white/10 pl-6 relative">
          <div className="timeline-dot" />
          <div className="hero-word-outline text-4xl mb-4 opacity-10 group-hover:opacity-60 transition-opacity">0{i+1}</div>
          <div className="text-xs font-black uppercase tracking-widest text-brand mb-2">{item.time}</div>
          <h4 className="text-xl font-bold uppercase mb-4 group-hover:text-white transition-all">{item.title}</h4>
          <p className="text-base text-muted font-light leading-relaxed">{item.desc}</p>
        </SlideItem>
      ))}
    </div>
  </SlideContainer>
);

// SLIDE 14: The Raise
const Slide14Raise = () => (
  <SlideContainer>
    
    <div className="mb-16 relative mt-8">
      <SlideItem>
        <h2 className="text-[160px] font-black leading-[0.8] uppercase tracking-[-0.06em] relative z-10">
          $3.0<span className="text-brand">M</span>
        </h2>
        <div className="hero-word-outline text-[160px] uppercase absolute top-0 left-0 -z-10 opacity-20 translate-x-12 translate-y-8 uppercase">PRE-SEED</div>
      </SlideItem>
    </div>

    <div className="grid grid-cols-2 gap-24 max-w-6xl items-end">
      <div className="space-y-8">
        <SlideItem>
          <div className="divider-orange w-full" />
        </SlideItem>
        <SlideItem>
          <p className="text-2xl text-white/80 font-light italic leading-snug">
            "Building the first <span className="text-orange-emphasis">owned field-to-lab autonomous stack</span> and demonstrating closed-loop discovery."
          </p>
        </SlideItem>
        <SlideItem className="flex gap-12">
           <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/20 mb-1">Target Raise</div>
              <div className="text-2xl font-black uppercase">$3M</div>
           </div>
           <div>
              <div className="text-xs font-black uppercase tracking-widest text-white/20 mb-1">Pre-Money Range</div>
              <div className="text-2xl font-black uppercase text-brand">$15M</div>
           </div>
        </SlideItem>

      </div>
      
      <div className="space-y-4">
        {[
          { label: 'Engineering & AI', val: '45%' },
          { label: 'Lab Infrastructure', val: '30%' },
          { label: 'Scientific Talent', val: '15%' },
          { label: 'Ops & Contingency', val: '10%' }
        ].map((item, i) => (
          <SlideItem key={i} className="relative h-14 bg-white/5 flex items-center px-6 group overflow-hidden border-l-2 border-brand/20">
             <motion.div 
               className="absolute left-0 top-0 bottom-0 bg-brand/10 group-hover:bg-brand/20 transition-colors"
               initial={{ width: 0 }}
               whileInView={{ width: item.val }}
             />
             <div className="relative z-10 flex justify-between w-full text-xs font-black uppercase tracking-[2px]">
                <span className="text-white/60">{item.label}</span>
                <span className="text-brand">{item.val}</span>
             </div>
          </SlideItem>
        ))}
      </div>
    </div>
  </SlideContainer>
);

export const SLIDES = [
  <Slide1Title />,
  <Slide2Gap />,
  <Slide3Problem />,
  <Slide4WhyNow />,
  <Slide5Solution />,
  <Slide6Evolution />,
  <Slide7Wedge />,
  <Slide8Market />,
  <Slide9Landscape />,
  <Slide10WhyWin />,
  <Slide11BusinessModel />,
  <Slide12Founders />,
  <Slide13Roadmap />,
  <Slide14Raise />
];
