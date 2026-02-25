import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@aditya-karedla/core";

const meta: Meta = {
  title: "Components/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and is built with Radix
          UI primitives for maximum accessibility.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that you can customize with Tailwind
          CSS or your own custom CSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It uses CSS animations for smooth expand and collapse transitions
          powered by Tailwind CSS.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple" className="w-[450px]">
      <AccordionItem value="item-1">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2 text-sm">
            <p>Follow these steps to get started:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Install the package</li>
              <li>Import the components</li>
              <li>Use them in your app</li>
            </ol>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Installation</AccordionTrigger>
        <AccordionContent>
          <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
            npm install @aditya-karedla/core
          </code>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>API Reference</AccordionTrigger>
        <AccordionContent>
          Check the documentation for detailed API reference and examples.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const FAQ: Story = {
  render: () => (
    <div className="w-[700px] space-y-4">
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="shipping">
          <AccordionTrigger>What are the shipping options?</AccordionTrigger>
          <AccordionContent>
            We offer free standard shipping on orders over $50. Express shipping
            is available for an additional fee. International shipping is
            available to select countries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            We accept returns within 30 days of purchase. Items must be unused
            and in their original packaging. Refunds will be processed within
            5-7 business days after we receive your return.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="warranty">
          <AccordionTrigger>Do you offer warranties?</AccordionTrigger>
          <AccordionContent>
            Yes, all products come with a 1-year manufacturer warranty. Extended
            warranties are available for purchase at checkout.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="payment">
          <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
          <AccordionContent>
            We accept all major credit cards (Visa, Mastercard, American
            Express), PayPal, Apple Pay, and Google Pay.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="tracking">
          <AccordionTrigger>How can I track my order?</AccordionTrigger>
          <AccordionContent>
            Once your order ships, you'll receive a tracking number via email.
            You can also track your order by logging into your account and
            viewing your order history.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-2"
      className="w-[450px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          This is the content for section 1. You can put any content here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2 (Open by default)</AccordionTrigger>
        <AccordionContent>
          This section is open by default using the defaultValue prop.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          This is the content for section 3. Collapsed by default.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
