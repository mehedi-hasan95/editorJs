import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import CheckList from "@editorjs/checklist";
import ImageTool from "@editorjs/image";
import axios from "axios";

// Upload Image
const uploadImageToImgbb = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await axios.post(
            "https://api.imgbb.com/1/upload?key=e973935985d3572f1d750c6e3d50c267",
            formData
        );
        if (response.data && response.data.data && response.data.data.url) {
            return response.data.data.url;
        } else {
            throw new Error("Failed to upload image to imgbb.");
        }
    } catch (error) {
        console.error("Error uploading image to imgbb:", error);
        throw error;
    }
};
export const EDITOR_JS_TOOLS = {
    paragraph: {
        class: Paragraph,
        inlineToolbar: true,
    },
    checkList: CheckList,
    list: List,
    header: Header,
    delimiter: Delimiter,
    link: Link,
    image: {
        class: ImageTool,
        config: {
            uploader: {
                async uploadByFile(file) {
                    try {
                        const imageUrl = await uploadImageToImgbb(file);
                        return {
                            success: 1,
                            file: { url: imageUrl },
                        };
                    } catch (error) {
                        return {
                            success: 0,
                            file: { url: null },
                        };
                    }
                },
            },
        },
    },
};
