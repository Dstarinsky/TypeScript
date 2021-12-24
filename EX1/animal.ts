abstract class Animal{
    //-----Properties-----
    private _name:string;
    
    public setName(val:string):void
    {
        this._name=val;
    }
    public getName():string
    {
        return this._name;
    }
    //---Ctor---
    public constructor(val:string)
    {
        this._name=val;
    }
    //---Methods--- 
    public abstract eat():void;
    
}