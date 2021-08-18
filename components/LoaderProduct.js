import React from "react";
import ContentLoader from "react-content-loader";

const LoaderProdcut = (props) => (
  <ContentLoader
    speed={2}
    width={270}
    height={470}
    viewBox="0 0 270 470"
    backgroundColor="#eee2e2"
    foregroundColor="#805252"
    {...props}
  >
    <rect x="3" y="20" rx="3" ry="3" width="270" height="470" />
  </ContentLoader>
);

export default LoaderProdcut;
