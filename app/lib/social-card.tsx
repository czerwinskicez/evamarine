export function SocialCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#17384f",
        color: "#fbfaf6",
        padding: "58px 68px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: 1 }}>EVA Marine</div>
        <div style={{ color: "#e2b866", fontSize: 26, fontWeight: 700 }}>Giżycko / Mazury</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ color: "#e2b866", fontSize: 28, fontWeight: 700, textTransform: "uppercase" }}>
          Podłogi EVA do jachtów i łodzi
        </div>
        <div style={{ maxWidth: 920, fontSize: 72, fontWeight: 800, lineHeight: 1.04 }}>
          Pokłady jachtowe wykonane na wymiar
        </div>
        <div style={{ maxWidth: 880, color: "rgba(251,250,246,0.82)", fontSize: 32, lineHeight: 1.35 }}>
          Skanowanie pokładu, indywidualny projekt, frezowanie CNC i profesjonalny montaż na Mazurach.
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ color: "#eadfcb", fontSize: 28, fontWeight: 700 }}>evamarine.pl</div>
        <div
          style={{
            display: "flex",
            gap: 14,
            color: "#17384f",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <span style={{ background: "#fbfaf6", padding: "12px 18px" }}>EVA</span>
          <span style={{ background: "#e2b866", padding: "12px 18px" }}>CNC</span>
          <span style={{ background: "#d8edf7", padding: "12px 18px" }}>Montaż</span>
        </div>
      </div>
    </div>
  );
}
