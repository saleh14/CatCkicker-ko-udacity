var initialCats = [
    { 
        cickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        nicknames:['Smiley']
    },
    { 

        cickCount: 0,
        name: 'Tiger',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        nicknames:['MAD']
    },
    { 

        cickCount: 0,
        name: 'Shadow',
        imgSrc:9648464288_2516b35537_z 'img/1413379559_412a540d29_z.jpg',
        nicknames:['Cool']
    },
    { 

        cickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        nicknames:['Nami']
    },              
    { 
        cickCount: 0,
        name: 'Sali',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        nicknames:['ZZZzz']
    },               
];
        
var Cat = function(data) {
    this.name = ko.observable(data.name);
    this.numOfClicks = ko.observable(data.clickCount);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nicknames = ko.observable(data.nicknames);
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
