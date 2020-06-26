//several models

export class AppVersionDetail {
    private title: string;
    private description: string;

    constructor(o : any) {
       Object.assign(this, o);
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }
}


export class AppVersion {
    private name: string;
    private releaseDate: Date;
    private details: AppVersionDetail[];

    constructor(o : any) {
       this.name = o?.name;
       if (o?.releaseDate){
            this.releaseDate = new Date(o.releaseDate);
       }
       if (o?.details){
            const array = Array.from(o.details);
            const details : Array<AppVersionDetail> = [];
            array.forEach(element => {
                details.push(new AppVersionDetail(element));
            });
            this.details = details;
       }
    }

    public getName(): string {
        return this.name;
    }

    public getReleaseDate(): Date {
        return this.releaseDate;
    }

    public getDetails(): AppVersionDetail[]{
        return this.details;
    }
}

export class AppItem {
    private name: string;
    private description: string;
    private icon: URL;
    private url: URL;
    private urlPrevious: URL;
    private versions: AppVersion[];

    constructor(o : any){
        this.name = o?.name;
        this.description = o?.description;
        if (o?.icon){
            this.icon = new URL(o.icon);
        }
        if (o?.url){
            this.url = new URL(o.url);
        }
        if (o?.urlPrevious){
            this.urlPrevious = new URL(o.urlPrevious);
        }
        if (o?.versions){
            const array = Array.from(o.versions);
            const details : Array<AppVersion> = [];
            array.forEach(element => {
                details.push(new AppVersion(element));
            });
            this.versions = details;
       }
    }

    public getName(): string{
        return this.name;
    }

    public getDescription(): string{
        return this.description;
    }

    public getIcon(): URL{
        return this.icon;
    }

    public getUrl(): URL{
        return this.url;
    }

    public getUrlPrevious(): URL{
        return this.urlPrevious;
    }

    public getVersions(): AppVersion[]{
        return this.versions;
    }

    deserialize(input: any): AppItem {
        Object.assign(this, input);
        return this;
    }
}