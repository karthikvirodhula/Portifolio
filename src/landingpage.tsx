import TextPressure from "./Components/TextPressure";

// Note:
// Make sure the font you're using supports all the variable properties.
// React Bits does not take responsibility for the fonts used
function LandingPage() {
  return (
    <div >
      <div
        style={{ position: "relative", height: "350px", marginTop: "300px" }}
      >
        <TextPressure
          text="KARTHIK VIRODHULA"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#000000ff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
    </div>
  );
}

export default LandingPage;
