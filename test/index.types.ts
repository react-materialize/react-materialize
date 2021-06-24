import {IconProps} from "../types/components";

it('accepts style props', () => {
    let props: IconProps  ={
        className: "test",
        left: true,
        large: true,
        style: {
            fontSize: "30px"
        },
        onClick: ()=>undefined,
        // Prop that isn't permitted
        foo: ""
    }
})