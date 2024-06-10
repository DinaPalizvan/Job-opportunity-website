import NoticeCard from "../NoticeCard/NoticeCard";
import "./main.css"
import FilterBox from "../FilterBox/FilterBox";

export default function Main(){
    return <div className="mainContainer">
        <NoticeCard/>
        <FilterBox/>
    </div>
}