import { RefObject, useEffect, useState } from "react";

function useGeo(ref: RefObject<HTMLElement>) {
  const [geoData, setData] = useState<Coordinates | null>(null);
  const getGeo = (pos: Position) => {
    setData(pos.coords);
  };

  let watcher: number;

  const getCoordinates = () =>
    window.navigator.geolocation.getCurrentPosition(getGeo);

  const [listening, setListening] = useState(true);

  useEffect(() => {
    if (ref.current && listening) {
      getCoordinates();
      watcher = window.navigator.geolocation.watchPosition(getCoordinates);
    }

    return () => {
      navigator.geolocation.clearWatch(watcher);
    };
  }, [listening, ref]);

  const toggleListening = () => {
    setListening(!listening);
    setData(null);
  };

  return { geoData, toggleListening };
}

export default useGeo;
