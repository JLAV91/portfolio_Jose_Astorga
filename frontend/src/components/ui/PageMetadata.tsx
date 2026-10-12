import Head from 'expo-router/head';

type PageMetadataProps = {
    title: string;
    description: string;
};

export function PageMetadata({
    title,
    description,
}: PageMetadataProps) {
    return (
        <Head>
            <title>{title}</title>

            <meta
                name="description"
                content={description}
            />

            <meta
                property="og:title"
                content={title}
            />

            <meta
                property="og:description"
                content={description}
            />

            <meta
                property="og:type"
                content="website"
            />
        </Head>
    );
}