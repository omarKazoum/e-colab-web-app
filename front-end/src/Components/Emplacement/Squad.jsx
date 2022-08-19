import Chair from "./Chair.jsx"
export default function Squad(props){
    
    return (
        <section className="bg-white w-1/4 h-max m-8 rounded-xl p-3">
            <div className=" flex justify-center border-b-4 border-black">
                <Chair color={props.color}/>
                <Chair color={props.color}/>
                <Chair color={props.color}/>
            </div>
            <div className=" flex  justify-center ">
                <Chair color={props.color}/>
                <Chair color={props.color}/>
                <Chair color={props.color}/>
            </div>
        </section>
    )
}