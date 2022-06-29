export default function Card({id, title, author, url, start}) {
    return(
        <div className="col-md-4 mb-3">
            <div className="card text-dark" >
                <div className="card-header">
                    ID : {id}
                    <span 
                        style=
                        {{float: 'right', background: 'blue', color: 'white', padding: '8px', borderRadius: '5px', fontWeight: 'bold'}}
                    >
                        {start++}
                    </span>
                </div>
                <div className="card-body text-center">
                    <p className="card-title font-weight-bold">{title.toUpperCase().slice(0,30)}...</p>
                    <p className="card-text">Posted by {author}</p>
                    <a href={url} target="blank" alt="link" className="btn btn-primary ">Visit link</a>
                </div>
            </div>
        </div>
    );
}
