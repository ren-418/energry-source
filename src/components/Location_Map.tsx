"use client"
import { useEffect, useRef } from "react";

const Location_Map = () => {

  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === 'object' && e.data.hasOwnProperty("datawrapper-height")) {
        const iframes = document.querySelectorAll("iframe");
        for (const key in e.data["datawrapper-height"]) {
          for (let i = 0; i < iframes.length; i++) {
            if (iframes[i].contentWindow === e.source) {
              iframes[i].style.height = `${e.data["datawrapper-height"][key]}px`;
            }
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div style={{ width: "100%", overflow: "hidden", }} className="!text-[white] px-[10px]">
      <iframe
        ref={iframeRef}
        title="Average Electricity Bill By State"
        aria-label="Map"
        id="datawrapper-chart-gSwGM"
        src="https://datawrapper.dwcdn.net/gSwGM/2/"
        scrolling="no"
        frameBorder="0"
        style={{ width: "100%", minWidth: "100% !important", border: "none", height: "456px", color: 'red !important' }}
      ></iframe>
    </div>
  );
};

export default Location_Map;
