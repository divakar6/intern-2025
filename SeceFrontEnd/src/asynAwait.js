/*async function asAw(){
    setTimeout(()=>{
        console.log("The timeout")
        //return ("The timeout");
    },5000);
    return await "This is async/await example";
}
//resolved the promise here
asAw().then(function(output){
    console.log(output) ;
})
//console.log(asAw()) ;*/
//Instagram example
commentCode = async () =>{
    return new Promise((commentingPost) =>{
        setTimeout (() => {
            commentingPost("Comment posted to the post created");
        },5000)
    })
}
likeCode = async () =>{
    return new Promise((likingPost) =>{
        setTimeout (() => {
            likingPost("Liked the post");
        },2000)
    })
}
async function createPost(){
    var post = new Promise((cPost) =>{
        setTimeout(()=>{
            cPost("Post  created successfully")
        },1000);
    })
    //console.log(await post);//await will wait for the given time and execute the output
    var [Post,like,comment] =await Promise.all([post,likeCode(),commentCode()]);
   /* console.log(await post);
    console.log(await likeCode());
    console.log(await commentCode()); */
    console.log(Post);
    console.log(like);
    console.log(comment);
}
//console.log(createPost());
createPost();
