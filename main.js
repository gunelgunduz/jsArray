// Task1:
// ● Yalnız ədədlərdən ibarət iki array yazın
// ● Bu iki arrayı yeni bir array-də birləşdirin.
// ● Əgər, yeni yaranmış array-in hər bir elementinin uzunluğu 5-ə
// bərabərdirsə, “successful validation” mesajı çıxsın. Əks halda “error, the
// length of the elements is not equal to five” mesajını göstərin.
// ● Nəticəni console-a çıxarın

// function validateArrayLength() {
//     const array1 = [12345, 67890, 11111];
//     const array2 = [22222, 33333, 44444];

   
//     const combinedArray = array1.concat(array2);

//     const isValid = combinedArray.every(num => num.toString().length === 5);

//     if (isValid) {
//         console.log("successful validation");
//     } else {
//         console.log("error, the length of the elements is not equal to five");
//     }
// }

// validateArrayLength();


// Task 2:
// ● Tərkibində adam adları olan bir array yazın.
// ● Daha sonra həmin array-in hər bir elementinin qarşısına “Hello” sözü əlavə
// edin
// ● Nəticəni console-a çıxarın

// function greetNames() {
//     const names = ["Anar", "Elnur", "Selcan", "Fidan"];

   
//     const greetedNames = names.map(name => `Hello ${name}`);


//     console.log(greetedNames);
// }

// greetNames();


// Task 3:
// ● Yalnız ədədlərdən ibarət bir array yazın
// ● Daha sonra array-ın hər bir elementini 2-yə vurun
// ● Yaranan yeni array-in elementlərini böyükdən kiçiyə sıralayın
// ● Sıralama etdikdən sonra array-ın 1-3 index arası elementlərini çıxarıb yeni
// bir array-a təyin edin
// ● Nəticəni console-a çıxarın 

// function manipulateArray() {
//     let numbers = [5, 10, 20, 8, 15];

//     let doubledNumbers = numbers.map(num => num * 2);

//     let sortedNumbers = doubledNumbers.sort((a, b) => b - a);

//     let slicedArray = sortedNumbers.slice(1, 4);

//     console.log(slicedArray);
// }

// manipulateArray();


// Task 4:
// ● Yalnız ədədlərdən ibarət bir array yazın
// ● Bu array-in elementlərinin əvvəlcə cəmini, daha sonra isə fərqini tapın.
// ● Aldığınız cəm və fərqi array-in son elementlərinə əlavə edin
// ● Daha sonra bu array-i kiçikdən böyüyə doğru sıralayın
// ● Nəticəni console-a çıxarın

// function processArray() {

//     let numbers = [10, 20, 30, 40, 50];

//     let sum = numbers.reduce((acc, num) => acc + num, 0); 
//     let difference = numbers.reduce((acc, num) => acc - num); 

//     numbers.push(sum);
//     numbers.push(difference);

//     let sortedNumbers = numbers.sort((a, b) => a - b);

//     console.log(sortedNumbers);
// }

// processArray();


// Task 5:
// ● Tərkibindəki elementləri string-lərdən ibarət olan bir array yazın.
// ● Bu array-in elementlərindən biri “Matrix” olsun
// ● Əgər, bu arrayın hər hansısa bir elementi “Matrix”-ə bərabərdirsə,
// “Success, the index of the Matrix is … (nöqtələrin yerində elementin
// index-ni göstərin)”
// ● Əks halda “Not found” mesajını qaytarsın
// ● Nəticəni console-a çıxarın 

// function findMatrix() {
   
//     let stringArray = ["Apple", "Banana", "Matrix", "Orange", "Grapes"];

//     let index = stringArray.indexOf("Matrix");

//     if (index !== -1) {
//         console.log(`Success, the index of the Matrix is ${index}`);
//     } else {
//         console.log("Not found");
//     }
// }

// findMatrix();


