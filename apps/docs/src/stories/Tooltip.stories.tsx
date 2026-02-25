import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Button,
} from "@aditya-karedla/core";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Positions: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex flex-col items-center gap-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top (default)</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex gap-8">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tooltip on left</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Tooltip on right</p>
            </TooltipContent>
          </Tooltip>
        </div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Information icon</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const MultiLine: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover for details</Button>
        </TooltipTrigger>
        <TooltipContent className="max-w-[200px]">
          <p className="font-semibold">Pro Tip</p>
          <p className="text-xs mt-1">
            You can use keyboard shortcuts to navigate faster. Press Ctrl+K to
            open the command palette.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const CustomDelay: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-4">
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <Button variant="outline">No delay</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Instant tooltip</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip delayDuration={1000}>
          <TooltipTrigger asChild>
            <Button variant="outline">1s delay</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Delayed tooltip (1 second)</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  ),
};

export const OnText: Story = {
  render: () => (
    <TooltipProvider>
      <div className="max-w-md text-sm">
        <p>
          You can hover over{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-medium underline decoration-dotted cursor-help">
                technical terms
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <p>A technical term that needs explanation</p>
            </TooltipContent>
          </Tooltip>{" "}
          to see more information. This is useful for providing contextual help
          without cluttering the interface.
        </p>
      </div>
    </TooltipProvider>
  ),
};

export const DisabledButton: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-block">
            <Button variant="outline" disabled>
              Disabled Action
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>This action is currently unavailable</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
