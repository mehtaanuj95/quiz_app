# quiz_app

### Setting up Local Storage Database:

For localStorage, we need JSON data. Below is a sample data.
```
data = '[{"name": ["What is Capital of India", "Mumbai", "Chennai", "Kolkata", "Delhi", "Delhi"]},	{"name": ["What is Capital of China", "shanghai", "beijing", "macao", "tibbet", "beijing"]}]';
```

This can be loaded from the console in Developer tools of Chrome by following command
```
localStorage.d = data;
```


```localStorage.index```  stores the current question number in local storage.

```populateData()``` populates the html with content retrieved from localStorage.
```next()``` function is used to navigate forward in quiz.
```prev()``` function is used to navigate backward in quiz.
```save()``` function is used to record answers in quiz.
```submit()``` function is used to submit the quiz

### Setting up Login Credentials:
Write the following statements in console of Developer tools of Chrome.
```
localStorage.username = "Your_Name";
localStorage.password = "Password_of_your_choise";
``` 

### Setting up Score Details:
Write the following statements in console of Developer tools of Chrome before the first execution of application.
```localStorage.score = ",0,0,2,0,5";```




#### Tasks to be updated

**Functionality**
- [x] Timer Generation
- [x] Login
- [x] Score generation
- [x] Submission history
- [x] navigation during quiz 

**Issues**
- [x] correct->incorrect => -1
- [x] one radio button always checked 
- [x] Chart generation

