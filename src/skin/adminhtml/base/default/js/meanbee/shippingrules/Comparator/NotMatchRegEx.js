import Comparator from '../Comparator';

export default class NotMatchRegEx extends Comparator
{
    constructor(type) {
        super(type);
    }

    static supportedTypes() {
        return ['string'];
    }

    static identifier(type) {
        type = type.filter((t => ~this.supportedTypes().indexOf(t)).bind(this));
        switch (type[0]) {
        default:
            return 'DOES NOT MATCH REGEX';
        }
    }
    
    getField() {
        let type = this.type.filter((t => ~this.constructor.supportedTypes().indexOf(t)).bind(this));
        switch (type[0]) {
        default:
            return 'CasedText';
        }
    }

    toJSON() {
        let obj = super.toJSON();
        obj.key = 'NotMatchRegEx';
        return obj;
    }
}