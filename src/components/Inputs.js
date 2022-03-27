import React, { Component } from 'react'

export class Inputs extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="inputs ">
                <div className="personal-information-input">
                    <div>Personal Infomation</div>
                    <input
                        className="first-name-input"
                        type="text"
                        id="firstNameInput"
                        placeholder="first name"
                        onChange={(e) => {
                            this.props.changeFirstName(e)
                        }}
                    />
                    <input
                        className="last-name-input"
                        type="text"
                        id="lastNameInput"
                        placeholder="last name"
                        onChange={(e) => {
                            this.props.changeLastName(e)
                        }}
                    />
                    <input
                        className="title-input"
                        type="text"
                        id="titleInput"
                        placeholder="title"
                        onChange={(e) => {
                            this.props.changeTitle(e)
                        }}
                    />
                    <input
                        className="address-input"
                        type="text"
                        id="addressInput"
                        placeholder="address"
                        onChange={(e) => {
                            this.props.changeAddress(e)
                        }}
                    />
                </div>
            </div>
        )
    }
}
