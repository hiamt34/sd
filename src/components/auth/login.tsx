export const Login = () => {
    return (
        <form
            name="contactForm"
            id="contact_form"
            className="form-border"
        >
            <div className="field-set">
                <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="username"
                />
            </div>
            <div className="field-set">
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="password"
                />
            </div>
            <div className="field-set">
                <input
                    type="submit"
                    id="send_message"
                    defaultValue="Submit"
                    className="btn btn-main btn-fullwidth color-2"
                />
            </div>
            <div className="clearfix" />
            <div className="spacer-single" />
            {/* social icons */}
            {/* <ul className="list s3">
                                                <li>Login with:</li>
                                                <li>
                                                    <a href="#">Facebook</a>
                                                </li>
                                                <li>
                                                    <a href="#">Google</a>
                                                </li>
                                            </ul> */}
            {/* social icons close */}
        </form>
    )
}
