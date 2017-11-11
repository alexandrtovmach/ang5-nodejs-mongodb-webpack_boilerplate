declare module WebApi {
    export interface IWindow extends Window {
        _injectedData: IInjectedData;
    }

    export interface IInjectedData {
        isLoggedIn: boolean;
        isAdmin: boolean;
        userFirstName: string;
        userLastName: string;
        role: string;
        userPhoto: string;
        userId: string;
    }
}
