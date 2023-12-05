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
    defaultValue: 'primary',
    table: {
      type: {
        summary: 'text'
      },
      defaultValue: {
        summary: 'primary'
      },
    },
    control: 'select',
    options: [
      'primary',
      'callToAction',
      'outline',
      'text'
    ]
  }
}