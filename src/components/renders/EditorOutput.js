"use client";

import dynamic from "next/dynamic";
import CustomImageRenderer from "./CustomImageRenderer";
import CustomCodeRenderer from "./CustomCodeRenderer";

const Output = dynamic(
    async () => (await import("editorjs-react-renderer")).default,
    { ssr: false }
);

const renderers = {
    image: CustomImageRenderer,
    code: CustomCodeRenderer,
};

const style = {
    paragraph: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
    },
    header: {
        fontSize: "5.875rem",
        lineHeight: "1.25rem",
    },
};

const EditorOutput = ({ content }) => {
    return (
        // @ts-expect-error
        <Output
            style={style}
            className="text-sm"
            renderers={renderers}
            data={content}
        />
    );
};

export default EditorOutput;
