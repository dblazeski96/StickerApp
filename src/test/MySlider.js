import { connect } from 'react-redux'

import { MySliderComponent } from './MySliderComponent'

const mapStateToProps = ({ albums }) => {
  return {
    albums
  }
}

export default connect(mapStateToProps)(MySliderComponent)
