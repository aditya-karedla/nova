import type { Meta, StoryObj } from "@storybook/react";
import { Slider, Label } from "@aditya-karedla/core";
import { useState } from "react";

const meta = {
  title: "Components/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState([50]);
    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Label>Volume</Label>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {value[0]}%
          </span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1} />
      </div>
    );
  },
};

export const Range: Story = {
  render: () => {
    const [value, setValue] = useState([25, 75]);
    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Label>Price Range</Label>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ${value[0]} - ${value[1]}
          </span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={1}
          minStepsBetweenThumbs={1}
        />
      </div>
    );
  },
};

export const Steps: Story = {
  render: () => {
    const [value, setValue] = useState([20]);
    return (
      <div className="w-[300px] space-y-4">
        <div className="flex justify-between">
          <Label>Quantity</Label>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {value[0]}
          </span>
        </div>
        <Slider
          value={value}
          onValueChange={setValue}
          max={100}
          step={10}
        />
        <p className="text-xs text-gray-500">Increments of 10</p>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Label>Disabled Slider</Label>
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
};
