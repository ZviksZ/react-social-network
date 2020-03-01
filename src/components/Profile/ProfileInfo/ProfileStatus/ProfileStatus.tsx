import React, {ChangeEvent, Props} from 'react';
import s     from '../ProfileInfo.module.css';

type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
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

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
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
