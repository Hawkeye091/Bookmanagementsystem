let mylist = document.getElementById('bookslist')

fetch('http://127.0.0.1:8000/spoonshot/books/')
  .then(
    function (response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function (data) {
        if(data.length==0)
        {
          document.getElementById('bookslist').innerHTML=`
          <li class="mt-5">
          <h1>OOps! Empty books inventory!</h1>
          <li>
          ` 
        }
        for (i of data) {
          let listitem = document.createElement('li')
          listitem.innerHTML = 
          `
	  		    <div class="card mt-5">
	    			  <h5 class="card-header">Book Title : ${i['book_title']}</h5>
			    	  <div class="card-body">
				      	<h5 class="card-title">Book Author : ${i['book_author']}</h5>
                <p class="card-text">Book Id : ${i['book_id']}</p>
                <button class="btn btn-primary btn-success">Stock : ${i['book_stock']}</button>
				    </div>
          `
          mylist.appendChild(listitem)
        }
        console.log(data);
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });