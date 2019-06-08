import React from 'react';
import Message from './Message';
// import withData from '../HOC/withData.js';
import useAPI from '../Hooks/useAPI';
import PropTypes from 'prop-types';
import './__styles__/Content.scss';

const Content = ({ APIParam }) => {
    const { values } = useAPI('messageList', `${APIParam}/messages`, 1000);
    return (
        <div className="Content">
            { values &&
                <>
                { values.data.map(item => {
                    return (
                        <Message key={item.id}
                            name={item.creator}
                            timestamp={item.timestamp}
                            content={item.content}/>
                    );
                })}
                </>
            }
        </div>
    );
};

Content.propTypes = {
    APIParam: PropTypes.number
};

export default Content;

// export default withData(Content, 'messageList', '1/messages', 1000);
