import propTypes from 'prop-types'

function Greetings(props) {
  // Tab to edit
  const loggedInGreeting = <h1> Hello {props.username}</h1>
  const notLoggedInGreeting = <h1> Please Log In to Vontinue </h1>
  
  
  props.isLoggedIn ? loggedInGreeting : notLoggedInGreeting
}
// setting the type of props
Greetings.prototypes = {
  isLoggedIn : protoTypes.bool,
  username   : propTypes.string
}

//setting default values for props
Greetings.defaultProps = {
  isLoggedIn = false,
  usernae = "Guest"
}