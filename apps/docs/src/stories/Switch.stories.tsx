import type { Meta, StoryObj } from "@storybook/react";
import { Switch, Label } from "@aditya-karedla/core";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch />,
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => <Switch defaultChecked />,
};

export const Disabled: Story = {
  render: () => <Switch disabled />,
};

export const DisabledChecked: Story = {
  render: () => <Switch disabled checked />,
};

export const SettingsExample: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="notifications">Push Notifications</Label>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Receive push notifications about your activity
          </p>
        </div>
        <Switch id="notifications" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="marketing">Marketing Emails</Label>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Receive emails about new features and updates
          </p>
        </div>
        <Switch id="marketing" />
      </div>
    </div>
  ),
};
