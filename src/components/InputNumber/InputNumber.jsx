import Input from "../Input/Input";
import Number from "../Number/Number";
import { useState } from "react";

const InputNumber = () => {
    const defMsg = '';
    let [num, setNum] = useState(defMsg);

    const InputHandler = () => {
        const num = document.querySelector('.num').value;
        let def = 10;
        let addition = def + parseInt(num);
        const add = `Result: ${addition}`;
        setNum(add || defMsg);
    };
    return (
        <>
            <Input ChangeHandler={InputHandler} />
            <Number msg={num} />
        </>
    );
};

export default InputNumber;