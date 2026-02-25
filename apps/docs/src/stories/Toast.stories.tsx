import type { Meta, StoryObj } from "@storybook/react";
import { Toaster, toast, Button } from "@aditya-karedla/core";

const meta = {
  title: "Components/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() => {
          toast("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
          });
        }}
      >
        Show Toast
      </Button>
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() => {
          toast.success("Success!", {
            description: "Your changes have been saved successfully.",
          });
        }}
      >
        Show Success Toast
      </Button>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="destructive"
        onClick={() => {
          toast.error("Error!", {
            description: "Something went wrong. Please try again.",
          });
        }}
      >
        Show Error Toast
      </Button>
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="outline"
        onClick={() => {
          toast.warning("Warning!", {
            description: "Please review your changes before proceeding.",
          });
        }}
      >
        Show Warning Toast
      </Button>
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        variant="secondary"
        onClick={() => {
          toast.info("Info", {
            description: "New updates are available.",
          });
        }}
      >
        Show Info Toast
      </Button>
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() => {
          toast("File deleted", {
            description: "Your file has been moved to trash.",
            action: {
              label: "Undo",
              onClick: () => toast.success("Undo successful!"),
            },
          });
        }}
      >
        Show Toast with Action
      </Button>
    </div>
  ),
};

export const Promise: Story = {
  render: () => (
    <div>
      <Toaster />
      <Button
        onClick={() => {
          const promise = () =>
            new globalThis.Promise((resolve: (value: any) => void) => 
              setTimeout(() => resolve({ name: "User" }), 2000)
            );

          toast.promise(promise, {
            loading: "Loading...",
            success: (data: any) => {
              return `${data.name} has been added successfully`;
            },
            error: "Error",
          });
        }}
      >
        Show Promise Toast
      </Button>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="space-x-2">
      <Toaster />
      <Button
        onClick={() => {
          toast("First notification");
          setTimeout(() => toast.success("Second notification"), 500);
          setTimeout(() => toast.error("Third notification"), 1000);
        }}
      >
        Show Multiple Toasts
      </Button>
    </div>
  ),
};
