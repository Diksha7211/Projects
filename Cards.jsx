import React from 'react'
import './Cards.css';
export default function Cards() {
    return (
        <div>
            {/* <div className="card-group">
                <div className="card">
                    <img src="https://images.theconversation.com/files/397801/original/file-20210429-13-235nz0.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card">
                    <img src="https://cdn0.weddingwire.in/articles/images/5/1/9/4/img_84915/t30_arya-samaj-marriage-razz-films-photography-lead.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div className="card">
                    <img src="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2020/05/5f1082SOM07896.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div> */}
            <div className="row">
                <div className="col-md-4">
                    <div className="thumbnail">
                        <a href="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2020/05/5f1082SOM07896.jpg">
                            <img src="https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2020/05/5f1082SOM07896.jpg" alt="Fjords" />
                            {/* <div className="caption">
                                <p>Lorem ipsum...</p>
                            </div> */}
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <a href="https://images.theconversation.com/files/397801/original/file-20210429-13-235nz0.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=800.0&fit=crop">
                            <img src="https://images.theconversation.com/files/397801/original/file-20210429-13-235nz0.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=800.0&fit=crop" alt="Lights" />
                        </a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="thumbnail">
                        <a href="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/12/2021_12$largeimg_757100042.jpg">
                            <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/12/2021_12$largeimg_757100042.jpg" alt="Nature" />
                        </a>
                    </div>
                </div>
            </div>
            <div className=" mainback m-0 " />
            <div className="mainfield ">
                <div className="mainaction ">
                    <div className="screen3_text mx-2">
                        <h1>Don't think more. Just one click and register!!!</h1>
                    </div>
                    <button className="btn1" >Register Now!!</button>
                </div>
            </div>
        </div>
    )
}
