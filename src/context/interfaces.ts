type states = {
    [key: string]: {
        value?: any;
        setter: React.Dispatch<React.SetStateAction<any>>;
    };
};

export interface IRouteProps {
    path: string;
    menu: {
        value: boolean;
        setter: React.Dispatch<React.SetStateAction<boolean>>;
    }
    
}

export interface IComponentProps {
    active?: string;
    states?: states;
};