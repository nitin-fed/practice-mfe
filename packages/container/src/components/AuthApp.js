/** @format */

import React, { useRef, useEffect } from "react";
import { mount } from "marketing/marketingApp";
import { useHistory } from "react-router-dom";
/**
 * mount can be React component, and can use directly,
 * but if mount is not a React might be Vue or Anguler, in this case mount will help to use without refactor
 */

export default () => {
  const ref = useRef(null);
  const history = useHistory(); //Browser history
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        console.log(nextPathName);
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      }
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
