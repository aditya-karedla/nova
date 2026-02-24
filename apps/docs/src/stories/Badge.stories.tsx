import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@aditya-karedla/core";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "success", "destructive", "warning", "outline"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Error",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
