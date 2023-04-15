import React, { useMemo } from "react";
import styles from "./Opt.module.css";

const RE_DIGIT = new RegExp("^[0-9]$");
function OptVerification({ value, valueLength, onChange }) {
  const inputOnChange = (e, idx) => {
    const target = e.target;
    const targetValue = target.value;

    if (!RE_DIGIT.test(targetValue)) {
      return;
    }

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);

    onChange(newValue);
  };

  const valueItems = useMemo(() => {
    const valueArray = value.split("");
    const items = [];

    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];

      if (RE_DIGIT.test(char)) {
        items.push(char);
      } else {
        items.push("");
      }
    }

    return items;
  }, [value, valueLength]);

  return (
    <div className={styles.otpGroup}>
      {valueItems.map((digit, idx) => (
        <input
          required="true"
          key={idx}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="\d{1}"
          maxLength={valueLength}
          className={styles.otpInput}
          value={digit}
          onChange={(e) => inputOnChange(e, idx)}
        />
      ))}
    </div>
  );
}

export default OptVerification;
