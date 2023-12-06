export const buttonArgsType = {
  label: {
    description: 'Button Label',
    defaultValue: 'Primary',
    table: {
      type: { summary: 'text' },
      defaultValue: {
        summary: 'Primary'
      },
    },
    control: {
      type: 'text'
    }
  },
  buttontype: {
    description: 'Button Type',
    defaultValue: 'default',
    table: {
      type: {
        summary: 'text'
      },
      defaultValue: {
        summary: 'default'
      },
    },
    control: 'select',
    options: [
      'default',
      'light',
      'dark'
    ]
  }
}