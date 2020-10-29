import React from "react";
import styles from "../styles/index.module.css";
const Index = () => {
  React.useEffect((): any => import("@google/model-viewer"), []);

  return (
    <>
      <model-viewer
        class={styles.model_viewer}
        src="https://ar-resume-assets.s3.eu-west-2.amazonaws.com/one.glb"
        ar
        ar-modes="webxr scene-viewer quick-look"
        ar-scale="fixed"
        camera-controls
        camera-target="0m 1.6m -0.2m"
        exposure="0.3"
        alt="A 3D model of Nnadozie's cv"
        ios-src="https://ar-resume-assets.s3.eu-west-2.amazonaws.com/one.usdz"
      ></model-viewer>
    </>
  );
};

export default Index;
