async function traer() {
    const post_numbers = [1, 2, 3];
    for (post_number of post_numbers) {
        await fetch('https://jsonplaceholder.typicode.com/posts/' + post_number + '/comments')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //Metodo para organizar texto con mas caracteres en el body
                data = data.sort(function (a, b) {
                    return a.body.length > b.body.length ? 1 : a.body.length < b.body.length ? -1 : 0;
                });
                let count = 1;
                for (let comment of data) {
                    var title = document.getElementById(post_number + "_" + count + "_title");
                    var email = document.getElementById(post_number + "_" + count + "_email");
                    var body = document.getElementById(post_number + "_" + count + "_body");
                    var id = document.getElementById(post_number + "_" + count + "_id");
                    var post = document.getElementById('post_' + post_number)
                    if (title) {
                        title.innerHTML = comment.name;
                        email.innerHTML = comment.email;
                        body.innerHTML = comment.body;
                        id.innerHTML = comment.id;
                        post.innerHTML = 'ID POST:' + post_number;
                    }
                    count++;
                }
            });
    }
}