// fitching the variables

var siteName = document.getElementById("siteName");
var siteHtml = document.getElementById("siteHtml");
var tableData = document.getElementById("tableData")
// the empty array
var website = [];
// retriving the local storage
if(localStorage.getItem("bookmarks")!=null){
  website = JSON.parse(localStorage.getItem("bookmarks"))
  displayBookmark()
}


// the addbockmark function
function addBookmark(){

  input = {
    name : siteName.value,
    html : siteHtml.value
  }

  website.push(input);
  console.log(website);

  localStorage.setItem("bookmarks",JSON.stringify(website))
  displayBookmark()
  clearForm();
}
// function to clear the form after each entry
function clearForm(){
  siteName.value = "";
  siteHtml.value = "";
}

// function to display the array of bookmarks after each update/delete/add
function displayBookmark (){

  var newWebsite=``;

  for (i = 0; i < website.length; i++){
    newWebsite +=`<tr>
    <td>${i+1}</td>
    <td>${website[i].name}</td>
    <td><a target="_blank" href="https://${website[i].html}">
                    <button class="visit"> <i class="bi bi-eye-fill"></i>Visit</button>
                  </a>
                </td>
                <td>
                    <button class="delete" onclick="deleteBookmark(${i})"><i class="bi bi-archive-fill"></i>Delete</button>
                </td>
</tr>`
  }

  tableData.innerHTML=newWebsite;
}

// the delete function
function deleteBookmark(index){
  website.splice(index,1)
  localStorage.setItem("bookmarks",JSON.stringify(website))
  displayBookmark()
}