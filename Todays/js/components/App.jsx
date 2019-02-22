import React from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
        var location = window.location.href;
        if (location.endsWith(".jsx")) {
            window.location.href = null;
        }
        // if (location.includes("#/")) {
        //     let splitter = location.split("#/")[1];
        //     if (splitter.startsWith("playlist")) {
        //         this.context.router.transitionTo("view/#/playlist");
        //     }
        // }
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}

export default App;