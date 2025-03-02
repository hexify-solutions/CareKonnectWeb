import { useState } from "react";
import style from "./counterButton.module.css";
import { Minus, Plus } from "@hexify/atoms";

const CounterButton = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div className={style.counter}>
            <button onClick={() => setCount((prev) => Math.max(0, prev - 1))} className={style.counterBtnMinus}>
                <Minus />
            </button>
            <span className={style.count}>{count}</span>
            <button onClick={() => setCount((prev) => prev + 1)} className={style.counterBtnPlus}>
                <Plus />
            </button>
        </div>
    );
};

export default CounterButton;