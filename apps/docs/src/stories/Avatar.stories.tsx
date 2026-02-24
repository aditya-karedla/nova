import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "@aditya-karedla/core";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const Fallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="User" />
      <AvatarFallback>AK</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-20 w-20">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-4">
      <Avatar className="border-2 border-white dark:border-gray-800">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white dark:border-gray-800">
        <AvatarImage src="" />
        <AvatarFallback>AK</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white dark:border-gray-800">
        <AvatarImage src="" />
        <AvatarFallback>MS</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-white dark:border-gray-800">
        <AvatarImage src="" />
        <AvatarFallback>+3</AvatarFallback>
      </Avatar>
    </div>
  ),
};
