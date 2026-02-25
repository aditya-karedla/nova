import type { Meta, StoryObj } from "@storybook/react";
import { Label, Input } from "@aditya-karedla/core";

const meta = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    required: {
      control: "boolean",
      description: "Whether the label indicates a required field",
    },
    error: {
      control: "boolean",
      description: "Whether the label should display error styling",
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name" required>
        Full Name
      </Label>
      <Input id="name" placeholder="John Doe" />
      <p className="text-xs text-gray-500">This field is required</p>
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="username" error required>
        Username
      </Label>
      <Input
        id="username"
        placeholder="username"
        className="border-red-500 focus:ring-red-500"
      />
      <p className="text-xs text-red-500">Username is already taken</p>
    </div>
  ),
};

export const MultipleFields: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="first-name" required>
          First Name
        </Label>
        <Input id="first-name" placeholder="John" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="last-name" required>
          Last Name
        </Label>
        <Input id="last-name" placeholder="Doe" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="bio">Bio</Label>
        <Input id="bio" placeholder="Tell us about yourself" />
        <p className="text-xs text-gray-500">Optional field</p>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled-input">Disabled Field</Label>
      <Input
        id="disabled-input"
        placeholder="Cannot edit"
        disabled
        className="cursor-not-allowed opacity-50"
      />
    </div>
  ),
};
