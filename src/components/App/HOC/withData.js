import React, { Component } from 'react';

const withData = (WrappedComponent, ApiParam, ApiItem) => {
    return class extends Component {
        constructor (props) {
            super();

            this.state = {
                data: []
            };
        }

        componentDidMount () {
            fetch(`http://34.243.3.31:8080/${ApiParam}`, {
                headers: {
                    'X-Group-Token': 'glvWcuOo6Rl7'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    this.setState({ data: data._embedded[ApiItem] });
                });
        }

        render () {
            return (
                <WrappedComponent data={this.state.data}/>
            );
        }
    };
};

export default withData;

