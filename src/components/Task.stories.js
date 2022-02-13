import React from "react";
import Task from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

const longTitleString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a malesuada orci. Vivamus tristique porta enim, vel fringilla nibh aliquet ut. Nam lobortis augue nec vehicula aliquam. Vivamus tempus vitae erat et hendrerit. In nec massa sed turpis pulvinar congue. Morbi condimentum, nibh nec blandit posuere, tortor massa mollis massa, ut tincidunt nisi tellus vitae lectus. Aliquam at posuere orci. Nulla facilisi. Vivamus vel fringilla est, ut faucibus tellus. Proin sed condimentum lorem, in scelerisque massa. Quisque varius congue purus, sagittis imperdiet magna pellentesque ut. Morbi cursus pellentesque diam, at ultrices nisl varius vitae. Mauris pulvinar et dui non fermentum.`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};
