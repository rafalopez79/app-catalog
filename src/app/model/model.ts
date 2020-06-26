//several models

export class AppVersionDetail {
    private title: string;
    private description: string;
    private rating: number;

    constructor(o : any) {
       Object.assign(this, o);
    }

    public getTitle(): string {
        return this.title;
    }

    public getDescription(): string {
        return this.description;
    }

    public getRating(): number{
        return this.rating;
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
    private icon: string;
    private url: string;
    private urlPrevious: string;
    private versions: AppVersion[];

    constructor(o : any){
        this.name = o?.name;
        this.description = o?.description;
        if (o?.icon){
            this.icon = o.icon;
        }
        if (o?.url){
            this.url = o.url;
        }
        if (o?.urlPrevious){
            this.urlPrevious = o.urlPrevious;
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

    public getIcon(): string{
        return this.icon;
    }

    public getUrl(): string{
        return this.url;
    }

    public getUrlPrevious(): string{
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

export class AppInfo{
    private applications: AppItem[];

    constructor(o : any) {
       if (o?.applications){
            const array = Array.from(o.applications);
            const details : Array<AppItem> = [];
            array.forEach(element => {
                details.push(new AppItem(element));
            });
            this.applications = details;
       }
    }

    public getApplications() : AppItem[]{
        console.log(this.applications);
        return this.applications;
    }
}