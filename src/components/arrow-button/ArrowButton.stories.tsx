import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ArrowButton, ArrowButtonProps } from './ArrowButton';

const meta: Meta = {
	title: 'Components/ArrowButton',
	component: ArrowButton,
};

export default meta;

const Template: Story<ArrowButtonProps> = (args) => <ArrowButton {...args} />;

export const Default = Template.bind({});
Default.args = {
	openSideBar: true,
	onClick: () => console.log('This is the story'),
};
