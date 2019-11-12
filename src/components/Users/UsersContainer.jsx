import React, {Component}                                                                 from 'react'
import {connect}                                                                          from "react-redux";
import {userAPI}                                                                          from "../../api/api.js";
import {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from "../../redux/users-reducer.js";
import Preloader                                                                          from "../common/Preloader/Preloader.jsx";
import Users                                                                              from "./Users.jsx";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        
        const {currentPage, pageSize} = this.props;

        userAPI.getUsers(currentPage, pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        
        const {pageSize} = this.props;

        userAPI.getUsers(pageNumber, pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items)
            })
    }
    
    

    render() {
        return <> 

            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow, 
    unFollow, 
    setUsers, 
    setTotalUsersCount, 
    setCurrentPage, 
    toggleIsFetching
})(UsersContainer)