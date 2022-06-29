import Card from "./Card";

export default function Main({data, start}) {
    
    return(
        <>  
            <div className="row">
                {data.map((d, index) => {
                    return <Card 
                        start={start + index + 1}
                        key={d.objectID} 
                        id={d.objectID} 
                        title = {d.title}
                        author={d.author} 
                        url={d.url} 
                    />
                })}
            </div>
            
        </>
    );
}
