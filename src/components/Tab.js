import React,{useState} from "react"
const tabs = [
    {title:"Tab 1",content:"This is the content for Tab 1."},
    {title:"Tab 2",content:"This is the content for Tab 2."},
    {title:"Tab 3",content:"This is the content for Tab 3."},
]

const Tab = () =>{
    
    const [activeTab,setActiveTab] = useState(0);

    const handleClick = (index) =>{
        setActiveTab(index);
    }

    return(
        <div>
            <ul>
                {tabs.map((tab,index) => (
                    <li onClick ={() => handleClick(index)}>{tab.title}</li>
                ))}
            </ul>

            <div>{tabs[activeTab].content} </div>
        </div>
    )
}

export default Tab;