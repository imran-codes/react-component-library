/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("./types").PageProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        children: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const PageOne: {
    args: {
        title: string;
        children: string;
    };
};
export declare const PageTwo: {
    args: {
        title: string;
        children: string;
    };
};
