import { useState, useEffect } from "react";
import { Form, useLoaderData, useRouteLoaderData } from "react-router-dom"
import { authorLoader, tagsLoader } from "../../allLoaders/blogsLoader";
import Select from 'react-select';

const Edit = () => {
    const blog = useLoaderData();
    const [authors, setAuthors] = useState([]),
        [selectedTags, setSelectedTags] = useState([]),
        [tags, setTags] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const loadedTags = await tagsLoader(),
                loadedAuthors = await authorLoader(),
                transformedData = loadedTags.map(item => ({
                    value: item.id,
                    label: item.name
                })),
                transformedAuthor = loadedAuthors.map(item => (
                    {
                        value: String(item.id),
                        label: item.name
                    }));
            setTags(transformedData)
            setAuthors(transformedAuthor);
            
        };
        fetchData();
    }, [])
    const handleTagsChange = (selectedOptions) => {
        const selectedTags = selectedOptions.map(option => option.value);
        setSelectedTags(selectedTags);
    };
    return (
        <Form action="" method="PUT" className="editform">
            <input type="hidden" name="tags" value={selectedTags} />
            <input type="hidden" name="id" value={blog.id} />
            <label htmlFor="title">
                Title
            </label>
            <input type="text" name="title" id="title" defaultValue={blog.title} required />
            <label htmlFor="date">
                created at
            </label>
            <input type="date" name="date" id="date" defaultValue={blog.date} required />
            <label htmlFor="author">
            </label>
            {authors.length && <Select
                className="basic-single"
                name="author"
                defaultValue={authors.find(author => (String(author.value) == blog.author))}
                options={authors}
            />}
            <label htmlFor="tags">
                Tags
            </label>
            {tags.length && <Select
                isMulti
                defaultValue={tags.filter(tag=>(blog.tags.includes(String(tag.value))))}
                name="tags"
                options={tags}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleTagsChange}
            />}
            <label htmlFor="text">
                Text
            </label>
            <textarea name="content" id="text" required defaultValue={blog.content}></textarea>
            <button type="submit" className="savebtn">Save</button>
        </Form>
    )
}
export default Edit;