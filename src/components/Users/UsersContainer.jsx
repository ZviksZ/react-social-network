import React, {Component}                               from 'react'
import {connect}                                        from "react-redux";
import {compose}                                        from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
}                                                       from "../../redux/selectors/users-selectors.js";
import {follow, unfollow, setCurrentPage, requestUsers} from "../../redux/users-reducer.js";
import Preloader                                        from "../common/Preloader/Preloader.jsx";
import Users                                            from "./Users.jsx";

class UsersContainer extends Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;

        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, requestUsers})
)(UsersContainer);