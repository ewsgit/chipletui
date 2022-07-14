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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import "./components/setup.scss"
import TextInput from "./components/TextInput/TextInput"
import TextButton from './components/TextButton/TextButton';
import IconButton from './components/IconButton/IconButton';
import VerticalSlider from "./components/VerticalSlider/VerticalSlider";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<div className={"dark"}>
    <TextButton text="Test"/>
    <TextButton text="New test button"/>
    <TextInput placeholder="Type here..." minLength={10} maxLength={20}/>
    <IconButton icon="cast_connected"/>
    <VerticalSlider />
</div>);
