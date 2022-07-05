// import React from "react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // component did mount
    console.log("HomeDidMount");

    return () => {
      // component will unmount
      console.log("HomeWillUnmount");
      console.log("---------------------");
    };
  }, []);

  useEffect(() => {
    // component did update
    console.log("HomeDidUpdate");
  }, []); //array not empty
  return <div>Home</div>;
}
