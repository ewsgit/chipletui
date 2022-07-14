/*
 *   Copyright (c) 2022 Ewsgit
 *   All rights reserved.

 *   Permission is hereby granted, free of charge, to any person obtaining a copy
 *   of this software and associated documentation files (the "Software"), to deal
 *   in the Software without restriction, including without limitation the rights
 *   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *   copies of the Software, and to permit persons to whom the Software is
 *   furnished to do so, subject to the following conditions:
 
 *   The above copyright notice and this permission notice shall be included in all
 *   copies or substantial portions of the Software.
 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *   SOFTWARE.
 */

import React, { useEffect } from "react";
import styles from "./TextInput.module.scss";

type TextButtonProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  maxLength?: number;
  minLength?: number;
  onChange?: undefined;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextButton(props: TextButtonProps) {
  useEffect(() => {
    if (!props.minLength) return;
    if (!props.maxLength) return;
    if (props.minLength > props.maxLength) {
      throw new Error("minLength must be less than maxLength");
    }
  }, [props]);
  const [length, setLength] = React.useState(0);
  const [percentageFull, setPercentageFull] = React.useState(0);
  const [message, setMessage] = React.useState("");
  return (
    <div className={styles.component}>
      <input
        onBlur={() => {
          setMessage("");
        }}
        type="text"
        style={
          props.maxLength || props.minLength
            ? {
                borderBottom: message !== "" ? "1rem solid #0004" : "0.25rem solid #0004",
              }
            : {}
        }
        onChange={(e: any) => {
          setMessage("");
          if (props.maxLength && e.target.value.length === props.maxLength) {
            setMessage("Max length reached");
          }
          if (props.minLength && e.target.value.length < props.minLength) {
            setMessage("Enter at least " + props.minLength + " characters");
          }
          setLength(e.target.value.length);
          if (props.maxLength) setPercentageFull((e.target.value.length / props.maxLength) * 100);
          if (props.onchange) props.onchange(e);
        }}
        {...props}
      />
      {message !== "" ? <div className={styles.message}>{message}</div> : null}
      <div
        className={styles.lengthIndicator}
        style={{
          height: message !== "" ? "1rem" : "0.25rem",
          width: `${percentageFull}%`,
          backgroundColor: props.minLength ? (length >= props.minLength ? "#009900" : "#bb0000") : "",
        }}></div>
      {props.minLength && props.maxLength ? (
        <div
          className={styles.minLengthIndicator}
          style={{
            height: message !== "" ? "1rem" : "0.25rem",
            left: (props.minLength / props.maxLength) * 100 + "%",
          }}></div>
      ) : null}
    </div>
  );
}
