let field_id, field_title, field_author,field_stock 

function Add() {
    field_id = document.getElementById('book_id').value
    field_title = document.getElementById('book_title').value
    field_author = document.getElementById('book_author').value
    field_stock = document.getElementById('book_stock').value
    var xhr = new XMLHttpRequest();
    var url = "http://127.0.0.1:8000/spoonshot/books/";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };
    var data = JSON.stringify(
        {"book_id":field_id,
        "book_title":field_title,
        "book_author":field_author,
        "book_stock":field_stock});
    xhr.send(data);
}

function Update() {
    field_id = document.getElementById('book_id').value
    field_title = document.getElementById('book_title').value
    field_author = document.getElementById('book_author').value
    field_stock = document.getElementById('book_stock').value
    var xhr = new XMLHttpRequest();
    var url = `http://127.0.0.1:8000/spoonshot/books/${field_id}`;
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };
    var data = JSON.stringify(
        {"book_id":field_id,
        "book_title":field_title,
        "book_author":field_author,
        "book_stock":field_stock});
    xhr.send(data);
}

function Delete() {
    field_id = document.getElementById('book_id').value
    field_title = document.getElementById('book_title').value
    field_author = document.getElementById('book_author').value
    field_stock = document.getElementById('book_stock').value
    var xhr = new XMLHttpRequest();
    var url = `http://127.0.0.1:8000/spoonshot/books/${field_id}`;
    xhr.open("DELETE", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json);
        }
    };
    xhr.send(null);
}