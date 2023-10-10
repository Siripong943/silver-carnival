import React, { useRef, useState } from 'react';

const BmiCalculator = () => {
    const w_inputRef = useRef(null);
    const h_inputRef = useRef(null);
    const [bmi, setBmi] = useState(null);

    const calBmi = () => {
        let w = parseFloat(w_inputRef.current.value);
        let h = parseFloat(h_inputRef.current.value);

        if (isNaN(w) || isNaN(h)) {
            alert("Please enter valid weight and height.");
            return;
        }

        const calculatedBmi = w / Math.pow(h / 100, 2);
        setBmi(calculatedBmi);
    };

    const resetInputs = () => {
        w_inputRef.current.value = '';
        h_inputRef.current.value = '';
        setBmi(null);
    };

    const getBmiCategory = (bmi) => {
        if (bmi < 18.5) return 'ผอม';
        if (bmi >= 18.5 && bmi < 25) return 'ปกติ';
        if (bmi >= 25 && bmi < 30) return 'ท้วม';
        return 'อ้วน';
    };

    return (
        <>
            <h3>BMI Calculator</h3>
            Weight : <input
                type="text"
                ref={w_inputRef}
                placeholder="Enter weight in kg."
            /> kg.<br />
            Height : <input
                type="text"
                ref={h_inputRef}
                placeholder="Enter height in cm."
            /> cm.<br />
            <button onClick={calBmi}>Calculate</button>
            <button onClick={resetInputs}>Reset</button><br />
            {bmi !== null && (
                <>
                    BMI value: {bmi.toFixed(2)} ({getBmiCategory(bmi)})
                    <BmiText bmiCategory={getBmiCategory(bmi)} />
                </>
            )}
        </>
    );
};

const BmiText = ({ bmiCategory }) => {
    return <h1>{bmiCategory}</h1>;
};

export default BmiCalculator;
