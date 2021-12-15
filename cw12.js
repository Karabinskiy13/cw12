// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// let posts=document.getElementsByClassName('posts')[0]
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         console.log(value)
//         for (const divElement of value) {
//             let divPost=document.createElement('div')
//             divPost.innerText=divElement.id
//             let btn=document.createElement('button')
//             btn.innerText='info'
//             btn.onclick=function (){
//                 fetch(`https://jsonplaceholder.typicode.com/posts/${divElement.id}/comments`)
//                     .then(value => value.json())
//                     .then(value => {
//                         let divComment=document.createElement('div')
//                         divPost.appendChild(divComment)
//                         for (const divCommentElement of value) {
//                             let comment=document.createElement('div')
//                             comment.innerText=`${divElement.body}`
//                             divComment.appendChild(comment)
//                         }
//
//                     })
//             }
//             posts.appendChild(divPost)
//             divPost.appendChild(btn)
//         }
//     })