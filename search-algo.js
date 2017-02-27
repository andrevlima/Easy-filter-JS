var sa = {
    hasEquals : function(node, obj) {
        for(key in node) {
            if(typeof node[key] == "object") {
            if(search(node[key], obj)) { return true }
            } else {
                if(node[key] == obj) {
                    return true;
                }
            }
        }
        return false;
    },
    hasMatch : function(node, obj) {
		var self = findMatch;
		for(key in obj) {
			if(typeof obj[key] == "object") {
				if(findMatch(node[key], obj[key])) {   
					return false;
				}
			} else {
				if(obj[key] != node[key]) {
					return false;
				}
			}
		}
		return true;
	},
    hasAnyMatch : function(node, obj) {
		var self = findMatch;
		for(key in obj) {
			if(typeof obj[key] == "object") {
				if(findMatch(node[key], obj[key])) {   
					return true;
				}
			} else {
				if(obj[key] == node[key]) {
					return true;
				}
			}
		}
		return false;
	},
    hasAnyLike : function(node, obj) {
		var self = findMatch;
		for(key in obj) {
			if(typeof obj[key] == "object") {
				if(findMatch(node[key], obj[key])) {   
					return true;
				}
			} else {
                if(node[key].toString().toLowerCase().search(obj[key].toString().toLowerCase())) {
					return true;
				}
			}
		}
		return false;
	},
    findEquals : function (arrayObj, searchObj) {
        var items = [];
        for(index in arrayObj) {
            if(this.hasEquals(arrayObj[index], searchObj)) { 
                items.push(arrayObj[index]);
             }
        }
        return items;
    },
    findMatch : function (arrayObj, searchObj) {
        var items = [];
        for(index in arrayObj) {
            if(this.hasMatch(arrayObj[index], searchObj)) { 
                items.push(arrayObj[index]);
             }
        }
        return items;
    },
    findAnyMatch : function (arrayObj, searchObj) {
        var items = [];
        for(index in arrayObj) {
            if(this.hasAnyMatch(arrayObj[index], searchObj)) { 
                items.push(arrayObj[index]);
             }
        }
        return items;
    },
    findAnyLike : function (arrayObj, searchObj) {
        var items = [];
        for(index in arrayObj) {
            if(this.hasAnyLike(arrayObj[index], searchObj)) { 
                items.push(arrayObj[index]);
             }
        }
        return items;
    },    
}