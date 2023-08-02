


function getBook(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyCGx4jt3mGCcrqCvLOLdSjsOav3oWDmm50&maxResults=40`)
    .then(res => res.json())
    .then(
        data => {
            console.log(data);
            
            function randomize(){
                deleteBooks();
                
                    let randomNumber = Math.floor(Math.random() * 40);//random function 
                    let book = document.createElement('div');//book div
                    book.id = `book${randomNumber}`
                    document.querySelector('.things').appendChild(book);
                    book.style.width = "30%";
                    book.style.textAlign = "center";
                    let image = document.createElement('img'); //image
                    image.id = "bookCover";
                    if(data.items[randomNumber].volumeInfo.imageLinks ){ 
                        image.src = data.items[randomNumber].volumeInfo.imageLinks.thumbnail
                    }else{
                        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
                        image.style.width = "40%"
                    };
                    let title = document.createElement('h4');//title
                    title.id = "title";
                    title.innerHTML =   data.items[randomNumber].volumeInfo.title;
                    let authors = document.createElement('h5');//title
                    authors.innerHTML = data.items[randomNumber].volumeInfo.authors;
                    let description = document.createElement('h6');//title
                    description.innerHTML = data.items[randomNumber].volumeInfo.description;
                    
                    document.querySelector(`#book${randomNumber}`).appendChild(image);
                    document.querySelector(`#book${randomNumber}`).appendChild(title);
                    document.querySelector(`#book${randomNumber}`).appendChild(authors);
                    document.querySelector(`#book${randomNumber}`).appendChild(description);
                    document.querySelector('#showMore').style.display = 'none';
                    document.querySelector('#showLess').style.display = 'none';
                    document.querySelector('footer').style.padding = '0px';
                    
                 
                
            }
            document.querySelector('#randomBook').addEventListener('click', randomize)
            
            function showLess() {
                deleteBooks();
                for(let i = 0 ; i < 9;i++){
                    const mediaQuery = window.matchMedia('(max-width: 900px)')
                    let book = document.createElement('div');//book div
                    book.id = `book${i}`
                    document.querySelector('.things').appendChild(book);
                    book.style.width = "30%";
                    book.style.textAlign = "center";
                    let image = document.createElement('img'); //image
                    image.id = "bookCover";
                    if(data.items[i].volumeInfo.imageLinks ){ 
                        image.src = data.items[i].volumeInfo.imageLinks.thumbnail
                    }else{
                        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
                        image.style.width = "40%"
                    };
                    let title = document.createElement('h4');//title
                    title.id = "title";
                    title.innerHTML =   data.items[i].volumeInfo.title;
                    document.querySelector(`#book${i}`).appendChild(image);
                    document.querySelector(`#book${i}`).appendChild(title);
                    document.querySelector('#showMore').style.display = 'block';
                    document.querySelector('#showLess').style.display = 'none';
                    document.querySelector('#numberOfBooks').innerText = '9';
                    function changeOnResize(x){
                        if (x.matches) {
                        // Then trigger an alert
                        book.style.width = "50%";
                    book.style.textAlign = "center";
                      }else{
                        book.style.width = "30%";
                        book.style.textAlign = "center";
                      }
                    
                    }
                    
                    mediaQuery.addListener(changeOnResize);
                    changeOnResize(mediaQuery);

                    
                }
                
            }
            
            function showMore() {
                for(let i = 9; i < data.items.length;i++){
                    const mediaQuery = window.matchMedia('(max-width: 900px)')
                    let book = document.createElement('div');//book div
                    book.id = `book${i}`
                    document.querySelector('.things').appendChild(book);
                    book.style.width = "30%";
                    book.style.textAlign = "center";
                    let image = document.createElement('img'); //image
                    image.id = "bookCover";
                    if(data.items[i].volumeInfo.imageLinks ){ 
                        image.src = data.items[i].volumeInfo.imageLinks.thumbnail
                    }else{
                        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
                        image.style.width = "40%"
                    };
                    let title = document.createElement('h4');//title
                    title.id = "title";
                    title.innerHTML =   data.items[i].volumeInfo.title;
                    document.querySelector(`#book${i}`).appendChild(image);
                    document.querySelector(`#book${i}`).appendChild(title);
                    document.querySelector('#showMore').style.display = 'none';
                    document.querySelector('#showLess').style.display = 'block';
                    document.querySelector('#numberOfBooks').innerText = '40';
                    function changeOnResize(x){
                        if (x.matches) {
                        // Then trigger an alert
                        book.style.width = "50%";
                    book.style.textAlign = "center";
                      }else{
                        book.style.width = "30%";
                        book.style.textAlign = "center";
                      }
                    
                    }
                    
                    mediaQuery.addListener(changeOnResize);
                    changeOnResize(mediaQuery);
                    
                }
                
            }

            document.querySelector('#showMore').addEventListener('click', showMore);
            document.querySelector('#showLess').addEventListener('click', showLess);
            

            function getBooks(){ //function to get books on load
                for(let i = 0; i < 9;i++){
                    const mediaQuery = window.matchMedia('(max-width: 900px)')
                   
        
                    
                    let book = document.createElement('div');//book div
                    book.id = `book${i}`
                    document.querySelector('.things').appendChild(book);
                    book.style.width = "30%";
                    book.style.textAlign = "center";
                    let image = document.createElement('img'); //image
                    image.id = "bookCover";
                    if(data.items[i].volumeInfo.imageLinks ){ 
                        image.src = data.items[i].volumeInfo.imageLinks.thumbnail
                    }else{
                        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
                        image.style.width = "40%"
                    };
                    let title = document.createElement('h4');//title
                    title.id = "title";
                    title.innerHTML =   data.items[i].volumeInfo.title;
                    document.querySelector(`#book${i}`).appendChild(image);
                    document.querySelector(`#book${i}`).appendChild(title);
                    
                    function changeOnResize(x){
                        if (x.matches) {
                        // Then trigger an alert
                        book.style.width = "50%";
                    book.style.textAlign = "center";
                      }else{
                        book.style.width = "30%";
                        book.style.textAlign = "center";
                      }
                    
                    }
                    
                    mediaQuery.addListener(changeOnResize);
                    changeOnResize(mediaQuery);
                }
                 
                
            }
            deleteBooks();
            getBooks();
           
            
            function sortAlphabetically(){ 
                let originalData = data.items;
                originalData.sort(function(a,b) {
                    if(a.volumeInfo.title> b.volumeInfo.title){
                        return 1;
                    }else{
                        return -1;
                    }
                })
                deleteBooks();
                getBooks();
            }
            function sortTheOtherWay() {
                let originalData = data.items;
                originalData.sort(function(a,b) {
                    if(a.volumeInfo.title < b.volumeInfo.title){
                        return 1;
                    }else{
                        return -1;
                    }
                })
                deleteBooks();
                getBooks();
            }
            function sortYearAscending(){ 
                let originalData = data.items;
                originalData.sort(function(a,b) {
                    if(a.volumeInfo.publishedDate > b.volumeInfo.publishedDate){
                        return 1;
                    }else{
                        return -1;
                    }
                })
                deleteBooks();
                getBooks();
                
            }
            function sortYearDescending(){ 
                let originalData = data.items;
                originalData.sort(function(a,b) {
                    if(a.volumeInfo.publishedDate < b.volumeInfo.publishedDate){
                        return 1;
                    }else{
                        return -1;
                    }
                })
                deleteBooks();
                getBooks();
                
            }
            
          
            let sortButton = document.querySelector('#sortButton');
            sortButton.addEventListener('click', getOptionIndex);

            function deleteBooks(){ //method for deleting current books 
                document.querySelector('.things').innerHTML = '';
            }


            function reload(){
                location.reload();
            }
        document.querySelector('#home').addEventListener('click', reload)
           
           
           
            function getOptionIndex(){
                if(document.getElementById("sortArrangement").selectedIndex === 1){
                    sortAlphabetically()
                }else if(document.getElementById("sortArrangement").selectedIndex === 2){
                    sortTheOtherWay()
                }
                else if(document.getElementById("sortArrangement").selectedIndex === 3){
                    sortYearAscending()
                 }else {
                     sortYearDescending()
                 };
        }
       

        function getChecked(){
            let originalData = data.items;
            if(document.querySelector('#electronicInfo').checked ){
                deleteBooks();
                originalData.forEach(book => {
                    if(book.volumeInfo.categories){
                        if(book.volumeInfo.categories.indexOf('Electronic information resource searching') > -1){
                            let divBook = document.createElement('div');//book div
                    document.querySelector('.things').appendChild(divBook);
                    divBook.style.marginBottom = '700px' 
                    divBook.style.width = "30%";
                    divBook.style.textAlign = "center";
                    let image = document.createElement('img'); //image
                    image.id = "bookCover";
                    if(book.volumeInfo.imageLinks ){ 
                        image.src = book.volumeInfo.imageLinks.thumbnail
                    }else{
                        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
                        image.style.width = "40%"
                    };
                    let title = document.createElement('h4');//title
                    title.id = "title";
                    title.innerHTML =   book.volumeInfo.title;
                    divBook.appendChild(image);
                    divBook.appendChild(title);
                    document.querySelector('#showMore').style.display = 'none';
                    document.querySelector('.name').innerText =`Showing results for Electronic information resource searching`;

                        }
                        
                         
                        
                    }
                    
                });
                
                
            }else if(document.querySelector('#businessAndEconomics').checked ){
                deleteBooks();
                originalData.forEach(book => {
                    if(book.volumeInfo.categories){
                        if(book.volumeInfo.categories.indexOf('Business & Economics') > -1){
                            let divBook = document.createElement('div');//book div
                    document.querySelector('.things').appendChild(divBook);
                    divBook.style.marginBottom = '200px'; 
                    divBook.style.marginTop = '-50px'; 
                    divBook.style.width = "30%";
                    divBook.style.textAlign = "center";
                    let image = document.createElement('img'); //image
                    image.id = "bookCover";
                    if(book.volumeInfo.imageLinks ){ 
                        image.src = book.volumeInfo.imageLinks.thumbnail
                    }else{
                        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
                        image.style.width = "40%"
                    };
                    let title = document.createElement('h4');//title
                    title.id = "title";
                    title.innerHTML =   book.volumeInfo.title;
                    divBook.appendChild(image);
                    divBook.appendChild(title);
                    document.querySelector('#showMore').style.display = 'none';
                    document.querySelector('.name').innerText =`Showing results for Business & Economics`;
                    
                            

                        }
                        
                         
                        
                    }
                    
                });
                  
        }else if(document.querySelector('#history').checked ){
            deleteBooks();
            originalData.forEach(book => {
                if(book.volumeInfo.categories){
                    if(book.volumeInfo.categories.indexOf('History') > -1){
                        let divBook = document.createElement('div');//book div
                document.querySelector('.things').appendChild(divBook);
                divBook.style.marginBottom = '700px' 
                divBook.style.width = "30%";
                divBook.style.textAlign = "center";
                let image = document.createElement('img'); //image
                image.id = "bookCover";
                if(book.volumeInfo.imageLinks ){ 
                    image.src = book.volumeInfo.imageLinks.thumbnail
                }else{
                    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
                    image.style.width = "40%"
                };
                let title = document.createElement('h4');//title
                title.id = "title";
                title.innerHTML =   book.volumeInfo.title;
                divBook.appendChild(image);
                divBook.appendChild(title);
                document.querySelector('#showMore').style.display = 'none';
                document.querySelector('.name').innerText =`Showing results for History`;
                        

                    }
                    
                     
                    
                }
                
            });
              
    }else if(document.querySelector('#languageArtAndDisciplines').checked ){
        deleteBooks();
        originalData.forEach(book => {
            if(book.volumeInfo.categories){
                if(book.volumeInfo.categories.indexOf('Language Arts & Disciplines') > -1){
                    let divBook = document.createElement('div');//book div
            document.querySelector('.things').appendChild(divBook);
            divBook.style.marginBottom = '200px'; 
            divBook.style.marginTop = '-50px'; 
            divBook.style.width = "30%";
            divBook.style.textAlign = "center";
            let image = document.createElement('img'); //image
            image.id = "bookCover";
            if(book.volumeInfo.imageLinks ){ 
                image.src = book.volumeInfo.imageLinks.thumbnail
            }else{
                image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
                image.style.width = "40%"
            };
            let title = document.createElement('h4');//title
            title.id = "title";
            title.innerHTML =   book.volumeInfo.title;
            divBook.appendChild(image);
            divBook.appendChild(title);
            document.querySelector('#showMore').style.display = 'none';
            document.querySelector('.name').innerText =`Showing results for Language Arts & Disciplines`;
                    

                }
                
                 
                
            }
            
        });
          
}else if(document.querySelector('#education').checked ){
    deleteBooks();
    originalData.forEach(book => {
        if(book.volumeInfo.categories){
            if(book.volumeInfo.categories.indexOf('Education') > -1){
                let divBook = document.createElement('div');//book div
        document.querySelector('.things').appendChild(divBook);
        divBook.style.marginBottom = '700px' 
        divBook.style.width = "30%";
        divBook.style.textAlign = "center";
        let image = document.createElement('img'); //image
        image.id = "bookCover";
        if(book.volumeInfo.imageLinks ){ 
            image.src = book.volumeInfo.imageLinks.thumbnail
        }else{
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
            image.style.width = "40%"
        };
        let title = document.createElement('h4');//title
        title.id = "title";
        title.innerHTML =   book.volumeInfo.title;
        divBook.appendChild(image);
        divBook.appendChild(title);
        document.querySelector('#showMore').style.display = 'none';
        document.querySelector('.name').innerText =`Showing results for Education`;
               

            }
            
             
            
        }
        
    });
      
}else if(document.querySelector('#medical').checked ){
    deleteBooks();
    originalData.forEach(book => {
        if(book.volumeInfo.categories){
            if(book.volumeInfo.categories.indexOf('Medical') > -1){
                let divBook = document.createElement('div');//book div
        document.querySelector('.things').appendChild(divBook);
        divBook.style.marginBottom = '700px' 
        divBook.style.width = "30%";
        divBook.style.textAlign = "center";
        let image = document.createElement('img'); //image
        image.id = "bookCover";
        if(book.volumeInfo.imageLinks ){ 
            image.src = book.volumeInfo.imageLinks.thumbnail
        }else{
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
            image.style.width = "40%"
        };
        let title = document.createElement('h4');//title
        title.id = "title";
        title.innerHTML =   book.volumeInfo.title;
        divBook.appendChild(image);
        divBook.appendChild(title);
        document.querySelector('#showMore').style.display = 'none';
        document.querySelector('.name').innerText =`Showing results for Medical`;

            }
            
             
            
        }
        
    });
      
}else if(document.querySelector('#computers').checked ){
    deleteBooks();
    originalData.forEach(book => {
        if(book.volumeInfo.categories){
            if(book.volumeInfo.categories.indexOf('Computers') > -1){
                let divBook = document.createElement('div');//book div
        document.querySelector('.things').appendChild(divBook);
        
        divBook.style.width = "30%";
        divBook.style.textAlign = "center";
        let image = document.createElement('img'); //image
        image.id = "bookCover";
        if(book.volumeInfo.imageLinks ){ 
            image.src = book.volumeInfo.imageLinks.thumbnail
        }else{
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
            image.style.width = "40%"
        };
        let title = document.createElement('h4');//title
        title.id = "title";
        title.innerHTML =   book.volumeInfo.title;
        divBook.appendChild(image);
        divBook.appendChild(title);
        document.querySelector('#showMore').style.display = 'none';
        document.querySelector('.name').innerText =`Showing results for Computers`;

            }
            
             
            
        }
        
    });
      
}else if(document.querySelector('#reference').checked ){
    deleteBooks();
    originalData.forEach(book => {
        if(book.volumeInfo.categories){
            if(book.volumeInfo.categories.indexOf('Reference') > -1){
                let divBook = document.createElement('div');//book div
        document.querySelector('.things').appendChild(divBook);
        divBook.style.marginBottom = '700px' 
        divBook.style.width = "30%";
        divBook.style.textAlign = "center";
        let image = document.createElement('img'); //image
        image.id = "bookCover";
        if(book.volumeInfo.imageLinks ){ 
            image.src = book.volumeInfo.imageLinks.thumbnail
        }else{
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
            image.style.width = "40%"
        };
        let title = document.createElement('h4');//title
        title.id = "title";
        title.innerHTML =   book.volumeInfo.title;
        divBook.appendChild(image);
        divBook.appendChild(title);
        document.querySelector('#showMore').style.display = 'none';
        document.querySelector('.name').innerText =`Showing results for Reference`;

            }
            
             
            
        }
        
    });
      
}else if(document.querySelector('#mathematics').checked ){
    deleteBooks();
    originalData.forEach(book => {
        if(book.volumeInfo.categories){
            if(book.volumeInfo.categories.indexOf('Mathematics') > -1){
                let divBook = document.createElement('div');//book div
        document.querySelector('.things').appendChild(divBook);
        divBook.style.marginBottom = '700px' 
        divBook.style.width = "30%";
        divBook.style.textAlign = "center";
        let image = document.createElement('img'); //image
        image.id = "bookCover";
        if(book.volumeInfo.imageLinks ){ 
            image.src = book.volumeInfo.imageLinks.thumbnail
        }else{
            image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&usqp=CAU"
            image.style.width = "40%"
        };
        let title = document.createElement('h4');//title
        title.id = "title";
        title.innerHTML =   book.volumeInfo.title;
        divBook.appendChild(image);
        divBook.appendChild(title);
        document.querySelector('#showMore').style.display = 'none';
        document.querySelector('.name').innerText =`Showing results for Mathematics`;

            }
            
             
            
        }
        
    });
      
}
    }
        document.querySelector('#filterButton').addEventListener('click', getChecked)
            
                   }   
    )
    .catch(error => {
        console.log(`error ${err}`)
    });
}
getBook();

    

  






