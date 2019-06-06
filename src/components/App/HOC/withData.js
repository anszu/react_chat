import React, { Component } from 'react';

const withData = (WrappedComponent, ApiItem = '', ApiParam = '', RefreshTime = false) => {
    return class extends Component {
        constructor (props) {
            super();

            this.state = {
                data: []
            };

            this.callAPI = this.callAPI.bind(this);
        }

        componentDidMount () {
            if (RefreshTime) {
                this.interval = setInterval(this.callAPI, RefreshTime);
            } else {
                this.callAPI();
            }
        }

        componentWillUnMount () {
            if (this.interval) {
                clearInterval(this.interval);
            }
        }

        callAPI () {
            fetch(`http://34.243.3.31:8080/channels/${ApiParam}`, {
                headers: {
                    'X-Group-Token': 'glvWcuOo6Rl7'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    if (data._embedded && ApiItem) {
                        this.setState({ data: data._embedded[ApiItem] });
                    } else {
                        this.setState({ data: data });
                    }
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

