import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Settings = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('data').then((data) => {
            if (!data) {
                return false;
            }

            setData(JSON.parse(data));
        })
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.text}>Автор: {data.appAuthor}</Text>
                <Text style={styles.text}>Версия: {data.appVersion}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    text: {
        fontSize: 14,
        marginBottom: 20,
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
});