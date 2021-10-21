import React, { useState } from "react";

type Props = {
  value: number | undefined;
  setValue: (newValue: number | undefined) => void;
  maxNumbers: number;
  maxNumberOfDecimals?: number;
};

const PrettyInput = (props: Props) => {
  const [type, setType] = useState<string>("text");
  const [prettyValue, setPrettyValue] = useState<string>("");

  const createPrettyValue = () => {
    let res = props.value ? props.value.toString() : "";

    if (res.length > 3) {
      let startIndex = res.indexOf(".") > -1 ? res.indexOf(".") : res.length;
      let inRow = 0;
      for (let i = startIndex - 1; i >= 0; i--) {
        inRow++;
        if (inRow === 3) {
          res = res.substring(0, i) + " " + res.substring(i);
          inRow = 0;
        }
      }
    }

    return res;
  };

  const onChange = (e: any) => {
    let newValue: string = e.target.value;

    if (newValue.length > 0) {
      let index = 0;
      while (newValue[index] === "0") {
        index++;
      }

      newValue = newValue.substring(index);
    }

    const dotIndex = newValue.indexOf(".");
    if (dotIndex > -1 && dotIndex < newValue.length - 1) {
      if (newValue.substring(dotIndex + 1).length > 3) {
        newValue = newValue.substring(0, dotIndex + 4);
      }
    }

    if (newValue.length > props.maxNumbers) {
      newValue = newValue.substring(0, props.maxNumbers);
    }

    if (newValue.length === 0) {
      props.setValue(undefined);
    } else {
      props.setValue(parseFloat(newValue));
    }
  };

  const onKeyDown = (e: any) => {
    if (e.key === "e" || e.key === "E" || e.key === "-" || e.key === "+") {
      e.preventDefault();
    }

    if (e.key === "." && !props.maxNumberOfDecimals) {
      e.preventDefault();
    }
  };

  return (
    <input
      onKeyDown={onKeyDown}
      onFocus={() => setType("number")}
      type={type}
      onBlur={() => {
        setType("text");
        setPrettyValue(createPrettyValue());
      }}
      value={type === "text" ? prettyValue : props.value ?? ""}
      onChange={onChange}
    />
  );
};

export default PrettyInput;
