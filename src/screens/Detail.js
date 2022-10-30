import { StyleSheet, View, Text, Image, Button, SafeAreaView, ScrollView } from 'react-native';

export const Detail = ({ goBack, itemTitle, itemText, itemImage }) => {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic">
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.title}>{itemTitle}</Text>
                    <Image
                        style={styles.image}
                        source={{ uri: itemImage, }}
                    />
                    <Text style={styles.text}>{itemText}</Text>
                    <Button title='Назад' onPress={goBack} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    text: {
        fontSize: 14,
        marginTop: 20,
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
});