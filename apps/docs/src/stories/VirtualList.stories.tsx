import type { Meta, StoryObj } from '@storybook/react'
import { VirtualList } from './VirtualList'

const meta: Meta<typeof VirtualList> = {
  title: 'Components/VirtualList',
  component: VirtualList,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof VirtualList>

const items = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  text: `Item ${i}`,
}))

export const Default: Story = {
  args: {
    items,
    itemHeight: 50,
    height: 400,
    renderItem: item => (
      <div
        style={{
          padding: '0 16px',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid #eee',
          backgroundColor: '#fff',
        }}
      >
        test
      </div>
    ),
  },
}

export const WithOverscan: Story = {
  args: {
    ...Default.args,
    overscan: 10,
  },
}
