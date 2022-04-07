interface hasId {
    id: string;
}

// Hellre många med få egenskaper än en enda stor som har många egenskaper, som
// troligen inte används av alla klasser som implementerar.
interface hasNotes {
    notes: string;
}

interface isEvil {
    isEvil: boolean;
}

class Person implements hasId, hasNotes, isEvil {
    id: string;
    name: string;
    lastName:string;
    birthDate: Date;
    notes: string;
    isEvil: boolean;
    constructor(id: string) {
        this.id = id;
    }
}

class dailyNotes implements hasId, hasNotes {
    id: string;
    Date: Date;
    notes: string;
    constructor(id: string) {
        this.id = id;
    }
}

class myCats implements hasId, hasNotes, isEvil {
    id: string;
    name: string;
    color: string;
    notes: string;
    isEvil: boolean;
    constructor(id: string) {
        this.id = id;
    }
}

function SaveToDB(object: hasId) {
    console.log(object.id);
} 

function DeleteItem(obj: hasId) {
    console.log(obj.id);
}