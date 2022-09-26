import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { editPosts } from "../../store/PostsSlice";

export default function () {
    const p = useSelector((state) => state.post);
    const [post, setPosts] = useState(p);
    const dispatch = useDispatch();

    const handelChange = (e) => {
        setPosts({ ...post, [e.target.name]: e.target.value });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(editPosts(post));
        console.log(post);
    }
    return (
        <div className="container mt-5 mb-3 mr-5" >
            <form className="form-group" onSubmit={handelSubmit}>
                <label >Name</label>
                <input type="text" className="form-control col-4" placeholder="Enter Book Name" value={post.title} onChange={handelChange} name="title" />
                <label >Description</label>
                <input type="text" className="form-control col-4" placeholder="Enter description" value={post.content} onChange={handelChange} name="content" />
                <button type="submit" className="btn btn-primary mt-3" >Edit Book</button>
            </form>
        </div>);
}


