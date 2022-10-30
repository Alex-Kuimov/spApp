import { StyleSheet, SafeAreaView, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerList } from "./src/components/drawerList";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        AsyncStorage.getItem('data').then((data) => {
            if (!data) {
                return false;
            }
            setData(JSON.parse(data));
        })
    }, [])

    useEffect(() => {
        if (data !== '') {
            getData();
        }
    }, [data])

    const saveData = async (data) => {
        try {
            await AsyncStorage.setItem('data', JSON.stringify(data))
        } catch (e) {
            console.log('Failed to save the data to the storage')
        }
    }

    const getData = () => {
        setIsLoading(true);

        const URL = 'https://gsfu.ru/api/';
        const requestOptions = {
            method: 'GET',
        }

        fetch(URL, requestOptions).then((res) => {
            return res.json()
        }).then((res) => {
            if (res !== '' && res !== 'error') {
                saveData(res).then(() => {
                    setIsLoading(false);
                })
            } else {
                console.log('GOR ERROR OR EMPTY RESULT')
            }
        }).catch(function (error) {
            console.log('GOT ERROR: ', error)
        })
    }

    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Загрузка данных c сервера...</Text>
            </SafeAreaView>
        )
    }

    return (
        <NavigationContainer>
            <DrawerList data={data} />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
