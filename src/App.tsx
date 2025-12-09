import { useEffect } from "react";
import Forkartik from "./components/Forkartik";
import RavanVoiceAI from "./components/Ravan";
function App({setDispatcher }) {

   useEffect(() => {
    setDispatcher((action) => {
      if (action === "open") {
        window.dispatchEvent(new Event("open-widget"));
      }
    });
  }, []);
  return (
    <>
      {/* <div className="w-screen h-screen bg-[#483d8b]"> */}
      <RavanVoiceAI />
      {/* </div> */}
      {/* <Forkartik /> */}
    </>
  );
}

export default App;
