import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@aditya-karedla/core";

const meta = {
  title: "Components/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "The orientation of the separator",
    },
    decorative: {
      control: "boolean",
      description: "Whether the separator is purely decorative",
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h4 className="text-sm font-medium">Section 1</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Content for the first section
        </p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium">Section 2</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Content for the second section
        </p>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-[100px] items-center space-x-4">
      <div className="text-center">
        <div className="text-2xl font-bold">12</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">Posts</div>
      </div>
      <Separator orientation="vertical" />
      <div className="text-center">
        <div className="text-2xl font-bold">1.2K</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          Followers
        </div>
      </div>
      <Separator orientation="vertical" />
      <div className="text-center">
        <div className="text-2xl font-bold">345</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          Following
        </div>
      </div>
    </div>
  ),
};

export const InList: Story = {
  render: () => (
    <div className="w-[300px] space-y-2">
      <div className="py-2">
        <h4 className="text-sm font-medium">Item 1</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Description for item 1
        </p>
      </div>
      <Separator />
      <div className="py-2">
        <h4 className="text-sm font-medium">Item 2</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Description for item 2
        </p>
      </div>
      <Separator />
      <div className="py-2">
        <h4 className="text-sm font-medium">Item 3</h4>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Description for item 3
        </p>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <h3 className="text-lg font-semibold">Login</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Enter your email to sign in to your account
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white dark:bg-gray-900 px-2 text-gray-500">
            Or continue with
          </span>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
          Social login options
        </p>
      </div>
    </div>
  ),
};

export const CustomThickness: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div>
        <p className="text-sm mb-2">Default thickness (1px)</p>
        <Separator />
      </div>
      <div>
        <p className="text-sm mb-2">Thicker separator (2px)</p>
        <Separator className="h-[2px]" />
      </div>
      <div>
        <p className="text-sm mb-2">Even thicker (4px)</p>
        <Separator className="h-[4px]" />
      </div>
      <div>
        <p className="text-sm mb-2">Custom color</p>
        <Separator className="bg-blue-500" />
      </div>
    </div>
  ),
};
