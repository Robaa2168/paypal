import React, { useMemo } from "react";
import styles from "./Opt.module.css";

const RE_DIGIT = new RegExp("^[0-9]$");
function OptVerification({ value, valueLength, onChange }) {
  const inputOnChange = (e, idx) => {
    const { target } = e;
    let targetValue = target.value;

    const isTargetValueDigit = RE_DIGIT.test(targetValue);
    if (!isTargetValueDigit && targetValue !== "") return;

    targetValue = isTargetValueDigit ? targetValue : " ";

    const newValue =
      value.substring(0, idx) + targetValue + value.substring(idx + 1);
    onChange(newValue);

    if (!isTargetValueDigit) return;

    const nextElementSibling = target.nextElementSibling?.focus();
    if (nextElementSibling) nextElementSibling.focus();
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

  const inputOnKeyDown = (e) => {
    const { target } = e;
    const targetValue = target.value;
    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }

    const previousElementSibling = target.previousElementSibling?.focus();
  };

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
          onKeyDown={inputOnKeyDown}
        />
      ))}
    </div>
  );
}

export default OptVerification;
