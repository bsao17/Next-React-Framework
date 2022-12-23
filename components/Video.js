import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";

function Video() {
  return (
    <div className="z-0">
        <Image ref={"./assets/skip-icon-png-0.jpg"} height={10} width={20}/>
      <video style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: "-100"}}   controls autoPlay={true} muted src={require("./assets/introSite.mp4")}></video>
    </div>
  );
}

export default Video;
