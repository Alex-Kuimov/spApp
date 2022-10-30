import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ItemList } from "../screens/itemList";
import { Settings } from "../screens/Settings";

const Drawer = createDrawerNavigator();

export const DrawerList = ({ data }) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={data.pages.main.title} component={ItemList} />
            <Drawer.Screen name={data.pages.settings.title} component={Settings} />
        </Drawer.Navigator>
    )
}
