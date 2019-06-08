import React, { Component } from 'react';
import * as CONST from '../constants';

const withData = (WrappedComponent, APIItem = '', APIParam = '', RefreshTime = false) => {
    return class extends Component {
        constructor (props) {
            super(props);

            this.state = {
                data: []
            };

            this.callAPI = this.callAPI.bind(this);
            this.APIParam = this.props.APIParam ? this.props.APIParam : APIParam;
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
            fetch(`${CONST.API_GET_URL}/${this.APIParam}`, {
                headers: CONST.API_TOKEN
            })
                .then(res => res.json())
                .then((data) => {
                    if (data._embedded && APIItem) {
                        this.setState({ data: data._embedded[APIItem] });
                    } else {
                        this.setState({ data: data });
                    }
                });
        }

        render () {
            return (
                <WrappedComponent data={this.state.data} {...this.props}/>
            );
        }
    };
};

export default withData;

