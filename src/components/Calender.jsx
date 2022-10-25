import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
const Calender = ()=>{
    return(
        <div className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white" 
        style={{border:"" , height:"auto"}}
        >

 <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
<GitHubCalendar  
                blockSize={20}
                fontSize={20}
                style={{margin:'auto',backgroundColor:""}}
                username="rajpawanku" >
    <ReactTooltip delayShow={50} html/>
</GitHubCalendar>

</div>
      </div>
    )
}

export {Calender}