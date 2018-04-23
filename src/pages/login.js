const h = require('react-hyperscript')
const { compose, lifecycle } = require('recompose')
const { partial } = require('ramda')
const { connect: connectStyles } = require('react-fela')
const { connect: connectStore } = require('redux-bundler-react')
const { Form, Field } = require('react-final-form')
const { TextField } = require('redux-form-material-ui')
const validate = require('redux-form-with-ajv').default
const Typography = require('material-ui/Typography').default
const Button = require('material-ui/Button').default

const schema = require('../schemas/createUser')
const styles = require('../styles/login')

module.exports = compose(
  connectStyles(styles),
  partial(connectStore, [
    'selectAuthenticatedUser'
  ]),
)(Login)

function Login (props) {
  const {
    styles,
    selectAuthenticatedUser: user
  } = props

  return (
    h('div', {
      className: styles.container
    }, [
      h('h1', { className: styles.title}, 'Login'),
      h('p', { className: styles.body1}, 'Enter your email below and we will send you an email link to login'),
      h(LoginForm, props)
    ])
  )
}

function LoginForm (props) {
  const {
    styles,
    handleSubmit,
    doSubmitOnboardingStart: doSubmit
  } = props

  return (
    h(Form, {
      onSubmit: doSubmit,
      validate: validate(schema),
      render: ({ handleSubmit }) => (
        h('form', {
          className: styles.form,
          onSubmit: handleSubmit
        }, [
          h('div', {
            className: styles.fields
          }, [
            h(Field, {
              name: 'name',
              component: TextField,
              placeholder: 'Ash',
              label: 'Name',
              helperText: 'What should we call you?',
              fullWidth: true,
              margin: 'normal'
            }),
            h(Field, {
              name: 'email',
              component: TextField,
              placeholder: 'ash@example.com',
              label: 'Email',
              helperText: 'Where should we message you?',
              fullWidth: true,
              margin: 'normal'
            }),
            h(Button, {
              className: styles.submitButton,
              variant: 'raised',
              color: 'primary',
              type: 'submit'
            }, [
              'Start'
            ])
          ])
        ])
      )
    })
  )
}
