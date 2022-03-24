export interface ITheme {  
    background: string;
    text: string;
    textShadow: string;
    border: string;
};

export interface IRouteProps {
    theme: ITheme;
    width: number;
}

export interface IComponentProps {
    theme: ITheme;
};

