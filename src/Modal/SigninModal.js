import React from 'react'
import styles from './Modal.module.css'

let message = '';

export default class SignInModal extends React.Component {
    state = {
        isOpen: false
    }
    render() {
        return (
            <React.Fragment>
                <button className="btn btn-info" onClick={() => this.setState({ isOpen: true })}>Sign in</button>
                {this.state.isOpen && (<div className={styles.modal}>
                    <div className={styles.modal_body}>
                        <h1 className="mb-20">Sign in</h1>
                        <form class="contact_us_form" method="POST">
                            <input
                                className="form-control"
                                type="text"
                                name="contactName"
                                placeholder="Name"
                                required="true"
                            />
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                required="true"
                            />
                            <button type="submit" className={styles.btn_contact_submit}>
                                send
                <img src="assets/icons/arrow_right_submit.svg" alt="send" />
                            </button>
                        </form>
                        <p className={styles.message}>{message}</p>
                        <button id='modalClose' className="btn btn-primary" onClick={() => this.setState({ isOpen: false })}>Close</button>
                    </div>
                </div>)}
            </React.Fragment>
        )
    }
}