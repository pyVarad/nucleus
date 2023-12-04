export const badgeArgtypes = {
  matBadge: {
    description: 'The content for the badge',
    defaultValue: 'Button',
    table: {
      type: { summary: 'text' },
      defaultValue: { summary: 'Button' },
    },
    control: {
      type: 'text'
    }
  },
  nucleusButtonType: {
    description: 'Type of Button',
    defaultValue: 'primary',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: 'select',
    options: [
      'primary'
    ]
  }
}