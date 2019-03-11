import React from 'react';
import RoomList from './roomList'
import loadRooms from '../api/room'
class Body extends React.Component {

    state = {
        rooms: []
    }
    onClick = (id) => {
        this.props.onClick(id);
    }
    async componentDidMount(){
        const response = await loadRooms();
        this.setState({ rooms: response.data.body });
    }
    render() {
        return (
            <div className="container-fluid hideSidebar" style={{ height: '100%' }}>
                <div className="row" style={{ height: '100%' }}>
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <div className="col">
                                <ul className="nav flex-column">
                                    <RoomList
                                        onClick={this.onClick}
                                        rooms={ this.state.rooms }
                                    />
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <div className="justify-content-between" style={{ height: '100%' }}>
                            {this.props.children}
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Body;