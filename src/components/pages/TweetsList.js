import { useCallback, useEffect, useState } from "react"
import Header from "../layout/Header"
import Tweets from "../../tweets.json";

export default function TweetsList() {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    const { photoURL, displayName } = userInfo.providerData[0];
    // const [tweets, setTweets] = useState([]);
    // useEffect(() => {
    //     fetchTweets();
    // }, [])

    // const fetchTweets = useCallback(() => {
    //     const userInfo = JSON.parse(localStorage.getItem('user'));
    //     const userId = userInfo.providerData[0].uid;
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAAOa4jwEAAAAA6ROotLlLml%2F9eJbFTK8De1vMJgo%3DN3mlj6P1Ta4wSA6zc2uLkxPBjGrNGrR6rwtCrdG7rpfpncYKkw");
    //     myHeaders.append("Cookie", "guest_id=v1%3A166988011507134613; guest_id_ads=v1%3A166988011507134613; guest_id_marketing=v1%3A166988011507134613; personalization_id=\"v1_k4EuYvDTDnniTdw2hW8+Zw==\"");
    //     myHeaders.append("Access-Control-Allow-Origin", "*")
    //     myHeaders.append("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
    //     myHeaders.append("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With")

    //     const requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow',
    //         mode: 'cors'
    //     };
    //     fetch(`https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=${userId}&trim_user=true&exclude_replies=true`, requestOptions)
    //         .then(response => response.json())
    //         .then(result => setTweets(result))
    //         .catch(error => console.log('error', error));
    // }, [])
    return (
        <div className="container-fluid">
            <Header />
            <div className="container">
                <div className="row mt-5">
                    <div className="row">
                        <div className="col-md-4 col-xs-12 mb-4">
                            <div className="card h-100" style={{ boxShadow: '2px 3px 5px 5px #f7f8fe', borderWidth: 0 }}>
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{ fontSize: 13 }}>Tweets with links</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: 16, fontWeight: 'bold' }}>80</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 mb-4">
                            <div className="card h-100" style={{ boxShadow: '2px 3px 5px 5px #f7f8fe', borderWidth: 0 }}>
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{ fontSize: 13 }}>Tweets with links</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: 16, fontWeight: 'bold' }}>John Doe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-xs-12 mb-4">
                            <div className="card h-100" style={{ background: '#F8392C', boxShadow: '2px 3px 5px 5px #f7f8fe', borderWidth: 0 }}>
                                <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                    <div>
                                        <span style={{ fontSize: 13, color: '#fff' }}>Top Domain</span>
                                    </div>
                                    <div>
                                        <span style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>twitter.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div class="form-outline mb-4" >
                                <input type="search" id="form1" style={{ background: '#F7F8FE', borderWidth: 0 }} class="form-control" placeholder="Search tweets" aria-label="Search" />
                            </div>
                        </div>
                    </div>
                    {/*  #E0E9F1{tweets.length === 0 && <div className="row mt-5"><p style={{ fontSize: 12, textAlign:'center' }}>No tweets found.</p></div>} */}
                    <div className="row" >
                        {Tweets.map((tweet) => {
                            return <div className="col-md-4 col-xs-12 mb-4">
                                <div className="card h-100" style={{ boxShadow: '5px 3px 5px 5px #f7f8fe', borderWidth: 0 }} >
                                    <div className="card-body" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', marginBottom:10 }}>
                                            <img src="data:image/jpeg;base64,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" alt="Girl in a jacket" style={{ borderRadius: 50, width: 40, height: 40 }} />
                                            <div style={{ marginLeft: 10, display:'flex', flexDirection:'column' }}>
                                                <span style={{ fontSize: 14, fontWeight: 'bold' }}>John Doe</span>
                                                <span style={{ fontSize: 11, }}>@john-doe</span>
                                            </div>
                                        </div>
                                        <p style={{ fontSize: 12 }}>{tweet.text}</p>
                                        <div>
                                            <div>
                                                <span style={{ fontSize: 12 }}><span style={{ fontWeight: 'bold' }}>Retweet - </span>{tweet.retweet_count}</span>
                                                <span style={{ marginLeft: 10, fontSize: 12 }}><span style={{ fontWeight: 'bold' }}>Likes -</span> {tweet.favorite_count}</span>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: 12 }}>{tweet.created_at.substring(0, 10)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}