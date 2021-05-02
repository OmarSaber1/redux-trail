import axios from "../axios";
import React, { useEffect, useState } from "react";

const FullPost = () => {
  let [{ post  }, postSetState] = useState({
    post: {}
  });
  
  let [{ showPost  }, showPostSetState] = useState({
    showPost : false
  });
 
  useEffect(async() => {
      try{
          await axios
             .get("/posts/1")
             .then((el) => postSetState({ post: el.data }));

             await axios
             .post("/posts",{id:200,title:"added title by me"})
             .then((el) => console.log(el));
      }catch(err){
        console.log(err)
      }
  }, []);


const clickedShow=()=>{
    showPostSetState({showPost : !showPost})
  }

  return (
  <div>
   <h1>id:{post.id}</h1>
   {showPost===true ? <h1>{post.body}</h1> : null}
   <button onClick={clickedShow} className="btn btn-success">Show</button>
   </div>
  )
};

export default FullPost;
