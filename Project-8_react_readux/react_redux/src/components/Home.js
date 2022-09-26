import { getPosts } from "../store/PostsSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react";
import("./home.css");

export default function Home() {
    
    const { posts, post } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
        console.log(post);
    }, [dispatch]);
    return (
        <div class="container bootstrap snippets bootdeys">
        <div class="row">
            { posts.map((post)=>
            (
                 <div class="col-md-4 col-sm-6 content-card">
                <div class="card-big-shadow">
                    <div class="card card-just-text" data-background="color" data-color="orange"  data-radius="none">
                        <div class="content">
                            <h6 class="category text-light" >Some Information :</h6>
                            <h4 class="title mt-3"><a href="#">{post.title}</a></h4>
                            <p class="description ">{post.content} </p>
                        </div>
                    </div>
                </div>
            </div>
            ))
           
}
                  </div>
        </div>
    )
}
