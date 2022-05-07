import { Icon } from "@mui/material"
import React from "react"
import './tabs.sass'

interface ITabContent {
    btnIcon: string,
    content: {
        img?: any
        title: string,
        text: string
    }
}

interface ITabsProps {
    tabContent: ITabContent[]
}

export function Tabs(props: ITabsProps) {

    const [activeTab, setActiveTab] = React.useState(0)

    return (
        <div className="tab-wrapper">
            <div className="tab-inner">
                <div className="btn-wrapper">
                    {props.tabContent.map((tab: any, index: number) =>
                        <div className={`btn btn-${index + 1}  ${activeTab === index ? 'active' : 'disabled'}`}
                            onClick={() => setActiveTab(index)}
                        >
                            <Icon className="icon">{tab.btnIcon}</Icon>
                        </div>
                    )}
                </div>
                <div className="images">
                    {props.tabContent.map((tab: any, index: number) =>
                        <div className={`img-wrapper img-wrapper-${index + 1}  ${activeTab === index ? 'active' : 'disabled'}`}>
                            <img className="img" src={tab.content.img}></img>
                        </div>
                    )}
                </div>
            </div>
            {props.tabContent.map((tab: any, index: number) =>
                <div className={`text-wrapper text-wrapper-${index + 1}  ${activeTab === index ? 'active' : 'disabled'}`}>
                    <h2 className="title">
                        {`${index + 1}. ` + tab.content.title}
                    </h2>
                    <p className="text">
                        {tab.content.text}
                    </p>
                </div>
            )}
        </div>
    )
}