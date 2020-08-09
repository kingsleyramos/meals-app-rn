import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const CategoryMealsScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meal Screen</Text>
            <Button
                title='Go to Meal Details!'
                onPress={() => {
                    props.navigation.navigate('MealDetail');
                    // props.navigation.push('MealDetail'); // if you want to navigate to the same screen
                }}
            />
            <Button
                title='Go Back'
                onPress={() => {
                    props.navigation.goBack(); // this can be used on other navigators
                    // props.navigation.pop(); // can be only be used on stack navigators
                }}
            />
        </View>
    );
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
Î;
