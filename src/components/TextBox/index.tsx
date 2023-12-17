
import { FC } from "react";

export type TextBoxProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
};

const TextBox: FC<TextBoxProps> = ({ value, onChange, placeholder }) => {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="border border-gray-300 p-2 rounded-md"
        />
    );
};

export default TextBox;
