import { useLoaderData, Link, Form } from "react-router-dom";
import { PencilOutline, TrashOutline, EyeOutline } from 'react-ionicons'

const Listing = () => {
    const blogs = useLoaderData();
    return (
        <div className="blogs">
            {blogs.map(blog => (
                <div className="blog__item" key={blog.id}>
                    {blog.title}

                    <div className="blogsTools">
                        <Link to={'/blogs/' + blog.id}>
                            <EyeOutline
                                color={'#00000'}
                                title={'edit'}
                                height="20px"
                                width="20px"
                            />
                        </Link>
                        <Link to={'/blogs/edit/' + blog.id}>
                            <PencilOutline
                                color={'#00000'}
                                title={'edit'}
                                height="20px"
                                width="20px"
                            />
                        </Link>
                        <Form method="DELETE" action='/blogs'>
                            <input type="hidden" name="id" value={blog.id} />
                            <button type="submit">
                                <TrashOutline
                                    color={'#00000'}
                                    title={'delete'}
                                    height="20px"
                                    width="20px"
                                />
                            </button>
                        </Form>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Listing;