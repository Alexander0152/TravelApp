import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const container = {
    height: '600px'
}
const black_text = {
    color: 'black',
    fontWeight: 'bold'
}
function Feedbacks() {

    const [feedbacksList, setFeedbacks] = React.useState([
        { id: 1, Name: 'Some name', Email: "Some email", text: "some text" },
        { id: 1, Name: 'Some name', Email: "Some email", text: "some text" },
    ]);

    useEffect(() => {
        fetch('/api/feedback', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    setFeedbacks(result);
                }
            );
    }, [])

    return (
        <section className="country_card" style={container}>
            <div className="wrapper">
                <main className="country-page__container">
                    <h2 style={black_text}>Feedbacks and suggestions</h2>
                    <table className="table">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Feedback</th>
                        </tr>
                        {feedbacksList.map((item) => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.text}</td>
                            </tr>
                        })}
                    </table>
                </main>
            </div>
        </section>
    )
}

export default Feedbacks;