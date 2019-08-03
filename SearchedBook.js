// AIzaSyCpbE--48YIpkNwtz9jKYFLNjpx-wvuTH8
let searchbook_title, searchbook_author

window.onload = function () {
  searchbook_info = localStorage.getItem("bookinfo")
  console.log(searchbook_info)
  searchbook_author = JSON.parse(searchbook_info)['bookauthor']
  searchbook_title = JSON.parse(searchbook_info)['booktitle']
  console.log(searchbook_author)
  console.log(searchbook_title)
  search()
}
let mylist = document.getElementById('bookslist')

function search() {

  fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchbook_title}+inauthor:${searchbook_author}&key=AIzaSyCpbE--48YIpkNwtz9jKYFLNjpx-wvuTH8`)
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function (data) {
          if (data.items.length == 0) {
            document.getElementById('bookslist').innerHTML = `
          <li class="mt-5">
          <h1>OOps! Empty books inventory!</h1>
          <li>
          `
          }
          for (i of data.items) {
            async function avail(it){
              const result = await fetch(`http://127.0.0.1:8000/spoonshot/books/${it['id']}`)
              result.json().then(function (myresponse){
                if (myresponse.status == "Book Not Found"||myresponse.status == "Not In Stock") {
                  let listitem = document.createElement('li')
                  listitem.innerHTML =
                    `
                     <div class="card mt-5">
                        <h5 class="card-header">Book Id : ${it['id']}</h5>
                        <div class="card-body">
                          <h5 class="card-title">Book Title : ${it['volumeInfo']['title']}</h5>
                          <p class="card-text">Book Author : ${it['volumeInfo']['authors']}</p>
                          <a href="#" class="btn btn-primary btn-danger">Not Available</a>
                      </div>
                    `
                  mylist.appendChild(listitem)
                }
                else {
                  let listitem = document.createElement('li')
                  listitem.innerHTML =
                    `
                      <div class="card mt-5">
                        <h5 class="card-header">Book Id : ${it['id']}</h5>
                        <div class="card-body">
                            <h5 class="card-title">Book Title : ${it['volumeInfo']['title']}</h5>
                            <p class="card-text">Book Author : ${it['volumeInfo']['authors']}</p>
                            <a href="#" class="btn btn-primary btn-success">Available</a>
                      </div>
                    `
                  mylist.appendChild(listitem)
                }
              
              //
                  
              })
              
            }
            avail(i)
          }
          //console.log(data);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}
