class Car implements Ivehicle
{
    //---properties--
    private _gas:number;
    public get gas():number
    {
        return this._gas;
    }
    public set gas(val:number)
    {
        this._gas=val;
    }
    //---ctor---
    constructor(val:number)
    {
        this._gas=val;
    }
    //---methods---
    public refuel(val:number)
    {
        this.gas=this.gas+val;
        return true;
    }
    public drive()
    {
        if(this.gas>0)
        {
            console.log("Driving!");
        }
    }
}