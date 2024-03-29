import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from '@@/elements'

import './Button.css'

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
	children: 'Click',
}
