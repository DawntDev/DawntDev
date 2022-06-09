type states = {
    [key: string]: {
        value?: any;
        setter: React.Dispatch<React.SetStateAction<any>>;
    };
};

export interface IRoot { 
    path: string;
    element: () => JSX.Element;
};


export interface IComponentProps {
    active?: string;
    states?: states;
};

export interface IRepo { 
    name: string;
    description: string;
    url: string;
    img: string;
    stars: number;
    forks: number;
    languages: string;
};