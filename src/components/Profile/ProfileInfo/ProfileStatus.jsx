import React from 'react';
import s     from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {        
        return (
            <div className='prof'>
                {!this.state.editMode &&
                <span onDoubleClick={this.activateEditMode}>
                            {this.props.status ? this.props.status : 'Enter your status'}
                        </span>
                }
                {this.state.editMode &&
                <input autoFocus={true}
                       onChange={this.onStatusChange}
                       onBlur={this.deactivateEditMode}
                       type="text"
                       value={this.state.status}/>
                }
            </div>
        )
    }

}

export default ProfileStatus;