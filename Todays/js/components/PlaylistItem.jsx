import React from 'react';

class PlayListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let item = this.props.items.map((current) => {
            return (
                <div className="card">
                <img alt="playlist img" class="card-img"/>
                <div className="card-body">
                <p>{this.props.playlistName}</p>
                </div>
                </div>
            )
        });
    }
}