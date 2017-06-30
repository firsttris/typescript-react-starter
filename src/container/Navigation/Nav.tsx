import * as React from 'react';
import {connect} from 'react-redux';
import LinkItem from './../../components/LinkItem'

const fixedNavBarStyle = {
    width: '100%',
    borderBottom: '1px solid #61DAFB'
};

interface Props {
    user: {
        name: string,
        chipId: string
    }
}

interface State {
    linkitem: number
}


class Nav extends React.Component<any, State> {
    constructor() {
        super();
        this.state = {
            linkitem: 0
        }
    }

    onClick(index: number, e: Event) {
        this.setState({linkitem: index});
    }

    render() {
        return (
            <div style={fixedNavBarStyle}>
                <ul style={{
                    listStyleType: 'none',
                    margin: '0',
                    padding: '0',
                    overflow: 'hidden',
                    backgroundColor: '#222'
                }}>
                    <div onClick={this.onClick.bind(this, 1)}>
                        <LinkItem focus={this.state.linkitem === 1} path="/" name="App"/>
                    </div>
                    <div onClick={this.onClick.bind(this, 2)}>
                        <LinkItem focus={this.state.linkitem === 2} path="/What" name="What"/>
                    </div>
                    <li style={{
                        display: 'block',
                        color: 'white',
                        textAlign: 'center',
                        padding: '14px 16px',
                        textDecoration: 'none',
                        float: 'right'
                    }}>{this.props.user.name}{' '}{this.props.user.chipId}</li>
                </ul>
            </div>
        );
    }
}



function mapStateToProps(state:any) {
    return {
        'user': state.currentUser
    }
}

export default connect(mapStateToProps)(Nav);