import EditorOutput from "@/components/renders/EditorOutput";

async function getData() {
    const res = await fetch("http://localhost:3000/api/blog");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

const BlogPage = async () => {
    const data = await getData();
    console.log(data);
    return (
        <div>
            {data.result.map((item) => (
                <div key={item.id}>
                    <EditorOutput content={item.desc} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
