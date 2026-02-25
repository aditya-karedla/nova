import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem, Label } from "@aditya-karedla/core";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" className="space-y-4">
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="comfortable" id="comfortable" className="mt-0.5" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="comfortable">Comfortable</Label>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Best for most users. Balanced between space and readability.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="compact" id="compact" className="mt-0.5" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="compact">Compact</Label>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Fit more content on screen with tighter spacing.
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <RadioGroupItem value="spacious" id="spacious" className="mt-0.5" />
        <div className="grid gap-1.5 leading-none">
          <Label htmlFor="spacious">Spacious</Label>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Maximum readability with generous spacing.
          </p>
        </div>
      </div>
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-one" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="r-option-one" />
        <Label htmlFor="r-option-one">Option One (Disabled)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="r-option-two" />
        <Label htmlFor="r-option-two">Option Two (Disabled)</Label>
      </div>
    </RadioGroup>
  ),
};

export const PaymentMethod: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-3">
      <div>
        <h3 className="font-medium text-sm mb-3">Payment Method</h3>
        <RadioGroup defaultValue="card">
          <div className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-700 rounded-md">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex-1 cursor-pointer">
              Credit Card
            </Label>
            <svg className="w-8 h-5" viewBox="0 0 32 20" fill="none">
              <rect width="32" height="20" rx="2" fill="#1434CB" />
              <circle cx="12" cy="10" r="5" fill="#EB001B" />
              <circle cx="20" cy="10" r="5" fill="#F79E1B" />
            </svg>
          </div>
          <div className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-700 rounded-md">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal" className="flex-1 cursor-pointer">
              PayPal
            </Label>
            <span className="text-sm font-semibold text-blue-600">PayPal</span>
          </div>
          <div className="flex items-center space-x-2 p-3 border border-gray-200 dark:border-gray-700 rounded-md">
            <RadioGroupItem value="apple" id="apple" />
            <Label htmlFor="apple" className="flex-1 cursor-pointer">
              Apple Pay
            </Label>
            <span className="text-sm font-semibold">Apple Pay</span>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
};
