import * as React from 'react';
const {Link} = require('react-router-dom');

interface Props {
    focus:boolean,
    path:string,
    name:string
}

interface State {
    hover:boolean
}

class LinkItem extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    onMouseLeave():void {
        this.setState({hover: false});
    }

    onMouseEnter():void {
        this.setState({hover: true});
    }

    getLinkStyle():any {
        const linkStyle = {
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none'
        };
        if (this.state.hover || this.props.focus) {
            return {...linkStyle, ...{backgroundColor: 'white', color: '#222'}};
        }
        return linkStyle;
    }

    render() {
        return (
            <li style={{float: 'left'}} onMouseLeave={this.onMouseLeave.bind(this)}
                onMouseEnter={this.onMouseEnter.bind(this)}><Link style={this.getLinkStyle()}
                                                                  to={this.props.path}>{this.props.name}</Link></li>
        );
    }
}

export default LinkItem;