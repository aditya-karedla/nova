import type { Meta, StoryObj } from "@storybook/react";
import { Textarea, Label } from "@aditya-karedla/core";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your message</Label>
      <Textarea id="message-2" placeholder="Type your message here..." />
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Your message will be sent to the support team.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "Type your message here...",
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "This is a pre-filled textarea with some content that demonstrates how the component looks with multiple lines of text.",
  },
};

export const CustomHeight: Story = {
  args: {
    placeholder: "Type your message here...",
    className: "min-h-[150px]",
  },
};

export const FormExample: Story = {
  render: () => (
    <div className="grid w-full gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="subject">Subject</Label>
        <input
          id="subject"
          type="text"
          placeholder="Enter subject"
          className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 dark:placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
        />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="feedback">Feedback</Label>
        <Textarea
          id="feedback"
          placeholder="Share your thoughts..."
          className="min-h-[120px]"
        />
      </div>
    </div>
  ),
};
