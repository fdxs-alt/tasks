import React, { useEffect, useState } from "react";
import EventEmitter from "../Utils/EventEmitter";
const LoadingEmitter = new EventEmitter();

const LoaderExample = () => {
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
  };

  const stop = () => {
    setLoading(false);
  };

  LoadingEmitter.on("onLoadingStart", start);
  LoadingEmitter.on("onLoadingStop", stop);

  useEffect(() => {
    LoadingEmitter.emit("onLoadingStart", "Started loading");

    setTimeout(() => {
      LoadingEmitter.emit("onLoadingStop", "Stopped loading");
    }, 5000);
    return () => {
      LoadingEmitter.remove("onLoadingStart", start);
      LoadingEmitter.remove("onLoadingStop", stop);
    };
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
};

export default LoaderExample;
