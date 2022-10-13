/** @format */

import React from "react";
import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;



// - uses: shinyinc/action-aws-cli@v1.2
// - run: aws s3 sync dist s3://${{ secrets.AWS_S3_BUCKET_NAME }}/container/latest
//   env:
//     AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
//     AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
//     AWS_DEFAULT_REGION: us-east-2