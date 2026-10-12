import { useEffect, useState } from 'react';
import {
    Animated,
    Easing,
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Image } from 'expo-image';

import { colors, fonts, spacing } from '@/theme';

const technologies = [
    {
        name: 'TypeScript',
        logo: require('../../../assets/images/technologies/typescript.svg'),
    },
    {
        name: 'JavaScript',
        logo: require('../../../assets/images/technologies/javascript.svg'),
    },
    {
        name: 'NestJS',
        logo: require('../../../assets/images/technologies/nest.svg'),
    },
    {
        name: 'React',
        logo: require('../../../assets/images/technologies/react.svg'),
    },
    {
        name: 'React Native',
        logo: require('../../../assets/images/technologies/react-native.svg'),
    },
    {
        name: 'Vue',
        logo: require('../../../assets/images/technologies/vue.svg'),
    },
    {
        name: 'Java',
        logo: require('../../../assets/images/technologies/java.svg'),
    },
    {
        name: 'Spring Boot',
        logo: require('../../../assets/images/technologies/springboot.svg'),
    },
    {
        name: 'Kubernetes',
        logo: require('../../../assets/images/technologies/kubernetes.svg'),
    },
    {
        name: 'Jenkins',
        logo: require('../../../assets/images/technologies/jenkins.svg'),
    },
    {
        name: 'Docker',
        logo: require('../../../assets/images/technologies/docker.svg'),
    },
    {
        name: 'PostgreSQL',
        logo: require('../../../assets/images/technologies/postgresql.svg'),
    },
    {
        name: 'AWS',
        logo: require('../../../assets/images/technologies/aws.svg'),
    },
    {
        name: 'Google Cloud',
        logo: require('../../../assets/images/technologies/gcp.svg'),
    },
    {
        name: 'GitHub',
        logo: require('../../../assets/images/technologies/github.svg'),
    },
    {
        name: 'Git',
        logo: require('../../../assets/images/technologies/git.svg'),
    },
];

export function TechnologyStrip() {
    const [translateX] = useState(() => new Animated.Value(0));

    const [groupWidth, setGroupWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const copies = groupWidth > 0
        ? Math.max(2, Math.ceil(containerWidth / groupWidth) + 1)
        : 2;

    useEffect(() => {
        if (groupWidth === 0) {
            return;
        }

        const pixelsPerSecond = 40;

        translateX.setValue(0);

        const animation = Animated.loop(
            Animated.timing(translateX, {
                toValue: -groupWidth,
                duration: (groupWidth / pixelsPerSecond) * 1000,
                easing: Easing.linear,
                useNativeDriver: Platform.OS !== 'web',
                isInteraction: false,
            }),
        );

        animation.start();

        return () => {
            animation.stop();
        };
    }, [groupWidth, translateX]);

    return (
        <View
            style={styles.strip}
            onLayout={(event) => {
                setContainerWidth(event.nativeEvent.layout.width);
            }}
        >
            <Animated.View
                style={[
                    styles.track,
                    {
                        transform: [{ translateX }],
                    },
                ]}
            >
                {Array.from({ length: copies }, (_, copyIndex) => (
                    <View
                        key={copyIndex}
                        style={styles.group}
                        accessibilityElementsHidden={copyIndex > 0}
                        importantForAccessibility={
                            copyIndex > 0
                                ? 'no-hide-descendants'
                                : 'auto'
                        }
                        aria-hidden={copyIndex > 0}
                        onLayout={
                            copyIndex === 0
                                ? (event) => {
                                    setGroupWidth(
                                        event.nativeEvent.layout.width,
                                    );
                                }
                                : undefined
                        }
                    >
                        {technologies.map((technology) => (
                            <View
                                key={technology.name}
                                style={styles.tag}
                            >
                                <Image
                                    source={technology.logo}
                                    contentFit="contain"
                                    style={styles.logo}
                                />

                                <Text style={styles.label}>
                                    {technology.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                ))}
            </Animated.View>
        </View>
    );
}
const styles = StyleSheet.create({
    strip: {
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#101114',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'rgba(68, 71, 73, 0.3)',
        paddingVertical: spacing.lg,
    },

    track: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
    },

    group: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 0,
        gap: spacing.xl,
        paddingRight: spacing.xl,
    },

    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        flexShrink: 0,
        gap: spacing.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: 'rgba(68, 71, 73, 0.3)',
        borderRadius: 4,
    },

    logo: {
        width: 24,
        height: 24,
    },

    label: {
        color: colors.onPrimary,
        fontFamily: fonts.code,
        fontSize: 13,
        lineHeight: 18,
    },
});