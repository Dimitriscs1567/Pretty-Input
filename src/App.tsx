import React, { useState } from "react";
import PrettyInput from "./PrettyInput";
import "./App.css";

const App = () => {
  const [value1, setValue1] = useState<number | undefined>();
  const [value2, setValue2] = useState<number | undefined>();
  const [value3, setValue3] = useState<number | undefined>();

  return (
    <div style={{ height: "2500px" }}>
      <PrettyInput
        value={value1}
        setValue={setValue1}
        maxNumbers={8}
        maxNumberOfDecimals={3}
      />
      <div style={{ height: "100px" }} />
      <PrettyInput
        value={value2}
        setValue={setValue2}
        maxNumbers={8}
        maxNumberOfDecimals={1}
      />
      <div style={{ height: "100px" }} />
      <PrettyInput value={value3} setValue={setValue3} maxNumbers={3} />
    </div>
  );
};

export default App;
