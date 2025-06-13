import { RootState } from "@/lib/store";
import React from "react";
import { useSelector } from "react-redux";
import { IconButton } from "../utils";

const MainMenu: React.FC = () => {

    const sections =   useSelector((state: RootState) => state.navigation.sections);
    

    return <div>
        {/* Top Menu Title */}
        <div className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center space-x-2">
                <IconButton icon="menu"/>
                <span className="font-medium">Menu</span>
            </div>
        </div>

        {/* Main Menu Items */}
        <nav className="space-y-4">
            {sections.map((section, index) => (
                <div key={index}>
                    {section.title && (
                        <div className="text-xs font-semibold uppercase text-gray-500 mb-2">
                            {section.title}
                        </div>
                    )}
                    <div className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                            <a
                                key={itemIndex}
                                href={item.path}
                                className="flex items-center space-x-2 hover:text-black"
                            >
                                <IconButton icon={item.icon} />
                                <span>{item.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            ))}
        </nav>


    </div>
}

export default MainMenu;