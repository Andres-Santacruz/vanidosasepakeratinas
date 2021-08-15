import React from "react";
import ContentLoader from "react-content-loader";

const CustomLoader = (props) => {
  return (
    <div style={{ width: "100%", margin: "0 auto", maxWidth: "1600px" }}>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <ContentLoader
          speed={1}
          width={1600}
          height={200}
          viewBox="0 0 1600 200"
          backgroundColor="#eee2e2"
          foregroundColor="#805252"
          {...props}
        >
          <rect x="549" y="159" rx="3" ry="3" width="67" height="11" />
          <rect x="562" y="147" rx="3" ry="3" width="140" height="11" />
          <rect x="557" y="152" rx="3" ry="3" width="53" height="11" />
          <rect x="549" y="146" rx="3" ry="3" width="72" height="11" />
          <rect x="520" y="155" rx="3" ry="3" width="100" height="11" />
          <rect x="560" y="147" rx="3" ry="3" width="37" height="11" />
          <rect x="15" y="1" rx="4" ry="4" width="1600" height="210" />
          <rect x="492" y="152" rx="3" ry="3" width="173" height="11" />
        </ContentLoader>
      </div>
    </div>
  );
};

export default CustomLoader;
