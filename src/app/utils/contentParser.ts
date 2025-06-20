import { ContentHighlightType } from "@/lib/enum/post";

export class contentParser {
    private rawHtml: string;

    constructor(rawHtml: string) {
        this.rawHtml = rawHtml;
    }

    private getByType(type: ContentHighlightType): string[] {
        const doc = this.parseHTML();
        const anchors = Array.from(doc.querySelectorAll("a"));

        return anchors
            .filter(a => a.dataset.highlight === type)
            .map(a => a.dataset.value || "") || [];
    }

    getUserList(): string[] {
        return this.getByType(ContentHighlightType.person);
    }

    getHashtags(): string[] {
        return this.getByType(ContentHighlightType.hashTag);
    }

    getAmounts(): number {
        const amounts = this.getByType(ContentHighlightType.amount);
        return amounts[0] ? Number(amounts[0]) : 0;
    }

    private parseHTML(): Document {
        const parser = new DOMParser();
        return parser.parseFromString(this.rawHtml, "text/html");
    }
}
