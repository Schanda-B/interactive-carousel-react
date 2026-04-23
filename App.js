import { useState, useRef } from "react";

const slides = [
  {
    id: 1,
    type: "hook",
    badge: "📺 nobody asked but here we are",
    headline: "You're not the\nmain character.",
    sub: "You're a background actor.\nIn a movie you're not getting\npaid for.\nOn a platform that gets\npaid because of you.",
    swipe: "swipe if you've posted something and checked your phone 11 times in 4 minutes →",
    bg: ["#0a0a0a", "#130d1f"],
    accent: "#b57bee",
  },
  {
    id: 2,
    type: "content",
    number: "01",
    headline: "The Blue Tokai\nPhotoshoot 📸",
    story: "You know what I mean.\n40 minutes. Three angles. One \"candid.\"\nAnd the coffee got cold.",
    truth: "You weren't hustling.\nYou were art-directing proof that you hustle.\nBig difference.",
    callout: "Output over optics. Always.",
    bg: ["#0a0e14", "#091220"],
    accent: "#38bdf8",
    relatability: "don't lie — the coffee was definitely cold",
  },
  {
    id: 3,
    type: "content",
    number: "02",
    headline: "Log Kya Kahenge\nis a Ghost 👻",
    story: "That 'audience' judging your grid gap?\nThey're in their own bathroom\nworrying about their own double chin\nin their own selfie.",
    truth: "Your imaginary critics\ndon't pay your rent.\nThey don't even exist.",
    callout: "Post for who you were before you knew what analytics were.",
    bg: ["#0a0a0a", "#120a0a"],
    accent: "#f87171",
    relatability: "the grid gap anxiety is SO real and SO unnecessary",
  },
  {
    id: 4,
    type: "content",
    number: "03",
    headline: "Raw Footage vs.\nDirector's Cut 📉",
    story: "You: Monday morning. Bangalore traffic. Stale chai. Family group chat drama.\n\nThem: Goa reel. Filtered skin. 'Building in public.'",
    truth: "Their life has 3 AM anxiety too.\nThey just hired a better editor.",
    callout: "You're not behind. You're just watching the wrong cut.",
    bg: ["#0a0e0a", "#091209"],
    accent: "#4ade80",
    relatability: "the Bangalore traffic detail is too specific. I felt that.",
  },
  {
    id: 5,
    type: "content",
    number: "04",
    headline: "Dopamine is\nLying to You 🧠",
    story: "Your brain doesn't know the difference\nbetween posting about the gym\nand actually going.\n\nBoth feel like progress.\nOnly one is.",
    truth: "The validation hit from the act\nkills the hunger for the result.\nThat's the actual trap.",
    callout: "Close the app. Open the problem.",
    bg: ["#0a0a0e", "#09090f"],
    accent: "#a78bfa",
    relatability: "study-with-me reel > clearing the exam. we know.",
  },
  {
    id: 6,
    type: "truth",
    headline: "Real main character\nenergy is boring.",
    points: [
      "It looks like doing the work at 6am with no audience.",
      "It looks like a conversation that never gets posted.",
      "It looks like a skill you built in a notebook, not a thread.",
    ],
    closer: "The best chapters of your life\nwon't have good lighting.\nThey'll just be true.",
    bg: ["#0f0a1a", "#0a0a0a"],
    accent: "#b57bee",
  },
  {
    id: 7,
    type: "cta",
    badge: "if this felt personal",
    headline: "Stop performing\nyour life.",
    sub: "Start living the version\nthat doesn't need\nan audience to count.",
    actions: ["💾 Save — you'll need this at 2am", "📤 Tag the friend mid-performance"],
    handle: "@chandashreyasiy10",
    nudge: "drop '🎬' if this called you out",
    bg: ["#0f0a1a", "#0a0a14"],
    accent: "#b57bee",
  },
];

const Grain = () => (
  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.05, pointerEvents: "none", zIndex: 1 }} aria-hidden>
    <filter id="g2">
      <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="100%" height="100%" filter="url(#g2)"/>
  </svg>
);

