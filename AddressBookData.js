class AddressBookData {

    get id() {return this._id;}
    set id(id) {
        this._id = id;
    }

    get text(){return this._text;}
    set text(text){
            this._text =text;
    }

    get address() {return this._address;}
    set address(address) {
        this._address = address;
    }

    get city() {return this._city;}
    set city(city) {
        this._city = city;
    }

    get zip() {return this._zip;}
    set zip(zip) {
        this._zip = zip;
    }

    get number() {return this._number;}
    set number(number) {
        this._number = number;
    }

    toString() {

        return "id="+ this.id + ", Name = "+this.text+", address = "+this.address+", city = "+this.city+
        ", zip = "+this.zip+", number = "+this.number;
    }
}