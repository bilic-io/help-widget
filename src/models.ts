interface InfraConfigurations {
    element?: HTMLElement;
}

/**
 * A model representing all possible configurations
 * that can be done from embedded script. Those settings
 * are passed around in application via Context.
 */
export interface AppConfigurations {
    debug: boolean;
    serviceBaseUrl: string;
    minimized: boolean;
    disableDarkMode: boolean;
    text: {
        minimizedTitle?: string;
        formTitle?: string;
        formSubTitle?: string;
        thankYouTitle?: string;
        thankYouBody?: string;
        faqTitle?: string;
        labelTitle?: string;
    };
    styles: {
        classNameContainer?: string;
    };
}

export type Configurations = InfraConfigurations & AppConfigurations;

export interface FaqModel {
    question: string;
    answer: string;
}

export interface FormModel {
    email: string;
    message: string;
}

export interface BilicModel {
    wallet: string;
}

export interface BlockchainModel {
    data: any;
    meta: any;
}

export interface Blockchains {
    label: string;
    value: string;
}

export interface LabelModel {
    isPrivate: boolean;
    address: string;
    blockchain: string;
    howIknow: string;
    label: string;
    suspect: string;
    tags: string;
    value: string;
}

export interface LabelData {
    data: {
        isPrivate: boolean;
        address: string;
        blockchain: string;
        howIknow: string;
        label: string;
        suspect: string;
        tags: string;
        value: string;
        email: any;
        message: any;
    };
}

export interface WidgetApi {
    getFaq: () => Promise<FaqModel[]>;
    getBilicVerify: (model: BilicModel) => Promise<[]>;
    sendForm: (model: FormModel) => Promise<void>;
    getBlockchains: () => Promise<BlockchainModel>;
    postLabel: (model: LabelData) => Promise<void>;
}

export interface Globals {
    widgetOpen: boolean;
    setWidgetOpen: (open: boolean) => void;
    blockchains: Blockchains[];
    setBlockchains: (blockchains: any) => void;
    labelData: LabelModel;
    setLabelData: (labelData: any) => void;
}
