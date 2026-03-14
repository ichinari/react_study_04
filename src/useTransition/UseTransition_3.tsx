import { Suspense } from "react";
import Router from "./components/Router";

const UseTransition_3 = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </div>
  );
};

export default UseTransition_3;
