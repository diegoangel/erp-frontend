import { connect } from 'react-redux'
import Dashboard from 'modules/dashboard/Dashboard'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        dispatch1: () => {
            dispatch()
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)