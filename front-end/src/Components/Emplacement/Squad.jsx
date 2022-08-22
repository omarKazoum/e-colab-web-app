import Chair from "./Chair.jsx"
export default function Squad({positions,squadName}){

    console.log('positions count',positions.length);
    let part1=positions.slice(0,positions.length/2);
    let part2=positions.splice(positions.length/2+1)
    return (
        <section className="bg-white w-1/4 h-max m-8 rounded-xl p-3">
            <div className=" flex justify-center border-b-4 border-black">
                {part1.map(p=>{
                   return  <Chair key={squadName+p.id} status={p.status}/>
                })}
            </div>
            
            <div className=" flex  justify-center ">
                {part1.map(p=>{
                    return <Chair key={squadName+p.id} status={p.status}/>
                })}
            </div>
        </section>
    )
}