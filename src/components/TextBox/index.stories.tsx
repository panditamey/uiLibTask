
import { useState } from "react";
import type { Meta, Story } from "@storybook/react";
import TextBox, { TextBoxProps } from ".";

const meta: Meta<typeof TextBox> = {
    title: "Components/TextBox",
    component: TextBox,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type StoryArgs = Omit<TextBoxProps, "value" | "onChange">;

const Template: Story<StoryArgs> = (args) => {
    const [value, setValue] = useState("");

    const handleChange = (newValue: string) => {
        setValue(newValue);
    };

    return <TextBox value={value} onChange={handleChange} {...args} />;
};

export const ExampleTextBox = Template.bind({});
ExampleTextBox.args = {
    placeholder: "Enter text...",
};