// Task 6:
// const words = ["apple", "cat", "banana", "dog"];
// ● Bu array-in elementlərindən uzunluğu 4-dən böyük olanları filterləyin.
// ● Filterlənmiş elementlərin ilk hərfini böyük hərfə çevirin.
// ● Nəzərə alın ki, son olaraq arrayınız bu formada olmalıdır.
// ["Apple", "Banana"]
// ● Bütün bu əməliyyatlar funksiya daxilində baş versin.
// ● Nəticəni console-a çıxarın. Tapşırığı ən qısa yolla yazın

// function processWords() {
//     const words = ["apple", "cat", "banana", "dog"];


//     const result = words
//         .filter(word => word.length > 4)
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1));

//     console.log(result);
// }

// processWords();


// Task 7:
// const nums = [1, 2 , 3 , 4, 5, 6];
// ● Bu array-in elementlərini cüt rəqəmləri saxlamaqla filterləyin.
// ● Filterlənmiş elementləri kvadrata yüksəldin.
// ● Sonda isə kvadrata yüksəlmiş array elementlərinin cəmini tapın.
// ● Bütün bu əməliyyatlar funksiya daxilində baş versin.
// ● Nəticəni console-a çıxarın. Tapşırığı ən qısa yolla yazın.

// function processNumbers() {
//     const nums = [1, 2, 3, 4, 5, 6];

//     const sum = nums
//         .filter(num => num % 2 === 0)
//         .map(num => num ** 2)
//         .reduce((acc, num) => acc + num, 0);

//     console.log(sum);
// }

// processNumbers();


// Task 8:
// const books = [
// { title: "Book A", year: 1995 },
// { title: "Book B", year: 2005 },
// { title: "Book C", year: 2010 },
// { title: "Book D", year: 1999 },
// { title: "Book E", year: 2017 }
// ];
// ● Bu array-in elementlərini filterləyərək 2000-dən yuxarı olanları saxlayın.
// ● Daha sonra ilinə görə array elementlərini sıralayın.
// ● Bütün bu əməliyyatlar funksiya daxilində baş versin.
// ● Nəticəni console-a çıxarın. Tapşırığı ən qısa yolla yazın

// function processBooks() {
//     const books = [
//         { title: "Book A", year: 1995 },
//         { title: "Book B", year: 2005 },
//         { title: "Book C", year: 2010 },
//         { title: "Book D", year: 1999 },
//         { title: "Book E", year: 2017 }
//     ];

//     const filteredAndSortedBooks = books
//         .filter(book => book.year > 2000)
//         .sort((a, b) => a.year - b.year);

//     console.log(filteredAndSortedBooks);
// }

// processBooks();


// Task 9:
// const names = ["alice", "bob", "amanda", "charlie", "anna"];
// ● Bu array-in elementlərini əlifba sırasıyla filterləyin
// ● Daha sonra elementlərin ilk hərfini böyük hərfə çevirin.
// ● Bütün bu əməliyyatlar funksiya daxilində baş versin.
// ● Nəticəni console-a çıxarın.

// function processNames() {
//     const names = ["alice", "bob", "amanda", "charlie", "anna"];


//     const sortedAndCapitalizedNames = names
//         .sort()
//         .map(name => name.charAt(0).toUpperCase() + name.slice(1));


//     console.log(sortedAndCapitalizedNames);
// }

// processNames();

// Task 10:
// const array1 = ["hello", "", "world"];
// const array2 = ["", "foo", "bar"];
// ● Bu iki array-i birləşdirin.
// ● Array-lərin hər birində boş elementlər var.
// ● Nəzərə alın ki, sizin son nəticədə alacağınız array-in elementləri arasında
// boş element olmasın. Nəticə belə olmalıdır:
// ["hello", "world", "foo", "bar"]
// ● Nəticəni console-a çıxarın. Tapşırığı ən qısa yolla yazın.

// function mergeAndFilterArrays() {
//     const array1 = ["hello", "", "world"];
//     const array2 = ["", "foo", "bar"];

//     const result = array1
//         .concat(array2)
//         .filter(element => element !== "");

//     console.log(result);
// }

// mergeAndFilterArrays();
