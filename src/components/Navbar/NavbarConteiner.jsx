import Navbar from './Navbar';

import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friendsList: state.navBarPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const NavbarConteiner = connect(mapStateToProps, mapDispatchToProps)(Navbar);


export default NavbarConteiner; 