var initialCats = [
    { 
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nicknames:['Smiley']
    },
    { 

        clickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        nicknames:['MAD']
    },
    { 

        clickCount: 0,
        name: 'Shadow',
        imgSrc:'img/1413379559_412a540d29_z.jpg',
        nicknames:['Cool']
    },
    { 

        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        nicknames:['Nami']
    },              
    { 
        clickCount: 0,
        name: 'Sali',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        nicknames:['ZZZzz']
    }               
];
        
var Cat = function(data) {
    this.name = data.name;
    this.numOfClicks = ko.observable(data.clickCount);
    this.imgSrc = data.imgSrc;
    this.nicknames = data.nicknames;
    this.level = ko.computed(function() {
        if (this.numOfClicks() < 10)
            return "level 1" ;
        else if(this.numOfClicks() < 50)
            return "level 2";
        else if(this.numOfClicks() < 100)
            return "level 3!"; 
        else if(this.numOfClicks() < 200)
            return "level 4!";
        else
            return "level 5! well done";
    }, this);
}
var ViewModel = function() {
    var self = this;
    this.catList = ko.observableArray([]);
    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });
    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementClicks = function(){
        self.currentCat().numOfClicks(self.currentCat().numOfClicks() + 1);
    };
    
}

ko.applyBindings(new ViewModel());
