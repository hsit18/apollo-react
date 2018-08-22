import React from 'react';

import { Query } from 'react-apollo';

import HELLO from './queries';

class App extends React.Component {
    render() {
        return (
            <Query
                query={HELLO}
            >
                {({loading, error, data}) => {
                    if (loading) return <p>Loading...</p>;
                    if (error) return <p>Error : {error}</p>;

                    return (
                        <div>HELLO APP.js {data.hi}</div>
                    );
                }}

            </Query>
        );
    }
}

export default App;
