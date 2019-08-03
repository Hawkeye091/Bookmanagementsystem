// AIzaSyCpbE--48YIpkNwtz9jKYFLNjpx-wvuTH8

let searchbook_title,searchbook_author

function checkall()
{
  searchbook_title = document.getElementById('book_title').value
  searchbook_author = document.getElementById('book_author').value 
   if (searchbook_author.trim()=="" || searchbook_title.trim()=="") {
    alert("Fill all Search Bars!!") 
    return false
  }
    let items={'booktitle':searchbook_title,
      'bookauthor':searchbook_author
  }
    localStorage.setItem("bookinfo",JSON.stringify(items))
  console.log(searchbook_author)
  console.log(searchbook_title)
  return true
}

