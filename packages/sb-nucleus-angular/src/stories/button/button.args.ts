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
      'secondary'
    ]
  },
  disabled: {
    description: 'disabled',
    defaultValue: false,
    table: {
      type: {
        summary: 'boolean'
      },
      defaultValue: {
        summary: false
      },
    },
    control: 'radio',
    options: [
      true,
      false
    ]
  },
  rounded: {
    description: 'Rounded',
    defaultValue: false,
    table: {
      type: {
        summary: 'boolean'
      },
      defaultValue: {
        summary: 'rounded'
      },
    },
    control: 'radio',
    options: [
      true,
      false
    ]
  },
}