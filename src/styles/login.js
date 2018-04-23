module.exports = {
  container: ({ theme }) => ({
    padding: theme.space[3]
  }),
  form: () => ({}),
  fields: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }),
  submitButton: ({ theme }) => ({
  }),
  completion: ({ theme }) => ({
    padding: theme.space[3],
    textAlign: 'center'
  }),
  title: ({theme: {typography}}) => ({
    ...typography.title
  }),
  body1: ({theme: {typography}}) => ({
    ...typography.body1
  })
}
