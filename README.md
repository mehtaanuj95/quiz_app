# quiz_app

**Tasks to be updated**

- [x] Timer Generation
- [x] Login Functionality
- [x] CSS on Login and quiz page
- [x] submit functionality
- [x] next, prev functionality 
- [ ] fix bug on prev button
- [x] Submission History


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

### Steeing up Login Credentials:
Write the following statements in console of Developer tools of Chrome.
```
localStorage.username = "Your_Name";
localStorage.password = "Password_of_your_choise";
``` 

