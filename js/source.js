
$(function() {
    // We can define the function first and then call it using the setTimeout constructor.
    function createPost(post){
        const now = new Date();
        const time =
            now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            });
        $("#eventLog").append(
            `<div class="log-entry">
                <span class="time">[${time}]</span>
                <strong>${post.title}.</strong>
                <strong>${post.body}</strong>
            </div>`
        );
    }

    const posts = [
        {title: "Post One", body: "This is post one from delayed loop."},
        {title: "Post Two", body: "This is post two from delayed loop."}
    ];

    // // Adding a 2-sec delay to mimic an asyc function.
    // setTimeout(()=>{
    //     posts.forEach(post => {
    //         createPost({title: post.title, body: post.body});
    //     });
    // }, 2000);


    function cb(){
        createPost({title: "Post Three", body: "This is post three from callback function."});
    }

    // // Adding a 7-seconds delay and retaining the ID returned by the constructor
    // const timerId = setTimeout( cb, 7000);   


    // let num = 0;
    // const interId = setInterval(() => {
    //     if(num % 2 === 0){
    //         $("body").css("background-color","purple");
    //         $("p span").removeClass("highlight-dark");
    //         $("p span").addClass("highlight"); 
    //     }else{
    //         $("body").css("background-color","orange");
    //         $("p span").removeClass("highlight");
    //         $("p span").addClass("highlight-dark"); 
    //     }
    //     num++;
    // }, 2000);

    // $("button").click( function(){
    //     console.log(timerId);
    //     clearTimeout(timerId);
    //     clearInterval(interId);
    //     console.log("Timer cancelled");
    //     createPost({title: "Timer cancelled", body: "Stopping  interval and possibly post three (if it has not been executed)"});
    // });

});