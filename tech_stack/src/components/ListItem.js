import React, { useEffect, useRef } from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fadeAnim
            }}
        >
            {props.children}
        </Animated.View>
    );
}

const ListItem = ({ library, selectLibrary, expanded }) => {

    const { id, title, description } = library


    return (
        <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
            <View >
                <CardSection>
                    <Text style={styles.textStyle}>{title}</Text>
                </CardSection>
                {expanded ?

                    <CardSection>
                        <FadeInView>
                            <Text>{description}</Text>
                        </FadeInView>
                    </CardSection>
                    : null
                }
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return { expanded };
};


export default connect(mapStateToProps, actions)(ListItem);