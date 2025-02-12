// User Interface
export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    friendCode: string;
}

export interface IAbility {
    info: string;
    effect: string;
}

export interface ICard {
    id: string;
    dex: string;
    setId: string;
    number: string;
    name: string;
    set_code: string;
    set_name?: string | null; // Nullable
    rarity: string;
    color: string;
    type: string;
    hp: string;
    stage: string;
    prew_stage_name?: string | null; // Nullable
    ability: IAbility[];
    weakness: string;
    retreat: string;
}

export interface IOwnedCard {
    id: string;
    cardId: string; // References ICard.id
    name: string;
    imageUrl: string;
    packs: string[];
    type: string;
    rarity: string;
    ex: boolean;
    qtd: number;
}

export interface ISysDeck {
    id: string;
    name: string;
    cards: string[]; // Array of Card IDs
    imageUrl: string;
}
