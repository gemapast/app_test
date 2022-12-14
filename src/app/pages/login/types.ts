export interface MessageType {
    type: string;
    message: string;
}

export interface ValidatorMessagesType {
    email: MessageType[];
    password: MessageType[];
}