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

import React from "react";
import "./../defaults.css";
import styles from "./TextInput.module.css";

type TextButtonProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  maxLength?: number;
  minLength?: number;
  onChange?: never;
  onchange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TextButton(props: TextButtonProps) {
  const [length, setLength] = React.useState(0);
  return (
    <div className={styles.component}>
      <input
        style={{
          borderBottomColor: props.minLength ? (length > props.minLength ? "#00ff00" : "#ff0000") : "",
        }}
        type="text"
        onChange={e => {
          setLength(e.target.value.length + 1);
          console.log(length);
          if (props.onchange) props.onchange(e)
        }}
        {...props}
      />
      <div
        className={styles.minLengthIndicator}
        style={{
          left: length + "%",
        }}></div>
    </div>
  );
}
