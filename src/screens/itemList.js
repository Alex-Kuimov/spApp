import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemDetail } from "./itemDetail";

export const ItemList = () => {
    const [data, setData] = useState([]);
    const [itemId, setItemId] = useState(null);
    const [itemTitle, setItemTitle] = useState(null);
    const [itemText, setItemText] = useState(null);
    const [itemImage, setItemImage] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('data').then((data) => {
            if (!data) {
                return false;
            }

            setData(JSON.parse(data));
        })
    }, [])

    const onOpen = (item) => {
        setItemId(item.id);
        setItemTitle(item.title);
        setItemText(item.text);
        setItemImage(item.image);
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => onOpen(item)}>
            <View style={styles.item}>
                <Text>{item.title}</Text>
            </View>
        </TouchableOpacity>
    )

    const List = () => {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={data.items}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        )
    }

    if (itemId) {
        return (
            <ItemDetail
                goBack={() => setItemId(null)}
                itemId={itemId}
                itemTitle={itemTitle}
                itemText={itemText}
                itemImage={itemImage}
            />
        )
    } else {
        return (
            <List />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#fff'
    }
});