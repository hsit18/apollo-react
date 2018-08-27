import React from 'react';

import Header from './components/Header';

import PostScreen from './screens/PostScreen';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <main role="main" className="container">
                    <PostScreen />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
