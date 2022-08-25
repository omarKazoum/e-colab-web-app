import Squad from "./Squad"
export default function WorkSpace(){
    return(
        <section className="h-max bg-blue-quarter rounded-lg border-blue-principale border-2 w-4/6 m-auto my-14 justify-around flex flex-wrap ">
            <Squad color={'red'}/>
            <Squad color={'blue'}/>
            <Squad color={'yellow'}/>
            <Squad color={'black'}/>
            <Squad color={'gray'}/>
            <Squad color={'pink'}/>
            <Squad color={'green'}/>
            <Squad color={'red'}/>
            <Squad color={'purple'}/>
            
        </section>
    )
}