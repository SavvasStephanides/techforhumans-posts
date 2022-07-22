---
series: explained
title: Javascript Promises, explained.
publishDate: 2021/03/23 13:57
thumbnail: promise.png
description: Promises in Javascript are a way of isolating something that will likely take a while to complete. Here's how it works
keywords: javascript, promises, web development
twitterimage: https://savvas.me/assets/promises-tw.png
---

Promises in Javascript are a way of isolating something that will likely take a while to complete. Like getting content from another website, or a file

See this code below:

```js
var hello = "Hello world"
console.log(hello)
var number = 5
var numberSquared = 5 * 5
console.log(numberSquared)
```

You would expect each line to be executed line by line. First, "Hello world" is stored in the "hello" variable, *THEN* it gets printed, *THEN* the number variable gets assigned to number 5, THEN it gets squared and FINALLY, the number 25 gets printed in the console. Makes sense!

What if there's something that takes a bit longer to complete? Like getting data from an API? In languages like Python, you'd expect your program to freeze until it's completed!

See the example Python code below:

```py
print("Getting info...")
data = requests.get("https://api.example.com/data")
print("Data retrieval complete!")
print(data)
```

What you'd expect is that it will print "Getting info...", then freeze until the data from the API is retrieved, and once that's done, print "Data retrieval complete" + data.

And that makes sense if you're running a program from a Terminal. It isn't that confusing to your user.

Javascript however, is different. Javascript is made for the *browser*. If something goes wrong, it can affect the website, which in turn will confuse your visitors. Not something you want!

What I mean is that if you made a request to an API with Javascript and your script gets stuck while it receives the data, your browser gets stuck as well. Buttons stop working, content stops loading, interactions grind to a halt until the API decides gives the data back.

This is where Promises come in to save the day...

Promises is essentially a way of saying:

> "Go get some data from this API. However, I'm not gonna sit here and wait for you because that could take a while and it would freeze my browser"

Promises is also a way of saying:

> "Go get some data from this API. I'm going to move on to the next line, BUT once you've got some data back, I want you to do THIS with them"
Example:

```js
axios.get("https://api.example.com/data")
    .then((response) => {
        console.log(response.data)
        console.log("All done!")
    })

console.log("JS is great!")
```

What the example above essentially does:

* print "Getting some data for you..."
* print "JS is great"
* (once the data is back) print the data and then print "All done!"

That way your browser doesn't freeze while fetching data. So Javascript is happy, your browser is happy, and (most importantly) your user is happy.