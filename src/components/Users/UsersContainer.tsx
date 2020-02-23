import React, {Component} from 'react'
import {connect} from "react-redux";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";
import {follow, unfollow, setCurrentPage, requestUsers} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader.jsx";
import Users from "./Users";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type PropsType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    isFetching: boolean
    followingInProgress: Array<number>

    requestUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

class UsersContainer extends Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;

        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
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

let mapStateToProps = (state: AppStateType) => {
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
