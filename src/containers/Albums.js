import { connect } from 'react-redux'

import { AlbumsScreen } from '../screens/AlbumsScreen'

const mapStateToProps = ({ albums }) => {
  return {
    albums
  }
}

export default connect(mapStateToProps)(AlbumsScreen)
