import { useLoaderData } from "react-router-dom";
import { authorLoaderDetails, tagsLoader } from "../../allLoaders/blogsLoader";
import { useEffect, useState } from "react";

const Details = () => {
    let tagss = null;
    let author = null;
    const blog = useLoaderData();
    const [authors, setAuthors] = useState([]);
    const [tags, setTags] = useState([]);
    useEffect(() => {
        const fct = async () => {
            author = await authorLoaderDetails({ id: blog.author });
            tagss = await tagsLoader();
            tagss = tagss.filter(tag => (blog.tags.includes(String(tag.id))))

            setAuthors(author)
            setTags(tagss)
        };
        fct()

    },[])
    return (
        <div className="blogcontent">
            <h4>
                {blog.title}
            </h4>
            <div className="blogmore">
                <div className="blogtags">
                    {tags && tags.map(tag => (
                        <span>
                            {tag.name}
                        </span>
                    ))}
                </div>
                <small className="authorname">
                    by {authors.name} {blog.date}
                </small>
            </div>
            <div className="blogtxt">

                {blog.content}
            </div>
        </div>
    )
}
export default Details