import styles from './css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'

class PostCss extends React.Component {
    render() {
        return (
            <div className={styles.app}>
                <p>Hello PostCSS</p>
            </div>
        )
    }
}

ReactDOM.render(
    <PostCss name="React"/>,
    document.body.appendChild(document.createElement('div')),
);