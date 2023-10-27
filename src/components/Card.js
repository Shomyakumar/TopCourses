import {toast} from 'react-toastify'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
export default function Card(props){
    let carddata=props.data;
    let text=carddata.description;
    text=text.substr(0,200);
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(carddata.id))
        {
            let newarr=[];
            likedCourses.forEach((data)=>{
                if(data!==carddata.id)
                    newarr.push(data);
            })
            setLikedCourses(newarr);
            toast.warning("like removed");
        }
        else{
            if(likedCourses.length===0)
            {
                setLikedCourses([carddata.id]);
            }
            else
            {
                setLikedCourses([...likedCourses,carddata.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    return(
        <div className="bg-green-200 p-4 rounded-md max-w-[340px]">
            <div className="relative">
                <img className="rounded-md " src={carddata.image.url} alt={carddata.image.alt}></img>
                <button className="absolute bottom-[-8px] right-1 p-1 bg-white rounded-full" onClick={clickHandler}>
                {likedCourses.includes(carddata.id)?<FcLike fontSize="1.5rem"/>:<FcLikePlaceholder fontSize={"1.5rem"}/>  }</button>
            </div>
            <div>
                <p className="text-xl my-2 text-red-600 font-semibold">{carddata.title}</p>
                <p className="text-slate-600">{text}...</p>
            </div>
        </div>
    )
}