import { Meta, Story } from '@storybook/react'
import Button from '..'
import { ButtonProps } from '../Button'

export default {
    title: 'Button',
    component: Button,
} as Meta

const Template: Story<ButtonProps> = (args: ButtonProps) => {
    return (
        <div>
            <Button {...args} />
        </div>
    )
}

export const Default = Template.bind({})

Default.args = {
    color: 'red',
    text: 'Button',
}
