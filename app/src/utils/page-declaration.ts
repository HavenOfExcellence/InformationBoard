//create a interface with page name and page data both as string
export interface Page {
    Name: string;
    Data: string;
}

//create a list of Page objects
export const PageList: Page[] = [
    {Name:"Losing your 11B",
    Data:`# :sparkles: vue3-markdown-it demo :sparkles:

> Welcome to the demo Feel free to type anything in the textarea!
> > *Psst, enable the  option!* :P

https://github.com/JanGuillermo/vue3-markdown-it (*Enable the option!~*)

___

# This is a h1 tag
## This is a h2 tag
### This is a h3 tag
#### This is a h4 tag
##### This is a h5 tag
###### This is a h6 tag

Enable the option to see the magic.

---

## Basic stuff

## Lists

Sometimes you want numbered lists:

1. One
2. Two
3. Three

Sometimes you want bullet points:

* Start a line with a star
* Profit!



`},
    {Name:"Admin Matters",
    Data:`# :sparkles: vue3-markdown-it demo :sparkles:

# This is a h1 tag
## This is a h2 tag
### This is a h3 tag
#### This is a h4 tag
##### This is a h5 tag
###### This is a h6 tag




`},

]