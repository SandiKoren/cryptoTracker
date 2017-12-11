import { changeFiat } from '../../actions/fiat';

test("It should set change fiat action object", () => {
    const action = changeFiat({ fiat: "eur"})
    
    expect(action).toEqual({
        type: "change_fiat",
        fiat: { fiat : "eur" }
    })
})