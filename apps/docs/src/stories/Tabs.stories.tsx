import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "@aditya-karedla/core";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                defaultValue="John Doe"
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                defaultValue="@johndoe"
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current" className="text-sm font-medium">
                Current password
              </label>
              <input
                id="current"
                type="password"
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="new" className="text-sm font-medium">
                New password
              </label>
              <input
                id="new"
                type="password"
                className="w-full rounded-md border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Simple: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          View a summary of your account overview.
        </p>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Detailed analytics and metrics for your account.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Generate and view reports.
        </p>
      </TabsContent>
      <TabsContent value="notifications" className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Manage your notification preferences.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <Tabs defaultValue="all" className="w-full max-w-2xl">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="all" className="mt-4">
        <div className="rounded-md border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-sm">Showing all items (45 total)</p>
        </div>
      </TabsContent>
      <TabsContent value="active" className="mt-4">
        <div className="rounded-md border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-sm">Showing active items (12 total)</p>
        </div>
      </TabsContent>
      <TabsContent value="completed" className="mt-4">
        <div className="rounded-md border border-gray-200 dark:border-gray-700 p-4">
          <p className="text-sm">Showing completed items (33 total)</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