const SlideHook = ({ slide }) => (
  <div style={{ zIndex: 2, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
    <div>
      <div style={{ color: slide.accent, fontFamily: "monospace", fontSize: "10px", letterSpacing: "1px", marginBottom: "20px", opacity: 0.7 }}>
        {slide.badge}
      </div>
      <h1 style={{
        fontFamily: "'Bebas Neue', cursive",
        fontSize: "62px", lineHeight: "0.95", color: "#fff", margin: "0 0 6px", letterSpacing: "1px"
      }}>
        {slide.headline.split("\n").map((l, i) => <div key={i}>{l}</div>)}
      </h1>
      <div style={{ width: "36px", height: "2px", background: slide.accent, margin: "16px 0" }}/>
      <p style={{
        color: "#999", fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
        lineHeight: "1.8", margin: 0, fontWeight: 300,
      }}>
        {slide.sub.split("\n").map((l, i) => <span key={i}>{l}<br/></span>)}
      </p>
    </div>
    <div style={{
      color: slide.accent, fontFamily: "'DM Sans', sans-serif",
      fontSize: "10px", opacity: 0.5, letterSpacing: "0.3px", fontStyle: "italic"
    }}>
      {slide.swipe}
    </div>
  </div>
);

const SlideContent = ({ slide }) => (
  <div style={{ zIndex: 2, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "14px" }}>
        <span style={{ fontFamily: "'Bebas Neue', cursive", fontSize: "11px", color: slide.accent, letterSpacing: "3px" }}>
          {slide.number}
        </span>
        <div style={{ flex: 1, height: "1px", background: `${slide.accent}30` }}/>
      </div>
      <h2 style={{
        fontFamily: "'Bebas Neue', cursive", fontSize: "38px", lineHeight: "1.05",
        color: "#fff", margin: "0 0 16px", letterSpacing: "0.5px"
      }}>
        {slide.headline.split("\n").map((l, i) => <div key={i}>{l}</div>)}
      </h2>
      <p style={{
        color: "#bbb", fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px",
        lineHeight: "1.7", margin: "0 0 14px", fontWeight: 300, whiteSpace: "pre-line"
      }}>
        {slide.story}
      </p>
      <p style={{
        color: "#ddd", fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px",
        lineHeight: "1.65", margin: "0 0 16px", fontWeight: 400, whiteSpace: "pre-line"
      }}>
        {slide.truth}
      </p>
      <div style={{
        borderLeft: `2px solid ${slide.accent}`,
        paddingLeft: "12px",
        color: slide.accent,
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "11.5px",
        fontWeight: 500,
        letterSpacing: "0.2px",
      }}>
        {slide.callout}
      </div>
    </div>
    <div style={{
      color: "#444", fontFamily: "'DM Sans', sans-serif",
      fontSize: "9.5px", fontStyle: "italic"
    }}>
      — {slide.relatability}
    </div>
  </div>
);

const SlideTruth = ({ slide }) => (
  <div style={{ zIndex: 2, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
    <div>
      <div style={{
        display: "inline-block", background: `${slide.accent}18`,
        border: `1px solid ${slide.accent}30`, borderRadius: "4px",
        padding: "3px 10px", color: slide.accent, fontSize: "9px",
        fontFamily: "monospace", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "18px"
      }}>
        the actual truth
      </div>
      <h2 style={{
        fontFamily: "'Bebas Neue', cursive", fontSize: "36px", lineHeight: "1.05",
        color: "#fff", margin: "0 0 22px"
      }}>
        {slide.headline.split("\n").map((l, i) => <div key={i}>{l}</div>)}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
        {slide.points.map((p, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
            <div style={{
              width: "4px", height: "4px", borderRadius: "50%",
              background: slide.accent, marginTop: "6px", flexShrink: 0
            }}/>
            <span style={{
              color: "#ccc", fontFamily: "'DM Sans', sans-serif",
              fontSize: "12.5px", lineHeight: "1.6", fontWeight: 300
            }}>{p}</span>
          </div>
        ))}
      </div>
    </div>
    <p style={{
      color: "#777", fontFamily: "'DM Sans', sans-serif",
      fontSize: "12px", lineHeight: "1.7", fontStyle: "italic",
      borderTop: "1px solid #1e1e1e", paddingTop: "14px", margin: 0,
      whiteSpace: "pre-line"
    }}>
      {slide.closer}
    </p>
  </div>
);

const SlideCTA = ({ slide }) => (
  <div style={{ zIndex: 2, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
    <div>
      <div style={{
        color: "#555", fontFamily: "monospace", fontSize: "9px",
        letterSpacing: "2px", marginBottom: "16px"
      }}>
        {slide.badge}
      </div>
      <h2 style={{
        fontFamily: "'Bebas Neue', cursive", fontSize: "46px", lineHeight: "0.98",
        color: "#fff", margin: "0 0 14px"
      }}>
        {slide.headline.split("\n").map((l, i) => <div key={i}>{l}</div>)}
      </h2>
      <p style={{
        color: "#888", fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
        lineHeight: "1.7", margin: "0 0 24px", whiteSpace: "pre-line", fontWeight: 300
      }}>
        {slide.sub}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "9px", marginBottom: "16px" }}>
        {slide.actions.map((a, i) => (
          <div key={i} style={{
            background: i === 0 ? slide.accent : "transparent",
            border: `1px solid ${i === 0 ? slide.accent : "#333"}`,
            borderRadius: "8px", padding: "10px 14px",
            color: i === 0 ? "#0a0a0a" : "#888",
            fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
            fontWeight: i === 0 ? 600 : 400, textAlign: "center",
            cursor: "pointer",
          }}>
            {a}
          </div>
        ))}
      </div>
      <div style={{
        textAlign: "center", color: slide.accent, fontFamily: "'DM Sans', sans-serif",
        fontSize: "11px", letterSpacing: "0.5px",
      }}>
        {slide.nudge}
      </div>
    </div>
    <div style={{ color: "#333", fontFamily: "monospace", fontSize: "10px", letterSpacing: "1px" }}>
      {slide.handle}
    </div>
  </div>
);

export default function MainCharacterCarousel() {
  const [cur, setCur] = useState(0);
  const [anim, setAnim] = useState(false);

  const goTo = (i) => {
    if (anim || i === cur || i < 0 || i >= slides.length) return;
    setAnim(true);
    setTimeout(() => { setCur(i); setAnim(false); }, 250);
  };

  const s = slides[cur];
  const bg = `linear-gradient(150deg, ${s.bg[0]} 0%, ${s.bg[1]} 100%)`;

  const renderSlide = () => {
    if (s.type === "hook") return <SlideHook slide={s}/>;
    if (s.type === "content") return <SlideContent slide={s}/>;
    if (s.type === "truth") return <SlideTruth slide={s}/>;
    if (s.type === "cta") return <SlideCTA slide={s}/>;
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#060606",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px 16px",
      gap: "18px",
      fontFamily: "sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300&display=swap');
        .s-in { animation: sIn 0.25s cubic-bezier(0.22,1,0.36,1) both; }
        @keyframes sIn { from { opacity:0; transform:translateY(12px) scale(0.985); } to { opacity:1; transform:none; } }
        .nb { transition: all 0.18s; }
        .nb:hover { opacity: 1 !important; transform: scale(1.08); }
        .nb:active { transform: scale(0.93); }
      `}</style>

      {/* Label */}
      <div style={{ color: "#2a2a2a", fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", fontFamily: "monospace" }}>
        PRO VERSION · 2026 STRATEGY
      </div>

      {/* Card */}
      <div style={{
        width: "340px", height: "490px", borderRadius: "20px", overflow: "hidden",
        position: "relative",
        boxShadow: `0 0 0 1px #1a1a1a, 0 0 80px ${s.accent}1a, 0 50px 100px rgba(0,0,0,0.9)`,
        transition: "box-shadow 0.5s ease",
      }}>
        <div key={cur} className="s-in" style={{
          width: "100%", height: "100%", background: bg,
          display: "flex", flexDirection: "column",
          padding: "26px 24px 22px",
          boxSizing: "border-box",
          position: "relative", overflow: "hidden",
        }}>
          <Grain/>

          {/* Ambient glow top right */}
          <div style={{
            position: "absolute", width: "200px", height: "200px", borderRadius: "50%",
            background: `radial-gradient(circle, ${s.accent}0a 0%, transparent 70%)`,
            top: "-60px", right: "-60px", zIndex: 0,
          }}/>

          {/* Slide counter */}
          <div style={{
            position: "absolute", top: "14px", right: "18px",
            color: "#222", fontSize: "9px", fontFamily: "monospace", letterSpacing: "2px", zIndex: 3
          }}>
            {String(cur + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </div>

          {renderSlide()}
        </div>
      </div>

      {/* Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <button className="nb" onClick={() => goTo(cur - 1)} disabled={cur === 0} style={{
          background: "none", border: "1px solid #1e1e1e", borderRadius: "50%",
          width: "34px", height: "34px", color: "#555", cursor: cur === 0 ? "default" : "pointer",
          fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center",
          opacity: cur === 0 ? 0.2 : 0.7,
        }}>‹</button>

        <div style={{ display: "flex", gap: "5px" }}>
          {slides.map((_, i) => (
            <div key={i} onClick={() => goTo(i)} style={{
              width: i === cur ? "18px" : "5px", height: "5px", borderRadius: "3px",
              background: i === cur ? s.accent : "#252525",
              transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)", cursor: "pointer",
            }}/>
          ))}
        </div>

        <button className="nb" onClick={() => goTo(cur + 1)} disabled={cur === slides.length - 1} style={{
          background: "none", border: "1px solid #1e1e1e", borderRadius: "50%",
          width: "34px", height: "34px", color: "#555",
          cursor: cur === slides.length - 1 ? "default" : "pointer",
          fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center",
          opacity: cur === slides.length - 1 ? 0.2 : 0.7,
        }}>›</button>
      </div>

      {/* Slide type label */}
      <div style={{ color: "#252525", fontFamily: "monospace", fontSize: "9px", letterSpacing: "3px", textTransform: "uppercase" }}>
        {s.type === "hook" ? "HOOK SLIDE" : s.type === "cta" ? "CLOSER" : s.type === "truth" ? "TRUTH SLIDE" : `CONTENT · ${s.number}`}
      </div>
    </div>
  );
}
