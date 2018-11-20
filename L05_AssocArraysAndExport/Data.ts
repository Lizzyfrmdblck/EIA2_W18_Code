namespace L05_AssocArraysAndExport {
    export interface HeteroPredef {
        text: string;
        value: number;
        truth: boolean;
        words: string[];
    }

    export interface HomoVar {
        [key: string]: HeteroPredef[];
    }

    export let data: HomoVar = {
        "normal": [
            { text: "Some text here", value: 101, truth: true, words: ["what", "ever"] },
            { text: "More text here", value: 42, truth: false, words: ["idk", "google it"] }
        ],
        "reverse": [
            { text: "No text here", value: -101, truth: true, words: ["tahw", "reve"] },
            { text: "Less text here", value: -42, truth: false, words: ["kdi", "ti elgoog"] }
        ]
    };
}
