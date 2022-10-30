import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { List } from "../screens/List";
import { Settings } from "../screens/Settings";

const Drawer = createDrawerNavigator();

export const Menu = ({ data }) => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={data.pages.main.title} component={List} />
            <Drawer.Screen name={data.pages.settings.title} component={Settings} />
        </Drawer.Navigator>
    )
}
