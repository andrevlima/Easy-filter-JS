# Ez Filter
Simples filter algorithms for Javascript

* Basic, Light weight
* Useful to execute search procedures

Consider the bellow object:
```javascript
//Simple JavaScript Object
var oreally = {
    a: false,
    b: {
        a: "faster slowloris",
        b: {
            number: 10,
            name: "cower"
        }
    },
    c: 20
}

sa.existsEquals(oreally, "cower"); // => true
sa.existsMatch(oreally, { b: { a: "faster slowloris" } }); // => true
```
## Functions:
### Object:
* hasEquals : (**Object, Value**) searches a *Value* in a whole *Object*   
* hasMatch : (**Object, searchObj**) searches for an *Object* that has match with *searchObj* 
* hasAnyMatch : (**Object, searchObj**) searches for an *Object* that has match with *searchObj*

### Array:
* findEquals : (**arrayObject, Value**) find objects that has a *Value* in a whole *Object*
* findMatch : (**arrayObject, searchObj**) find objects that has match with *searchObj*
* findAnyMatch : (**arrayObject, searchObj**) find objects that has any match with *searchObj*
