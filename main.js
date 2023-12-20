var siteNameInput = document.getElementById('siteName');
var siteURLInput = document.getElementById('siteURL');

var siteList=[];

if(localStorage.getItem('sites') !== null)  {
    
    siteList = JSON.parse( localStorage.getItem('sites')  );
    displaySiteList();
}

function addSite(){
    if (validSiteURL() === true){
    var site={
        name:siteNameInput.value,
        url:siteURLInput.value,
    };
    
    siteList.push(site);
   // console.log(siteList);
    //clear
    clearInputs();
    //local
    localStorage.setItem('sites' , JSON.stringify(siteList));
    //display
    displaySiteList();
    }
   else{
    alert("pls enter valid URL");
   
   }
}
function clearInputs(){
    siteNameInput.value="";
    siteURLInput.value="";
}
function displaySiteList(){
    var cartona = ``;
    for(var i = 0 ;i < siteList.length;i++) {

    cartona += ` <tr>
    <td class="text-center">${i}</td>
    <td class="text-center">${siteList[i].name}</td>
    
    <td class="text-center"> <a href="https://${siteList[i].url}"  target="_blank">
            <button class="btn btn-success">
                <i class="fa-solid fa-eye pe-2"></i>
                visit
            </button>
        </a>
    </td>
    
    <td class="text-center"><button class="btn btn-danger" onclick="deleteSite(${i})"><i class="fa-solid fa-trash-can pe-2"></i>delete</button></td>
    </tr>`

    }
    document.getElementById('tBody').innerHTML = cartona ;
   // console.log(cartona);
}
function deleteSite(index) {
    siteList.splice(index , 1);
   
    displaySiteList();
}
function validSiteURL() {
    var x = /^[a-z]{1,}\.[a-z]{2,}$/;
    if (x.test(siteURLInput.value) === true) {
      return true;
    } else {
      return false;
    }
  }
  
  