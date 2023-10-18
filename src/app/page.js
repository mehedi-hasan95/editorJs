"use client";
import Editor from "@/components/Editor";
import { useState } from "react";

// Initial Data
const INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
    ],
};
export default function Home() {
    const [data, setData] = useState(INITIAL_DATA);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const data = e.target.text.value;
        const newData = { desc: data };
        try {
            const response = await fetch("http://localhost:3000/api/blog", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData),
            });

            const result = await response.json();
            console.log("Success:", result);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Editor
                    data={data}
                    onChange={setData}
                    editorblock="editorjs-container"
                />
                {/* <input type="text" name="text" id="" /> */}
                <input type="submit" value="Sbumit" />
            </form>
        </div>
    );
}
