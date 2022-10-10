/** @format */

import React, { useRef, useEffect } from "react";
import { mount } from "marketing/marketingApp";

/**
 * mount can be React component, and can use directly,
 * but if mount is not a React might be Vue or Anguler, in this case mount will help to use without refactor
 */

export default () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};
