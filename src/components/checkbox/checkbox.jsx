import React from 'react';
import "./checkbox.scss";
import { FaCheck } from 'react-icons/fa';

export const Checkbox = (
    {
        name,
        onChange,
        isChecked,
        label,
        disabled
    }
) => {
    const handleChange = (e) => onChange(e.target.checked);

    return (
        <div className="checkbox">
            <label className="checkbox-label">
                <div className="checkbox-wrapper">
                    <input type="checkbox"
                           className="checkbox-input"
                           name={name}
                           checked={isChecked}
                           disabled={disabled}
                           onChange={handleChange}/>
                    <span className={`checkbox-span ${isChecked ? "checked" : ""} ${disabled ? "disabled" : ""}`}>
                        {/*<Icon size={10} type={"checkmark"}  color={theme.primary.main}/>*/}
                        {isChecked && <FaCheck color={"#fff"} size={11}/>}
                    </span>
                </div>
                {label}
            </label>
        </div>
    )
};

