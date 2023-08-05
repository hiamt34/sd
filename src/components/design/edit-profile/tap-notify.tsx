const TapNotify = () => {
    return (
        <div className="tab-2">
            <div className="row wow fadeIn">
                <div className="col-md-6 mb-sm-20">
                    <div className="switch-with-title s2">
                        <h5>Item Sold</h5>
                        <div className="de-switch">
                            <input
                                type="checkbox"
                                id="notif-item-sold"
                                className="checkbox"
                            />
                            <label htmlFor="notif-item-sold" />
                        </div>
                        <div className="clearfix" />
                        <p className="p-info">
                            When someone purhased your item.
                        </p>
                    </div>
                    <div className="spacer-20" />
                    <div className="switch-with-title s2">
                        <h5>Bid Activity</h5>
                        <div className="de-switch">
                            <input
                                type="checkbox"
                                id="notif-bid-activity"
                                className="checkbox"
                            />
                            <label htmlFor="notif-bid-activity" />
                        </div>
                        <div className="clearfix" />
                        <p className="p-info">
                            When someone purhased your item.
                        </p>
                    </div>
                    <div className="spacer-20" />
                    <div className="switch-with-title s2">
                        <h5>Price Change</h5>
                        <div className="de-switch">
                            <input
                                type="checkbox"
                                id="notif-price-change"
                                className="checkbox"
                            />
                            <label htmlFor="notif-price-change" />
                        </div>
                        <div className="clearfix" />
                        <p className="p-info">
                            When an item you made an offer on changes in price.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="switch-with-title s2">
                        <h5>Auction Expiration</h5>
                        <div className="de-switch">
                            <input
                                type="checkbox"
                                id="notif-auction-expiration"
                                className="checkbox"
                            />
                            <label htmlFor="notif-auction-expiration" />
                        </div>
                        <div className="clearfix" />
                        <p className="p-info">
                            When an auction you created ends.
                        </p>
                    </div>
                    <div className="spacer-20" />
                    <div className="switch-with-title s2">
                        <h5>Outbid</h5>
                        <div className="de-switch">
                            <input
                                type="checkbox"
                                id="notif-outbid"
                                className="checkbox"
                            />
                            <label htmlFor="notif-outbid" />
                        </div>
                        <div className="clearfix" />
                        <p className="p-info">
                            When an offer you placed is exceeded by another user.
                        </p>
                    </div>
                    <div className="spacer-20" />
                    <div className="switch-with-title s2">
                        <h5>Successful Purchase</h5>
                        <div className="de-switch">
                            <input
                                type="checkbox"
                                id="notif-successful-purchase"
                                className="checkbox"
                            />
                            <label htmlFor="notif-successful-purchase" />
                        </div>
                        <div className="clearfix" />
                        <p className="p-info">
                            When you successfully buy an item.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TapNotify