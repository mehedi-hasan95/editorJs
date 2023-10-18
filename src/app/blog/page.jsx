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
        <div className="container mx-auto">
            <ol>
                <li className="text-red-600">Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ol>
            {data.result.map((item) => (
                <div key={item.id} className="customEditor">
                    <EditorOutput content={item.desc} />
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
